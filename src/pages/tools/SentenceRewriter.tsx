
import React from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import SentenceRewriterForm from '@/components/SentenceRewriterForm';

const SentenceRewriter = () => {
  const relatedTools = [
    {
      name: "Paragraph Rewriter Tool",
      path: "/paragraph-rewriter-tool",
      description: "Rewrite entire paragraphs for improved flow and readability"
    },
    {
      name: "Paraphrasing Tool",
      path: "/paraphrasing-tool", 
      description: "Rephrase your content while maintaining its original meaning"
    }
  ];

  return (
    <ToolPageLayout
      title="AI Sentence Rewriter Tool"
      description="Transform ordinary sentences into clear, engaging content with our AI-powered sentence rewriter tool. Improve clarity, tone, and impact of your writing instantly."
      keywords="sentence rewriter, sentence enhancer, rewrite sentences, improve sentences, sentence clarity, sentence structure, AI sentence tool, sentence improvement, clear writing"
      relatedTools={relatedTools}
    >
      <SentenceRewriterForm />

      <div className="prose prose-lg dark:prose-invert max-w-none mt-12">
        <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">What is an AI Sentence Rewriter?</h2>
        <p className="text-navy-light dark:text-white/90">
          An AI Sentence Rewriter is an advanced tool that uses artificial intelligence to transform your sentences into clearer, more effective versions while preserving their original meaning. This technology analyzes your input sentence, understands its context, and regenerates it with improved structure, vocabulary, and flow.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-navy dark:text-white">How Our Free AI Sentence Rewriter Works</h2>
        <p className="text-navy-light dark:text-white/90">
          Our sentence rewriter employs sophisticated natural language processing algorithms to enhance your writing. The process intelligently analyzes your sentence structure, identifies areas for improvement, and reconstructs the text to be more readable and engaging while maintaining your intended message.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Step 1: Analysis</h3>
            <p className="text-navy-light dark:text-white/80">Our AI analyzes your sentence's structure, grammar, vocabulary, and overall readability to identify improvement opportunities.</p>
          </div>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Step 2: Processing</h3>
            <p className="text-navy-light dark:text-white/80">The system processes the sentence through advanced language models to generate alternative phrasings that enhance clarity and impact.</p>
          </div>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Step 3: Refinement</h3>
            <p className="text-navy-light dark:text-white/80">Final adjustments ensure the rewritten sentence maintains your intended meaning while improving structure and readability.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-6 text-navy dark:text-white">Benefits of Using Our AI Sentence Rewriter</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Improve Readability and Clarity</h3>
            <p className="text-navy-light dark:text-white/80">Clear writing is effective writing. Our sentence rewriter helps eliminate ambiguity, wordiness, and awkward phrasing that can confuse readers. By restructuring sentences for optimal flow and selecting precise vocabulary, the tool ensures your ideas are communicated clearly and effectively.</p>
          </div>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Enhance Professional Communication</h3>
            <p className="text-navy-light dark:text-white/80">Whether you're drafting business emails, reports, or professional documents, our tool helps elevate your writing to meet professional standards. The AI can transform casual or imprecise language into polished, professional phrasing that conveys competence and attention to detail.</p>
          </div>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Save Time on Editing</h3>
            <p className="text-navy-light dark:text-white/80">Writing is often iterative, requiring multiple revisions to achieve clarity. Our sentence rewriter accelerates this process by instantly suggesting improved versions of your sentences, reducing the time spent on editing and refinement.</p>
          </div>
          
          <div className="bg-white/80 dark:bg-navy/50 p-6 rounded-lg shadow border border-gray-200 dark:border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Overcome Writer's Block</h3>
            <p className="text-navy-light dark:text-white/80">Sometimes finding the right way to express an idea can be challenging. Our tool helps break through writer's block by offering alternative ways to phrase your thoughts, sparking creativity and helping you find the perfect expression.</p>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-navy/70 p-6 rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">Start Enhancing Your Sentences Today</h2>
          <p className="mb-4 text-navy-light dark:text-white/90">
            Experience the power of our free AI sentence rewriter and transform your writing into clearer, more effective communication. Whether you're writing for academic, professional, or personal purposes, our tool helps ensure your sentences make the impact you intend.
          </p>
          <p className="text-navy-light dark:text-white/90">
            Simply enter your sentence above, select your preferred tone, and witness the immediate improvement. No registration required—our tool is free to use whenever you need it.
          </p>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default SentenceRewriter;
