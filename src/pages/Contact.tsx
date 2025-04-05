
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, ArrowRight, Search, Book } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSConfig, setEmailJSConfig] = useState({
    serviceId: process.env.NODE_ENV === 'production' ? 'your_service_id' : '',
    templateId: process.env.NODE_ENV === 'production' ? 'your_template_id' : '',
    userId: process.env.NODE_ENV === 'production' ? 'your_user_id' : '',
    isConfigured: process.env.NODE_ENV === 'production'
  });
  
  useEffect(() => {
    document.title = language === 'en' ? 'Contact Us - SEO Audit Tool' : 'Contact Us - SEO Audit Tool';
    
    // Check if EmailJS configuration is stored in localStorage
    const storedServiceId = localStorage.getItem('emailjs_service_id');
    const storedTemplateId = localStorage.getItem('emailjs_template_id');
    const storedUserId = localStorage.getItem('emailjs_user_id');
    
    if (storedServiceId && storedTemplateId && storedUserId) {
      setEmailJSConfig({
        serviceId: storedServiceId,
        templateId: storedTemplateId,
        userId: storedUserId,
        isConfigured: true
      });
    }
  }, [language]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (emailJSConfig.isConfigured) {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        };
        
        await emailjs.send(
          emailJSConfig.serviceId,
          emailJSConfig.templateId,
          templateParams,
          emailJSConfig.userId
        );
        
        toast({
          title: "Message sent!",
          description: "We've received your message and will respond soon.",
        });
      } else {
        // Fallback to Supabase function if EmailJS not configured
        const { data: adminEmailData, error: adminEmailError } = await supabase.functions.invoke('send-email', {
          body: {
            to: 'seoaudittoolofficial@gmail.com',
            subject: `Contact Form: ${formData.subject}`,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            type: 'contact'
          }
        });

        if (adminEmailError) throw adminEmailError;
        
        // Send confirmation email to user
        const { data: userEmailData, error: userEmailError } = await supabase.functions.invoke('send-email', {
          body: {
            to: formData.email,
            subject: 'Thank you for contacting SEO Audit Tool',
            name: formData.name,
            type: 'notification'
          }
        });

        if (userEmailError) throw userEmailError;
        
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      }
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen w-full">
      <SEOHead
        title="Contact Us - SEO Audit Tool | Get in Touch"
        description="Contact the SEO Audit Tool team for inquiries, support, or to learn more about our SEO services. We're here to help improve your website's visibility and performance across the United States."
        canonicalPath="/contact"
        keywords="contact SEO audit tool, SEO services contact, SEO help, website optimization contact, US SEO services"
      />
      
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('contact_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-navy/70 mb-8">
              We provide SEO services nationwide across the United States
            </h2>
          </div>
        </div>
      </section>
      
      <section className="content-section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy">Get In Touch</h2>
              <p className="text-navy/70 mb-8">
                Have questions about our <Link to="/seo-services" className="text-teal hover:underline">SEO services</Link> or want to discuss your <Link to="/local-seo" className="text-teal hover:underline">local SEO strategy</Link>? Fill out the form below or contact us directly. Our team serves clients across the United States with <Link to="/keyword-generator-tool" className="text-teal hover:underline">specialized SEO solutions</Link>.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-teal/20 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Email Us</h3>
                    <p className="text-navy/70">Contact us through the form</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal/20 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Our Location</h3>
                    <p className="text-navy/70">Buffalo, NY, United States</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy p-6 rounded-xl text-navy">
                <h3 className="text-xl font-bold mb-4 text-navy">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM ET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 3:00 PM ET</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-navy">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link to="/google-rank-checker-tool" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Google Position Tracker</span>
                  </Link>
                  <Link to="/seo-buffalo" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Buffalo Search Engine Optimization</span>
                  </Link>
                  <Link to="/local-seo" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Local SEO Strategy</span>
                  </Link>
                  <Link to="/seo-services" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Enterprise SEO Solutions</span>
                  </Link>
                  <Link to="/blog-ideas-generator-tool" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Content Ideation Tools</span>
                  </Link>
                  <Link to="/sentence-rewriter-tool" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Content Optimization</span>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="glass-card bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-navy">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-navy font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-navy font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-navy font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-navy font-medium mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="SEO Services">SEO Services</option>
                      <option value="Local SEO">Local SEO</option>
                      <option value="Buffalo SEO">Buffalo SEO</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-navy font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal hover:bg-teal-light text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="w-full h-96 bg-navy-light flex items-center justify-center">
        <div className="text-center text-navy">
          <h3 className="text-2xl font-bold mb-4">Serving Clients Nationwide</h3>
          <p className="text-navy/70 max-w-2xl mx-auto px-4">
            From <Link to="/seo-buffalo" className="text-teal hover:underline">Buffalo SEO services</Link> to the West Coast, our <Link to="/seo-services" className="text-teal hover:underline">comprehensive SEO solutions</Link> help businesses across the United States improve their online visibility. Check out our <Link to="/keyword-generator-tool" className="text-teal hover:underline">keyword research tools</Link> and <Link to="/google-rank-checker-tool" className="text-teal hover:underline">SERP position tracker</Link> to boost your website's search engine performance.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/" className="bg-teal/20 hover:bg-teal/30 text-navy py-2 px-4 rounded-lg inline-flex items-center">
              <Search className="mr-2 h-5 w-5" /> Try Our Free Website Analyzer
            </Link>
            <Link to="/blog" className="bg-teal/20 hover:bg-teal/30 text-navy py-2 px-4 rounded-lg inline-flex items-center">
              <Book className="mr-2 h-5 w-5" /> Explore SEO Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
