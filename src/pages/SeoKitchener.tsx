import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  BarChart, 
  TrendingUp, 
  Users, 
  Zap, 
  MapPin,
  Building,
  Globe,
  Search,
  FileText,
  LineChart,
  PieChart,
  MessageSquare
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SeoKitchener = () => {
  // Nearby areas for Kitchener
  const nearbyAreas = [
    "Waterloo", "Cambridge", "Guelph", "Stratford", "Brantford", 
    "Milton", "Mississauga", "Brampton", "London", "Hamilton", 
    "Elmira", "St. Jacobs", "New Hamburg", "Baden", "Ayr"
  ];
  
  return (
    <>
      <Helmet>
        <title>Kitchener SEO Services | Local SEO Expert Kitchener-Waterloo | Digital Marketing</title>
        <meta name="description" content="Expert SEO services in Kitchener-Waterloo and surrounding areas. Improve your local search rankings with proven Kitchener SEO strategies and comprehensive website analysis for businesses in Cambridge, Guelph, Waterloo and beyond." />
        <meta name="keywords" content="Kitchener SEO, SEO services Kitchener, local SEO Kitchener, SEO expert Kitchener, Kitchener-Waterloo search optimization, Waterloo SEO, Cambridge SEO, Guelph SEO" />
        
        {/* Override Open Graph tags */}
        <meta property="og:title" content="Kitchener SEO Services | Local SEO Expert Kitchener-Waterloo" />
        <meta property="og:description" content="Expert SEO services in Kitchener-Waterloo and surrounding areas. Improve your local search rankings with proven Kitchener SEO strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Override Twitter tags */}
        <meta name="twitter:title" content="Kitchener SEO Services | Local SEO Expert Kitchener-Waterloo" />
        <meta name="twitter:description" content="Expert SEO services in Kitchener-Waterloo and surrounding areas. Improve your local search rankings with proven Kitchener SEO strategies." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Kitchener-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kitchener SEO Services",
            "description": "Professional SEO services for businesses in Kitchener-Waterloo and surrounding areas. Improve local search visibility and drive more targeted traffic to your website.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.4516",
                "longitude": "-80.4925"
              },
              "geoRadius": "50"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Kitchener-Waterloo and Surrounding Areas",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Ontario",
                "addressCountry": "Canada"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="w-full bg-gradient-to-b from-navy to-navy-light">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Kitchener SEO Services</h1>
              <p className="text-xl text-white/80 mb-8">Boost your business visibility in the Kitchener-Waterloo region with our specialized local SEO services</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button className="bg-teal hover:bg-teal-dark text-white">
                    Try Our SEO Audit Tool
                  </Button>
                </Link>
                <Link to="/services/local-seo">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    Learn About Local SEO
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* City highlights */}
            <div className="bg-navy-light/50 backdrop-blur-sm p-6 rounded-xl mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-teal mr-2 h-5 w-5" />
                <h2 className="text-2xl font-semibold text-white">Serving Kitchener-Waterloo and surrounding areas</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-white/80">
                {nearbyAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 text-teal mr-2" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content with Tabs */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="services" className="w-full max-w-5xl mx-auto">
              <TabsList className="custom-tabs-list mb-8 justify-center">
                <TabsTrigger value="services" className="custom-tab-trigger">SEO Services</TabsTrigger>
                <TabsTrigger value="process" className="custom-tab-trigger">Our Process</TabsTrigger>
                <TabsTrigger value="local" className="custom-tab-trigger">Local SEO</TabsTrigger>
                <TabsTrigger value="industries" className="custom-tab-trigger">Industries We Serve</TabsTrigger>
                <TabsTrigger value="faq" className="custom-tab-trigger">FAQs</TabsTrigger>
              </TabsList>
              
              {/* SEO Services Tab */}
              <TabsContent value="services" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Kitchener SEO Services That Drive Results</h2>
                  <p className="text-white/80 mb-6">
                    In the rapidly growing Kitchener-Waterloo region, having a strong digital presence is essential for businesses looking to compete effectively. Our Kitchener SEO services are designed specifically for the unique characteristics of this dynamic innovation hub and its surrounding communities.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <TrendingUp className="w-5 h-5 mr-2 text-teal" /> Local Search Dominance
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          Our Kitchener SEO strategies are specifically designed to improve your rankings in local search results, helping customers throughout the Tri-Cities region find your business.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <Users className="w-5 h-5 mr-2 text-teal" /> Tech Hub Targeting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We develop specialized SEO strategies for Kitchener's growing technology sector, helping tech businesses connect with clients, talent, and investors in this innovation ecosystem.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <BarChart className="w-5 h-5 mr-2 text-teal" /> Competitive Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We analyze your Kitchener-Waterloo competitors to develop strategies that will help you stand out in the local market, from downtown to suburban areas throughout the region.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive SEO Solutions for Kitchener-Waterloo Businesses</h3>
                  <p className="text-white/80 mb-6">
                    Our Kitchener SEO services include everything you need to dominate local search results and attract qualified leads throughout the region.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Search className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Kitchener-Focused Keyword Research</h4>
                        <p className="text-white/70">We identify high-value keywords that Kitchener-Waterloo customers use when searching for businesses like yours, including local landmarks and neighborhood-specific terms.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Building className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Google Business Profile Optimization</h4>
                        <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in Kitchener local map results, critical for attracting nearby customers throughout the Tri-Cities area.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Kitchener-Focused Content Strategy</h4>
                        <p className="text-white/70">We create content that speaks to Kitchener-Waterloo audiences, incorporates local events, and addresses specific needs of regional customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Kitchener Link Building</h4>
                        <p className="text-white/70">We secure high-quality backlinks from respected Kitchener-Waterloo websites and local directories to boost your domain authority and local relevance.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">The Kitchener-Waterloo SEO Advantage</h3>
                    <p className="text-white/80 mb-4">
                      Kitchener-Waterloo's unique market offers special opportunities for businesses with the right SEO strategy:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Target the region's growing tech ecosystem with specialized content and keywords</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Capitalize on the Tri-Cities interconnected market with cross-city targeting strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Leverage university connections with targeted SEO for businesses serving student and academic populations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Optimize for the region's growing suburban communities with neighborhood-targeted content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Our Process Tab */}
              <TabsContent value="process" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Kitchener SEO Process</h2>
                  <p className="text-white/80 mb-8">
                    We've developed a systematic approach to SEO that delivers consistent results for Kitchener-Waterloo businesses across various industries.
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Kitchener Market Analysis</h3>
                      </div>
                      <p className="text-white/80">
                        We begin by analyzing your business's position within the Kitchener-Waterloo market, studying local competitors, and identifying opportunities specific to your industry within the region. This includes understanding the unique characteristics of the Tri-Cities area, from innovation districts to residential neighborhoods.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Website SEO Audit</h3>
                      </div>
                      <p className="text-white/80">
                        Using our <Link to="/" className="text-teal hover:underline">comprehensive SEO audit tool</Link>, we analyze your current website performance, identifying technical issues, content gaps, and optimization opportunities. We pay special attention to local ranking factors that affect Kitchener-Waterloo businesses.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Kitchener-Centric SEO Strategy</h3>
                      </div>
                      <p className="text-white/80">
                        We develop a customized SEO strategy focusing on Kitchener-Waterloo specific keywords, local content creation, Google Business Profile optimization, and building relationships with other regional businesses for local link building opportunities.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Implementation & Optimization</h3>
                      </div>
                      <p className="text-white/80">
                        Our team implements the strategy through technical SEO improvements, on-page optimization, content development, and local link building. We continuously optimize based on performance data and Kitchener-Waterloo search trends.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">5</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Reporting & Refinement</h3>
                      </div>
                      <p className="text-white/80">
                        We provide detailed reports on your Kitchener SEO performance, showing improvements in local rankings, traffic, and lead generation. We continuously refine strategies based on results and changes in the Kitchener-Waterloo market.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Performance Tracking for Kitchener SEO</h3>
                    <p className="text-white/80 mb-4">
                      We use comprehensive analytics to track and measure your SEO performance in the Kitchener-Waterloo market:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <PieChart className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Local Rankings</p>
                        <p className="text-white/60 text-sm">Track position for Kitchener keywords</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <Users className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Local Traffic</p>
                        <p className="text-white/60 text-sm">Measure visitors from KW region</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <Building className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Map Pack Visibility</p>
                        <p className="text-white/60 text-sm">Google Maps placement tracking</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <LineChart className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Conversion Rate</p>
                        <p className="text-white/60 text-sm">Lead generation metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Local SEO Tab */}
              <TabsContent value="local" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Kitchener Local SEO Expertise</h2>
                  <p className="text-white/80 mb-8">
                    Local SEO is essential for Kitchener-Waterloo businesses looking to attract nearby customers and stand out in specific neighborhoods and surrounding communities.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Why Kitchener Businesses Need Local SEO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">The Tri-Cities Connection</h4>
                      <p className="text-white/80">
                        The interconnected nature of Kitchener, Waterloo, and Cambridge creates unique local SEO challenges and opportunities. Proper local optimization helps businesses target customers across all three cities effectively.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Tech and Innovation Focus</h4>
                      <p className="text-white/80">
                        Kitchener-Waterloo's strong tech presence requires specialized local SEO approaches for businesses in this sector, helping them connect with the innovation ecosystem centered around the Innovation District.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">University Influence</h4>
                      <p className="text-white/80">
                        The presence of major universities shapes local search patterns, requiring specialized SEO strategies for businesses targeting students, faculty, and the academic community.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Growing Population</h4>
                      <p className="text-white/80">
                        As one of Canada's fastest-growing regions, Kitchener-Waterloo presents continuous opportunities for businesses that can optimize for new residents and expanding neighborhoods through effective local SEO.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Our Kitchener Local SEO Strategy</h3>
                  <div className="space-y-5 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Kitchener Neighborhood Targeting</h4>
                        <p className="text-white/70">
                          We optimize your online presence for specific Kitchener neighborhoods and districts, from Downtown to Forest Heights to Stanley Park, capturing customers at a hyper-local level.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Cross-City Optimization</h4>
                        <p className="text-white/70">
                          We develop strategies that help your business appear in local searches across Kitchener, Waterloo, and Cambridge, maximizing your visibility throughout the Tri-Cities region.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Industry-Specific Local SEO</h4>
                        <p className="text-white/70">
                          We tailor local SEO strategies to your specific industry in the Kitchener market, whether you're in tech, manufacturing, professional services, or retail.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Local Content Development</h4>
                        <p className="text-white/70">
                          We create Kitchener-specific content that incorporates local landmarks, events, and topics relevant to residents, establishing your brand as a local authority.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Kitchener Local Citation Building</h3>
                    <p className="text-white/80 mb-4">
                      We ensure your business is listed in all relevant Kitchener-Waterloo specific directories and platforms:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Kitchener-Waterloo Chamber</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Explore Waterloo Region</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">The Record Business Directory</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Communitech Directory</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">KW Now</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Local Industry Directories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Industries Tab */}
              <TabsContent value="industries" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Kitchener Industries We Serve</h2>
                  <p className="text-white/80 mb-8">
                    We've helped businesses across various Kitchener-Waterloo industries improve their search visibility and attract more local customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Technology & Startups</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Kitchener-Waterloo's thriving tech sector improve online visibility with specialized SEO strategies for software, IT, and innovation-focused companies.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Tech SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Startup Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Innovation District</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Manufacturing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our SEO services help Kitchener's manufacturing businesses improve digital visibility and generate leads in both local and broader markets.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Manufacturing SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">B2B Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Industrial SEO</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Professional Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our Kitchener SEO helps legal firms, accountants, consultants, and other professional services attract qualified clients throughout the region.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Legal SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Financial Services</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Consulting</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Healthcare Providers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our healthcare SEO helps Kitchener medical practices, clinics, and wellness centers attract new patients within specific service areas and specialties.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Healthcare SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Medical Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Patient Acquisition</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Retail & E-commerce</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our retail SEO strategies help Kitchener stores and e-commerce businesses attract local shoppers and improve online sales across the region.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Retail SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">E-commerce</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Shopping Districts</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Home Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Kitchener contractors, plumbers, electricians, and other home service providers dominate local search in their service areas across the region.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Contractor SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Home Services</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Local Service Ads</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Kitchener SEO FAQs</h2>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What makes SEO in Kitchener-Waterloo unique?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Kitchener-Waterloo SEO requires understanding the region's unique characteristics: a leading tech and innovation ecosystem, strong manufacturing presence, major universities, and the interconnected Tri-Cities market. Effective strategies must address these factors while optimizing for the distinct neighborhoods and business districts across the region.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">Should my business optimize for "Kitchener" or "Kitchener-Waterloo"?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Ideally, both. While many searches use the combined "Kitchener-Waterloo" or "KW" terms, a significant number of users still search with just "Kitchener" or "Waterloo." Your SEO strategy should incorporate all relevant geographic terms to maximize visibility, with the primary focus determined by your specific business location and target audience.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How long does it take to see results from Kitchener SEO?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Most Kitchener-Waterloo businesses begin seeing initial improvements within 3-4 months. However, significant results for competitive industries typically take 6-9 months. Local SEO for specific neighborhoods may yield faster results, especially for less competitive local keywords. Tech-related businesses may face more competition for their primary keywords due to the region's strong innovation sector.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How important is local SEO for Kitchener businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Local SEO is extremely important for Kitchener-Waterloo businesses, especially those serving specific neighborhoods or suburbs. With the region's distinct areas having their own community identities, neighborhood-specific optimization helps businesses connect with nearby customers. Additionally, the high mobile search rate among the tech-savvy local population makes local SEO crucial for capturing "near me" searches.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What local directories are important for Kitchener businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Beyond Google Business Profile, important Kitchener-Waterloo directories include the Greater KW Chamber of Commerce directory, Explore Waterloo Region, The Record business listings, Communitech (for tech businesses), local BIA directories, and industry-specific local directories. Being listed accurately in these platforms significantly improves your local visibility and search performance.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
          
        {/* Case Studies Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Kitchener SEO Success Stories</h2>
              <p className="text-white/80 max-w-3xl mx-auto">See how we've helped local Kitchener-Waterloo businesses improve their search rankings and grow their customer base.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Kitchener Tech Startup</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Waterloo Region software, KW tech solutions</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+205%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Top 3 positions for 11 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Lead Generation</span>
                    <span className="text-white">+83% increase in form submissions</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their specialized knowledge of the Kitchener-Waterloo tech ecosystem helped us target the right keywords and build valuable local backlinks, significantly improving our visibility in the innovation community."
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Kitchener Home Services Company</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Kitchener plumber, waterloo region home repairs</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+176%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Featured in Map Pack for 9 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">New Customers</span>
                    <span className="text-white">+65% increase year-over-year</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their neighborhood-focused SEO approach helped us dominate local search results across Kitchener-Waterloo, significantly increasing service calls from our immediate service areas."
                </p>
              </div>
            </div>
          </div>
        </section>
          
        {/* CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl border border-teal/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Improve Your Kitchener-Waterloo Search Rankings?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Start with a comprehensive SEO audit to discover how we can help your Kitchener business rank higher and attract more qualified local customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                    <Zap className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    <MessageSquare className="w-5 h-5 mr-2" /> Contact Our Kitchener SEO Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeoKitchener;
