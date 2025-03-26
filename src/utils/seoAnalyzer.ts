
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
      items: generateTechnicalSEOChecks(isDemoSite, randomFactor)
    },
    {
      title: "Content Optimization",
      items: generateContentOptimizationChecks(keyword, isDemoSite, randomFactor)
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
  
  return items;
};

const generateTechnicalSEOChecks = (isDemoSite = false, randomFactor = 0.5): SEOCheckItem[] => {
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
