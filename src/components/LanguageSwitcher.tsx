
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
      className="fixed z-50 top-4 right-4 bg-navy/80 hover:bg-navy text-white p-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm border border-white/10"
      aria-label={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe size={20} />
      <span className="font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
};

export default LanguageSwitcher;
