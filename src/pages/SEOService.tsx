
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, BarChart, Lightbulb, Code, Globe, CheckCircle2, ArrowRight } from 'lucide-react';

const SEOService: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional SEO Services | Boost Your Search Rankings"
        description="Our comprehensive SEO services help businesses improve organic search visibility, increase targeted traffic, and achieve higher conversion rates."
        keywords="SEO services, search engine optimization, SEO experts, SEO agency, SEO consulting"
      />
      <div className="bg-gradient-to-b from-navy to-navy-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Our SEO Services</h1>
          <p className="text-lg text-white/90 text-center mb-10 max-w-3xl mx-auto">
            Comprehensive SEO strategies tailored to your business goals and target markets across the United States
          </p>
        </div>
      </div>
        
      <div className="bg-light-bg dark:bg-navy py-16">
        <div className="container mx-auto px-4">
          {/* Core SEO Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">Technical SEO</h2>
              <p className="text-navy/80 dark:text-white/80">Optimize your website's technical aspects to improve crawlability and indexing.</p>
              <Link to="/google-rank-checker-tool" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Check your rankings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">On-Page SEO</h2>
              <p className="text-navy/80 dark:text-white/80">Optimize your content and HTML source code for better search engine rankings.</p>
              <Link to="/keyword-generator-tool" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Generate keywords <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">Off-Page SEO</h2>
              <p className="text-navy/80 dark:text-white/80">Build high-quality backlinks and improve your website's authority.</p>
              <Link to="/bulk-anchor-link-generator-tool" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Generate anchor links <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Location-specific services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white text-center">Location-Based SEO Services</h2>
            <p className="text-navy/80 dark:text-white/80 text-center mb-8 max-w-2xl mx-auto">
              We offer specialized <Link to="/local-seo" className="text-teal hover:underline">local SEO services</Link> for businesses across the United States, helping you connect with customers in your area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/seo-buffalo" className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 text-navy dark:text-white group-hover:text-teal transition-colors">Buffalo SEO</h3>
                <p className="text-navy/80 dark:text-white/80">Specialized search engine optimization for Buffalo businesses and organizations.</p>
              </Link>
              <Link to="/seo-kitchener" className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 text-navy dark:text-white group-hover:text-teal transition-colors">Kitchener SEO</h3>
                <p className="text-navy/80 dark:text-white/80">Custom SEO strategies for businesses in the Kitchener-Waterloo area.</p>
              </Link>
              <Link to="/seo-london" className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
                <h3 className="text-xl font-bold mb-3 text-navy dark:text-white group-hover:text-teal transition-colors">London SEO</h3>
                <p className="text-navy/80 dark:text-white/80">Results-driven search optimization for London businesses.</p>
              </Link>
            </div>
          </div>

          {/* Why choose us section */}
          <div className="bg-white dark:bg-navy-light p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">Why Choose Our SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-navy/80 dark:text-white/80 mb-4">
                  Our <Link to="/" className="text-teal hover:underline">SEO audit tool</Link> and services are designed to help businesses across the United States improve their online visibility and attract more qualified leads.
                </p>
                <p className="text-navy/80 dark:text-white/80">
                  We use data-driven strategies backed by our <Link to="/google-rank-checker-tool" className="text-teal hover:underline">advanced rank tracking tools</Link> to ensure that your website performs optimally in search results.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>Customized strategies based on your industry and location</span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>Transparent reporting and <Link to="/blog/seo-strategy-2025" className="text-teal hover:underline">measurable results</Link></span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>Focus on <Link to="/blog" className="text-teal hover:underline">sustainable, white-hat techniques</Link></span>
                </div>
                <div className="flex items-center gap-2 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>Nationwide service with local expertise</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA section */}
          <div className="bg-teal/10 dark:bg-navy-light p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">Ready to improve your search rankings?</h2>
            <p className="text-navy/80 dark:text-white/80 mb-6 max-w-2xl mx-auto">
              Use our <Link to="/" className="text-teal hover:underline">free SEO audit tool</Link> to analyze your website, or contact us for a personalized SEO strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-light text-white">
                  <Search className="w-4 h-4 mr-2" /> Free SEO Audit
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <BarChart className="w-4 h-4 mr-2" /> Get Custom SEO Strategy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOService;
