
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { MapPin, Search, Building, Users, CheckCircle2, BarChart3, Globe, Rocket } from 'lucide-react';

const LocalSeo = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Local SEO Services | Boost Local Search Rankings | SEO Audit Tool</title>
        <meta name="description" content="Specialized local SEO services to help your business dominate local search results. Target customers in your area and drive more foot traffic." />
        <meta name="keywords" content="local SEO, local search optimization, Google Maps SEO, Google Business Profile, local rankings, local business SEO" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Local SEO specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Specialized local SEO services to help your business dominate local search results and drive more foot traffic.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceType": "Local Search Engine Optimization",
            "audience": {
              "@type": "Audience",
              "audienceType": "Local Businesses"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section - Dark Theme */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Local SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Dominate local search results and attract more customers from your area
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our SEO Audit Tool
                </Button>
              </Link>
              <Link to="/seo-toronto">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Toronto SEO Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Google Maps Visibility</h3>
              <p className="text-white/70">
                Optimize your Google Business Profile to appear prominently in local map results when potential customers search for your products or services.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Citation Building</h3>
              <p className="text-white/70">
                Create consistent business listings across local directories to strengthen your local SEO foundation and boost your local search rankings.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review Management</h3>
              <p className="text-white/70">
                Implement strategies to generate positive customer reviews and effectively manage your online reputation to build trust with potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mixed Light/Dark Theme Section */}
      <section className="bg-light-bg dark:bg-navy-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-navy dark:text-white mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal dark:from-white dark:to-teal-light">
              Our Local SEO Approach
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Local Keyword Research</h3>
                  <p className="text-navy/70 dark:text-white/70">We identify high-value keywords that local customers use to find businesses like yours.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Google Business Profile Optimization</h3>
                  <p className="text-navy/70 dark:text-white/70">We optimize your profile with accurate information, engaging posts, and strategic keywords.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Local Content Strategy</h3>
                  <p className="text-navy/70 dark:text-white/70">We create location-specific content that resonates with your target audience and search engines.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Local Link Building</h3>
                  <p className="text-navy/70 dark:text-white/70">We secure high-quality backlinks from respected local websites to boost your domain authority.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Technical SEO Audit</h3>
                  <p className="text-navy/70 dark:text-white/70">Use our <Link to="/" className="text-teal hover:underline dark:text-teal-light">SEO Audit Tool</Link> to identify and fix issues affecting your local rankings.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start glass-card-hover p-4 rounded-xl">
                <div className="bg-teal/10 dark:bg-teal/20 p-3 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-teal dark:text-teal-light" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">Local Ranking Tracking</h3>
                  <p className="text-navy/70 dark:text-white/70">We monitor your local rankings and make data-driven optimizations to improve results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Theme Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4">
          <div className="bg-navy-light/70 backdrop-blur-sm border border-teal/20 rounded-xl p-8 md:p-12 mb-16 glass-card">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Local SEO Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">46% of All Google Searches</h3>
                <p className="text-white/70">
                  Almost half of all Google searches have local intent, with users looking for nearby businesses.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">88% Visit or Call</h3>
                <p className="text-white/70">
                  88% of consumers who do a local search on their smartphone visit or call a store within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Local Pack Dominance</h3>
                <p className="text-white/70">
                  The top 3 local results (the "Local Pack") receive 60% of all local search traffic.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Dominate Local Search?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free SEO audit to discover how we can help your business attract more local customers.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSeo;
