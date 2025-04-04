
import { URL } from 'url';

// Improved fetcher for actual content validation with multiple fallback approaches
export const fetchPageContent = async (url: string): Promise<{ content: string, success: boolean, error?: string }> => {
  try {
    // Try multiple CORS proxies and methods to maximize success rate
    const corsProxies = [
      'https://cors-anywhere.herokuapp.com/',
      'https://api.allorigins.win/raw?url=',
      'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    console.log("Attempting to fetch page content for:", url);
    
    // Try direct fetch first (may work for same-origin or CORS-enabled sites)
    try {
      const directResponse = await fetch(url, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (directResponse.ok) {
        const content = await directResponse.text();
        if (content && content.length > 0) {
          console.log("Successfully fetched content directly");
          return { content, success: true };
        }
      }
    } catch (directError) {
      console.log('Direct fetch failed:', directError);
    }
    
    // Try each proxy until one works
    for (const proxy of corsProxies) {
      try {
        console.log(`Trying proxy: ${proxy}`);
        const response = await fetch(`${proxy}${url}`, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          // Set a reasonable timeout
          signal: AbortSignal.timeout(10000)
        });
        
        if (response.ok) {
          const content = await response.text();
          // Verify we got actual HTML content, not an error page from the proxy
          if (content.includes('<!DOCTYPE html>') || content.includes('<html') || content.includes('<body')) {
            console.log(`Successfully fetched content using proxy: ${proxy}`);
            return { content, success: true };
          }
        }
      } catch (proxyError) {
        console.log(`Proxy ${proxy} failed:`, proxyError);
        // Continue to next proxy
      }
    }
    
    // If all methods fail, try a no-cors fetch as last resort
    try {
      const response = await fetch(url, { 
        mode: 'no-cors',
        signal: AbortSignal.timeout(5000)
      });
      
      // If we get here without error, try to get the content
      // Note: 'no-cors' typically returns an opaque response, so this might not work as expected
      console.log("Attempting no-cors fetch as last resort");
      return { 
        content: '', 
        success: false, 
        error: 'Could not fetch page content due to CORS restrictions. Try manual inspection with view-source.' 
      };
    } catch (directError) {
      console.log('No-cors fetch failed:', directError);
    }
    
    // If we reach here, all methods failed
    return { 
      content: '', 
      success: false, 
      error: 'Could not fetch page content due to CORS restrictions. Try using the tool on your own domain or a site that allows CORS.' 
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return { 
      content: '', 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Extract the title tag from HTML content with improved accuracy
export const extractTitle = (content: string): string | null => {
  console.log("Extracting title tag");
  const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : null;
  console.log("Extracted title:", title);
  return title;
};

// Extract meta description with improved accuracy
export const extractMetaDescription = (content: string): string | null => {
  console.log("Extracting meta description");
  const metaDescMatch = content.match(/<meta\s+(?:name|property)="description"\s+content="([^"]+)"/i) || 
                       content.match(/<meta\s+content="([^"]+)"\s+(?:name|property)="description"/i);
  const description = metaDescMatch ? metaDescMatch[1].trim() : null;
  console.log("Extracted meta description:", description);
  return description;
};

// Extract all meta tags from HTML content with improved reliability
export const extractMetaTags = (content: string): Record<string, string> => {
  console.log("Extracting all meta tags");
  const metaTags: Record<string, string> = {};
  
  // Handle both ordering patterns for meta tags
  const pattern1 = /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]*)"/gi;
  const pattern2 = /<meta\s+content="([^"]*)"\s+(?:name|property)="([^"]+)"/gi;
  
  let match;
  
  // Process pattern 1 (name/property first, then content)
  while ((match = pattern1.exec(content)) !== null) {
    metaTags[match[1].toLowerCase()] = match[2];
  }
  
  // Process pattern 2 (content first, then name/property)
  while ((match = pattern2.exec(content)) !== null) {
    metaTags[match[2].toLowerCase()] = match[1];
  }
  
  console.log("Extracted meta tags:", Object.keys(metaTags).length);
  return metaTags;
};

// Extract h1 tags with improved HTML parsing
export const extractH1Tags = (content: string): string[] => {
  console.log("Extracting H1 tags");
  const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  const h1Tags: string[] = [];
  let match;
  
  while ((match = h1Regex.exec(content)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, '').trim();
    if (text) {
      h1Tags.push(text);
    }
  }
  
  console.log("Extracted H1 tags:", h1Tags.length, h1Tags);
  return h1Tags;
};

// Extract all headings with improved HTML parsing
export const extractHeadings = (content: string): Record<string, string[]> => {
  console.log("Extracting all headings");
  const headings: Record<string, string[]> = {
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: []
  };
  
  // Function to extract headings by level with better HTML handling
  const extractHeadingsByLevel = (level: number): string[] => {
    const regex = new RegExp(`<h${level}[^>]*>([\s\S]*?)<\/h${level}>`, 'gi');
    const results: string[] = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '').trim();
      if (text) {
        results.push(text);
      }
    }
    
    return results;
  };
  
  // Extract all heading levels
  for (let i = 1; i <= 6; i++) {
    headings[`h${i}` as keyof typeof headings] = extractHeadingsByLevel(i);
  }
  
  console.log("Extracted headings:", {
    h1: headings.h1.length,
    h2: headings.h2.length,
    h3: headings.h3.length
  });
  
  return headings;
};

// Check if a URL redirects (HTTP vs HTTPS) with improved reliability
export const checkRedirect = async (url: string): Promise<boolean> => {
  try {
    // Normalize the URL first - remove www if present for consistency
    let normalizedUrl = url.replace(/^(https?:\/\/)www\./i, '$1');
    
    // Try with multiple proxies
    const corsProxies = [
      'https://cors-anywhere.herokuapp.com/',
      'https://api.allorigins.win/raw?url='
    ];
    
    for (const proxy of corsProxies) {
      try {
        const response = await fetch(`${proxy}${normalizedUrl}`, {
          method: 'HEAD',
          redirect: 'manual',
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          signal: AbortSignal.timeout(5000)
        });
        
        if (response.ok || response.status === 301 || response.status === 302) {
          return response.redirected || response.status === 301 || response.status === 302;
        }
      } catch (e) {
        // Try next proxy
      }
    }
    
    return false;
  } catch (error) {
    console.error("Error checking redirect:", error);
    return false;
  }
};

// Extract image optimization clues in HTML with improved detection
export const extractImageInfo = (content: string, keyword?: string): { 
  totalImages: number,
  withAlt: number,
  withKeywordInAlt: number,
  withDimensions: number,
  lazyLoaded: number,
  optimizedFormats: number
} => {
  console.log("Extracting image information, keyword:", keyword);
  // More accurate image regex that handles complex attributes
  const imgRegex = /<img[\s\S]*?(?:>|\/>)/gi;
  const images = content.match(imgRegex) || [];
  
  const totalImages = images.length;
  let withAlt = 0;
  let withKeywordInAlt = 0;
  let withDimensions = 0;
  let lazyLoaded = 0;
  let optimizedFormats = 0;
  
  console.log(`Found ${totalImages} images`);
  
  images.forEach(img => {
    // Better alt text detection
    const altMatch = img.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (altMatch) {
      withAlt++;
      
      // Check if keyword is in alt text
      if (keyword && altMatch[1] && altMatch[1].toLowerCase().includes(keyword.toLowerCase())) {
        withKeywordInAlt++;
        console.log(`Found keyword "${keyword}" in alt text: "${altMatch[1]}"`);
      }
    }
    
    // More accurate dimension detection
    if ((/\bwidth\s*=\s*["']([^"']*)["']/i.test(img) || /\bwidth\s*:\s*([^;]+)/i.test(img)) && 
        (/\bheight\s*=\s*["']([^"']*)["']/i.test(img) || /\bheight\s*:\s*([^;]+)/i.test(img))) {
      withDimensions++;
    }
    
    // Better lazy loading detection
    if (/\bloading\s*=\s*["']lazy["']/i.test(img) || 
        /\bdata-src\b/i.test(img) || 
        /\bdata-lazy\b/i.test(img) ||
        /\blazy\s*=\s*["']true["']/i.test(img)) {
      lazyLoaded++;
    }
    
    // Check for optimized formats
    if (/\.(webp|avif|jxl)\b/i.test(img) || 
        /\btype\s*=\s*["']image\/(webp|avif|jxl)["']/i.test(img)) {
      optimizedFormats++;
    }
  });
  
  console.log({
    totalImages,
    withAlt,
    withKeywordInAlt,
    withDimensions,
    lazyLoaded,
    optimizedFormats
  });
  
  return { totalImages, withAlt, withKeywordInAlt, withDimensions, lazyLoaded, optimizedFormats };
};

// Extract schema markup with better detection
export const hasSchemaMarkup = (content: string): boolean => {
  const hasLdJson = /<script[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i.test(content);
  const hasMicrodata = /itemscope/i.test(content) || /itemtype\s*=\s*["']http(s)?:\/\/schema\.org/i.test(content);
  
  console.log("Schema markup detection:", { hasLdJson, hasMicrodata });
  return hasLdJson || hasMicrodata;
};

// Check for canonical tag with improved detection
export const hasCanonicalTag = (content: string): { has: boolean, url: string | null } => {
  // First we'll extract all canonical tags to check if there are multiple
  const canonicalRegex = /<link[^>]*rel\s*=\s*["']canonical["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/gi;
  const allCanonicals: string[] = [];
  let match;
  
  while ((match = canonicalRegex.exec(content)) !== null) {
    allCanonicals.push(match[1]);
  }
  
  // Reset the regex and look for reversed attribute order
  const reversedRegex = /<link[^>]*href\s*=\s*["']([^"']*)["'][^>]*rel\s*=\s*["']canonical["'][^>]*>/gi;
  while ((match = reversedRegex.exec(content)) !== null) {
    allCanonicals.push(match[1]);
  }
  
  // If we found multiple, log them
  if (allCanonicals.length > 1) {
    console.log("Warning: Multiple canonical tags found:", allCanonicals);
  }
  
  const result = {
    has: allCanonicals.length > 0,
    url: allCanonicals.length > 0 ? allCanonicals[0] : null,
    multipleCanonicals: allCanonicals.length > 1,
    allCanonicalUrls: allCanonicals
  };
  
  console.log("Canonical tag detection:", result);
  return result;
};

// Check for social media tags with improved detection
export const hasSocialMediaTags = (content: string): {
  openGraph: { has: boolean, tags: string[] },
  twitterCards: { has: boolean, tags: string[] }
} => {
  const ogTags: string[] = [];
  const twitterTags: string[] = [];
  
  // More accurate pattern matching
  const ogPattern = /<meta[^>]*property\s*=\s*["']og:([^"']*)["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  const twitterPattern = /<meta[^>]*name\s*=\s*["']twitter:([^"']*)["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  
  // Also check reversed attribute order
  const ogPatternReversed = /<meta[^>]*content\s*=\s*["']([^"']*)["'][^>]*property\s*=\s*["']og:([^"']*)["'][^>]*>/gi;
  const twitterPatternReversed = /<meta[^>]*content\s*=\s*["']([^"']*)["'][^>]*name\s*=\s*["']twitter:([^"']*)["'][^>]*>/gi;
  
  let match;
  
  // Extract OG tags
  while ((match = ogPattern.exec(content)) !== null) {
    ogTags.push(`${match[1]}: ${match[2]}`);
  }
  
  while ((match = ogPatternReversed.exec(content)) !== null) {
    ogTags.push(`${match[2]}: ${match[1]}`);
  }
  
  // Extract Twitter tags
  while ((match = twitterPattern.exec(content)) !== null) {
    twitterTags.push(`${match[1]}: ${match[2]}`);
  }
  
  while ((match = twitterPatternReversed.exec(content)) !== null) {
    twitterTags.push(`${match[2]}: ${match[1]}`);
  }
  
  const result = {
    openGraph: {
      has: ogTags.length > 0,
      tags: ogTags
    },
    twitterCards: {
      has: twitterTags.length > 0,
      tags: twitterTags
    }
  };
  
  console.log("Social media tags detection:", {
    ogTagsCount: ogTags.length,
    twitterTagsCount: twitterTags.length
  });
  
  return result;
};

// Check for robots meta tag with improved detection
export const hasRobotsMeta = (content: string): { has: boolean, content: string | null } => {
  const robotsMatch = content.match(/<meta[^>]*name\s*=\s*["']robots["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/i) ||
                     content.match(/<meta[^>]*content\s*=\s*["']([^"']*)["'][^>]*name\s*=\s*["']robots["'][^>]*>/i);
  
  const result = {
    has: !!robotsMatch,
    content: robotsMatch ? robotsMatch[1] : null
  };
  
  console.log("Robots meta tag detection:", result);
  return result;
};

// Check for internal and external links with improved detection
export const extractLinks = (content: string, domain: string): {
  internal: { count: number, urls: string[] },
  external: { count: number, urls: string[] }
} => {
  console.log("Extracting links for domain:", domain);
  const linkRegex = /<a[^>]*href\s*=\s*["']([^"'#]*)["'][^>]*>([\s\S]*?)<\/a>/gi;
  const internalLinkPattern = new RegExp(`^(?:https?:\/\/)?(?:www\.)?${domain.replace(/\./g, '\\.')}`, 'i');
  const internalUrls: string[] = [];
  const externalUrls: string[] = [];
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (!href) continue;
    
    // Skip empty anchors, javascript: and mailto: links
    if (href.startsWith('javascript:') || href.startsWith('mailto:') || href === '#') {
      continue;
    }
    
    if (href.startsWith('/') || href.startsWith('#') || internalLinkPattern.test(href)) {
      internalUrls.push(href);
    } else if (href.match(/^https?:\/\//i)) {
      externalUrls.push(href);
    }
  }
  
  console.log(`Found ${internalUrls.length} internal links and ${externalUrls.length} external links`);
  
  return {
    internal: {
      count: internalUrls.length,
      urls: internalUrls
    },
    external: {
      count: externalUrls.length,
      urls: externalUrls
    }
  };
};

// Analyze keyword presence in text with exact and variation matching
export const analyzeKeywordInText = (text: string, keyword: string): {
  hasExactMatch: boolean,
  hasPartialMatch: boolean,
  exactMatches: number,
  partialMatches: number,
  variations: string[]
} => {
  if (!keyword || !text) {
    return { hasExactMatch: false, hasPartialMatch: false, exactMatches: 0, partialMatches: 0, variations: [] };
  }
  
  console.log(`Analyzing keyword "${keyword}" in text (length: ${text.length})`);
  
  const normalizedText = text.toLowerCase();
  const keywordLower = keyword.toLowerCase();
  
  // Check for exact matches (case insensitive)
  const exactPattern = new RegExp(`\\b${keyword.replace(/\s+/g, '\\s+')}\\b`, 'gi');
  const exactMatches = (normalizedText.match(exactPattern) || []).length;
  
  // Check for keyword variations and partial matches
  const keywordWords = keywordLower.split(/\s+/).filter(word => word.length > 3);
  const variations: string[] = [];
  let partialMatches = 0;
  
  // Look for partial matches and variations
  const allWords = normalizedText.split(/\s+/);
  for (const word of allWords) {
    if (word.length > 3) {
      for (const keywordWord of keywordWords) {
        // Check for stems of keyword words (simple stemming approach)
        if (keywordWord.length > 4 && (
            word.includes(keywordWord) || 
            keywordWord.includes(word) ||
            // Common stemming: check if one word is a stem of another (very simplified approach)
            (keywordWord.length > 5 && word.startsWith(keywordWord.substring(0, keywordWord.length - 2))) || 
            (word.length > 5 && keywordWord.startsWith(word.substring(0, word.length - 2)))
          )) {
          if (!variations.includes(word) && word !== keywordLower) {
            variations.push(word);
            partialMatches++;
          }
        }
      }
    }
  }
  
  // For multi-word keywords, check for proximity matches
  if (keywordWords.length > 1) {
    // This simplified proximity check looks for keyword words within close positions
    let foundProximity = false;
    for (let i = 0; i < allWords.length - keywordWords.length + 1; i++) {
      const segment = allWords.slice(i, i + keywordWords.length + 2).join(' ');
      let matchCount = 0;
      for (const keywordWord of keywordWords) {
        if (segment.includes(keywordWord)) {
          matchCount++;
        }
      }
      
      // If we found most of the keyword words in close proximity, count it as a variation
      if (matchCount >= keywordWords.length - 1 && !foundProximity) {
        partialMatches += 1;
        foundProximity = true; // Only count one proximity match to avoid overcounting
      }
    }
  }
  
  console.log(`Keyword analysis results:`, {
    exactMatches,
    partialMatches,
    variationsCount: variations.length,
    variations
  });
  
  return {
    hasExactMatch: exactMatches > 0,
    hasPartialMatch: partialMatches > 0,
    exactMatches,
    partialMatches,
    variations
  };
};

// Analyze content for keyword density with better text extraction and analysis
export const analyzeKeywordDensity = (content: string, keyword: string): {
  density: number,
  count: number,
  totalWords: number,
  exactMatchCount: number,
  partialMatchCount: number,
  synonymMatchCount: number,
  importance: 'high' | 'medium' | 'low' | 'none'
} => {
  if (!keyword || !content) {
    return { 
      density: 0, 
      count: 0, 
      totalWords: 0, 
      exactMatchCount: 0, 
      partialMatchCount: 0, 
      synonymMatchCount: 0, 
      importance: 'none' 
    };
  }
  
  console.log(`Analyzing keyword density for "${keyword}"`);
  
  // Better HTML content extraction - get text from the body if possible
  const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const textContent = bodyMatch 
    ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, ' ')
                  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                  .replace(/<[^>]*>/g, ' ')
    : content.replace(/<script[\s\S]*?<\/script>/gi, ' ')
             .replace(/<style[\s\S]*?<\/style>/gi, ' ')
             .replace(/<[^>]*>/g, ' ');
  
  // Normalize whitespace
  const normalizedText = textContent.replace(/\s+/g, ' ').trim();
  
  // Count total words
  const words = normalizedText.split(/\s+/);
  const totalWords = words.length;
  
  // Use the new keyword analysis function
  const keywordAnalysis = analyzeKeywordInText(normalizedText, keyword);
  
  // Calculate total keyword occurrence count (exact + partial)
  const count = keywordAnalysis.exactMatches + keywordAnalysis.partialMatches;
  
  // Calculate density as percentage
  const density = totalWords > 0 ? (count / totalWords) * 100 : 0;
  
  // Determine keyword importance based on density
  let importance: 'high' | 'medium' | 'low' | 'none' = 'none';
  
  if (density === 0) {
    importance = 'none';
  } else if (density < 0.5) {
    importance = 'low';
  } else if (density <= 2.5) {
    importance = 'medium';
  } else {
    importance = 'high'; // Could be too high if > 5%
  }
  
  console.log(`Keyword density analysis results:`, {
    density: density.toFixed(2) + '%',
    count,
    totalWords,
    exactMatchCount: keywordAnalysis.exactMatches,
    partialMatchCount: keywordAnalysis.partialMatches,
    synonymMatchCount: keywordAnalysis.variations.length,
    importance
  });
  
  return { 
    density, 
    count, 
    totalWords, 
    exactMatchCount: keywordAnalysis.exactMatches, 
    partialMatchCount: keywordAnalysis.partialMatches,
    synonymMatchCount: keywordAnalysis.variations.length,
    importance
  };
};

// Analyze keyword presence in title
export const analyzeKeywordInTitle = (title: string | null, keyword: string): {
  present: boolean,
  atBeginning: boolean,
  exactMatch: boolean,
  partialMatch: boolean
} => {
  if (!title || !keyword) {
    return { present: false, atBeginning: false, exactMatch: false, partialMatch: false };
  }
  
  console.log(`Analyzing keyword "${keyword}" in title: "${title}"`);
  
  const titleLower = title.toLowerCase();
  const keywordLower = keyword.toLowerCase();
  
  // Check for exact match
  const exactMatch = titleLower.includes(keywordLower);
  
  // Check if keyword is at the beginning
  const atBeginning = titleLower.startsWith(keywordLower) || 
                     titleLower.startsWith(`the ${keywordLower}`) || 
                     titleLower.startsWith(`a ${keywordLower}`);
  
  // Check for partial match with keyword parts
  const keywordParts = keywordLower.split(/\s+/).filter(part => part.length > 3);
  let partialMatch = false;
  
  for (const part of keywordParts) {
    if (titleLower.includes(part)) {
      partialMatch = true;
      break;
    }
  }
  
  const result = {
    present: exactMatch || partialMatch,
    atBeginning,
    exactMatch,
    partialMatch: partialMatch && !exactMatch // Only count as partial if not exact
  };
  
  console.log("Keyword in title analysis:", result);
  
  return result;
};

// Check for mobile-friendly indicators with better detection
export const hasMobileFriendlyIndicators = (content: string): {
  viewport: boolean, 
  responsiveMediaQueries: boolean,
  touchIcons: boolean
} => {
  const hasViewport = /<meta[^>]*name\s*=\s*["']viewport["'][^>]*content\s*=\s*["'][^"']*width=device-width[^"']*["'][^>]*>/i.test(content);
  const hasMediaQueries = /@media\s*\([^)]*max-width|@media\s*\([^)]*min-width/i.test(content);
  const hasTouchIcons = /<link[^>]*rel\s*=\s*["']apple-touch-icon["'][^>]*>/i.test(content) || 
                       /<meta[^>]*name\s*=\s*["']apple-mobile-web-app-capable["'][^>]*>/i.test(content);
  
  console.log("Mobile-friendly indicators:", { hasViewport, hasMediaQueries, hasTouchIcons });
  
  return {
    viewport: hasViewport,
    responsiveMediaQueries: hasMediaQueries,
    touchIcons: hasTouchIcons
  };
};

// Extract favicon information with improved detection
export const hasFavicon = (content: string): { has: boolean, url: string | null } => {
  const faviconMatch = content.match(/<link[^>]*rel\s*=\s*["'](icon|shortcut icon)["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/i) ||
                      content.match(/<link[^>]*href\s*=\s*["']([^"']*)["'][^>]*rel\s*=\s*["'](icon|shortcut icon)["'][^>]*>/i);
  
  if (faviconMatch) {
    // Handle both regex pattern matches
    const url = faviconMatch[1] === 'icon' || faviconMatch[1] === 'shortcut icon' 
      ? faviconMatch[2]  // First pattern matched
      : faviconMatch[1]; // Second pattern matched
    return { has: true, url };
  }
  
  return { has: false, url: null };
};

// Check for HTTPS/SSL implementation
export const checkHttps = (url: string): boolean => {
  return url.toLowerCase().startsWith('https://');
};

// Detect page language with improved detection
export const detectLanguage = (content: string): string | null => {
  const htmlLangMatch = content.match(/<html[^>]*lang\s*=\s*["']([^"']*)["'][^>]*>/i);
  if (htmlLangMatch) {
    return htmlLangMatch[1];
  }
  
  const metaLangMatch = content.match(/<meta[^>]*http-equiv\s*=\s*["']content-language["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/i);
  if (metaLangMatch) {
    return metaLangMatch[1];
  }
  
  return null;
};

// Extract hreflang tags with improved detection
export const getHreflangTags = (content: string): Array<{ language: string, url: string }> => {
  const hreflangTags: Array<{ language: string, url: string }> = [];
  const hreflangPattern = /<link[^>]*rel\s*=\s*["']alternate["'][^>]*hreflang\s*=\s*["']([^"']*)["'][^>]*href\s*=\s*["']([^"']*)["'][^>]*>/gi;
  
  let match;
  while ((match = hreflangPattern.exec(content)) !== null) {
    hreflangTags.push({
      language: match[1],
      url: match[2]
    });
  }
  
  return hreflangTags;
};

// Detect if page is targeting specific locations with improved detection
export const detectGeoTargeting = (content: string): boolean => {
  // Check for location-specific meta
  const hasGeoMeta = /<meta[^>]*name\s*=\s*["'](geo\.|ICBM|geo.position)["'][^>]*>/i.test(content);
  
  // Check for hreflang tags
  const hasHreflang = /<link[^>]*rel\s*=\s*["']alternate["'][^>]*hreflang\s*=/i.test(content);
  
  // Check for common location schema
  const hasLocationSchema = content.includes('"@type":"LocalBusiness"') || 
                          content.includes('"@type": "LocalBusiness"') ||
                          content.includes('"@type":"Place"') ||
                          content.includes('"@type": "Place"');
  
  return hasGeoMeta || hasHreflang || hasLocationSchema;
};

// Detect page loading speed indicators with improved detection
export const detectPageSpeedIndicators = (content: string): {
  resourceHints: boolean,
  asyncDeferScripts: boolean,
  minifiedCss: boolean,
  minifiedJs: boolean
} => {
  // Check for resource hints (preload, prefetch, dns-prefetch)
  const hasResourceHints = /<link[^>]*rel\s*=\s*["'](preload|prefetch|dns-prefetch|preconnect)["'][^>]*>/i.test(content);
  
  // Check for async/defer script attributes
  const hasAsyncDefer = /<script[^>]*(async|defer)[\s>]/i.test(content);
  
  // Simple heuristics for minified CSS (not perfect)
  const cssBlocks = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  let minifiedCss = false;
  
  for (const block of cssBlocks) {
    const cssContent = block.replace(/<style[^>]*>|<\/style>/gi, '');
    // A crude heuristic: minified CSS tends to have very few newlines compared to content length
    const newlineRatio = (cssContent.match(/\n/g) || []).length / Math.max(1, cssContent.length);
    if (cssContent.length > 100 && newlineRatio < 0.01) {
      minifiedCss = true;
      break;
    }
  }
  
  // Simple heuristics for minified JS (not perfect)
  const jsBlocks = content.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
  let minifiedJs = false;
  
  for (const block of jsBlocks) {
    const jsContent = block.replace(/<script[^>]*>|<\/script>/gi, '');
    // A crude heuristic: minified JS tends to have very few newlines compared to content length
    const newlineRatio = (jsContent.match(/\n/g) || []).length / Math.max(1, jsContent.length);
    if (jsContent.length > 100 && newlineRatio < 0.01) {
      minifiedJs = true;
      break;
    }
  }
  
  return {
    resourceHints: hasResourceHints,
    asyncDeferScripts: hasAsyncDefer,
    minifiedCss,
    minifiedJs
  };
};

// NEW: Calculate SEO score based on points system rather than percentage
export const calculateSeoScorePoints = (checks: Array<{status: 'pass' | 'fail' | 'warning' | 'info'}>, 
                                        weightMap: Record<string, number>): number => {
  // Default weights if not provided
  const weights = weightMap || {
    'pass': 1,
    'warning': 0.5,
    'fail': 0,
    'info': 0
  };
  
  // Calculate total possible points and earned points
  const totalPossiblePoints = checks.filter(check => check.status !== 'info').length;
  
  if (totalPossiblePoints === 0) return 0;
  
  const earnedPoints = checks.reduce((total, check) => {
    return total + (weights[check.status] || 0);
  }, 0);
  
  // Calculate score as percentage
  return Math.round((earnedPoints / totalPossiblePoints) * 100);
};

