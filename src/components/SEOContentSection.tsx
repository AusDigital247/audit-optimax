
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentSectionProps {
  className?: string;
}

const SEOContentSection: React.FC<ContentSectionProps> = ({ className }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const fadeInStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className={cn("w-full", className)}>
      {/* Hero section with light background */}
      <section className="content-section-light">
        <motion.div 
          className="container-custom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-navy text-center">
            Comprehensive <span className="text-teal">SEO Audit Tool</span> for Your Website
          </h1>
          <p className="text-lg md:text-xl text-navy-light max-w-3xl mx-auto text-center mb-8">
            Analyze your website's SEO health, uncover critical issues, and get actionable recommendations to improve your search engine rankings.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button size="lg" className="animate-pulse-glow">
              Start Free SEO Audit
            </Button>
            <Button variant="outline" size="lg">
              Learn More About SEO
            </Button>
          </div>
          <div className="flex justify-center space-x-6 text-sm text-navy-light">
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-teal" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-teal" />
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-1 text-teal" />
              <span>Instant Results</span>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Main content section with dark background */}
      <section className="content-section-alt">
        <div className="container-custom">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center gradient-text">
              Why You Need a Website SEO Analysis
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
              In today's competitive digital landscape, a strong SEO strategy is essential for online visibility. Our free SEO checker helps you identify what's working and what needs improvement.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={fadeInStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-3 text-teal">Comprehensive Assessment</h3>
              <p className="text-gray-300">
                Our <span className="text-highlight">free SEO checker</span> evaluates over 100 on-page and technical SEO factors that impact your search engine rankings. From meta tags to content quality, we analyze every aspect of your website's SEO health.
              </p>
            </motion.div>
            
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-3 text-teal">Keyword Optimization</h3>
              <p className="text-gray-300">
                Discover how well your content is optimized for your target keywords. Our <span className="text-highlight">SEO audit tool</span> checks keyword presence in critical locations and provides recommendations for better content relevance.
              </p>
            </motion.div>
            
            <motion.div className="feature-card" variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-3 text-teal">Actionable Insights</h3>
              <p className="text-gray-300">
                Get clear, prioritized recommendations to fix SEO issues. Our <span className="text-highlight">website SEO analysis</span> tool doesn't just identify problems—it provides practical solutions to improve your search visibility.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center gradient-text">
              What Our SEO Audit Tool Checks
            </h2>
            
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal">Technical SEO Factors</h3>
              <p className="mb-4 text-gray-300">
                Technical SEO forms the foundation of your website's search performance. Our <span className="text-highlight">SEO analyzer</span> examines critical technical elements that search engines use to crawl and index your site:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Page loading speed and Core Web Vitals metrics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Mobile-friendliness and responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">SSL certificate implementation and security</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">XML sitemap and robots.txt configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">URL structure and canonical tags</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Schema markup implementation</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal">On-Page SEO Elements</h3>
              <p className="mb-4 text-gray-300">
                On-page SEO factors directly influence how search engines understand and rank your content. Our <span className="text-highlight">free SEO audit</span> thoroughly evaluates:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Title tags and meta descriptions optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Heading structure (H1, H2, H3) and content organization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Keyword usage and content relevance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Image optimization with alt text</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Internal linking structure and anchor text</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Content quality, length, and readability</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-teal">User Experience & Content Quality</h3>
              <p className="mb-4 text-gray-300">
                Modern SEO goes beyond technical factors—it prioritizes user experience and content quality. Our <span className="text-highlight">website SEO analysis tool</span> evaluates:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Content relevance to search intent and target keywords</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Page layout and content structure</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Mobile usability and responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Page load speed and interactivity</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Accessibility features and implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Content freshness and update frequency</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 gradient-text">
              Start Your Free SEO Audit Today
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Don't leave your website's search performance to chance. Use our comprehensive <span className="text-highlight">free SEO checker</span> to identify issues and opportunities, and take your first step toward better search rankings.
            </p>
            <Button size="lg" className="animate-pulse-glow">
              Analyze My Website
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Additional resources section */}
      <section className="content-section-light">
        <div className="container-custom">
          <motion.div
            className="text-center mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-navy">
              SEO Resources & Learning
            </h2>
            <p className="text-lg text-navy-light max-w-3xl mx-auto">
              Explore our collection of SEO guides and resources to improve your search engine optimization strategy.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={fadeInStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a 
              href="#" 
              className="glass-light p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2 text-navy flex items-center">
                SEO Beginner's Guide
                <ExternalLink className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-navy-light">
                Learn the fundamentals of search engine optimization and how to implement them on your website.
              </p>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="glass-light p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2 text-navy flex items-center">
                Keyword Research Tips
                <ExternalLink className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-navy-light">
                Discover effective strategies for finding and targeting the right keywords for your business.
              </p>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="glass-light p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold mb-2 text-navy flex items-center">
                Technical SEO Checklist
                <ExternalLink className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-navy-light">
                A comprehensive checklist to ensure your website meets all technical SEO requirements.
              </p>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOContentSection;
