import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, BarChart3, Menu, X, Globe, ChevronDown } from 'lucide-react';
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
              <span className="text-navy dark:text-white font-display font-bold text-xl">SEO AUDIT TOOL</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-5">
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
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
                SEO Tools <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/google-rank-checker-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Google Rank Checker Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/keyword-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Keyword Generator Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog-ideas-generator" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Blog Ideas Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/paragraph-rewriter-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Paragraph Rewriter Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sentence-rewriter-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Sentence Rewriter Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/grammar-checker-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Grammar Checker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conclusion-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Conclusion Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/paraphrasing-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Paraphrasing Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instagram-bio-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Instagram Bio Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instagram-hashtag-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Instagram Hashtag Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instagram-name-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Instagram Name Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/tiktok-hashtag-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    TikTok Hashtag Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/tiktok-username-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    TikTok Username Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/youtube-channel-description-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    YouTube Description Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/youtube-name-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    YouTube Name Generator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-navy dark:text-gray-200 hover:text-teal dark:hover:text-teal-light transition-colors font-medium">
                Content Tools <ChevronDown size={16} className="ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-navy-light border border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/grammar-checker-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Grammar Checker
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/conclusion-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Conclusion Generator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/paraphrasing-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Paraphrasing Tool
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instagram-bio-generator-tool" className="hover:bg-gray-100 dark:hover:bg-navy">
                    Instagram Bio Generator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
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

          <button 
            className="md:hidden p-2 rounded-md text-navy dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 mt-3">
            <nav className="flex flex-col space-y-4">
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
              
              <div className="py-2">
                <div className="font-medium text-navy dark:text-gray-200 mb-2">SEO Tools</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/google-rank-checker-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Google Rank Checker Tool
                  </Link>
                  <Link 
                    to="/keyword-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Keyword Generator Tool
                  </Link>
                  <Link 
                    to="/blog-ideas-generator" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog Ideas Generator
                  </Link>
                  <Link 
                    to="/paragraph-rewriter-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Paragraph Rewriter Tool
                  </Link>
                  <Link 
                    to="/sentence-rewriter-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sentence Rewriter Tool
                  </Link>
                  <Link 
                    to="/grammar-checker-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Grammar Checker
                  </Link>
                  <Link 
                    to="/conclusion-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Conclusion Generator
                  </Link>
                  <Link 
                    to="/paraphrasing-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Paraphrasing Tool
                  </Link>
                  <Link 
                    to="/instagram-bio-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instagram Bio Generator
                  </Link>
                  <Link 
                    to="/instagram-hashtag-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instagram Hashtag Generator
                  </Link>
                  <Link 
                    to="/instagram-name-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instagram Name Generator
                  </Link>
                  <Link 
                    to="/tiktok-hashtag-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    TikTok Hashtag Generator
                  </Link>
                  <Link 
                    to="/tiktok-username-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    TikTok Username Generator
                  </Link>
                  <Link 
                    to="/youtube-channel-description-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    YouTube Description Generator
                  </Link>
                  <Link 
                    to="/youtube-name-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    YouTube Name Generator
                  </Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="font-medium text-navy dark:text-gray-200 mb-2">Content Tools</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/grammar-checker-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Grammar Checker
                  </Link>
                  <Link 
                    to="/conclusion-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Conclusion Generator
                  </Link>
                  <Link 
                    to="/paraphrasing-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Paraphrasing Tool
                  </Link>
                  <Link 
                    to="/instagram-bio-generator-tool" 
                    className="block text-navy/80 dark:text-gray-300 hover:text-teal dark:hover:text-teal-light"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Instagram Bio Generator
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
