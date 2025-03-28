
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, MapPin, Users, CheckCircle2, Building, Rocket, Network, Globe, Star, BarChart3, BriefcaseBusiness, TrendingUp, Award, Briefcase, GraduationCap, CircleDollarSign } from 'lucide-react';

const SeoLondon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <Helmet>
        <title>London Ontario SEO Services | Local SEO Experts | SEO Audit Tool</title>
        <meta name="description" content="Professional London Ontario SEO services that drive results. Our London-based specialists create customized strategies to boost rankings, traffic & conversions." />
        <meta name="keywords" content="London Ontario SEO, London SEO services, London Ontario SEO company, local SEO London, London SEO experts, SEO agency London Ontario, Forest City SEO" />
        
        <meta property="og:title" content="London Ontario SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta property="og:description" content="Professional London Ontario SEO services that drive results. Our London-based specialists create customized strategies to boost rankings, traffic & conversions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/london-ontario-seo-services.jpg" />
        
        <meta name="twitter:title" content="London Ontario SEO Services | Local SEO Experts | SEO Audit Tool" />
        <meta name="twitter:description" content="Professional London Ontario SEO services that drive results. Our London-based specialists create customized strategies to boost rankings, traffic & conversions." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Local Business Schema for London SEO Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "SEO Audit Tool - London Ontario SEO Services",
            "description": "Professional SEO services for London Ontario businesses to improve local search rankings and grow organic traffic.",
            "image": "/images/london-ontario-seo-services.jpg",
            "url": window.location.href,
            "telephone": "+1-519-601-0123",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "186 King Street",
              "addressLocality": "London",
              "addressRegion": "ON",
              "postalCode": "N6A 1C7",
              "addressCountry": "CA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 42.9849,
              "longitude": -81.2453
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
              <span className="text-teal font-medium">London, Ontario</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">London Ontario SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">
              Customized SEO strategies to help Forest City businesses stand out in local search
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="bg-teal hover:bg-teal-dark text-white">
                  <Search className="w-4 h-4 mr-2" /> Try Our London SEO Analyzer
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                  <MapPin className="w-4 h-4 mr-2" /> Get London SEO Quote
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Local London SEO</h3>
              <p className="text-white/70">
                Targeted strategies to boost your visibility in London local search results, Google Maps, and neighborhood-specific searches.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <GraduationCap className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Education Sector SEO</h3>
              <p className="text-white/70">
                Specialized SEO strategies for businesses targeting Western University, Fanshawe College, and the education sector.
              </p>
            </div>

            <div className="bg-navy-light p-6 rounded-xl border border-teal/20">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <CircleDollarSign className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Small Business SEO</h3>
              <p className="text-white/70">
                Affordable, ROI-focused SEO solutions tailored to London's thriving small business community.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-10">London Ontario SEO: Digital Marketing in the Forest City</h2>
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-4">
                London, Ontario—known as the Forest City—offers a unique business landscape that combines traditional industries with emerging sectors, educational institutions, and a vibrant downtown core. This diverse ecosystem requires specialized SEO approaches that reflect London's distinctive market characteristics.
              </p>
              <p className="text-white/85 text-lg mb-4">
                Our London SEO services are specifically designed to help local businesses capitalize on the city's growth while navigating its competitive digital marketplace. We understand the influence of Western University and Fanshawe College on local search patterns, the importance of neighborhood-specific targeting, and the seasonal trends that affect London businesses.
              </p>
              <p className="text-white/85 text-lg">
                Whether you're a retail store in White Oaks Mall, a restaurant in downtown London, a healthcare provider in North London, or a service business in Byron, our tailored SEO strategies will help you connect with more local customers and grow your presence across Southwestern Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src="https://images.unsplash.com/photo-1605131545453-4875a074479a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="London Ontario downtown area" 
                className="rounded-xl h-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Why London Businesses Need Specialized SEO</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Diverse economic landscape:</span> London's mix of healthcare, education, manufacturing, and technology sectors creates unique competitive challenges requiring targeted SEO strategies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Educational market influence:</span> Western University and Fanshawe College create distinct search patterns and seasonal fluctuations that impact local businesses.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Distinct neighborhoods:</span> London's diverse areas—from Downtown to Byron to Masonville—each have unique demographics and search behaviors requiring geo-targeted approaches.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Regional hub status:</span> As Southwestern Ontario's largest city, London businesses need SEO strategies that capture traffic from surrounding communities like St. Thomas, Strathroy, and Woodstock.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-teal/20 p-2 rounded-full mt-1">
                      <CheckCircle2 className="h-5 w-5 text-teal" />
                    </div>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">Competitive local market:</span> London businesses face increasing digital competition, making professional SEO essential for standing out in local search results.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Our London SEO Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-12">
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <MapPin className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">London Local SEO</h3>
                  <p className="text-white/80 mb-4">
                    Comprehensive local search optimization to ensure your business appears prominently when London residents search for your services:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Google Business Profile optimization with London-specific keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local citation building across London business directories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Neighborhood-specific landing pages for businesses serving multiple London areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">London-focused structured data implementation</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">London Link Building</h3>
                  <p className="text-white/80 mb-4">
                    Strategic acquisition of high-quality backlinks from respected London websites to boost your local authority:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Partnerships with London blogs, news sites, and business organizations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local event sponsorships and community involvement strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">London Chamber of Commerce and industry association outreach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Geo-targeted guest posting on relevant London platforms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="bg-teal/20 p-4 rounded-full">
                    <GraduationCap className="h-7 w-7 text-teal" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Education Sector SEO</h3>
                  <p className="text-white/80 mb-4">
                    Specialized strategies for businesses targeting Western University, Fanshawe College, and the education community:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Campus-specific keyword targeting and content strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content aligned with academic calendars and student patterns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Educational partnership content and link building opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">International student targeting for London's diverse education sector</span>
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
                  <h3 className="text-xl font-bold text-white mb-3">London Content Strategy</h3>
                  <p className="text-white/80 mb-4">
                    Creation of engaging, locally-relevant content that resonates with London audiences and search engines:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">London neighborhood guides relevant to your industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Local case studies featuring London success stories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Blog content addressing London-specific challenges and opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-white/80">Seasonal content calendars tailored to London events and festivals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">London SEO: Neighborhood Targeting Strategies</h2>
            
            <div className="bg-navy-light p-8 rounded-xl border border-teal/20 mb-8">
              <p className="text-white/85 text-lg mb-6">
                London's diverse neighborhoods each have unique characteristics that affect local search behavior. Our neighborhood-specific SEO strategies help you target the right customers in each area:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Downtown London</h4>
                  <p className="text-white/70">
                    Strategies targeting the core business district, focusing on office workers, government employees, and the growing downtown residential population.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">North London/Masonville</h4>
                  <p className="text-white/70">
                    Upscale targeting for this affluent area, emphasizing premium services, retail, and the Western University community.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">South London/White Oaks</h4>
                  <p className="text-white/70">
                    Value-oriented messaging for this diverse area, highlighting accessibility, affordability, and family-friendly services.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">East London/Argyle</h4>
                  <p className="text-white/70">
                    Community-focused approaches for these established neighborhoods, with emphasis on local loyalty and service reliability.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">West London/Byron</h4>
                  <p className="text-white/70">
                    Family-oriented strategies for these residential areas, highlighting convenience, quality, and community connections.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Fanshawe/Oxford Street</h4>
                  <p className="text-white/70">
                    Student-focused SEO targeting the college area, with emphasis on affordability, convenience, and services relevant to young adults.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Westmount</h4>
                  <p className="text-white/70">
                    Targeted approaches for this shopping and residential district, balancing retail offers with neighborhood services.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Old North/Woodfield</h4>
                  <p className="text-white/70">
                    Heritage-sensitive SEO for these historic neighborhoods, emphasizing character, quality, and local business support.
                  </p>
                </div>
                
                <div className="p-5 border border-teal/20 rounded-lg hover:border-teal/40 transition-colors">
                  <h4 className="text-white font-semibold mb-2">Surrounding Communities</h4>
                  <p className="text-white/70">
                    Expanded targeting to capture traffic from St. Thomas, Strathroy, Woodstock, and other communities in London's commuter range.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">London Ontario SEO Case Studies</h2>
            
            <div className="grid grid-cols-1 gap-12 mb-12">
              {/* Case Study 1 */}
              <div className="bg-navy-light p-8 rounded-xl border border-teal/20">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-teal/20 p-4 rounded-xl mb-4">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-teal" />
                        Downtown London Restaurant
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">168% Increase in Reservations</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Restaurant dining area" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A popular restaurant in downtown London struggled with visibility in local search results. Despite excellent reviews and a loyal customer base, they weren't effectively capturing business from office workers, students, or visitors to the area.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We implemented a local SEO campaign focusing on:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Downtown London-specific keyword research and on-page optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Google Business Profile optimization with menu schema and London-centric keywords</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Review generation strategy increasing ratings across Google, Yelp, and TripAdvisor</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Targeted content strategy focused on London events and local business lunch crowd</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">168%</div>
                        <p className="text-white/80 text-sm">Increase in online reservations</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">193%</div>
                        <p className="text-white/80 text-sm">More website traffic from local searches</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">#1</div>
                        <p className="text-white/80 text-sm">For "downtown London restaurant" searches</p>
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
                        London Healthcare Provider
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">124% Increase in New Patients</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern healthcare facility" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A multi-location healthcare provider in London struggled to generate leads for specific services and differentiating themselves in London's competitive healthcare market. They had minimal online visibility despite offering high-quality care.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We created a comprehensive healthcare SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Service-specific landing pages optimized for London healthcare search terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Neighborhood-targeted content for each clinic location across London</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Medical-focused content strategy with London-specific healthcare information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Patient testimonial strategy incorporating schema markup for rich results</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">124%</div>
                        <p className="text-white/80 text-sm">Increase in new patient inquiries</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">87%</div>
                        <p className="text-white/80 text-sm">Growth in traffic to specialty service pages</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">Top 3</div>
                        <p className="text-white/80 text-sm">Rankings for 15 high-value healthcare terms</p>
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
                        Student Housing Provider
                      </h3>
                      <div className="flex items-center mt-4 mb-2">
                        <Award className="h-5 w-5 text-teal mr-2" />
                        <span className="text-white font-medium">94% Increase in Lease Applications</span>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern student apartment building" 
                      className="rounded-xl w-full h-48 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-white/80 mb-4">
                      A student housing provider with properties near Western University and Fanshawe College struggled to fill units despite offering competitive amenities. They had minimal visibility in student housing searches and weren't effectively reaching parents and international students.
                    </p>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-white/80 mb-4">
                      We implemented a student-focused SEO strategy including:
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Campus-specific landing pages targeting Western and Fanshawe students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Content strategy aligned with academic year and student housing search patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">International student targeting with content addressing specific concerns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                        <span className="text-white/80">Parent-focused content emphasizing safety, convenience, and value</span>
                      </li>
                    </ul>
                    
                    <h4 className="text-xl font-semibold text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">94%</div>
                        <p className="text-white/80 text-sm">Increase in lease applications</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">112%</div>
                        <p className="text-white/80 text-sm">Growth in international student inquiries</p>
                      </div>
                      <div className="bg-navy p-4 rounded-lg text-center">
                        <div className="text-teal text-2xl font-bold mb-1">98%</div>
                        <p className="text-white/80 text-sm">Occupancy rate achieved (up from 78%)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">London SEO Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">London Market Knowledge</h3>
                    <p className="text-white/70">Our deep understanding of London's unique business landscape enables us to create highly effective local SEO strategies tailored to the Forest City's distinct neighborhoods and economic sectors.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Education-Focused Strategies</h3>
                    <p className="text-white/70">We develop specialized SEO approaches for businesses targeting Western University and Fanshawe College communities, with seasonal strategies aligned with academic calendars.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Business Citations</h3>
                    <p className="text-white/70">We build and optimize your presence on London-specific directories and platforms that matter to local customers, from Tourism London to the London Chamber of Commerce listings.</p>
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
                    <p className="text-white/70">We implement hyper-local strategies targeting specific London neighborhoods from Downtown to Byron to Masonville, ensuring you connect with the most relevant customers in your area.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">London-Focused Link Building</h3>
                    <p className="text-white/70">We secure quality backlinks from respected London websites and organizations to boost your local authority, including partnerships with London media outlets and community organizations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Regional Targeting</h3>
                    <p className="text-white/70">We extend your visibility beyond London to capture traffic from surrounding communities like St. Thomas, Strathroy, and Woodstock, maximizing your reach across Southwestern Ontario.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy-light border border-teal/20 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">London SEO Success Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">87%</h3>
                <p className="text-white/70">
                  Of our London clients see ranking improvements within the first 60 days
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">68%</h3>
                <p className="text-white/70">
                  Average increase in Google Business Profile views for London clients
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">10+</h3>
                <p className="text-white/70">
                  Years of experience optimizing websites for London businesses
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Boost Your London Business Visibility</h2>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Start with a free London-focused SEO audit to discover how our specialized strategies can help your business dominate local search results.
            </p>
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Rocket className="w-5 h-5 mr-2" /> Get Your Free London SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoLondon;
