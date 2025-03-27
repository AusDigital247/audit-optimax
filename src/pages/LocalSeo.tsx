
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { MapPin, Building, Store, Star, CheckCircle, Search, LineChart, BarChart2, Users, Rocket } from 'lucide-react';

const LocalSeo = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'Local SEO Services - AUS Digital' : 'Services SEO Local - AUS Digital';
  }, [language]);
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-teal/20 p-4 rounded-full">
                <MapPin className="h-10 w-10 text-teal-light" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('local_seo_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              {t('local_seo_subtitle')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact" className="btn-gradient">
                Get a Free Local SEO Audit
              </Link>
              <Link to="/" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all">
                Try Our SEO Tool
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Local SEO Solutions</h2>
            <p className="text-navy/80">
              Our local SEO services help businesses attract nearby customers and dominate local search results, including Google's Map Pack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism-card bg-white p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Building className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Google Business Profile Optimization</h3>
              <p className="text-navy/70">We enhance your Google Business Profile to improve local search visibility and drive more store visits.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Profile completion & verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Photo optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Review management</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Store className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Local Citation Building</h3>
              <p className="text-navy/70">We create and manage consistent business listings across local directories to boost your local presence.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">NAP consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Directory submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Data aggregator distribution</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Star className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Review Generation & Management</h3>
              <p className="text-navy/70">We help you gather and leverage customer reviews to improve your local rankings and reputation.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Review solicitation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Response management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Reputation monitoring</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="glassmorphism-card bg-white p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Search className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Local Content Development</h3>
              <p className="text-navy/70">We create location-specific content that targets local keywords and addresses the needs of your community.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Location-specific pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Local blog content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Area-specific service pages</span>
                </li>
              </ul>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-navy">Local SEO Analytics & Reporting</h3>
              <p className="text-navy/70">We track and analyze your local search performance with detailed reporting and insights.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Local ranking reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Google Business Profile insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-navy/70">Competitive local analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="content-section-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Benefits of Local SEO</h2>
            <p className="text-white/80">
              Local SEO offers unique advantages for businesses targeting customers in specific geographic areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <MapPin className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Targeted Local Traffic</h3>
              <p className="text-white/80">
                Attract visitors who are searching for your products or services in your specific location, resulting in higher-quality leads.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <Users className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Increased Foot Traffic</h3>
              <p className="text-white/80">
                Google reports that 76% of people who search for something nearby on their smartphone visit a business within a day.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <LineChart className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Higher Conversion Rates</h3>
              <p className="text-white/80">
                Local searches have higher intent, with 28% of local searches resulting in a purchase within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Study Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Local SEO Success Stories</h2>
            <p className="text-navy/80">
              See how our local SEO strategies have helped businesses achieve remarkable results in their communities.
            </p>
          </div>
          
          <div className="glass-card bg-navy p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-white/10 rounded-xl h-full p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-white">Local Dental Practice</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/60 text-sm">Challenge:</p>
                      <p className="text-white/90">Low visibility in local search, few new patient inquiries</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Solution:</p>
                      <p className="text-white/90">Comprehensive local SEO strategy with GBP optimization, citation building, and reputation management</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h4 className="text-xl font-bold mb-6 text-white">Results After 6 Months:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-teal/10 border border-teal/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-teal">87%</p>
                    <p className="text-sm text-white/80">Increase in Map Pack Visibility</p>
                  </div>
                  
                  <div className="bg-teal/10 border border-teal/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-teal">124%</p>
                    <p className="text-sm text-white/80">More Website Visits</p>
                  </div>
                  
                  <div className="bg-teal/10 border border-teal/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-teal">94%</p>
                    <p className="text-sm text-white/80">Increase in Phone Calls</p>
                  </div>
                  
                  <div className="bg-teal/10 border border-teal/20 p-4 rounded-lg text-center">
                    <p className="text-3xl font-bold text-teal">45</p>
                    <p className="text-sm text-white/80">New Patients Monthly</p>
                  </div>
                </div>
                
                <p className="text-white/80">
                  "AUS Digital's local SEO services transformed our online presence. We're now ranking at the top of local search results, and our schedule is consistently full with new patients. The ROI has been incredible."
                </p>
                <p className="text-teal mt-2 font-medium">— Dr. Sarah Williams, Williams Dental Care</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="content-section-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Our Local SEO Process</h2>
            <p className="text-white/80">
              We follow a proven methodology to boost your local search visibility and drive more customers to your business.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Local SEO Audit</h3>
                  <p className="text-white/80">
                    We analyze your current local search presence, including Google Business Profile, citations, reviews, and on-site local SEO elements. We also assess your competition in the local market to identify opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Google Business Profile Optimization</h3>
                  <p className="text-white/80">
                    We optimize your Google Business Profile with accurate information, relevant categories, high-quality photos, and other elements that improve local search visibility and user engagement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Local Citation Building</h3>
                  <p className="text-white/80">
                    We create consistent business listings across authoritative local directories, industry-specific platforms, and data aggregators to strengthen your local search presence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    4
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">On-Site Local SEO</h3>
                  <p className="text-white/80">
                    We implement local SEO best practices on your website, including location-specific content, local schema markup, and internal linking strategies that boost your relevance for local searches.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    5
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Review Management</h3>
                  <p className="text-white/80">
                    We help you generate and manage customer reviews across Google and other platforms, implementing strategies to increase both the quantity and quality of your reviews.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    6
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Local Link Building</h3>
                  <p className="text-white/80">
                    We secure relevant local backlinks from community organizations, business associations, local news sites, and industry partners to boost your local authority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center text-white font-bold text-2xl">
                    7
                  </div>
                </div>
                <div className="md:w-5/6">
                  <h3 className="text-xl font-bold mb-3 text-white">Ongoing Optimization & Reporting</h3>
                  <p className="text-white/80">
                    We continuously monitor your local search performance, providing regular reports with key metrics and implementing refinements to maximize your local visibility and leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-navy py-16 w-full">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Dominate Local Search?</h2>
            <p className="text-white/80 mb-8">
              Get started with a free local SEO audit and discover how we can help your business attract more local customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gradient flex items-center">
                Get Your Free Audit <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/seo-toronto" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all">
                See Our Toronto SEO Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalSeo;
