import React from 'react';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import ParagraphRewriterForm from '@/components/ParagraphRewriterForm';
import { Separator } from "@/components/ui/separator";

const ParagraphRewriter = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen">
      <SEOHead
        title="Free AI Paragraph Rewriter Tool | SEO Audit Tool"
        description="Improve any paragraph's readability and rewrite it to make it sound more human-like with this powerful free AI paragraph rewriter tool."
        keywords="paragraph rewriter, content rewriting, AI rewriter, paraphrasing tool, article rewriter, text enhancer, content enhancer, readability improver"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Free AI Paragraph Rewriter Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Improve any paragraph's readability and rewrite it to make it sound more human-like with this powerful free tool.
          </p>
        </div>

        <div className="mb-12">
          <ParagraphRewriterForm />
        </div>
      </div>
    </div>
  );
};

export default ParagraphRewriter;
