
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import TikTokUsernameGenerator from '../TikTokUsernameGenerator';

const TikTokUsernameGeneratorPage = () => {
  const relatedTools = [
    {
      name: "TikTok Hashtag Generator",
      path: "/tiktok-hashtag-generator",
      description: "Find trending hashtags for your TikTok content"
    },
    {
      name: "YouTube Name Generator",
      path: "/youtube-name-generator",
      description: "Create the perfect name for your YouTube channel"
    },
    {
      name: "Blog Ideas Generator",
      path: "/blog-ideas-generator-tool",
      description: "Generate engaging blog topics for your audience"
    }
  ];
  
  return (
    <ToolPageLayout
      title="TikTok Username Generator"
      description="Create catchy, memorable TikTok usernames that help you stand out and attract followers. Generate unique handles for your TikTok content."
      keywords="TikTok username, social media branding, TikTok handle, username generator, TikTok account"
      relatedTools={relatedTools}
    >
      <TikTokUsernameGenerator />
    </ToolPageLayout>
  );
};

export default TikTokUsernameGeneratorPage;
