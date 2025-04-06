
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetaDescription } from '@/utils/metaDescriptions';

interface LanguageContextType {
  language: 'en';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const language = 'en'; // Always use English
  
  // Determine the page type based on the current route
  const getPageTypeFromPath = (path: string) => {
    if (path === '/') return 'home';
    if (path.includes('/seo-toronto')) return 'seo-toronto';
    if (path.includes('/seo-ottawa')) return 'seo-ottawa';
    if (path.includes('/seo-kitchener')) return 'seo-kitchener';
    if (path.includes('/seo-london')) return 'seo-london';
    if (path.includes('/seo-vancouver')) return 'seo-vancouver';
    if (path.includes('/seo-buffalo')) return 'seo-buffalo';
    if (path === '/blog') return 'blog';
    if (path.includes('/blog/')) return 'blog-post';
    
    // Default to home if no match
    return 'home';
  };

  // Update meta tags when location changes
  useEffect(() => {
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language;
    
    // Get the appropriate meta description for the current page
    const pageType = getPageTypeFromPath(location.pathname);
    const metaDescription = getMetaDescription(pageType as any);
    
    // Update meta tags for the current language and page
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescription);
    }
    
    // Update page title based on the current page
    let pageTitle = 'SEO Audit Tool';
    
    if (pageType !== 'home') {
      const pageTitleMap: Record<string, string> = {
        'seo-toronto': 'Toronto SEO Services | SEO Audit Tool',
        'seo-ottawa': 'Ottawa SEO Services | SEO Audit Tool',
        'seo-kitchener': 'Kitchener SEO Services | SEO Audit Tool',
        'seo-london': 'London SEO Services | SEO Audit Tool',
        'seo-vancouver': 'Vancouver SEO Services | SEO Audit Tool',
        'seo-buffalo': 'Buffalo SEO Services | SEO Audit Tool',
        'blog': 'SEO Blog | SEO Audit Tool',
        'blog-post': 'SEO Guide | SEO Audit Tool'
      };
      
      if (pageTitleMap[pageType]) {
        pageTitle = pageTitleMap[pageType];
      }
    }
    
    document.title = pageTitle;
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle);
    }
    
    if (ogDescription) {
      ogDescription.setAttribute('content', metaDescription);
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle) {
      twitterTitle.setAttribute('content', pageTitle);
    }
    
    if (twitterDescription) {
      twitterDescription.setAttribute('content', metaDescription);
    }
  }, [location.pathname]);

  // Simple translation function that just returns the key for English
  const t = (key: string): string => {
    try {
      if (!key) return '';
      return translations.en[key] || key;
    } catch (error) {
      console.error(`Translation error for key "${key}"`, error);
      return key; // Return the key as fallback
    }
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Import translations
import translations from '../translations';
