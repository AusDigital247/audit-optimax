
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, ExternalLink, CheckCircle } from 'lucide-react';

const SEOSuggestions: React.FC = () => {
  return (
    <div className="space-y-6 mt-10">
      <h2 className="text-2xl font-bold dark:text-white">SEO Improvement Suggestions</h2>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            How to Improve Your Google Rankings
          </CardTitle>
          <CardDescription>
            Follow these proven strategies to improve your website's visibility in search results
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">On-Page SEO Optimization</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optimize your page titles and meta descriptions with target keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create comprehensive, high-quality content that addresses user intent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ensure proper heading structure (H1, H2, H3) with relevant keywords</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Optimize images with descriptive filenames and alt text</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Technical SEO</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Improve page loading speed for better user experience and rankings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ensure your website is mobile-friendly and responsive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fix broken links and implement proper redirects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create and submit an XML sitemap to search engines</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Off-Page SEO</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Build high-quality backlinks from reputable websites in your niche</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Create and optimize Google Business Profile for local SEO</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Engage in social media to increase visibility and drive traffic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span>Monitor online reviews and maintain a positive reputation</span>
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
                className="flex items-center text-teal hover:text-teal-600 text-sm mt-2"
              >
                <span>Learn more from Google's SEO Starter Guide</span>
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SEOSuggestions;
