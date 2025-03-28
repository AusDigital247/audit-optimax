
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket, Network, Globe, Star, BarChart3, BriefcaseBusiness, TrendingUp, Award, Briefcase, Languages, Mountain } from 'lucide-react';

const SeoVancouver = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Vancouver SEO Services | Local SEO Experts | SEO Audit Tool</title>
        <meta name="description" content="Premium Vancouver SEO services to boost your business in local search. Our Vancouver-based specialists deliver tailored strategies that increase visibility and drive growth." />
        <meta name="keywords" content="Vancouver SEO, Vancouver SEO services, Vancouver SEO company, local SEO Vancouver, Vancouver SEO experts, SEO agency Vancouver, BC SEO, Greater Vancouver SEO" />
        
        <meta property="og:title" content="Vancouver SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta property="og:description" content="Premium Vancouver SEO services to boost your business in local search. Our Vancouver-based specialists deliver tailored strategies that increase visibility and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/vancouver-seo-services.jpg" />
        
        <meta name="twitter:title" content="Vancouver SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta name="twitter:description" content="Premium Vancouver SEO services to boost your business in local search. Our Vancouver-based specialists deliver tailored strategies that increase visibility and drive growth." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for Vancouver SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - Vancouver SEO Services",
            "description": "Professional SEO services for Vancouver businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/vancouver-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-604-555-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1055 West Georgia Street",
              "addressLocality": "Vancouver",
              "addressRegion": "BC",
              "postalCode": "V6E 3P3",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.2827,
              "longitude": -123.1207
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
              <span className="text-teal font-medium">Vancouver, British Columbia</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vancouver SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Premium SEO strategies for businesses in Canada's West Coast innovation hub
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our Vancouver SEO Analyzer
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get Vancouver SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local Vancouver SEO</h3>
              <p className="text-white/70">
                Targeted strategies to boost your visibility in Vancouver local search results, Google Maps, and neighborhood-specific searches.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Languages className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multilingual SEO</h3>
              <p className="text-white/70">
                Specialized optimization for Vancouver's diverse multilingual market, including Chinese, Punjabi, and other language communities.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech & Startup SEO</h3>
              <p className="text-white/70">
                Strategic optimization for Vancouver's booming tech sector, startups, and innovation-focused businesses.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Vancouver SEO: Digital Marketing in Canada's Pacific Gateway</h2>
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-4">
                Vancouver's unique position as Canada's gateway to the Pacific creates a dynamic and competitive business environment unlike any other in North America. This thriving coastal metropolis combines global connectivity, technological innovation, and unparalleled cultural diversity, resulting in a complex digital marketplace that demands specialized SEO approaches.
              </p>
              <p className="text-white/85 text-lg mb-4">
                Our Vancouver SEO services are specifically tailored to navigate this distinctive landscape. We understand the unique challenges of ranking in Vancouver's competitive search environment, from addressing multilingual search patterns to targeting hyper-local neighborhoods to optimizing for the city's key industry sectors.
              </p>
              <p className="text-white/85 text-lg">
                Whether you're a tech startup in Yaletown, a retail business on Robson Street, a restaurant in Gastown, or a service provider in Kitsilano, our customized SEO strategies will help you connect with more customers and grow your business across Metro Vancouver and beyond.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1519499420267-3adc3c4df178?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Vancouver skyline with mountains" 
                className="rounded-xl h-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Vancouver Businesses Need Specialized SEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Extreme competition:</span> Vancouver's dense business concentration and high digital adoption create one of Canada's most competitive search landscapes.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Multicultural market:</span> With over 40% of residents speaking a language other than English at home, multilingual SEO is essential for reaching Vancouver's diverse population.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Geographic specificity:</span> Vancouver's distinct neighborhoods and surrounding municipalities each have unique search patterns requiring targeted approaches.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Industry specialization:</span> Vancouver's leading sectors—tech, film, tourism, and real estate—each require industry-specific SEO strategies to succeed.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Tourist-local balance:</span> Vancouver businesses must balance SEO strategies to capture both local residents and the city's substantial tourist market.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Vancouver SEO Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <MapPin className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Vancouver Local SEO</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive local search optimization to ensure your business appears prominently when Vancouver residents and visitors search for your services:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Google Business Profile optimization with Vancouver-specific keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local citation building across Greater Vancouver business directories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Neighborhood-specific landing pages for businesses serving multiple Vancouver areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Metro Vancouver structured data implementation for enhanced local visibility</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Languages className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Multilingual Vancouver SEO</h3>
                  <p className="text-white/80 mb-4">
                    Specialized optimization strategies to reach Vancouver's diverse multicultural communities:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Chinese (Mandarin/Cantonese) SEO targeting Richmond and Vancouver's Chinese communities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Punjabi/Hindi optimization for Surrey and the South Asian market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Multilingual content strategies with cultural relevance and proper localization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">International SEO connecting Vancouver businesses to Asian markets</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Building className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tech & Startup SEO</h3>
                  <p className="text-white/80 mb-4">
                    Specialized strategies for Vancouver's thriving technology and startup ecosystem:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Technical SEO optimizations for sophisticated tech audiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Content strategies targeting Vancouver's tech investors and talent pool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Industry-specific keyword research for Vancouver's tech niches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Link building with Vancouver tech publications and innovation hubs</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Mountain className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tourism & Hospitality SEO</h3>
                  <p className="text-white/80 mb-4">
                    Targeted strategies for Vancouver's thriving tourism and hospitality businesses:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">International tourism keyword targeting for major visitor markets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content strategies aligned with Vancouver's tourism patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Experience-focused content optimization for adventure and cultural tourism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Tourism directory and partnership link building strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Network className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Vancouver Link Building</h3>
                  <p className="text-white/80 mb-4">
                    Strategic acquisition of high-quality backlinks from respected Vancouver websites:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Partnerships with Vancouver blogs, news sites, and business organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Community involvement and local sponsorship link acquisition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Vancouver Board of Trade and industry association outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Geo-targeted guest posting on relevant Vancouver platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Globe className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Vancouver Content Strategy</h3>
                  <p className="text-white/80 mb-4">
                    Creation of engaging, locally-relevant content that resonates with Vancouver audiences:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Vancouver neighborhood guides relevant to your industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local case studies featuring Vancouver success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Blog content addressing Vancouver-specific challenges and opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content calendars aligned with Vancouver's events and weather patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Vancouver SEO: Neighborhood Targeting Strategies</h2>
            
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-6">
                Vancouver's diverse neighborhoods and surrounding municipalities each have unique characteristics that affect local search behavior. Our area-specific SEO strategies help you target the right customers across Metro Vancouver:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Downtown Vancouver & Central Business District</h4>
                  <p className="text-white/70">
                    Strategies targeting office workers, urban residents, and tourists with emphasis on mobile search optimization and convenience.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Yaletown & Coal Harbour</h4>
                  <p className="text-white/70">
                    Premium-focused SEO targeting these upscale areas, with emphasis on luxury experiences, high-end services, and professional audiences.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Gastown & Railtown</h4>
                  <p className="text-white/70">
                    Strategies for these trendy, tourist-frequented areas focusing on unique experiences, design-driven businesses, and creative industries.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Kitsilano & Point Grey</h4>
                  <p className="text-white/70">
                    Lifestyle-oriented SEO for these beachside neighborhoods, targeting active, health-conscious residents and UBC community members.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">East Vancouver & Commercial Drive</h4>
                  <p className="text-white/70">
                    Community-focused approaches for these diverse areas, highlighting local authenticity, cultural diversity, and independent businesses.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Richmond</h4>
                  <p className="text-white/70">
                    Multilingual SEO strategies with strong Chinese-language components for Richmond's substantial Asian population and business community.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Surrey & Fraser Valley</h4>
                  <p className="text-white/70">
                    Fast-growing suburban targeting with multilingual components for South Asian communities and family-oriented content.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">North Vancouver & West Vancouver</h4>
                  <p className="text-white/70">
                    Targeted strategies for the North Shore's affluent communities, with emphasis on outdoor lifestyle, premium services, and family focus.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Burnaby & New Westminster</h4>
                  <p className="text-white/70">
                    Balanced approaches for these diverse suburban communities, targeting growing populations of young professionals and families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Vancouver SEO Case Studies</h2>
            
            <div className="grid grid-cols-1 gap-12 mb-12">
              {/* Case Study 1 */}
              <div className="bg-navy-light p-8 rounded-xl border border-teal/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-teal/20 p-4 rounded-xl mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-teal" />
                        Yaletown Tech Startup
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">215% Increase in Lead Generation</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Person using laptop in modern office" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A SaaS startup in Vancouver's Yaletown district had developed an innovative product but struggled with organic visibility in a highly competitive market. Despite significant investment in paid advertising, they weren't generating sufficient qualified leads through organic search.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We implemented a comprehensive tech-focused SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Technical SEO audit addressing critical site speed, mobile optimization, and crawlability issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Vancouver tech ecosystem keyword research and competitive gap analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Content strategy targeting the specific pain points of Vancouver enterprises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Link building with Vancouver tech publications, startup blogs, and local business resources</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">215%</div>
                        <p className="text-white/80 text-sm">Increase in qualified leads</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">187%</div>
                        <p className="text-white/80 text-sm">Growth in organic traffic</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">74%</div>
                        <p className="text-white/80 text-sm">Decrease in customer acquisition cost</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="bg-navy-light p-8 rounded-xl border border-teal/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-teal/20 p-4 rounded-xl mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-teal" />
                        Richmond Multi-Location Restaurant
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">243% Increase in Online Orders</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Asian restaurant interior" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A Chinese restaurant chain with locations in Richmond and Vancouver struggled with online visibility in the competitive Asian food market. They needed to reach both English and Chinese-speaking customers but lacked the digital strategy to effectively target this bilingual audience.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We developed a multilingual local SEO approach including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Bilingual website optimization with proper hreflang implementation and culturally appropriate content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Chinese-language keyword research targeting both simplified and traditional character searches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Location-specific Google Business Profile optimization in both English and Chinese</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Citation building on both mainstream Vancouver directories and Chinese-language platforms</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">243%</div>
                        <p className="text-white/80 text-sm">Increase in online orders</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">325%</div>
                        <p className="text-white/80 text-sm">Growth in Chinese-language traffic</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">#1</div>
                        <p className="text-white/80 text-sm">For key Chinese cuisine search terms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="bg-navy-light p-8 rounded-xl border border-teal/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-teal/20 p-4 rounded-xl mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-teal" />
                        North Vancouver Adventure Tourism
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">176% Increase in Bookings</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Mountain hiking adventure" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      An adventure tourism company in North Vancouver offered unique outdoor experiences but struggled to attract both local and international visitors through search. They faced high competition from established tour companies and lacked visibility during critical tourism seasons.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We created a tourism-focused SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">International tourism keyword targeting for major visitor markets (US, UK, Australia, China)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Seasonal content calendar aligned with Vancouver tourism patterns and booking windows</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Experience-focused content strategy with rich media optimization and schema markup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Local partnership and tourism directory link building strategy</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">176%</div>
                        <p className="text-white/80 text-sm">Increase in online bookings</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">243%</div>
                        <p className="text-white/80 text-sm">Growth in international traffic</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">94%</div>
                        <p className="text-white/80 text-sm">Longer average visit duration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Vancouver SEO Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Vancouver Market Knowledge</h3>
                    <p className="text-white/70">Our deep understanding of Vancouver's unique business landscape enables us to create highly effective local SEO strategies tailored to the city's distinct neighborhoods, cultural diversity, and economic sectors.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Multilingual SEO Expertise</h3>
                    <p className="text-white/70">We develop specialized multilingual SEO strategies to help you reach Vancouver's diverse population in their preferred languages, with particular focus on Chinese, Punjabi, and other key language communities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tech Sector Specialization</h3>
                    <p className="text-white/70">We understand the unique SEO challenges of Vancouver's thriving technology ecosystem, from startups to established firms, and create strategies that resonate with the city's tech-savvy audience.</p>
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
                    <p className="text-white/70">We implement hyper-local strategies targeting specific Vancouver areas from Downtown to Richmond to Surrey, ensuring you connect with the most relevant customers in your service area.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tourism & International Focus</h3>
                    <p className="text-white/70">We help Vancouver businesses capture both the local market and the city's substantial tourism sector with strategies that address international search patterns and seasonal visitor trends.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Metro Vancouver Approach</h3>
                    <p className="text-white/70">We develop comprehensive strategies that recognize the interconnected nature of Metro Vancouver, helping businesses effectively target customers across municipal boundaries and throughout the region.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Vancouver SEO Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">94%</h3>
                <p className="text-white/70">
                  Of our Vancouver clients see ranking improvements within the first 90 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">138%</h3>
                <p className="text-white/70">
                  Average increase in organic traffic for Vancouver businesses after 6 months
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">12+</h3>
                <p className="text-white/70">
                  Years of experience optimizing websites for Vancouver's diverse market
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Dominate Vancouver Search Results?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Vancouver-focused SEO audit to discover how our specialized strategies can help your business thrive in the competitive Pacific Northwest market.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free Vancouver SEO Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoVancouver;
