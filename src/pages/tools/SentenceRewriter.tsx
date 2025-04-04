import React from 'react';
import SEOHead from '@/components/SEOHead';
import { useLanguage } from '@/contexts/LanguageContext';
import SentenceRewriterForm from '@/components/SentenceRewriterForm';
import { Separator } from "@/components/ui/separator";

const SentenceRewriter = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-screen">
      <SEOHead
        title="Free AI Sentence Rewriter Tool | SEO Audit Tool"
        description="Enhance the quality and clarity of any sentence and improve its construction with this powerful free AI sentence rewriter tool."
        keywords="sentence rewriter, sentence enhancer, rewrite sentences, improve sentences, sentence clarity, sentence structure, AI sentence tool, sentence improvement, clear writing"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Free AI Sentence Rewriter Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Enhance the quality and clarity of any sentence and improve its construction with this powerful free tool.
          </p>
        </div>

        <div className="mb-12">
          <SentenceRewriterForm />
        </div>
      </div>
    </div>
  );
};

export default SentenceRewriter;
