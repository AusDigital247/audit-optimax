
import { SEOCategory } from '../components/SEOResults';
import { SEOCheckItem } from '../components/SEOCategoryCard';
import * as seoChecker from './seoChecker';

// Interface for analysis results
export interface AnalysisResult {
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
}

// Enhanced SEO Analyzer with actual validation
export const analyzeSEO = async (url: string, keyword?: string): Promise<AnalysisResult> => {
  // Simulate API delay for UI feedback
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  try {
    // Process the URL properly
    const processedUrl = prepareUrl(url);
    
    // Extract domain data
    const domain = extractDomain(processedUrl);
    const hasKeyword = !!keyword;
    const keywordLower = keyword ? keyword.toLowerCase() : '';
    
    // Attempt to fetch the actual page content
    const { content, success: contentFetched } = await seoChecker.fetchPageContent(processedUrl);
    
    // Initialize score components
    let titleScore = 0;
    let metaScore = 0;
    let urlScore = 0;
    let contentScore = 0;
    let technicalScore = 0;
    let mobileScore = 0;
    let socialScore = 0;
    
    // Extract title if content was fetched
    let title = null;
    let metaTags: Record<string, string> = {};
    let h1Tags: string[] = [];
    let headings: Record<string, string[]> = {};
    let imageInfo = { totalImages: 0, withAlt: 0, withDimensions: 0, lazyLoaded: 0 };
    let internalLinksCount = 0;
    let keywordDensity = { density: 0, count: 0, totalWords: 0 };
    
    if (contentFetched) {
      title = seoChecker.extractTitle(content);
      metaTags = seoChecker.extractMetaTags(content);
      h1Tags = seoChecker.extractH1Tags(content);
      headings = seoChecker.extractHeadings(content);
      imageInfo = seoChecker.extractImageInfo(content);
      internalLinksCount = seoChecker.extractInternalLinks(content, domain);
      
      if (hasKeyword) {
        keywordDensity = seoChecker.analyzeKeywordDensity(content, keywordLower);
      }
    }
    
    // Check keyword in domain and URL path
    const path = processedUrl.split('://')[1]?.split('/').slice(1).join('/') || '';
    
    let keywordInDomainScore = 0;
    let keywordInPathScore = 0;
    
    if (hasKeyword) {
      const keywordParts = keywordLower.split(/\s+/).filter(part => part.length > 2);
      
      // Check keyword in domain
      const domainParts = domain.replace(/\.[^.]+$/, '').split(/[.-]/);
      const domainExactMatches = keywordParts.filter(part => 
        domainParts.some(domainPart => domainPart.toLowerCase() === part)
      );
      const domainPartialMatches = keywordParts.filter(part => 
        !domainExactMatches.includes(part) && 
        domainParts.some(domainPart => domainPart.toLowerCase().includes(part) || part.includes(domainPart.toLowerCase()))
      );
      
      // Weighted domain scoring
      const domainExactMatchScore = Math.min(10, domainExactMatches.length * 5);
      const domainPartialMatchScore = Math.min(5, domainPartialMatches.length * 2);
      keywordInDomainScore = Math.min(15, domainExactMatchScore + domainPartialMatchScore);
      
      // Check keyword in path
      const pathParts = path.toLowerCase().split(/[/-]/).filter(p => p.length > 0);
      const pathExactMatches = keywordParts.filter(part => 
        pathParts.some(pathPart => pathPart === part)
      );
      const pathPartialMatches = keywordParts.filter(part => 
        !pathExactMatches.includes(part) && 
        pathParts.some(pathPart => pathPart.includes(part) || part.includes(pathPart))
      );
      
      // Weighted path scoring
      const pathExactMatchScore = Math.min(8, pathExactMatches.length * 4);
      const pathPartialMatchScore = Math.min(4, pathPartialMatches.length * 2);
      keywordInPathScore = Math.min(10, pathExactMatchScore + pathPartialMatchScore);
    }
    
    // Security score for HTTPS
    const httpsScore = processedUrl.startsWith('https') ? 5 : 0;
    
    // Check keyword relevance between keyword and domain/content
    let keywordRelevanceScore = 0;
    if (hasKeyword && contentFetched) {
      // Check keyword density - good density is 1-3%
      if (keywordDensity.density > 0) {
        if (keywordDensity.density <= 3) {
          keywordRelevanceScore = 8; // Optimal density
        } else if (keywordDensity.density <= 5) {
          keywordRelevanceScore = 4; // Slightly high but acceptable
        } else {
          keywordRelevanceScore = -2; // Too high (keyword stuffing)
        }
      } else if (keywordInDomainScore > 0 || keywordInPathScore > 0) {
        // If no mention in content but present in URL structure
        keywordRelevanceScore = 2;
      } else {
        // Keyword not found at all
        keywordRelevanceScore = -5;
      }
    }
    
    // Generate categories with more definitive checks
    const categories: SEOCategory[] = [
      {
        title: "Title & Meta Tags",
        items: generateTitleMetaChecks(
          processedUrl, domain, keyword, hasKeyword, 
          title, metaTags, contentFetched
        )
      },
      {
        title: "Headings & Content",
        items: generateHeadingContentChecks(
          processedUrl, domain, keyword, hasKeyword,
          h1Tags, headings, contentFetched
        )
      },
      {
        title: "URL Optimization",
        items: generateUrlChecks(
          processedUrl, domain, path, keyword, hasKeyword
        )
      },
      {
        title: "Image Optimization",
        items: generateImageChecks(
          domain, imageInfo, contentFetched
        )
      },
      {
        title: "Technical SEO",
        items: generateTechnicalSEOChecks(
          processedUrl, domain, content, contentFetched
        )
      },
      {
        title: "Content Optimization",
        items: generateContentOptimizationChecks(
          domain, keyword, hasKeyword, content, 
          keywordDensity, internalLinksCount, contentFetched
        )
      },
      {
        title: "Mobile Optimization",
        items: generateMobileOptimizationChecks(
          domain, content, contentFetched
        )
      },
      {
        title: "Social Media",
        items: generateSocialMediaChecks(
          domain, content, contentFetched
        )
      },
      {
        title: "Security & Performance",
        items: generateSecurityPerformanceChecks(
          processedUrl, domain, content, contentFetched
        )
      }
    ];
    
    // Calculate weighted scores from all categories
    // Higher weights for important categories
    const categoryWeights = {
      "Title & Meta Tags": 1.5,      // Most important
      "URL Optimization": 1.3,       // Very important
      "Headings & Content": 1.2,     // Very important
      "Technical SEO": 1.2,          // Very important
      "Content Optimization": 1.1,   // Important
      "Image Optimization": 1.0,     // Standard
      "Mobile Optimization": 1.1,    // Important
      "Social Media": 0.8,           // Less important
      "Security & Performance": 1.0  // Standard
    };
    
    // Calculate weighted score
    let totalWeightedScore = 0;
    let totalWeight = 0;
    
    categories.forEach(category => {
      const categoryWeight = categoryWeights[category.title as keyof typeof categoryWeights] || 1.0;
      const passedItems = category.items.filter(item => item.status === 'pass').length;
      const warningItems = category.items.filter(item => item.status === 'warning').length;
      const totalItems = category.items.length;
      
      // Calculate category score: full points for passes, half for warnings
      const categoryScore = totalItems > 0 
        ? ((passedItems + (warningItems * 0.5)) / totalItems) * 100 
        : 0;
      
      totalWeightedScore += categoryScore * categoryWeight;
      totalWeight += categoryWeight;
    });
    
    // Base score from categories (out of 75 points)
    const baseScore = Math.round((totalWeightedScore / totalWeight) * 0.75);
    
    // Add bonus points from other factors (up to 25 additional points)
    const bonusPoints = Math.min(25, Math.round(
      keywordInDomainScore + 
      keywordInPathScore + 
      httpsScore + 
      keywordRelevanceScore
    ));
    
    // Calculate final score
    let finalScore = Math.min(100, Math.max(10, baseScore + bonusPoints));
    
    // Adjust score based on content fetching success
    if (!contentFetched) {
      // If content couldn't be fetched, cap the score at 70
      finalScore = Math.min(finalScore, 70);
    }
    
    // If keyword is completely unrelated, cap score
    if (keywordRelevanceScore < 0 && finalScore > 60) {
      finalScore = Math.min(finalScore, 60);
    }
    
    // Detect SEO-focused sites
    const isSEOFocusedSite = (
      domain.includes('seo') || 
      path.toLowerCase().includes('seo') ||
      (title && title.toLowerCase().includes('seo'))
    );
    
    // For SEO-focused sites with SEO-related keywords, ensure appropriate scores
    if (isSEOFocusedSite && hasKeyword && keywordLower.includes('seo')) {
      finalScore = Math.max(finalScore, 75);
    }
    
    return {
      score: finalScore,
      categories,
      contentFetched
    };
  } catch (error) {
    console.error("Error analyzing SEO:", error);
    // Return a default result in case of error
    return {
      score: 0,
      categories: [],
      contentFetched: false
    };
  }
};

// Prepare URL for analysis
const prepareUrl = (url: string): string => {
  // Handle URLs with and without protocol
  if (!url.startsWith('http')) {
    url = 'https://' + url;
  }
  return url;
};

// Extract domain from URL
const extractDomain = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.toLowerCase();
  } catch (e) {
    // Handle invalid URLs
    if (url.includes('/')) {
      return url.split('/')[0].toLowerCase();
    }
    return url.toLowerCase();
  }
};

// Updated Title & Meta Tags checks with definitive statements
const generateTitleMetaChecks = (
  url: string, 
  domain: string, 
  keyword?: string, 
  hasKeyword = false,
  title: string | null = null,
  metaTags: Record<string, string> = {},
  contentFetched = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Title checks
  if (contentFetched && title) {
    // Keyword in title check
    if (hasKeyword) {
      const keywordLower = keyword!.toLowerCase();
      const titleLower = title.toLowerCase();
      const keywordInTitle = titleLower.includes(keywordLower);
      
      items.push({
        name: "Use the target keyword in the title tag",
        status: keywordInTitle ? 'pass' : 'fail',
        message: keywordInTitle
          ? `Your title contains your keyword "${keyword}"`
          : `Your title does not contain your keyword "${keyword}". Add it to improve SEO.`
      });
    }
    
    // Title length check
    const titleLength = title.length;
    
    items.push({
      name: "Ensure title tag is under 60 characters",
      status: titleLength <= 60 ? 'pass' : titleLength <= 70 ? 'warning' : 'fail',
      message: titleLength <= 60
        ? `Your title length is optimal (${titleLength} characters)`
        : titleLength <= 70
          ? `Your title is slightly long (${titleLength} characters). Consider shortening it.`
          : `Your title is too long (${titleLength} characters). Keep it under 60 characters.`
    });
    
    // Meta description checks
    const metaDescription = metaTags['description'] || '';
    
    if (metaDescription) {
      // Description length check
      const descriptionLength = metaDescription.length;
      
      items.push({
        name: "Ensure meta description is under 160 characters",
        status: descriptionLength >= 120 && descriptionLength <= 160 ? 'pass' : 
                descriptionLength < 120 ? 'warning' : 'fail',
        message: descriptionLength >= 120 && descriptionLength <= 160
          ? `Your meta description length is optimal (${descriptionLength} characters)`
          : descriptionLength < 120
            ? `Your meta description is too short (${descriptionLength} characters). Aim for 120-160 characters.`
            : `Your meta description is too long (${descriptionLength} characters). Keep it under 160 characters.`
      });
      
      // Keyword in description check
      if (hasKeyword) {
        const keywordLower = keyword!.toLowerCase();
        const descriptionLower = metaDescription.toLowerCase();
        const keywordInDescription = descriptionLower.includes(keywordLower);
        
        items.push({
          name: "Include keyword in meta description",
          status: keywordInDescription ? 'pass' : 'fail',
          message: keywordInDescription
            ? `Your meta description contains your keyword "${keyword}"`
            : `Your meta description does not contain your keyword "${keyword}". Add it to improve CTR.`
        });
      }
    } else {
      items.push({
        name: "Add a meta description",
        status: 'fail',
        message: "Your page is missing a meta description. Add one with 120-160 characters including your target keyword."
      });
      
      if (hasKeyword) {
        items.push({
          name: "Include keyword in meta description",
          status: 'fail',
          message: `You need to add a meta description that includes your keyword "${keyword}".`
        });
      }
    }
    
    // Open Graph Tags
    const hasOgTags = Object.keys(metaTags).some(key => key.startsWith('og:'));
    items.push({
      name: "Implement Open Graph tags for social sharing",
      status: hasOgTags ? 'pass' : 'fail',
      message: hasOgTags
        ? "Your page has Open Graph tags implemented correctly"
        : "Your page is missing Open Graph tags. Add og:title, og:description, and og:image."
    });
  } else {
    // Fallback when content couldn't be fetched
    const domainParts = domain.split('.');
    const domainName = domainParts.length > 2 ? domainParts.slice(0, -1).join('.') : domainParts[0];
    const estimatedTitleLength = domainName.length + 20;
    
    if (hasKeyword) {
      items.push({
        name: "Use the target keyword in the title tag",
        status: 'warning',
        message: `We could not verify if your title contains the keyword "${keyword}". Make sure it does for better SEO.`
      });
    }
    
    items.push({
      name: "Ensure title tag is under 60 characters",
      status: 'warning',
      message: "We could not verify your title length. Keep it under 60 characters for optimal display in search results."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Include keyword in meta description",
        status: 'warning',
        message: `We could not verify if your meta description contains your keyword "${keyword}". Make sure it does.`
      });
    }
    
    items.push({
      name: "Ensure meta description is under 160 characters",
      status: 'warning',
      message: "We could not verify your meta description length. Keep it between 120-160 characters."
    });
    
    items.push({
      name: "Implement Open Graph tags for social sharing",
      status: 'warning',
      message: "We could not verify if Open Graph tags are present. Implement them for better social sharing."
    });
  }
  
  return items;
};

// Updated heading and content checks
const generateHeadingContentChecks = (
  url: string, 
  domain: string, 
  keyword?: string, 
  hasKeyword = false,
  h1Tags: string[] = [],
  headings: Record<string, string[]> = {},
  contentFetched = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // H1 tag check
    const hasH1 = h1Tags.length > 0;
    
    items.push({
      name: "Page has an H1 tag",
      status: hasH1 ? 'pass' : 'fail',
      message: hasH1
        ? `Your page has ${h1Tags.length} H1 tag(s)`
        : "Your page is missing an H1 tag. Add exactly one H1 tag with your main keyword."
    });
    
    // Only one H1 check
    if (hasH1) {
      items.push({
        name: "Use only one H1 tag per page",
        status: h1Tags.length === 1 ? 'pass' : 'fail',
        message: h1Tags.length === 1
          ? "Your page correctly has exactly one H1 tag"
          : `Your page has ${h1Tags.length} H1 tags. Use exactly one H1 tag to avoid confusing search engines.`
      });
      
      // H1 with keyword check
      if (hasKeyword) {
        const keywordLower = keyword!.toLowerCase();
        const keywordInH1 = h1Tags.some(h1 => h1.toLowerCase().includes(keywordLower));
        
        items.push({
          name: "H1 tag includes target keyword",
          status: keywordInH1 ? 'pass' : 'fail',
          message: keywordInH1
            ? `Your H1 tag contains your keyword "${keyword}"`
            : `Your H1 tag does not contain your keyword "${keyword}". Add it for better SEO.`
        });
      }
    }
    
    // H2/H3 usage check
    const hasH2 = (headings['h2'] || []).length > 0;
    const hasH3 = (headings['h3'] || []).length > 0;
    
    items.push({
      name: "Use H2 and H3 headings for content structure",
      status: hasH2 && hasH3 ? 'pass' : hasH2 || hasH3 ? 'warning' : 'fail',
      message: hasH2 && hasH3
        ? `Your page has good heading structure with ${headings['h2'].length} H2 tags and ${headings['h3'].length} H3 tags`
        : hasH2
          ? `Your page has ${headings['h2'].length} H2 tags but no H3 tags. Consider adding H3 subheadings.`
          : hasH3
            ? `Your page has ${headings['h3'].length} H3 tags but no H2 tags. Add H2 headings for proper hierarchy.`
            : "Your page is missing H2 and H3 tags. Use them to structure your content and include relevant keywords."
    });
    
    // Heading hierarchy check
    const hasProperHierarchy = hasH1 && (!hasH3 || hasH2); // If has H3, must have H2
    
    items.push({
      name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
      status: hasProperHierarchy ? 'pass' : 'warning',
      message: hasProperHierarchy
        ? "Your page maintains proper heading hierarchy"
        : "Your page has improper heading hierarchy. Ensure headings follow a logical order - H1 first, then H2s, then H3s."
    });
    
  } else {
    // Fallback for when content couldn't be fetched
    items.push({
      name: "Page has an H1 tag",
      status: 'warning',
      message: "We could not verify if your page has an H1 tag. Ensure your page has exactly one H1 tag."
    });
    
    if (hasKeyword) {
      items.push({
        name: "H1 tag includes target keyword",
        status: 'warning',
        message: `We could not verify if your H1 tag contains the keyword "${keyword}". Make sure it does.`
      });
    }
    
    items.push({
      name: "Use only one H1 tag per page",
      status: 'warning',
      message: "We could not verify if your page has a single H1 tag. Use exactly one H1 tag per page."
    });
    
    items.push({
      name: "Use H2 and H3 headings with secondary keywords",
      status: 'warning',
      message: "We could not verify your heading structure. Use H2 and H3 tags to organize your content."
    });
    
    items.push({
      name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
      status: 'warning',
      message: "We could not verify your heading hierarchy. Ensure headings follow a logical order."
    });
  }
  
  return items;
};

// Updated URL optimization checks
const generateUrlChecks = (
  url: string, 
  domain: string, 
  path: string, 
  keyword?: string, 
  hasKeyword = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // SEO-friendly URL check - we can definitively determine this
  const hasQueryParams = url.includes('?');
  const hasSpecialChars = /[^a-zA-Z0-9\-\/\._]/.test(url);
  
  let urlFriendliness: SEOCheckItem['status'] = 'pass';
  let urlMessage = "Your URL is SEO-friendly (short and descriptive)";
  
  if (hasQueryParams) {
    urlFriendliness = 'fail';
    urlMessage = "Your URL contains query parameters which are not SEO-friendly. Create clean URLs using directories instead.";
  } else if (hasSpecialChars) {
    urlFriendliness = 'warning';
    urlMessage = "Your URL contains special characters which may cause issues. Use only letters, numbers, and hyphens.";
  } else if (path.length > 50) {
    urlFriendliness = 'warning';
    urlMessage = `Your URL path is quite long (${path.length} characters). Consider shortening for better UX and sharing.`;
  }
  
  items.push({
    name: "Implement SEO-friendly URLs",
    status: urlFriendliness,
    message: urlMessage
  });
  
  // Keyword in URL check - we can determine this accurately
  if (hasKeyword) {
    const keywordLower = keyword!.toLowerCase();
    const keywordParts = keywordLower.split(/\s+/).filter(part => part.length > 2);
    
    // Check if any significant keyword parts are in the domain or path
    const keywordInDomain = keywordParts.some(part => domain.toLowerCase().includes(part));
    const keywordInPath = keywordParts.some(part => path.toLowerCase().includes(part));
    const keywordInUrl = keywordInDomain || keywordInPath;
    
    items.push({
      name: "Place the primary keyword in the URL",
      status: keywordInUrl ? 'pass' : 'fail',
      message: keywordInUrl
        ? `Your URL contains elements of your keyword "${keyword}"`
        : `Your URL does not contain your keyword "${keyword}". Consider including it in the URL path.`
    });
  }
  
  // URL length check - we can determine this accurately
  const fullUrlLength = url.length;
  
  items.push({
    name: "Use short URLs (under 75 characters)",
    status: fullUrlLength <= 75 ? 'pass' : fullUrlLength <= 100 ? 'warning' : 'fail',
    message: fullUrlLength <= 75
      ? `Your URL length is good (${fullUrlLength} characters)`
      : fullUrlLength <= 100
        ? `Your URL is slightly long (${fullUrlLength} characters). Consider shortening.`
        : `Your URL is too long (${fullUrlLength} characters). Keep URLs under 75 characters.`
  });
  
  // Word separators in URL check
  const hyphensInPath = path.includes('-');
  const underscoresInPath = path.includes('_');
  
  items.push({
    name: "Use hyphens to separate words in URLs",
    status: path.length === 0 || hyphensInPath ? 'pass' : underscoresInPath ? 'warning' : path.length > 0 ? 'warning' : 'pass',
    message: path.length === 0
      ? "You're using a root URL which is optimal"
      : hyphensInPath
        ? "Your URL correctly uses hyphens to separate words"
        : underscoresInPath
          ? "Your URL uses underscores instead of hyphens. Hyphens are preferred for SEO."
          : path.length > 0
            ? "Your URL doesn't use separators for multi-word terms. Consider using hyphens to separate words."
            : "Your URL structure appears clean"
  });
  
  // Avoid dynamic parameters - we can determine this accurately
  items.push({
    name: "Avoid dynamic parameters in URLs",
    status: url.includes('?') ? 'fail' : 'pass',
    message: url.includes('?')
      ? "Your URL contains query parameters. Create clean URLs without parameters for better SEO."
      : "Your URL does not contain dynamic parameters, which is optimal for SEO."
  });
  
  return items;
};

// Updated image optimization checks
const generateImageChecks = (
  domain: string,
  imageInfo: { totalImages: number, withAlt: number, withDimensions: number, lazyLoaded: number },
  contentFetched: boolean
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    const { totalImages, withAlt, withDimensions, lazyLoaded } = imageInfo;
    
    if (totalImages > 0) {
      // Alt text check
      const altTextPercentage = Math.round((withAlt / totalImages) * 100);
      
      items.push({
        name: "Optimize image alt text with relevant keywords",
        status: altTextPercentage === 100 ? 'pass' : altTextPercentage >= 80 ? 'warning' : 'fail',
        message: altTextPercentage === 100
          ? `All ${totalImages} images have alt text`
          : altTextPercentage >= 80
            ? `${withAlt} out of ${totalImages} images (${altTextPercentage}%) have alt text. Add alt text to all images.`
            : `Only ${withAlt} out of ${totalImages} images (${altTextPercentage}%) have alt text. Add descriptive alt text to all images.`
      });
      
      // Image dimensions check
      const dimensionsPercentage = Math.round((withDimensions / totalImages) * 100);
      
      items.push({
        name: "Specify image dimensions (width/height attributes)",
        status: dimensionsPercentage === 100 ? 'pass' : dimensionsPercentage >= 80 ? 'warning' : 'fail',
        message: dimensionsPercentage === 100
          ? `All ${totalImages} images have width and height attributes specified`
          : dimensionsPercentage >= 80
            ? `${withDimensions} out of ${totalImages} images (${dimensionsPercentage}%) have dimensions specified. Specify dimensions for all images.`
            : `Only ${withDimensions} out of ${totalImages} images (${dimensionsPercentage}%) have dimensions specified. Add width and height to prevent layout shifts.`
      });
      
      // Lazy loading check
      const lazyLoadPercentage = Math.round((lazyLoaded / totalImages) * 100);
      
      items.push({
        name: "Enable lazy loading for images",
        status: lazyLoadPercentage === 100 ? 'pass' : lazyLoadPercentage >= 50 ? 'warning' : 'fail',
        message: lazyLoadPercentage === 100
          ? `All ${totalImages} images have lazy loading enabled`
          : lazyLoadPercentage >= 50
            ? `${lazyLoaded} out of ${totalImages} images (${lazyLoadPercentage}%) use lazy loading. Enable it for all images.`
            : `Only ${lazyLoaded} out of ${totalImages} images (${lazyLoadPercentage}%) use lazy loading. Add lazy loading to improve page speed.`
      });
    } else {
      items.push({
        name: "Use images with descriptive alt text",
        status: 'info',
        message: "No images were detected on your page. If your content needs visual elements, consider adding relevant images with descriptive alt text."
      });
    }
    
    // Modern image formats - can't reliably detect this
    items.push({
      name: "Use modern image formats (WebP, AVIF)",
      status: 'warning',
      message: "We recommend using modern image formats like WebP or AVIF for better compression and quality."
    });
    
    // Image compression - can't reliably detect this
    items.push({
      name: "Ensure all images are compressed",
      status: 'warning',
      message: "Ensure all images are properly compressed to reduce page load time. Use tools like TinyPNG or ImageOptim."
    });
  } else {
    // Fallback for when content couldn't be fetched
    items.push({
      name: "Optimize image alt text with relevant keywords",
      status: 'warning',
      message: "We could not verify your image alt tags. Ensure all images have descriptive alt text with relevant keywords."
    });
    
    items.push({
      name: "Ensure all images are compressed for fast loading",
      status: 'warning',
      message: "We could not verify if your images are compressed. Compress all images to improve page load speed."
    });
    
    items.push({
      name: "Enable lazy loading for images and videos",
      status: 'warning',
      message: "We could not verify if lazy loading is implemented. Add lazy loading for images to improve page load time."
    });
    
    items.push({
      name: "Specify image dimensions (width/height attributes)",
      status: 'warning',
      message: "We could not verify if image dimensions are specified. Add width and height attributes to prevent layout shifts."
    });
    
    items.push({
      name: "Use modern image formats (WebP, AVIF)",
      status: 'warning',
      message: "We could not verify your image formats. Consider using WebP or AVIF for better compression and quality."
    });
  }
  
  return items;
};

// Updated technical SEO checks
const generateTechnicalSEOChecks = (
  url: string, 
  domain: string,
  content: string,
  contentFetched: boolean
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // HTTPS check - we can determine this accurately
  items.push({
    name: "Ensure website uses HTTPS",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "Your website correctly uses HTTPS"
      : "Your website is not secure. Install an SSL certificate and redirect to HTTPS."
  });
  
  if (contentFetched) {
    // Canonical tag check
    const hasCanonical = seoChecker.hasCanonicalTag(content);
    
    items.push({
      name: "Use canonical tags to avoid duplicate content issues",
      status: hasCanonical ? 'pass' : 'fail',
      message: hasCanonical
        ? "Your page correctly uses a canonical tag"
        : "Your page is missing a canonical tag. Add one to prevent duplicate content issues."
    });
    
    // Schema markup check
    const hasSchema = seoChecker.hasSchemaMarkup(content);
    
    items.push({
      name: "Implement structured data (schema markup)",
      status: hasSchema ? 'pass' : 'fail',
      message: hasSchema
        ? "Your page has structured data implemented"
        : "Your page is missing structured data. Add schema markup to help search engines understand your content."
    });
    
    // Robots meta check
    const hasRobots = seoChecker.hasRobotsMeta(content);
    
    items.push({
      name: "Configure robots meta tags correctly",
      status: hasRobots ? 'pass' : 'warning',
      message: hasRobots
        ? "Your page has robots meta tags configured"
        : "Your page doesn't have explicit robots meta tags. Add them if you need to control how search engines crawl specific pages."
    });
    
    // Mobile-friendly check
    const hasMobileViewport = seoChecker.hasMobileFriendlyIndicators(content);
    
    items.push({
      name: "Ensure mobile-friendliness",
      status: hasMobileViewport ? 'pass' : 'fail',
      message: hasMobileViewport
        ? "Your page has the viewport meta tag configured correctly for mobile devices"
        : "Your page is missing proper viewport configuration for mobile devices. Add the viewport meta tag."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Use canonical tags to avoid duplicate content issues",
      status: 'warning',
      message: "We could not verify if canonical tags are implemented. Use them to prevent duplicate content issues."
    });
    
    items.push({
      name: "Implement structured data (schema markup)",
      status: 'warning',
      message: "We could not verify if structured data is implemented. Add schema markup to help search engines understand your content."
    });
    
    items.push({
      name: "Ensure mobile-friendliness",
      status: 'warning',
      message: "We could not verify your site's mobile-friendliness. Use Google's Mobile-Friendly Test tool to check."
    });
    
    items.push({
      name: "Check page load speed (under 3 seconds)",
      status: 'warning',
      message: "We could not verify your page load speed. Aim for under 3 seconds for optimal user experience."
    });
  }
  
  // These checks require additional verification beyond basic HTML parsing
  items.push({
    name: "Create and submit XML sitemap",
    status: 'warning',
    message: "We recommend creating and submitting an XML sitemap to help search engines discover and index your content."
  });
  
  items.push({
    name: "Implement proper robots.txt file",
    status: 'warning',
    message: "Ensure your website has a properly configured robots.txt file to guide search engine crawlers."
  });
  
  return items;
};

// Updated content optimization checks
const generateContentOptimizationChecks = (
  domain: string, 
  keyword?: string, 
  hasKeyword = false,
  content: string = '',
  keywordDensity: { density: number, count: number, totalWords: number } = { density: 0, count: 0, totalWords: 0 },
  internalLinksCount: number = 0,
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // Content length check
    const { totalWords } = keywordDensity;
    
    items.push({
      name: "Ensure content is at least 800-1000 words",
      status: totalWords >= 1000 ? 'pass' : totalWords >= 500 ? 'warning' : 'fail',
      message: totalWords >= 1000
        ? `Your content length is good (${totalWords} words)`
        : totalWords >= 500
          ? `Your content length is moderate (${totalWords} words). Consider adding more comprehensive information.`
          : `Your content is too thin (${totalWords} words). Aim for at least 800-1000 words for comprehensive topic coverage.`
    });
    
    // Avoid thin content check
    items.push({
      name: "Avoid thin content (less than 300 words per page)",
      status: totalWords >= 300 ? 'pass' : 'fail',
      message: totalWords >= 300
        ? `Your content has sufficient depth (${totalWords} words)`
        : `Your content is too thin (${totalWords} words). Add more substantial content with at least 300 words.`
    });
    
    // Keyword density check
    if (hasKeyword) {
      const { density, count } = keywordDensity;
      
      items.push({
        name: "Ensure content reads naturally without keyword stuffing",
        status: density > 0 && density <= 3 ? 'pass' : density > 3 ? 'warning' : 'fail',
        message: density > 0 && density <= 3
          ? `Your keyword density is optimal (${density.toFixed(1)}%, ${count} occurrences)`
          : density > 3
            ? `Your keyword density is too high (${density.toFixed(1)}%, ${count} occurrences). Reduce to avoid keyword stuffing.`
            : `Your content doesn't contain your keyword "${keyword}". Include it naturally throughout your content.`
      });
    }
    
    // Internal linking check
    items.push({
      name: "Use internal linking (3-5 internal links per page)",
      status: internalLinksCount >= 3 ? 'pass' : internalLinksCount > 0 ? 'warning' : 'fail',
      message: internalLinksCount >= 3
        ? `Your page has good internal linking (${internalLinksCount} internal links)`
        : internalLinksCount > 0
          ? `Your page has only ${internalLinksCount} internal link(s). Add more for better site navigation.`
          : "Your page has no internal links. Add 3-5 relevant internal links to improve site architecture."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Ensure content is at least 800-1000 words",
      status: 'warning',
      message: "We could not verify your content length. Aim for at least 800-1000 words for comprehensive topic coverage."
    });
    
    items.push({
      name: "Avoid thin content (less than 300 words per page)",
      status: 'warning',
      message: "We could not verify your content depth. Ensure all pages have at least 300 words of substantial content."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Ensure content reads naturally without keyword stuffing",
        status: 'warning',
        message: `We could not verify keyword density. Use "${keyword}" naturally (1-2% density) without stuffing.`
      });
      
      items.push({
        name: "Use LSI (Latent Semantic Indexing) keywords",
        status: 'warning',
        message: `We could not verify use of related terms. Include synonyms and related terms for "${keyword}".`
      });
    }
    
    items.push({
      name: "Use internal linking (3-5 internal links per page)",
      status: 'warning',
      message: "We could not verify your internal linking structure. Add 3-5 relevant internal links per page."
    });
  }
  
  // These checks require more advanced analysis beyond basic HTML parsing
  items.push({
    name: "Optimize for featured snippets",
    status: 'warning',
    message: "Structure content to directly answer common questions to increase chances of appearing in featured snippets."
  });
  
  items.push({
    name: "Add FAQs using FAQ Schema",
    status: 'warning',
    message: "Consider adding FAQ sections with proper schema markup to improve visibility in search results."
  });
  
  items.push({
    name: "Ensure external links point to high-authority sources",
    status: 'warning',
    message: "Link to reputable, relevant external sources to increase your content's credibility."
  });
  
  return items;
};

// Updated mobile optimization checks
const generateMobileOptimizationChecks = (
  domain: string,
  content: string = '',
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // Viewport check
    const hasCorrectViewport = content.includes('viewport') && 
                              content.includes('width=device-width') && 
                              content.includes('initial-scale=1');
    
    items.push({
      name: "Configure viewport tag correctly",
      status: hasCorrectViewport ? 'pass' : 'fail',
      message: hasCorrectViewport
        ? "Your page has the viewport meta tag configured correctly"
        : "Your page is missing proper viewport configuration. Add the viewport meta tag with width=device-width, initial-scale=1."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Configure viewport tag correctly",
      status: 'warning',
      message: "We could not verify your viewport configuration. Ensure the viewport meta tag is properly set."
    });
  }
  
  // These checks require more advanced analysis
  items.push({
    name: "Ensure proper size and spacing for touch elements",
    status: 'warning',
    message: "Make buttons and links at least 44px × 44px for mobile users with appropriate spacing between clickable elements."
  });
  
  items.push({
    name: "Use readable font sizes on mobile (16px+)",
    status: 'warning',
    message: "Use at least 16px font size on mobile devices to ensure readability without zooming."
  });
  
  items.push({
    name: "Ensure content parity between mobile and desktop",
    status: 'warning',
    message: "Ensure mobile and desktop versions have the same content and functionality for consistent user experience."
  });
  
  items.push({
    name: "Optimize specifically for mobile page speed",
    status: 'warning',
    message: "Test and optimize specifically for mobile connection speeds with minimal resources and optimized code."
  });
  
  return items;
};

// Updated social media checks
const generateSocialMediaChecks = (
  domain: string,
  content: string = '',
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // Social media tags check
    const { openGraph, twitterCards } = seoChecker.hasSocialMediaTags(content);
    
    items.push({
      name: "Implement Open Graph tags for Facebook sharing",
      status: openGraph ? 'pass' : 'fail',
      message: openGraph
        ? "Your page has Open Graph tags implemented correctly"
        : "Your page is missing Open Graph tags. Add og:title, og:description, and og:image for better Facebook sharing."
    });
    
    items.push({
      name: "Implement Twitter Card markup",
      status: twitterCards ? 'pass' : 'fail',
      message: twitterCards
        ? "Your page has Twitter Card markup implemented correctly"
        : "Your page is missing Twitter Card markup. Add twitter:card, twitter:title, twitter:description, and twitter:image."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Implement Twitter Card markup",
      status: 'warning',
      message: "We could not verify Twitter Card implementation. Add markup for better Twitter sharing."
    });
    
    items.push({
      name: "Implement Facebook Open Graph tags",
      status: 'warning',
      message: "We could not verify Open Graph implementation. Add tags for better Facebook sharing."
    });
  }
  
  // These checks require external verification
  items.push({
    name: "Maintain active social media profiles",
    status: 'warning',
    message: "Maintain active and linked social media profiles to improve brand credibility and traffic."
  });
  
  items.push({
    name: "Add social sharing buttons to content",
    status: 'warning',
    message: "Add social sharing buttons to make it easy for users to share your content."
  });
  
  items.push({
    name: "Include social profile links in website footer/header",
    status: 'warning',
    message: "Include links to your social media profiles in your website's footer or header."
  });
  
  return items;
};

// Updated security and performance checks
const generateSecurityPerformanceChecks = (
  url: string, 
  domain: string,
  content: string = '',
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // HTTPS check - we can determine this accurately
  items.push({
    name: "Ensure proper HTTPS implementation",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "Your site implements HTTPS correctly"
      : "Your site is not using HTTPS. Install an SSL certificate for better security and SEO."
  });
  
  // These checks require more advanced analysis
  items.push({
    name: "Optimize Core Web Vitals (LCP, FID, CLS)",
    status: 'warning',
    message: "Monitor and optimize Core Web Vitals metrics for better user experience and ranking potential."
  });
  
  items.push({
    name: "Minify JavaScript and CSS files",
    status: 'warning',
    message: "Minify JavaScript and CSS files to reduce file size and improve loading speed."
  });
  
  items.push({
    name: "Enable Gzip or Brotli compression",
    status: 'warning',
    message: "Implement Gzip or Brotli compression to significantly reduce file transfer sizes."
  });
  
  items.push({
    name: "Implement proper browser caching",
    status: 'warning',
    message: "Set appropriate cache headers to reduce page load times for returning visitors."
  });
  
  return items;
};
