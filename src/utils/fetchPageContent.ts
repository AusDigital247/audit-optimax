
import axios from 'axios';

/**
 * Improved page content fetcher with multiple fallback strategies
 */
export const fetchPageContent = async (url: string): Promise<{ content: string, success: boolean, error?: string }> => {
  try {
    console.log("Fetching content for:", url);
    
    // Use server-side proxies that handle CORS more reliably
    const corsProxies = [
      'https://corsproxy.io/?',
      'https://api.allorigins.win/raw?url=',
      'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    // Ensure we use the exact URL provided without trying to simplify to domain only
    const urlToFetch = url.trim();
    
    // Normalize URL only if needed
    const normalizedUrl = urlToFetch.startsWith('http') ? urlToFetch : `https://${urlToFetch}`;
    
    // Try each proxy with axios
    for (const proxy of corsProxies) {
      try {
        console.log(`Trying proxy: ${proxy}`);
        const proxyUrl = `${proxy}${encodeURIComponent(normalizedUrl)}`;
        const response = await axios.get(proxyUrl, { 
          timeout: 15000,
          headers: {
            'Accept': 'text/html',
            'User-Agent': 'Mozilla/5.0 SEO Analyzer Bot'
          }
        });
        
        if (response.status === 200 && response.data) {
          const content = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
          
          // Basic validation to ensure we got actual HTML
          if (content.includes('<!DOCTYPE html>') || content.includes('<html') || content.includes('<head')) {
            console.log("Proxy fetch succeeded with", proxy);
            console.log("Fetched URL:", normalizedUrl);
            return { content, success: true };
          }
        }
      } catch (proxyErr) {
        console.log(`Proxy ${proxy} failed:`, proxyErr.message);
      }
    }
    
    // Last resort: direct fetch (likely to fail due to CORS)
    try {
      console.log("Attempting direct fetch as last resort");
      const response = await axios.get(normalizedUrl, { 
        timeout: 10000,
        headers: {
          'Accept': 'text/html',
          'User-Agent': 'Mozilla/5.0 SEO Analyzer Bot'
        }
      });
      
      if (response.status === 200 && response.data) {
        console.log("Direct fetch succeeded");
        return { content: response.data, success: true };
      }
    } catch (directFetchErr) {
      console.log("Direct fetch failed:", directFetchErr.message);
    }
    
    // If all attempts failed
    return { 
      content: '', 
      success: false, 
      error: 'Could not fetch page content. CORS restrictions or network issues may be preventing access.' 
    };
  } catch (error) {
    console.error("Error in fetchPageContent:", error);
    return { 
      content: '', 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Extract the head section for more reliable meta tag parsing
export const extractHeadContent = (content: string): string => {
  const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  return headMatch ? headMatch[1] : '';
};

// Extract all HTML content between specific tags
export const extractElementContent = (content: string, tagName: string): string[] => {
  const regex = new RegExp(`<${tagName}[^>]*>(.*?)<\\/${tagName}>`, 'gs');
  const matches = Array.from(content.matchAll(regex));
  return matches.map(match => match[1].trim());
};

// Improved HTML tag extraction that handles self-closing tags and attributes
export const extractTags = (content: string, tagName: string, attributes: Record<string, string> = {}): string[] => {
  // Create attribute matchers
  const attrMatchers = Object.entries(attributes)
    .map(([key, value]) => `${key}\\s*=\\s*["']${value}["']`)
    .join('.*?');
  
  // Create regex pattern for the tag with optional attributes
  const pattern = attrMatchers 
    ? new RegExp(`<${tagName}[^>]*?${attrMatchers}[^>]*?>([\\s\\S]*?)<\\/${tagName}>`, 'gi')
    : new RegExp(`<${tagName}[^>]*?>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  
  const matches = Array.from(content.matchAll(pattern));
  return matches.map(match => match[1].trim());
};

// Extract meta tags with better accuracy
export const extractMetaTags = (content: string): Record<string, string> => {
  const headContent = extractHeadContent(content);
  const metaTags: Record<string, string> = {};
  
  // Match all meta tags in head
  const metaTagPattern = /<meta\s+([^>]*)>/gi;
  const metaMatches = Array.from(headContent.matchAll(metaTagPattern));
  
  metaMatches.forEach(match => {
    const attributesStr = match[1];
    
    // Extract name/property and content attributes
    const nameMatch = attributesStr.match(/(?:name|property)\s*=\s*["']([^"']*)["']/i);
    const contentMatch = attributesStr.match(/content\s*=\s*["']([^"']*)["']/i);
    
    if (nameMatch && contentMatch) {
      metaTags[nameMatch[1].toLowerCase()] = contentMatch[1];
    }
  });
  
  return metaTags;
};

// Extract title with better accuracy
export const extractTitle = (content: string): string | null => {
  const headContent = extractHeadContent(content);
  const titleMatch = headContent.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : null;
};

// Extract Open Graph tags specifically
export const extractOpenGraphTags = (content: string): Record<string, string> => {
  const headContent = extractHeadContent(content);
  const ogTags: Record<string, string> = {};
  
  // Match all meta tags with og: property
  const ogPattern = /<meta\s+[^>]*property\s*=\s*["']og:([^"']*)["'][^>]*content\s*=\s*["']([^"']*)["'][^>]*>/gi;
  const ogReversedPattern = /<meta\s+[^>]*content\s*=\s*["']([^"']*)["'][^>]*property\s*=\s*["']og:([^"']*)["'][^>]*>/gi;
  
  // Process normal order (property then content)
  Array.from(headContent.matchAll(ogPattern)).forEach(match => {
    ogTags[match[1]] = match[2];
  });
  
  // Process reversed order (content then property)
  Array.from(headContent.matchAll(ogReversedPattern)).forEach(match => {
    ogTags[match[2]] = match[1];
  });
  
  return ogTags;
};

// Extract images with better detection
export const extractImageInfo = (content: string, keyword?: string): { 
  totalImages: number,
  withAlt: number,
  withKeywordInAlt: number,
  withDimensions: number,
  lazyLoaded: number,
  optimizedFormats: number
} => {
  // More accurate image regex that handles complex attributes
  const imgRegex = /<img[\s\S]*?(?:>|\/>)/gi;
  const images = content.match(imgRegex) || [];
  
  const totalImages = images.length;
  let withAlt = 0;
  let withKeywordInAlt = 0;
  let withDimensions = 0;
  let lazyLoaded = 0;
  let optimizedFormats = 0;
  
  images.forEach(img => {
    // Better alt text detection
    const altMatch = img.match(/\balt\s*=\s*["']([^"']*)["']/i);
    if (altMatch && altMatch[1].trim()) {
      withAlt++;
      
      // Check if keyword is in alt text
      if (keyword && altMatch[1] && altMatch[1].toLowerCase().includes(keyword.toLowerCase())) {
        withKeywordInAlt++;
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
  
  return { 
    totalImages, 
    withAlt, 
    withKeywordInAlt, 
    withDimensions, 
    lazyLoaded, 
    optimizedFormats 
  };
};

