
import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SeoStrategy2025 from '@/pages/BlogPosts/SeoStrategy2025';
import ImageSeo from '@/pages/BlogPosts/ImageSeo';
import YoutubeSeo from '@/pages/BlogPosts/YoutubeSeo';

interface BlogPostMetadata {
  title: string;
  description: string;
}

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Map slugs to components and their metadata
  const postComponents: Record<string, React.ReactNode> = {
    'seo-strategy-2025': <SeoStrategy2025 />,
    'image-seo': <ImageSeo />,
    'youtube-seo': <YoutubeSeo />
  };
  
  // Map slugs to metadata with unique descriptions
  const postMetadata: Record<string, BlogPostMetadata> = {
    'seo-strategy-2025': {
      title: "Effective SEO Strategy for 2025",
      description: "Discover cutting-edge SEO strategies for 2025 that will help your website outrank competitors and drive more targeted organic traffic."
    },
    'image-seo': {
      title: "Complete Guide to Image SEO",
      description: "Learn how to optimize images for better search visibility, faster loading times, and improved user experience with our comprehensive image SEO guide."
    },
    'youtube-seo': {
      title: "YouTube SEO Guide: Rank Your Videos Higher",
      description: "Boost your YouTube video rankings with proven optimization techniques for titles, descriptions, tags, and viewer engagement strategies."
    }
  };
  
  // Get metadata for current post
  const metadata = slug && postMetadata[slug] 
    ? postMetadata[slug] 
    : { 
        title: "Blog Post Not Found", 
        description: "The blog post you're looking for couldn't be found. Browse our other SEO articles and resources." 
      };
  
  // Set the canonical path explicitly
  const canonicalPath = slug ? `/blog/${slug}` : '/blog';
  
  // Fallback if slug doesn't match any post
  if (!slug || !postComponents[slug]) {
    return (
      <div className="min-h-screen">
        <SEOHead
          title={metadata.title}
          description={metadata.description}
          canonicalPath={canonicalPath}
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
  
  return (
    <>
      <SEOHead
        title={metadata.title}
        description={metadata.description}
        canonicalPath={canonicalPath}
        ogType="article"
      />
      {postComponents[slug]}
    </>
  );
};

export default BlogPost;
