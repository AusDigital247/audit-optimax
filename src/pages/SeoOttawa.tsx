
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket, Network, Globe, Star, BarChart3, BriefcaseBusiness, TrendingUp, Award, Briefcase } from 'lucide-react';

const SeoOttawa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>Ottawa SEO Services | Local SEO Specialists | SEO Audit Tool</title>
        <meta name="description" content="Specialized Ottawa SEO services to boost your local search rankings. Our Ottawa SEO experts help businesses increase visibility, traffic, and revenue." />
        <meta name="keywords" content="Ottawa SEO, Ottawa SEO services, Ottawa SEO company, local SEO Ottawa, Ottawa SEO experts, Ottawa SEO agency, Kanata SEO, Nepean SEO, Barrhaven SEO, Byward Market SEO" />
        
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

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">Ottawa SEO: Digital Marketing in Canada's Capital</h2>
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-4">
                Ottawa's unique business landscape presents both challenges and opportunities for digital marketing. As Canada's capital city, Ottawa combines government institutions, tech industries, and diverse local businesses, creating a multifaceted digital ecosystem that requires specialized SEO approaches.
              </p>
              <p className="text-white/85 text-lg mb-4">
                Our Ottawa SEO services address these unique aspects of the local market. We understand the dual-language requirements of businesses operating in a bilingual environment, the seasonality of Ottawa's tourism and event-driven economy, and the specific needs of businesses serving government clients or competing in Ottawa's growing technology sector.
              </p>
              <p className="text-white/85 text-lg">
                Whether you're a boutique shop in the ByWard Market, a tech startup in Kanata, or a service provider in Orleans, our tailored SEO strategies will help you increase your online visibility and connect with more customers across Ottawa and the National Capital Region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1503585413565-96278438d693?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Ottawa skyline with Parliament buildings" 
                className="rounded-xl h-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why Ottawa Businesses Need Specialized SEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Bilingual market requirements:</span> Ottawa's status as a bilingual city requires SEO strategies that effectively target both English and French search queries.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Government-centric ecosystem:</span> The significant presence of federal institutions creates unique search patterns and business opportunities requiring specialized keyword strategies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Tech industry competition:</span> Ottawa's growing technology sector in areas like Kanata creates highly competitive search landscapes that require advanced SEO tactics.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Distinct neighborhoods:</span> Ottawa's diverse neighborhoods, from the ByWard Market to Westboro to Barrhaven, each have unique search patterns requiring geo-targeted approaches.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Seasonal search fluctuations:</span> Ottawa's distinct seasons and major events like Winterlude and the Tulip Festival create predictable search pattern shifts requiring seasonal SEO strategies.
                    </p>
                  </li>
                </ul>
              </div>
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
                    <p className="text-white/70">Our deep understanding of Ottawa's unique market landscape enables us to create highly effective local SEO strategies that reach your target customers across the National Capital Region.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bilingual Content Optimization</h3>
                    <p className="text-white/70">We create and optimize content in both English and French to maximize your reach in Ottawa's bilingual marketplace, ensuring you don't miss valuable traffic from either language demographic.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Business Citations</h3>
                    <p className="text-white/70">We build and optimize your presence on Ottawa-specific directories and platforms that matter to local customers, from OttawaLife to Ottawa Tourism and local Chamber of Commerce listings.</p>
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
                    <p className="text-white/70">We implement hyper-local strategies targeting specific Ottawa neighborhoods like Westboro, ByWard Market, Glebe, Kanata, Orleans, and more to connect you with customers in your immediate area.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ottawa-Focused Link Building</h3>
                    <p className="text-white/70">We secure quality backlinks from respected Ottawa websites and organizations to boost your local authority, including media outlets like the Ottawa Citizen and Ottawa Business Journal.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Seasonal Strategy Adaptation</h3>
                    <p className="text-white/70">We adjust your SEO strategy to capitalize on Ottawa's seasonal events and tourism patterns throughout the year, from Winterlude to the Canadian Tulip Festival to summer activities along the Rideau Canal.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Ottawa SEO: Neighborhood Targeting Strategies</h2>
            
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-6">
                Ottawa's diverse neighborhoods each have unique characteristics that affect local search behavior. Our neighborhood-specific SEO strategies help you target the right customers in each area:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Downtown Ottawa & ByWard Market</h4>
                  <p className="text-white/70">
                    Strategies targeting tourists, government employees, and the urban professional demographic with emphasis on mobile search optimization.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Kanata & West End</h4>
                  <p className="text-white/70">
                    Tech-focused SEO approaches for Ottawa's technology hub, targeting professionals in the Kanata North Business Park and surrounding residential areas.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">The Glebe & Old Ottawa South</h4>
                  <p className="text-white/70">
                    Community-centered strategies for these established neighborhoods, emphasizing local shopping, dining, and family-friendly services.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Orleans & East End</h4>
                  <p className="text-white/70">
                    Bilingual SEO strategies with strong French-language components for Ottawa's eastern suburbs with their significant francophone populations.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Westboro & Wellington West</h4>
                  <p className="text-white/70">
                    Trendy, upscale targeting for these fashionable neighborhoods with emphasis on boutique shopping, fitness, and lifestyle businesses.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Barrhaven & Nepean</h4>
                  <p className="text-white/70">
                    Family-focused strategies for these fast-growing suburban areas, targeting new homeowners and family services.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Centretown & Golden Triangle</h4>
                  <p className="text-white/70">
                    Urban professional targeting for this core area, with emphasis on dining, entertainment, and service-based businesses.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Hintonburg & Wellington Village</h4>
                  <p className="text-white/70">
                    Artsy, creative content approaches for these gentrifying neighborhoods with their focus on independent businesses and creative services.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Gatineau & Hull</h4>
                  <p className="text-white/70">
                    Cross-river strategies that target the Quebec side of the National Capital Region with strong French-language components.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Ottawa SEO Case Studies</h2>
            
            <div className="grid grid-cols-1 gap-12 mb-12">
              {/* Case Study 1 */}
              <div className="bg-navy-light p-8 rounded-xl border border-teal/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-teal/20 p-4 rounded-xl mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-teal" />
                        Kanata Tech Startup
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">83% Increase in Organic Traffic</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Software developer at computer" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A B2B SaaS startup in Kanata's tech corridor struggled to stand out in Ottawa's competitive technology landscape. Despite an innovative product, they ranked poorly for key search terms and attracted minimal organic traffic, leading to high customer acquisition costs through paid channels.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We implemented a comprehensive SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Technical SEO audit addressing critical site speed and crawlability issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Keyword research focused on Ottawa tech sector terminology and pain points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Development of educational content targeting Ottawa tech decision-makers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Local link building with Ottawa tech publications and business organizations</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">83%</div>
                        <p className="text-white/80 text-sm">Increase in organic traffic</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">42%</div>
                        <p className="text-white/80 text-sm">Reduction in cost per lead</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">Top 3</div>
                        <p className="text-white/80 text-sm">Rankings for key industry terms</p>
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
                        ByWard Market Restaurant
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">156% Increase in Reservations</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Restaurant interior" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      An upscale restaurant in Ottawa's ByWard Market struggled with visibility in local search results, particularly for "Ottawa dining" and related terms. Despite excellent reviews, they weren't capturing tourist traffic or appearing in "near me" searches by locals and government district employees.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We developed a local SEO campaign focusing on:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Comprehensive Google Business Profile optimization with Ottawa-specific keywords</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Bilingual content strategy targeting both English and French-speaking diners</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Review generation campaign boosting ratings across Google, Yelp, and TripAdvisor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Local citation building across Ottawa tourism and dining platforms</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">156%</div>
                        <p className="text-white/80 text-sm">Increase in online reservations</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">212%</div>
                        <p className="text-white/80 text-sm">More website visits from local searches</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">#1</div>
                        <p className="text-white/80 text-sm">For "fine dining Ottawa" queries</p>
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
                        Orleans Home Services
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">94% Increase in Local Leads</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Home renovation work" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A home renovation company in Orleans struggled to expand beyond word-of-mouth referrals. They faced stiff competition from larger Ottawa contractors and weren't effectively targeting the growing eastern suburbs despite offering bilingual services.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We created a hyper-local SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Neighborhood-specific landing pages targeting Orleans, Blackburn Hamlet, and other East End areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Bilingual content strategy optimized for French-language searches common in East Ottawa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Seasonal content focused on Ottawa's extreme weather-related home issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Local sponsorships and community involvement generating authoritative backlinks</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">94%</div>
                        <p className="text-white/80 text-sm">More leads from local searches</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">127%</div>
                        <p className="text-white/80 text-sm">Increase in French-language traffic</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">43%</div>
                        <p className="text-white/80 text-sm">Reduction in cost per acquisition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Ottawa SEO Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">89%</h3>
                <p className="text-white/70">
                  Of our Ottawa clients see ranking improvements within the first 60 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">73%</h3>
                <p className="text-white/70">
                  Average increase in Google Business Profile views for Ottawa clients
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">12+</h3>
                <p className="text-white/70">
                  Years of experience optimizing websites for Ottawa businesses
                </p>
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
