
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle2, 
  BarChart, 
  LineChart, 
  TrendingUp, 
  Users, 
  Settings, 
  Zap,
  MapPin,
  Building,
  Globe,
  Search,
  FileText,
  LayoutGrid,
  ArrowUpRight,
  MessageSquare
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SeoOttawa = () => {
  // Nearby areas for Ottawa
  const nearbyAreas = [
    "Kanata", "Orleans", "Nepean", "Barrhaven", "Gloucester", 
    "Stittsville", "Vanier", "Westboro", "Hintonburg", "Bells Corners",
    "Gatineau", "Hull", "Aylmer", "Chelsea", "Manotick"
  ];
  
  return (
    <>
      <Helmet>
        <title>Ottawa SEO Services | Local SEO Expert Ottawa | Digital Marketing</title>
        <meta name="description" content="Expert SEO services in Ottawa and surrounding areas. Improve your local search rankings with proven Ottawa SEO strategies and comprehensive website analysis for businesses in Kanata, Orleans, Nepean, and beyond." />
        <meta name="keywords" content="Ottawa SEO, SEO services Ottawa, local SEO Ottawa, SEO expert Ottawa, Ottawa search optimization, Kanata SEO, Orleans SEO, Nepean SEO" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Ottawa-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Ottawa SEO Services",
            "description": "Professional SEO services for businesses in Ottawa and surrounding areas. Improve local search visibility and drive more targeted traffic to your website.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "45.4215",
                "longitude": "-75.6972"
              },
              "geoRadius": "50"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ottawa and Surrounding Areas",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ottawa SEO Services</h1>
              <p className="text-xl text-white/80 mb-8">Boost your business visibility in Canada's capital with our specialized Ottawa local SEO services</p>
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
                <h2 className="text-2xl font-semibold text-white">Serving Ottawa and surrounding areas</h2>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Ottawa SEO Services That Drive Results</h2>
                  <p className="text-white/80 mb-6">
                    Ottawa's unique market presents both challenges and opportunities for businesses looking to improve their online visibility. As the nation's capital with a mix of government, technology, and service-based businesses, Ottawa requires specialized SEO strategies that understand this distinctive ecosystem.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <TrendingUp className="w-5 h-5 mr-2 text-teal" /> Ottawa-Focused Strategy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We develop SEO strategies specifically for Ottawa businesses, targeting local keywords and optimizing for the unique search patterns of the National Capital Region.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <Users className="w-5 h-5 mr-2 text-teal" /> Bilingual Optimization
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          As a bilingual city, we offer specialized English and French SEO services to help your Ottawa business reach the entire local market effectively.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <BarChart className="w-5 h-5 mr-2 text-teal" /> Local Competitor Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We analyze your Ottawa competitors to identify opportunities and develop strategies that help you stand out in the local market.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive SEO Solutions for Ottawa Businesses</h3>
                  <p className="text-white/80 mb-6">
                    Our Ottawa SEO services are designed to help businesses of all sizes improve their online visibility and attract more qualified local customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Search className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ottawa-Focused Keyword Research</h4>
                        <p className="text-white/70">We identify high-value keywords that Ottawa residents use when searching for businesses like yours, including neighborhood-specific terms.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Building className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Google Business Profile Optimization</h4>
                        <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in Ottawa local map results, essential for attracting nearby customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ottawa-Focused Content Strategy</h4>
                        <p className="text-white/70">We create content that speaks to Ottawa audiences, incorporating local events, landmarks, and addressing specific needs of Ottawa customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ottawa Link Building</h4>
                        <p className="text-white/70">We secure high-quality backlinks from respected Ottawa websites and local directories to boost your domain authority and local relevance.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">The Ottawa SEO Advantage</h3>
                    <p className="text-white/80 mb-4">
                      Ottawa presents unique opportunities for businesses that understand how to leverage local SEO effectively:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Target government employees and contractors with specialized content and keywords</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Optimize for both English and French to capture Ottawa's bilingual market</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Leverage Ottawa's growing tech sector with industry-specific SEO strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Capture traffic from Ottawa's suburban communities with neighborhood-targeted content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Our Process Tab */}
              <TabsContent value="process" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Ottawa SEO Process</h2>
                  <p className="text-white/80 mb-8">
                    We've developed a systematic approach to SEO that delivers consistent results for Ottawa businesses across various industries.
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Ottawa Market Analysis</h3>
                      </div>
                      <p className="text-white/80">
                        We begin by analyzing your business's position within the Ottawa market, studying local competitors, and identifying opportunities specific to your neighborhood and industry. This includes understanding the unique characteristics of different Ottawa areas, from downtown to suburban communities.
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
                        Using our <Link to="/" className="text-teal hover:underline">comprehensive SEO audit tool</Link>, we analyze your current website performance, identifying technical issues, content gaps, and optimization opportunities. We pay special attention to local ranking factors that affect Ottawa businesses.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Ottawa-Centric SEO Strategy</h3>
                      </div>
                      <p className="text-white/80">
                        We develop a customized SEO strategy focusing on Ottawa-specific keywords, bilingual content creation when appropriate, Google Business Profile optimization, and building relationships with other Ottawa businesses for local link building opportunities.
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
                        Our team implements the strategy through technical SEO improvements, on-page optimization, content development, and local link building. We continuously optimize based on performance data and Ottawa search trends.
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
                        We provide detailed reports on your Ottawa SEO performance, showing improvements in local rankings, traffic, and lead generation. We continuously refine strategies based on results and changes in the Ottawa market.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Ottawa SEO Technology Stack</h3>
                    <p className="text-white/80 mb-4">
                      We use cutting-edge SEO tools and technologies to deliver superior results for Ottawa businesses:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <p className="text-white font-medium">Keyword Research</p>
                        <p className="text-white/60 text-sm">Advanced tools for Ottawa-specific keyword discovery</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <p className="text-white font-medium">Rank Tracking</p>
                        <p className="text-white/60 text-sm">Precise local ranking data for Ottawa searches</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <p className="text-white font-medium">Technical Auditing</p>
                        <p className="text-white/60 text-sm">Comprehensive technical SEO analysis</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <p className="text-white font-medium">Backlink Analysis</p>
                        <p className="text-white/60 text-sm">Local link quality assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Local SEO Tab */}
              <TabsContent value="local" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Ottawa Local SEO Expertise</h2>
                  <p className="text-white/80 mb-8">
                    Local SEO is essential for Ottawa businesses looking to attract nearby customers and stand out in specific neighborhoods and surrounding areas.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Why Ottawa Businesses Need Local SEO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Government-Business Ecosystem</h4>
                      <p className="text-white/80">
                        Ottawa's economy is heavily influenced by government institutions. Local SEO helps businesses target this unique customer base with precision, leveraging proximity to government buildings and offices.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Bilingual Considerations</h4>
                      <p className="text-white/80">
                        As a bilingual city, Ottawa requires specialized local SEO approaches that address both English and French-speaking populations, especially in areas like Orleans and Gatineau.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Expanding Suburbs</h4>
                      <p className="text-white/80">
                        Ottawa's growing suburban communities like Kanata, Barrhaven, and Orleans have unique search patterns. Local SEO helps businesses connect with customers in these specific areas.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Technology Hub</h4>
                      <p className="text-white/80">
                        Ottawa's technology sector, centered in Kanata and downtown, requires specialized local SEO strategies to connect with tech-savvy audiences and businesses.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Our Ottawa Local SEO Strategy</h3>
                  <div className="space-y-5 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Ottawa Neighborhood Targeting</h4>
                        <p className="text-white/70">
                          We optimize your online presence for specific Ottawa neighborhoods and suburbs, capturing customers at a hyper-local level throughout the National Capital Region.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Bilingual Optimization</h4>
                        <p className="text-white/70">
                          We provide specialized bilingual SEO services to help your business reach Ottawa's French and English-speaking communities effectively.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Government-Adjacent Strategy</h4>
                        <p className="text-white/70">
                          For businesses serving government employees or contractors, we develop specialized SEO strategies that target this unique Ottawa demographic.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Cross-River Optimization</h4>
                        <p className="text-white/70">
                          We help businesses reach customers on both sides of the Ottawa River, with strategies that target both Ottawa and Gatineau markets when appropriate.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Ottawa Local Citation Building</h3>
                    <p className="text-white/80 mb-4">
                      We ensure your business is listed in all relevant Ottawa-specific directories and platforms:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Ottawa Tourism</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Ottawa Business Journal</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Ottawa Chamber of Commerce</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Apt613</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Ottawa Neighborhood Associations</p>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Ottawa Industries We Serve</h2>
                  <p className="text-white/80 mb-8">
                    We've helped businesses across various Ottawa industries improve their search visibility and attract more local customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Technology Companies</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Ottawa's thriving tech sector improve online visibility with specialized SEO strategies for software, IT, and telecommunications companies.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Tech SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">B2B Technology</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Kanata North</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Professional Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our Ottawa SEO helps legal firms, accountants, consultants, and other professional services attract qualified clients throughout the capital region.
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
                        <CardTitle className="text-white">Government Contractors</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We develop specialized SEO strategies for businesses that provide services to government agencies, helping them connect with procurement officers and decision makers.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Government SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Procurement</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">B2G Marketing</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Healthcare Providers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our healthcare SEO helps Ottawa medical practices, clinics, and wellness centers attract new patients within specific service areas and specialties.
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
                          Our retail SEO strategies help Ottawa stores and e-commerce businesses attract local shoppers and improve online sales across the region.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Retail SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">E-commerce</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Ottawa Shopping</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Tourism & Hospitality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Ottawa hotels, restaurants, and attractions improve visibility to both locals and visitors, with strategies that target seasonal tourism patterns.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Tourism SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Hotel Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Restaurant SEO</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Ottawa SEO FAQs</h2>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What makes Ottawa SEO different from other cities?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Ottawa SEO requires specialized strategies that address the city's unique characteristics: a bilingual population, government-centric economy, growing tech sector, and distinct neighborhood communities. Effective Ottawa SEO must consider these factors, along with the need to sometimes target both sides of the Ottawa River, including Gatineau and other Quebec communities.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">Should my Ottawa business optimize for both English and French?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        For many Ottawa businesses, bilingual optimization is beneficial but depends on your target audience and service area. Businesses serving Orleans, Vanier, and Gatineau particularly benefit from French optimization. We can help assess whether bilingual SEO would be valuable for your specific business and implement it effectively if needed.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How long does it take to see results from Ottawa SEO?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Most Ottawa businesses begin seeing initial improvements within 3-4 months. However, significant results for competitive industries typically take 6-9 months. Local SEO for specific Ottawa neighborhoods may yield faster results, especially for less competitive local keywords. Government-adjacent businesses may experience longer timeframes due to the specialized and competitive nature of this sector.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How important is local SEO for Ottawa businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Local SEO is extremely important for Ottawa businesses, especially those serving specific neighborhoods or suburbs. With Ottawa's distinct areas like Kanata, Orleans, and Barrhaven having their own community identities, neighborhood-specific optimization helps businesses connect with nearby customers. Additionally, Ottawa's high mobile search rate makes local SEO crucial for capturing "near me" searches.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What local directories are important for Ottawa businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Beyond Google Business Profile, important Ottawa directories include the Ottawa Board of Trade directory, Ottawa Tourism, the Ottawa Business Journal directory, Apt613, neighborhood business associations, and industry-specific local directories. Being listed accurately in these platforms significantly improves your local visibility and search performance.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ottawa SEO Success Stories</h2>
              <p className="text-white/80 max-w-3xl mx-auto">See how we've helped local Ottawa businesses improve their search rankings and grow their customer base.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Kanata Tech Company</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Ottawa IT services, Kanata tech solutions</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+163%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Top 3 positions for 12 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Lead Generation</span>
                    <span className="text-white">+79% increase in form submissions</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their Ottawa-focused SEO strategy helped us dominate local search results for IT services, driving a significant increase in qualified B2B leads from throughout the capital region."
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Downtown Ottawa Law Firm</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Ottawa lawyer, business law Ottawa</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+195%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Featured in Map Pack for 7 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">New Clients</span>
                    <span className="text-white">+52% increase year-over-year</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their local SEO expertise helped our firm become highly visible in Ottawa business law searches, significantly increasing our client consultations and case acquisitions."
                </p>
              </div>
            </div>
          </div>
        </section>
          
        {/* CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl border border-teal/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Improve Your Ottawa Search Rankings?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Start with a comprehensive SEO audit to discover how we can help your Ottawa business rank higher and attract more qualified local customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                    <Zap className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    <MessageSquare className="w-5 h-5 mr-2" /> Contact Our Ottawa SEO Team
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

export default SeoOttawa;
