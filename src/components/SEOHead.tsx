
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
}

/**
 * SEOHead - Provides consistent SEO metadata across the site
 * This component handles canonical URLs properly to avoid duplicate content issues
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  keywords,
  ogImage = 'https://seoaudittool.net/seo-tool-preview.jpg',
  ogType = 'website',
  children
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
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Essential canonical tag to prevent duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      
      {/* OpenGraph tags for social sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter tags */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Child elements for page-specific SEO elements */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
