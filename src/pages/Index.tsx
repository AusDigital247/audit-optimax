
import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import SEOContainer from '@/components/SEOContainer';
import SEOResults from '@/components/SEOResults';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { 
  BarChart, LineChart, Search, Globe, Shield, 
  Zap, Sparkles, BrainCircuit, Target, Gauge, 
  MoveUpRight, Users, Rocket, Layout, ScrollText,
  MonitorSmartphone, ArrowRightCircle, ChevronRight,
  Workflow, Database, BookOpen, FileCheck, Terminal,
  Code, Laptop, Cpu, RefreshCcw, Activity
} from 'lucide-react';

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
        title="SEO Audit Tool | Website SEO Checker"
        description="Our free comprehensive SEO audit tool provides actionable insights to improve your website's search rankings. Get detailed analysis of technical SEO, content, and on-page factors."
        canonicalPath="/"
        keywords="SEO audit tool, website SEO checker, SEO analysis, free SEO tool, website checker, technical SEO audit, on-page SEO, SEO optimization, SEO site checkup, SEO optimizer"
        isHomePage={true}
      />

      {!results && !error && (
        <div id="seo-tool">
          <SEOContainer onSubmit={handleSubmit} isLoading={isAnalyzing} />
          
          {/* Why Choose Our SEO Optimizer Section */}
          <section className="py-20 bg-white dark:bg-navy-dark">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                  Why Choose Our SEO Optimizer
                </h2>
                <p className="text-navy-light dark:text-gray-300 max-w-3xl mx-auto">
                  Our platform enables website owners to unlock their full potential by providing robust keyword research, content generation, and search position tracking features.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BarChart className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Website Performance</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    Our full analysis tools help businesses evaluate their website performance regarding search engine visibility and content optimization.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Keyword Strategy</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    Discover the specific search terms and content optimization techniques which will best reach your business audience.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <LineChart className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Competitor Analysis</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    Our SERP position tracker alongside local search optimization tools help users determine their position relative to market competitors.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link to="/" className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Start Your Free SEO Audit Now
                  <ArrowRightCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>
          
          {/* What Our Tool Analyzes Section */}
          <section className="py-20 bg-gray-50 dark:bg-navy">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                  Free SEO Audit Tool
                </h2>
                <p className="text-navy-light dark:text-gray-300 max-w-3xl mx-auto">
                  The complete SEO audit tool of our company delivers thorough website analysis free of charge.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg p-8 mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-navy dark:text-white">
                    What Our Tool Analyzes
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-teal/10 rounded-full p-2 mt-1">
                        <Gauge className="w-5 h-5 text-teal" />
                      </div>
                      <p className="text-navy-light dark:text-gray-300">
                        Our tool examines three fundamental technical aspects of website optimization including speed performance, mobile adaptability, and crawl ability.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-teal/10 rounded-full p-2 mt-1">
                        <ScrollText className="w-5 h-5 text-teal" />
                      </div>
                      <p className="text-navy-light dark:text-gray-300">
                        Our tool evaluates webpage elements that consist of content quality, meta tags, and headings.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-teal/10 rounded-full p-2 mt-1">
                        <Users className="w-5 h-5 text-teal" />
                      </div>
                      <p className="text-navy-light dark:text-gray-300">
                        User experience signals that impact search rankings.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-teal/10 rounded-full p-2 mt-1">
                        <Shield className="w-5 h-5 text-teal" />
                      </div>
                      <p className="text-navy-light dark:text-gray-300">
                        Security issues that could affect your visibility.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-teal/10 rounded-full p-2 mt-1">
                        <BarChart className="w-5 h-5 text-teal" />
                      </div>
                      <p className="text-navy-light dark:text-gray-300">
                        The tool performs competitive analysis by measuring your website against comparable sites.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg p-8 mb-12">
                  <h3 className="text-2xl font-semibold mb-6 text-navy dark:text-white">
                    Why Choose Our Tool
                  </h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    Our complete audit goes deeper than basic free SEO tools because it evaluates every element which impacts your search engine rankings. The system delivers precise recommendations that avoid technical terms which are hard to understand.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-navy-light rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-navy dark:text-white">
                    How to Get Started
                  </h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    Enter your website URL into the tool above and provide an optional target keyword for more detailed analysis before selecting 'Analyze Website'. Users will obtain a detailed report with implementation suggestions within a short period of time.
                  </p>
                  <div className="flex justify-center">
                    <a href="#seo-tool" className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-medium py-3 px-6 rounded-lg transition-colors">
                      Start Your SEO Audit Now
                      <MoveUpRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* How Our Tool Works Section */}
          <section className="py-20 bg-white dark:bg-navy-dark">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">
                  Why Choose Our SEO Audit Tool
                </h2>
                <p className="text-navy-light dark:text-gray-300 max-w-3xl mx-auto">
                  The complete tool of our company assists websites in achieving better search engine rankings.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BrainCircuit className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">How Our Tool Works</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    Our analysis tool provides a complete evaluation of your website by assessing technical aspects together with content quality and user experience elements.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Actionable Insights</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    You can start improving your search engine rankings through our straightforward practical advice.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <LineChart className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Competitor Benchmarking</h3>
                  <p className="text-navy-light dark:text-gray-300">
                    Our system enables you to evaluate your website against competitors while showing you potential advantages to dominate the market.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center text-navy dark:text-white">
                  SEO Best Practices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-light rounded-lg">
                    <Users className="w-12 h-12 text-teal mb-4" />
                    <h4 className="text-lg font-medium mb-2 text-navy dark:text-white">User Experience</h4>
                  </div>
                  
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-light rounded-lg">
                    <ScrollText className="w-12 h-12 text-teal mb-4" />
                    <h4 className="text-lg font-medium mb-2 text-navy dark:text-white">Content Strategy</h4>
                  </div>
                  
                  <div className="flex flex-col items-center p-6 bg-white dark:bg-navy-light rounded-lg">
                    <Cpu className="w-12 h-12 text-teal mb-4" />
                    <h4 className="text-lg font-medium mb-2 text-navy dark:text-white">Technical Factors</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* User Experience Optimization Section */}
          <section className="py-20 bg-gray-50 dark:bg-navy">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                    User Experience Optimization
                  </h2>
                  <p className="text-navy-light dark:text-gray-300">
                    The search engine leader Google selects websites which deliver superior user experience. Our tool evaluates key UX factors that impact your SEO performance.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal/10 rounded-full p-3 mr-4">
                        <Activity className="w-6 h-6 text-teal" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy dark:text-white">Core Web Vitals</h3>
                    </div>
                    <p className="text-navy-light dark:text-gray-300">
                      Our assessment evaluates loading performance together with interactivity and visual stability metrics which function as ranking indicators for Google.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal/10 rounded-full p-3 mr-4">
                        <MonitorSmartphone className="w-6 h-6 text-teal" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy dark:text-white">Mobile-First Approach</h3>
                    </div>
                    <p className="text-navy-light dark:text-gray-300">
                      Since Google uses mobile-first indexing we test your website's mobile performance to detect areas for enhancement.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal/10 rounded-full p-3 mr-4">
                        <Layout className="w-6 h-6 text-teal" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy dark:text-white">Site Navigation & Structure</h3>
                    </div>
                    <p className="text-navy-light dark:text-gray-300">
                      The combination of user-friendly navigation with search engine accessibility enables better comprehension of your site. Our system checks for both logical structural organization and straightforward navigation paths.
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal/10 rounded-full p-3 mr-4">
                        <Zap className="w-6 h-6 text-teal" />
                      </div>
                      <h3 className="text-xl font-semibold text-navy dark:text-white">Page Speed Optimization</h3>
                    </div>
                    <p className="text-navy-light dark:text-gray-300">
                      Better page speed rankings translate to higher conversion rates. Our system identifies performance bottlenecks which could cause ranking issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Why You Need Regular SEO Analysis */}
          <section className="py-20 bg-white dark:bg-navy-dark">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                    Why You Need Regular SEO Analysis
                  </h2>
                  <p className="text-navy-light dark:text-gray-300">
                    Your competitors along with search engine algorithms continuously adapt which means you need to stay on top of your game. A scheduled SEO assessment helps businesses remain competitive while revealing fresh ways to enhance their performance.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                    <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <FileCheck className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Comprehensive Assessment</h3>
                    <p className="text-navy-light dark:text-gray-300">
                      The tool checks more than 100 elements which determine your search position to give a full picture of your SEO status.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                    <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Keyword Optimization</h3>
                    <p className="text-navy-light dark:text-gray-300">
                      Identify which keywords deliver website traffic to your site while discovering additional keywords to reach new audiences.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm">
                    <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                      <Sparkles className="w-8 h-8 text-teal" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Actionable Insights</h3>
                    <p className="text-navy-light dark:text-gray-300">
                      Your search rankings will improve through the clear and actionable recommendations we deliver instead of just receiving data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* What Our SEO Audit Tool Checks */}
          <section className="py-20 bg-gray-50 dark:bg-navy">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                  What Our SEO Audit Tool Checks
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <Cpu className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy dark:text-white">Technical SEO Factors</h3>
                  </div>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    Problems with your website's technical configuration stop search engines from crawling and indexing your content thus reducing its visibility.
                  </p>
                  <ul className="space-y-3 text-navy-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Page load speed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Mobile responsiveness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Crawlability issues</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>URL structure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>XML sitemaps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Robots.txt configuration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>HTTPS security</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Structured data markup</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <ScrollText className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="text-2xl font-semibold text-navy dark:text-white">On-Page SEO Elements</h3>
                  </div>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    The proper optimization of web pages enables search engines to accurately understand your content together with its relation to specific user queries.
                  </p>
                  <ul className="space-y-3 text-navy-light dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Title tags & meta descriptions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Heading structure (H1, H2, etc.)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Keyword usage & density</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Content quality & length</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Image optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Internal linking structure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="w-5 h-5 text-teal flex-shrink-0" />
                      <span>Schema markup implementation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* SEO Resources & Guides Section */}
          <section className="py-20 bg-white dark:bg-navy-dark">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                  SEO Resources & Guides
                </h2>
                <p className="text-navy-light dark:text-gray-300 max-w-3xl mx-auto">
                  Visit our selection of free SEO resources which present step-by-step guidance for achieving the best SEO results and enhancing your website ranking.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Ultimate SEO Guide</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    The complete guide begins with fundamental SEO concepts followed by detailed methods for enhancing your website's search engine ranking.
                  </p>
                  <Link to="/blog" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Keyword Research Tips</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    Find the most useful keywords for your business through proper implementation methods in your content.
                  </p>
                  <Link to="/blog" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 dark:bg-navy p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Terminal className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Technical SEO Checklist</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    A step-by-step checklist to ensure you've covered all the technical aspects that impact your site's search performance.
                  </p>
                  <Link to="/blog" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Read more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Professional SEO Tools Section */}
          <section className="py-20 bg-gray-50 dark:bg-navy">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white">
                  Professional SEO Tools & Audit Solutions
                </h2>
                <p className="text-navy-light dark:text-gray-300 max-w-3xl mx-auto">
                  Our expert-developed SEO Audit Tools help you enhance website visibility through search results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <LineChart className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Google Rank Checker Tool</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    The tool allows you to track your website position on Google search results throughout various geographic areas and keyword combinations.
                  </p>
                  <Link to="/google-rank-checker-tool" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Check your rankings <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Keyword Generator Tool</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    The tool helps you discover profitable keywords that you can use in your content creation and SEO marketing plans.
                  </p>
                  <Link to="/keyword-generator-tool" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Generate keywords <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-navy-light p-8 rounded-xl shadow-sm">
                  <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Workflow className="w-8 h-8 text-teal" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Bulk Anchor Link Generator</h3>
                  <p className="text-navy-light dark:text-gray-300 mb-6">
                    You can use this tool to create numerous HTML anchor links that support your content creation and link building efforts for better SEO.
                  </p>
                  <Link to="/bulk-anchor-link-generator-tool" className="text-teal hover:text-teal-dark inline-flex items-center">
                    Generate anchor links <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-8 text-center text-navy dark:text-white">
                  Free SEO Tools & Website Analysis Solutions
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link 
                    to="/blog-ideas-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Blog Ideas Generator
                  </Link>
                  <Link 
                    to="/paragraph-rewriter-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Paragraph Rewriter
                  </Link>
                  <Link 
                    to="/sentence-rewriter-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Sentence Rewriter
                  </Link>
                  <Link 
                    to="/paraphrasing-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Paraphrasing Tool
                  </Link>
                  <Link 
                    to="/grammar-checker-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Grammar Checker
                  </Link>
                  <Link 
                    to="/tiktok-username-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    TikTok Username Generator
                  </Link>
                  <Link 
                    to="/tiktok-hashtag-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    TikTok Hashtag Generator
                  </Link>
                  <Link 
                    to="/youtube-name-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    YouTube Name Generator
                  </Link>
                  <Link 
                    to="/youtube-channel-description-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    YouTube Description Generator
                  </Link>
                  <Link 
                    to="/instagram-name-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Instagram Name Generator
                  </Link>
                  <Link 
                    to="/instagram-bio-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Instagram Bio Generator
                  </Link>
                  <Link 
                    to="/instagram-hashtag-generator-tool" 
                    className="bg-white dark:bg-navy-light py-3 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center text-navy dark:text-white"
                  >
                    Instagram Hashtag Generator
                  </Link>
                </div>
                
                <div className="text-center mt-8">
                  <Link 
                    to="/tools" 
                    className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Explore All SEO Tools
                    <ArrowRightCircle className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
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
    </div>
  );
};

export default Index;
