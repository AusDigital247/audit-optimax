
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket } from 'lucide-react';

const SeoOttawa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Ottawa SEO Services | Local SEO Specialists | SEO Audit Tool</title>
        <meta name="description" content="Specialized Ottawa SEO services to boost your local search rankings. Our Ottawa SEO experts help businesses increase visibility, traffic, and revenue." />
        <meta name="keywords" content="Ottawa SEO, Ottawa SEO services, Ottawa SEO company, local SEO Ottawa, Ottawa SEO experts, Ottawa SEO agency" />
        
        <meta property="og:title" content="Ottawa SEO Services | Local SEO Specialists | SEO Audit Tool" />
        <meta property="og:description" content="Specialized Ottawa SEO services to boost your local search rankings. Our Ottawa SEO experts help businesses increase visibility, traffic, and revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/ottawa-seo-services.jpg" />
        
        <meta name="twitter:title" content="Ottawa SEO Services | Local SEO Specialists | SEO Audit Tool" />
        <meta name="twitter:description" content="Specialized Ottawa SEO services to boost your local search rankings. Our Ottawa SEO experts help businesses increase visibility, traffic, and revenue." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for Ottawa SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - Ottawa SEO Services",
            "description": "Professional SEO services for Ottawa businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/ottawa-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-613-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "150 Elgin Street",
              "addressLocality": "Ottawa",
              "addressRegion": "ON",
              "postalCode": "K2P 1L4",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 45.4215,
              "longitude": -75.6972
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
              <span className="text-teal font-medium">Ottawa, Ontario</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ottawa SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Customized SEO strategies to help Ottawa businesses stand out in local search
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our Ottawa SEO Audit Tool
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get Ottawa SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Ottawa SEO</h3>
              <p className="text-white/70">
                Specialized strategies to boost your visibility in Ottawa local search results, Google Maps, and neighborhood-specific searches.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Bilingual SEO</h3>
              <p className="text-white/70">
                Optimized bilingual content strategies to reach Ottawa's English and French-speaking audiences effectively.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Government Sector SEO</h3>
              <p className="text-white/70">
                Specialized SEO strategies for businesses targeting government contracts and the public sector in Ottawa.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Ottawa SEO Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ottawa Market Knowledge</h3>
                    <p className="text-white/70">Our deep understanding of Ottawa's unique market landscape enables us to create highly effective local SEO strategies.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bilingual Content Optimization</h3>
                    <p className="text-white/70">We create and optimize content in both English and French to maximize your reach in Ottawa's bilingual marketplace.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Business Citations</h3>
                    <p className="text-white/70">We build and optimize your presence on Ottawa-specific directories and platforms that matter to local customers.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Neighborhood Targeting</h3>
                    <p className="text-white/70">We implement hyper-local strategies targeting specific Ottawa neighborhoods like Westboro, ByWard Market, Glebe, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ottawa-Focused Link Building</h3>
                    <p className="text-white/70">We secure quality backlinks from respected Ottawa websites and organizations to boost your local authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Seasonal Strategy Adaptation</h3>
                    <p className="text-white/70">We adjust your SEO strategy to capitalize on Ottawa's seasonal events and tourism patterns throughout the year.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Boost Your Ottawa Business Visibility</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Ottawa-focused SEO audit to discover how our specialized strategies can help your business dominate local search results.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free Ottawa SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoOttawa;
