
import React from 'react';
import SEOForm from './SEOForm';
import SEOContentSection from './SEOContentSection';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOContainerProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOContainer: React.FC<SEOContainerProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="mb-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 gradient-text">
                {t('hero_title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto">
                {t('hero_subtitle')}
              </h2>
            </div>
            
            <div className="flex items-center justify-center py-2 px-4 bg-teal/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-white font-medium">AUS Digital</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {t('seo_tool_title')}
              </h3>
              <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <SEOContentSection />
    </div>
  );
};

export default SEOContainer;
