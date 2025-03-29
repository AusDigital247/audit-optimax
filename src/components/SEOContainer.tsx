import React from 'react';
import SEOForm from './SEOForm';
import SEOContentSection from './SEOContentSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, BarChart3, LineChart, LightbulbIcon, FileCheck, Rocket, Gauge, Target } from 'lucide-react';

interface SEOContainerProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOContainer: React.FC<SEOContainerProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col w-full max-w-full">
      {/* Hero Section - Keep Dark Theme */}
      <section className="bg-gradient-to-b from-navy to-navy-light pt-12 pb-20 md:pt-20 md:pb-32 w-full">
        <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-light to-white/90">
                {t('seo_tool_title')}
              </h1>
              <h2 className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto">
                {t('hero_subtitle')}
              </h2>
            </div>
            
            <div className="flex items-center justify-center py-2 px-6 bg-teal/30 backdrop-blur-sm rounded-full mb-6 animated-card">
              <Zap className="h-5 w-5 text-teal-light mr-2" />
              <span className="text-white text-sm font-medium">SEO Audit Tool</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto" id="seo-tool">
            <div className="glass-card p-8 md:p-10 rounded-xl shadow-2xl border border-teal/30 animate-pulse-glow">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {t('seo_tool_title')}
              </h3>
              <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>

          {/* Feature cards - Still in dark theme for hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4 md:px-6">
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
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <FileCheck className="h-6 w-6 text-teal-light" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Complete SEO Audit</h3>
              <p className="text-white/80">Get a comprehensive report of your site's SEO performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Light + Dark Mixed Theme Sections */}
      <section className="bg-light-bg dark:bg-navy-light py-16 w-full">
        <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
                Why Choose Our SEO Audit Tool?
              </span>
            </h2>
            <p className="text-lg text-navy/80 dark:text-white/80 max-w-3xl mx-auto">
              Unlock the potential of your website with our powerful SEO tools and expert analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Gauge className="h-8 w-8 text-teal dark:text-teal-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">Performance Analysis</h3>
              <p className="text-navy/70 dark:text-white/70">Measure your website's speed and performance with our comprehensive analysis tools.</p>
            </div>
            
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Target className="h-8 w-8 text-teal dark:text-teal-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">Keyword Optimization</h3>
              <p className="text-navy/70 dark:text-white/70">Identify the most effective keywords to target for your specific business and audience.</p>
            </div>
            
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Rocket className="h-8 w-8 text-teal dark:text-teal-light" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-white">Competitor Analysis</h3>
              <p className="text-navy/70 dark:text-white/70">See how you stack up against competitors and identify opportunities to outrank them.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#seo-tool" className="cta-button inline-flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Start Your Free SEO Audit Now
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections - Mixed Theme */}
      <SEOContentSection />
    </div>
  );
};

export default SEOContainer;
