
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import BlogIdeasGenerator from '@/pages/BlogIdeasGenerator';

const BlogIdeasGeneratorPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog Ideas Generator Tool | Content Inspiration for Writers"
        description="Generate creative and engaging blog topic ideas with our free blog ideas generator. Perfect for content creators, marketers, and bloggers needing inspiration."
        keywords="blog ideas generator, blog topics, content ideas, blogging inspiration, article ideas, blog titles, blog content inspiration"
      />
      
      <BlogIdeasGenerator />
    </div>
  );
};

export default BlogIdeasGeneratorPage;
