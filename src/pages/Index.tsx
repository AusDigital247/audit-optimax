import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import SEOContainer from '@/components/SEOContainer';
import SEOResults from '@/components/SEOResults';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Book, MapPin, Award, TrendingUp, CheckCircle, Zap, BarChart, ArrowRight, Search, Globe, Lightbulb, Wrench, FileText } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, keyword?: string) => {
    setIsAnalyzing(true);
    setCurrentUrl(url);
    setCurrentKeyword(keyword);
    setError(null);
    
    try {
      const analysisResults = await analyzeSEO(url, keyword);
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing SEO:', error);
      setError(t('error_message'));
      toast({
        title: t('analyze_button'),
        description: t('error_message'),
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setCurrentUrl('');
    setCurrentKeyword(undefined);
    setError(null);
  };

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="SEO Audit Tool | Website SEO Checker | Free SEO Analysis"
        description="Free comprehensive SEO audit tool to analyze websites and get actionable recommendations. Check SEO health score and improve search rankings with our website checker tool."
        canonicalPath="/"
        keywords="SEO audit tool, website SEO checker, SEO analysis, SEO health score, search engine optimization, free SEO tool, website checker, USA SEO tools"
        isHomePage={true}
      />

      {!results && !error && (
        <div id="seo-tool">
          <SEOContainer onSubmit={handleSubmit} isLoading={isAnalyzing} />
        </div>
      )}

      {(isAnalyzing || error || results) && (
        <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
          <div className="container max-w-7xl px-4 py-12 mx-auto">
            {isAnalyzing && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-pulse-glow mb-6">
                  <div className="h-16 w-16 rounded-full border-4 border-t-teal border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-lg font-medium text-white">{t('loading')} {currentUrl}...</p>
                <p className="text-white/70">{t('this_may_take')}</p>
              </div>
            )}

            {error && !isAnalyzing && (
              <div className="w-full max-w-3xl mx-auto glass p-6 rounded-xl shadow-lg text-center">
                <p className="text-red-500 mb-3">{error}</p>
                <button 
                  onClick={handleReset} 
                  className="px-4 py-2 bg-navy-light text-white rounded-lg hover:bg-navy transition-colors"
                >
                  {t('try_again')}
                </button>
              </div>
            )}

            {results && !isAnalyzing && !error && (
              <SEOResults
                url={currentUrl}
                keyword={currentKeyword}
                score={results.score}
                categories={results.categories}
                contentFetched={results.contentFetched}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      )}
      
      {!results && !error && !isAnalyzing && (
        <section className="py-16 bg-white dark:bg-navy">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 flex items-center justify-center gap-2">
                <Wrench className="h-7 w-7 text-teal dark:text-teal-light" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
                  Our SEO Tools Suite
                </span>
              </h2>
              <p className="text-lg text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
                Explore our complete collection of free SEO tools designed to help improve your website's search visibility
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Link to="/google-rank-checker-tool" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    Google Rank Checker Tool
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Track your website's position in Google search results across different regions and keywords.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">
                      Check your rankings <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link to="/keyword-generator-tool" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Search className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    Keyword Generator Tool
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Discover high-value keywords to target in your content strategy and SEO campaigns.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">
                      Generate keywords <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link to="/bulk-anchor-link-generator-tool" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-teal" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    Bulk Anchor Link Generator
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Create SEO-friendly HTML anchor links in bulk for your content and link building campaigns.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">
                      Generate anchor links <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Link to="/blog-ideas-generator-tool" className="p-4 bg-white dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <Lightbulb className="h-5 w-5 text-teal" />
                <span className="text-navy dark:text-white group-hover:text-teal transition-colors">Blog Ideas Generator</span>
              </Link>
              <Link to="/paragraph-rewriter-tool" className="p-4 bg-white dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <FileText className="h-5 w-5 text-teal" />
                <span className="text-navy dark:text-white group-hover:text-teal transition-colors">Paragraph Rewriter</span>
              </Link>
              <Link to="/sentence-rewriter-tool" className="p-4 bg-white dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <FileText className="h-5 w-5 text-teal" />
                <span className="text-navy dark:text-white group-hover:text-teal transition-colors">Sentence Rewriter</span>
              </Link>
              <Link to="/paraphrasing-tool" className="p-4 bg-white dark:bg-navy-light rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-3 group">
                <FileText className="h-5 w-5 text-teal" />
                <span className="text-navy dark:text-white group-hover:text-teal transition-colors">Paraphrasing Tool</span>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/seo-services" className="btn-gradient inline-flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Explore All SEO Tools
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {!results && !error && !isAnalyzing && (
        <section className="py-16 bg-gray-50 dark:bg-navy/90">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 flex items-center justify-center gap-2">
                <Book className="h-7 w-7 text-teal dark:text-teal-light" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
                  Latest SEO Guides
                </span>
              </h2>
              <p className="text-lg text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
                Explore our in-depth SEO guides to improve your website's search engine visibility and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/blog/seo-strategy-2025" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    Advanced SEO Strategies for 2025
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Discover cutting-edge SEO strategies that will dominate in 2025, including AI integration, voice search optimization, and user experience signals.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">Read more <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
              
              <Link to="/blog/image-seo" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    Advanced Image SEO Techniques
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Learn how to optimize your images for better search visibility with these advanced techniques and best practices for image SEO.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">Read more <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
              
              <Link to="/blog/youtube-seo" className="group">
                <div className="glass-card-hover h-full flex flex-col p-6 bg-white dark:bg-navy-light rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">
                    YouTube SEO: Rank Your Videos Higher
                  </h3>
                  <p className="text-navy/80 dark:text-white/70 mb-4">
                    Boost your YouTube video rankings with proven optimization techniques for titles, descriptions, tags, and viewer engagement strategies.
                  </p>
                  <div className="mt-auto">
                    <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center gap-1">Read more <ArrowRight className="h-4 w-4" /></span>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/blog" className="btn-gradient inline-flex items-center gap-2">
                <Book className="h-5 w-5" />
                View All SEO Resources
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {!results && !error && !isAnalyzing && (
        <section className="py-16 bg-white dark:bg-navy">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 flex items-center justify-center gap-2">
                <MapPin className="h-7 w-7 text-teal dark:text-teal-light" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
                  Local SEO Services Across the USA
                </span>
              </h2>
              <p className="text-lg text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
                We offer specialized local SEO services to help businesses improve their visibility in location-based searches across the United States.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/seo-buffalo" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">Buffalo SEO</h3>
                  <p className="text-navy/70 dark:text-white/70">Expert SEO services for businesses in Buffalo and Western New York.</p>
                </div>
              </Link>
              
              <Link to="/local-seo" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">Local SEO Services</h3>
                  <p className="text-navy/70 dark:text-white/70">Comprehensive local search optimization for businesses across the United States.</p>
                </div>
              </Link>
              
              <Link to="/seo-services" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <Search className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">SEO Services</h3>
                  <p className="text-navy/70 dark:text-white/70">Full-service SEO solutions to improve your search engine rankings nationwide.</p>
                </div>
              </Link>
              
              <Link to="/seo-kitchener" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">Kitchener SEO</h3>
                  <p className="text-navy/70 dark:text-white/70">Local SEO solutions for Kitchener-Waterloo businesses.</p>
                </div>
              </Link>
              
              <Link to="/seo-london" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">London SEO</h3>
                  <p className="text-navy/70 dark:text-white/70">Results-driven SEO services for London, Ontario businesses.</p>
                </div>
              </Link>
              
              <Link to="/seo-vancouver" className="group">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm glass-card-hover">
                  <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-teal dark:text-teal-light" />
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2 group-hover:text-teal dark:group-hover:text-teal-light transition-colors">Vancouver SEO</h3>
                  <p className="text-navy/70 dark:text-white/70">Strategic SEO solutions for Vancouver businesses and startups.</p>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/local-seo" className="btn-gradient inline-flex items-center gap-2">
                <Award className="h-5 w-5" />
                Learn More About Local SEO
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {!results && !error && !isAnalyzing && (
        <section className="py-16 bg-gray-50 dark:bg-navy-light">
          <div className="container max-w-7xl px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 flex items-center justify-center gap-2">
                <TrendingUp className="h-7 w-7 text-teal dark:text-teal-light" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
                  Why Choose Our SEO Tool
                </span>
              </h2>
              <p className="text-lg text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
                Our SEO audit tool offers comprehensive analysis and actionable insights to boost your search engine rankings.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Comprehensive SEO Reports</h3>
                  <p className="text-navy/70 dark:text-white/70">Get detailed insights into your website's SEO performance with actionable recommendations.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Mobile Optimization Analysis</h3>
                  <p className="text-navy/70 dark:text-white/70">Ensure your website is fully optimized for mobile devices with our detailed checks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Page Speed Optimization</h3>
                  <p className="text-navy/70 dark:text-white/70">Identify performance bottlenecks and improve your page loading speed for better user experience.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Content Quality Assessment</h3>
                  <p className="text-navy/70 dark:text-white/70">Evaluate your content's SEO-friendliness and get suggestions for improvement.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <a href="#seo-tool" className="cta-button inline-flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Try Our Free SEO Tool Now
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
