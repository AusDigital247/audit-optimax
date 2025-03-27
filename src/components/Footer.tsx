
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { BarChart3, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <BarChart3 size={28} className="text-teal mr-2" />
              <span className="font-display font-bold text-xl">AUS Digital</span>
            </div>
            <p className="text-white/70 mb-4">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-teal transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-teal transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.385 4.486A13.94 13.94 0 011.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-teal transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quick_links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/70 hover:text-teal transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/seo-toronto" className="text-white/70 hover:text-teal transition-colors">
                  {t('seo_toronto')}
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('about_us')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('blog')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('services')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('seo_services')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('local_seo')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('content_marketing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('web_design')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  {t('ppc_management')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact_us')}</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-white/70">123 SEO Street, Toronto, ON M5V 2K6</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-white/70">(416) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-white/70">info@ausdigital.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              &copy; {currentYear} AUS Digital. {t('all_rights_reserved')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 text-sm hover:text-teal transition-colors">
                {t('privacy_policy')}
              </a>
              <a href="#" className="text-white/70 text-sm hover:text-teal transition-colors">
                {t('terms_conditions')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
