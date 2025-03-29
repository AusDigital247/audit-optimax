
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, BarChart3, Menu, X, Globe, ChevronDown, Tool } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-light dark:glass-dark py-3 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart3 size={28} className="text-teal dark:text-teal-light" />
              <span className="text-navy dark:text-white font-display font-bold text-xl">AUS Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-5">
            <Link to="/" className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
              {t('home')}
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
                Services <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="hover:bg-gray-100 dark:hover:bg-navy">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/seo" className="hover:bg-gray-100 dark:hover:bg-navy">
                    SEO Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/services/local-seo" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Local SEO
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* SEO Tools Dropdown - NEW */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
                SEO Tools <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/rank-checker" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Rank Checker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/keyword-generator" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Keyword Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog-content-generator" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Blog Content Generator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Locations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
                Locations <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/seo-toronto" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Toronto SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo-ottawa" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Ottawa SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo-kitchener" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Kitchener SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo-london" className="hover:bg-gray-100 dark:hover:bg-navy">
                    London SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo-vancouver" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Vancouver SEO
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/seo-buffalo" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Buffalo SEO
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/blog" className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
              Blog
            </Link>
            
            <Link to="/about" className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
              About
            </Link>
            
            <Link to="/contact" className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
              Contact
            </Link>
            
            <Button asChild variant="default" className="bg-teal hover:bg-teal-light text-white dark:bg-gradient-to-r dark:from-teal dark:to-teal-light dark:hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300">
              <Link to="/" className="flex items-center gap-2">
                <Search size={16} />
                {t('analyze_button')}
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-navy dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 mt-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              
              <div className="py-2">
                <div className="font-medium text-navy dark:text-gray-200 mb-2">Services</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/services/seo" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    SEO Services
                  </Link>
                  <Link 
                    to="/services/local-seo" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Local SEO
                  </Link>
                </div>
              </div>
              
              {/* SEO Tools Section - NEW for Mobile */}
              <div className="py-2">
                <div className="font-medium text-navy dark:text-gray-200 mb-2">SEO Tools</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/rank-checker" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rank Checker
                  </Link>
                  <Link 
                    to="/keyword-generator" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Keyword Generator
                  </Link>
                  <Link 
                    to="/blog-content-generator" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog Content Generator
                  </Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="font-medium text-navy dark:text-gray-200 mb-2">Locations</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/seo-toronto" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Toronto SEO
                  </Link>
                  <Link 
                    to="/seo-ottawa" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Ottawa SEO
                  </Link>
                  <Link 
                    to="/seo-kitchener" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kitchener SEO
                  </Link>
                  <Link 
                    to="/seo-london" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    London SEO
                  </Link>
                  <Link 
                    to="/seo-vancouver" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Vancouver SEO
                  </Link>
                  <Link 
                    to="/seo-buffalo" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Buffalo SEO
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/blog" 
                className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/about" 
                className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/contact" 
                className="text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Button 
                asChild 
                variant="default"
                className="bg-teal hover:bg-teal-light text-white dark:bg-gradient-to-r dark:from-teal dark:to-teal-light dark:hover:opacity-90 shadow-md hover:shadow-lg transition-all duration-300 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link to="/" className="flex items-center justify-center gap-2">
                  <Search size={16} />
                  {t('analyze_button')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
