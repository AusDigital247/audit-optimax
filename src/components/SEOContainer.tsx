import React from 'react';
import SEOForm from './SEOForm';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, BarChart3, LineChart, LightbulbIcon, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-[#33C3F0] font-display">
                Free SEO Audit Tool
              </h1>
              <h2 className="text-lg md:text-xl text-[#1EAEDB] font-light max-w-2xl mx-auto">
                Get a comprehensive SEO Audit of your website's and get actionable recommendations to improve your rankings.
              </h2>
            </div>
            
            <div className="flex items-center justify-center py-2 px-6 bg-teal/30 backdrop-blur-sm rounded-full mb-6 animated-card">
              <Zap className="h-5 w-5 text-[#1EAEDB] mr-2" />
              <span className="text-[#33C3F0] text-sm font-medium">Free SEO Tools</span>
            </div>
            
            <p className="text-[#1EAEDB] max-w-2xl mx-auto mb-6">
              Your website receives a complete technical assessment of its search engine optimization (SEO) status and you receive specific step by step recommendations to boost your search engine standing.
            </p>
            
            <p className="text-[#1EAEDB] max-w-2xl mx-auto mb-6">
              Our free website analysis tool and semantic keyword research help businesses understand their website performance. The full SEO examination supports websites in enhancing their Internet visibility.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto" id="seo-tool">
            <div className="glass-card p-8 md:p-10 rounded-xl shadow-2xl border border-teal/30 animate-pulse-glow">
              <h2 className="text-2xl font-bold mb-6 text-center text-[#33C3F0] font-display">
                Free Website SEO Checker
              </h2>
              <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>

          {/* Feature cards - Improved contrast in dark theme */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 px-4 md:px-6">
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1EAEDB] font-display">Comprehensive Analysis</h3>
              <p className="text-[#33C3F0] font-body">Our tool performs a complete examination of every technical element and content-based aspect as well as user experience elements that affect your website's SEO.</p>
              <Link to="/seo-services" className="text-[#1EAEDB] hover:text-[#fff] text-sm mt-3 inline-block">Learn about our SEO strategies →</Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LightbulbIcon className="h-6 w-6 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1EAEDB] font-display">Actionable Insights</h3>
              <p className="text-[#33C3F0] font-body">Our tool delivers specific steps that you can start using right now to boost your search engine rankings.</p>
              <Link to="/local-seo" className="text-[#1EAEDB] hover:text-[#fff] text-sm mt-3 inline-block">Explore local optimization →</Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LineChart className="h-6 w-6 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1EAEDB] font-display">Track Your Progress</h3>
              <p className="text-[#33C3F0] font-body">The tool enables users to track their SEO enhancements through time and assess the effects on their search performance.</p>
              <Link to="/paragraph-rewriter-tool" className="text-[#1EAEDB] hover:text-[#fff] text-sm mt-3 inline-block">Improve content quality →</Link>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <FileCheck className="h-6 w-6 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#1EAEDB] font-display">SEO Audit Tool</h3>
              <p className="text-[#33C3F0] font-body">Our tool delivers a complete evaluation of your website's SEO standing.</p>
              <Link to="/blog-ideas-generator-tool" className="text-[#1EAEDB] hover:text-[#fff] text-sm mt-3 inline-block">Generate content ideas →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOContainer;
