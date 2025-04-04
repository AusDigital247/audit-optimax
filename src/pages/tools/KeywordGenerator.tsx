
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { KeywordGeneratorForm } from '@/components/KeywordGeneratorForm';

const KeywordGenerator: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Keyword Generator Tool | Find SEO Keywords for Your Content"
        description="Generate relevant keywords for your content with our free keyword generator tool. Boost your SEO with targeted keyword suggestions."
        canonicalPath="/keyword-generator-tool"
        keywords="keyword generator, SEO keywords, keyword finder, keyword research tool, keyword suggestions"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Keyword Generator Tool</h1>
        <KeywordGeneratorForm />
      </div>
    </div>
  );
};

export default KeywordGenerator;
