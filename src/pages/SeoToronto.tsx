
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
  LayoutGrid
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SeoToronto = () => {
  // Nearby areas for Toronto
  const nearbyAreas = [
    "Scarborough", "Etobicoke", "North York", "Mississauga", "Brampton", 
    "Markham", "Richmond Hill", "Vaughan", "Oakville", "Burlington", 
    "Ajax", "Pickering", "Whitby", "Oshawa"
  ];
  
  return (
    <>
      <Helmet>
        <title>Toronto SEO Services | Local SEO Expert Toronto | Digital Marketing</title>
        <meta name="description" content="Expert SEO services in Toronto and the GTA. Improve your local search rankings with proven Toronto SEO strategies and comprehensive website analysis for businesses in Scarborough, Etobicoke, North York, and beyond." />
        <meta name="keywords" content="Toronto SEO, SEO services Toronto, local SEO Toronto, SEO expert Toronto, Toronto search optimization, Scarborough SEO, Etobicoke SEO, North York SEO" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Toronto-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Toronto SEO Services",
            "description": "Professional SEO services for businesses in Toronto and the Greater Toronto Area. Improve local search visibility and drive more targeted traffic to your website.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "43.6532",
                "longitude": "-79.3832"
              },
              "geoRadius": "50"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Greater Toronto Area",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Toronto SEO Services</h1>
              <p className="text-xl text-white/80 mb-8">Boost your business visibility across the Greater Toronto Area with our specialized local SEO services</p>
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
                <h2 className="text-2xl font-semibold text-white">Serving the entire Greater Toronto Area</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/80">
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
                  <h2 className="text-3xl font-bold text-white mb-6">Toronto SEO Services That Drive Results</h2>
                  <p className="text-white/80 mb-6">
                    In the competitive Toronto market, having a strong digital presence is essential for businesses looking to thrive in Canada's largest city. Our Toronto SEO services are designed specifically for the unique challenges and opportunities of this diverse metropolitan area.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <TrendingUp className="w-5 h-5 mr-2 text-teal" /> Local Rank Boosting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          Our Toronto SEO strategies are specifically designed to improve your rankings in local search results, helping customers find your business in Toronto's competitive market.
                        </CardDescription>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="flex items-center text-white">
                          <Users className="w-5 h-5 mr-2 text-teal" /> Toronto Audience Targeting
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          We target keywords and create content that resonates with Toronto's diverse population, increasing relevant traffic to your website from across the GTA.
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
                          We analyze your Toronto competitors to develop strategies that will help you stand out in the local market, from downtown to the outer suburbs.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive SEO Solutions for Toronto Businesses</h3>
                  <p className="text-white/80 mb-6">
                    Our Toronto SEO services include everything you need to dominate local search results and attract qualified leads throughout the Greater Toronto Area.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Search className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Toronto-Focused Keyword Research</h4>
                        <p className="text-white/70">We identify high-value keywords that Toronto customers use when searching for businesses like yours, including local landmarks and neighborhood-specific terms.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Building className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Google Business Profile Optimization</h4>
                        <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in Toronto local map results, critical for attracting nearby customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <FileText className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Toronto-Focused Content Strategy</h4>
                        <p className="text-white/70">We create content that speaks to Toronto audiences, incorporates local events, and addresses specific needs of GTA customers.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Toronto Link Building</h4>
                        <p className="text-white/70">We secure high-quality backlinks from respected Toronto websites and local directories to boost your domain authority and local relevance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Our Process Tab */}
              <TabsContent value="process" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Our Toronto SEO Process</h2>
                  <p className="text-white/80 mb-8">
                    We've developed a systematic approach to SEO that delivers consistent results for Toronto businesses across various industries.
                  </p>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Toronto Market Analysis</h3>
                      </div>
                      <p className="text-white/80">
                        We start by examining your business's position within the Toronto market, analyzing local competitors, and identifying opportunities specific to your neighborhood and industry. This includes understanding the unique characteristics of different GTA regions, from the downtown core to suburban areas.
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
                        Using our <Link to="/" className="text-teal hover:underline">comprehensive SEO audit tool</Link>, we analyze your current website performance, identifying technical issues, content gaps, and optimization opportunities. We particularly focus on local ranking factors that affect Toronto businesses.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-6 rounded-xl border border-teal/10">
                      <div className="flex items-center mb-3">
                        <div className="bg-teal/20 h-10 w-10 rounded-full flex items-center justify-center mr-4">
                          <span className="text-teal font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">Toronto-Centric SEO Strategy</h3>
                      </div>
                      <p className="text-white/80">
                        We develop a customized SEO strategy focusing on Toronto-specific keywords, local content creation, Google Business Profile optimization, and building relationships with other Toronto businesses for local link building opportunities.
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
                        Our team implements the strategy through technical SEO improvements, on-page optimization, content development, and local link building. We continuously optimize based on performance data and Toronto search trends.
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
                        We provide detailed reports on your Toronto SEO performance, showing improvements in local rankings, traffic, and lead generation. We continuously refine strategies based on results and changes in the Toronto market.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Local SEO Tab */}
              <TabsContent value="local" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Toronto Local SEO Expertise</h2>
                  <p className="text-white/80 mb-8">
                    Local SEO is particularly crucial in Toronto's diverse and competitive market. Our local SEO strategies help businesses stand out in specific Toronto neighborhoods and suburbs.
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Why Toronto Businesses Need Local SEO</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">High Local Competition</h4>
                      <p className="text-white/80">
                        Toronto has one of Canada's highest concentrations of businesses across all industries. Standing out requires targeted local SEO strategies specific to your Toronto neighborhood or service area.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Diverse Neighborhoods</h4>
                      <p className="text-white/80">
                        From downtown financial districts to culturally diverse neighborhoods like Scarborough, North York, and Etobicoke, each area has unique customer behaviors and search patterns.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Mobile Search Growth</h4>
                      <p className="text-white/80">
                        Torontonians frequently search for local businesses on mobile devices while on the go. Local SEO ensures you appear in these crucial "near me" searches throughout the GTA.
                      </p>
                    </div>
                    
                    <div className="bg-navy-light/70 p-5 rounded-xl border border-teal/10">
                      <h4 className="text-lg font-semibold text-white mb-2">Suburban Expansion</h4>
                      <p className="text-white/80">
                        As Toronto's population extends further into surrounding areas like Mississauga and Markham, geo-targeted SEO strategies help capture customers across the expanding GTA.
                      </p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Our Toronto Local SEO Strategy</h3>
                  <div className="space-y-5 mb-6">
                    <div className="flex gap-3 items-start">
                      <div className="bg-teal/20 p-2 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-teal" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">Toronto Neighborhood Targeting</h4>
                        <p className="text-white/70">
                          We optimize your online presence for specific Toronto neighborhoods like Yorkville, Liberty Village, The Annex, and beyond, capturing customers at a hyper-local level.
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
                          We ensure your business is accurately listed in Toronto-specific directories, from Yellow Pages Canada to local chamber directories and neighborhood business associations.
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
                          We target Toronto-specific keyword variations and long-tail phrases that local customers use when searching for businesses in your industry, including neighborhood names.
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
                          We create Toronto-specific content that incorporates local landmarks, events, and topics relevant to Toronto audiences, establishing your brand as a local authority.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Industries Tab */}
              <TabsContent value="industries" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Toronto Industries We Serve</h2>
                  <p className="text-white/80 mb-8">
                    We've helped businesses across various Toronto industries improve their search visibility and attract more local customers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Legal Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Toronto law firms generate qualified leads through strategic local SEO that targets specific practice areas and neighborhoods.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Toronto Lawyers</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Legal SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Law Firm Marketing</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Healthcare Providers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our healthcare SEO helps medical practices in Toronto attract new patients within specific service areas and specialties.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Healthcare SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Medical Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Toronto Clinics</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Restaurants & Hospitality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Toronto restaurants and hospitality businesses increase bookings through local search optimization and review management.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Restaurant SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Food Service</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Hotel Marketing</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Real Estate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our real estate SEO strategies help Toronto realtors and property management companies target specific neighborhoods and property types.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Real Estate SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Property Marketing</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Toronto Housing</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Home Services</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          We help Toronto contractors, plumbers, electricians, and other home service providers dominate local search in their service areas.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Contractor SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Home Services</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Toronto Repair</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-navy-light border-teal/20">
                      <CardHeader>
                        <CardTitle className="text-white">Retail & E-commerce</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70 mb-3">
                          Our retail SEO strategies help Toronto stores and e-commerce businesses attract local shoppers and improve online sales.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Retail SEO</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">E-commerce</span>
                          <span className="bg-navy-dark/50 text-white/80 px-2 py-1 rounded text-xs">Toronto Shopping</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* FAQ Tab */}
              <TabsContent value="faq" className="space-y-8">
                <div className="glass-card p-8 rounded-xl">
                  <h2 className="text-3xl font-bold text-white mb-6">Toronto SEO FAQs</h2>
                  
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How long does SEO take to show results in Toronto?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Most Toronto businesses start seeing initial improvements within 3-4 months. However, significant results for competitive industries and keywords typically take 6-12 months. Local SEO for specific Toronto neighborhoods can sometimes yield faster results, especially for less competitive local keywords.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How is SEO in Toronto different from other cities?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Toronto SEO requires understanding the city's diverse neighborhoods, multilingual population, and highly competitive business environment. Strategies must account for Toronto's unique cultural demographics, neighborhood-specific search behavior, and the need to target both English and other languages depending on your target audience.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What local directories are important for Toronto businesses?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Beyond Google Business Profile, important Toronto directories include Yellow Pages Canada, Yelp, the Toronto Board of Trade directory, Toronto.com, BlogTO business listings, and neighborhood-specific business association directories. Industry-specific local directories are also valuable depending on your business type.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">How do you optimize for Toronto's multilingual market?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        We provide multilingual SEO services for Toronto's diverse population, optimizing websites for English and other languages depending on your target audience. This includes hreflang implementations, multilingual content development, and targeting language-specific keywords relevant to Toronto's diverse communities.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-5" className="border-0 bg-navy-light/70 rounded-lg p-4 mb-4">
                      <AccordionTrigger className="text-white hover:no-underline">What's the difference between organic SEO and local SEO in Toronto?</AccordionTrigger>
                      <AccordionContent className="text-white/80">
                        Organic SEO focuses on improving rankings across all search results, while local SEO specifically targets Toronto-area searches and map listings. For Toronto businesses serving local customers, a combination of both strategies is typically most effective, with local SEO bringing in nearby customers and organic SEO expanding your overall online visibility.
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
              <h2 className="text-3xl font-bold text-white mb-4">Toronto SEO Success Stories</h2>
              <p className="text-white/80 max-w-3xl mx-auto">See how we've helped local Toronto businesses improve their search rankings and grow their customer base.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">Downtown Toronto Law Firm</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">Toronto family lawyer, downtown Toronto attorney</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+187%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Top 3 positions for 14 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Lead Generation</span>
                    <span className="text-white">+94% increase in form submissions</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their Toronto-focused SEO strategy helped us dominate local search results for our practice areas, driving a significant increase in qualified client inquiries from our target neighborhoods."
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-teal/20">
                <h3 className="text-xl font-semibold text-white mb-3">North York Medical Clinic</h3>
                <div className="flex justify-between mb-3">
                  <span className="text-white/70">Keywords Targeted:</span>
                  <span className="text-teal">North York doctor, Toronto medical clinic</span>
                </div>
                <div className="mb-4 p-3 bg-navy-dark/30 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Organic Traffic</span>
                    <span className="text-white">+215%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">Local Rankings</span>
                    <span className="text-white">Featured in Map Pack for 8 keywords</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">New Patients</span>
                    <span className="text-white">+47% increase year-over-year</span>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Their local SEO expertise helped our clinic become highly visible in North York neighborhood searches, significantly increasing our new patient appointments from our immediate service area."
                </p>
              </div>
            </div>
          </div>
        </section>
          
        {/* CTA Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl border border-teal/30 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Dominate Toronto Search Results?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Start with a comprehensive SEO audit to discover how we can help your Toronto business rank higher and attract more qualified local customers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/">
                  <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                    <Zap className="w-5 h-5 mr-2" /> Get Your Free SEO Audit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    Contact Our Toronto SEO Team
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

export default SeoToronto;
