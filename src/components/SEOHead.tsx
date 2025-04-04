
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
  // Build the canonical URL properly
  const baseUrl = 'https://seoaudittool.net';
  const canonicalUrl = `${baseUrl}${canonicalPath || ''}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Essential canonical tag to prevent duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language alternates */}
      <link rel="alternate" hreflang="en" href={canonicalUrl} />
      <link rel="alternate" hreflang="fr" href={canonicalUrl} />
      
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
