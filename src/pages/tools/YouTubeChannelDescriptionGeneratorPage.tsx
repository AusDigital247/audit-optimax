
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import YouTubeChannelDescriptionGenerator from '../YouTubeChannelDescriptionGenerator';

const YouTubeChannelDescriptionGeneratorPage = () => {
  const relatedTools = [
    {
      name: "YouTube Name Generator",
      path: "/youtube-name-generator",
      description: "Create the perfect name for your YouTube channel"
    },
    {
      name: "Paragraph Rewriter Tool",
      path: "/paragraph-rewriter-tool",
      description: "Optimize your content descriptions"
    },
    {
      name: "Keyword Generator Tool",
      path: "/keyword-generator-tool",
      description: "Find keywords to optimize your video descriptions"
    }
  ];
  
  return (
    <ToolPageLayout
      title="YouTube Channel Description Generator"
      description="Create professional, SEO-optimized YouTube channel descriptions that attract subscribers and improve your channel's discoverability in search results."
      keywords="YouTube description generator, channel description, YouTube SEO, content creator tools, video optimization"
      relatedTools={relatedTools}
    >
      <YouTubeChannelDescriptionGenerator />
    </ToolPageLayout>
  );
};

export default YouTubeChannelDescriptionGeneratorPage;
