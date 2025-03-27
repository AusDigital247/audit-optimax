
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Search, BarChart3, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-light py-3 border-b border-gray-200 shadow-sm">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart3 size={28} className="text-teal" />
              <span className="text-navy font-display font-bold text-xl">AUS Digital</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-teal transition-colors font-medium">
              {t('home')}
            </Link>
            <Link to="/seo-toronto" className="text-navy hover:text-teal transition-colors font-medium">
              {t('seo_toronto')}
            </Link>
            <Button asChild className="bg-teal hover:bg-teal-light text-white">
              <Link to="/" className="flex items-center gap-2">
                <Search size={16} />
                {t('analyze_button')}
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-3">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-navy hover:text-teal transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/seo-toronto" 
                className="text-navy hover:text-teal transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('seo_toronto')}
              </Link>
              <Button 
                asChild 
                className="bg-teal hover:bg-teal-light text-white w-full"
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
