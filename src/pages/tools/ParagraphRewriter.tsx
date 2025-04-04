
import React from 'react';
import SEOHead from '@/components/SEOHead';
import ParagraphRewriterForm from '@/components/ParagraphRewriterForm';

const ParagraphRewriter: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Paragraph Rewriter Tool | Improve Your Content Quality"
        description="Rewrite paragraphs to enhance readability and SEO with our free paragraph rewriter tool. Perfect for content creators and marketers."
        canonicalPath="/paragraph-rewriter-tool"
        keywords="paragraph rewriter, content rewriter, paraphrasing tool, SEO content, text rewriter"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Paragraph Rewriter Tool</h1>
        <ParagraphRewriterForm />
      </div>
    </div>
  );
};

export default ParagraphRewriter;
