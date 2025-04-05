
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
  const [emailMethod, setEmailMethod] = useState<'supabase' | 'emailjs'>('supabase');
  const [emailJSConfig, setEmailJSConfig] = useState({
    serviceId: '',
    templateId: '',
    userId: '',
    isConfigured: false
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
      setEmailMethod('emailjs');
    }
  }, [language]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleEmailJSConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailJSConfig(prev => ({ ...prev, [name]: value }));
  };
  
  const saveEmailJSConfig = () => {
    const { serviceId, templateId, userId } = emailJSConfig;
    
    if (serviceId && templateId && userId) {
      localStorage.setItem('emailjs_service_id', serviceId);
      localStorage.setItem('emailjs_template_id', templateId);
      localStorage.setItem('emailjs_user_id', userId);
      
      setEmailJSConfig(prev => ({ ...prev, isConfigured: true }));
      setEmailMethod('emailjs');
      
      toast({
        title: "EmailJS Configured",
        description: "Your EmailJS configuration has been saved.",
      });
    } else {
      toast({
        title: "Configuration Error",
        description: "Please fill in all EmailJS fields.",
        variant: "destructive",
      });
    }
  };
  
  const clearEmailJSConfig = () => {
    localStorage.removeItem('emailjs_service_id');
    localStorage.removeItem('emailjs_template_id');
    localStorage.removeItem('emailjs_user_id');
    
    setEmailJSConfig({
      serviceId: '',
      templateId: '',
      userId: '',
      isConfigured: false
    });
    
    setEmailMethod('supabase');
    
    toast({
      title: "EmailJS Configuration Cleared",
      description: "Your EmailJS configuration has been removed.",
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (emailMethod === 'emailjs' && emailJSConfig.isConfigured) {
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
        // Send email using Supabase function
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
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
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
                Have questions about our services or want to discuss your project? Fill out the form below or contact us directly. Our team serves clients across the United States with specialized SEO solutions.
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
              
              <div className="bg-navy p-6 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
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
                    <span>Google Rank Checker</span>
                  </Link>
                  <Link to="/seo-buffalo" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Buffalo SEO Services</span>
                  </Link>
                  <Link to="/local-seo" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Local SEO Services</span>
                  </Link>
                  <Link to="/seo-services" className="flex items-center gap-2 text-navy/80 hover:text-teal transition-colors">
                    <ArrowRight className="h-4 w-4 text-teal" />
                    <span>Professional SEO Services</span>
                  </Link>
                </div>
              </div>
              
              {/* EmailJS Configuration Section */}
              <div className="mt-8 p-6 border border-gray-200 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-navy">Email Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setEmailMethod('supabase')}
                      className={`px-4 py-2 rounded-md ${emailMethod === 'supabase' ? 'bg-teal text-white' : 'bg-gray-100 text-navy'}`}
                    >
                      Supabase
                    </button>
                    <button 
                      onClick={() => setEmailMethod('emailjs')}
                      className={`px-4 py-2 rounded-md ${emailMethod === 'emailjs' ? 'bg-teal text-white' : 'bg-gray-100 text-navy'}`}
                    >
                      EmailJS
                    </button>
                  </div>
                  
                  {emailMethod === 'emailjs' && !emailJSConfig.isConfigured ? (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <label htmlFor="serviceId" className="block text-navy font-medium mb-1">Service ID</label>
                        <input
                          type="text"
                          id="serviceId"
                          name="serviceId"
                          value={emailJSConfig.serviceId}
                          onChange={handleEmailJSConfigChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="EmailJS Service ID"
                        />
                      </div>
                      <div>
                        <label htmlFor="templateId" className="block text-navy font-medium mb-1">Template ID</label>
                        <input
                          type="text"
                          id="templateId"
                          name="templateId"
                          value={emailJSConfig.templateId}
                          onChange={handleEmailJSConfigChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="EmailJS Template ID"
                        />
                      </div>
                      <div>
                        <label htmlFor="userId" className="block text-navy font-medium mb-1">User ID (Public Key)</label>
                        <input
                          type="text"
                          id="userId"
                          name="userId"
                          value={emailJSConfig.userId}
                          onChange={handleEmailJSConfigChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                          placeholder="EmailJS User ID"
                        />
                      </div>
                      <button
                        onClick={saveEmailJSConfig}
                        className="bg-teal text-white px-4 py-2 rounded-md"
                      >
                        Save EmailJS Configuration
                      </button>
                    </div>
                  ) : emailMethod === 'emailjs' && emailJSConfig.isConfigured ? (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-navy mb-2">EmailJS is configured and will be used to send contact form messages.</p>
                      <button
                        onClick={clearEmailJSConfig}
                        className="text-red-500 underline text-sm"
                      >
                        Clear EmailJS configuration
                      </button>
                    </div>
                  ) : null}
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
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Serving Clients Nationwide</h3>
          <p className="text-white/70 max-w-2xl mx-auto px-4">
            From <Link to="/seo-buffalo" className="text-teal hover:underline">Buffalo</Link> to the West Coast, our SEO services help businesses across the United States improve their online visibility and attract more customers. Check out our <Link to="/google-rank-checker-tool" className="text-teal hover:underline">rank checker tool</Link> to see where your website stands in search results.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/" className="bg-teal/20 hover:bg-teal/30 text-white py-2 px-4 rounded-lg inline-flex items-center">
              <Search className="mr-2 h-5 w-5" /> Try Our SEO Audit Tool
            </Link>
            <Link to="/blog" className="bg-teal/20 hover:bg-teal/30 text-white py-2 px-4 rounded-lg inline-flex items-center">
              <Book className="mr-2 h-5 w-5" /> Read SEO Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
