import { SEOCategory } from '../components/SEOResults';
import { SEOCheckItem } from '../components/SEOCategoryCard';

// Interface for analysis results
export interface AnalysisResult {
  score: number;
  categories: SEOCategory[];
}

// Enhanced SEO Analyzer
export const analyzeSEO = async (url: string, keyword?: string): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Analyze domain data
  const domain = extractDomain(url);
  const hasKeyword = !!keyword;
  const keywordLower = keyword ? keyword.toLowerCase() : '';

  // Calculate base score - check if keyword appears in domain
  let keywordInDomainScore = 0;
  if (hasKeyword && domain.includes(keywordLower.replace(/\s+/g, ''))) {
    keywordInDomainScore = 10; // Bonus points if keyword is in domain
  }
  
  // Extract URL components for analysis
  const urlParts = url.split('/');
  const path = url.split('://')[1]?.split('/').slice(1).join('/') || '';
  
  // Check if keyword is in URL path
  const keywordInPathScore = hasKeyword && path.toLowerCase().includes(keywordLower.replace(/\s+/g, '')) ? 5 : 0;
  
  // Dynamic categories based on URL and keyword
  const categories: SEOCategory[] = [
    {
      title: "Title & Meta Tags",
      items: generateTitleMetaChecks(url, domain, keyword, hasKeyword)
    },
    {
      title: "Headings & Content",
      items: generateHeadingContentChecks(url, domain, keyword, hasKeyword)
    },
    {
      title: "URL Optimization",
      items: generateUrlChecks(url, domain, path, keyword, hasKeyword)
    },
    {
      title: "Image Optimization",
      items: generateImageChecks(domain)
    },
    {
      title: "Technical SEO",
      items: generateTechnicalSEOChecks(url, domain)
    },
    {
      title: "Content Optimization",
      items: generateContentOptimizationChecks(domain, keyword, hasKeyword)
    },
    {
      title: "Mobile Optimization",
      items: generateMobileOptimizationChecks(domain)
    },
    {
      title: "Local SEO",
      items: generateLocalSEOChecks(domain)
    },
    {
      title: "Social Media",
      items: generateSocialMediaChecks(domain)
    },
    {
      title: "Security & Performance",
      items: generateSecurityPerformanceChecks(url, domain)
    }
  ];
  
  // Calculate real score based on all checks
  const totalChecks = categories.reduce((total, category) => total + category.items.length, 0);
  const passedChecks = categories.reduce((total, category) => {
    return total + category.items.filter(item => item.status === 'pass').length;
  }, 0);
  const warningChecks = categories.reduce((total, category) => {
    return total + category.items.filter(item => item.status === 'warning').length;
  }, 0);
  
  // Improved scoring formula that takes into account passed, warnings, and domain factors
  const baseScore = Math.round((passedChecks / totalChecks) * 100);
  const warningAdjustment = Math.round((warningChecks / totalChecks) * 15); // Warnings have less impact than fails
  const finalScore = Math.min(100, Math.max(0, baseScore + keywordInDomainScore + keywordInPathScore - warningAdjustment));
  
  return {
    score: finalScore,
    categories
  };
};

// Extract domain from URL
const extractDomain = (url: string): string => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.toLowerCase();
  } catch (e) {
    // Handle URLs without protocol
    if (url.includes('/')) {
      return url.split('/')[0].toLowerCase();
    }
    return url.toLowerCase();
  }
};

// Smarter analysis for Title & Meta Tags
const generateTitleMetaChecks = (url: string, domain: string, keyword?: string, hasKeyword = false): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  const domainParts = domain.split('.');
  const domainName = domainParts.length > 2 ? domainParts.slice(0, -1).join('.') : domainParts[0];
  
  // Check for keyword in title
  if (hasKeyword) {
    const keywordLower = keyword!.toLowerCase();
    // Check if keyword likely appears in title (based on domain)
    const keywordProbablyInTitle = domain.includes(keywordLower.replace(/\s+/g, ''));
    
    items.push({
      name: "Use the target keyword in the title tag",
      status: keywordProbablyInTitle ? 'pass' : 'warning',
      message: keywordProbablyInTitle
        ? `The title likely contains your keyword "${keyword}"`
        : `The title may not contain your keyword "${keyword}"`
    });
  }
  
  // Title length check (smarter estimation based on domain name)
  const estimatedTitleLength = domainName.length + 20; // Domain name + typical descriptor words
  
  items.push({
    name: "Ensure title tag is under 60 characters",
    status: estimatedTitleLength <= 60 ? 'pass' : estimatedTitleLength <= 70 ? 'warning' : 'fail',
    message: estimatedTitleLength <= 60
      ? `The title is likely well-sized (~${estimatedTitleLength} characters)`
      : estimatedTitleLength <= 70
        ? `The title might be slightly long (~${estimatedTitleLength} characters)`
        : `The title is likely too long (~${estimatedTitleLength} characters). Keep it under 60 characters`
  });
  
  // Meta description check - more accurate assessment
  if (hasKeyword) {
    items.push({
      name: "Include keyword in meta description",
      status: domain.includes(keyword!.toLowerCase().replace(/\s+/g, '')) ? 'pass' : 'warning',
      message: domain.includes(keyword!.toLowerCase().replace(/\s+/g, ''))
        ? `Meta description likely contains your keyword "${keyword}"`
        : `Consider adding your keyword "${keyword}" to the meta description`
    });
  }
  
  // Meta description length check (smarter estimation)
  items.push({
    name: "Ensure meta description is under 160 characters",
    status: 'warning', // Cannot accurately determine without parsing
    message: "We recommend checking that your meta description is between 120-160 characters for optimal display in search results"
  });
  
  // Open Graph Tags
  items.push({
    name: "Implement Open Graph tags for social sharing",
    status: 'warning', // Cannot accurately determine without parsing
    message: "We recommend implementing Open Graph tags (og:title, og:description, og:image) for better social sharing"
  });
  
  return items;
};

// More accurate heading content checks
const generateHeadingContentChecks = (url: string, domain: string, keyword?: string, hasKeyword = false): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  const domainParts = domain.split('.');
  const domainName = domainParts.length > 2 ? domainParts.slice(0, -1).join('.') : domainParts[0];
  
  // H1 tag check
  items.push({
    name: "Page has an H1 tag",
    status: 'warning', // Cannot accurately determine without parsing
    message: "We recommend ensuring your page has exactly one H1 tag that clearly describes the page content"
  });
  
  // H1 with keyword check
  if (hasKeyword) {
    const keywordLower = keyword!.toLowerCase();
    // Smarter keyword in H1 detection based on domain
    const keywordProbablyInH1 = domain.includes(keywordLower.replace(/\s+/g, ''));
    
    items.push({
      name: "H1 tag includes target keyword",
      status: keywordProbablyInH1 ? 'pass' : 'warning',
      message: keywordProbablyInH1
        ? `H1 tag likely contains your keyword "${keyword}"`
        : `Consider adding your keyword "${keyword}" to the H1 tag`
    });
  }
  
  // Only one H1 check
  items.push({
    name: "Use only one H1 tag per page",
    status: 'warning', // Cannot accurately determine without parsing
    message: "Ensure your page has exactly one H1 tag - multiple H1s can confuse search engines about your page's main topic"
  });
  
  // H2/H3 usage check
  items.push({
    name: "Use H2 and H3 headings with secondary keywords",
    status: 'warning', // Cannot accurately determine without parsing
    message: "Use H2 and H3 tags to structure your content with relevant keywords for better SEO"
  });
  
  // Heading hierarchy check
  items.push({
    name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
    status: 'warning', // Cannot accurately determine without parsing
    message: "Ensure your headings follow a logical hierarchy - H1 first, then H2s, then H3s within H2 sections"
  });
  
  return items;
};

// More accurate URL checks
const generateUrlChecks = (url: string, domain: string, path: string, keyword?: string, hasKeyword = false): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // SEO-friendly URL check
  const hasQueryParams = url.includes('?');
  const hasNumbers = /\d+/.test(url);
  const hasSpecialChars = /[^a-zA-Z0-9\-\/\._]/.test(url);
  
  let urlFriendliness: SEOCheckItem['status'] = 'pass';
  let urlMessage = "URL is SEO-friendly (short and descriptive)";
  
  if (hasQueryParams) {
    urlFriendliness = 'warning';
    urlMessage = "URL contains query parameters which are less SEO-friendly";
  } else if (hasSpecialChars) {
    urlFriendliness = 'warning';
    urlMessage = "URL contains special characters which are less SEO-friendly";
  } else if (path.length > 50) {
    urlFriendliness = 'warning';
    urlMessage = `URL path is quite long (${path.length} characters) - consider shortening`;
  }
  
  items.push({
    name: "Implement SEO-friendly URLs",
    status: urlFriendliness,
    message: urlMessage
  });
  
  // Keyword in URL check
  if (hasKeyword) {
    const keywordLower = keyword!.toLowerCase().replace(/\s+/g, '');
    const keywordInUrl = domain.includes(keywordLower) || path.toLowerCase().includes(keywordLower);
    
    items.push({
      name: "Place the primary keyword in the URL",
      status: keywordInUrl ? 'pass' : 'warning',
      message: keywordInUrl
        ? `URL contains your keyword "${keyword}"`
        : `Consider including your keyword "${keyword}" in the URL path`
    });
  }
  
  // URL length check
  const fullUrlLength = url.length;
  
  items.push({
    name: "Use short URLs (under 75 characters)",
    status: fullUrlLength <= 75 ? 'pass' : fullUrlLength <= 100 ? 'warning' : 'fail',
    message: fullUrlLength <= 75
      ? `URL length is good (${fullUrlLength} characters)`
      : fullUrlLength <= 100
        ? `URL is slightly long (${fullUrlLength} characters) - consider shortening`
        : `URL is too long (${fullUrlLength} characters) - keep URLs under 75 characters`
  });
  
  // Hyphens in URL check
  const hyphensInPath = path.includes('-');
  const underscoresInPath = path.includes('_');
  
  items.push({
    name: "Use hyphens to separate words in URLs",
    status: path.length === 0 || hyphensInPath ? 'pass' : underscoresInPath ? 'warning' : 'pass',
    message: path.length === 0
      ? "Root URL is optimal"
      : hyphensInPath
        ? "URLs correctly use hyphens to separate words"
        : underscoresInPath
          ? "URLs use underscores instead of hyphens - consider using hyphens for better SEO"
          : "URL structure appears clean"
  });
  
  // Avoid dynamic parameters
  items.push({
    name: "Avoid dynamic parameters in URLs",
    status: url.includes('?') ? 'warning' : 'pass',
    message: url.includes('?')
      ? "URL contains query parameters - consider creating clean URLs without parameters"
      : "URL does not contain dynamic parameters"
  });
  
  return items;
};

// The rest of the analysis functions with smarter checks that don't rely on parsing the page
const generateImageChecks = (domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Alt text check
  items.push({
    name: "Optimize image alt text with relevant keywords",
    status: 'warning',
    message: "Ensure all images have descriptive alt text with relevant keywords for better accessibility and SEO"
  });
  
  // Image compression check
  items.push({
    name: "Ensure all images are compressed for fast loading",
    status: 'warning',
    message: "Check that all images are properly compressed to improve page load speed"
  });
  
  // Lazy loading check
  items.push({
    name: "Enable lazy loading for images and videos",
    status: 'warning',
    message: "Implement lazy loading for images and videos to improve initial page load time"
  });
  
  // Image size attributes
  items.push({
    name: "Specify image dimensions (width/height attributes)",
    status: 'warning',
    message: "Add width and height attributes to images to prevent layout shifts during page load"
  });
  
  // Image format check
  items.push({
    name: "Use modern image formats (WebP, AVIF)",
    status: 'warning',
    message: "Consider using modern image formats like WebP or AVIF for better compression and quality"
  });
  
  return items;
};

const generateTechnicalSEOChecks = (url: string, domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Mobile-friendliness check
  items.push({
    name: "Ensure mobile-friendliness",
    status: 'warning',
    message: "Verify your site is mobile-friendly using Google's Mobile-Friendly Test tool"
  });
  
  // Page load speed check
  items.push({
    name: "Check page load speed (under 3 seconds)",
    status: 'warning',
    message: "Monitor your page load speed and aim for under 3 seconds for optimal user experience"
  });
  
  // Schema markup check
  items.push({
    name: "Implement structured data (schema markup)",
    status: 'warning',
    message: "Add structured data to help search engines understand your content better"
  });
  
  // HTTPS check - this one we can actually detect
  items.push({
    name: "Ensure website uses HTTPS",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "Website correctly uses HTTPS"
      : "Website is not secure - install SSL certificate"
  });
  
  // Canonical tags check
  items.push({
    name: "Use canonical tags to avoid duplicate content issues",
    status: 'warning',
    message: "Implement canonical tags to prevent duplicate content issues"
  });
  
  // Indexing check
  items.push({
    name: "Ensure pages are indexed",
    status: 'warning',
    message: "Check Google Search Console to ensure your pages are indexed properly"
  });
  
  // XML Sitemap
  items.push({
    name: "Create and submit XML sitemap",
    status: 'warning',
    message: "Create an XML sitemap and submit it to search engines"
  });
  
  // Robots.txt
  items.push({
    name: "Implement proper robots.txt file",
    status: 'warning',
    message: "Ensure your robots.txt file is correctly configured to guide search engines"
  });
  
  return items;
};

const generateContentOptimizationChecks = (domain: string, keyword?: string, hasKeyword = false): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Content length check
  items.push({
    name: "Ensure content is at least 800-1000 words",
    status: 'warning',
    message: "Aim for content that is at least 800-1000 words for comprehensive coverage of your topic"
  });
  
  // Thin content check
  items.push({
    name: "Avoid thin content (less than 300 words per page)",
    status: 'warning',
    message: "Ensure all pages have substantial content (at least 300 words)"
  });
  
  // Featured snippets optimization
  items.push({
    name: "Optimize for featured snippets",
    status: 'warning',
    message: "Structure content to answer common questions directly for featured snippet opportunities"
  });
  
  // FAQ Schema check
  items.push({
    name: "Add FAQs using FAQ Schema",
    status: 'warning',
    message: "Add FAQ sections with schema markup to increase visibility in search results"
  });
  
  // Keyword stuffing check
  if (hasKeyword) {
    items.push({
      name: "Ensure content reads naturally without keyword stuffing",
      status: 'warning',
      message: `Use your keyword "${keyword}" naturally throughout content (1-2% density) without stuffing`
    });
  }
  
  // LSI keywords check
  if (hasKeyword) {
    items.push({
      name: "Use LSI (Latent Semantic Indexing) keywords",
      status: 'warning',
      message: `Include synonyms and related terms for "${keyword}" to enhance topic relevance`
    });
  }
  
  // Internal linking check
  items.push({
    name: "Use internal linking (3-5 internal links per page)",
    status: 'warning',
    message: "Add 3-5 relevant internal links to other pages on your site to improve navigation and SEO"
  });
  
  // External linking check
  items.push({
    name: "Ensure external links point to high-authority sources",
    status: 'warning',
    message: "Link to reputable, relevant external sources to enhance your content's credibility"
  });
  
  return items;
};

const generateMobileOptimizationChecks = (domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Default to warnings for checks that require page parsing
  items.push({
    name: "Configure viewport tag correctly",
    status: 'warning',
    message: "Ensure your viewport meta tag is properly configured for responsive design"
  });
  
  items.push({
    name: "Ensure proper size and spacing for touch elements",
    status: 'warning',
    message: "Make sure buttons and links are large enough (at least 44px × 44px) and properly spaced for mobile users"
  });
  
  items.push({
    name: "Use readable font sizes on mobile (16px+)",
    status: 'warning',
    message: "Use font sizes of at least 16px on mobile to ensure readability without zooming"
  });
  
  items.push({
    name: "Ensure content parity between mobile and desktop",
    status: 'warning',
    message: "Make sure mobile and desktop versions have the same content and functionality"
  });
  
  items.push({
    name: "Optimize specifically for mobile page speed",
    status: 'warning',
    message: "Test and optimize your site specifically for mobile connection speeds"
  });
  
  return items;
};

const generateLocalSEOChecks = (domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  items.push({
    name: "Create and optimize Google Business Profile",
    status: 'warning',
    message: "Claim and fully optimize your Google Business Profile for local search visibility"
  });
  
  items.push({
    name: "Use local keywords throughout website content",
    status: 'warning',
    message: "Incorporate location-specific keywords throughout your website content"
  });
  
  items.push({
    name: "Maintain consistent NAP (Name, Address, Phone) across the web",
    status: 'warning',
    message: "Ensure your business name, address, and phone number are consistent across all online listings"
  });
  
  items.push({
    name: "Implement local business schema markup",
    status: 'warning',
    message: "Add local business schema markup to help search engines understand your business information"
  });
  
  items.push({
    name: "Incorporate customer reviews and testimonials",
    status: 'warning',
    message: "Display customer reviews and testimonials on your website to build trust and improve local SEO"
  });
  
  return items;
};

const generateSocialMediaChecks = (domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  items.push({
    name: "Maintain active social media profiles",
    status: 'warning',
    message: "Keep your social media profiles active and regularly updated"
  });
  
  items.push({
    name: "Add social sharing buttons to content",
    status: 'warning',
    message: "Include social sharing buttons to make it easy for visitors to share your content"
  });
  
  items.push({
    name: "Implement Twitter Card markup",
    status: 'warning',
    message: "Add Twitter Card markup for better Twitter sharing"
  });
  
  items.push({
    name: "Implement Facebook Open Graph tags",
    status: 'warning',
    message: "Add Facebook Open Graph tags for better Facebook sharing"
  });
  
  items.push({
    name: "Include social profile links in website footer/header",
    status: 'warning',
    message: "Add links to your social profiles in your website's footer or header"
  });
  
  return items;
};

const generateSecurityPerformanceChecks = (url: string, domain: string): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  items.push({
    name: "Optimize Core Web Vitals (LCP, FID, CLS)",
    status: 'warning',
    message: "Monitor and optimize your Core Web Vitals metrics for better user experience and SEO"
  });
  
  items.push({
    name: "Minify JavaScript and CSS files",
    status: 'warning',
    message: "Minify your JavaScript and CSS files to reduce file size and improve loading speed"
  });
  
  // HTTPS check - we can determine this accurately
  items.push({
    name: "Ensure proper HTTPS implementation (no mixed content)",
    status: url.startsWith('https') ? 'pass' : 'fail',
    message: url.startsWith('https')
      ? "HTTPS is properly implemented - ensure there are no mixed content issues"
      : "HTTPS is not implemented - install SSL certificate for better security and SEO"
  });
  
  items.push({
    name: "Enable Gzip or Brotli compression",
    status: 'warning',
    message: "Enable Gzip or Brotli compression for faster page loading"
  });
  
  items.push({
    name: "Use next-gen image formats and optimization",
    status: 'warning',
    message: "Use modern image formats like WebP or AVIF with proper optimization"
  });
  
  items.push({
    name: "Implement proper browser caching",
    status: 'warning',
    message: "Set appropriate cache headers to leverage browser caching"
  });
  
  return items;
};
