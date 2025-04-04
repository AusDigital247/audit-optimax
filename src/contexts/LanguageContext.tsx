import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { getMetaDescription } from '@/utils/metaDescriptions';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    return (savedLanguage === 'fr' ? 'fr' : 'en') as Language;
  });

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

  // Store language preference in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language;
    
    // Get the appropriate meta description for the current page
    const pageType = getPageTypeFromPath(location.pathname);
    const metaDescription = getMetaDescription(pageType as any, language);
    
    // Update meta tags for the current language and page
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', metaDescription);
    }
    
    // Update page title based on the current page
    let pageTitle = language === 'en' ? 'SEO Audit Tool' : 'Outil d\'Audit SEO';
    
    if (pageType !== 'home') {
      const pageTitleMap: Record<string, { en: string, fr: string }> = {
        'seo-toronto': { 
          en: 'Toronto SEO Services | SEO Audit Tool', 
          fr: 'Services SEO Toronto | Outil d\'Audit SEO' 
        },
        'seo-ottawa': { 
          en: 'Ottawa SEO Services | SEO Audit Tool', 
          fr: 'Services SEO Ottawa | Outil d\'Audit SEO' 
        },
        'seo-kitchener': { 
          en: 'Kitchener SEO Services | SEO Audit Tool', 
          fr: 'Services SEO Kitchener | Outil d\'Audit SEO' 
        },
        'seo-london': { 
          en: 'London SEO Services | SEO Audit Tool', 
          fr: 'Services SEO London | Outil d\'Audit SEO' 
        },
        'seo-vancouver': { 
          en: 'Vancouver SEO Services | SEO Audit Tool', 
          fr: 'Services SEO Vancouver | Outil d\'Audit SEO' 
        },
        'seo-buffalo': { 
          en: 'Buffalo SEO Services | SEO Audit Tool', 
          fr: 'Services SEO Buffalo | Outil d\'Audit SEO' 
        },
        'blog': { 
          en: 'SEO Blog | SEO Audit Tool', 
          fr: 'Blog SEO | Outil d\'Audit SEO' 
        },
        'blog-post': { 
          en: 'SEO Guide | SEO Audit Tool', 
          fr: 'Guide SEO | Outil d\'Audit SEO' 
        }
      };
      
      if (pageTitleMap[pageType]) {
        pageTitle = pageTitleMap[pageType][language];
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
  }, [language, location.pathname]);

  // Simple translation function with improved error handling and fallback
  const t = (key: string): string => {
    try {
      if (!key) return '';
      
      if (language === 'en') {
        return translations.en[key] || key;
      } else {
        // Check if the French translation exists, if not fall back to English
        return translations.fr[key] || translations.en[key] || key;
      }
    } catch (error) {
      console.error(`Translation error for key "${key}"`, error);
      return key; // Return the key as fallback
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
