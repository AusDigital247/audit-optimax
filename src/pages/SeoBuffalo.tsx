
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket, Network, Globe, Star, BarChart3, BriefcaseBusiness, TrendingUp } from 'lucide-react';

const SeoBuffalo = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool</title>
        <meta name="description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth and increased revenue." />
        <meta name="keywords" content="Buffalo SEO, Buffalo NY SEO, Buffalo SEO company, local SEO Buffalo, Buffalo SEO experts, Buffalo NY SEO agency, Western New York SEO, WNY SEO services" />
        
        <meta property="og:title" content="Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta property="og:description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth and increased revenue." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/buffalo-seo-services.jpg" />
        
        <meta name="twitter:title" content="Buffalo NY SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta name="twitter:description" content="Professional Buffalo SEO services to help your business dominate local search. Our Buffalo NY SEO experts deliver proven strategies for sustainable growth and increased revenue." />
        
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

      <section className="py-16 md:py-24 w-full">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Buffalo SEO: Growing Your Business in Western New York</h2>
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-4">
                Buffalo's business landscape is experiencing a remarkable renaissance. As Western New York continues its economic revitalization, establishing a strong online presence has become essential for businesses looking to capitalize on this growth. Buffalo's digital marketplace is increasingly competitive, with consumers relying on search engines to find local products and services.
              </p>
              <p className="text-white/85 text-lg mb-4">
                Our Buffalo SEO services are specifically designed to help local businesses thrive in this evolving market. We understand Buffalo's unique economy, from the growing medical corridor and tech startups to traditional retail and service businesses across neighborhoods like Elmwood Village, Allentown, North Buffalo, and South Buffalo.
              </p>
              <p className="text-white/85 text-lg">
                Whether you're a new business in the Cobblestone District, an established company in Williamsville, or a service provider covering the entire Buffalo-Niagara region, our tailored SEO strategies will help you connect with more customers and grow your presence in Western New York.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1600041528629-0b15ef4bc9bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Buffalo skyline with city hall" 
                className="rounded-xl h-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Buffalo Businesses Need Specialized SEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Buffalo's growing digital market:</span> With increasing investment in the Buffalo-Niagara region, more businesses are competing for online visibility.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Strong local search intent:</span> Buffalo consumers strongly prefer local businesses, with 78% of local mobile searches resulting in offline purchases.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Cross-border opportunities:</span> Effective SEO helps capture potential customers from nearby Canadian markets, especially from the Greater Toronto Area.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Student population:</span> With multiple colleges and universities, Buffalo has a large student population that heavily relies on online search.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Seasonal search patterns:</span> Buffalo's distinct seasons create unique search patterns that require specialized SEO strategies throughout the year.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Buffalo SEO Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Building className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Buffalo Local SEO</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive local search optimization to ensure your business appears prominently when Buffalo residents search for your services:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Google Business Profile optimization with Buffalo-specific keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local citation building across Western New York directories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Neighborhood-specific landing pages for businesses serving multiple Buffalo areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Buffalo-focused structured data implementation</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Buffalo Link Building</h3>
                  <p className="text-white/80 mb-4">
                    Strategic acquisition of high-quality backlinks from respected Buffalo websites to boost your local authority:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Partnerships with Buffalo blogs, news sites, and business organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local event sponsorships and community involvement strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Buffalo Chamber of Commerce and industry association outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Geo-targeted guest posting on relevant Buffalo platforms</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Buffalo Content Strategy</h3>
                  <p className="text-white/80 mb-4">
                    Creation of engaging, locally-relevant content that resonates with Buffalo audiences and search engines:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Buffalo neighborhood guides relevant to your industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local case studies featuring Buffalo success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Blog content addressing Buffalo-specific challenges and opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content calendars tailored to Buffalo events and weather patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Star className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Buffalo Review Management</h3>
                  <p className="text-white/80 mb-4">
                    Strategic approach to generating and managing customer reviews to boost local rankings and reputation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Review generation campaigns for Buffalo customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Monitoring and responding to reviews across Google, Yelp, and Buffalo platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Review schema implementation for enhanced search visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Reputation management strategies for Buffalo businesses</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Buffalo SEO: Neighborhood Targeting Strategies</h2>
            
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-6">
                Buffalo's diverse neighborhoods each have unique characteristics that affect local search behavior. Our neighborhood-specific SEO strategies help you target the right customers in each area:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Downtown Buffalo</h4>
                  <p className="text-white/70">
                    Strategies targeting business professionals, government employees, and the growing residential population in the central business district.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Elmwood Village</h4>
                  <p className="text-white/70">
                    SEO tactics focused on this trendy, walkable neighborhood with emphasis on local shops, restaurants, and creative businesses.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Allentown</h4>
                  <p className="text-white/70">
                    Tailored approaches for this arts-focused district, emphasizing cultural events, gallery openings, and the restaurant scene.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">North Buffalo</h4>
                  <p className="text-white/70">
                    Strategies for this family-oriented area, targeting Hertel Avenue businesses and the surrounding residential neighborhoods.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">South Buffalo</h4>
                  <p className="text-white/70">
                    Community-focused SEO strategies with emphasis on local traditions, established businesses, and neighborhood loyalty.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Buffalo Medical Campus</h4>
                  <p className="text-white/70">
                    Specialized strategies for healthcare providers, medical services, and businesses supporting this growing innovation district.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Larkinville</h4>
                  <p className="text-white/70">
                    Targeted SEO for this revitalized warehouse district, now home to offices, restaurants, and events that draw visitors from across the region.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Suburban Towns</h4>
                  <p className="text-white/70">
                    Strategies for Amherst, Cheektowaga, Williamsville, and other surrounding towns that are integral to the Buffalo-Niagara market.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Waterfront/Canalside</h4>
                  <p className="text-white/70">
                    SEO focused on this growing entertainment and tourism district, with seasonal strategies for this highly trafficked area.
                  </p>
                </div>
              </div>
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
                    <p className="text-white/70">We understand the unique Buffalo business landscape and create strategies tailored to the local market dynamics, from seasonal trends to neighborhood-specific search patterns.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Neighborhood-Specific SEO</h3>
                    <p className="text-white/70">We implement targeted strategies for different Buffalo neighborhoods like Elmwood Village, Allentown, North Buffalo, and more to reach your ideal customers wherever they are in the city.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Review Management</h3>
                    <p className="text-white/70">We help you generate and manage positive customer reviews to boost your local rankings and reputation, essential in Buffalo's tight-knit community where recommendations matter.</p>
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
                    <p className="text-white/70">We secure valuable backlinks from respected Buffalo websites and organizations to enhance your local authority, including partnerships with Buffalo's growing business community.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Google Business Profile Optimization</h3>
                    <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in local map results across Buffalo, ensuring you appear prominently when nearby customers search.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Content Strategy</h3>
                    <p className="text-white/70">We create Buffalo-focused content that resonates with local audiences and improves your search visibility, addressing local events, seasonal topics, and community interests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Buffalo SEO Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">89%</h3>
                <p className="text-white/70">
                  Of our Buffalo clients see ranking improvements within the first 60 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">73%</h3>
                <p className="text-white/70">
                  Average increase in Google Business Profile views for Buffalo clients
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">10+</h3>
                <p className="text-white/70">
                  Years of experience optimizing websites for Western New York businesses
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Grow Your Buffalo Business Online</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Buffalo-focused SEO audit to discover how our specialized strategies can help your business dominate local search results across Western New York.
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
