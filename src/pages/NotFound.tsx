
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-navy-light px-4">
      <SEOHead
        title="Page Not Found | 404 Error | SEO Audit Tool"
        description="The page you are looking for doesn't exist or has been moved. Return to our homepage or try one of our SEO tools."
        keywords="404, page not found, error page, missing page"
      />
      <div className="max-w-md w-full text-center bg-white dark:bg-navy shadow-lg rounded-lg p-8">
        <h1 className="text-6xl font-bold mb-4 text-teal">404</h1>
        <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link to="/" className="w-full">
            <Button className="w-full bg-teal hover:bg-teal-dark text-white">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <Link to="/google-rank-checker-tool" className="w-full">
            <Button variant="outline" className="w-full">
              <Search className="mr-2 h-4 w-4" />
              Try Our Rank Checker Tool
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Looking for something specific? Check out our 
            <Link to="/sitemap.xml" className="text-teal hover:underline mx-1">
              sitemap
            </Link>
            or 
            <Link to="/contact" className="text-teal hover:underline mx-1">
              contact us
            </Link>
            for help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
