
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import ParagraphRewriterForm from '@/components/ParagraphRewriterForm';
import { getMetaContent } from '@/utils/metaDescriptions';

const ParagraphRewriterPage = () => {
  // Get unique meta content for this page
  const metaContent = getMetaContent('paragraph-rewriter');
  
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
      title={metaContent.title}
      description={metaContent.description}
      keywords="paragraph rewriter, content rewriting, AI rewriter, paraphrasing tool, article rewriter, text enhancer, content enhancer, readability improver"
      relatedTools={relatedTools}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-navy dark:text-white text-center">Free Paragraph Rewriter</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          <p>
            Our Free Paragraph Rewriter uses natural language processing technology to optimize your content assets by restructuring paragraphs while keeping the original meaning intact. Our enterprise-grade technology avoids awkward substitutions that spinning tools produce by generating alternative text that preserves your message and presents it naturally.
          </p>
          <p>
            The modern digital content environment demands freshness signals from search engines while users seek consistent value through multiple touchpoints thus making our paragraph rewriting tool an essential strategy to extend content lifespan and boost distribution while preserving authenticity.
          </p>
        </div>
      
        <ParagraphRewriterForm />
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">AI-Powered Semantic Restructuring Technology</h2>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10 mb-8">
            <p className="text-navy-light dark:text-white/90 mb-6">
              Our rewriter uses sophisticated linguistic transformation algorithms which examine sentence patterns along with syntactic relations and contextual meaning to generate alternative phrases. This deep semantic understanding enables our tool to:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The system detects idiomatic expressions and selects proper alternatives to maintain their intended meaning.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The tool sustains subject-matter expertise indicators which enhance topic expertise.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The system preserves technical accuracy through varied terminology presentation.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The system maintains citation integrity during the reformulation of research-based content.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The tool adjusts content complexity to match specified readability score requirements.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="text-teal font-bold text-lg">•</div>
                <p className="text-navy-light dark:text-white/90">The system reorganizes paragraphs to enhance skimmability without removing essential information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default ParagraphRewriterPage;
