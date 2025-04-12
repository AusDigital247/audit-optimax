import React from 'react';
import SEOForm from './SEOForm';
import SEOContentSection from './SEOContentSection';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, BarChart3, LineChart, LightbulbIcon, FileCheck, Rocket, Gauge, Target } from 'lucide-react';
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

      {/* Light + Dark Mixed Theme Sections */}
      <section className="bg-light-bg dark:bg-navy-light py-16 w-full">
        <div className="w-full max-w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-[#33C3F0] font-display">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-[#33C3F0] dark:to-white">
                Why Choose Our SEO Optimizer
              </span>
            </h2>
            <p className="text-lg text-navy-light dark:text-[#1EAEDB] max-w-3xl mx-auto font-body">
              Our platform enables website owners to unlock their full potential by providing robust keyword research and content generation and search position tracking features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Gauge className="h-8 w-8 text-teal dark:text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-[#33C3F0] font-display">Website Performance</h3>
              <p className="text-navy-light dark:text-[#1EAEDB] font-body">
                Our full analysis tools help businesses evaluate their website performance regarding search engine visibility and content optimization.
              </p>
            </div>
            
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Target className="h-8 w-8 text-teal dark:text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-[#33C3F0] font-display">Keyword Strategy</h3>
              <p className="text-navy-light dark:text-[#1EAEDB] font-body">
                Discover the specific search terms and content optimization techniques which will best reach your business audience.
              </p>
            </div>
            
            <div className="glass-card-hover p-6 rounded-xl">
              <div className="bg-teal/10 dark:bg-teal/20 p-4 rounded-full w-fit mb-5">
                <Rocket className="h-8 w-8 text-teal dark:text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy dark:text-[#33C3F0] font-display">Competitor Analysis</h3>
              <p className="text-navy-light dark:text-[#1EAEDB] font-body">
                Our SERP position tracker alongside local search optimization tools help users determine their position relative to market competitors.
              </p>
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
      <section className="bg-white dark:bg-navy py-16 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-navy dark:text-[#33C3F0] text-center font-display">Free SEO Tools</h2>
            <p className="text-navy-light dark:text-[#1EAEDB] mb-10 font-body">
              The complete SEO audit tool of our company delivers thorough website analysis free of charge.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              <Link to="/google-rank-checker-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Google Rank Checker</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Track SERP positions</p>
              </Link>
              
              <Link to="/keyword-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Keyword Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Find valuable keywords</p>
              </Link>
              
              <Link to="/blog-ideas-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Blog Ideas Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Create content topics</p>
              </Link>
              
              <Link to="/paragraph-rewriter-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Paragraph Rewriter</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Enhance content blocks</p>
              </Link>
              
              <Link to="/sentence-rewriter-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Sentence Rewriter</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Improve readability</p>
              </Link>
              
              <Link to="/paraphrasing-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Paraphrasing Tool</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Rewrite content</p>
              </Link>
              
              <Link to="/grammar-checker-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Grammar Checker</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Fix text errors</p>
              </Link>
              
              <Link to="/conclusion-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Conclusion Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Create impactful endings</p>
              </Link>
              
              <Link to="/tiktok-username-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">TikTok Username Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Find catchy usernames</p>
              </Link>
              
              <Link to="/tiktok-hashtag-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">TikTok Hashtag Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Boost video reach</p>
              </Link>
              
              <Link to="/youtube-name-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">YouTube Name Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Create channel names</p>
              </Link>
              
              <Link to="/youtube-channel-description-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">YouTube Description Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Optimize channel info</p>
              </Link>
              
              <Link to="/instagram-name-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Instagram Name Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Create unique handles</p>
              </Link>
              
              <Link to="/instagram-bio-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Instagram Bio Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Craft engaging bios</p>
              </Link>
              
              <Link to="/instagram-hashtag-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Instagram Hashtag Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Increase post reach</p>
              </Link>
              
              <Link to="/bulk-anchor-link-generator-tool" className="p-3 bg-slate-50 dark:bg-navy/50 rounded-lg hover:bg-slate-100 dark:hover:bg-navy-light/50 transition-colors">
                <h3 className="font-medium text-navy dark:text-white">Bulk Anchor Link Generator</h3>
                <p className="text-sm text-navy-light dark:text-white/70">Create HTML links</p>
              </Link>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-navy dark:text-[#33C3F0] font-display">What Our SEO Tool Analyzes</h2>
              <ul className="list-disc pl-5 space-y-2 text-navy-light dark:text-[#1EAEDB] font-body">
                <li>Our tool examines three fundamental technical aspects of website optimization including speed performance and mobile adaptability and crawl ability.</li>
                <li>Our tool evaluates webpage elements that consist of content quality and meta tags and headings.</li>
                <li>User experience signals that impact search rankings</li>
                <li>Security issues that could affect your visibility</li>
                <li>The tool performs competitive analysis by measuring your website against comparable sites.</li>
              </ul>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-navy dark:text-[#33C3F0] font-display">Why Choose Our SEO Checker</h2>
              <p className="text-navy-light dark:text-[#1EAEDB] font-body">
                Our complete audit goes deeper than basic free SEO tools because it evaluates every element which impacts your search engine rankings. The system delivers precise recommendations that avoid technical terms which are hard to understand.
              </p>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6 text-navy dark:text-[#33C3F0] font-display">How to Get Started with Our SEO Tools</h2>
              <p className="text-navy-light dark:text-[#1EAEDB] font-body">
                Enter your website URL into the tool above and provide an optional target keyword for more detailed analysis before selecting 'Analyze Website'. Users will obtain a detailed report with implementation suggestions within a short period of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <SEOContentSection />
    </div>
  );
};

export default SEOContainer;
