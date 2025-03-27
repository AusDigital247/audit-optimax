
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed z-50 top-4 right-4 bg-navy/90 hover:bg-navy text-white p-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
      aria-label={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe size={22} className="text-teal" />
      <span className="font-medium text-white">{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
