
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, BarChart3, Rocket } from 'lucide-react';

const SeoToronto = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Toronto SEO Services | Local SEO Experts | SEO Audit Tool</title>
        <meta name="description" content="Professional Toronto SEO services to help local businesses rank higher in Google. Our Toronto SEO experts deliver customized strategies for measurable results." />
        <meta name="keywords" content="Toronto SEO, Toronto SEO services, Toronto SEO company, local SEO Toronto, Toronto SEO experts, SEO agency Toronto" />
        
        <meta property="og:title" content="Toronto SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta property="og:description" content="Professional Toronto SEO services to help local businesses rank higher in Google. Our Toronto SEO experts deliver customized strategies for measurable results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/toronto-seo-services.jpg" />
        
        <meta name="twitter:title" content="Toronto SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta name="twitter:description" content="Professional Toronto SEO services to help local businesses rank higher in Google. Our Toronto SEO experts deliver customized strategies for measurable results." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for Toronto SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - Toronto SEO Services",
            "description": "Professional SEO services for Toronto businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/toronto-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-416-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "100 King Street West",
              "addressLocality": "Toronto",
              "addressRegion": "ON",
              "postalCode": "M5X 1E2",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 43.6516,
              "longitude": -79.3826
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
              <span className="text-teal font-medium">Toronto, Ontario</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Toronto SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Specialized SEO strategies to help Toronto businesses dominate local search results
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our Toronto SEO Audit Tool
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get Toronto SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Toronto SEO</h3>
              <p className="text-white/70">
                Targeted strategies to help your business rank higher in Toronto local search results, Google Maps, and location-based searches.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Search className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Toronto-Focused Keywords</h3>
              <p className="text-white/70">
                In-depth research to identify the most valuable Toronto-specific keywords in your industry for maximum local visibility.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">GTA Market Analysis</h3>
              <p className="text-white/70">
                Comprehensive analysis of your Toronto competition to develop strategies that help you stand out in the local market.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose Our Toronto SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Toronto Market Expertise</h3>
                    <p className="text-white/70">We understand the unique challenges and opportunities in the Toronto market, allowing us to create highly effective local SEO strategies.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Neighborhood-Specific Targeting</h3>
                    <p className="text-white/70">We optimize for specific Toronto neighborhoods and surrounding GTA areas to capture highly relevant local traffic.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Strategy Development</h3>
                    <p className="text-white/70">We create fully customized Toronto SEO strategies based on your specific business goals, target audience, and competitive landscape.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multilingual SEO</h3>
                    <p className="text-white/70">We offer specialized multilingual SEO services to help you reach Toronto's diverse population in their preferred languages.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Link Building</h3>
                    <p className="text-white/70">We secure high-quality backlinks from respected Toronto websites and directories to boost your local authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Reporting</h3>
                    <p className="text-white/70">Receive clear, jargon-free reports that show exactly how our Toronto SEO services are impacting your business growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Toronto SEO Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">92%</h3>
                <p className="text-white/70">
                  Of our Toronto clients see significant ranking improvements within 90 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">76%</h3>
                <p className="text-white/70">
                  Average increase in local organic traffic for Toronto businesses after 6 months
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">15+</h3>
                <p className="text-white/70">
                  Years of experience optimizing websites for Toronto's competitive market
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Dominate Toronto Search Results?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Toronto-focused SEO audit to discover how we can help your business attract more local customers.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free Toronto SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoToronto;
