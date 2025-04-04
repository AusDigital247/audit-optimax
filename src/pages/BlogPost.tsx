
import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SeoStrategy2025 from '@/pages/BlogPosts/SeoStrategy2025';
import ImageSeo from '@/pages/BlogPosts/ImageSeo';
import YoutubeSeo from '@/pages/BlogPosts/YoutubeSeo';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Map slugs to components
  const postComponents: Record<string, React.ReactNode> = {
    'seo-strategy-2025': <SeoStrategy2025 />,
    'image-seo': <ImageSeo />,
    'youtube-seo': <YoutubeSeo />
  };
  
  // Fallback if slug doesn't match any post
  if (!slug || !postComponents[slug]) {
    return (
      <div className="min-h-screen">
        <SEOHead
          title="Blog Post Not Found | SEO Audit Tool"
          description="The blog post you're looking for couldn't be found."
          canonicalPath="/blog"
        />
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or may have been moved.</p>
          <a href="/blog" className="inline-block bg-teal text-white px-6 py-2 rounded">
            Return to Blog
          </a>
        </div>
      </div>
    );
  }
  
  return <>{postComponents[slug]}</>;
};

export default BlogPost;
