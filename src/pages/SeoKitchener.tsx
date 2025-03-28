
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket } from 'lucide-react';

const SeoKitchener = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Kitchener-Waterloo SEO Services | Local SEO Agency | SEO Audit Tool</title>
        <meta name="description" content="Expert Kitchener-Waterloo SEO services to boost your business in local search. Our specialized strategies help KW businesses increase visibility and customers." />
        <meta name="keywords" content="Kitchener SEO, Waterloo SEO, Kitchener-Waterloo SEO, KW SEO services, local SEO Kitchener, SEO company Waterloo" />
        
        <meta property="og:title" content="Kitchener-Waterloo SEO Services | Local SEO Agency | SEO Audit Tool" />
        <meta property="og:description" content="Expert Kitchener-Waterloo SEO services to boost your business in local search. Our specialized strategies help KW businesses increase visibility and customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/kitchener-seo-services.jpg" />
        
        <meta name="twitter:title" content="Kitchener-Waterloo SEO Services | Local SEO Agency | SEO Audit Tool" />
        <meta name="twitter:description" content="Expert Kitchener-Waterloo SEO services to boost your business in local search. Our specialized strategies help KW businesses increase visibility and customers." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for Kitchener SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - Kitchener-Waterloo SEO Services",
            "description": "Professional SEO services for Kitchener-Waterloo businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/kitchener-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-519-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "305 King Street West",
              "addressLocality": "Kitchener",
              "addressRegion": "ON",
              "postalCode": "N2G 1B9",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.4516,
              "longitude": -80.4925
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/seoaudittool",
              "https://twitter.com/seoaudittool",
              "https://www.linkedin.com/company/seoaudittool"
            ]
          })}
        </script>
      </Helmet>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-teal mr-2" />
              <span className="text-teal font-medium">Kitchener-Waterloo, Ontario</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kitchener-Waterloo SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Tailored SEO strategies for businesses in the Kitchener-Waterloo tech corridor
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our KW SEO Analyzer
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get KW SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Industry SEO</h3>
              <p className="text-white/70">
                Specialized SEO strategies for tech startups and established companies in Kitchener-Waterloo's technology hub.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local KW SEO</h3>
              <p className="text-white/70">
                Targeted strategies to help your business rank higher in Kitchener-Waterloo local search results and Google Maps.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">University Market SEO</h3>
              <p className="text-white/70">
                Strategic optimization to reach the university student and faculty market in the Waterloo region.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Our Kitchener-Waterloo SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">KW Market Expertise</h3>
                    <p className="text-white/70">Our in-depth knowledge of the Kitchener-Waterloo market allows us to create hyper-relevant local SEO strategies.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tech-Focused SEO</h3>
                    <p className="text-white/70">We understand the unique SEO challenges and opportunities for tech businesses in the Kitchener-Waterloo innovation ecosystem.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Approach</h3>
                    <p className="text-white/70">Our KW SEO strategies are built on comprehensive data analysis and continuous performance monitoring.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multi-Location Strategies</h3>
                    <p className="text-white/70">We develop effective SEO strategies for businesses serving both Kitchener and Waterloo with multiple locations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Link Building</h3>
                    <p className="text-white/70">We secure valuable backlinks from respected Kitchener-Waterloo websites and organizations to boost your local authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Reporting</h3>
                    <p className="text-white/70">We provide clear, detailed reports that show exactly how our KW SEO services are impacting your business growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Grow Your Kitchener-Waterloo Business?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Kitchener-Waterloo focused SEO audit to discover how we can help your business thrive in local search.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free KW SEO Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoKitchener;
