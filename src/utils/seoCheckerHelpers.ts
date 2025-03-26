
import { fetchPageContent, extractTitle, extractMetaTags, extractHeadContent, extractTags, extractOpenGraphTags } from './fetchPageContent';

// Analyze if a keyword is present in text
export const isKeywordPresent = (text: string | null, keyword: string): boolean => {
  if (!text || !keyword) return false;
  
  const normalizedText = text.toLowerCase();
  const normalizedKeyword = keyword.toLowerCase();
  
  // Check for exact match
  if (normalizedText.includes(normalizedKeyword)) {
    return true;
  }
  
  // Check for keyword parts (for multi-word keywords)
  const keywordParts = normalizedKeyword.split(/\s+/).filter(part => part.length > 3);
  
  // If all significant parts of the keyword are present, consider it a match
  if (keywordParts.length > 1) {
    const presentParts = keywordParts.filter(part => normalizedText.includes(part));
    if (presentParts.length === keywordParts.length || 
        (keywordParts.length > 2 && presentParts.length >= keywordParts.length - 1)) {
      return true;
    }
  }
  
  return false;
};

// Extract and analyze headings
export const analyzeHeadings = async (content: string, keyword: string) => {
  // Extract h1-h6 tags
  const headings = {
    h1: extractTags(content, 'h1'),
    h2: extractTags(content, 'h2'),
    h3: extractTags(content, 'h3'),
    h4: extractTags(content, 'h4'),
    h5: extractTags(content, 'h5'),
    h6: extractTags(content, 'h6')
  };
  
  // Analyze keyword presence in headings
  const h1WithKeyword = headings.h1.some(h => isKeywordPresent(h, keyword));
  const h2WithKeyword = headings.h2.some(h => isKeywordPresent(h, keyword));
  const h3WithKeyword = headings.h3.some(h => isKeywordPresent(h, keyword));
  
  // Check proper heading hierarchy
  const hasProperHierarchy = headings.h1.length > 0 && 
                            (headings.h2.length === 0 || headings.h1.length <= headings.h2.length) &&
                            (headings.h3.length === 0 || headings.h2.length <= headings.h3.length);
  
  return {
    headings,
    h1Count: headings.h1.length,
    h2Count: headings.h2.length,
    h3Count: headings.h3.length,
    h1WithKeyword,
    h2WithKeyword,
    h3WithKeyword,
    hasProperHierarchy
  };
};

// Analyze images for SEO
export const analyzeImages = (content: string, keyword: string) => {
  // Extract all img tags
  const imgRegex = /<img[^>]*>/gi;
  const imgTags = content.match(imgRegex) || [];
  
  let totalImages = imgTags.length;
  let withAlt = 0;
  let withKeywordInAlt = 0;
  let withDimensions = 0;
  let lazyLoaded = 0;
  let optimizedFormats = 0;
  
  imgTags.forEach(img => {
    // Check for alt attribute
    const altMatch = img.match(/alt\s*=\s*["']([^"']*)["']/i);
    if (altMatch && altMatch[1].trim()) {
      withAlt++;
      
      // Check if keyword is in alt text
      if (isKeywordPresent(altMatch[1], keyword)) {
        withKeywordInAlt++;
      }
    }
    
    // Check for dimensions
    if ((/width\s*=\s*["'][^"']*["']/i.test(img) || /width\s*:\s*[^;]*/i.test(img)) && 
        (/height\s*=\s*["'][^"']*["']/i.test(img) || /height\s*:\s*[^;]*/i.test(img))) {
      withDimensions++;
    }
    
    // Check for lazy loading
    if (/loading\s*=\s*["']lazy["']/i.test(img) || 
        /data-src/i.test(img) || 
        /data-lazy/i.test(img)) {
      lazyLoaded++;
    }
    
    // Check for optimized image formats
    if (/\.(webp|avif|jxl)/i.test(img)) {
      optimizedFormats++;
    }
  });
  
  return {
    totalImages,
    withAlt,
    withKeywordInAlt,
    withDimensions, 
    lazyLoaded,
    optimizedFormats
  };
};

// Check for schema markup
export const checkSchemaMarkup = (content: string): boolean => {
  return (
    /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i.test(content) ||
    /itemscope/i.test(content) || 
    /itemtype\s*=\s*["']http(s)?:\/\/schema\.org/i.test(content)
  );
};

// Check for SSL/HTTPS
export const hasHttps = (url: string): boolean => {
  return url.toLowerCase().startsWith('https://');
};

// Check social media tags
export const checkSocialMediaTags = (content: string) => {
  const ogTags = extractOpenGraphTags(content);
  
  // Check for Twitter cards
  const twitterTags: Record<string, string> = {};
  const headContent = extractHeadContent(content);
  
  const twitterPattern = /<meta\s+[^>]*name\s*=\s*["']twitter:([^"']*)["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  const twitterReversed = /<meta\s+[^>]*content\s*=\s*["']([^"']*)["'][^>]*name\s*=\s*["']twitter:([^"']*)["'][^>]*>/gi;
  
  Array.from(headContent.matchAll(twitterPattern)).forEach(match => {
    twitterTags[match[1]] = match[2];
  });
  
  Array.from(headContent.matchAll(twitterReversed)).forEach(match => {
    twitterTags[match[2]] = match[1];
  });
  
  return {
    openGraph: {
      has: Object.keys(ogTags).length > 0,
      tags: ogTags
    },
    twitter: {
      has: Object.keys(twitterTags).length > 0,
      tags: twitterTags
    }
  };
};

// Check for canonical tag
export const checkCanonicalTag = (content: string) => {
  const headContent = extractHeadContent(content);
  const canonicalMatch = headContent.match(/<link[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/i) ||
                        headContent.match(/<link[^>]*href\s*=\s*["']([^"']*)["'][^>]*rel\s*=\s*["']canonical["'][^>]*>/i);
  
  return {
    has: !!canonicalMatch,
    url: canonicalMatch ? canonicalMatch[1] : null
  };
};

// Calculate keyword density with improved accuracy
export const calculateKeywordDensity = (content: string, keyword: string) => {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                          .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                          .replace(/<[^>]*>/g, ' ')
                          .replace(/\s+/g, ' ')
                          .trim();
  
  // Count total words
  const words = plainText.split(/\s+/);
  const totalWords = words.length;
  
  // Count exact keyword occurrences
  const keywordLower = keyword.toLowerCase();
  const exactPattern = new RegExp(`\\b${keywordLower.replace(/\s+/g, '\\s+')}\\b`, 'gi');
  const exactMatches = (plainText.toLowerCase().match(exactPattern) || []).length;
  
  // Count partial matches (keyword fragments)
  const keywordParts = keywordLower.split(/\s+/).filter(part => part.length > 3);
  let partialMatches = 0;
  let synonymMatches = 0;
  
  // Simple synonym detection based on related words
  const synonymMap: Record<string, string[]> = {
    'seo': ['search', 'ranking', 'optimization', 'optimize', 'engine', 'serp'],
    'toronto': ['gta', 'ontario', 'local'],
    'agency': ['company', 'service', 'firm', 'consultant'],
    'marketing': ['advertise', 'promotion', 'campaign', 'brand']
  };
  
  // Check for synonyms
  for (const [term, synonyms] of Object.entries(synonymMap)) {
    if (keywordLower.includes(term)) {
      for (const synonym of synonyms) {
        const synonymPattern = new RegExp(`\\b${synonym}\\w*\\b`, 'gi');
        const matches = (plainText.toLowerCase().match(synonymPattern) || []).length;
        synonymMatches += matches;
      }
    }
  }
  
  // Check for partial matches
  for (const part of keywordParts) {
    if (part.length > 3) {
      const partPattern = new RegExp(`\\b${part}\\w*\\b`, 'gi');
      const partMatches = (plainText.toLowerCase().match(partPattern) || []).length;
      partialMatches += partMatches > exactMatches ? partMatches - exactMatches : 0;
    }
  }
  
  // Calculate density
  const totalMatches = exactMatches + (partialMatches * 0.5) + (synonymMatches * 0.3);
  const density = totalWords > 0 ? (totalMatches / totalWords) * 100 : 0;
  
  // Determine importance level
  let importance: 'high' | 'medium' | 'low' | 'none' = 'none';
  
  if (density === 0) {
    importance = 'none';
  } else if (density < 0.5) {
    importance = 'low';
  } else if (density <= 3) {
    importance = 'medium';
  } else {
    importance = 'high';
  }
  
  return {
    density,
    count: Math.round(totalMatches),
    totalWords,
    exactMatchCount: exactMatches,
    partialMatchCount: partialMatches,
    synonymMatchCount: synonymMatches,
    importance
  };
};
