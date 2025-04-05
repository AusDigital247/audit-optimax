
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import RankCheckerComponent from '@/components/RankChecker';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Info, FileText, ExternalLink, Search } from 'lucide-react';
import SEOToolContentGenerator from '@/components/SEOToolContentGenerator';

const RankCheckerPage: React.FC = () => {
  const toolName = "Google Rank Checker";
  const toolDescription = "Track your website's positions in Google search results instantly. Monitor your ranking performance for important keywords and stay ahead of competitors.";
  
  const relatedTools = [
    {
      name: "Keyword Generator",
      path: "/keyword-generator",
      description: "Discover high-value keywords for your SEO strategy"
    },
    {
      name: "Sentence Rewriter",
      path: "/sentence-rewriter",
      description: "Optimize your content for better search engine rankings"
    }
  ];

  return (
    <ToolPageLayout 
      title="Free Google Rank Checker Tool | Track SERP Positions Instantly"
      description="Monitor your website's ranking positions in Google search results with our free and accurate rank checker tool. Track your SEO performance and outrank competitors."
      keywords="rank checker, SERP checker, keyword ranking, SEO position tracker, google position checker, website ranking tool"
      relatedTools={relatedTools}
    >
      <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
        <Info className="h-4 w-4 text-amber-500" />
        <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
        <AlertDescription className="text-amber-700 dark:text-amber-300">
          This rank checker is for demonstration purposes and provides simulated ranking data. In a production environment, it would connect to professional SERP API providers that adhere to search engine terms of service.
        </AlertDescription>
      </Alert>
      
      <RankCheckerComponent />
      
      <SEOToolContentGenerator 
        toolName={toolName}
        toolDescription={toolDescription}
        relatedTools={relatedTools}
      />
      
      {/* Frequently Asked Questions Section */}
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
        </Accordion>
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
    </ToolPageLayout>
  );
};

export default RankCheckerPage;
