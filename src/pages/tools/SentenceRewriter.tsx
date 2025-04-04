
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { SentenceRewriterForm } from '@/components/SentenceRewriterForm';

const SentenceRewriter: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sentence Rewriter Tool | Improve Your Content One Sentence at a Time"
        description="Rewrite sentences to improve clarity and SEO with our free sentence rewriter tool. Perfect for content creators and marketers."
        canonicalPath="/sentence-rewriter-tool"
        keywords="sentence rewriter, content rewriter, paraphrasing tool, SEO content, text rewriter"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Sentence Rewriter Tool</h1>
        <SentenceRewriterForm />
      </div>
    </div>
  );
};

export default SentenceRewriter;
