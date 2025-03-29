
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Info, CheckCircle2, MousePointerClick, LineChart, BarChart3, Globe, Search, FileText, ExternalLink, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import RankChecker from '@/components/RankChecker';
import RankingHistory from '@/components/RankingHistory';
import SEOSuggestions from '@/components/SEOSuggestions';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const RankCheckerPage: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('tool');
  const [historyUpdated, setHistoryUpdated] = useState(0);

  // Handle history clear to refresh components
  const handleHistoryClear = () => {
    setHistoryUpdated(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full bg-light-bg dark:bg-navy">
      <Helmet>
        <title>Google Rank Checker Tool | Check Your Google Rankings | SEO Audit Tool</title>
        <meta name="description" content="Free Google rank checker tool to track your website's position in search engine results. Monitor your SEO performance and check your rankings for target keywords." />
        <meta name="keywords" content="google rank checker, check google rankings, search engine rankings checker, keyword position checker, SERP tracker, SEO ranking tool, keyword rank tracker, organic rankings" />
        
        <meta property="og:title" content="Google Rank Checker Tool | Check Your Google Rankings" />
        <meta property="og:description" content="Free tool to check your website's position in Google search results. Monitor your SEO performance across multiple search engines." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seoaudittool.net/rank-checker" />
        
        <link rel="canonical" href="https://seoaudittool.net/rank-checker" />
      </Helmet>

      <div className="container max-w-7xl px-4 py-12 mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light mb-4">
            Google Rank Checker Tool
          </h1>
          <p className="text-lg md:text-xl text-navy/70 dark:text-white/70 max-w-3xl mx-auto">
            Check your website's position in Google search results across different regions and track your SEO performance for any keyword.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <Globe className="h-4 w-4 mr-2" />
              <span>Multiple Search Engines</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <LineChart className="h-4 w-4 mr-2" />
              <span>Track Progress</span>
            </div>
          </div>
        </div>

        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This rank checker is for demonstration purposes and provides simulated ranking data. In a production environment, it would connect to professional SERP API providers that adhere to search engine terms of service.
          </AlertDescription>
        </Alert>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-10">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="tool" className="text-base py-3">
              <Search className="h-4 w-4 mr-2" />
              Rank Checker Tool
            </TabsTrigger>
            <TabsTrigger value="history" className="text-base py-3">
              <BarChart3 className="h-4 w-4 mr-2" />
              Your History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tool" className="mt-6 animate-fade-in">
            <RankChecker />
          </TabsContent>
          
          <TabsContent value="history" className="mt-6 animate-fade-in">
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
          
          <p>
            In a real-world implementation, professional rank tracking tools use SERP API providers that maintain compliance with search
            engines' terms of service. These services collect ranking data through authorized methods and apply appropriate
            rate limiting to prevent any issues.
          </p>
          
          <h3>Factors Affecting Google Rankings</h3>
          <p>
            Many factors influence your website's position in search results:
          </p>
          
          <ul>
            <li><strong>On-page SEO</strong> - Quality content, keyword optimization, meta tags, and site structure</li>
            <li><strong>Off-page factors</strong> - Backlinks, domain authority, and social signals</li>
            <li><strong>Technical SEO</strong> - Site speed, mobile-friendliness, security, and structured data</li>
            <li><strong>User experience</strong> - Bounce rate, click-through rate, and dwell time</li>
            <li><strong>Local factors</strong> - For geo-specific searches, proximity and local relevance matter</li>
          </ul>
          
          <p>
            By understanding these factors and regularly tracking your rankings, you can develop a more effective SEO strategy
            to improve your visibility in search results.
          </p>
          
          <h3>Interpreting Your Ranking Results</h3>
          <p>
            When using our rank checker, keep the following points in mind:
          </p>
          
          <ul>
            <li><strong>Rankings fluctuate</strong> - It's normal for positions to vary slightly from day to day</li>
            <li><strong>Different search engines</strong> - Rankings can vary between Google, Bing, and other search engines</li>
            <li><strong>Geographic variations</strong> - Your position may differ based on the country or region</li>
            <li><strong>Personalization</strong> - Individual users may see different results based on their search history</li>
            <li><strong>Device differences</strong> - Mobile and desktop searches can produce different rankings</li>
          </ul>
          
          <p>
            For the most accurate assessment, track your rankings consistently over time rather than focusing on a single snapshot.
          </p>
          
          <div className="not-prose my-8">
            <Link to="/" className="inline-flex items-center gap-2 text-teal hover:text-teal-600 transition-colors">
              <ArrowRight className="h-4 w-4" />
              Try our comprehensive SEO Audit Tool
            </Link>
          </div>
        </section>
        
        {/* Expanded FAQ Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How accurate is this rank checker tool?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Our rank checker provides a good estimation of your website's position in search results. 
                  However, search results can vary based on personalization, location, and other factors.
                </p>
                <p className="mb-2">
                  For the most accurate results, we recommend using this tool alongside Google Search Console data, which provides verified 
                  ranking information directly from Google.
                </p>
                <p>
                  Keep in mind that this demonstration version uses simulated data. In a production environment, 
                  a rank checker would connect to professional SERP API providers for real-time data.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Does this tool check Google Business listings?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  No, this tool only checks organic search results. Google Business listings (the "Map Pack") 
                  appear separately above organic results and are not included in our ranking data.
                </p>
                <p>
                  If your business appears in the Map Pack but not in the top organic results, our tool will not show your 
                  Map Pack position. This is an important distinction because a business can rank well in the Map Pack 
                  while having a lower position in the organic results, or vice versa.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Is there any risk of getting banned by Google for using this tool?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  No, our demonstration tool simulates rankings for educational purposes. In a real implementation, 
                  professional rank tracking solutions use SERP API providers that adhere to Google's terms of service.
                </p>
                <p>
                  These services maintain compliance by using appropriate rate limiting and request patterns to prevent 
                  any issues with search engines. They typically access search results through legitimate channels and
                  distribute requests across multiple IPs and user agents to avoid triggering anti-scraping measures.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Why does my site show different rankings than what I see in Google?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Rankings can differ due to several factors:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Geographical location (searches from different countries or cities show different results)</li>
                  <li>Personalization based on your search history and user profile</li>
                  <li>Device type (mobile vs. desktop rankings can vary significantly)</li>
                  <li>Google's continuous algorithm updates and testing</li>
                  <li>Local vs. global search settings</li>
                </ul>
                <p>
                  Our tool provides a standardized view of rankings that might differ from what you see personally.
                  For the most objective results, try searching in an incognito browser window or using a VPN to check from different locations.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How often should I check my rankings?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  For most websites, checking rankings once a week is sufficient to track progress without becoming
                  overly focused on day-to-day fluctuations. However, the optimal frequency depends on your specific needs:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>After implementing significant SEO changes, you might want to check more frequently</li>
                  <li>For highly competitive keywords, more regular monitoring may be beneficial</li>
                  <li>During algorithm updates, daily checking can help you assess impact</li>
                </ul>
                <p>
                  Remember that SEO is a long-term strategy, and meaningful ranking changes typically take weeks or months to materialize.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How many keywords can I check at once?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Our demonstration tool allows you to check up to 3 keywords at once to prevent abuse and 
                  ensure good performance for all users.
                </p>
                <p>
                  Professional rank tracking tools typically offer different tiers of service with varying limits
                  on the number of keywords you can track, ranging from dozens to thousands, depending on your subscription level.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What's the difference between organic rankings and paid results?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Organic rankings are the natural, unpaid listings that appear in search results based on Google's algorithm 
                  assessment of relevance and authority. These positions are earned through SEO efforts.
                </p>
                <p className="mb-2">
                  Paid results (Google Ads) are advertisements that appear at the top and bottom of search results, marked with 
                  an "Ad" label. These positions are purchased through Google's advertising platform on a pay-per-click basis.
                </p>
                <p>
                  Our rank checker tool only tracks organic positions, not paid ad placements. To monitor your ad performance, 
                  you would need to use Google Ads reporting tools instead.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How long does it take to improve my rankings?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  The timeline for ranking improvements varies significantly depending on many factors:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Website age and existing authority</li>
                  <li>Competitiveness of your target keywords</li>
                  <li>Quality and frequency of your content updates</li>
                  <li>Strength of your backlink profile</li>
                  <li>Technical health of your website</li>
                </ul>
                <p className="mb-2">
                  In general, you might see initial movements within 4-12 weeks of implementing SEO improvements.
                  However, reaching top positions for competitive keywords often takes 6-12 months or more of consistent effort.
                </p>
                <p>
                  Less competitive local or long-tail keywords may show faster improvements, sometimes within just a few weeks.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                My site is ranking well, but I'm not getting traffic. Why?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Several factors could explain good rankings but low traffic:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Low search volume for your target keywords</li>
                  <li>Poor click-through rate due to unappealing meta titles and descriptions</li>
                  <li>SERP features (featured snippets, knowledge panels) satisfying user queries without clicks</li>
                  <li>High competition from paid ads appearing above your organic listing</li>
                  <li>Ranking for keywords that don't match user intent</li>
                </ul>
                <p>
                  To improve, focus on optimizing your title tags and meta descriptions to increase click-through rates,
                  target higher-volume keywords relevant to your business, and ensure your content satisfies user intent
                  better than competitors.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-10" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Can I check rankings for specific locations?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Our demonstration tool allows you to check rankings across different Google domains (google.com, google.ca, etc.)
                  which provides a country-level perspective.
                </p>
                <p className="mb-2">
                  Professional rank tracking tools offer more granular location-based tracking, allowing you to check
                  rankings for specific cities, postal codes, or even neighborhoods. This is particularly valuable for
                  local businesses targeting specific geographic areas.
                </p>
                <p>
                  For accurate local ranking data, consider investing in a dedicated rank tracking service that offers
                  geo-specific tracking capabilities.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* Additional Resources Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Additional SEO Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Google's SEO Starter Guide</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Official guidelines from Google on search engine optimization basics.</p>
                  <a 
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Read the guide</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <MousePointerClick className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Search Engine Land</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Latest news and insights about SEO and search engine marketing.</p>
                  <a 
                    href="https://searchengineland.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <HelpCircle className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Moz's Beginner's Guide to SEO</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Comprehensive introduction to search engine optimization concepts.</p>
                  <a 
                    href="https://moz.com/beginners-guide-to-seo" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Learn more</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <LineChart className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Google Search Console</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Free tool from Google to monitor and maintain your site's presence in search results.</p>
                  <a 
                    href="https://search.google.com/search-console/about" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Get started</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Ready to Improve Your SEO?</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Tracking your rankings is just the first step. Get a comprehensive analysis of your website's SEO health 
            to identify opportunities for improvement.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Search className="h-4 w-4 mr-2" />
              Run a Full SEO Audit
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default RankCheckerPage;
