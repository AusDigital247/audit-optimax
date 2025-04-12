
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import ParagraphRewriterForm from '@/components/ParagraphRewriterForm';

const ParagraphRewriterPage = () => {
  // Limit to just 2 related tools for balanced internal linking
  const relatedTools = [
    {
      name: "Sentence Rewriter Tool",
      path: "/sentence-rewriter-tool",
      description: "Rewrite individual sentences for clarity and impact"
    },
    {
      name: "Paraphrasing Tool",
      path: "/paraphrasing-tool",
      description: "Rephrase content while maintaining original meaning"
    }
  ];
  
  return (
    <ToolPageLayout
      title="AI Paragraph Rewriter Tool"
      description="Transform any paragraph into human-like, engaging content with our free AI paragraph rewriter tool. Improve readability, eliminate redundancy, and enhance your writing quality."
      keywords="paragraph rewriter, content rewriting, AI rewriter, paraphrasing tool, article rewriter, text enhancer, content enhancer, readability improver"
      relatedTools={relatedTools}
    >
      <ParagraphRewriterForm />
    </ToolPageLayout>
  );
};

export default ParagraphRewriterPage;
