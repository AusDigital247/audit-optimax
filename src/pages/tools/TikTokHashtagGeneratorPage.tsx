
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import TikTokHashtagGenerator from '../TikTokHashtagGenerator';

const TikTokHashtagGeneratorPage = () => {
  // Limit to just 2 related tools for balanced internal linking
  const relatedTools = [
    {
      name: "TikTok Username Generator",
      path: "/tiktok-username-generator",
      description: "Create a memorable handle for your TikTok account"
    },
    {
      name: "Keyword Generator Tool",
      path: "/keyword-generator-tool",
      description: "Find trending keywords for your content"
    }
  ];
  
  return (
    <ToolPageLayout
      title="TikTok Hashtag Generator"
      description="Generate trending TikTok hashtags to boost your video views and reach your target audience. Find the perfect hashtag mix to increase engagement."
      keywords="TikTok hashtag generator, trending hashtags, TikTok marketing, viral TikTok, social media growth"
      relatedTools={relatedTools}
    >
      <TikTokHashtagGenerator />
    </ToolPageLayout>
  );
};

export default TikTokHashtagGeneratorPage;
