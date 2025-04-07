
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Search } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface ToolPageLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  relatedTools?: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
}

/**
 * Specialized layout for SEO tool pages
 * Includes proper H1 tag with primary keyword and SEO-optimized structure
 */
const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  relatedTools = []
}) => {
  return (
    <>
      <SEOHead 
        title={title}
        description={description}
        keywords={keywords}
      />
      
      {/* Hero section with dark theme - Ensuring H1 tag is present with primary keyword */}
      <div className="bg-gradient-to-b from-navy to-navy-light pt-12 pb-16 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center py-1 px-4 bg-teal/20 backdrop-blur-sm rounded-full mb-4">
              <Zap className="h-4 w-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">SEO Tools</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-display">
              {title}
            </h1>
            
            <p className="text-white text-lg mb-8 font-body">
              {description}
            </p>
            
            {/* Internal linking to home for SEO benefit */}
            <p className="text-sm text-white/80">
              Part of our complete <Link to="/" className="text-teal-light hover:underline">SEO Audit Tools</Link> suite for 
              website optimization and <Link to="/" className="text-teal-light hover:underline">SEO analysis</Link>
            </p>
          </div>
        </div>
      </div>
      
      {/* Content section with improved contrast for both light/dark themes */}
      <div className="bg-light-bg dark:bg-navy-light py-10 lg:py-16 w-full">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 dark:bg-navy/60 p-6 md:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-white/10 backdrop-blur-sm">
              {children}
            </div>
            
            {/* Related tools section - limited to max 2 internal links with improved visibility */}
            {relatedTools && relatedTools.length > 0 && (
              <div className="mt-12 md:mt-16">
                <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white font-display">Related SEO Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedTools.slice(0, 2).map((tool, index) => (
                    <div key={index} className="bg-white/80 dark:bg-navy/50 p-5 rounded-lg border border-gray-200 dark:border-white/10 hover:shadow-md transition-all backdrop-blur-sm">
                      <h3 className="text-lg font-semibold text-navy dark:text-white mb-2 font-display">{tool.name}</h3>
                      {tool.description && (
                        <p className="text-navy/80 dark:text-white/80 font-body text-sm mb-3">{tool.description}</p>
                      )}
                      <Link 
                        to={tool.path} 
                        className="inline-flex items-center text-teal dark:text-teal-light text-sm hover:underline font-body"
                      >
                        Try this tool <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA section with improved visibility and SEO links back to home */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-teal/10 to-teal/20 dark:from-navy/70 dark:to-navy-light/90 p-6 rounded-lg border border-teal/30 dark:border-white/10 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 text-navy dark:text-white font-display">Need More Comprehensive SEO Analysis?</h3>
                <p className="text-navy/80 dark:text-white/80 font-body mb-4">
                  Run a full <Link to="/" className="text-teal hover:underline">website SEO audit</Link> to identify all optimization opportunities at once.
                </p>
                <Link 
                  to="/"
                  className="btn-primary inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white py-2 px-4 rounded-md transition-colors"
                >
                  <Search className="h-4 w-4" />
                  Start Free SEO Audit
                </Link>
                <p className="text-navy/60 dark:text-white/60 text-sm mt-3">
                  Our <Link to="/" className="text-teal/80 hover:underline">SEO site checkup</Link> provides actionable insights to improve your search rankings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolPageLayout;
