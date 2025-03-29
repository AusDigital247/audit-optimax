
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import RankChecker from '@/components/RankChecker';
import RankingHistory from '@/components/RankingHistory';
import SEOSuggestions from '@/components/SEOSuggestions';

const RankCheckerPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('tool');
  const [historyUpdated, setHistoryUpdated] = useState(0);

  // Handle history clear to refresh components
  const handleHistoryClear = () => {
    setHistoryUpdated(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>Google Rank Checker Tool | Check Your Google Rankings | SEO Audit Tool</title>
        <meta name="description" content="Free Google rank checker tool to track your website's position in search engine results. Monitor your SEO performance and check your rankings for target keywords." />
        <meta name="keywords" content="google rank checker, check google rankings, search engine rankings checker, keyword position checker, SERP tracker, SEO ranking tool, keyword rank tracker" />
        
        <meta property="og:title" content="Google Rank Checker Tool | Check Your Google Rankings" />
        <meta property="og:description" content="Free tool to check your website's position in Google search results. Monitor your SEO performance across multiple search engines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seoaudittool.net/rank-checker" />
        
        <link rel="canonical" href="https://seoaudittool.net/rank-checker" />
      </Helmet>

      <div className="container max-w-7xl px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light mb-4">
            Google Rank Checker Tool
          </h1>
          <p className="text-lg md:text-xl text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
            Check your website's position in Google search results across different regions and track your SEO performance.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="tool">Rank Checker Tool</TabsTrigger>
            <TabsTrigger value="history">Your History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tool" className="mt-6">
            <RankChecker />
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <RankingHistory key={historyUpdated} onClearHistory={handleHistoryClear} />
            <SEOSuggestions />
          </TabsContent>
        </Tabs>
        
        {/* Comprehensive SEO Content Section */}
        <section className="py-10 max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-headings:text-navy dark:prose-headings:text-white prose-headings:font-bold prose-p:text-navy/80 dark:prose-p:text-white/80">
          <h2 className="text-3xl">Google Rank Checker: Monitor Your Search Engine Positions</h2>
          
          <p>
            Welcome to our free Google rank checker tool, designed to help you monitor and track your website's position
            in search engine results pages (SERPs) across different Google domains. Understanding where your website ranks
            for targeted keywords is an essential part of any successful SEO strategy.
          </p>
          
          <h3>Why Track Your Google Rankings?</h3>
          <p>
            Search engine rankings directly impact your website's visibility and organic traffic. Higher positions in
            Google search results typically lead to more clicks, visits, and potential conversions. By regularly monitoring
            your keyword rankings, you can:
          </p>
          
          <ul>
            <li><strong>Measure SEO effectiveness</strong> - Track how your optimization efforts affect your rankings over time</li>
            <li><strong>Identify opportunities</strong> - Discover keywords where you're close to ranking on the first page</li>
            <li><strong>Detect ranking drops</strong> - Quickly respond to any decrease in positions before they significantly impact traffic</li>
            <li><strong>Analyze competitors</strong> - Compare your rankings against your competitors to refine your strategy</li>
            <li><strong>Prove ROI</strong> - Demonstrate the value of your SEO campaigns with tangible ranking improvements</li>
          </ul>
          
          <h3>Understanding Google Search Results</h3>
          <p>
            Google's search results pages contain different types of listings:
          </p>
          
          <ol>
            <li><strong>Google Business Profiles</strong> - Local business listings that appear in the "Map Pack" above organic results</li>
            <li><strong>Organic Results</strong> - Traditional web page listings that our rank checker tool tracks</li>
            <li><strong>Paid Ads</strong> - Sponsored listings that appear at the top and bottom of search results</li>
            <li><strong>Featured Snippets</strong> - Enhanced results that appear in position zero</li>
          </ol>
          
          <p>
            Our rank checker specifically focuses on <strong>organic results</strong>. If your website has a Google Business Profile
            that ranks well in the Map Pack but your organic listing is lower, our tool will report the organic position.
          </p>
          
          <h3>How Our Google Rank Checker Works</h3>
          <p>
            Our rank checker tool simulates searches across different Google domains (.com, .ca, .co.in, etc.) to determine
            where your website appears in the search results for specific keywords. This allows you to track your global SEO
            performance and understand how you rank in different geographic markets.
          </p>
          
          <div className="not-prose my-8">
            <Link to="/" className="inline-flex items-center gap-2 text-teal hover:text-teal-600 transition-colors">
              <ArrowRight className="h-4 w-4" />
              Try our comprehensive SEO Audit Tool
            </Link>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">How accurate is this rank checker tool?</h3>
              <p className="text-navy/70 dark:text-white/70">
                Our rank checker provides a good estimation of your website's position in search results. 
                However, search results can vary based on personalization, location, and other factors. For the most 
                accurate results, we recommend using this tool alongside Google Search Console data.
              </p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Does this tool check Google Business listings?</h3>
              <p className="text-navy/70 dark:text-white/70">
                No, this tool only checks organic search results. Google Business listings (the "Map Pack") 
                appear separately above organic results and are not included in our ranking data. If your business 
                appears in the Map Pack but not in the top organic results, our tool will not show your Map Pack position.
              </p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Is there any risk of getting banned by Google for using this tool?</h3>
              <p className="text-navy/70 dark:text-white/70">
                No, our demonstration tool simulates rankings for educational purposes. In a real implementation, 
                professional rank tracking solutions use SERP API providers that adhere to Google's terms of service. 
                These services maintain compliance by using appropriate rate limiting and request patterns to prevent 
                any issues with search engines.
              </p>
            </div>
            
            <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Why does my site show different rankings than what I see in Google?</h3>
              <p className="text-navy/70 dark:text-white/70">
                Rankings can differ due to several factors: geographical location, personalization based on your search history, 
                device type (mobile vs. desktop), and Google's continuous algorithm updates. Our tool provides a standardized 
                view of rankings that might differ from what you see personally.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RankCheckerPage;
