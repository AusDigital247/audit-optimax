
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string; // Allows for custom paths beyond the current URL
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  children?: React.ReactNode;
  isHomePage?: boolean; // Prop to identify home page
}

/**
 * SEOHead - Provides consistent SEO metadata across the site
 * This component handles canonical URLs properly to avoid duplicate content issues
 * and implements proper semantic SEO structure for improved search engine visibility
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = 'https://seoaudittool.net/seo-tool-preview.jpg',
  ogType = 'website',
  children,
  isHomePage = false
}) => {
  const location = useLocation();
  
  // Build the canonical URL properly - ensure we use the exact path provided or current path
  const baseUrl = 'https://seoaudittool.net';
  
  // If canonicalPath is provided, use it, otherwise use current path
  const path = canonicalPath || location.pathname;
  
  // Make sure path starts with a slash if it's not empty
  const formattedPath = path ? 
    (path.startsWith('/') ? path : `/${path}`) : 
    '';
    
  const canonicalUrl = `${baseUrl}${formattedPath}`;
  
  // Enhanced page title with LSI keywords for better relevance signals
  const enhancedTitle = isHomePage 
    ? `${title} | SEO Audit Tool - Website Analysis & Search Rankings` 
    : title;
  
  // Enhanced description with LSI keywords
  const enhancedDescription = description.length > 20 ? description : 
    "Improve your website's search engine visibility with our comprehensive SEO tools. Free website analysis, keyword research, and content optimization tools.";
    
  // Enhanced keywords with LSI and long-tail variations
  const enhancedKeywords = keywords || 
    "seo tool, website analyzer, keyword research, content optimization, search engine rankings, google position checker, website audit";
  
  return (
    <Helmet>
      <title>{enhancedTitle}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      
      {/* Essential canonical tag - SINGLE tag to prevent duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language alternate - English only */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />
      
      {/* GEO meta tags for USA targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="37.09024;-95.712891" /> {/* USA geographic center */}
      <meta name="ICBM" content="37.09024, -95.712891" />
      
      {/* OpenGraph tags for social sharing */}
      <meta property="og:title" content={enhancedTitle} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter tags */}
      <meta name="twitter:title" content={enhancedTitle} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Enhanced schema.org structured data */}
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "SEO Audit Tool",
          "description": "${enhancedDescription}",
          "url": "${baseUrl}",
          "applicationCategory": "SEO Tool",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      `}</script>
      
      {/* Child elements for page-specific SEO elements */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
