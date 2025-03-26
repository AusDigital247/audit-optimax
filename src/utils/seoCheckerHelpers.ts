
import { extractHeadContent, extractTags, extractOpenGraphTags } from './fetchPageContent';

// Analyze if a keyword is present in text - improved with more flexible matching
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

// Extract and analyze headings with improved detection
export const analyzeHeadings = async (content: string, keyword: string) => {
  // Extract h1-h6 tags with improved regex patterns
  const headingRegex = {
    h1: /<h1[^>]*>([\s\S]*?)<\/h1>/gi,
    h2: /<h2[^>]*>([\s\S]*?)<\/h2>/gi,
    h3: /<h3[^>]*>([\s\S]*?)<\/h3>/gi,
    h4: /<h4[^>]*>([\s\S]*?)<\/h4>/gi,
    h5: /<h5[^>]*>([\s\S]*?)<\/h5>/gi,
    h6: /<h6[^>]*>([\s\S]*?)<\/h6>/gi
  };
  
  const headings = {
    h1: Array.from(content.matchAll(headingRegex.h1)).map(m => m[1].replace(/<[^>]*>/g, '').trim()),
    h2: Array.from(content.matchAll(headingRegex.h2)).map(m => m[1].replace(/<[^>]*>/g, '').trim()),
    h3: Array.from(content.matchAll(headingRegex.h3)).map(m => m[1].replace(/<[^>]*>/g, '').trim()),
    h4: Array.from(content.matchAll(headingRegex.h4)).map(m => m[1].replace(/<[^>]*>/g, '').trim()),
    h5: Array.from(content.matchAll(headingRegex.h5)).map(m => m[1].replace(/<[^>]*>/g, '').trim()),
    h6: Array.from(content.matchAll(headingRegex.h6)).map(m => m[1].replace(/<[^>]*>/g, '').trim())
  };
  
  // Better keyword analysis to catch variations and derived forms
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

// Analyze images for SEO with improved detection
export const analyzeImages = (content: string, keyword: string) => {
  // Extract all img tags with a more comprehensive regex
  const imgRegex = /<img[^>]*?(?:>|\/>)/gi;
  const imgTags = content.match(imgRegex) || [];
  
  let totalImages = imgTags.length;
  let withAlt = 0;
  let withKeywordInAlt = 0;
  let withDimensions = 0;
  let lazyLoaded = 0;
  let optimizedFormats = 0;
  
  imgTags.forEach(img => {
    // Check for alt attribute with improved detection
    const altMatch = img.match(/alt\s*=\s*["']([^"']*)["']/i);
    if (altMatch && altMatch[1].trim()) {
      withAlt++;
      
      // Check if keyword is in alt text
      if (isKeywordPresent(altMatch[1], keyword)) {
        withKeywordInAlt++;
      }
    }
    
    // Check for dimensions with improved detection
    if ((img.match(/width\s*=\s*["'][^"']*["']/i) || img.match(/width\s*:\s*[^;]*/i)) && 
        (img.match(/height\s*=\s*["'][^"']*["']/i) || img.match(/height\s*:\s*[^;]*/i))) {
      withDimensions++;
    }
    
    // Check for lazy loading with improved detection
    if (img.match(/loading\s*=\s*["']lazy["']/i) || 
        img.match(/data-src/i) || 
        img.match(/data-lazy/i) ||
        img.match(/class\s*=\s*["'][^"']*lazy[^"']*["']/i)) {
      lazyLoaded++;
    }
    
    // Check for optimized image formats with improved detection
    if (img.match(/\.(webp|avif|jxl)/i) || 
        img.match(/type\s*=\s*["']image\/(webp|avif|jxl)["']/i)) {
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

// Check for schema markup with improved detection
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

// Check social media tags with improved detection
export const checkSocialMediaTags = (content: string) => {
  // Improved OG tag extraction
  const ogTags = extractOpenGraphTags(content);
  
  // Improved Twitter cards detection
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

// Check for canonical tag with improved detection
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
  
  // Simple synonym detection based on related words
  const synonymMap: Record<string, string[]> = {
    'seo': ['search', 'ranking', 'optimization', 'optimize', 'engine', 'serp'],
    'toronto': ['gta', 'ontario', 'local'],
    'agency': ['company', 'service', 'firm', 'consultant'],
    'marketing': ['advertise', 'promotion', 'campaign', 'brand']
  };
  
  // Check for synonyms
  let synonymMatches = 0;
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
