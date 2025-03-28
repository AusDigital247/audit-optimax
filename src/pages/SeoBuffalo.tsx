
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket } from 'lucide-react';

const SeoBuffalo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool</title>
        <meta name="description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth." />
        <meta name="keywords" content="Buffalo SEO, Buffalo NY SEO, Buffalo SEO company, local SEO Buffalo, Buffalo SEO experts, Buffalo NY SEO agency" />
        
        <meta property="og:title" content="Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta property="og:description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/buffalo-seo-services.jpg" />
        
        <meta name="twitter:title" content="Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta name="twitter:description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for Buffalo SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - Buffalo SEO Services",
            "description": "Professional SEO services for Buffalo businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/buffalo-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-716-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "50 Fountain Plaza",
              "addressLocality": "Buffalo",
              "addressRegion": "NY",
              "postalCode": "14202",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.8864,
              "longitude": -78.8784
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
              <span className="text-teal font-medium">Buffalo, New York</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Buffalo SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Results-driven SEO strategies for Buffalo businesses looking to grow online
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our Buffalo SEO Checker
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get Buffalo SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Buffalo Local SEO</h3>
              <p className="text-white/70">
                Custom strategies to boost your visibility in Buffalo local search results and attract nearby customers.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Buffalo Business Citations</h3>
              <p className="text-white/70">
                Strategic business listings and citations on Buffalo-specific directories to build your local authority.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Competitive Analysis</h3>
              <p className="text-white/70">
                Thorough analysis of your Buffalo competitors to identify opportunities and develop winning strategies.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Buffalo SEO Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Buffalo Market Knowledge</h3>
                    <p className="text-white/70">We understand the unique Buffalo business landscape and create strategies tailored to the local market dynamics.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Neighborhood-Specific SEO</h3>
                    <p className="text-white/70">We implement targeted strategies for different Buffalo neighborhoods like Elmwood Village, Allentown, North Buffalo, and more.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Review Management</h3>
                    <p className="text-white/70">We help you generate and manage positive customer reviews to boost your local rankings and reputation.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Buffalo Link Building</h3>
                    <p className="text-white/70">We secure valuable backlinks from respected Buffalo websites and organizations to enhance your local authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Google Business Profile Optimization</h3>
                    <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in local map results across Buffalo.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Content Strategy</h3>
                    <p className="text-white/70">We create Buffalo-focused content that resonates with local audiences and improves your search visibility.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Grow Your Buffalo Business Online</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Buffalo-focused SEO audit to discover how our specialized strategies can help your business dominate local search.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free Buffalo SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoBuffalo;
