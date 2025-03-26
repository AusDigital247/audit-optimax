import { SEOCategory } from '../components/SEOResults';
import { SEOCheckItem } from '../components/SEOCategoryCard';

// Mock data for demo purposes - in a real app, this would be connected to an actual SEO analysis service
export interface AnalysisResult {
  score: number;
  categories: SEOCategory[];
}

// This is a simplified mock implementation
export const analyzeSEO = async (url: string, keyword?: string): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // For demo purposes, generate different results based on URL or random factors
  // In a real application, this would connect to an actual SEO analysis API
  const isDemoSite = url.includes('example.com') || url.includes('google.com');
  const randomFactor = Math.random();
  
  let baseScore = isDemoSite ? 85 : 60 + Math.floor(randomFactor * 30);

  // Adjust score based on presence of keyword
  if (keyword && keyword.length > 0) {
    baseScore = Math.max(baseScore - 5, 0); // Slight penalty as we "detect" keyword issues
  }
  
  // Generate categories with items
  const categories: SEOCategory[] = [
    {
      title: "Title & Meta Tags",
      items: generateTitleMetaChecks(url, keyword, isDemoSite, randomFactor)
    },
    {
      title: "Headings & Content",
      items: generateHeadingContentChecks(url, keyword, isDemoSite, randomFactor)
    },
    {
      title: "URL Optimization",
      items: generateUrlChecks(url, keyword, isDemoSite, randomFactor)
    },
    {
      title: "Image Optimization",
      items: generateImageChecks(isDemoSite, randomFactor)
    },
    {
      title: "Technical SEO",
      items: generateTechnicalSEOChecks(url, isDemoSite, randomFactor)
    },
    {
      title: "Content Optimization",
      items: generateContentOptimizationChecks(keyword, isDemoSite, randomFactor)
    },
    {
      title: "Mobile Optimization",
      items: generateMobileOptimizationChecks(isDemoSite, randomFactor)
    },
    {
      title: "Local SEO",
      items: generateLocalSEOChecks(isDemoSite, randomFactor)
    },
    {
      title: "Social Media",
      items: generateSocialMediaChecks(isDemoSite, randomFactor)
    },
    {
      title: "Security & Performance",
      items: generateSecurityPerformanceChecks(url, isDemoSite, randomFactor)
    }
  ];
  
  // Calculate actual score based on all checks
  const totalChecks = categories.reduce((total, category) => total + category.items.length, 0);
  const passedChecks = categories.reduce((total, category) => {
    return total + category.items.filter(item => item.status === 'pass').length;
  }, 0);
  
  const calculatedScore = Math.round((passedChecks / totalChecks) * 100);
  
  // Blend the base score and calculated score for more natural variation
  const finalScore = Math.round((baseScore * 0.3) + (calculatedScore * 0.7));
  
  return {
    score: finalScore,
    categories
  };
};

const generateTitleMetaChecks = (url: string, keyword?: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const hasKeyword = !!keyword;
  const items: SEOCheckItem[] = [];
  
  // Title tag keyword check
  if (hasKeyword) {
    items.push({
      name: "Use the target keyword in the title tag",
      status: isDemoSite || randomFactor > 0.4 ? 'pass' : 'fail',
      message: isDemoSite || randomFactor > 0.4 
        ? `The title contains your keyword "${keyword}"`
        : `The title does not contain your keyword "${keyword}"`
    });
  }
  
  // Title length check
  items.push({
    name: "Ensure title tag is under 60 characters",
    status: isDemoSite || randomFactor > 0.3 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.3
      ? "The title is optimally sized at 48 characters"
      : "The title is too long (72 characters). Keep it under 60 characters"
  });
  
  // Meta description check
  items.push({
    name: "Optimize meta description",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.2 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Meta description is optimized with appropriate length and keywords"
      : randomFactor > 0.2
        ? "Meta description exists but could use improvement by including more keywords"
        : "Meta description is missing or too short"
  });
  
  // Meta description length check
  items.push({
    name: "Ensure meta description is under 160 characters",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Meta description length is good (145 characters)"
      : randomFactor > 0.3
        ? "Meta description is slightly long (168 characters)"
        : "Meta description is too long (215 characters). Keep it under 160 characters"
  });
  
  // Open Graph Tags
  items.push({
    name: "Implement Open Graph tags for social sharing",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Open Graph tags are properly implemented"
      : "Open Graph tags are missing - add og:title, og:description, og:image tags"
  });
  
  return items;
};

const generateHeadingContentChecks = (url: string, keyword?: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const hasKeyword = !!keyword;
  const items: SEOCheckItem[] = [];
  
  // H1 tag check
  items.push({
    name: "Page has an H1 tag",
    status: isDemoSite || randomFactor > 0.2 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.2
      ? "H1 tag is present on the page"
      : "No H1 tag found on the page"
  });
  
  // H1 with keyword check
  if (hasKeyword) {
    items.push({
      name: "H1 tag includes target keyword",
      status: isDemoSite || randomFactor > 0.4 ? 'pass' : 'fail',
      message: isDemoSite || randomFactor > 0.4
        ? `H1 tag contains your keyword "${keyword}"`
        : `H1 tag does not contain your keyword "${keyword}"`
    });
  }
  
  // Only one H1 check
  items.push({
    name: "Use only one H1 tag per page",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Page correctly uses a single H1 tag"
      : "Multiple H1 tags found (3) - use only one H1 per page"
  });
  
  // H2/H3 usage check
  items.push({
    name: "Use H2 and H3 headings with secondary keywords",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Good use of H2 and H3 headings with relevant keywords"
      : randomFactor > 0.3
        ? "H2/H3 tags present but lacking keywords or hierarchy"
        : "Inadequate use of H2/H3 headings"
  });
  
  // Heading hierarchy check
  items.push({
    name: "Maintain proper heading hierarchy (H1 → H2 → H3)",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Heading hierarchy is properly structured"
      : randomFactor > 0.3
        ? "Some heading hierarchy issues (H3 before H2)"
        : "Poor heading structure - headings not in correct order"
  });
  
  return items;
};

const generateUrlChecks = (url: string, keyword?: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const hasKeyword = !!keyword;
  const items: SEOCheckItem[] = [];
  
  // SEO-friendly URL check
  items.push({
    name: "Implement SEO-friendly URLs",
    status: isDemoSite || randomFactor > 0.4 ? 'pass' : randomFactor > 0.2 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.4
      ? "URL is SEO-friendly (short and descriptive)"
      : randomFactor > 0.2
        ? "URL structure could be improved (avoid parameters or IDs)"
        : "URL is not SEO-friendly (too long or contains irrelevant characters)"
  });
  
  // Keyword in URL check
  if (hasKeyword) {
    items.push({
      name: "Place the primary keyword in the URL",
      status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
      message: isDemoSite || randomFactor > 0.5
        ? `URL contains your keyword "${keyword}"`
        : `URL does not contain your keyword "${keyword}"`
    });
  }
  
  // URL length check
  items.push({
    name: "Use short URLs (under 75 characters)",
    status: isDemoSite || randomFactor > 0.3 ? 'pass' : 'warning',
    message: isDemoSite || randomFactor > 0.3
      ? "URL length is good (45 characters)"
      : "URL is slightly long (82 characters) - consider shortening"
  });
  
  // Hyphens in URL check
  items.push({
    name: "Use hyphens to separate words in URLs",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "URLs correctly use hyphens to separate words"
      : "URLs use underscores or no separators - switch to hyphens"
  });
  
  // Avoid dynamic parameters
  items.push({
    name: "Avoid dynamic parameters in URLs",
    status: url.includes('?') ? 'warning' : 'pass',
    message: url.includes('?')
      ? "URL contains query parameters - consider creating clean URLs"
      : "URL does not contain dynamic parameters"
  });
  
  return items;
};

const generateImageChecks = (isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Alt text check
  items.push({
    name: "Optimize image alt text with relevant keywords",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "All images have descriptive alt text with relevant keywords"
      : randomFactor > 0.3
        ? "Some images are missing alt text or have generic descriptions"
        : "Most images are missing alt text (7 out of 12 images)"
  });
  
  // Image compression check
  items.push({
    name: "Ensure all images are compressed for fast loading",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.2 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Images are properly compressed"
      : randomFactor > 0.2
        ? "Some images could be further optimized (3 large images detected)"
        : "Images are too large and slowing down page load (total size: 5.4MB)"
  });
  
  // Lazy loading check
  items.push({
    name: "Enable lazy loading for images and videos",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Lazy loading is properly implemented for all media"
      : "Lazy loading is not implemented - add the loading='lazy' attribute"
  });
  
  // Image size attributes
  items.push({
    name: "Specify image dimensions (width/height attributes)",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Image dimensions are properly specified"
      : "Images are missing width/height attributes - add them to prevent layout shifts"
  });
  
  // Image format check
  items.push({
    name: "Use modern image formats (WebP, AVIF)",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Modern image formats are used where appropriate"
      : randomFactor > 0.3
        ? "Some images could use modern formats for better compression"
        : "Images are using older formats - consider converting to WebP or AVIF"
  });
  
  return items;
};

const generateTechnicalSEOChecks = (url: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Mobile-friendliness check
  items.push({
    name: "Ensure mobile-friendliness",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.2 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Page is mobile-friendly"
      : randomFactor > 0.2
        ? "Page is somewhat mobile-friendly but has some issues"
        : "Page is not mobile-friendly - needs responsive design"
  });
  
  // Page load speed check
  items.push({
    name: "Check page load speed (under 3 seconds)",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Page load speed is good (1.8 seconds)"
      : randomFactor > 0.3
        ? "Page load speed is average (3.5 seconds) - could be improved"
        : "Page load speed is slow (6.2 seconds) - needs optimization"
  });
  
  // Schema markup check
  items.push({
    name: "Implement structured data (schema markup)",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Structured data is properly implemented"
      : randomFactor > 0.3
        ? "Basic structured data present but could be enhanced"
        : "No structured data found - implement schema markup"
  });
  
  // HTTPS check
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
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Canonical tags are properly implemented"
      : "No canonical tags found - implement to prevent duplicate content issues"
  });
  
  // Indexing check
  items.push({
    name: "Ensure pages are indexed",
    status: isDemoSite || randomFactor > 0.8 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.8
      ? "Page is properly indexed in search engines"
      : randomFactor > 0.4
        ? "Page is indexed but has low visibility"
        : "Page is not indexed or is blocked by robots.txt"
  });
  
  // XML Sitemap
  items.push({
    name: "Create and submit XML sitemap",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "XML sitemap is properly implemented and submitted to search engines"
      : "XML sitemap is missing or not submitted to search engines"
  });
  
  // Robots.txt
  items.push({
    name: "Implement proper robots.txt file",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Robots.txt is properly configured"
      : randomFactor > 0.4
        ? "Robots.txt exists but could be optimized"
        : "Robots.txt is missing or incorrectly blocking important content"
  });
  
  return items;
};

const generateContentOptimizationChecks = (keyword?: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const hasKeyword = !!keyword;
  const items: SEOCheckItem[] = [];
  
  // Content length check
  items.push({
    name: "Ensure content is at least 800-1000 words",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Content length is good (1,250 words)"
      : randomFactor > 0.3
        ? "Content is slightly short (650 words) - aim for 800+ words"
        : "Content is too thin (320 words) - expand to at least 800 words"
  });
  
  // Thin content check
  items.push({
    name: "Avoid thin content (less than 300 words per page)",
    status: isDemoSite || randomFactor > 0.3 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.3
      ? "No thin content issues detected"
      : "Page has thin content sections - expand content to at least 300 words"
  });
  
  // Featured snippets optimization
  items.push({
    name: "Optimize for featured snippets",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Content is well-structured for featured snippets"
      : randomFactor > 0.4
        ? "Content could be better optimized for featured snippets"
        : "Content is not optimized for featured snippets - add direct answers to common questions"
  });
  
  // FAQ Schema check
  items.push({
    name: "Add FAQs using FAQ Schema",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "FAQ schema is properly implemented"
      : "No FAQ schema detected - implement to improve visibility in search"
  });
  
  // Keyword stuffing check
  if (hasKeyword) {
    items.push({
      name: "Ensure content reads naturally without keyword stuffing",
      status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
      message: isDemoSite || randomFactor > 0.5
        ? "Content uses keywords naturally without stuffing"
        : randomFactor > 0.3
          ? `Keyword "${keyword}" density is slightly high (3.8%) - aim for 1-2%`
          : `Excessive keyword stuffing detected for "${keyword}" (5.7%) - reduce usage`
    });
  }
  
  // LSI keywords check
  if (hasKeyword) {
    items.push({
      name: "Use LSI (Latent Semantic Indexing) keywords",
      status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
      message: isDemoSite || randomFactor > 0.6
        ? "Good use of related keywords and synonyms"
        : randomFactor > 0.3
          ? "Some related keywords present but could use more variety"
          : "Few related keywords detected - add more synonyms and related terms"
    });
  }
  
  // Internal linking check
  items.push({
    name: "Use internal linking (3-5 internal links per page)",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.2 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Good internal linking structure (4 relevant links)"
      : randomFactor > 0.2
        ? "Limited internal links (2) - add more relevant internal links"
        : "No internal links found - implement internal linking strategy"
  });
  
  // External linking check
  items.push({
    name: "Ensure external links point to high-authority sources",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "External links point to high-quality, authoritative sources"
      : randomFactor > 0.4
        ? "Some external links could be improved with more authoritative sources"
        : "External links missing or pointing to low-quality sources"
  });
  
  return items;
};

const generateMobileOptimizationChecks = (isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Viewport configuration
  items.push({
    name: "Configure viewport tag correctly",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Viewport meta tag is properly configured"
      : "Viewport meta tag is missing or incorrectly configured"
  });
  
  // Touch elements
  items.push({
    name: "Ensure proper size and spacing for touch elements",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Touch elements are properly sized and spaced"
      : randomFactor > 0.3
        ? "Some touch elements are too small or close together"
        : "Touch elements are too small and difficult to tap accurately"
  });
  
  // Mobile font size
  items.push({
    name: "Use readable font sizes on mobile (16px+)",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Font sizes are appropriate for mobile viewing"
      : randomFactor > 0.3
        ? "Some text is slightly small for mobile (14px)"
        : "Font sizes are too small for mobile devices (below 12px)"
  });
  
  // Mobile content parity
  items.push({
    name: "Ensure content parity between mobile and desktop",
    status: isDemoSite || randomFactor > 0.8 ? 'pass' : randomFactor > 0.5 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.8
      ? "Mobile and desktop versions contain the same content"
      : randomFactor > 0.5
        ? "Some content is hidden on mobile version"
        : "Significant content differences between mobile and desktop versions"
  });
  
  // Mobile page speed
  items.push({
    name: "Optimize specifically for mobile page speed",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Mobile page speed is optimized well (2.1s load time)"
      : randomFactor > 0.3
        ? "Mobile load time could be improved (4.2s)"
        : "Mobile page load time is poor (7.5s) - needs significant optimization"
  });
  
  return items;
};

const generateLocalSEOChecks = (isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Google Business Profile
  items.push({
    name: "Create and optimize Google Business Profile",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Google Business Profile is claimed and fully optimized"
      : randomFactor > 0.3
        ? "Google Business Profile exists but needs more information"
        : "No Google Business Profile found - create and optimize one"
  });
  
  // Local keywords
  items.push({
    name: "Use local keywords throughout website content",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Local keywords are well integrated throughout the content"
      : randomFactor > 0.3
        ? "Some local keywords present but could be better integrated"
        : "Few or no local keywords found in the content"
  });
  
  // NAP consistency
  items.push({
    name: "Maintain consistent NAP (Name, Address, Phone) across the web",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "NAP information is consistent across all citations"
      : randomFactor > 0.4
        ? "Some NAP inconsistencies found across citations"
        : "Significant NAP inconsistencies found - needs correction"
  });
  
  // Local business schema
  items.push({
    name: "Implement local business schema markup",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Local business schema markup is properly implemented"
      : "Local business schema markup is missing - implement to improve local visibility"
  });
  
  // Local reviews
  items.push({
    name: "Incorporate customer reviews and testimonials",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Customer reviews are well-integrated on the website"
      : randomFactor > 0.3
        ? "Some customer reviews present but could be better showcased"
        : "No customer reviews or testimonials found on the website"
  });
  
  return items;
};

const generateSocialMediaChecks = (isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Social media presence
  items.push({
    name: "Maintain active social media profiles",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Social media profiles are active and regularly updated"
      : randomFactor > 0.3
        ? "Social media profiles exist but are infrequently updated"
        : "Social media profiles are inactive or missing"
  });
  
  // Social share buttons
  items.push({
    name: "Add social sharing buttons to content",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Social sharing buttons are properly implemented"
      : "Social sharing buttons are missing - add them to increase content reach"
  });
  
  // Twitter cards
  items.push({
    name: "Implement Twitter Card markup",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Twitter Card markup is properly implemented"
      : "Twitter Card markup is missing - add for better Twitter sharing"
  });
  
  // Facebook Open Graph
  items.push({
    name: "Implement Facebook Open Graph tags",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Facebook Open Graph tags are properly implemented"
      : "Facebook Open Graph tags are missing - add for better Facebook sharing"
  });
  
  // Social links
  items.push({
    name: "Include social profile links in website footer/header",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "Social profile links are properly displayed on the website"
      : "Social profile links are missing from the website"
  });
  
  return items;
};

const generateSecurityPerformanceChecks = (url: string, isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
  const items: SEOCheckItem[] = [];
  
  // Core Web Vitals
  items.push({
    name: "Optimize Core Web Vitals (LCP, FID, CLS)",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Core Web Vitals metrics are within good thresholds"
      : randomFactor > 0.3
        ? "Some Core Web Vitals metrics need improvement"
        : "Core Web Vitals metrics are poor - needs significant optimization"
  });
  
  // JavaScript and CSS minification
  items.push({
    name: "Minify JavaScript and CSS files",
    status: isDemoSite || randomFactor > 0.7 ? 'pass' : randomFactor > 0.4 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.7
      ? "JavaScript and CSS files are properly minified"
      : randomFactor > 0.4
        ? "Some JavaScript and CSS files are minified, others are not"
        : "JavaScript and CSS files are not minified - implement minification"
  });
  
  // HTTPS implementation
  items.push({
    name: "Ensure proper HTTPS implementation (no mixed content)",
    status: isDemoSite || (url.startsWith('https') && randomFactor > 0.5) ? 'pass' : 'fail',
    message: isDemoSite || (url.startsWith('https') && randomFactor > 0.5)
      ? "HTTPS is properly implemented with no mixed content issues"
      : url.startsWith('https')
        ? "HTTPS is enabled but mixed content issues detected"
        : "HTTPS is not implemented - install SSL certificate"
  });
  
  // Gzip compression
  items.push({
    name: "Enable Gzip or Brotli compression",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Compression is properly enabled for faster page loading"
      : "Compression is not enabled - configure server to use Gzip/Brotli"
  });
  
  // Image optimization
  items.push({
    name: "Use next-gen image formats and optimization",
    status: isDemoSite || randomFactor > 0.5 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.5
      ? "Next-gen image formats are used with proper optimization"
      : randomFactor > 0.3
        ? "Some images use older formats or are not fully optimized"
        : "Images need significant optimization - convert to WebP/AVIF formats"
  });
  
  // Browser caching
  items.push({
    name: "Implement proper browser caching",
    status: isDemoSite || randomFactor > 0.6 ? 'pass' : randomFactor > 0.3 ? 'warning' : 'fail',
    message: isDemoSite || randomFactor > 0.6
      ? "Browser caching is properly configured"
      : randomFactor > 0.3
        ? "Browser caching is enabled but cache periods are too short"
        : "Browser caching is not configured - set appropriate cache headers"
  });
  
  return items;
};
