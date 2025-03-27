
import React from 'react';
import SEOContentSection from './SEOContentSection';
import SEOForm from './SEOForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, CheckCircle, Info, PenTool, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface SEOContainerProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOContainer: React.FC<SEOContainerProps> = ({ onSubmit, isLoading }) => {
  return (
    <div className="min-h-screen">
      {/* Hero section - Dark theme with branding */}
      <div className="bg-gradient-to-b from-navy to-navy-light text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-6 flex justify-center">
              <h1 className="text-2xl md:text-4xl font-display font-bold text-white">
                AUS <span className="text-teal">Digital</span>
              </h1>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
              Free <span className="text-teal">SEO Audit Tool</span> for Your Website
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Analyze your website's SEO health, uncover critical issues, and get actionable recommendations to improve your search engine rankings.
            </p>
            
            {/* SEO Form */}
            <div id="seo-form">
              <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Benefits and Info Tabs - Light theme */}
      <div className="bg-gradient-light text-navy py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-navy">
              Why Choose Our <span className="text-teal">SEO Analysis Tool</span>
            </h2>
            <p className="text-lg text-navy-light max-w-3xl mx-auto">
              Our comprehensive SEO toolkit helps businesses improve their search engine visibility and drive organic traffic.
            </p>
          </motion.div>
          
          <Tabs defaultValue="why-use" className="w-full max-w-4xl mx-auto glass-light p-6 rounded-xl">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-transparent">
              <TabsTrigger 
                value="why-use" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                <Info className="mr-2 h-4 w-4" />
                Why Use Our SEO Tool
              </TabsTrigger>
              <TabsTrigger 
                value="benefits" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Benefits of Regular Audits
              </TabsTrigger>
              <TabsTrigger 
                value="how-works" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                <Search className="mr-2 h-4 w-4" />
                How Our Tool Works
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="why-use" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">Why Use Our Free SEO Checker Tool?</h3>
              <p className="mb-3">
                Our <span className="font-medium text-teal">comprehensive SEO analyzer</span> provides detailed insights into your website's search engine optimization status. Unlike basic SEO checkers, our tool examines over 100 ranking factors that impact your visibility in search engine results pages (SERPs).
              </p>
              <p className="mb-3">
                When you're trying to improve your website's <span className="font-medium text-teal">organic search performance</span>, you need accurate data about what's working and what needs improvement. Our tool helps you identify technical issues, content gaps, and on-page optimization opportunities that might be holding your site back from ranking higher.
              </p>
              <p className="mb-3">
                Whether you're a small business owner, digital marketer, or SEO professional, our <span className="font-medium text-teal">website SEO audit tool</span> provides actionable insights that can help improve your search presence, increase organic traffic, and ultimately grow your business online.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li><span className="font-medium text-teal">Search engine visibility analysis</span> - Understand how search engines see your site</li>
                <li><span className="font-medium text-teal">Keyword optimization check</span> - Verify proper targeting for search terms</li>
                <li><span className="font-medium text-teal">Content quality assessment</span> - Evaluate content for search relevance</li>
                <li><span className="font-medium text-teal">Technical SEO audit</span> - Find hidden technical issues affecting rankings</li>
                <li><span className="font-medium text-teal">Mobile optimization verification</span> - Ensure mobile-friendly design</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="benefits" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">Benefits of Regular SEO Audits</h3>
              <p className="mb-3">
                Conducting <span className="font-medium text-teal">regular SEO audits</span> is essential for maintaining and improving your website's search engine rankings. Here's why you should make SEO audits a regular part of your digital marketing strategy:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">1. Stay Ahead of Algorithm Updates</h4>
              <p className="mb-3">
                Search engines like Google regularly update their <span className="font-medium text-teal">ranking algorithms</span>, affecting how websites are ranked. By performing regular <span className="font-medium text-teal">website SEO analysis</span>, you can quickly adapt to these changes and maintain your position in search results. Our tool helps you stay compliant with the latest SEO best practices and algorithm requirements.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">2. Identify and Fix Technical Issues</h4>
              <p className="mb-3">
                Technical problems like slow loading times, broken links, duplicate content, or mobile compatibility issues can significantly impact your <span className="font-medium text-teal">search engine performance</span>. Our <span className="font-medium text-teal">SEO audit tool</span> thoroughly scans your website to detect these issues before they affect your rankings.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">3. Optimize Your Content Strategy</h4>
              <p className="mb-3">
                Your content is crucial for both user experience and <span className="font-medium text-teal">search engine rankings</span>. Regular audits help you identify content gaps, keyword opportunities, and areas where your <span className="font-medium text-teal">content quality</span> could be improved to better satisfy user intent and search engine requirements.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">4. Track Progress and Measure Results</h4>
              <p className="mb-3">
                By conducting <span className="font-medium text-teal">periodic SEO checkups</span>, you can track your website's progress over time and measure the impact of your optimization efforts. This data-driven approach allows you to refine your <span className="font-medium text-teal">SEO strategy</span> based on what's working and focus resources on high-impact improvements.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">5. Gain Competitive Advantage</h4>
              <p className="mb-3">
                Many businesses neglect regular <span className="font-medium text-teal">SEO maintenance</span>. By implementing a consistent audit schedule, you can identify opportunities your competitors might miss and leverage these insights to improve your <span className="font-medium text-teal">search visibility</span> and organic traffic growth.
              </p>
            </TabsContent>
            
            <TabsContent value="how-works" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">How Our SEO Checker Works</h3>
              <p className="mb-3">
                Our <span className="font-medium text-teal">SEO analysis tool</span> uses advanced algorithms to evaluate your website's optimization status through a comprehensive multi-step process:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">1. Website Crawling and Analysis</h4>
              <p className="mb-3">
                When you submit your URL, our <span className="font-medium text-teal">SEO checker</span> crawls your website to gather critical data about its structure, content, and technical elements. This includes examining your URL structure, which is an important factor in how search engines understand and categorize your site.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">2. On-Page SEO Evaluation</h4>
              <p className="mb-3">
                Our tool analyzes your <span className="font-medium text-teal">on-page SEO elements</span> including title tags, meta descriptions, headings, and content quality. We check if your meta tags are properly optimized for your target keywords and fall within recommended length guidelines for maximum SERP visibility.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">3. Content Quality Assessment</h4>
              <p className="mb-3">
                We examine your content's relevance to target keywords, readability, word count, and overall quality. Our <span className="font-medium text-teal">content analysis</span> evaluates keyword density, semantic richness, and the presence of related terms that indicate comprehensive topic coverage to search engines.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">4. Technical SEO Inspection</h4>
              <p className="mb-3">
                Our <span className="font-medium text-teal">technical SEO audit</span> checks elements like HTTPS implementation, mobile-friendliness, page speed, structured data markup, canonical tags, and XML sitemaps. These technical factors are increasingly important for search engine rankings and user experience.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">5. Competitor Benchmarking</h4>
              <p className="mb-3">
                To provide context for your SEO performance, our tool compares key metrics against industry standards and top-performing sites in your niche. This <span className="font-medium text-teal">competitive analysis</span> helps you understand where you stand relative to others targeting similar keywords.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">6. Actionable Recommendations</h4>
              <p className="mb-3">
                Based on our comprehensive analysis, we provide prioritized recommendations for improving your site's <span className="font-medium text-teal">search engine optimization</span>. Each suggestion is accompanied by clear instructions on how to implement the fix and why it matters for your SEO performance.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* SEO Checklist - Dark theme */}
      <div className="bg-gradient-to-b from-navy to-navy-light py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
              Comprehensive SEO Analysis Tools
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our SEO toolkit provides in-depth analysis across multiple critical factors that impact your search rankings.
            </p>
          </motion.div>
          
          <Tabs defaultValue="technical" className="w-full max-w-4xl mx-auto glass-strong p-6 rounded-xl">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-transparent">
              <TabsTrigger 
                value="technical" 
                className="data-[state=active]:bg-teal data-[state=active]:text-navy"
              >
                Technical SEO
              </TabsTrigger>
              <TabsTrigger 
                value="on-page" 
                className="data-[state=active]:bg-teal data-[state=active]:text-navy"
              >
                On-Page Elements
              </TabsTrigger>
              <TabsTrigger 
                value="content" 
                className="data-[state=active]:bg-teal data-[state=active]:text-navy"
              >
                Content Quality
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="p-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-teal">Technical SEO Analysis</h3>
              <p className="mb-3">
                Our <span className="text-highlight">technical SEO audit tool</span> examines the foundation of your website's search performance by analyzing critical back-end elements that search engines use to crawl, index, and rank your site. We check for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Core Web Vitals performance metrics (LCP, FID, CLS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mobile-first indexing compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>HTTPS security implementation and certificates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>XML sitemap configuration and submission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Crawlability and indexability status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>URL structure and canonical tags implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Robots.txt file configuration analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Server response time and performance</span>
                </li>
              </ul>
              <p className="mt-4">
                Our <span className="text-highlight">website SEO checker</span> identifies technical issues that might be invisible to users but critical for search engines. Fixing these foundational elements can significantly improve your crawling efficiency, indexation, and ranking potential.
              </p>
            </TabsContent>
            
            <TabsContent value="on-page" className="p-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-teal">On-Page SEO Analysis</h3>
              <p className="mb-3">
                Our <span className="text-highlight">on-page SEO analyzer</span> evaluates how well your individual pages are optimized for search engines and target keywords. We examine critical on-page elements that directly influence how search engines understand and rank your content:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Title tag optimization and character length</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Meta description completeness and relevance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Header structure (H1, H2, H3) hierarchy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keyword presence in critical on-page elements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Image optimization with alt text attributes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Internal linking structure and anchor text</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Schema markup implementation for rich snippets</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>URL optimization and keyword inclusion</span>
                </li>
              </ul>
              <p className="mt-4">
                Our <span className="text-highlight">SEO audit tool</span> helps you ensure that each page clearly communicates its topic and relevance to search engines. Proper on-page optimization is essential for improving your visibility for target keywords and driving qualified organic traffic.
              </p>
            </TabsContent>
            
            <TabsContent value="content" className="p-4 text-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-teal">Content Quality Analysis</h3>
              <p className="mb-3">
                Content is the foundation of SEO success. Our <span className="text-highlight">content quality checker</span> evaluates how well your content satisfies user intent and search engine quality guidelines. We analyze:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content relevance to search intent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keyword usage and semantic relevance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content comprehensiveness and depth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Readability and engagement factors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>E-E-A-T signals (Experience, Expertise, Authority, Trust)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Content freshness and update frequency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>LSI keyword inclusion and semantic richness</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span>Duplicate content detection</span>
                </li>
              </ul>
              <p className="mt-4">
                Our <span className="text-highlight">website SEO analysis tool</span> helps you create content that satisfies both users and search engines. With modern search algorithms increasingly focusing on content quality, ensuring your pages provide comprehensive, authoritative information on their topics is essential for ranking success.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* SEO Best Practices - Light theme */}
      <div className="bg-gradient-light text-navy py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-navy">
              SEO Best Practices for <span className="text-teal">2023</span>
            </h2>
            <p className="text-lg text-navy-light max-w-3xl mx-auto">
              Stay ahead of the competition with these current search engine optimization strategies.
            </p>
          </motion.div>
          
          <Tabs defaultValue="user-experience" className="w-full max-w-4xl mx-auto glass-light p-6 rounded-xl">
            <TabsList className="grid w-full grid-cols-3 mb-6 bg-transparent">
              <TabsTrigger 
                value="user-experience" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                User Experience
              </TabsTrigger>
              <TabsTrigger 
                value="content-strategy" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                Content Strategy
              </TabsTrigger>
              <TabsTrigger 
                value="technical-factors" 
                className="data-[state=active]:bg-teal data-[state=active]:text-white"
              >
                Technical Factors
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="user-experience" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">User Experience Optimization</h3>
              <p className="mb-3">
                Google's algorithms increasingly prioritize websites that provide excellent user experiences. Our <span className="font-medium text-teal">free SEO checker</span> evaluates these critical user experience factors:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Core Web Vitals Optimization</h4>
              <p className="mb-3">
                Google's Core Web Vitals metrics measure loading performance, interactivity, and visual stability. Optimizing these factors improves both user experience and search rankings.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Mobile-First Design</h4>
              <p className="mb-3">
                With Google's mobile-first indexing, your website's mobile experience determines your rankings. Our <span className="font-medium text-teal">SEO audit</span> verifies that your site is fully optimized for mobile users.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Site Navigation and Structure</h4>
              <p className="mb-3">
                Intuitive navigation helps users find what they're looking for quickly. Our <span className="font-medium text-teal">website analyzer</span> evaluates your site structure for user-friendliness and search engine optimization.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Page Speed Optimization</h4>
              <p className="mb-3">
                Fast-loading pages improve user satisfaction and conversion rates. Our <span className="font-medium text-teal">technical SEO audit</span> identifies opportunities to improve page speed for better user experience and rankings.
              </p>
            </TabsContent>
            
            <TabsContent value="content-strategy" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">Content Strategy Optimization</h3>
              <p className="mb-3">
                Content remains the foundation of SEO success. Our <span className="font-medium text-teal">SEO analyzer</span> helps you develop a content strategy that satisfies both users and search engines:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">E-E-A-T Content Development</h4>
              <p className="mb-3">
                Google evaluates content based on Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Our <span className="font-medium text-teal">content quality checker</span> helps ensure your content demonstrates these qualities.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Search Intent Alignment</h4>
              <p className="mb-3">
                Understanding and matching user search intent is essential for ranking success. Our <span className="font-medium text-teal">keyword optimization tool</span> helps you align your content with what users are actually searching for.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Semantic Search Optimization</h4>
              <p className="mb-3">
                Modern search engines understand context and relationships between words. Our <span className="font-medium text-teal">SEO content analysis</span> evaluates your use of related terms and LSI keywords that demonstrate topic comprehensiveness.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Long-Form, In-Depth Content</h4>
              <p className="mb-3">
                Comprehensive content that thoroughly covers topics tends to rank better. Our <span className="font-medium text-teal">website SEO analysis</span> helps you develop content that demonstrates depth and authority on your subject matter.
              </p>
            </TabsContent>
            
            <TabsContent value="technical-factors" className="p-4">
              <h3 className="text-xl font-semibold mb-4 text-navy">Technical SEO Best Practices</h3>
              <p className="mb-3">
                Technical SEO forms the foundation for all other optimization efforts. Our <span className="font-medium text-teal">technical SEO audit</span> examines these critical factors:
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Structured Data Implementation</h4>
              <p className="mb-3">
                Schema markup helps search engines understand your content and can result in rich snippets in search results. Our <span className="font-medium text-teal">SEO checker</span> verifies proper structured data implementation.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Core Web Vitals Optimization</h4>
              <p className="mb-3">
                Google's page experience signals measure loading performance, interactivity, and visual stability. Our <span className="font-medium text-teal">website analysis tool</span> evaluates your Core Web Vitals metrics and provides improvement recommendations.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">HTTPS Security</h4>
              <p className="mb-3">
                Secure websites are preferred by both users and search engines. Our <span className="font-medium text-teal">SEO audit</span> verifies proper HTTPS implementation and identifies security issues that could affect your rankings.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2 text-navy">Mobile Optimization</h4>
              <p className="mb-3">
                With Google's mobile-first indexing, your site's mobile version determines your rankings. Our <span className="font-medium text-teal">free SEO analyzer</span> checks mobile responsiveness, viewport configuration, and touch element spacing.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* CTA - Dark theme */}
      <div className="bg-gradient-to-b from-navy to-navy-light py-12 md:py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 gradient-text">
              Start Your Free SEO Audit Today
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Don't leave your website's search performance to chance. Use our <span className="text-highlight">free SEO checker</span> to identify issues and opportunities, and take your first step toward better search rankings.
            </p>
            <Button 
              size="lg" 
              className="animate-pulse-glow"
              onClick={() => window.scrollTo({ top: document.getElementById('seo-form')?.offsetTop || 0, behavior: 'smooth' })}
            >
              Analyze My Website <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* SEO Resources - Light theme */}
      <div className="bg-gradient-light text-navy py-12 md:py-16">
        <div className="container-custom">
          <SEOContentSection />
        </div>
      </div>
      
      {/* Additional SEO Content - Hidden for SEO but visible to search engines */}
      <div className="sr-only" aria-hidden="true">
        <h2>AUS Digital SEO Audit Tool: Complete Website SEO Analysis</h2>
        <p>
          Looking for a powerful free SEO checker and website analyzer? Our comprehensive SEO audit tool provides in-depth analysis of your website's search engine optimization factors. From technical SEO issues to content quality and keyword optimization, our tool examines all aspects that affect your search rankings.
        </p>
        
        <h3>Why Choose Our Free SEO Analyzer</h3>
        <p>
          Unlike basic SEO checkers, our website SEO analysis tool evaluates over 100 ranking factors that impact your visibility in search engine results pages (SERPs). Our SEO optimization checker provides actionable recommendations to improve your organic search performance, increase website traffic, and boost your search engine rankings.
        </p>
        
        <h3>Complete SEO Analysis For Your Website</h3>
        <p>
          Our website SEO analyzer provides comprehensive analysis of technical SEO elements, including page speed, mobile-friendliness, HTTPS implementation, XML sitemaps, canonical tags, and structured data markup. We also evaluate on-page SEO factors like title tags, meta descriptions, heading structure, and content quality to ensure your website communicates effectively with search engines.
        </p>
        
        <h3>Keyword Optimization Analysis</h3>
        <p>
          Our SEO checker tool examines keyword usage throughout your website, including in title tags, meta descriptions, headings, content, URLs, and image alt text. We also analyze latent semantic indexing (LSI) keywords and related terms to help you demonstrate topic comprehensiveness and relevance to search engines.
        </p>
        
        <h3>Content Quality Assessment</h3>
        <p>
          Google's algorithms prioritize high-quality, relevant content that satisfies user intent. Our SEO content analysis evaluates your content's relevance to target keywords, readability, depth, and E-E-A-T signals (Experience, Expertise, Authoritativeness, and Trustworthiness) to identify opportunities for improvement.
        </p>
        
        <h3>Technical SEO Audit</h3>
        <p>
          Technical issues can prevent search engines from properly crawling, indexing, and ranking your website. Our website SEO analyzer identifies technical problems like slow loading times, mobile usability issues, crawl errors, duplicate content, and broken links that might affect your search performance.
        </p>
        
        <h3>SEO Best Practices Implementation</h3>
        <p>
          Our SEO audit tool checks your website against current SEO best practices, including Core Web Vitals optimization, mobile-first design, structured data implementation, and secure HTTPS configuration, to ensure your site meets the latest requirements for search engine success.
        </p>
        
        <h3>Start Your Free SEO Analysis Today</h3>
        <p>
          Don't leave your website's search performance to chance. Use our free SEO checker to identify issues and opportunities, and take your first step toward better search rankings and increased organic traffic. No sign-up required - start your analysis instantly with AUS Digital's comprehensive SEO audit tool.
        </p>
      </div>
    </div>
  );
};

export default SEOContainer;
