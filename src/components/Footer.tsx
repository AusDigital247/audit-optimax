
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Send, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy text-white w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">AUS Digital</h3>
            <p className="text-white/80 mb-4">
              We provide comprehensive SEO and digital marketing solutions to help businesses grow their online presence and increase revenue.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/seo" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> SEO Services
                </Link>
              </li>
              <li>
                <Link to="/services/local-seo" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Local SEO
                </Link>
              </li>
              <li>
                <Link to="/seo-toronto" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> SEO Toronto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">Get In Touch</h3>
            <p className="text-white/80">
              Feel free to contact us for any inquiries or questions about our services.
            </p>
            <Link to="/contact" className="mt-4 inline-block bg-teal/20 hover:bg-teal/30 transition-colors py-2 px-4 rounded-lg text-white flex items-center">
              <Send size={16} className="mr-2" /> Contact Us
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AUS Digital. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/60">
            <Link to="/terms" className="hover:text-teal transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
