
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Search, Building, Users, CheckCircle2, BarChart, Star, ArrowRight } from 'lucide-react';

const LocalSEO: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Local SEO Services | Dominate Local Search Results"
        description="Maximize your local business visibility with our specialized local SEO services. Improve Google Business Profile, local citations, and rank higher in local searches."
        keywords="local SEO, local search optimization, Google My Business, local citations, local business SEO"
      />
      <div className="bg-gradient-to-b from-navy to-navy-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-white text-center">Local SEO Services</h1>
          <p className="text-lg text-white/90 text-center mb-10 max-w-3xl mx-auto">
            Attract more local customers with targeted local search optimization strategies that put your business on the map
          </p>
        </div>
      </div>
      
      <div className="bg-light-bg dark:bg-navy py-16">
        <div className="container mx-auto px-4">
          {/* Content for the Local SEO page with improved contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">Google Business Profile</h2>
              <p className="text-navy/80 dark:text-white/80">Optimize your Google Business Profile to improve local visibility and attract nearby customers.</p>
              <Link to="/google-rank-checker-tool" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Check rankings <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">Local Citations</h2>
              <p className="text-navy/80 dark:text-white/80">Build consistent citations across local directories to boost your local search presence.</p>
              <Link to="/seo-buffalo" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Buffalo SEO services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md">
              <div className="bg-teal/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-teal" />
              </div>
              <h2 className="text-xl font-bold mb-3 text-navy dark:text-white">Local Link Building</h2>
              <p className="text-navy/80 dark:text-white/80">Develop relationships with local businesses and organizations to build quality local backlinks.</p>
              <Link to="/seo-services" className="text-teal hover:text-teal-light flex items-center gap-1 mt-4 font-medium">
                Explore SEO services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">Why Local SEO Matters For Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-navy/80 dark:text-white/80 mb-4">
                  Local search optimization is essential for businesses looking to connect with customers in their area. With <Link to="/" className="text-teal hover:underline">comprehensive SEO strategies</Link>, your business can dominate local search results and attract more foot traffic.
                </p>
                <p className="text-navy/80 dark:text-white/80 mb-4">
                  Our <Link to="/seo-services" className="text-teal hover:underline">specialized SEO services</Link> focus on optimizing your online presence for location-based searches, helping potential customers find you when they need your products or services the most.
                </p>
                <div className="flex items-center gap-2 mb-3 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>46% of all Google searches have local intent</span>
                </div>
                <div className="flex items-center gap-2 mb-3 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>92% of searchers select businesses on the first page of local results</span>
                </div>
                <div className="flex items-center gap-2 text-navy dark:text-white">
                  <CheckCircle2 className="text-teal flex-shrink-0 w-5 h-5" />
                  <span>78% of local mobile searches result in offline purchases</span>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 dark:bg-navy p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-navy dark:text-white">How We Can Help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Star className="text-teal flex-shrink-0 w-5 h-5 mt-1" />
                      <span className="text-navy/80 dark:text-white/80">Optimize your <Link to="/google-rank-checker-tool" className="text-teal hover:underline">Google Business Profile</Link> for maximum visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-teal flex-shrink-0 w-5 h-5 mt-1" />
                      <span className="text-navy/80 dark:text-white/80">Target <Link to="/keyword-generator-tool" className="text-teal hover:underline">local keywords</Link> to attract nearby customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-teal flex-shrink-0 w-5 h-5 mt-1" />
                      <span className="text-navy/80 dark:text-white/80">Create <Link to="/seo-buffalo" className="text-teal hover:underline">location-specific pages</Link> for your service areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-teal flex-shrink-0 w-5 h-5 mt-1" />
                      <span className="text-navy/80 dark:text-white/80">Build citations in major <Link to="/blog" className="text-teal hover:underline">local directories</Link> and review sites</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="text-teal flex-shrink-0 w-5 h-5 mt-1" />
                      <span className="text-navy/80 dark:text-white/80">Implement schema markup for <Link to="/blog/seo-strategy-2025" className="text-teal hover:underline">enhanced local visibility</Link></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-teal/10 dark:bg-navy-light p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">Ready to boost your local presence?</h2>
            <p className="text-navy/80 dark:text-white/80 mb-6 max-w-2xl mx-auto">
              Our team of local SEO experts can help your business stand out in search results and attract more customers from your area.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-teal hover:bg-teal-light text-white">
                  <MapPin className="w-4 h-4 mr-2" /> Get a Free Local SEO Consultation
                </Button>
              </Link>
              <Link to="/google-rank-checker-tool">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <Search className="w-4 h-4 mr-2" /> Check Your Rankings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSEO;
