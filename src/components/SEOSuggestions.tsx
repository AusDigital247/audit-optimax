
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ExternalLink, CheckCircle, Zap, FileSearch, BarChart, Book, Link2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SEOSuggestions: React.FC = () => {
  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-navy dark:text-white flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-amber-500" />
        SEO Improvement Suggestions
      </h2>
      
      <Tabs defaultValue="basics">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="basics">SEO Basics</TabsTrigger>
          <TabsTrigger value="technical">Technical SEO</TabsTrigger>
          <TabsTrigger value="content">Content Strategy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amber-500" />
                SEO Fundamentals for Better Rankings
              </CardTitle>
              <CardDescription>
                Follow these proven strategies to improve your website's visibility in search results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">On-Page SEO Optimization</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimize meta tags</strong> - Create compelling titles (50-60 characters) and descriptions (150-160 characters) with target keywords</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Create quality content</strong> - Develop comprehensive, well-researched content that addresses user intent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Use proper heading structure</strong> - Implement H1, H2, H3 tags with relevant keywords to organize content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimize images</strong> - Use descriptive filenames, alt text, and compress images for faster loading</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Keyword Research</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Find relevant keywords</strong> - Research terms your target audience is searching for</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Target long-tail keywords</strong> - Less competitive phrases with specific search intent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Analyze competitors</strong> - Identify keywords your competitors are ranking for</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Use keyword tools</strong> - Leverage Google Keyword Planner, Ahrefs, SEMrush, or Ubersuggest</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Regular monitoring of your rankings is essential to track progress and adjust your strategy.
                    Use our rank checker tool weekly to stay on top of your SEO performance.
                  </p>
                  <a 
                    href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80 text-sm mt-2"
                  >
                    <span>Learn more from Google's SEO Starter Guide</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technical" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSearch className="h-5 w-5 text-amber-500" />
                Technical SEO Improvements
              </CardTitle>
              <CardDescription>
                Enhance your website's technical foundation to improve crawling, indexing, and ranking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Website Performance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Improve page speed</strong> - Compress images, enable browser caching, and minify CSS/JavaScript</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Implement mobile-friendly design</strong> - Ensure responsive layout and touch-friendly elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimize Core Web Vitals</strong> - Improve LCP, FID, and CLS metrics for better user experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Use HTTPS</strong> - Secure your site with SSL certification</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Crawling and Indexing</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Create and submit XML sitemap</strong> - Help search engines discover all your important pages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimize robots.txt</strong> - Guide search engines on which parts of your site to crawl</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Fix broken links</strong> - Regularly check and repair 404 errors and redirect chains</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Implement schema markup</strong> - Add structured data to help search engines understand your content</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Technical SEO creates the foundation for your content and off-page efforts to succeed.
                    Regular technical audits can identify issues before they impact your rankings.
                  </p>
                  <a 
                    href="https://web.dev/measure/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80 text-sm mt-2"
                  >
                    <span>Test your site with Google's PageSpeed Insights</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-amber-500" />
                Content and Link Building Strategies
              </CardTitle>
              <CardDescription>
                Create valuable content and build quality backlinks to establish authority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Content Strategy</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Create comprehensive content</strong> - Develop in-depth articles that thoroughly cover topics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Follow E-E-A-T principles</strong> - Demonstrate Experience, Expertise, Authoritativeness, and Trustworthiness</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Implement content clusters</strong> - Organize related content around pillar pages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Update existing content</strong> - Regularly refresh older content with new information</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Link Building</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Create linkable assets</strong> - Develop research, tools, or resources others want to link to</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Build quality backlinks</strong> - Focus on relevant, authoritative sites in your industry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Guest posting</strong> - Contribute valuable content to respected publications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Internal linking</strong> - Connect related pages to distribute link equity and help users navigate</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Monitor your content performance and backlink profile to identify what's working well.
                    Quality always outweighs quantity when it comes to both content and links.
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <a 
                      href="https://blog.hubspot.com/marketing/content-marketing-plan" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80 text-sm"
                    >
                      <span>Content marketing guide</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <a 
                      href="https://ahrefs.com/blog/link-building/" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80 text-sm"
                    >
                      <span>Link building strategies</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Card className="border-teal/20 dark:border-teal/30 bg-teal/5 dark:bg-teal/10">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
              <BarChart className="h-6 w-6 text-teal dark:text-teal-light" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">Track Your SEO Progress</h3>
              <p className="text-navy/70 dark:text-white/70 mb-4">
                SEO is a long-term strategy that requires consistent effort and monitoring. Set up a regular schedule to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Check your rankings weekly for important keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Monitor organic traffic and conversion trends</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Review and analyze backlink profile monthly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conduct comprehensive SEO audits quarterly</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOSuggestions;
