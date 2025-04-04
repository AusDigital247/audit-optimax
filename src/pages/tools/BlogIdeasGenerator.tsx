
import React from 'react';
import SEOHead from '@/components/SEOHead';
import BlogIdeasGeneratorPage from '@/pages/BlogIdeasGenerator';

const BlogIdeasGenerator: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Blog Ideas Generator Tool | Create SEO-Optimized Content Ideas"
        description="Generate creative and SEO-optimized blog ideas with our free tool. Perfect for content creators looking for topic inspiration."
        canonicalPath="/blog-ideas-generator"
        keywords="blog ideas generator, content ideas, blog topics, SEO content, article ideas"
      />
      <BlogIdeasGeneratorPage />
    </div>
  );
};

export default BlogIdeasGenerator;
