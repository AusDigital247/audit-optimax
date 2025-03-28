
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
  FileText
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SeoBuffalo = () => {
  // Nearby areas for Buffalo
  const nearbyAreas = [
    "Cheektowaga", "Amherst", "Tonawanda", "West Seneca", "Lancaster", 
    "Lackawanna", "Kenmore", "Depew", "Williamsville", "Hamburg",
    "Orchard Park", "East Aurora", "Grand Island", "Niagara Falls", "Lockport"
  ];
  
  return (
    <>
      <Helmet>
        <title>Buffalo NY SEO Services | Local SEO Expert Buffalo | Digital Marketing</title>
        <meta name="description" content="Expert SEO services in Buffalo NY and Western New York. Improve your local search rankings with proven Buffalo SEO strategies and comprehensive website analysis for businesses in Niagara Falls, Cheektowaga, Amherst and beyond." />
        <meta name="keywords" content="Buffalo SEO, SEO services Buffalo, local SEO Buffalo, SEO expert Buffalo, Buffalo NY search optimization, Niagara Falls SEO, Cheektowaga SEO, Amherst SEO" />
        
        {/* Override Open Graph tags */}
        <meta property="og:title" content="Buffalo NY SEO Services | Local SEO Expert Buffalo" />
        <meta property="og:description" content="Expert SEO services in Buffalo NY and Western New York. Improve your local search rankings with proven Buffalo SEO strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        
        {/* Override Twitter tags */}
        <meta name="twitter:title" content="Buffalo NY SEO Services | Local SEO Expert Buffalo" />
        <meta name="twitter:description" content="Expert SEO services in Buffalo NY and Western New York. Improve your local search rankings with proven Buffalo SEO strategies." />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Buffalo-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Buffalo SEO Services",
            "description": "Professional SEO services for businesses in Buffalo NY and Western New York. Improve local search visibility and drive more targeted traffic to your website.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "42.8864",
                "longitude": "-78.8784"
              },
              "geoRadius": "50"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Buffalo and Western New York",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "New York",
                "addressCountry": "United States"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Buffalo NY SEO Services</h1>
              <p className="text-xl text-white/80 mb-8">Boost your business visibility in Western New York with our specialized Buffalo local SEO services</p>
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
                <h2 className="text-2xl font-semibold text-white">Serving Buffalo and Western New York</h2>
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
                  <h2 className="text-3xl font-bold text-white mb-6">Buffalo SEO Services That Drive Results</h2>
                  <p className="text-white/80 mb-6">
                    In Buffalo's evolving market, having a strong digital presence is essential for businesses looking to thrive. Our Buffalo SEO services are designed specifically for the unique challenges and opportunities of Western New York's largest city and economic hub.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <TrendingUp className="w-5 h-5 mr-2 text-teal" /> Buffalo-Focused Strategy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We develop SEO strategies specifically for Buffalo businesses, targeting local keywords and optimizing for the unique search patterns of Western New York consumers.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <Users className="w-5 h-5 mr-2 text-teal" /> Local Audience Targeting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We target keywords and create content that resonates with Buffalo audiences, increasing relevant traffic to your website from throughout Western New York.
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
                          We analyze your Buffalo competitors to develop strategies that will help you stand out in the local market, from downtown to the suburbs and surrounding towns.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive SEO Solutions for Buffalo Businesses</h3>
                  <p className="text-white/80 mb-6">
                    Our Buffalo SEO services include everything you need to dominate local search results and attract qualified leads throughout Western New York.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Search className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Buffalo-Focused Keyword Research</h4>
                        <p className="text-white/70">We identify high-value keywords that Buffalo residents use when searching for businesses like yours, including neighborhood-specific terms and local landmarks.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Building className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Google Business Profile Optimization</h4>
                        <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in Buffalo local map results, critical for attracting nearby customers throughout Western New York.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Buffalo-Focused Content Strategy</h4>
                        <p className="text-white/70">We create content that speaks to Buffalo audiences, incorporating local events, landmarks, and addressing specific needs of Western New York customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Buffalo Link Building</h4>
                        <p className="text-white/70">We secure high-quality backlinks from respected Buffalo websites and local directories to boost your domain authority and local relevance.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">The Buffalo SEO Advantage</h3>
                    <p className="text-white/80 mb-4">
                      Buffalo's unique market offers special opportunities for businesses with the right SEO strategy:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Capitalize on Buffalo's revitalized downtown and waterfront development with location-specific SEO strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Target Buffalo's growing medical and educational sectors with specialized content and keywords</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Leverage Buffalo's position as a cross-border market with strategies that can reach Canadian customers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-0.5" />
                        <span className="text-white/80">Optimize for Buffalo's distinct neighborhoods and suburban communities with targeted local content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Our Process Tab */}
              <TabsContent value="process" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Buffalo SEO Process</h2>
                  <p className="text-white/80 mb-8">
                    We've developed a systematic approach to SEO that delivers consistent results for Buffalo businesses across various industries.
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Buffalo Market Analysis</h3>
                      </div>
                      <p className="text-white/80">
                        We begin by analyzing your business's position within the Buffalo market, studying local competitors, and identifying opportunities specific to your neighborhood and industry. This includes understanding the unique characteristics of different areas, from downtown to the suburbs and surrounding towns.
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
                        Using our <Link to="/" className="text-teal hover:underline">comprehensive SEO audit tool</Link>, we analyze your current website performance, identifying technical issues, content gaps, and optimization opportunities. We pay special attention to local ranking factors that affect Buffalo businesses.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Buffalo-Centric SEO Strategy</h3>
                      </div>
                      <p className="text-white/80">
                        We develop a customized SEO strategy focusing on Buffalo-specific keywords, local content creation, Google Business Profile optimization, and building relationships with other Buffalo businesses for local link building opportunities.
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
                        Our team implements the strategy through technical SEO improvements, on-page optimization, content development, and local link building. We continuously optimize based on performance data and Buffalo search trends.
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
                        We provide detailed reports on your Buffalo SEO performance, showing improvements in local rankings, traffic, and lead generation. We continuously refine strategies based on results and changes in the Buffalo market.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Buffalo SEO Success Metrics</h3>
                    <p className="text-white/80 mb-4">
                      We track comprehensive metrics to measure the success of your Buffalo SEO campaign:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <Target className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Local Rankings</p>
                        <p className="text-white/60 text-sm">Buffalo keyword positions</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <Users className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Organic Traffic</p>
                        <p className="text-white/60 text-sm">Visitors from WNY region</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <Building className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Local Visibility</p>
                        <p className="text-white/60 text-sm">Google Maps prominence</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-2">
                          <LineChart className="h-5 w-5 text-teal" />
                        </div>
                        <p className="text-white font-medium">Lead Generation</p>
                        <p className="text-white/60 text-sm">Conversion metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Local SEO Tab */}
              <TabsContent value="local" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Buffalo Local SEO Expertise</h2>
                  <p className="text-white/80 mb-8">
                    Local SEO is essential for Buffalo businesses looking to attract nearby customers and stand out in specific neighborhoods and surrounding communities.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Why Buffalo Businesses Need Local SEO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Distinct Neighborhoods</h4>
                      <p className="text-white/80">
                        Buffalo's diverse neighborhoods each have their own character and customer base. Local SEO helps businesses target specific areas like Elmwood Village, Allentown, North Buffalo, and the suburbs with precision.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Downtown Revitalization</h4>
                      <p className="text-white/80">
                        Buffalo's downtown renaissance and waterfront development have created new business opportunities. Specialized local SEO helps companies capitalize on increased traffic and interest in these revitalized areas.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Cross-Border Considerations</h4>
                      <p className="text-white/80">
                        Buffalo's proximity to Canada presents unique local SEO opportunities for businesses that want to attract Canadian visitors and customers from the Niagara Region.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Seasonal Patterns</h4>
                      <p className="text-white/80">
                        Buffalo's distinct seasons affect local search patterns. Effective local SEO adapts to these seasonal changes, from winter services to summer tourism and events.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Our Buffalo Local SEO Strategy</h3>
                  <div className="space-y-5 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Buffalo Neighborhood Targeting</h4>
                        <p className="text-white/70">
                          We optimize your online presence for specific Buffalo neighborhoods and suburban communities, from Elmwood Village to Amherst to Hamburg, capturing customers at a hyper-local level.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Local Citation Building</h4>
                        <p className="text-white/70">
                          We ensure your business is accurately listed in Buffalo-specific directories, from Buffalo News listings to local chamber directories and neighborhood business associations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Geo-Modified Keywords</h4>
                        <p className="text-white/70">
                          We target Buffalo-specific keyword variations and long-tail phrases that local customers use when searching for businesses in your industry, including neighborhood names.
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
                          We create Buffalo-specific content that incorporates local landmarks, events, and topics relevant to Buffalo audiences, establishing your brand as a local authority.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-navy-light/50 rounded-xl border border-teal/10">
                    <h3 className="text-xl font-bold text-white mb-3">Buffalo Local Citation Building</h3>
                    <p className="text-white/80 mb-4">
                      We ensure your business is listed in all relevant Buffalo and Western New York specific directories and platforms:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Buffalo Business First</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Buffalo News Directory</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Buffalo Chamber of Commerce</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Visit Buffalo Niagara</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Neighborhood Associations</p>
                      </div>
                      <div className="bg-navy-dark/30 p-3 rounded-lg">
                        <p className="text-white text-center">Western NY Industry Directories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Industries Tab */}
              <TabsContent value="industries" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Buffalo Industries We Serve</h2>
                  <p className="text-white/80 mb-8">
                    We've helped businesses across various Buffalo industries improve their search visibility and attract more local customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Medical & Healthcare</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Buffalo's growing medical sector improve online visibility with specialized SEO strategies for hospitals, clinics, and healthcare providers throughout the region.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Healthcare SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Medical District</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Patient Acquisition</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Professional Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our Buffalo SEO helps legal firms, accountants, consultants, and other professional services attract qualified clients throughout Western New York.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Legal SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Financial Services</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Downtown Buffalo</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Education & Research</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We develop specialized SEO strategies for Buffalo's educational institutions, research centers, and related organizations to improve visibility and outreach.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Education SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Research Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Student Recruitment</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Retail & Restaurants</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our retail and restaurant SEO helps Buffalo businesses attract local customers, improve visibility for popular districts, and increase foot traffic.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Retail SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Restaurant Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Local Search</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Tourism & Hospitality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our tourism SEO strategies help Buffalo hotels, attractions, and hospitality businesses increase visibility to visitors and showcase the best of Buffalo.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Tourism SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Hotel Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Visitor Targeting</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Home Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Buffalo contractors, plumbers, electricians, and other home service providers dominate local search in their service areas across Western New York.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Contractor SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Home Services</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Buffalo Suburbs</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Buffalo SEO FAQs</h2>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What makes Buffalo SEO different from other cities?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Buffalo SEO requires understanding the city's unique characteristics: its distinct neighborhoods, proximity to Canada, seasonal considerations, and ongoing economic renaissance. Effective Buffalo SEO must address these factors while optimizing for both established areas and emerging districts. Buffalo's position as a regional hub for Western New York also means businesses often need to target a wider geographic area.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">Should my Buffalo business target Canadian customers?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        For many Buffalo businesses, especially those in retail, tourism, restaurants, and certain services, targeting Canadian customers from the Niagara Region can be valuable. This may involve specific keyword strategies that include Canadian terms, content that addresses cross-border considerations, and optimization for searches conducted from Canadian locations. We can help assess whether cross-border SEO would benefit your specific business.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How long does it take to see results from Buffalo SEO?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Most Buffalo businesses begin seeing initial improvements within 3-4 months. However, significant results for competitive industries typically take 6-9 months. Local SEO for specific Buffalo neighborhoods may yield faster results, especially for less competitive local keywords. Seasonal businesses in Buffalo should start their SEO campaigns well before their peak season to maximize results when it matters most.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How important is local SEO for Buffalo businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Local SEO is extremely important for Buffalo businesses, especially those serving specific neighborhoods or suburbs. With the city's distinct areas having their own community identities, neighborhood-specific optimization helps businesses connect with nearby customers. Additionally, Buffalo's growing mobile search rate makes local SEO crucial for capturing "near me" searches, particularly important in a city with distinct commercial districts.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What local directories are important for Buffalo businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Beyond Google Business Profile, important Buffalo directories include Buffalo Business First, Buffalo News directory, Buffalo Niagara Partnership, Visit Buffalo Niagara, Step Out Buffalo, neighborhood business association directories, and industry-specific local directories. Being listed accurately in these platforms significantly improves your local visibility and search performance throughout Western New York.
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
              <h2 className="text-3xl font-bold text-white mb-4">Buffalo SEO Success Stories</h2>
              <p className="text-white/80 max-w-3xl mx-auto">See how we've helped local Buffalo businesses improve their search rankings and grow their customer base.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Downtown Buffalo Medical Practice</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Buffalo specialist doctor, WNY medical care</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+183%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Top 3 positions for 10 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">New Patients</span>
                    <span className="text-white">+67% increase in appointments</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their Buffalo-focused SEO strategy helped us become more visible to patients throughout Western New York, significantly increasing our new patient inquiries from both downtown and surrounding suburbs."
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Elmwood Village Retail Business</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Buffalo specialty shop, Elmwood shopping</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+157%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Featured in Map Pack for 8 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Foot Traffic</span>
                    <span className="text-white">+42% increase from online searches</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their neighborhood-focused SEO approach helped us become the top search result for our specialty in the Elmwood Village area, bringing in both local customers and visitors exploring Buffalo's shopping districts."
                </p>
              </div>
            </div>
          </div>
        </section>
          
        {/* CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl border border-teal/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Improve Your Buffalo Search Rankings?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Start with a comprehensive SEO audit to discover how we can help your Buffalo business rank higher and attract more qualified local customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                    <Zap className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    <MessageSquare className="w-5 h-5 mr-2" /> Contact Our Buffalo SEO Team
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

export default SeoBuffalo;
