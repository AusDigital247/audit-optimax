
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
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2 text-white">
              <span className="text-teal-light">SEO Audit Tool</span>
            </h3>
            <p className="text-white/80 dark:text-white/80 mb-4">
              We provide comprehensive <Link to="/seo-services" className="text-teal-light hover:underline">SEO audit solutions</Link> and <Link to="/local-seo" className="text-teal-light hover:underline">digital marketing strategies</Link> to help businesses improve their online visibility.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-teal-light transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> SEO Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Contact Our SEO Team
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> About Our SEO Services
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2 text-white">SEO Services Locations</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/seo-buffalo" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Buffalo SEO Experts
                </Link>
              </li>
              <li>
                <Link to="/seo-toronto" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Toronto Optimization
                </Link>
              </li>
              <li>
                <Link to="/seo-vancouver" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Vancouver SEO
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-teal/30 pb-2 text-white">SEO Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/google-rank-checker-tool" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> SERP Position Tracker
                </Link>
              </li>
              <li>
                <Link to="/keyword-generator-tool" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> Keyword Research Tool
                </Link>
              </li>
              <li>
                <Link to="/tiktok-username-generator" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> TikTok Username Generator
                </Link>
              </li>
              <li>
                <Link to="/youtube-name-generator" className="text-white/80 hover:text-teal-light transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" /> YouTube Name Generator
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="mt-4 inline-block bg-teal/20 hover:bg-teal/30 dark:bg-teal/10 dark:hover:bg-teal/20 transition-colors py-2 px-4 rounded-lg text-white flex items-center">
              <Send size={16} className="mr-2" /> Contact Our SEO Specialists
            </Link>
          </div>
        </div>
        
        <div className="pt-6 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SEO Audit Tool. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-white/60">
            <Link to="/terms-conditions" className="hover:text-teal-light transition-colors">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-teal-light transition-colors">Privacy Policy</Link>
            <Link to="/sitemap.xml" target="_blank" className="hover:text-teal-light transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
