
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
import { seoPointValues } from './seoPointsSystem';
import { SEOCheckItem } from '@/components/SEOCategoryCard';

// Main function to analyze page SEO
export const analyzePageSEO = async (url: string, keyword: string = ''): Promise<{
  score: number,
  categories: Array<{title: string, items: SEOCheckItem[]}>,
  contentFetched: boolean
}> => {
  console.log(`Analyzing SEO for URL: ${url}, Keyword: ${keyword}`);
  
  // Fetch page content with improved fetcher
  const { content, success } = await fetchPageContent(url);
  
  // Prepare categories array
  const categories: Array<{title: string, items: SEOCheckItem[]}> = [];
  
  // If content fetching failed, return limited analysis
  if (!success || !content) {
    return {
      score: 0,
      categories: [
        {
          title: "Content Access Error",
          items: [
            {
              name: "Content access failed",
              status: "fail",
              message: "We couldn't access the page content. This could be due to CORS restrictions or the site blocking access.",
              points: 0
            }
          ]
        }
      ],
      contentFetched: false
    };
  }

  console.log("Content fetched successfully, length:", content.length);
  
  // Basic URL Analysis
  const urlItems: SEOCheckItem[] = [];
  
  // Check URL contains keyword
  if (keyword) {
    const urlHasKeyword = url.toLowerCase().includes(keyword.toLowerCase().replace(/\s+/g, '-')) || 
                         url.toLowerCase().includes(keyword.toLowerCase().replace(/\s+/g, ''));
    
    urlItems.push({
      name: "URL contains target keyword",
      status: urlHasKeyword ? "pass" : "fail",
      message: urlHasKeyword 
        ? `Your URL contains the target keyword "${keyword}".` 
        : `Your URL does not contain the target keyword "${keyword}". Consider including it for better SEO.`,
      points: seoPointValues.urlKeyword
    });
  }
  
  // Check URL length
  const urlPath = new URL(url.startsWith('http') ? url : `https://${url}`).pathname;
  const isUrlLengthGood = urlPath.length > 0 && urlPath.length <= 75;
  
  urlItems.push({
    name: "URL length",
    status: isUrlLengthGood ? "pass" : urlPath.length > 75 ? "warning" : "fail",
    message: isUrlLengthGood 
      ? "Your URL length is good (under 75 characters)." 
      : urlPath.length > 75 
        ? "Your URL is too long. Consider shortening it to under 75 characters." 
        : "Your URL path is empty. Consider adding descriptive path segments.",
    points: seoPointValues.urlLength
  });
  
  // Check URL readability
  const isUrlReadable = /^[a-z0-9-\/]+$/i.test(urlPath) && !urlPath.includes('__') && !urlPath.includes('--');
  
  urlItems.push({
    name: "URL readability",
    status: isUrlReadable ? "pass" : "warning",
    message: isUrlReadable 
      ? "Your URL is human-readable and well-structured." 
      : "Your URL contains special characters or double hyphens. Consider using only lowercase letters, numbers, and single hyphens.",
    points: seoPointValues.urlReadable
  });
  
  categories.push({
    title: "URL Structure",
    items: urlItems
  });
  
  // Title and Meta Tags Analysis with improved parsing
  const titleTagItems: SEOCheckItem[] = [];
  
  // Extract title and meta description with improved parser
  const title = extractTitle(content);
  console.log("Extracted title:", title);
  
  const metaTags = extractMetaTags(content);
  console.log("Meta tags found:", Object.keys(metaTags).length);
  
  const metaDescription = metaTags['description'];
  console.log("Meta description:", metaDescription);
  
  // Check title tag
  if (title) {
    titleTagItems.push({
      name: "Title tag",
      status: "pass",
      message: `Your page has a title tag: "${title}"`,
      points: seoPointValues.titleTag
    });
    
    // Check title length
    const titleLength = title.length;
    const isTitleLengthGood = titleLength >= 30 && titleLength <= 60;
    
    titleTagItems.push({
      name: "Title length",
      status: isTitleLengthGood ? "pass" : titleLength < 30 ? "warning" : "fail",
      message: isTitleLengthGood 
        ? `Your title length (${titleLength} characters) is optimal.` 
        : titleLength < 30 
          ? `Your title is too short (${titleLength} characters). Aim for 30-60 characters.` 
          : `Your title is too long (${titleLength} characters). Search engines may truncate titles longer than 60 characters.`,
      points: seoPointValues.titleLength
    });
    
    // Check if keyword is in title
    if (keyword) {
      const keywordInTitle = isKeywordPresent(title, keyword);
      
      titleTagItems.push({
        name: "Keyword in title",
        status: keywordInTitle ? "pass" : "fail",
        message: keywordInTitle 
          ? `Your title contains the target keyword "${keyword}".` 
          : `Your title does not contain the target keyword "${keyword}". Consider adding it for better SEO.`,
        points: seoPointValues.titleKeyword
      });
      
      // Check keyword position in title
      if (keywordInTitle) {
        const keywordAtBeginning = title.toLowerCase().startsWith(keyword.toLowerCase()) || 
                                 title.toLowerCase().startsWith(`the ${keyword.toLowerCase()}`) ||
                                 title.toLowerCase().indexOf(keyword.toLowerCase()) < 20;
        
        titleTagItems.push({
          name: "Keyword position in title",
          status: keywordAtBeginning ? "pass" : "warning",
          message: keywordAtBeginning 
            ? "Your keyword is at the beginning of the title, which is optimal." 
            : "Your keyword is not at the beginning of the title. Consider moving it closer to the start for better SEO.",
          points: seoPointValues.titleKeywordPosition
        });
      }
    }
  } else {
    titleTagItems.push({
      name: "Add a title tag",
      status: "fail",
      message: "Your page is missing a title tag. Add a descriptive title with your main keyword.",
      points: seoPointValues.titleTag
    });
    
    if (keyword) {
      titleTagItems.push({
        name: "Use the target keyword in the title tag",
        status: "fail",
        message: `Your page is missing a title tag. Add one that includes your keyword "${keyword}".`,
        points: seoPointValues.titleKeyword
      });
    }
  }
  
  // Check meta description
  if (metaDescription) {
    titleTagItems.push({
      name: "Meta description",
      status: "pass",
      message: `Your page has a meta description: "${metaDescription}"`,
      points: seoPointValues.metaDescription
    });
    
    // Check meta description length
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
      points: seoPointValues.metaDescriptionLength
    });
    
    // Check if keyword is in meta description
    if (keyword) {
      const keywordInDescription = isKeywordPresent(metaDescription, keyword);
      
      titleTagItems.push({
        name: "Keyword in meta description",
        status: keywordInDescription ? "pass" : "fail",
        message: keywordInDescription 
          ? `Your meta description contains the target keyword "${keyword}".` 
          : `Your meta description does not contain the target keyword "${keyword}". Consider adding it for better SEO.`,
        points: seoPointValues.metaDescriptionKeyword
      });
    }
  } else {
    titleTagItems.push({
      name: "Add a meta description",
      status: "fail",
      message: "Your page is missing a meta description. Add one with 120-160 characters including your target keyword.",
      points: seoPointValues.metaDescription
    });
    
    if (keyword) {
      titleTagItems.push({
        name: "Include keyword in meta description",
        status: "fail",
        message: `You need to add a meta description that includes your keyword "${keyword}".`,
        points: seoPointValues.metaDescriptionKeyword
      });
    }
  }
  
  categories.push({
    title: "Title & Meta Tags",
    items: titleTagItems
  });
  
  // Headings Analysis with improved detection
  const headingsResult = await analyzeHeadings(content, keyword);
  console.log("Headings analysis:", {
    h1Count: headingsResult.h1Count,
    h2Count: headingsResult.h2Count,
    h3Count: headingsResult.h3Count,
    h1WithKeyword: headingsResult.h1WithKeyword,
    h2WithKeyword: headingsResult.h2WithKeyword
  });
  
  const headingItems: SEOCheckItem[] = [];
  
  // Check H1 tag
  if (headingsResult.h1Count > 0) {
    headingItems.push({
      name: "Page has an H1 tag",
      status: "pass",
      message: `Your page has ${headingsResult.h1Count} H1 tag(s)`,
      points: seoPointValues.h1Tag
    });
    
    // Check if there's only one H1
    headingItems.push({
      name: "Use only one H1 tag per page",
      status: headingsResult.h1Count === 1 ? "pass" : "warning",
      message: headingsResult.h1Count === 1 
        ? "Your page correctly has exactly one H1 tag" 
        : `Your page has ${headingsResult.h1Count} H1 tags. It's best practice to have only one H1 tag per page.`,
      points: seoPointValues.singleH1
    });
    
    // Check if keyword is in H1
    if (keyword) {
      headingItems.push({
        name: "H1 tag includes target keyword",
        status: headingsResult.h1WithKeyword ? "pass" : "fail",
        message: headingsResult.h1WithKeyword 
          ? `Your H1 tag contains your keyword "${keyword}".` 
          : `Your H1 tag does not contain your keyword "${keyword}". Add it for better SEO.`,
        points: seoPointValues.h1Keyword
      });
    }
  } else {
    headingItems.push({
      name: "Add an H1 tag",
      status: "fail",
      message: "Your page is missing an H1 tag. Add one that includes your main keyword.",
      points: seoPointValues.h1Tag
    });
    
    if (keyword) {
      headingItems.push({
        name: "Include keyword in H1 tag",
        status: "fail",
        message: `Add an H1 tag with your keyword "${keyword}".`,
        points: seoPointValues.h1Keyword
      });
    }
  }
  
  // Check H2 and H3 tags
  if (headingsResult.h2Count > 0 || headingsResult.h3Count > 0) {
    headingItems.push({
      name: "Use H2 and H3 headings for content structure",
      status: headingsResult.h2Count > 0 && headingsResult.h3Count > 0 ? "pass" : "warning",
      message: `Your page has ${headingsResult.h2Count} H2 tags and ${headingsResult.h3Count} H3 tags.`,
      points: seoPointValues.h2Tags
    });
    
    // Check heading hierarchy
    headingItems.push({
      name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
      status: headingsResult.hasProperHierarchy ? "pass" : "warning",
      message: headingsResult.hasProperHierarchy 
        ? "Your page maintains proper heading hierarchy." 
        : "Your heading structure may not follow proper hierarchy. Ensure H1 comes before H2, and H2 before H3.",
      points: seoPointValues.headingStructure
    });
    
    // Check if keyword is in H2
    if (keyword && headingsResult.h2Count > 0) {
      headingItems.push({
        name: "H2 tags include target keyword",
        status: headingsResult.h2WithKeyword ? "pass" : "warning",
        message: headingsResult.h2WithKeyword 
          ? `At least one of your H2 tags contains your keyword "${keyword}".` 
          : `None of your H2 tags contain your keyword "${keyword}". Consider adding it to at least one H2 for better SEO.`,
        points: seoPointValues.h2Keyword
      });
    }
  } else {
    headingItems.push({
      name: "Use H2 and H3 headings for content structure",
      status: "fail",
      message: "Your page is missing H2 and H3 tags. Use them to structure your content and include relevant keywords.",
      points: seoPointValues.h2Tags
    });
  }
  
  categories.push({
    title: "Headings & Content",
    items: headingItems
  });
  
  // Images Analysis with improved detection
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
      points: seoPointValues.imageAltTags
    });
    
    if (keyword) {
      imageItems.push({
        name: "Images alt text includes target keyword",
        status: imageResults.withKeywordInAlt > 0 ? "pass" : "warning",
        message: imageResults.withKeywordInAlt > 0 
          ? `${imageResults.withKeywordInAlt} image(s) have alt text with your keyword "${keyword}".` 
          : `None of your images have alt text with your keyword "${keyword}". Add it to relevant images.`,
        points: seoPointValues.imageAltKeyword
      });
    }
    
    imageItems.push({
      name: "Images have explicit dimensions",
      status: imageResults.withDimensions === imageResults.totalImages ? "pass" : 
             imageResults.withDimensions > 0 ? "warning" : "info",
      message: imageResults.withDimensions === imageResults.totalImages 
        ? "All images have explicit width and height attributes, which improves page loading." 
        : `${imageResults.withDimensions} out of ${imageResults.totalImages} images have explicit dimensions. Adding dimensions helps prevent layout shifts.`,
      points: seoPointValues.imageDimensions
    });
    
    imageItems.push({
      name: "Images use lazy loading",
      status: imageResults.lazyLoaded > 0 ? "pass" : "warning",
      message: imageResults.lazyLoaded > 0 
        ? `${imageResults.lazyLoaded} images use lazy loading, which improves page performance.` 
        : "None of your images use lazy loading. Consider adding loading='lazy' to improve page performance.",
      points: seoPointValues.imageLazyLoading
    });
    
    imageItems.push({
      name: "Images use optimized formats",
      status: imageResults.optimizedFormats > 0 ? "pass" : "warning",
      message: imageResults.optimizedFormats > 0 
        ? `${imageResults.optimizedFormats} images use modern formats like WebP or AVIF.` 
        : "None of your images use modern formats like WebP or AVIF. Consider converting images to these formats for better performance.",
      points: seoPointValues.imageOptimizedFormat
    });
  } else {
    imageItems.push({
      name: "Page images",
      status: "info",
      message: "No images were detected on your page.",
      points: 0
    });
  }
  
  categories.push({
    title: "Images",
    items: imageItems
  });
  
  // Technical SEO
  const technicalItems: SEOCheckItem[] = [];
  
  // Check HTTPS
  const isHttps = hasHttps(url);
  technicalItems.push({
    name: "Site uses HTTPS",
    status: isHttps ? "pass" : "fail",
    message: isHttps 
      ? "Your site correctly uses HTTPS for secure connections." 
      : "Your site is not using HTTPS. Implement SSL for better security and SEO.",
    points: seoPointValues.https
  });
  
  // Check canonical tag
  const canonical = checkCanonicalTag(content);
  console.log("Canonical check:", canonical);
  
  technicalItems.push({
    name: "Page has canonical tag",
    status: canonical.has ? "pass" : "warning",
    message: canonical.has 
      ? `Your page has a canonical tag pointing to: ${canonical.url}` 
      : "Your page is missing a canonical tag. Add one to prevent duplicate content issues.",
    points: seoPointValues.canonicalTag
  });
  
  // Check schema markup
  const hasSchema = checkSchemaMarkup(content);
  console.log("Schema markup check:", hasSchema);
  
  technicalItems.push({
    name: "Page uses structured data / schema markup",
    status: hasSchema ? "pass" : "warning",
    message: hasSchema 
      ? "Your page implements schema markup, which helps search engines understand your content." 
      : "Your page doesn't use schema markup. Consider adding structured data to help search engines better understand your content.",
    points: seoPointValues.schemaMarkup
  });
  
  // Check robots meta tag
  const hasRobotsMeta = content.includes('name="robots"') || content.includes("name='robots'");
  const robotsNoindex = content.includes('noindex') || content.includes('none');
  
  technicalItems.push({
    name: "Robots meta tag",
    status: hasRobotsMeta && !robotsNoindex ? "pass" : 
           !hasRobotsMeta ? "info" : 
           "warning",
    message: hasRobotsMeta && !robotsNoindex 
      ? "Your page has a robots meta tag that allows indexing." 
      : !hasRobotsMeta 
        ? "No robots meta tag found. By default, search engines can index your page." 
        : "Your page has a robots meta tag that may prevent indexing (noindex or none directive found).",
    points: hasRobotsMeta && !robotsNoindex ? seoPointValues.robots : 0
  });
  
  categories.push({
    title: "Technical SEO",
    items: technicalItems
  });
  
  // Social Media
  const socialResults = checkSocialMediaTags(content);
  console.log("Social media check:", {
    openGraph: socialResults.openGraph.has,
    twitter: socialResults.twitter.has
  });
  
  const socialItems: SEOCheckItem[] = [];
  
  socialItems.push({
    name: "Implement Open Graph tags for social sharing",
    status: socialResults.openGraph.has ? "pass" : "fail",
    message: socialResults.openGraph.has 
      ? `Your page has Open Graph tags (${Object.keys(socialResults.openGraph.tags).length} found).` 
      : "Your page is missing Open Graph tags. Add og:title, og:description, and og:image.",
    points: seoPointValues.openGraphTags
  });
  
  socialItems.push({
    name: "Implement Twitter Cards",
    status: socialResults.twitter.has ? "pass" : "warning",
    message: socialResults.twitter.has 
      ? `Your page has Twitter Card tags (${Object.keys(socialResults.twitter.tags).length} found).` 
      : "Your page is missing Twitter Card tags. Add twitter:card, twitter:title, and twitter:description.",
    points: seoPointValues.twitterCards
  });
  
  categories.push({
    title: "Social Media",
    items: socialItems
  });
  
  // Performance
  const performanceItems: SEOCheckItem[] = [];
  
  // Check page speed indicators
  const hasResourceHints = content.includes('rel="preload"') || 
                           content.includes('rel="prefetch"') || 
                           content.includes('rel="dns-prefetch"');
  
  performanceItems.push({
    name: "Use resource hints for faster loading",
    status: hasResourceHints ? "pass" : "warning",
    message: hasResourceHints 
      ? "Your page uses resource hints like preload, prefetch, or dns-prefetch for faster loading." 
      : "Your page doesn't use resource hints. Consider adding preload, prefetch, or dns-prefetch for critical resources.",
    points: seoPointValues.resourceHints
  });
  
  // Check for minified resources
  const hasMinifiedJs = !content.includes('.js"></script>') || content.includes('.min.js"></script>');
  const hasMinifiedCss = !content.includes('.css">') || content.includes('.min.css">');
  
  performanceItems.push({
    name: "Minify JavaScript and CSS",
    status: hasMinifiedJs && hasMinifiedCss ? "pass" : "warning",
    message: hasMinifiedJs && hasMinifiedCss 
      ? "Your page appears to use minified JavaScript and CSS." 
      : "Your page may have unminified resources. Consider minifying JavaScript and CSS files.",
    points: seoPointValues.minifiedResources
  });
  
  // Check for mobile-friendly indicators
  const hasViewport = content.includes('name="viewport"') && content.includes('width=device-width');
  
  performanceItems.push({
    name: "Mobile-friendly viewport",
    status: hasViewport ? "pass" : "fail",
    message: hasViewport 
      ? "Your page has a proper viewport meta tag for mobile devices." 
      : "Your page is missing a proper viewport meta tag. Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">.",
    points: seoPointValues.viewport
  });
  
  categories.push({
    title: "Performance & Mobile",
    items: performanceItems
  });
  
  // Content Analysis
  const contentItems: SEOCheckItem[] = [];
  
  // Keyword density analysis
  if (keyword) {
    const keywordDensity = calculateKeywordDensity(content, keyword);
    console.log("Keyword density analysis:", keywordDensity);
    
    contentItems.push({
      name: "Keyword density",
      status: keywordDensity.importance === 'medium' ? "pass" : 
             keywordDensity.importance === 'low' ? "warning" : 
             keywordDensity.importance === 'high' ? "warning" : "fail",
      message: keywordDensity.importance === 'medium' 
        ? `Good keyword density (${keywordDensity.density.toFixed(2)}%). Your keyword appears ${keywordDensity.count} times in ${keywordDensity.totalWords} words.` 
        : keywordDensity.importance === 'low' 
          ? `Low keyword density (${keywordDensity.density.toFixed(2)}%). Your keyword appears only ${keywordDensity.count} times in ${keywordDensity.totalWords} words.` 
          : keywordDensity.importance === 'high' 
            ? `High keyword density (${keywordDensity.density.toFixed(2)}%). This might appear as keyword stuffing. Aim for 0.5% to 2.5%.` 
            : `Your keyword was not found in the page content. Make sure to use your target keyword naturally throughout the content.`,
      points: keywordDensity.importance === 'medium' ? seoPointValues.keywordDensityGood : 
              keywordDensity.importance === 'low' ? seoPointValues.keywordDensityOk : 0
    });
    
    // Content quality indicators
    const contentLength = keywordDensity.totalWords;
    const hasSubstantialContent = contentLength >= 300;
    
    contentItems.push({
      name: "Content length",
      status: contentLength >= 800 ? "pass" : 
             contentLength >= 300 ? "warning" : "fail",
      message: contentLength >= 800 
        ? `Your page has substantial content (${contentLength} words).` 
        : contentLength >= 300 
          ? `Your page has ${contentLength} words. Consider adding more comprehensive content (aim for 800+ words).` 
          : `Your page has insufficient content (${contentLength} words). Search engines prefer pages with substantial, valuable content.`,
      points: seoPointValues.contentLength
    });
  }
  
  categories.push({
    title: "Content Analysis",
    items: contentItems
  });
  
  // Calculate overall score based on all checks
  const allChecks = categories.flatMap(category => category.items);
  const totalPossiblePoints = allChecks
    .filter(check => check.status !== 'info')
    .reduce((total, check) => total + (check.points || 1), 0);
  
  const earnedPoints = allChecks.reduce((total, check) => {
    if (check.status === 'pass') return total + (check.points || 1);
    if (check.status === 'warning') return total + ((check.points || 1) * 0.5);
    return total;
  }, 0);
  
  const overallScore = totalPossiblePoints > 0 ? Math.round((earnedPoints / totalPossiblePoints) * 100) : 0;
  
  return {
    score: overallScore,
    categories,
    contentFetched: true
  };
};
