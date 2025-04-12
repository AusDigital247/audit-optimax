
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, ArrowRight, Building2, MapPin, Phone } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface LocalBusinessPageProps {
  city: string;
  region: string;
  mainContent: React.ReactNode;
  seoServiceOfferings: string[];
  businessSectors: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
}

const LocalBusinessPage: React.FC<LocalBusinessPageProps> = ({
  city,
  region,
  mainContent,
  seoServiceOfferings,
  businessSectors,
  processSteps
}) => {
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title={`SEO ${city} ${region} | Local Search Optimization`}
        description={`Professional ${city} SEO services customized for local businesses. Our ${city}-focused SEO strategies drive targeted traffic & increase conversions throughout ${region}.`}
        keywords={`${city} SEO, ${city} search engine optimization, ${region} SEO company, local SEO ${city}, ${city} digital marketing, ${city} SEO services, ${city} SEO consultant, ${city} SEO agency`}
      />
      
      <div className="bg-gradient-to-b from-navy to-navy-light py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-3 text-teal font-display">
              SEO {city} {region}
            </h1>
            <p className="text-xl text-white font-body">
              Strategic search optimization for {city} businesses
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-10 rounded-xl shadow-2xl border border-teal/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-teal" />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {city} Search Engine Optimization Services
                </h2>
              </div>
              
              <div className="text-white space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <p>Hyperlocal SEO strategy custom-built for the {city} market</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <p>Local {city} backlink acquisition & citation building</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <p>{city}-specific keyword research & competitor analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                  <p>Technical SEO optimized for {city} search users</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-teal hover:bg-teal-dark text-white px-6 py-2 rounded-md flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Schedule {city} SEO Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-navy py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {mainContent}
          
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy dark:text-white text-center font-display">
              Our {city} SEO Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-md relative">
                  <div className="absolute -top-4 -left-4 bg-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-navy dark:text-white">{step.title}</h3>
                  <p className="text-navy-light dark:text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 dark:bg-navy-light py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Tabs defaultValue="services" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-xl grid-cols-2">
                <TabsTrigger value="services" className="text-lg">
                  {city} SEO Services
                </TabsTrigger>
                <TabsTrigger value="industries" className="text-lg">
                  Business Sectors
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="services" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seoServiceOfferings.map((service, index) => (
                  <div key={index} className="bg-white dark:bg-navy p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-navy dark:text-white">{service}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="industries" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessSectors.map((sector, index) => (
                  <div key={index} className="bg-white dark:bg-navy p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-navy dark:text-white">{sector}</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="bg-navy py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white font-display">
              Ready to dominate {city} search results?
            </h2>
            <p className="text-white/80 mb-8">
              Our {city}-focused SEO strategies help local businesses increase visibility, drive targeted traffic, and grow revenue.
            </p>
            <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-3 rounded-md flex items-center gap-2 mx-auto">
              Get Your {city} SEO Strategy <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalBusinessPage;
