
import { SEOCategory } from '../components/SEOResults';
import { SEOCheckItem } from '../components/SEOCategoryCard';
import * as seoChecker from './seoChecker';

// Interface for analysis results
export interface AnalysisResult {
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
}

// Enhanced SEO Analyzer with actual content validation
export const analyzeSEO = async (url: string, keyword?: string): Promise<AnalysisResult> => {
  // Process the URL properly
  const processedUrl = prepareUrl(url);
  
  // Extract domain data
  const domain = extractDomain(processedUrl);
  const hasKeyword = !!keyword;
  const keywordLower = keyword ? keyword.toLowerCase() : '';
  
  // Attempt to fetch the actual page content
  console.log("Fetching content for:", processedUrl);
  const { content, success: contentFetched, error: fetchError } = await seoChecker.fetchPageContent(processedUrl);
  
  if (fetchError) {
    console.log("Content fetch error:", fetchError);
  }
  
  if (contentFetched) {
    console.log("Content fetched successfully, content length:", content.length);
  } else {
    console.log("Content could not be fetched");
  }
  
  // Initialize categories
  const categories: SEOCategory[] = [];
  
  // Extract key data from content if fetched
  let title = null;
  let metaTags: Record<string, string> = {};
  let metaDescription = null;
  let h1Tags: string[] = [];
  let headings: Record<string, string[]> = {};
  let canonicalInfo = { has: false, url: null };
  let robotsInfo = { has: false, content: null };
  let socialMediaInfo = { 
    openGraph: { has: false, tags: [] as string[] },
    twitterCards: { has: false, tags: [] as string[] }
  };
  let imageInfo = { 
    totalImages: 0, 
    withAlt: 0, 
    withKeywordInAlt: 0,
    withDimensions: 0, 
    lazyLoaded: 0,
    optimizedFormats: 0 
  };
  let linksInfo = { 
    internal: { count: 0, urls: [] as string[] },
    external: { count: 0, urls: [] as string[] }
  };
  let keywordDensity = { 
    density: 0, 
    count: 0, 
    totalWords: 0, 
    exactMatchCount: 0, 
    partialMatchCount: 0,
    synonymMatchCount: 0
  };
  let mobileFriendlyInfo = { viewport: false, responsiveMediaQueries: false, touchIcons: false };
  let faviconInfo = { has: false, url: null };
  let hasSchema = false;
  let language = null;
  let hreflangTags: Array<{ language: string, url: string }> = [];
  let hasGeoTargeting = false;
  let pageSpeedIndicators = { 
    resourceHints: false, 
    asyncDeferScripts: false, 
    minifiedCss: false, 
    minifiedJs: false 
  };
  
  // Extract data from content if available
  if (contentFetched && content) {
    title = seoChecker.extractTitle(content);
    metaTags = seoChecker.extractMetaTags(content);
    metaDescription = seoChecker.extractMetaDescription(content);
    h1Tags = seoChecker.extractH1Tags(content);
    headings = seoChecker.extractHeadings(content);
    canonicalInfo = seoChecker.hasCanonicalTag(content);
    robotsInfo = seoChecker.hasRobotsMeta(content);
    socialMediaInfo = seoChecker.hasSocialMediaTags(content);
    imageInfo = seoChecker.extractImageInfo(content, keywordLower);
    linksInfo = seoChecker.extractLinks(content, domain);
    
    if (hasKeyword) {
      keywordDensity = seoChecker.analyzeKeywordDensity(content, keywordLower);
    }
    
    mobileFriendlyInfo = seoChecker.hasMobileFriendlyIndicators(content);
    faviconInfo = seoChecker.hasFavicon(content);
    hasSchema = seoChecker.hasSchemaMarkup(content);
    language = seoChecker.detectLanguage(content);
    hreflangTags = seoChecker.getHreflangTags(content);
    hasGeoTargeting = seoChecker.detectGeoTargeting(content);
    pageSpeedIndicators = seoChecker.detectPageSpeedIndicators(content);
    
    console.log("Extracted data:", { 
      title, 
      metaDescription: metaDescription || 'Not found',
      h1Count: h1Tags.length,
      keywordDensity: hasKeyword ? keywordDensity : 'No keyword provided',
      contentFetched
    });
  } else {
    console.log("No content extracted, using fallbacks");
  }
  
  // Generate categories based on extracted data
  categories.push({
    title: "Title & Meta Tags",
    items: generateTitleMetaChecks(
      processedUrl, domain, keyword, hasKeyword, 
      title, metaDescription, metaTags, contentFetched
    )
  });
  
  categories.push({
    title: "Headings & Content",
    items: generateHeadingContentChecks(
      processedUrl, domain, keyword, hasKeyword,
      h1Tags, headings, contentFetched
    )
  });
  
  categories.push({
    title: "URL Optimization",
    items: generateUrlChecks(
      processedUrl, domain, keyword, hasKeyword
    )
  });
  
  categories.push({
    title: "Image Optimization",
    items: generateImageChecks(
      domain, imageInfo, keyword, hasKeyword, contentFetched
    )
  });
  
  categories.push({
    title: "Technical SEO",
    items: generateTechnicalSEOChecks(
      processedUrl, domain, hasSchema, canonicalInfo, robotsInfo, 
      language, hreflangTags, hasGeoTargeting, contentFetched
    )
  });
  
  categories.push({
    title: "Content Optimization",
    items: generateContentOptimizationChecks(
      domain, keyword, hasKeyword, content,
      keywordDensity, linksInfo, contentFetched
    )
  });
  
  categories.push({
    title: "Mobile Optimization",
    items: generateMobileOptimizationChecks(
      domain, mobileFriendlyInfo, contentFetched
    )
  });
  
  categories.push({
    title: "Social Media",
    items: generateSocialMediaChecks(
      domain, socialMediaInfo, faviconInfo, contentFetched, keyword, hasKeyword
    )
  });
  
  categories.push({
    title: "Security & Performance",
    items: generateSecurityPerformanceChecks(
      processedUrl, domain, pageSpeedIndicators, contentFetched
    )
  });
  
  // Calculate weighted final score using the new points-based system
  const finalScore = calculatePointBasedScore(
    categories, 
    processedUrl, 
    domain, 
    keyword, 
    hasKeyword, 
    keywordDensity,
    title,
    metaDescription,
    h1Tags,
    imageInfo,
    contentFetched
  );
  
  return {
    score: finalScore,
    categories,
    contentFetched
  };
};

// Calculate score using a points-based system
const calculatePointBasedScore = (
  categories: SEOCategory[],
  url: string,
  domain: string,
  keyword?: string,
  hasKeyword = false,
  keywordDensity = { density: 0, count: 0, totalWords: 0, exactMatchCount: 0, partialMatchCount: 0, synonymMatchCount: 0 },
  title: string | null = null,
  metaDescription: string | null = null,
  h1Tags: string[] = [],
  imageInfo = { totalImages: 0, withAlt: 0, withKeywordInAlt: 0, withDimensions: 0, lazyLoaded: 0, optimizedFormats: 0 },
  contentFetched = false
): number => {
  let totalPoints = 0;
  const maxPoints = 100;
  
  // Only calculate points if content was successfully fetched
  if (contentFetched) {
    // Points for HTTPS (5 points)
    if (url.startsWith('https')) {
      totalPoints += 5;
    }
    
    if (hasKeyword) {
      const keywordLower = keyword!.toLowerCase();
      
      // Points for keyword in title (10 points)
      if (title && checkKeywordPresence(title, keywordLower)) {
        totalPoints += 10;
      }
      
      // Points for keyword in meta description (8 points)
      if (metaDescription && checkKeywordPresence(metaDescription, keywordLower)) {
        totalPoints += 8;
      }
      
      // Points for keyword in H1 (8 points)
      const keywordInH1 = h1Tags.some(h1 => checkKeywordPresence(h1, keywordLower));
      if (keywordInH1) {
        totalPoints += 8;
      }
      
      // Points for keyword in URL (7 points)
      const path = url.split('://')[1]?.split('/').slice(1).join('/') || '';
      if (checkKeywordPresence(path, keywordLower) || checkKeywordPresence(domain, keywordLower)) {
        totalPoints += 7;
      }
      
      // Points for keyword in image alt text (5 points)
      if (imageInfo.withKeywordInAlt > 0) {
        totalPoints += 5;
      }
      
      // Points for optimal keyword density (7 points)
      // Optimal density is between 0.5% and 2.5%
      if (keywordDensity.density > 0.5 && keywordDensity.density <= 2.5) {
        totalPoints += 7;
      } else if (keywordDensity.density > 0 && keywordDensity.density <= 4) {
        // Still decent density (3 points)
        totalPoints += 3;
      }
      
      // Points for exact keyword matches in content (up to 5 points)
      if (keywordDensity.exactMatchCount > 0) {
        totalPoints += Math.min(5, Math.ceil(keywordDensity.exactMatchCount / 2));
      }
    }
    
    // Points based on category performance
    categories.forEach(category => {
      const passedItems = category.items.filter(item => item.status === 'pass').length;
      const warningItems = category.items.filter(item => item.status === 'warning').length;
      const totalItems = category.items.length;
      
      if (totalItems > 0) {
        // Calculate category score as percentage
        const categoryPercentage = ((passedItems + (warningItems * 0.5)) / totalItems);
        
        // Allocate points based on category (total: 45 points across all categories)
        let categoryWeight = 5; // Default weight
        
        switch (category.title) {
          case "Title & Meta Tags":
            categoryWeight = 7;
            break;
          case "Headings & Content":
            categoryWeight = 6;
            break;
          case "URL Optimization":
            categoryWeight = 6;
            break;
          case "Content Optimization":
            categoryWeight = 7;
            break;
          case "Image Optimization":
            categoryWeight = 5;
            break;
          case "Technical SEO":
            categoryWeight = 5;
            break;
          case "Mobile Optimization":
            categoryWeight = 4;
            break;
          case "Social Media":
            categoryWeight = 3;
            break;
          case "Security & Performance":
            categoryWeight = 2;
            break;
        }
        
        // Add weighted points for this category
        totalPoints += Math.round(categoryPercentage * categoryWeight);
      }
    });
  } else {
    // Limited scoring when content can't be fetched (max 70 points)
    
    // Points for HTTPS (5 points)
    if (url.startsWith('https')) {
      totalPoints += 5;
    }
    
    if (hasKeyword) {
      const keywordLower = keyword!.toLowerCase();
      
      // Points for keyword in URL (7 points)
      const path = url.split('://')[1]?.split('/').slice(1).join('/') || '';
      if (checkKeywordPresence(path, keywordLower) || checkKeywordPresence(domain, keywordLower)) {
        totalPoints += 7;
      }
    }
    
    // Add partial points for categories that don't require content fetching
    totalPoints += 58; // Base score that would make the max around 70
  }
  
  // Final adjustments and constraints
  if (hasKeyword && contentFetched) {
    // Penalize if keyword is completely unrelated (no matches at all)
    if (keywordDensity.totalWords > 300 && keywordDensity.exactMatchCount === 0 && keywordDensity.partialMatchCount === 0) {
      totalPoints = Math.min(totalPoints, 60); // Cap score for unrelated keywords
    }
    
    // Penalize keyword stuffing
    if (keywordDensity.density > 5) {
      totalPoints -= 10; // Penalty for stuffing
    }
  }
  
  // Cap score between 10 and 100
  return Math.min(Math.max(10, totalPoints), maxPoints);
};

// Helper function to check for keyword presence considering variations
function checkKeywordPresence(text: string, keyword: string): boolean {
  if (!text || !keyword) return false;
  
  const textLower = text.toLowerCase();
  const keywordParts = keyword.split(/\s+/).filter(part => part.length > 2);
  
  // Check for exact match
  if (textLower.includes(keyword)) {
    return true;
  }
  
  // Check for all significant parts present
  if (keywordParts.length > 1) {
    const allPartsPresent = keywordParts.every(part => textLower.includes(part));
    if (allPartsPresent) return true;
  }
  
  // Check for most parts present (if keyword has multiple words)
  if (keywordParts.length > 2) {
    const presentPartsCount = keywordParts.filter(part => textLower.includes(part)).length;
    if (presentPartsCount >= Math.ceil(keywordParts.length * 0.7)) {
      return true;
    }
  }
  
  return false;
}

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

// Title & Meta Tags checks
const generateTitleMetaChecks = (
  url: string, 
  domain: string, 
  keyword?: string, 
  hasKeyword = false,
  title: string | null = null,
  metaDescription: string | null = null,
  metaTags: Record<string, string> = {},
  contentFetched = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Title checks
  if (contentFetched) {
    if (title) {
      // Keyword in title check
      if (hasKeyword) {
        const keywordLower = keyword!.toLowerCase();
        const keywordInTitle = checkKeywordPresence(title, keywordLower);
        
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
    } else {
      items.push({
        name: "Add a title tag",
        status: 'fail',
        message: "Your page is missing a title tag. Add a descriptive title with your main keyword."
      });
      
      if (hasKeyword) {
        items.push({
          name: "Use the target keyword in the title tag",
          status: 'fail',
          message: `Your page is missing a title tag. Add one that includes your keyword "${keyword}".`
        });
      }
    }
    
    // Meta description checks
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
        const keywordInDescription = checkKeywordPresence(metaDescription, keywordLower);
        
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
    items.push({
      name: "Add a title tag",
      status: 'warning',
      message: "Unable to check your title tag. Make sure your page has a descriptive title with your main keyword."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Use the target keyword in the title tag",
        status: 'warning',
        message: `Unable to check if your title contains the keyword "${keyword}". Make sure it does.`
      });
    }
    
    items.push({
      name: "Ensure title tag is under 60 characters",
      status: 'warning',
      message: "Unable to check your title length. Keep it under 60 characters for optimal display in search results."
    });
    
    items.push({
      name: "Add a meta description",
      status: 'warning',
      message: "Unable to check your meta description. Make sure your page has one with 120-160 characters."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Include keyword in meta description",
        status: 'warning',
        message: `Unable to check if your meta description contains your keyword "${keyword}". Make sure it does.`
      });
    }
    
    items.push({
      name: "Implement Open Graph tags for social sharing",
      status: 'warning',
      message: "Unable to check Open Graph tags. Implement them for better social sharing."
    });
  }
  
  return items;
};

// Heading and content checks
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
        const keywordInH1 = h1Tags.some(h1 => checkKeywordPresence(h1, keywordLower));
        
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
    
    // Keyword in other headings check
    if (hasKeyword && (hasH2 || hasH3)) {
      const keywordLower = keyword!.toLowerCase();
      const h2WithKeyword = (headings['h2'] || []).some(h2 => checkKeywordPresence(h2, keywordLower));
      const h3WithKeyword = (headings['h3'] || []).some(h3 => checkKeywordPresence(h3, keywordLower));
      
      items.push({
        name: "Include keywords in H2/H3 headings",
        status: (h2WithKeyword || h3WithKeyword) ? 'pass' : 'warning',
        message: (h2WithKeyword || h3WithKeyword)
          ? `Your H2/H3 headings contain your keyword "${keyword}"`
          : `Your H2/H3 headings do not contain your keyword "${keyword}". Include it in some subheadings.`
      });
    }
    
  } else {
    // Fallback for when content couldn't be fetched
    items.push({
      name: "Page has an H1 tag",
      status: 'warning',
      message: "Unable to check if your page has an H1 tag. Ensure your page has exactly one H1 tag."
    });
    
    if (hasKeyword) {
      items.push({
        name: "H1 tag includes target keyword",
        status: 'warning',
        message: `Unable to check if your H1 tag contains the keyword "${keyword}". Make sure it does.`
      });
    }
    
    items.push({
      name: "Use only one H1 tag per page",
      status: 'warning',
      message: "Unable to check if your page has a single H1 tag. Use exactly one H1 tag per page."
    });
    
    items.push({
      name: "Use H2 and H3 headings with secondary keywords",
      status: 'warning',
      message: "Unable to check your heading structure. Use H2 and H3 tags to organize your content."
    });
    
    items.push({
      name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
      status: 'warning',
      message: "Unable to check your heading hierarchy. Ensure headings follow a logical order."
    });
  }
  
  return items;
};

// URL optimization checks
const generateUrlChecks = (
  url: string, 
  domain: string, 
  keyword?: string, 
  hasKeyword = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  const path = url.split('://')[1]?.split('/').slice(1).join('/') || '';
  
  // SEO-friendly URL check
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
  
  // Keyword in URL check
  if (hasKeyword) {
    const keywordLower = keyword!.toLowerCase();
    const keywordInUrl = checkKeywordPresence(path, keywordLower) || checkKeywordPresence(domain, keywordLower);
    
    items.push({
      name: "Place the primary keyword in the URL",
      status: keywordInUrl ? 'pass' : 'fail',
      message: keywordInUrl
        ? `Your URL contains your keyword "${keyword}"`
        : `Your URL does not contain your keyword "${keyword}". Consider including it in the URL path.`
    });
  }
  
  // URL length check
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
  
  // Avoid dynamic parameters
  items.push({
    name: "Avoid dynamic parameters in URLs",
    status: url.includes('?') ? 'fail' : 'pass',
    message: url.includes('?')
      ? "Your URL contains query parameters. Create clean URLs without parameters for better SEO."
      : "Your URL does not contain dynamic parameters, which is optimal for SEO."
  });
  
  return items;
};

// Image optimization checks
const generateImageChecks = (
  domain: string,
  imageInfo: { 
    totalImages: number, 
    withAlt: number, 
    withKeywordInAlt: number,
    withDimensions: number, 
    lazyLoaded: number,
    optimizedFormats: number 
  },
  keyword?: string,
  hasKeyword = false,
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    const { totalImages, withAlt, withKeywordInAlt, withDimensions, lazyLoaded, optimizedFormats } = imageInfo;
    
    if (totalImages > 0) {
      // Alt text check
      const altTextPercentage = Math.round((withAlt / totalImages) * 100);
      
      items.push({
        name: "Add alt text to all images",
        status: altTextPercentage === 100 ? 'pass' : altTextPercentage >= 80 ? 'warning' : 'fail',
        message: altTextPercentage === 100
          ? `All ${totalImages} images have alt text`
          : altTextPercentage >= 80
            ? `${withAlt} out of ${totalImages} images (${altTextPercentage}%) have alt text. Add alt text to all images.`
            : `Only ${withAlt} out of ${totalImages} images (${altTextPercentage}%) have alt text. Add descriptive alt text to all images.`
      });
      
      // Keyword in alt text check
      if (hasKeyword && withAlt > 0) {
        const keywordInAltPercentage = Math.round((withKeywordInAlt / withAlt) * 100);
        
        items.push({
          name: "Include target keyword in image alt text",
          status: withKeywordInAlt > 0 ? 'pass' : 'fail',
          message: withKeywordInAlt > 0
            ? `${withKeywordInAlt} image(s) include your keyword "${keyword}" in alt text`
            : `None of your images contain your keyword "${keyword}" in alt text. Include it where relevant.`
        });
      }
      
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
      
      // Modern image formats check
      const optimizedFormatsPercentage = Math.round((optimizedFormats / totalImages) * 100);
      
      items.push({
        name: "Use modern image formats (WebP, AVIF)",
        status: optimizedFormatsPercentage >= 50 ? 'pass' : optimizedFormatsPercentage > 0 ? 'warning' : 'fail',
        message: optimizedFormatsPercentage >= 50
          ? `${optimizedFormatsPercentage}% of your images use modern formats like WebP or AVIF`
          : optimizedFormatsPercentage > 0
            ? `Only ${optimizedFormatsPercentage}% of your images use modern formats. Convert more images to WebP or AVIF.`
            : "None of your images use modern formats. Convert your images to WebP or AVIF for better compression and quality."
      });
    } else {
      items.push({
        name: "Use images with descriptive alt text",
        status: 'info',
        message: "No images were detected on your page. If your content needs visual elements, consider adding relevant images with descriptive alt text."
      });
    }
    
    // Image compression - can't reliably detect this
    items.push({
      name: "Ensure all images are compressed",
      status: 'warning',
      message: "Image compression cannot be verified via HTML. Use tools like TinyPNG or ImageOptim to compress all images."
    });
  } else {
    // Fallback for when content couldn't be fetched
    items.push({
      name: "Add alt text to all images",
      status: 'warning',
      message: "Unable to check your image alt tags. Ensure all images have descriptive alt text with relevant keywords."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Include target keyword in image alt text",
        status: 'warning',
        message: `Unable to check if your images include your keyword "${keyword}" in alt text. Include it where relevant.`
      });
    }
    
    items.push({
      name: "Ensure all images are compressed for fast loading",
      status: 'warning',
      message: "Unable to check if your images are compressed. Compress all images to improve page load speed."
    });
    
    items.push({
      name: "Enable lazy loading for images and videos",
      status: 'warning',
      message: "Unable to check if lazy loading is implemented. Add lazy loading for images to improve page load time."
    });
    
    items.push({
      name: "Specify image dimensions (width/height attributes)",
      status: 'warning',
      message: "Unable to check if image dimensions are specified. Add width and height attributes to prevent layout shifts."
    });
    
    items.push({
      name: "Use modern image formats (WebP, AVIF)",
      status: 'warning',
      message: "Unable to check your image formats. Consider using WebP or AVIF for better compression and quality."
    });
  }
  
  return items;
};

// Technical SEO checks
const generateTechnicalSEOChecks = (
  url: string, 
  domain: string,
  hasSchema: boolean,
  canonicalInfo: { has: boolean, url: string | null },
  robotsInfo: { has: boolean, content: string | null },
  language: string | null,
  hreflangTags: Array<{ language: string, url: string }>,
  hasGeoTargeting: boolean,
  contentFetched: boolean
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // HTTPS check
  items.push({
    name: "Ensure website uses HTTPS",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "Your website correctly uses HTTPS"
      : "Your website is not secure. Install an SSL certificate and redirect to HTTPS."
  });
  
  if (contentFetched) {
    // Canonical tag check
    items.push({
      name: "Use canonical tags to avoid duplicate content issues",
      status: canonicalInfo.has ? 'pass' : 'fail',
      message: canonicalInfo.has
        ? `Your page correctly uses a canonical tag: ${canonicalInfo.url}`
        : "Your page is missing a canonical tag. Add one to prevent duplicate content issues."
    });
    
    // Schema markup check
    items.push({
      name: "Implement structured data (schema markup)",
      status: hasSchema ? 'pass' : 'fail',
      message: hasSchema
        ? "Your page has structured data implemented"
        : "Your page is missing structured data. Add schema markup to help search engines understand your content."
    });
    
    // Robots meta check
    items.push({
      name: "Configure robots meta tags correctly",
      status: robotsInfo.has ? 'pass' : 'warning',
      message: robotsInfo.has
        ? `Your page has robots meta tags configured: ${robotsInfo.content}`
        : "Your page doesn't have explicit robots meta tags. Add them if you need to control how search engines crawl specific pages."
    });
    
    // Language declaration
    items.push({
      name: "Specify page language",
      status: language ? 'pass' : 'warning',
      message: language
        ? `Your page correctly specifies language: ${language}`
        : "Your page doesn't specify a language. Add the lang attribute to your HTML tag."
    });
    
    // Hreflang implementation
    items.push({
      name: "Implement hreflang tags for multilingual sites",
      status: hreflangTags.length > 0 ? 'pass' : hasGeoTargeting ? 'warning' : 'info',
      message: hreflangTags.length > 0
        ? `Your page has ${hreflangTags.length} hreflang tags implemented`
        : hasGeoTargeting
          ? "Your page appears to target specific locations but is missing hreflang tags. Consider adding them."
          : "If your site targets multiple languages or regions, implement hreflang tags."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Use canonical tags to avoid duplicate content issues",
      status: 'warning',
      message: "Unable to check if canonical tags are implemented. Use them to prevent duplicate content issues."
    });
    
    items.push({
      name: "Implement structured data (schema markup)",
      status: 'warning',
      message: "Unable to check if structured data is implemented. Add schema markup to help search engines understand your content."
    });
    
    items.push({
      name: "Configure robots meta tags correctly",
      status: 'warning',
      message: "Unable to check robots meta tags. Ensure they're configured correctly if you need to control crawling."
    });
    
    items.push({
      name: "Specify page language",
      status: 'warning',
      message: "Unable to check if your page specifies a language. Add the lang attribute to your HTML tag."
    });
  }
  
  // These checks require additional verification beyond HTML parsing
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

// Content optimization checks
const generateContentOptimizationChecks = (
  domain: string, 
  keyword?: string, 
  hasKeyword = false,
  content: string = '',
  keywordDensity: { 
    density: number, 
    count: number, 
    totalWords: number,
    exactMatchCount: number,
    partialMatchCount: number,
    synonymMatchCount: number
  } = { 
    density: 0, 
    count: 0, 
    totalWords: 0,
    exactMatchCount: 0,
    partialMatchCount: 0,
    synonymMatchCount: 0
  },
  linksInfo: { 
    internal: { count: number, urls: string[] },
    external: { count: number, urls: string[] }
  } = { 
    internal: { count: 0, urls: [] },
    external: { count: 0, urls: [] }
  },
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
      const { density, count, exactMatchCount, partialMatchCount, synonymMatchCount } = keywordDensity;
      
      items.push({
        name: "Ensure content reads naturally without keyword stuffing",
        status: density > 0 && density <= 3 ? 'pass' : density > 3 ? 'warning' : 'fail',
        message: density > 0 && density <= 3
          ? `Your keyword density is optimal (${density.toFixed(1)}%, ${exactMatchCount} exact matches, ${partialMatchCount} partial matches)`
          : density > 3
            ? `Your keyword density is too high (${density.toFixed(1)}%, ${count} occurrences). Reduce to avoid keyword stuffing.`
            : `Your content doesn't contain your keyword "${keyword}". Include it naturally throughout your content.`
      });
      
      // Keyword in first paragraph check
      const firstParagraph = content.split(/<p[^>]*>(.*?)<\/p>/i)[1] || '';
      const keywordInFirstParagraph = checkKeywordPresence(firstParagraph, keyword!.toLowerCase());
      
      items.push({
        name: "Include keyword in the first paragraph",
        status: keywordInFirstParagraph ? 'pass' : 'fail',
        message: keywordInFirstParagraph
          ? `Your first paragraph contains your keyword "${keyword}"`
          : `Your first paragraph doesn't contain your keyword "${keyword}". Include it early in your content.`
      });
    }
    
    // Internal linking check
    const { internal } = linksInfo;
    
    items.push({
      name: "Use internal linking (3-5 internal links per page)",
      status: internal.count >= 3 ? 'pass' : internal.count > 0 ? 'warning' : 'fail',
      message: internal.count >= 3
        ? `Your page has good internal linking (${internal.count} internal links)`
        : internal.count > 0
          ? `Your page has only ${internal.count} internal link(s). Add more for better site navigation.`
          : "Your page has no internal links. Add 3-5 relevant internal links to improve site architecture."
    });
    
    // External linking check
    const { external } = linksInfo;
    
    items.push({
      name: "Include relevant external links to authoritative sources",
      status: external.count > 0 ? 'pass' : 'warning',
      message: external.count > 0
        ? `Your page links to ${external.count} external source(s)`
        : "Your page doesn't link to any external sources. Include links to authoritative sites to increase credibility."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Ensure content is at least 800-1000 words",
      status: 'warning',
      message: "Unable to check your content length. Aim for at least 800-1000 words for comprehensive topic coverage."
    });
    
    items.push({
      name: "Avoid thin content (less than 300 words per page)",
      status: 'warning',
      message: "Unable to check your content depth. Ensure all pages have at least 300 words of substantial content."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Ensure content reads naturally without keyword stuffing",
        status: 'warning',
        message: `Unable to check keyword density. Use "${keyword}" naturally (1-2% density) without stuffing.`
      });
      
      items.push({
        name: "Include keyword in the first paragraph",
        status: 'warning',
        message: `Unable to check if your first paragraph contains your keyword "${keyword}". Include it early in your content.`
      });
    }
    
    items.push({
      name: "Use internal linking (3-5 internal links per page)",
      status: 'warning',
      message: "Unable to check your internal linking structure. Add 3-5 relevant internal links per page."
    });
    
    items.push({
      name: "Include relevant external links to authoritative sources",
      status: 'warning',
      message: "Unable to check external links. Include links to authoritative sites to increase credibility."
    });
  }
  
  // These checks require more advanced analysis
  items.push({
    name: "Optimize for featured snippets",
    status: 'info',
    message: "Structure content to directly answer common questions to increase chances of appearing in featured snippets."
  });
  
  items.push({
    name: "Add FAQs using FAQ Schema",
    status: 'info',
    message: "Consider adding FAQ sections with proper schema markup to improve visibility in search results."
  });
  
  return items;
};

// Mobile optimization checks
const generateMobileOptimizationChecks = (
  domain: string,
  mobileFriendlyInfo: { 
    viewport: boolean, 
    responsiveMediaQueries: boolean,
    touchIcons: boolean
  },
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // Viewport check
    items.push({
      name: "Configure viewport tag correctly",
      status: mobileFriendlyInfo.viewport ? 'pass' : 'fail',
      message: mobileFriendlyInfo.viewport
        ? "Your page has the viewport meta tag configured correctly"
        : "Your page is missing proper viewport configuration. Add the viewport meta tag with width=device-width, initial-scale=1."
    });
    
    // Responsive design check
    items.push({
      name: "Implement responsive design with media queries",
      status: mobileFriendlyInfo.responsiveMediaQueries ? 'pass' : 'warning',
      message: mobileFriendlyInfo.responsiveMediaQueries
        ? "Your page uses responsive design with media queries"
        : "We couldn't detect media queries in your CSS. Implement responsive design for better mobile experience."
    });
    
    // Mobile icons check
    items.push({
      name: "Include mobile app icons for home screen",
      status: mobileFriendlyInfo.touchIcons ? 'pass' : 'warning',
      message: mobileFriendlyInfo.touchIcons
        ? "Your page includes mobile app icons for home screen"
        : "Your page is missing touch icons. Add apple-touch-icon for better mobile user experience."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Configure viewport tag correctly",
      status: 'warning',
      message: "Unable to check your viewport configuration. Ensure the viewport meta tag is properly set."
    });
    
    items.push({
      name: "Implement responsive design with media queries",
      status: 'warning',
      message: "Unable to check responsive design. Use media queries for better mobile experience."
    });
    
    items.push({
      name: "Include mobile app icons for home screen",
      status: 'warning',
      message: "Unable to check mobile app icons. Add apple-touch-icon for better mobile user experience."
    });
  }
  
  // These checks require more advanced analysis
  items.push({
    name: "Ensure proper size and spacing for touch elements",
    status: 'info',
    message: "Make buttons and links at least 44px × 44px for mobile users with appropriate spacing between clickable elements."
  });
  
  items.push({
    name: "Use readable font sizes on mobile (16px+)",
    status: 'info',
    message: "Use at least 16px font size on mobile devices to ensure readability without zooming."
  });
  
  return items;
};

// Social media checks
const generateSocialMediaChecks = (
  domain: string,
  socialMediaInfo: {
    openGraph: { has: boolean, tags: string[] },
    twitterCards: { has: boolean, tags: string[] }
  },
  faviconInfo: { has: boolean, url: string | null },
  contentFetched: boolean = false,
  keyword?: string,
  hasKeyword = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  if (contentFetched) {
    // Open Graph tags check
    items.push({
      name: "Implement Open Graph tags for Facebook sharing",
      status: socialMediaInfo.openGraph.has ? 'pass' : 'fail',
      message: socialMediaInfo.openGraph.has
        ? `Your page has ${socialMediaInfo.openGraph.tags.length} Open Graph tags implemented`
        : "Your page is missing Open Graph tags. Add og:title, og:description, and og:image for better Facebook sharing."
    });
    
    // Keyword in Open Graph tags
    if (hasKeyword && socialMediaInfo.openGraph.has) {
      const keywordLower = keyword!.toLowerCase();
      const ogTitleTag = socialMediaInfo.openGraph.tags.find(tag => tag.startsWith('og:title='));
      const ogDescTag = socialMediaInfo.openGraph.tags.find(tag => tag.startsWith('og:description='));
      
      const keywordInOgTags = ogTitleTag && checkKeywordPresence(ogTitleTag.split('=')[1], keywordLower) || 
                             ogDescTag && checkKeywordPresence(ogDescTag.split('=')[1], keywordLower);
      
      items.push({
        name: "Include keyword in Open Graph tags",
        status: keywordInOgTags ? 'pass' : 'warning',
        message: keywordInOgTags
          ? `Your Open Graph tags contain your keyword "${keyword}"`
          : `Your Open Graph tags don't contain your keyword "${keyword}". Include it for better social sharing relevance.`
      });
    }
    
    // Twitter Card tags check
    items.push({
      name: "Implement Twitter Card markup",
      status: socialMediaInfo.twitterCards.has ? 'pass' : 'fail',
      message: socialMediaInfo.twitterCards.has
        ? `Your page has ${socialMediaInfo.twitterCards.tags.length} Twitter Card tags implemented`
        : "Your page is missing Twitter Card markup. Add twitter:card, twitter:title, twitter:description, and twitter:image."
    });
    
    // Favicon check
    items.push({
      name: "Include a favicon",
      status: faviconInfo.has ? 'pass' : 'warning',
      message: faviconInfo.has
        ? "Your page has a favicon implemented"
        : "Your page is missing a favicon. Add one for better brand recognition in browser tabs."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Implement Twitter Card markup",
      status: 'warning',
      message: "Unable to check Twitter Card implementation. Add markup for better Twitter sharing."
    });
    
    items.push({
      name: "Implement Facebook Open Graph tags",
      status: 'warning',
      message: "Unable to check Open Graph implementation. Add tags for better Facebook sharing."
    });
    
    if (hasKeyword) {
      items.push({
        name: "Include keyword in Open Graph tags",
        status: 'warning',
        message: `Unable to check if your Open Graph tags contain your keyword "${keyword}". Make sure they do for better social sharing relevance.`
      });
    }
    
    items.push({
      name: "Include a favicon",
      status: 'warning',
      message: "Unable to check favicon. Add one for better brand recognition in browser tabs."
    });
  }
  
  // These checks require external verification
  items.push({
    name: "Maintain active social media profiles",
    status: 'info',
    message: "Maintain active and linked social media profiles to improve brand credibility and traffic."
  });
  
  items.push({
    name: "Add social sharing buttons to content",
    status: 'info',
    message: "Add social sharing buttons to make it easy for users to share your content."
  });
  
  return items;
};

// Security and performance checks
const generateSecurityPerformanceChecks = (
  url: string, 
  domain: string,
  pageSpeedIndicators: {
    resourceHints: boolean,
    asyncDeferScripts: boolean,
    minifiedCss: boolean,
    minifiedJs: boolean
  },
  contentFetched: boolean = false
): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // HTTPS check
  items.push({
    name: "Ensure proper HTTPS implementation",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "Your site implements HTTPS correctly"
      : "Your site is not using HTTPS. Install an SSL certificate for better security and SEO."
  });
  
  if (contentFetched) {
    // Resource hints check
    items.push({
      name: "Use resource hints (preload, prefetch, dns-prefetch)",
      status: pageSpeedIndicators.resourceHints ? 'pass' : 'warning',
      message: pageSpeedIndicators.resourceHints
        ? "Your page uses resource hints for faster loading"
        : "Your page doesn't use resource hints. Add preload, prefetch, or dns-prefetch for critical resources."
    });
    
    // Async/defer scripts check
    items.push({
      name: "Use async or defer for non-critical JavaScript",
      status: pageSpeedIndicators.asyncDeferScripts ? 'pass' : 'warning',
      message: pageSpeedIndicators.asyncDeferScripts
        ? "Your page properly uses async or defer for scripts"
        : "Your page doesn't use async or defer attributes for scripts. Add them to improve page load speed."
    });
    
    // Minified CSS check
    items.push({
      name: "Minify CSS files",
      status: pageSpeedIndicators.minifiedCss ? 'pass' : 'warning',
      message: pageSpeedIndicators.minifiedCss
        ? "Your CSS appears to be minified"
        : "Your CSS doesn't appear to be minified. Minify CSS to reduce file size and improve loading speed."
    });
    
    // Minified JS check
    items.push({
      name: "Minify JavaScript files",
      status: pageSpeedIndicators.minifiedJs ? 'pass' : 'warning',
      message: pageSpeedIndicators.minifiedJs
        ? "Your JavaScript appears to be minified"
        : "Your JavaScript doesn't appear to be minified. Minify JavaScript to reduce file size and improve loading speed."
    });
  } else {
    // Fallback checks when content couldn't be fetched
    items.push({
      name: "Use resource hints (preload, prefetch, dns-prefetch)",
      status: 'warning',
      message: "Unable to check resource hints. Add preload, prefetch, or dns-prefetch for critical resources."
    });
    
    items.push({
      name: "Use async or defer for non-critical JavaScript",
      status: 'warning',
      message: "Unable to check script loading attributes. Use async or defer for non-critical scripts."
    });
    
    items.push({
      name: "Minify CSS and JavaScript files",
      status: 'warning',
      message: "Unable to check if your CSS and JavaScript are minified. Minify them to improve page load speed."
    });
  }
  
  // These checks require more advanced analysis
  items.push({
    name: "Optimize Core Web Vitals (LCP, FID, CLS)",
    status: 'info',
    message: "Monitor and optimize Core Web Vitals metrics for better user experience and ranking potential."
  });
  
  items.push({
    name: "Enable Gzip or Brotli compression",
    status: 'info',
    message: "Implement Gzip or Brotli compression to significantly reduce file transfer sizes."
  });
  
  return items;
};

