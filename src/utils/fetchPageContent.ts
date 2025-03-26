
import axios from 'axios';

/**
 * Improved page content fetcher with robust URL handling and content validation
 */
export const fetchPageContent = async (url: string): Promise<{ content: string, success: boolean, error?: string }> => {
  try {
    console.log("Fetching content for exact URL:", url);
    
    // STRICT URL HANDLING: Preserve the exact URL with full path
    const urlToFetch = url.trim();
    const urlObj = new URL(urlToFetch);
    const urlPath = urlObj.pathname;
    
    console.log("URL to fetch (with preserved path):", urlToFetch);
    console.log("URL path component:", urlPath);
    
    // If we're requesting a specific path (not just the domain), we'll verify we got the right content
    const isRequestingSpecificPage = urlPath && urlPath !== "/" && urlPath !== "";
    console.log("Requesting specific page (not homepage):", isRequestingSpecificPage);
    
    // Use multiple CORS proxies with fallback strategy
    const corsProxies = [
      'https://corsproxy.io/?',
      'https://api.allorigins.win/raw?url=',
      'https://api.codetabs.com/v1/proxy?quest='
    ];
    
    // Try each proxy or direct fetch until we get valid specific page content
    for (const proxy of [...corsProxies, 'direct']) {
      try {
        let response;
        
        if (proxy === 'direct') {
          console.log("Attempting direct fetch for URL:", urlToFetch);
          response = await axios.get(urlToFetch, { 
            timeout: 15000,
            headers: {
              'Accept': 'text/html',
              'User-Agent': 'Mozilla/5.0 SEO Analyzer Bot'
            }
          });
        } else {
          console.log(`Trying proxy: ${proxy} for URL: ${urlToFetch}`);
          const proxyUrl = `${proxy}${encodeURIComponent(urlToFetch)}`;
          console.log(`Full proxy URL: ${proxyUrl}`);
          
          response = await axios.get(proxyUrl, { 
            timeout: 15000,
            headers: {
              'Accept': 'text/html',
              'User-Agent': 'Mozilla/5.0 SEO Analyzer Bot'
            }
          });
        }
        
        if (response.status === 200 && response.data) {
          const content = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
          
          // Basic validation to ensure we got actual HTML
          if (content.includes('<!DOCTYPE html>') || content.includes('<html') || content.includes('<head')) {
            console.log(`Fetch succeeded using ${proxy === 'direct' ? 'direct fetch' : proxy}`);
            
            // Extract title for validation
            const titleMatch = content.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
            const pageTitle = titleMatch ? titleMatch[1].trim() : 'No title found';
            console.log("Page title from content:", pageTitle);
            
            // If we're requesting a specific page, validate that we got the right content
            if (isRequestingSpecificPage) {
              console.log("Validating we received content for the specific page:", urlPath);
              
              // STRICT VERIFICATION: Check multiple indicators that we got the right page
              const pageIndicators = [
                // Check for canonical link with our exact URL or path
                content.includes(`<link rel="canonical" href="${urlToFetch}"`),
                content.includes(`<link rel="canonical" href="${urlObj.origin}${urlPath}"`),
                
                // Check for Open Graph URL with our exact URL or path
                content.includes(`<meta property="og:url" content="${urlToFetch}"`),
                content.includes(`<meta property="og:url" content="${urlObj.origin}${urlPath}"`),
                
                // Check for the path component in the content
                content.includes(`"${urlPath}"`),
                content.includes(`'${urlPath}'`),
                content.includes(`=${urlPath}`),
                
                // Check if the content has URL slugs that match our path parts
                urlPath.split('/').filter(part => part && part.length > 3).some(pathPart => 
                  content.includes(`"${pathPart}"`) || 
                  content.includes(`'${pathPart}'`) || 
                  content.includes(`>${pathPart}<`)
                )
              ];
              
              const validationPassed = pageIndicators.some(indicator => indicator === true);
              console.log("Page validation indicators:", pageIndicators);
              console.log("Content appears to be for the specific URL:", validationPassed);
              
              // If content doesn't appear to be for the specific URL, try another proxy
              if (!validationPassed) {
                console.log("Content doesn't appear to be for the specific page, trying another source");
                continue;
              }
            }
            
            // If validation passed or not needed, return the content
            return { content, success: true };
          } else {
            console.log("Response doesn't contain valid HTML, trying another source");
          }
        } else {
          console.log(`Response status not 200 or no data, trying another source`);
        }
      } catch (fetchErr) {
        console.log(`Fetch using ${proxy} failed:`, fetchErr.message);
      }
    }
    
    // If all attempts failed
    return { 
      content: '', 
      success: false, 
      error: 'Could not fetch content specifically for the requested URL. The site may be redirecting to the homepage.' 
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
