
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, PenTool, Lightbulb, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogCard = ({ 
  title, 
  description, 
  date, 
  readTime, 
  image, 
  slug, 
  icon 
}: { 
  title: string; 
  description: string; 
  date: string; 
  readTime: string; 
  image: string; 
  slug: string; 
  icon: React.ReactNode;
}) => {
  return (
    <Link to={`/blog/${slug}`} className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md h-full flex flex-col">
        <div className="relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="absolute top-4 left-4 bg-navy/80 p-2 rounded-full">
            {icon}
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center text-sm text-navy/60 mb-3">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
            {title}
          </h3>
          
          <p className="text-navy/70 mb-4 flex-grow">
            {description}
          </p>
          
          <div className="mt-auto">
            <span className="text-teal font-medium group-hover:text-teal-light transition-colors flex items-center">
              Read more <ChevronRight className="ml-1 w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: "Advanced SEO Strategies for 2025",
      description: "Discover cutting-edge SEO strategies that will dominate in 2025, including AI integration, voice search optimization, and user experience signals.",
      date: "May 2, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      slug: "seo-strategy-2025",
      icon: <Lightbulb className="h-5 w-5 text-white" />
    },
    {
      title: "Advanced Image SEO Techniques",
      description: "Learn how to optimize images for better search visibility with these advanced techniques and best practices for image SEO in 2025.",
      date: "May 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      slug: "image-seo",
      icon: <PenTool className="h-5 w-5 text-white" />
    },
    {
      title: "YouTube SEO: The Complete Guide",
      description: "Master YouTube SEO with our comprehensive guide. Learn proven techniques to rank videos higher and get more views in 2025.",
      date: "May 15, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      slug: "youtube-seo",
      icon: <Youtube className="h-5 w-5 text-white" />
    }
  ];
  
  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>SEO Blog | Expert SEO Tips & Guides | SEO Audit Tool</title>
        <meta name="description" content="Explore our collection of expert SEO guides, tips, and strategies to improve your website's search engine visibility and drive more organic traffic." />
        <meta name="keywords" content="SEO blog, SEO tips, SEO guides, search engine optimization, SEO strategies, digital marketing blog" />
        
        <meta property="og:title" content="SEO Blog | Expert SEO Tips & Guides | SEO Audit Tool" />
        <meta property="og:description" content="Explore our collection of expert SEO guides, tips, and strategies to improve your website's search engine visibility and drive more organic traffic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/seo-blog-header.jpg" />
        
        <meta name="twitter:title" content="SEO Blog | Expert SEO Tips & Guides | SEO Audit Tool" />
        <meta name="twitter:description" content="Explore our collection of expert SEO guides, tips, and strategies to improve your website's search engine visibility and drive more organic traffic." />
        
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              SEO Blog & Resources
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              Expert insights to improve your website's search visibility
            </h2>
            <Link to="/">
              <Button className="bg-teal hover:bg-teal-dark text-white">
                <Search className="w-4 h-4 mr-2" /> Try Our SEO Audit Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Latest SEO Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-navy mb-6">Want to improve your website's SEO?</h2>
            <p className="text-navy/70 max-w-2xl mx-auto mb-8">
              Try our free SEO audit tool to get a comprehensive analysis of your website's current performance and actionable recommendations for improvement.
            </p>
            <Link to="/">
              <Button className="bg-teal hover:bg-teal-dark text-white">
                <Search className="w-4 h-4 mr-2" /> Get Your Free SEO Analysis
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* SEO Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Our SEO Services</h2>
            <p className="text-navy/70">
              Beyond our free resources, we offer professional SEO services to help your business achieve sustainable growth through search.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services/seo" className="group">
              <div className="p-6 border border-gray-200 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">SEO Services</h3>
                <p className="text-navy/70">Comprehensive search engine optimization solutions for businesses of all sizes.</p>
              </div>
            </Link>
            
            <Link to="/services/local-seo" className="group">
              <div className="p-6 border border-gray-200 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">Local SEO</h3>
                <p className="text-navy/70">Specialized strategies to help your business dominate local search results.</p>
              </div>
            </Link>
            
            <Link to="/contact" className="group">
              <div className="p-6 border border-gray-200 rounded-xl text-center transition-all group-hover:border-teal group-hover:shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">Get a Custom Quote</h3>
                <p className="text-navy/70">Contact us for a personalized SEO strategy tailored to your specific business goals.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
