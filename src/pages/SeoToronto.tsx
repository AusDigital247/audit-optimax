
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, BarChart, LineChart, TrendingUp, Users, Settings, Zap } from 'lucide-react';

const SeoToronto = () => {
  return (
    <>
      <Helmet>
        <title>Toronto SEO Services | Local SEO Expert Toronto | SEO Audit Tool</title>
        <meta name="description" content="Expert SEO services in Toronto. Improve your local search rankings with our proven Toronto SEO strategies and comprehensive website analysis." />
        <meta name="keywords" content="Toronto SEO, SEO services Toronto, local SEO Toronto, SEO expert Toronto, Toronto search optimization" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Toronto-specific schema markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Toronto SEO Services",
            "description": "Professional SEO services for businesses in Toronto. Improve local search visibility and drive more traffic to your website.",
            "provider": {
              "@type": "Organization",
              "name": "SEO Audit Tool"
            },
            "serviceArea": {
              "@type": "Place",
              "name": "Toronto"
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Toronto Businesses"
            }
          })}
        </script>
      </Helmet>
      
      <div className="w-full bg-gradient-to-b from-navy to-navy-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Toronto SEO Services</h1>
            <p className="text-xl text-white/80 mb-8">Boost your business visibility in Toronto with our specialized local SEO services</p>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-navy-light border-teal/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <TrendingUp className="w-5 h-5 mr-2 text-teal" /> Local Rank Boosting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/70">
                  Our Toronto SEO strategies are specifically designed to improve your rankings in local search results, helping customers find your business.
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
                  We target keywords and create content that resonates with Toronto audiences, increasing relevant traffic to your website.
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
                  We analyze your Toronto competitors to develop strategies that will help you stand out in your local market.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-white mb-12">How Our Toronto SEO Services Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Keyword Research</h3>
                    <p className="text-white/70">We identify high-value keywords that Toronto customers use to find businesses like yours.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Google Business Profile Optimization</h3>
                    <p className="text-white/70">We optimize your Google Business Profile to improve your visibility in local map results.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Content Strategy</h3>
                    <p className="text-white/70">We create Toronto-focused content that resonates with local audiences and search engines.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Link Building</h3>
                    <p className="text-white/70">We secure high-quality backlinks from respected Toronto websites to boost your domain authority.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Technical SEO Audit</h3>
                    <p className="text-white/70">Use our <Link to="/" className="text-teal hover:underline">SEO Audit Tool</Link> to identify and fix technical issues that may be hindering your site's performance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-teal/20 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Performance Tracking</h3>
                    <p className="text-white/70">We continuously monitor your rankings and traffic to refine our strategies for maximum results.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <Link to="/">
              <Button size="lg" className="bg-teal hover:bg-teal-dark text-white">
                <Zap className="w-5 h-5 mr-2" /> Start with a Free SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoToronto;
