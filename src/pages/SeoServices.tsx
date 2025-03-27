
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, BarChart3, LineChart, Globe, CheckCircle, Rocket, ArrowRight } from 'lucide-react';

const SeoServices = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'SEO Services - AUS Digital' : 'Services SEO - AUS Digital';
  }, [language]);
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('seo_services_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              {t('seo_services_subtitle')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/contact" className="btn-gradient">
                Get a Free SEO Audit
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
            <h2 className="text-3xl font-bold mb-6 text-navy">Comprehensive SEO Services</h2>
            <p className="text-navy/80">
              Our SEO services are designed to improve your website's visibility in search engine results, drive more organic traffic, and increase conversions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <Search className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">On-Page SEO</h3>
              <p className="text-white/80">We optimize your website's content, structure, and HTML elements to improve relevance and search engine visibility.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Keyword optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Content optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Meta tag optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <BarChart3 className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Technical SEO</h3>
              <p className="text-white/80">We ensure your website's technical elements are optimized for search engines to crawl and index effectively.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Site speed optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Mobile responsiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Schema markup implementation</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-6 rounded-xl animated-card">
              <div className="bg-teal/20 p-3 rounded-full w-fit mb-4">
                <LineChart className="h-6 w-6 text-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Off-Page SEO</h3>
              <p className="text-white/80">We build your website's authority through strategic link building and online reputation management.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Quality link building</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Brand mentions optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-teal min-w-[16px] mt-1" />
                  <span className="text-white/80">Social signals improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our SEO Process */}
      <section className="content-section-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Our SEO Process</h2>
            <p className="text-white/80">
              We follow a systematic approach to improve your website's search engine visibility and drive sustainable results.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Comprehensive SEO Audit</h3>
                  <p className="text-white/80">
                    We start with a thorough analysis of your website's current SEO performance, examining technical issues, content quality, backlink profile, and competitive positioning. This detailed assessment reveals opportunities for improvement.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Keyword Research & Strategy</h3>
                  <p className="text-white/80">
                    Using advanced tools and market insights, we identify high-value keywords that your potential customers are searching for. We analyze search intent, competition levels, and conversion potential to develop a strategic keyword map.
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
                  <h3 className="text-xl font-bold mb-3 text-white">On-Page & Technical SEO Implementation</h3>
                  <p className="text-white/80">
                    We optimize your website's technical foundation and on-page elements, including site speed, mobile responsiveness, URL structure, meta tags, heading structure, internal linking, and content optimization based on your target keywords.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Content Development & Optimization</h3>
                  <p className="text-white/80">
                    We create and optimize content that satisfies both search engines and users. This includes strategic keyword implementation, enhancing existing content, and developing new content that addresses user intent and drives engagement.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Link Building & Authority Development</h3>
                  <p className="text-white/80">
                    We implement ethical link building strategies to boost your website's authority, focusing on quality backlinks from relevant sources. Our team cultivates relationships with industry websites to secure valuable links that drive both rankings and referral traffic.
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
                  <h3 className="text-xl font-bold mb-3 text-white">Monitoring, Reporting & Optimization</h3>
                  <p className="text-white/80">
                    We continuously monitor your website's performance, providing regular reports that track all key performance indicators. Based on this data, we refine our approach to ensure optimal results and maximize your return on investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Benefits of Our SEO Services</h2>
            <p className="text-navy/80">
              Our SEO services deliver tangible benefits that contribute to your business growth and online success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphism-card bg-white p-6 rounded-xl flex items-start gap-4 animated-card">
              <div className="bg-teal/20 p-3 rounded-full">
                <Globe className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Increased Visibility</h3>
                <p className="text-navy/70">
                  Achieve higher rankings in search engine results pages for your target keywords, making your business more visible to potential customers.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl flex items-start gap-4 animated-card">
              <div className="bg-teal/20 p-3 rounded-full">
                <BarChart3 className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Quality Traffic</h3>
                <p className="text-navy/70">
                  Attract visitors who are actively searching for your products or services, resulting in higher conversion rates and better ROI.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl flex items-start gap-4 animated-card">
              <div className="bg-teal/20 p-3 rounded-full">
                <LineChart className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Long-Term Results</h3>
                <p className="text-navy/70">
                  Unlike paid advertising, SEO provides sustainable results that continue to drive traffic and leads over time, even with reduced ongoing investment.
                </p>
              </div>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl flex items-start gap-4 animated-card">
              <div className="bg-teal/20 p-3 rounded-full">
                <Search className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Enhanced User Experience</h3>
                <p className="text-navy/70">
                  SEO improvements often lead to a better overall user experience, resulting in higher engagement, longer time on site, and increased conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-navy py-16 w-full">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Improve Your Search Rankings?</h2>
            <p className="text-white/80 mb-8">
              Get started with a free SEO audit and discover how our services can help your business grow online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gradient flex items-center">
                Get Started <Rocket className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/seo-toronto" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center">
                Toronto SEO Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeoServices;
