
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import YouTubeNameGenerator from '../YouTubeNameGenerator';

const YouTubeNameGeneratorPage = () => {
  const relatedTools = [
    {
      name: "YouTube Channel Description Generator",
      path: "/youtube-channel-description-generator",
      description: "Create SEO-optimized descriptions for your channel"
    },
    {
      name: "TikTok Username Generator",
      path: "/tiktok-username-generator",
      description: "Generate catchy usernames for TikTok"
    },
    {
      name: "Keyword Generator Tool",
      path: "/keyword-generator-tool",
      description: "Find keywords to optimize your videos"
    }
  ];
  
  return (
    <ToolPageLayout
      title="YouTube Channel Name Generator"
      description="Generate creative, memorable, and SEO-friendly YouTube channel names. Find the perfect name to grow your audience and stand out from the competition."
      keywords="YouTube name generator, channel name ideas, YouTube branding, content creator tools, YouTube channel creator"
      relatedTools={relatedTools}
    >
      <YouTubeNameGenerator />
    </ToolPageLayout>
  );
};

export default YouTubeNameGeneratorPage;
