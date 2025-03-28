
import React from 'react';
import SEOForm from './SEOForm';
import SEOContentSection from './SEOContentSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, Zap, BarChart3, LineChart, LightbulbIcon } from 'lucide-react';

interface SEOContainerProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOContainer: React.FC<SEOContainerProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light pt-12 pb-20 md:pt-20 md:pb-32 w-full">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="animated-card mb-6 p-4 bg-teal/20 backdrop-blur-md rounded-full">
              <Search className="h-10 w-10 text-teal-light" />
            </div>
            
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
                {t('seo_tool_title')}
              </h1>
              <h2 className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
                {t('hero_subtitle')}
              </h2>
            </div>
            
            <div className="flex items-center justify-center py-2 px-6 bg-teal/20 backdrop-blur-sm rounded-full mb-8 animated-card">
              <Zap className="h-5 w-5 text-teal-light mr-2" />
              <span className="text-white text-sm font-medium">SEO Audit Tool</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-10 rounded-xl shadow-2xl border border-teal/30">
              <h3 className="text-2xl font-bold mb-6 text-center text-white flex items-center justify-center gap-2">
                <Search className="h-6 w-6 text-teal" />
                {t('seo_tool_title')}
              </h3>
              <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('comprehensive_analysis')}</h3>
              <p className="text-white/80">{t('comprehensive_text')}</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LightbulbIcon className="h-6 w-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('actionable_insights')}</h3>
              <p className="text-white/80">{t('actionable_text')}</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LineChart className="h-6 w-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{t('track_progress')}</h3>
              <p className="text-white/80">{t('progress_text')}</p>
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
