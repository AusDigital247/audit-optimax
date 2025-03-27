
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Award, Lightbulb, TrendingUp, CheckCircle, Rocket } from 'lucide-react';

const About = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'About Us - AUS Digital' : 'À propos - AUS Digital';
  }, [language]);
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('about_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              {t('about_subtitle')}
            </h2>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Our Story</h2>
              <p className="text-navy/80 mb-4">
                Founded in 2015, AUS Digital began with a simple mission: to help businesses navigate the complex world of digital marketing with transparency and measurable results.
              </p>
              <p className="text-navy/80 mb-4">
                What started as a small team of SEO enthusiasts has grown into a full-service digital marketing agency with expertise spanning search engine optimization, content marketing, and analytics.
              </p>
              <p className="text-navy/80">
                Throughout our journey, we've remained committed to our core values of data-driven strategies, ethical practices, and continuous innovation, helping hundreds of businesses achieve sustainable online growth.
              </p>
            </div>
            <div className="glassmorphism-card bg-navy p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal mb-2">7+</p>
                  <p className="text-white/80">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal mb-2">500+</p>
                  <p className="text-white/80">Clients Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal mb-2">95%</p>
                  <p className="text-white/80">Client Retention</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal mb-2">15+</p>
                  <p className="text-white/80">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="content-section-dark">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col items-center text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mb-4">
                <Lightbulb className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Innovation</h3>
              <p className="text-white/80">
                We continuously explore new strategies, technologies, and approaches to stay ahead of the rapidly evolving digital landscape.
              </p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col items-center text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Excellence</h3>
              <p className="text-white/80">
                We hold ourselves to the highest standards in everything we do, from client communication to strategy execution and reporting.
              </p>
            </div>
            
            <div className="glassmorphism-card p-6 rounded-xl flex flex-col items-center text-center animated-card">
              <div className="bg-teal/20 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Results-Driven</h3>
              <p className="text-white/80">
                We measure success by the tangible business outcomes we deliver, focusing on metrics that truly matter to your bottom line.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center text-navy">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glassmorphism-card bg-white p-6 rounded-xl text-center animated-card">
              <div className="w-24 h-24 rounded-full bg-navy/10 mb-4 mx-auto flex items-center justify-center">
                <Users className="h-12 w-12 text-navy/40" />
              </div>
              <h3 className="text-lg font-bold text-navy">Sarah Johnson</h3>
              <p className="text-teal font-medium mb-2">CEO & Founder</p>
              <p className="text-navy/70 text-sm">
                Digital marketing strategist with 15+ years of experience in SEO and business growth.
              </p>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl text-center animated-card">
              <div className="w-24 h-24 rounded-full bg-navy/10 mb-4 mx-auto flex items-center justify-center">
                <Users className="h-12 w-12 text-navy/40" />
              </div>
              <h3 className="text-lg font-bold text-navy">Michael Chen</h3>
              <p className="text-teal font-medium mb-2">Head of SEO</p>
              <p className="text-navy/70 text-sm">
                Technical SEO expert specializing in algorithm analysis and advanced optimization strategies.
              </p>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl text-center animated-card">
              <div className="w-24 h-24 rounded-full bg-navy/10 mb-4 mx-auto flex items-center justify-center">
                <Users className="h-12 w-12 text-navy/40" />
              </div>
              <h3 className="text-lg font-bold text-navy">Emily Rodriguez</h3>
              <p className="text-teal font-medium mb-2">Content Director</p>
              <p className="text-navy/70 text-sm">
                Content strategist with a background in journalism and expertise in creating SEO-driven content.
              </p>
            </div>
            
            <div className="glassmorphism-card bg-white p-6 rounded-xl text-center animated-card">
              <div className="w-24 h-24 rounded-full bg-navy/10 mb-4 mx-auto flex items-center justify-center">
                <Users className="h-12 w-12 text-navy/40" />
              </div>
              <h3 className="text-lg font-bold text-navy">David Wilson</h3>
              <p className="text-teal font-medium mb-2">Analytics Lead</p>
              <p className="text-navy/70 text-sm">
                Data scientist who transforms complex analytics into actionable business insights.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="content-section-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Why Choose AUS Digital</h2>
            <p className="text-white/80">
              We combine industry expertise, data-driven strategies, and a client-first approach to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 bg-teal/20 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Customized Strategies</h3>
                <p className="text-white/80">
                  We develop personalized digital marketing plans based on your specific business goals, industry, and target audience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-teal/20 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Transparent Reporting</h3>
                <p className="text-white/80">
                  We provide clear, jargon-free reports that show exactly how our efforts are impacting your business growth.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-teal/20 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Ethical Practices</h3>
                <p className="text-white/80">
                  We only use white-hat, sustainable techniques that build long-term success without risking penalties or setbacks.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-teal/20 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">Continuous Learning</h3>
                <p className="text-white/80">
                  Our team stays at the forefront of industry trends through ongoing education, certifications, and research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-navy">Ready to Grow Your Online Presence?</h2>
            <p className="text-navy/80 mb-8">
              Let's discuss how we can help your business reach its digital marketing goals.
            </p>
            <a href="/contact" className="btn-gradient inline-flex items-center">
              Get in Touch <Rocket className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
