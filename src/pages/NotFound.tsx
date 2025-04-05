
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search, MapPin, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy px-4">
      <SEOHead
        title="Page Not Found | 404 Error"
        description="Sorry, the page you requested could not be found. Navigate to our homepage or try one of our SEO tools to find what you're looking for."
        keywords="404, page not found, error page, missing page"
      />
      <div className="max-w-md w-full text-center bg-white dark:bg-navy-light shadow-lg rounded-lg p-8">
        <h1 className="text-6xl font-bold mb-4 text-teal">404</h1>
        <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link to="/" className="w-full">
            <Button className="w-full bg-teal hover:bg-teal-light text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/google-rank-checker-tool" className="w-full">
            <Button variant="outline" className="w-full border-teal text-teal hover:bg-teal/10">
              <Search className="mr-2 h-4 w-4" />
              Try Our Rank Checker Tool
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            className="w-full text-navy dark:text-gray-200"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Looking for something specific? Check out our
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link to="/sitemap.xml" className="text-teal hover:underline text-sm">
              Sitemap
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/blog" className="text-teal hover:underline text-sm">
              Blog
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/seo-buffalo" className="text-teal hover:underline text-sm">
              Buffalo SEO
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="text-teal hover:underline text-sm">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Link to="/local-seo" className="flex items-center justify-center gap-1 text-sm p-2 bg-gray-100 dark:bg-navy rounded-lg hover:bg-teal/10 transition-colors">
            <MapPin className="h-3 w-3 text-teal" />
            <span className="text-navy dark:text-white">Local SEO</span>
          </Link>
          <Link to="/seo-services" className="flex items-center justify-center gap-1 text-sm p-2 bg-gray-100 dark:bg-navy rounded-lg hover:bg-teal/10 transition-colors">
            <Search className="h-3 w-3 text-teal" />
            <span className="text-navy dark:text-white">SEO Services</span>
          </Link>
          <Link to="/blog-ideas-generator-tool" className="flex items-center justify-center gap-1 text-sm p-2 bg-gray-100 dark:bg-navy rounded-lg hover:bg-teal/10 transition-colors">
            <Book className="h-3 w-3 text-teal" />
            <span className="text-navy dark:text-white">Blog Ideas</span>
          </Link>
          <Link to="/bulk-anchor-link-generator-tool" className="flex items-center justify-center gap-1 text-sm p-2 bg-gray-100 dark:bg-navy rounded-lg hover:bg-teal/10 transition-colors">
            <Search className="h-3 w-3 text-teal" />
            <span className="text-navy dark:text-white">Anchor Links</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
