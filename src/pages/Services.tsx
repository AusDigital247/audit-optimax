
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Search, Globe, BarChart3, Lightbulb, LineChart, LucideIcon, Laptop, PenTool, Megaphone, Database, Gauge, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, url, color }) => {
  return (
    <div className={`glassmorphism-card p-6 rounded-xl overflow-hidden relative animated-card border-t-4 ${color}`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
      <p className="text-navy/70 mb-4">{description}</p>
      <Link to={url} className="flex items-center text-teal font-medium hover:text-teal-light transition-colors">
        Learn More <ChevronRight size={16} className="ml-1" />
      </Link>
    </div>
  );
};

const Services = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'Our Services - AUS Digital' : 'Nos Services - AUS Digital';
  }, [language]);
  
  const services = [
    {
      title: "SEO Services",
      description: "Boost your website's visibility with our comprehensive search engine optimization strategies tailored to your business goals.",
      icon: <Search className="h-10 w-10 text-teal" />,
      url: "/services/seo",
      color: "border-teal"
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract nearby customers with our targeted local SEO techniques.",
      icon: <Globe className="h-10 w-10 text-purple-500" />,
      url: "/services/local-seo",
      color: "border-purple-500"
    },
    {
      title: "Content Marketing",
      description: "Engage your audience with compelling, SEO-optimized content that drives traffic and conversions.",
      icon: <PenTool className="h-10 w-10 text-blue-500" />,
      url: "/services/content-marketing",
      color: "border-blue-500"
    },
    {
      title: "Technical SEO",
      description: "Resolve technical issues that are holding back your website's search performance and user experience.",
      icon: <Laptop className="h-10 w-10 text-amber-500" />,
      url: "/services/technical-seo",
      color: "border-amber-500"
    },
    {
      title: "SEO Audits & Analytics",
      description: "Get in-depth analysis of your website's current SEO performance with actionable recommendations.",
      icon: <BarChart3 className="h-10 w-10 text-red-500" />,
      url: "/services/seo-audits",
      color: "border-red-500"
    },
    {
      title: "Link Building",
      description: "Build your website's authority with strategic, high-quality backlinks from relevant sources.",
      icon: <Database className="h-10 w-10 text-green-500" />,
      url: "/services/link-building",
      color: "border-green-500"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Transform website visitors into customers with data-driven CRO strategies.",
      icon: <Gauge className="h-10 w-10 text-indigo-500" />,
      url: "/services/cro",
      color: "border-indigo-500"
    },
    {
      title: "Digital PR & Outreach",
      description: "Amplify your brand's online presence through strategic digital PR and outreach campaigns.",
      icon: <Megaphone className="h-10 w-10 text-pink-500" />,
      url: "/services/digital-pr",
      color: "border-pink-500"
    }
  ];
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('services_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              {t('services_subtitle')}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link to="/services/seo" className="btn-gradient">
                SEO Services
              </Link>
              <Link to="/services/local-seo" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all">
                Local SEO
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Our Digital Marketing Services</h2>
            <p className="text-navy/80">
              We offer a comprehensive range of digital marketing services tailored to help your business grow online. Our data-driven approach ensures measurable results and ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                url={service.url}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Our Services */}
      <section className="content-section-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Our Services</h2>
            <p className="text-white/80">
              Our digital marketing services are built on a foundation of data, expertise, and a commitment to delivering measurable results for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <Lightbulb className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Strategic Approach</h3>
              <p className="text-white/80">
                We develop customized strategies based on your business goals, target audience, and competitive landscape.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <LineChart className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Data-Driven Results</h3>
              <p className="text-white/80">
                Our decisions are backed by comprehensive analytics and industry research to maximize your ROI.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                <BarChart3 className="h-10 w-10 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Transparent Reporting</h3>
              <p className="text-white/80">
                We provide clear, jargon-free reports that show exactly how our work is impacting your business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-navy">Our Process</h2>
            <p className="text-navy/80">
              We follow a systematic approach to ensure your digital marketing campaigns deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="glassmorphism-card bg-white p-6 rounded-xl relative z-10 h-full animated-card">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xl">1</div>
                <h3 className="text-xl font-bold mb-3 text-navy mt-6">Discovery & Analysis</h3>
                <p className="text-navy/70">
                  We begin by understanding your business goals, target audience, and conducting a thorough analysis of your current digital presence.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-4 w-1/3 h-1 bg-teal/50 transform translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="glassmorphism-card bg-white p-6 rounded-xl relative z-10 h-full animated-card">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xl">2</div>
                <h3 className="text-xl font-bold mb-3 text-navy mt-6">Strategy Development</h3>
                <p className="text-navy/70">
                  Based on our findings, we create a customized strategy with clear objectives, timelines, and key performance indicators.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-4 w-1/3 h-1 bg-teal/50 transform translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="glassmorphism-card bg-white p-6 rounded-xl relative z-10 h-full animated-card">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xl">3</div>
                <h3 className="text-xl font-bold mb-3 text-navy mt-6">Implementation</h3>
                <p className="text-navy/70">
                  Our expert team executes the strategy, implementing best practices and proven techniques to achieve your business objectives.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 right-4 w-1/3 h-1 bg-teal/50 transform translate-y-1/2"></div>
            </div>
            
            <div className="relative">
              <div className="glassmorphism-card bg-white p-6 rounded-xl relative z-10 h-full animated-card">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-teal flex items-center justify-center text-white font-bold text-xl">4</div>
                <h3 className="text-xl font-bold mb-3 text-navy mt-6">Monitoring & Optimization</h3>
                <p className="text-navy/70">
                  We continuously monitor performance, analyze data, and make data-driven adjustments to optimize results and maximize ROI.
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
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Grow Your Business Online?</h2>
            <p className="text-white/80 mb-8">
              Let's discuss how our digital marketing services can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-gradient">
                Get in Touch
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-all">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
