
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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
  // Try to get language from localStorage, default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferred-language');
    return (savedLanguage === 'fr' ? 'fr' : 'en') as Language;
  });

  // Store language preference in localStorage when it changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
    // Update HTML lang attribute for SEO
    document.documentElement.lang = language;
    
    // Update meta tags for the current language
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        language === 'en' 
          ? 'Free SEO audit tool to analyze your website and get actionable recommendations to improve your search rankings.'
          : 'Outil d\'audit SEO gratuit pour analyser votre site Web et obtenir des recommandations pratiques pour améliorer votre classement dans les moteurs de recherche.');
    }
    
    // Update page title for the current language
    document.title = language === 'en' ? 'AUS Digital - SEO Audit Tool' : 'AUS Digital - Outil d\'Audit SEO';
  }, [language]);

  // Simple translation function
  const t = (key: string): string => {
    try {
      if (language === 'en') {
        return translations.en[key] || key;
      } else {
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
import { translations } from '../translations';
