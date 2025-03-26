
import { URL } from 'url';

// Simple fetcher for actual content validation
export const fetchPageContent = async (url: string): Promise<{ content: string, success: boolean, error?: string }> => {
  try {
    // Add CORS proxy to bypass CORS issues in the frontend
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${corsProxy}${url}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch with status: ${response.status}`);
    }
    
    const content = await response.text();
    return { content, success: true };
  } catch (error) {
    console.error("Error fetching content:", error);
    return { 
      content: '', 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// Extract the title tag from HTML content
export const extractTitle = (content: string): string | null => {
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  return titleMatch ? titleMatch[1].trim() : null;
};

// Extract all meta tags from HTML content
export const extractMetaTags = (content: string): Record<string, string> => {
  const metaTags: Record<string, string> = {};
  const metaRegex = /<meta\s+(?:name|property)="([^"]+)"\s+content="([^"]+)"/gi;
  let match;
  
  while ((match = metaRegex.exec(content)) !== null) {
    metaTags[match[1].toLowerCase()] = match[2];
  }
  
  return metaTags;
};

// Extract h1 tags
export const extractH1Tags = (content: string): string[] => {
  const h1Regex = /<h1[^>]*>(.*?)<\/h1>/gi;
  const h1Tags: string[] = [];
  let match;
  
  while ((match = h1Regex.exec(content)) !== null) {
    h1Tags.push(match[1].replace(/<[^>]*>/g, '').trim());
  }
  
  return h1Tags;
};

// Extract all headings
export const extractHeadings = (content: string): Record<string, string[]> => {
  const headings: Record<string, string[]> = {
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: []
  };
  
  // Function to extract headings by level
  const extractHeadingsByLevel = (level: number): string[] => {
    const regex = new RegExp(`<h${level}[^>]*>(.*?)<\/h${level}>`, 'gi');
    const results: string[] = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      results.push(match[1].replace(/<[^>]*>/g, '').trim());
    }
    
    return results;
  };
  
  // Extract all heading levels
  for (let i = 1; i <= 6; i++) {
    headings[`h${i}` as keyof typeof headings] = extractHeadingsByLevel(i);
  }
  
  return headings;
};

// Check if a URL redirects (HTTP vs HTTPS)
export const checkRedirect = async (url: string): Promise<boolean> => {
  try {
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${corsProxy}${url}`, {
      method: 'HEAD',
      redirect: 'manual',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
    
    return response.redirected;
  } catch (error) {
    console.error("Error checking redirect:", error);
    return false;
  }
};

// Check for image optimization clues in HTML
export const extractImageInfo = (content: string): { 
  totalImages: number,
  withAlt: number, 
  withDimensions: number,
  lazyLoaded: number
} => {
  const imgRegex = /<img[^>]*>/gi;
  const images = content.match(imgRegex) || [];
  
  const totalImages = images.length;
  let withAlt = 0;
  let withDimensions = 0;
  let lazyLoaded = 0;
  
  images.forEach(img => {
    // Check for alt attribute
    if (img.includes('alt="') || img.includes("alt='")) {
      withAlt++;
    }
    
    // Check for width and height attributes
    if ((img.includes('width="') || img.includes("width='")) && 
        (img.includes('height="') || img.includes("height='"))) {
      withDimensions++;
    }
    
    // Check for lazy loading
    if (img.includes('loading="lazy"') || img.includes("loading='lazy'") || 
        img.includes('data-src') || img.includes('data-lazy')) {
      lazyLoaded++;
    }
  });
  
  return { totalImages, withAlt, withDimensions, lazyLoaded };
};

// Extract schema markup
export const hasSchemaMarkup = (content: string): boolean => {
  return content.includes('application/ld+json') || 
         content.includes('itemscope') || 
         content.includes('itemtype');
};

// Check for canonical tag
export const hasCanonicalTag = (content: string): boolean => {
  return /<link[^>]*rel=["']canonical["'][^>]*>/i.test(content);
};

// Check for social media tags
export const hasSocialMediaTags = (content: string): {
  openGraph: boolean,
  twitterCards: boolean
} => {
  const openGraph = /<meta[^>]*property=["']og:[^"']+["'][^>]*>/i.test(content);
  const twitterCards = /<meta[^>]*name=["']twitter:[^"']+["'][^>]*>/i.test(content);
  
  return { openGraph, twitterCards };
};

// Check for robots meta tag
export const hasRobotsMeta = (content: string): boolean => {
  return /<meta[^>]*name=["']robots["'][^>]*>/i.test(content);
};

// Check for internal links
export const extractInternalLinks = (content: string, domain: string): number => {
  const linkRegex = /<a[^>]*href=["']([^"']+)["'][^>]*>/gi;
  const internalLinkPattern = new RegExp(`^(?:https?:\/\/)?(?:www\.)?${domain.replace(/\./g, '\\.')}`, 'i');
  let internalLinksCount = 0;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1];
    if (href.startsWith('/') || href.startsWith('#') || internalLinkPattern.test(href)) {
      internalLinksCount++;
    }
  }
  
  return internalLinksCount;
};

// Analyze content for keyword density
export const analyzeKeywordDensity = (content: string, keyword: string): {
  density: number,
  count: number,
  totalWords: number
} => {
  if (!keyword || !content) {
    return { density: 0, count: 0, totalWords: 0 };
  }
  
  // Remove HTML tags and normalize whitespace
  const textContent = content.replace(/<[^>]*>/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim();
  
  // Count total words
  const totalWords = textContent.split(/\s+/).length;
  
  // Prepare keyword for search (handle multi-word keywords)
  const keywordPattern = new RegExp(`\\b${keyword.replace(/\s+/g, '\\s+')}\\b`, 'gi');
  const matches = textContent.match(keywordPattern) || [];
  const count = matches.length;
  
  // Calculate density as percentage
  const density = totalWords > 0 ? (count / totalWords) * 100 : 0;
  
  return { density, count, totalWords };
};

// Check for mobile-friendly indicators
export const hasMobileFriendlyIndicators = (content: string): boolean => {
  return content.includes('viewport') && 
         content.includes('width=device-width') && 
         content.includes('initial-scale=1');
};
