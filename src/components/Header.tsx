
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, ChevronDown, Home, Users, Briefcase, FileText, Phone, Search, Settings } from 'lucide-react';

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setToolsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('home'), path: '/', icon: <Home size={18} /> },
    { name: t('about'), path: '/about', icon: <Users size={18} /> },
    { 
      name: t('services'), 
      path: '/services', 
      icon: <Briefcase size={18} />,
      dropdown: true,
      dropdownItems: [
        { name: 'SEO Services', path: '/seo-services' },
        { name: 'Local SEO', path: '/local-seo' }
      ]
    },
    { name: t('blog'), path: '/blog', icon: <FileText size={18} /> },
    { name: t('contact'), path: '/contact', icon: <Phone size={18} /> },
    { 
      name: 'Tools', 
      path: null, 
      icon: <Search size={18} />,
      dropdown: true,
      dropdownItems: [
        { name: 'Rank Checker', path: '/google-rank-checker-tool' },
        { name: 'Keyword Generator', path: '/keyword-generator-tool' },
        { name: 'Blog Ideas Generator', path: '/blog-ideas-generator' },
        { name: 'Paragraph Rewriter', path: '/paragraph-rewriter-tool' },
        { name: 'Sentence Rewriter', path: '/sentence-rewriter-tool' }
      ]
    },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> }
  ];

  const headerClass = `backdrop-blur-md fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
    isScrolled ? 'py-2 shadow-md bg-white/90 dark:bg-navy/90' : 'py-4 bg-white/50 dark:bg-navy/50'
  }`;
  
  const logoClass = `font-bold transition-all duration-300 ${
    isScrolled ? 'text-xl' : 'text-2xl'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className={`${logoClass} text-navy dark:text-white flex items-center`}>
          <img src="/logo.svg" alt="SEO Audit Tool" className="h-10 mr-2" />
          <span className="hidden sm:inline">
            <span className="text-teal">SEO</span> Audit Tool
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            !link.dropdown ? (
              <Link 
                key={index} 
                to={link.path || '#'} 
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-white/50 dark:hover:bg-navy-light/50 ${
                  location.pathname === link.path 
                    ? 'text-teal' 
                    : 'text-navy-dark dark:text-white'
                }`}
              >
                {link.icon && <span className="mr-1">{link.icon}</span>}
                {link.name}
              </Link>
            ) : (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => {
                  if (link.name === t('services')) setServicesDropdownOpen(true);
                  if (link.name === 'Tools') setToolsDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  if (link.name === t('services')) setServicesDropdownOpen(false);
                  if (link.name === 'Tools') setToolsDropdownOpen(false);
                }}
              >
                <button 
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center hover:bg-white/50 dark:hover:bg-navy-light/50 ${
                    (link.name === t('services') && servicesDropdownOpen) || 
                    (link.name === 'Tools' && toolsDropdownOpen)
                      ? 'text-teal' 
                      : 'text-navy-dark dark:text-white'
                  }`}
                  onClick={() => {
                    if (link.name === t('services')) setServicesDropdownOpen(!servicesDropdownOpen);
                    if (link.name === 'Tools') setToolsDropdownOpen(!toolsDropdownOpen);
                  }}
                >
                  {link.icon && <span className="mr-1">{link.icon}</span>}
                  {link.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                <div 
                  className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white dark:bg-navy-light overflow-hidden transition-all duration-200 ease-in-out origin-top-left z-50 ${
                    (link.name === t('services') && servicesDropdownOpen) || 
                    (link.name === 'Tools' && toolsDropdownOpen)
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-0 transform scale-95 pointer-events-none'
                  }`}
                >
                  <div className="py-1">
                    {link.dropdownItems?.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-navy-dark dark:text-white hover:bg-teal/10 dark:hover:bg-teal/20"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
          
          <Link to="/contact">
            <Button variant="default" className="ml-2 bg-teal hover:bg-teal-dark text-white">
              Get Free Audit
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden rounded-md p-2 inline-flex items-center justify-center text-navy dark:text-white hover:bg-teal/10 dark:hover:bg-teal/20 focus:outline-none"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-navy/95 shadow-lg">
          {navLinks.map((link, index) => (
            !link.dropdown ? (
              <Link
                key={index}
                to={link.path || '#'}
                className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                  location.pathname === link.path 
                    ? 'text-teal' 
                    : 'text-navy-dark dark:text-white'
                }`}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </Link>
            ) : (
              <div key={index} className="space-y-1">
                <button
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                    (link.name === t('services') && servicesDropdownOpen) || 
                    (link.name === 'Tools' && toolsDropdownOpen)
                      ? 'text-teal' 
                      : 'text-navy-dark dark:text-white'
                  }`}
                  onClick={() => {
                    if (link.name === t('services')) setServicesDropdownOpen(!servicesDropdownOpen);
                    if (link.name === 'Tools') setToolsDropdownOpen(!toolsDropdownOpen);
                  }}
                >
                  <span className="flex items-center">
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.name}
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${
                    (link.name === t('services') && servicesDropdownOpen) || 
                    (link.name === 'Tools' && toolsDropdownOpen) 
                      ? 'transform rotate-180' 
                      : ''
                  }`} />
                </button>
                
                <div className={`pl-5 space-y-1 ${
                  (link.name === t('services') && servicesDropdownOpen) || 
                  (link.name === 'Tools' && toolsDropdownOpen) 
                    ? 'block' 
                    : 'hidden'
                }`}>
                  {link.dropdownItems?.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-navy-dark dark:text-white hover:bg-teal/10 dark:hover:bg-teal/20"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}
          
          <Link to="/contact" className="block w-full mt-4">
            <Button variant="default" className="w-full bg-teal hover:bg-teal-dark text-white">
              Get Free Audit
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
