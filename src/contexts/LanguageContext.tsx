
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
  }, [language]);

  // Simple translation function
  const t = (key: string): string => {
    if (language === 'en') {
      return translations.en[key] || key;
    } else {
      return translations.fr[key] || translations.en[key] || key;
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
