
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Twitter, Instagram, Linkedin, Globe, Send, MapPin, ArrowRight, Search, CheckCircle, Zap, Lightbulb } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy text-white dark:bg-gradient-to-b dark:from-navy-light dark:to-navy w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">
              <span className="text-teal dark:text-teal-light">SEO Audit Tool</span>
              <span className="text-white text-sm ml-1">by AUS Digital</span>
            </h3>
            <p className="text-white/80 mb-4">
              We provide comprehensive SEO audit tools and digital marketing solutions to help businesses grow their online presence and increase revenue through proven search engine optimization strategies.
            </p>
            <Link to="/" className="inline-flex items-center px-4 py-2 mb-4 bg-teal/20 hover:bg-teal/30 dark:bg-teal/10 dark:hover:bg-teal/20 rounded-lg transition-all duration-300 text-white group">
              <Search size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
              Free SEO Analysis Tool
            </Link>
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
                  <ArrowRight size={14} className="mr-2" /> SEO Audit Tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Our SEO Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Professional SEO Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> SEO Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact SEO Experts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">Main Pages</h3>
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
                  <ArrowRight size={14} className="mr-2" /> Toronto SEO
                </Link>
              </li>
              <li>
                <Link to="/seo-vancouver" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Vancouver SEO
                </Link>
              </li>
              <li>
                <Link to="/seo-ottawa" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Ottawa SEO
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sitemap.xml" target="_blank" className="text-white/80 hover:text-teal transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Sitemap
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="mt-4 inline-block bg-teal/20 hover:bg-teal/30 dark:bg-teal/10 dark:hover:bg-teal/20 transition-colors py-2 px-4 rounded-lg text-white flex items-center">
              <Send size={16} className="mr-2" /> Contact Our SEO Team
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SEO Audit Tool by AUS Digital. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/60">
            <Link to="/terms" className="hover:text-teal transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/sitemap.xml" target="_blank" className="hover:text-teal transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
