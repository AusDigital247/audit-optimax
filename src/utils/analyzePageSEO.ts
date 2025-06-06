import { fetchPageContent, extractTitle, extractMetaTags } from './fetchPageContent';
import { 
  isKeywordPresent, 
  analyzeHeadings, 
  analyzeImages, 
  checkSchemaMarkup,
  hasHttps,
  checkSocialMediaTags,
  checkCanonicalTag,
  calculateKeywordDensity
} from './seoCheckerHelpers';
import { seoPointValues, calculateSEOScore, relevanceTiers } from './seoPointsSystem';
import { SEOCheckItem } from '@/components/SEOCategoryCard';

export const analyzePageSEO = async (url: string, keyword: string = ''): Promise<{
  score: number,
  categories: Array<{title: string, items: SEOCheckItem[]}>,
  contentFetched: boolean,
  relevanceTier?: string,
  metaData?: {
    title?: string;
    description?: string;
    canonical?: string;
    ogTags?: Record<string, string>;
  }
}> => {
  console.log(`Analyzing SEO for URL: ${url}, Keyword: ${keyword}`);
  
  const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
  const urlPath = urlObj.pathname;
  const isSpecificPage = urlPath && urlPath !== "/" && urlPath !== "";
  
  console.log("URL path for analysis:", urlPath);
  console.log("Analyzing specific page (not homepage):", isSpecificPage);
  
  const urlToAnalyze = url.trim();
  console.log("Using exact URL for analysis:", urlToAnalyze);
  
  const { content, success, error } = await fetchPageContent(urlToAnalyze);
  
  const categories: Array<{title: string, items: SEOCheckItem[]}> = [];
  
  if (!success || !content) {
    return {
      score: 0,
      categories: [
        {
          title: "Content Access Error",
          items: [
            {
              name: "Content access failed",
              status: "fail" as const,
              message: error || "We couldn't access the page content. This could be due to CORS restrictions or the site blocking access.",
              points: 0
            },
            {
              name: "URL validation",
              status: "warning" as const,
              message: `We attempted to analyze: ${urlToAnalyze}`,
              points: 0,
              details: {
                found: "No content could be fetched",
                expected: "Valid HTML content for the specific URL",
                explanation: "The URL may be invalid, or the site may be blocking our analyzer."
              }
            }
          ]
        }
      ],
      contentFetched: false
    };
  }

  console.log("Content fetched successfully, length:", content.length);
  
  // Extract metadata once at the beginning to avoid redeclaration
  const pageTitle = extractTitle(content);
  console.log("Extracted page title for validation:", pageTitle);
  
  const extractedMetaTags = extractMetaTags(content);
  console.log("Meta tags found:", Object.keys(extractedMetaTags).length);
  
  const metaDescription = extractedMetaTags['description'];
  console.log("Meta description:", metaDescription);
  
  const ogTags: Record<string, string> = {};
  Object.keys(extractedMetaTags).forEach(key => {
    if (key.startsWith('og:')) {
      ogTags[key] = extractedMetaTags[key];
    }
  });
  
  const canonicalTag = checkCanonicalTag(content);
  
  const metaData = {
    title: pageTitle,
    description: metaDescription,
    canonical: canonicalTag.url,
    ogTags
  };
  
  const urlItems: SEOCheckItem[] = [];
  
  if (keyword) {
    const keywordLower = keyword.toLowerCase().replace(/\s+/g, '-');
    const urlLower = url.toLowerCase();
    
    const exactKeywordInUrl = urlLower.includes(keywordLower) || 
                            urlLower.includes(keyword.toLowerCase().replace(/\s+/g, ''));
    
    const keywordWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length > 2);
    const allWordsInUrl = keywordWords.every(word => urlLower.includes(word));
    const someWordsInUrl = keywordWords.some(word => urlLower.includes(word));
    
    let urlKeywordStatus: "pass" | "fail" | "warning" | "info" = "fail";
    let urlKeywordMessage = `Your URL does not contain the target keyword "${keyword}". Consider including it for better SEO.`;
    let urlKeywordPoints = 0;
    
    if (exactKeywordInUrl) {
      urlKeywordStatus = "pass";
      urlKeywordMessage = `Your URL contains the exact target keyword "${keyword}".`;
      urlKeywordPoints = seoPointValues.urlKeyword;
    } else if (allWordsInUrl) {
      urlKeywordStatus = "warning";
      urlKeywordMessage = `Your URL contains all words from the keyword "${keyword}" but not in the exact order. This is good but exact match would be better.`;
      urlKeywordPoints = seoPointValues.urlKeywordVariation;
    } else if (someWordsInUrl) {
      urlKeywordStatus = "warning";
      urlKeywordMessage = `Your URL contains some words from the keyword "${keyword}". Consider including the full keyword for better SEO.`;
      urlKeywordPoints = Math.floor(seoPointValues.urlKeywordVariation / 2);
    }
    
    urlItems.push({
      name: "URL contains target keyword",
      status: urlKeywordStatus,
      message: urlKeywordMessage,
      points: urlKeywordPoints,
      details: {
        found: url,
        expected: `URL should contain the keyword "${keyword}"`,
        explanation: "URLs that contain relevant keywords can help with SEO ranking."
      }
    });
  }
  
  const isUrlLengthGood = urlPath.length > 0 && urlPath.length <= 75;
  
  urlItems.push({
    name: "URL length",
    status: isUrlLengthGood ? "pass" : urlPath.length > 75 ? "warning" : "fail",
    message: isUrlLengthGood 
      ? "Your URL length is good (under 75 characters)." 
      : urlPath.length > 75 
        ? "Your URL is too long. Consider shortening it to under 75 characters." 
        : "Your URL path is empty. Consider adding descriptive path segments.",
    points: seoPointValues.urlLength,
    details: {
      found: `${urlPath} (${urlPath.length} characters)`,
      expected: "URL path should be between 1 and 75 characters",
      explanation: "Shorter URLs are easier to share, remember and tend to perform better in search results."
    }
  });
  
  const isUrlReadable = /^[a-z0-9-\/]+$/i.test(urlPath) && !urlPath.includes('__') && !urlPath.includes('--');
  
  urlItems.push({
    name: "URL readability",
    status: isUrlReadable ? "pass" : "warning",
    message: isUrlReadable 
      ? "Your URL is human-readable and well-structured." 
      : "Your URL contains special characters or double hyphens. Consider using only lowercase letters, numbers, and single hyphens.",
    points: seoPointValues.urlReadable,
    details: {
      found: urlPath,
      expected: "URL should contain only lowercase letters, numbers, and hyphens",
      explanation: "Clean, readable URLs improve user experience and can help with SEO."
    }
  });
  
  categories.push({
    title: "URL Structure",
    items: urlItems
  });
  
  const titleTagItems: SEOCheckItem[] = [];
  
  if (pageTitle) {
    titleTagItems.push({
      name: "Title tag",
      status: "pass",
      message: `Your page has a title tag: "${pageTitle}"`,
      points: seoPointValues.titleTag,
      details: {
        found: pageTitle,
        expected: "Page should have a title tag",
        explanation: "The title tag is one of the most important on-page SEO elements."
      }
    });
    
    const titleLength = pageTitle.length;
    const isTitleLengthGood = titleLength >= 30 && titleLength <= 60;
    
    titleTagItems.push({
      name: "Title length",
      status: isTitleLengthGood ? "pass" : titleLength < 30 ? "warning" : "fail",
      message: isTitleLengthGood 
        ? `Your title length (${titleLength} characters) is optimal.` 
        : titleLength < 30 
          ? `Your title is too short (${titleLength} characters). Aim for 30-60 characters.` 
          : `Your title is too long (${titleLength} characters). Search engines may truncate titles longer than 60 characters.`,
      points: seoPointValues.titleLength,
      details: {
        found: `"${pageTitle}" (${titleLength} characters)`,
        expected: "Title should be between 30 and 60 characters",
        explanation: "Titles that are too long may get cut off in search results, while titles that are too short may not be descriptive enough."
      }
    });
    
    if (keyword) {
      const exactKeywordInTitle = isKeywordPresent(pageTitle, keyword);
      
      const titleLower = pageTitle.toLowerCase();
      const keywordWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      const allKeywordWordsInTitle = keywordWords.every(word => titleLower.includes(word));
      
      let titleKeywordStatus: "pass" | "fail" | "warning" | "info" = "fail";
      let titleKeywordMessage = `Your title does not contain the target keyword "${keyword}". This is critical for SEO - add it for better rankings.`;
      let titleKeywordPoints = 0;
      
      if (exactKeywordInTitle) {
        titleKeywordStatus = "pass";
        titleKeywordMessage = `Your title contains the exact target keyword "${keyword}". This is excellent for SEO.`;
        titleKeywordPoints = seoPointValues.titleKeyword;
      } else if (allKeywordWordsInTitle) {
        titleKeywordStatus = "warning";
        titleKeywordMessage = `Your title contains all words from the keyword "${keyword}" but not in the exact order. Using the exact phrase would be better.`;
        titleKeywordPoints = seoPointValues.titleKeywordVariation;
      }
      
      titleTagItems.push({
        name: "Keyword in title",
        status: titleKeywordStatus,
        message: titleKeywordMessage,
        points: titleKeywordPoints,
        details: {
          found: pageTitle,
          expected: `Title should contain the keyword "${keyword}"`,
          explanation: "Including your target keyword in the title helps search engines understand what your page is about and is one of the most critical SEO factors."
        }
      });
      
      if (exactKeywordInTitle || allKeywordWordsInTitle) {
        const keywordAtBeginning = pageTitle.toLowerCase().startsWith(keyword.toLowerCase()) || 
                                  pageTitle.toLowerCase().startsWith(`the ${keyword.toLowerCase()}`) ||
                                  pageTitle.toLowerCase().indexOf(keyword.toLowerCase()) < 20 ||
                                  keywordWords.some(word => pageTitle.toLowerCase().startsWith(word));
        
        titleTagItems.push({
          name: "Keyword position in title",
          status: keywordAtBeginning ? "pass" : "warning",
          message: keywordAtBeginning 
            ? "Your keyword is at the beginning of the title, which is optimal." 
            : "Your keyword is not at the beginning of the title. Consider moving it closer to the start for better SEO.",
          points: seoPointValues.titleKeywordPosition,
          details: {
            found: pageTitle,
            expected: `Title should have "${keyword}" near the beginning`,
            explanation: "Keywords placed at the beginning of the title may have more weight in search algorithms."
          }
        });
      }
    }
  } else {
    titleTagItems.push({
      name: "Add a title tag",
      status: "fail",
      message: "Your page is missing a title tag. Add a descriptive title with your main keyword.",
      points: seoPointValues.titleTag,
      details: {
        found: "No title tag found",
        expected: "Page should have a title tag",
        explanation: "The title tag is crucial for SEO and is displayed in search engine results."
      }
    });
    
    if (keyword) {
      titleTagItems.push({
        name: "Use the target keyword in the title tag",
        status: "fail",
        message: `Your page is missing a title tag. Add one that includes your keyword "${keyword}".`,
        points: seoPointValues.titleKeyword,
        details: {
          found: "No title tag found",
          expected: `Title should contain the keyword "${keyword}"`,
          explanation: "Including your target keyword in the title helps search engines understand what your page is about."
        }
      });
    }
  }
  
  if (metaDescription) {
    titleTagItems.push({
      name: "Meta description",
      status: "pass",
      message: `Your page has a meta description: "${metaDescription}"`,
      points: seoPointValues.metaDescription,
      details: {
        found: metaDescription,
        expected: "Page should have a meta description",
        explanation: "Meta descriptions provide a summary of the page content and can impact click-through rates from search results."
      }
    });
    
    const descriptionLength = metaDescription.length;
    const isDescriptionLengthGood = descriptionLength >= 120 && descriptionLength <= 160;
    
    titleTagItems.push({
      name: "Meta description length",
      status: isDescriptionLengthGood ? "pass" : descriptionLength < 120 ? "warning" : "fail",
      message: isDescriptionLengthGood 
        ? `Your meta description length (${descriptionLength} characters) is optimal.` 
        : descriptionLength < 120 
          ? `Your meta description is too short (${descriptionLength} characters). Aim for 120-160 characters.` 
          : `Your meta description is too long (${descriptionLength} characters). Search engines may truncate descriptions longer than 160 characters.`,
      points: seoPointValues.metaDescriptionLength,
      details: {
        found: `"${metaDescription}" (${descriptionLength} characters)`,
        expected: "Meta description should be between 120 and 160 characters",
        explanation: "Descriptions that are too long may get truncated in search results, while those that are too short may not provide enough information."
      }
    });
    
    if (keyword) {
      const exactKeywordInDesc = isKeywordPresent(metaDescription, keyword);
      
      const descLower = metaDescription.toLowerCase();
      const keywordWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      const allKeywordWordsInDesc = keywordWords.every(word => descLower.includes(word));
      
      let descKeywordStatus: "pass" | "fail" | "warning" | "info" = "fail";
      let descKeywordMessage = `Your meta description does not contain the target keyword "${keyword}". This is important for SEO - add it for better rankings.`;
      let descKeywordPoints = 0;
      
      if (exactKeywordInDesc) {
        descKeywordStatus = "pass";
        descKeywordMessage = `Your meta description contains the exact target keyword "${keyword}". This is excellent for SEO.`;
        descKeywordPoints = seoPointValues.metaDescriptionKeyword;
      } else if (allKeywordWordsInDesc) {
        descKeywordStatus = "warning";
        descKeywordMessage = `Your meta description contains all words from the keyword "${keyword}" but not in the exact order. Using the exact phrase would be better.`;
        descKeywordPoints = seoPointValues.metaDescriptionVariation;
      }
      
      titleTagItems.push({
        name: "Keyword in meta description",
        status: descKeywordStatus,
        message: descKeywordMessage,
        points: descKeywordPoints,
        details: {
          found: metaDescription,
          expected: `Meta description should contain the keyword "${keyword}"`,
          explanation: "Including your target keyword in the meta description can improve relevance for search engines and click-through rates."
        }
      });
    }
  } else {
    titleTagItems.push({
      name: "Add a meta description",
      status: "fail",
      message: "Your page is missing a meta description. Add one with 120-160 characters including your target keyword.",
      points: seoPointValues.metaDescription,
      details: {
        found: "No meta description found",
        expected: "Page should have a meta description",
        explanation: "A meta description helps search engines understand your page content and can improve click-through rates."
      }
    });
    
    if (keyword) {
      titleTagItems.push({
        name: "Include keyword in meta description",
        status: "fail",
        message: `You need to add a meta description that includes your keyword "${keyword}".`,
        points: seoPointValues.metaDescriptionKeyword,
        details: {
          found: "No meta description found",
          expected: `Meta description should include the keyword "${keyword}"`,
          explanation: "Including your target keyword in the meta description can improve relevance for search engines."
        }
      });
    }
  }
  
  categories.push({
    title: "Title & Meta Tags",
    items: titleTagItems
  });
  
  const headingsResult = await analyzeHeadings(content, keyword);
  console.log("Headings analysis:", {
    h1Count: headingsResult.h1Count,
    h2Count: headingsResult.h2Count,
    h3Count: headingsResult.h3Count,
    h1WithKeyword: headingsResult.h1WithKeyword,
    h2WithKeyword: headingsResult.h2WithKeyword
  });
  
  const headingItems: SEOCheckItem[] = [];
  
  if (headingsResult.h1Count > 0) {
    headingItems.push({
      name: "Page has an H1 tag",
      status: "pass",
      message: `Your page has ${headingsResult.h1Count} H1 tag(s)`,
      points: seoPointValues.h1Tag,
      details: {
        found: headingsResult.headings.h1,
        expected: "Page should have at least one H1 tag",
        explanation: "The H1 tag is typically the main headline of the page and helps establish topic relevance."
      }
    });
    
    headingItems.push({
      name: "Use only one H1 tag per page",
      status: headingsResult.h1Count === 1 ? "pass" : "warning",
      message: headingsResult.h1Count === 1 
        ? "Your page correctly has exactly one H1 tag" 
        : `Your page has ${headingsResult.h1Count} H1 tags. It's best practice to have only one H1 tag per page.`,
      points: seoPointValues.singleH1,
      details: {
        found: headingsResult.headings.h1,
        expected: "Page should have exactly one H1 tag",
        explanation: "Having multiple H1 tags can dilute the importance of your main heading and confuse search engines about the page's main topic."
      }
    });
    
    if (keyword) {
      const exactKeywordInH1 = headingsResult.h1WithKeyword;
      
      const h1Texts = headingsResult.headings.h1.join(' ');
      const h1Lower = h1Texts.toLowerCase();
      const keywordWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      const allKeywordWordsInH1 = keywordWords.every(word => h1Lower.includes(word));
      
      let h1KeywordStatus: "pass" | "fail" | "warning" | "info" = "fail";
      let h1KeywordMessage = `Your H1 tag does not contain the target keyword "${keyword}". This is important for SEO - add it for better rankings.`;
      let h1KeywordPoints = 0;
      
      if (exactKeywordInH1) {
        h1KeywordStatus = "pass";
        h1KeywordMessage = `Your H1 tag contains the exact target keyword "${keyword}". This is excellent for SEO.`;
        h1KeywordPoints = seoPointValues.h1Keyword;
      } else if (allKeywordWordsInH1) {
        h1KeywordStatus = "warning";
        h1KeywordMessage = `Your H1 tag contains all words from the keyword "${keyword}" but not in the exact order. Using the exact phrase would be better.`;
        h1KeywordPoints = seoPointValues.h1KeywordVariation;
      }
      
      headingItems.push({
        name: "H1 tag includes target keyword",
        status: h1KeywordStatus,
        message: h1KeywordMessage,
        points: h1KeywordPoints,
        details: {
          found: headingsResult.headings.h1,
          expected: `H1 should contain the keyword "${keyword}"`,
          explanation: "Including your target keyword in the H1 heading helps establish relevance for search engines."
        }
      });
    }
  } else {
    headingItems.push({
      name: "Add an H1 tag",
      status: "fail",
      message: "Your page is missing an H1 tag. Add one that includes your main keyword.",
      points: seoPointValues.h1Tag,
      details: {
        found: "No H1 tags found",
        expected: "Page should have an H1 tag",
        explanation: "The H1 tag is an important signal to search engines about the main topic of your page."
      }
    });
    
    if (keyword) {
      headingItems.push({
        name: "Include keyword in H1 tag",
        status: "fail",
        message: `Add an H1 tag with your keyword "${keyword}".`,
        points: seoPointValues.h1Keyword,
        details: {
          found: "No H1 tags found",
          expected: `H1 tag should include the keyword "${keyword}"`,
          explanation: "Including your target keyword in the H1 heading helps establish relevance for search engines."
        }
      });
    }
  }
  
  if (headingsResult.h2Count > 0 || headingsResult.h3Count > 0) {
    headingItems.push({
      name: "Use H2 and H3 headings for content structure",
      status: headingsResult.h2Count > 0 && headingsResult.h3Count > 0 ? "pass" : "warning",
      message: `Your page has ${headingsResult.h2Count} H2 tags and ${headingsResult.h3Count} H3 tags.`,
      points: seoPointValues.h2Tags,
      details: {
        found: `H2 tags: ${headingsResult.headings.h2.length > 0 ? headingsResult.headings.h2.join(', ') : 'None'}, H3 tags: ${headingsResult.headings.h3.length > 0 ? headingsResult.headings.h3.join(', ') : 'None'}`,
        expected: "Page should use both H2 and H3 tags to structure content",
        explanation: "Using proper heading hierarchy helps both users and search engines understand your content structure."
      }
    });
    
    headingItems.push({
      name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
      status: headingsResult.hasProperHierarchy ? "pass" : "warning",
      message: headingsResult.hasProperHierarchy 
        ? "Your page maintains proper heading hierarchy." 
        : "Your heading structure may not follow proper hierarchy. Ensure H1 comes before H2, and H2 before H3.",
      points: seoPointValues.headingStructure,
      details: {
        found: `H1 tags: ${headingsResult.headings.h1.join(', ')}, H2 tags: ${headingsResult.headings.h2.join(', ')}, H3 tags: ${headingsResult.headings.h3.join(', ')}`,
        expected: "Headings should follow proper hierarchy (H1 → H2 → H3)",
        explanation: "A logical heading structure improves accessibility and helps search engines understand your content organization."
      }
    });
    
    if (keyword && headingsResult.h2Count > 0) {
      const exactKeywordInH2 = headingsResult.h2WithKeyword;
      
      const h2Texts = headingsResult.headings.h2.join(' ');
      const h2Lower = h2Texts.toLowerCase();
      const keywordWords = keyword.toLowerCase().split(/\s+/).filter(w => w.length > 2);
      const allKeywordWordsInH2 = keywordWords.some(word => h2Lower.includes(word));
      
      let h2KeywordStatus: "pass" | "fail" | "warning" | "info" = "warning";
      let h2KeywordMessage = `None of your H2 tags contain your keyword "${keyword}". Consider adding it to at least one H2 for better topic relevance.`;
      let h2KeywordPoints = 0;
      
      if (exactKeywordInH2) {
        h2KeywordStatus = "pass";
        h2KeywordMessage = `At least one of your H2 tags contains your keyword "${keyword}". This is good for establishing topic relevance.`;
        h2KeywordPoints = seoPointValues.h2Keyword;
      } else if (allKeywordWordsInH2) {
        h2KeywordStatus = "warning";
        h2KeywordMessage = `Your H2 tags contain some words from your keyword "${keyword}". Using the complete keyword would be better.`;
        h2KeywordPoints = seoPointValues.h2KeywordVariation;
      }
      
      headingItems.push({
        name: "H2 tags include target keyword",
        status: h2KeywordStatus,
        message: h2KeywordMessage,
        points: h2KeywordPoints,
        details: {
          found: headingsResult.headings.h2,
          expected: `At least one H2 tag should contain the keyword "${keyword}"`,
          explanation: "Using your target keyword in subheadings reinforces the topic relevance for search engines."
        }
      });
    }
  } else {
    headingItems.push({
      name: "Use H2 and H3 headings for content structure",
      status: "fail",
      message: "Your page is missing H2 and H3 tags. Use them to structure your content and include relevant keywords.",
      points: seoPointValues.h2Tags,
      details: {
        found: "No H2 or H3 tags found",
        expected: "Page should use H2 and H3 tags to structure content",
        explanation: "Using proper heading hierarchy helps both users and search engines understand your content structure."
      }
    });
  }
  
  categories.push({
    title: "Headings & Content",
    items: headingItems
  });
  
  const imageResults = analyzeImages(content, keyword);
  console.log("Image analysis:", imageResults);
  
  const imageItems: SEOCheckItem[] = [];
  
  if (imageResults.totalImages > 0) {
    imageItems.push({
      name: "Images have alt attributes",
      status: imageResults.withAlt === imageResults.totalImages ? "pass" : 
             imageResults.withAlt > 0 ? "warning" : "fail",
      message: imageResults.withAlt === imageResults.totalImages 
        ? `All ${imageResults.totalImages} images have alt attributes.` 
        : `${imageResults.withAlt} out of ${imageResults.totalImages} images have alt attributes. Add alt text to all images.`,
      points: seoPointValues.imageAltTags,
      details: {
        found: `${imageResults.withAlt} out of ${imageResults.totalImages} images have alt text`,
        expected: "All images should have alt attributes",
        explanation: "Alt text helps search engines understand image content and improves accessibility."
      }
    });
    
    if (keyword) {
      imageItems.push({
        name: "Images alt text includes target keyword",
        status: imageResults.withKeywordInAlt > 0 ? "pass" : "warning",
        message: imageResults.withKeywordInAlt > 0 
          ? `${imageResults.withKeywordInAlt} image(s) have alt text with your keyword "${keyword}".` 
          : `None of your images have alt text with your keyword "${keyword}". Add it to relevant images.`,
        points: seoPointValues.imageAltKeyword,
        details: {
          found: `${imageResults.withKeywordInAlt} images have alt text with keyword`,
          expected: "At least one relevant image should have alt text containing the target keyword",
          explanation: "Including your target keyword in image alt text can help with image SEO."
        }
      });
    }
    
    imageItems.push({
      name: "Images have explicit dimensions",
      status: imageResults.withDimensions === imageResults.totalImages ? "pass" : 
             imageResults.withDimensions > 0 ? "warning" : "info",
      message: imageResults.withDimensions === imageResults.totalImages 
        ? "All images have explicit width and height attributes, which improves page loading." 
        : `${imageResults.withDimensions} out of ${imageResults.totalImages} images have explicit dimensions. Adding dimensions helps prevent layout shifts.`,
      points: seoPointValues.imageDimensions,
      details: {
        found: `${imageResults.withDimensions} out of ${imageResults.totalImages} images have explicit dimensions`,
        expected: "All images should have width and height attributes",
        explanation: "Specifying image dimensions helps browsers allocate space before the image loads, reducing layout shifts."
      }
    });
    
    imageItems.push({
      name: "Images use lazy loading",
      status: imageResults.lazyLoaded > 0 ? "pass" : "warning",
      message: imageResults.lazyLoaded > 0 
        ? `${imageResults.lazyLoaded} images use lazy loading, which improves page performance.` 
        : "None of your images use lazy loading. Consider adding loading='lazy' to improve page performance.",
      points: seoPointValues.imageLazyLoading,
      details: {
        found: `${imageResults.lazyLoaded} out of ${imageResults.totalImages} images use lazy loading`,
        expected: "Images should use lazy loading for better performance",
        explanation: "Lazy loading defers loading images until they're about to enter the viewport, improving initial page load time."
      }
    });
    
    imageItems.push({
      name: "Images use optimized formats",
      status: imageResults.optimizedFormats > 0 ? "pass" : "warning",
      message: imageResults.optimizedFormats > 0 
        ? `${imageResults.optimizedFormats} images use modern formats like WebP or AVIF.` 
        : "None of your images use modern formats like WebP or AVIF. Consider converting images to these formats for better performance.",
      points: seoPointValues.imageOptimizedFormat,
      details: {
        found: `${imageResults.optimizedFormats} out of ${imageResults.totalImages} images use modern formats`,
        expected: "Images should use optimized formats like WebP or AVIF",
        explanation: "Modern image formats provide better compression and quality, improving page load speed."
      }
    });
  } else {
    imageItems.push({
      name: "Page images",
      status: "info",
      message: "No images were detected on your page.",
      points: 0,
      details: {
        found: "No images found on the page",
        explanation: "Images can help engage users and provide visual context for your content."
      }
    });
  }
  
  categories.push({
    title: "Images",
    items: imageItems
  });
  
  const technicalItems: SEOCheckItem[] = [];
  
  const isHttps = hasHttps(url);
  technicalItems.push({
    name: "Site uses HTTPS",
    status: isHttps ? "pass" : "fail",
    message: isHttps 
      ? "Your site correctly uses HTTPS for secure connections." 
      : "Your site is not using HTTPS. Implement SSL for better security and SEO.",
    points: seoPointValues.https,
    details: {
      found: url,
      expected: "URL should start with https://",
      explanation: "HTTPS is a ranking factor and provides a secure connection for your visitors."
    }
  });
  
  technicalItems.push({
    name: "Page has canonical tag",
    status: canonicalTag.has ? "pass" : "warning",
    message: canonicalTag.has 
      ? `Your page has a canonical tag pointing to: ${canonicalTag.url}` 
      : "Your page is missing a canonical tag. Add one to prevent duplicate content issues.",
    points: seoPointValues.canonicalTag,
    details: {
      found: canonicalTag.has ? canonicalTag.url : "No canonical tag found",
      expected: "Page should have a canonical tag",
      explanation: "Canonical tags help prevent duplicate content issues by telling search engines which version of a page is the preferred one."
    }
  });
  
  const hasSchema = checkSchemaMarkup(content);
  console.log("Schema markup check:", hasSchema);
  
  technicalItems.push({
    name: "Page uses structured data / schema markup",
    status: hasSchema ? "pass" : "warning",
    message: hasSchema 
      ? "Your page implements schema markup, which helps search engines understand your content." 
      : "Your page doesn't use schema markup. Consider adding structured data to help search engines better understand your content.",
    points: seoPointValues.schemaMarkup,
    details: {
      found: hasSchema ? "Schema markup detected" : "No schema markup found",
      expected: "Page should use schema.org structured data",
      explanation: "Structured data helps search engines understand your content and can enable rich results in search listings."
    }
  });
  
  const socialMedia = checkSocialMediaTags(content);
  console.log("Social media tags check:", socialMedia);
  
  technicalItems.push({
    name: "Page has Open Graph tags for social media",
    status: socialMedia.openGraph.has ? "pass" : "warning",
    message: socialMedia.openGraph.has 
      ? "Your page has Open Graph tags for better social media sharing." 
      : "Your page is missing Open Graph tags. Add them for better social media sharing experience.",
    points: seoPointValues.openGraphTags,
    details: {
      found: socialMedia.openGraph.has ? "Open Graph tags found" : "No Open Graph tags found",
      expected: "Page should have Open Graph tags",
      explanation: "Open Graph tags control how your page appears when shared on social media platforms like Facebook."
    }
  });
  
  technicalItems.push({
    name: "Page has Twitter Card tags",
    status: socialMedia.twitter.has ? "pass" : "info",
    message: socialMedia.twitter.has 
      ? "Your page has Twitter Card tags for better Twitter sharing." 
      : "Your page is missing Twitter Card tags. Consider adding them for better Twitter sharing experience.",
    points: seoPointValues.twitterCards,
    details: {
      found: socialMedia.twitter.has ? "Twitter Card tags found" : "No Twitter Card tags found",
      expected: "Page should have Twitter Card tags",
      explanation: "Twitter Card tags control how your page appears when shared on Twitter."
    }
  });
  
  categories.push({
    title: "Technical SEO",
    items: technicalItems
  });
  
  const contentItems: SEOCheckItem[] = [];
  
  if (keyword) {
    const keywordDensity = calculateKeywordDensity(content, keyword);
    console.log("Keyword density:", keywordDensity);
    
    let densityStatus: "pass" | "fail" | "warning" | "info" = "fail";
    let densityMessage = `Your keyword "${keyword}" was not found in the content.`;
    let densityPoints = 0;
    
    if (keywordDensity.density > 0) {
      if (keywordDensity.density >= 1 && keywordDensity.density <= 3) {
        densityStatus = "pass";
        densityMessage = `Good keyword density (${keywordDensity.density.toFixed(2)}%) for "${keyword}". Optimal range is 1-3%.`;
        densityPoints = seoPointValues.keywordDensityHigh;
      } else if (keywordDensity.density >= 0.5 && keywordDensity.density < 1) {
        densityStatus = "pass";
        densityMessage = `Acceptable keyword density (${keywordDensity.density.toFixed(2)}%) for "${keyword}". Could be improved to 1-3%.`;
        densityPoints = seoPointValues.keywordDensityMedium;
      } else if (keywordDensity.density > 0.1 && keywordDensity.density < 0.5) {
        densityStatus = "warning";
        densityMessage = `Low keyword density (${keywordDensity.density.toFixed(2)}%) for "${keyword}". Try to increase it to at least 0.5-1%.`;
        densityPoints = seoPointValues.keywordDensityLow;
      } else if (keywordDensity.density > 3) {
        densityStatus = "warning";
        densityMessage = `High keyword density (${keywordDensity.density.toFixed(2)}%) for "${keyword}". This might be seen as keyword stuffing. Aim for 1-3%.`;
        densityPoints = seoPointValues.keywordDensityMedium; // Penalize for potential stuffing
      } else {
        densityStatus = "fail";
        densityMessage = `Very low keyword density (${keywordDensity.density.toFixed(2)}%) for "${keyword}". Increase usage of your keyword.`;
        densityPoints = seoPointValues.keywordDensityLow;
      }
    }
    
    contentItems.push({
      name: "Keyword density",
      status: densityStatus,
      message: densityMessage,
      points: densityPoints,
      details: {
        found: `${keywordDensity.density.toFixed(2)}% (${keywordDensity.count} occurrences in ${keywordDensity.totalWords} words)`,
        expected: "Keyword density should be between 1% and 3%",
        explanation: "Keyword density is the percentage of times a keyword appears on a page compared to the total number of words on the page."
      }
    });
    
    const paragraphs = content.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
    let keywordInFirstParagraph = false;
    
    if (paragraphs.length > 0) {
      const firstParagraph = paragraphs[0].replace(/<[^>]*>/g, '');
      keywordInFirstParagraph = isKeywordPresent(firstParagraph, keyword);
      
      contentItems.push({
        name: "Keyword in first paragraph",
        status: keywordInFirstParagraph ? "pass" : "warning",
        message: keywordInFirstParagraph 
          ? `Your first paragraph includes your keyword "${keyword}", which is good for SEO.` 
          : `Your first paragraph doesn't include your keyword "${keyword}". Consider adding it for better SEO.`,
        points: keywordInFirstParagraph ? seoPointValues.keywordInFirstParagraph : 0,
        details: {
          found: firstParagraph.substring(0, 100) + "...",
          expected: `First paragraph should include the keyword "${keyword}"`,
          explanation: "Including your target keyword early in your content helps search engines understand your page's topic."
        }
      });
    }
    
    contentItems.push({
      name: "Content length",
      status: keywordDensity.totalWords >= 300 ? "pass" : "warning",
      message: keywordDensity.totalWords >= 300 
        ? `Your content has ${keywordDensity.totalWords} words, which is good for SEO.` 
        : `Your content is too short (${keywordDensity.totalWords} words). Aim for at least 300 words for better SEO.`,
      points: seoPointValues.contentLength,
      details: {
        found: `${keywordDensity.totalWords} words`,
        expected: "Content should have at least 300 words",
        explanation: "Longer content tends to rank better as it provides more information to users and search engines."
      }
    });
  }
  
  categories.push({
    title: "Content Analysis",
    items: contentItems
  });
  
  const allChecks = [
    ...urlItems,
    ...titleTagItems,
    ...headingItems,
    ...imageItems,
    ...technicalItems,
    ...contentItems
  ];
  
  const scoreResult = calculateSEOScore(allChecks);
  
  return {
    score: scoreResult.score,
    categories,
    contentFetched: true,
    relevanceTier: scoreResult.relevanceTier,
    metaData
  };
};
