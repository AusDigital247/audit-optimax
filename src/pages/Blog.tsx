
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { CalendarIcon, User, Clock, ChevronRight, Search } from 'lucide-react';

const Blog = () => {
  const { t, language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'Blog - AUS Digital' : 'Blog - AUS Digital';
  }, [language]);
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2023",
      excerpt: "Learn the most effective SEO strategies that will boost your website's visibility and drive organic traffic in 2023.",
      author: "Sarah Johnson",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "SEO Tips",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Mobile-First Indexing",
      excerpt: "With Google's mobile-first indexing approach, learn how to ensure your website performs well on mobile devices.",
      author: "Michael Chen",
      date: "May 28, 2023",
      readTime: "6 min read",
      category: "Technical SEO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: 3,
      title: "The Complete Guide to Local SEO for Small Businesses",
      excerpt: "Discover how small businesses can leverage local SEO to attract more customers and outrank competitors in their area.",
      author: "Emily Rodriguez",
      date: "April 10, 2023",
      readTime: "10 min read",
      category: "Local SEO",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: 4,
      title: "Understanding Google's Core Web Vitals and Their Impact on SEO",
      excerpt: "A deep dive into Core Web Vitals, how they affect your search rankings, and practical tips to improve them.",
      author: "David Wilson",
      date: "March 22, 2023",
      readTime: "7 min read",
      category: "Technical SEO",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: 5,
      title: "The Role of Content Marketing in Modern SEO",
      excerpt: "How quality content drives SEO success and strategies for creating content that ranks well while engaging your audience.",
      author: "Sarah Johnson",
      date: "February 15, 2023",
      readTime: "9 min read",
      category: "Content Marketing",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?auto=format&fit=crop&w=600&h=400&q=80"
    },
    {
      id: 6,
      title: "Advanced Link Building Techniques That Still Work in 2023",
      excerpt: "Explore ethical and effective link building strategies that can help improve your website's authority and rankings.",
      author: "Michael Chen",
      date: "January 30, 2023",
      readTime: "8 min read",
      category: "Link Building",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400&q=80"
    }
  ];
  
  // Sample categories
  const categories = [
    { name: "SEO Tips", count: 12 },
    { name: "Technical SEO", count: 8 },
    { name: "Local SEO", count: 6 },
    { name: "Content Marketing", count: 10 },
    { name: "Link Building", count: 7 },
    { name: "Analytics", count: 5 }
  ];
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-16 md:py-24 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {t('blog_title')}
            </h1>
            <h2 className="text-xl md:text-2xl text-white/80 mb-8">
              {t('blog_subtitle')}
            </h2>
            
            <div className="relative max-w-2xl mx-auto mt-8">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 px-5 pl-12 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" size={20} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Section */}
      <section className="content-section-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8 text-navy">Latest Articles</h2>
              
              <div className="space-y-8">
                {blogPosts.map(post => (
                  <div key={post.id} className="glassmorphism-card bg-white rounded-xl overflow-hidden shadow-lg animated-card">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-xs font-medium px-2 py-1 bg-teal/10 text-teal rounded-full mr-2">{post.category}</span>
                          <span className="text-sm text-navy/60 flex items-center">
                            <Clock size={14} className="mr-1" /> {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-navy mb-2">{post.title}</h3>
                        <p className="text-navy/70 mb-4">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center mr-2">
                              <User size={14} className="text-navy/60" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-navy">{post.author}</p>
                              <p className="text-xs text-navy/60 flex items-center">
                                <CalendarIcon size={12} className="mr-1" /> {post.date}
                              </p>
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.id}`} className="text-teal font-medium flex items-center hover:text-teal-light transition-colors">
                            Read More <ChevronRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button className="btn-gradient">Load More Articles</button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="glassmorphism-card bg-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between py-2 border-b border-gray-100 text-navy/80 hover:text-teal transition-colors">
                        <span>{category.name}</span>
                        <span className="bg-navy/10 text-navy/70 text-xs font-medium px-2 py-1 rounded-full">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Posts */}
              <div className="glassmorphism-card bg-white p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-navy mb-4">Popular Posts</h3>
                <ul className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <li key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-navy font-medium line-clamp-2 mb-1">{post.title}</h4>
                        <p className="text-xs text-navy/60 flex items-center">
                          <CalendarIcon size={12} className="mr-1" /> {post.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Newsletter */}
              <div className="glassmorphism-card bg-navy p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-white/80 mb-4">Get the latest SEO tips and news delivered to your inbox.</p>
                
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full py-3 px-4 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <button type="submit" className="w-full bg-teal hover:bg-teal-light text-white font-medium py-3 px-4 rounded-lg transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
