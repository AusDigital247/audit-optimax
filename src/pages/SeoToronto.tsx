
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, BarChart3, Rocket, Building2, Network, Globe, Star, BriefcaseBusiness, TrendingUp } from 'lucide-react';

const SeoToronto = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Toronto SEO Services | Local SEO Experts Toronto | SEO Audit Tool</title>
        <meta name="description" content="Expert Toronto SEO services that drive results. Our Toronto-based SEO specialists create customized strategies to boost rankings, traffic & conversions. Free analysis!" />
        <meta name="keywords" content="Toronto SEO, Toronto SEO services, Toronto SEO company, local SEO Toronto, Toronto SEO experts, SEO agency Toronto, Toronto SEO consultant, best SEO Toronto, GTA SEO, Toronto digital marketing" />
        
        <meta property="og:title" content="Toronto SEO Services | Local SEO Experts Toronto | SEO Audit Tool" />
        <meta property="og:description" content="Expert Toronto SEO services that drive results. Our Toronto-based SEO specialists create customized strategies to boost rankings, traffic & conversions. Free analysis!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/toronto-seo-services.jpg" />
        
        <meta name="twitter:title" content="Toronto SEO Services | Local SEO Experts Toronto | SEO Audit Tool" />
        <meta name="twitter:description" content="Expert Toronto SEO services that drive results. Our Toronto-based SEO specialists create customized strategies to boost rankings, traffic & conversions. Free analysis!" />
        
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

      <section className="py-16 md:py-24 w-full">
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Toronto SEO: Your Path to Local Business Growth</h2>
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-4">
                In Toronto's competitive business landscape, having a strong online presence isn't just an option – it's essential for success. The Greater Toronto Area (GTA) represents one of Canada's most diverse and dynamic markets, with millions of potential customers searching online every day for products and services like yours.
              </p>
              <p className="text-white/85 text-lg mb-4">
                Our Toronto SEO services are designed specifically for businesses looking to capture this local market. We understand the unique challenges and opportunities that come with ranking in Toronto's competitive search landscape, from navigating neighborhood-specific search trends to outperforming the city's established business competitors.
              </p>
              <p className="text-white/85 text-lg">
                Whether you're a small business in Leslieville, a growing company in North York, or an established enterprise in downtown Toronto, our tailored SEO strategies will help you connect with more customers and grow your business in the GTA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Toronto skyline with CN Tower" 
                className="rounded-xl h-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Toronto Businesses Need Specialized SEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Hyper-competitive market:</span> Toronto has one of the highest business densities in Canada, making targeted SEO essential to stand out.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Diverse customer base:</span> With over 180 languages spoken, Toronto's multicultural landscape requires nuanced, culturally-aware SEO strategies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Neighborhood-specific searches:</span> From The Beaches to Etobicoke, Toronto consumers often search with neighborhood specificity.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Local search dominance:</span> 46% of all Google searches have local intent, with "near me" searches growing 900% in recent years.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Mobile-first city:</span> Toronto has one of Canada's highest smartphone penetration rates, making mobile SEO crucial.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our Toronto SEO Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <Building2 className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Local SEO</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive local search optimization to ensure your business appears prominently when Toronto customers search for your services:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Google Business Profile optimization with Toronto-specific keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local citation building across Toronto business directories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Neighborhood-specific landing pages for multi-location businesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">GTA-focused structured data implementation</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Link Building</h3>
                  <p className="text-white/80 mb-4">
                    Strategic acquisition of high-quality backlinks from respected Toronto websites to boost your local authority:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Partnerships with Toronto blogs, news sites, and business organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local event sponsorships and community involvement strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Toronto Chamber of Commerce and industry association outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Geo-targeted guest posting on relevant Toronto platforms</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Content Strategy</h3>
                  <p className="text-white/80 mb-4">
                    Creation of engaging, locally-relevant content that resonates with Toronto audiences and search engines:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Toronto neighborhood guides relevant to your industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local case studies featuring Toronto success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Blog content addressing Toronto-specific challenges and opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content calendars tailored to Toronto events and trends</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Review Management</h3>
                  <p className="text-white/80 mb-4">
                    Strategic approach to generating and managing customer reviews to boost local rankings and reputation:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Review generation campaigns for Toronto customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Monitoring and responding to reviews across Google, Yelp, and Toronto platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Review schema implementation for enhanced search visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Reputation management strategies for Toronto businesses</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <BriefcaseBusiness className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Competitor Analysis</h3>
                  <p className="text-white/80 mb-4">
                    Thorough examination of your Toronto competitors to identify opportunities and develop winning strategies:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Detailed analysis of top-ranking Toronto businesses in your niche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Competitor backlink profile analysis and gap identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local content strategy comparison and opportunity mapping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">GTA market positioning and differentiation strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <TrendingUp className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Toronto Analytics & Reporting</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive tracking and analysis of your Toronto SEO performance with clear, actionable reporting:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Toronto-specific keyword ranking tracking and analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local search visibility reports for Toronto and surrounding areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Google Business Profile insights and performance metrics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Monthly strategy adjustments based on Toronto market trends</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Toronto SEO: Neighborhood Targeting Strategies</h2>
            
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-6">
                Toronto's diverse neighborhoods each represent unique markets with their own search behaviors and customer preferences. Our neighborhood-specific SEO strategies help you capture these micro-markets effectively:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Downtown Toronto & Financial District</h4>
                  <p className="text-white/70">
                    Strategies targeting professionals, tourists, and high-density residential areas with emphasis on mobile search optimization.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Yorkville & Bloor Street</h4>
                  <p className="text-white/70">
                    Luxury-focused SEO strategies targeting affluent customers with premium service expectations and brand awareness.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Liberty Village & King West</h4>
                  <p className="text-white/70">
                    Targeting young professionals and creatives with tech-savvy content and innovative service positioning.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">North York & Willowdale</h4>
                  <p className="text-white/70">
                    Multicultural SEO approaches with multilingual content options and culturally relevant keyword targeting.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Scarborough</h4>
                  <p className="text-white/70">
                    Community-focused SEO strategies highlighting accessibility, value, and service diversity for this growing area.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Etobicoke & Mississauga Border</h4>
                  <p className="text-white/70">
                    Cross-border strategies to capture the western GTA market with business and family-oriented positioning.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">The Beaches & Leslieville</h4>
                  <p className="text-white/70">
                    Local-focused strategies emphasizing community connections and neighborhood-specific services and values.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Yonge & Eglinton</h4>
                  <p className="text-white/70">
                    Targeting the midtown professional demographic with convenience-focused messaging and upscale service positioning.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">High Park & Junction</h4>
                  <p className="text-white/70">
                    Family and lifestyle-oriented SEO strategies with emphasis on community values and sustainable business practices.
                  </p>
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-8">Why Choose Our Toronto SEO Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Toronto Market Expertise</h3>
                    <p className="text-white/70">We understand the unique challenges and opportunities in the Toronto market, allowing us to create highly effective local SEO strategies tailored to the GTA's diverse neighborhoods and business districts.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Neighborhood-Specific Targeting</h3>
                    <p className="text-white/70">We optimize for specific Toronto neighborhoods and surrounding GTA areas to capture highly relevant local traffic, from Scarborough to Etobicoke and everything in between.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Strategy Development</h3>
                    <p className="text-white/70">We create fully customized Toronto SEO strategies based on your specific business goals, target audience, and competitive landscape within the Greater Toronto Area.</p>
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
                    <p className="text-white/70">We offer specialized multilingual SEO services to help you reach Toronto's diverse population in their preferred languages, ensuring you connect with the city's multicultural communities.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Link Building</h3>
                    <p className="text-white/70">We secure high-quality backlinks from respected Toronto websites and directories to boost your local authority, including partnerships with Toronto-based businesses, media outlets, and community organizations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Transparent Reporting</h3>
                    <p className="text-white/70">Receive clear, jargon-free reports that show exactly how our Toronto SEO services are impacting your business growth, with metrics focused on local visibility, traffic, and conversions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Dominate Toronto Search Results?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free Toronto-focused SEO audit to discover how we can help your business attract more local customers from across the Greater Toronto Area.
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
