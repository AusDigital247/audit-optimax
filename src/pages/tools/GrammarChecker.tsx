
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const GrammarChecker: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Free Grammar Checker Tool | Improve Your Writing Instantly"
        description="Enhance your content with our free online grammar checker tool. Eliminate mistakes, improve readability, and make your writing more professional and effective."
        keywords="grammar checker, spelling checker, proofreading tool, writing improvement, content correction, english grammar, punctuation checker"
        canonicalPath="/grammar-checker-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Grammar Checker Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Eliminate grammatical errors, spelling mistakes, and punctuation issues instantly. Improve your writing quality with our advanced grammar checking tool.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Instant Corrections</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Improve Readability</span>
            </div>
          </div>
        </div>
        
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This grammar checker is currently in development. Soon you'll be able to paste your text and receive instant feedback on grammar, spelling, punctuation, and style issues.
          </AlertDescription>
        </Alert>
        
        {/* Tool placeholder - would be replaced with actual component */}
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Grammar Checker</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Paste your text below to check for grammar errors, spelling mistakes, and suggestions for better writing.</p>
          
          <div className="mb-4">
            <textarea
              className="w-full h-48 p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="Paste your text here to check for grammar, spelling, and punctuation errors..."
              disabled
            ></textarea>
          </div>
          
          <Button disabled className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md">
            Check Grammar
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Coming soon! We're working on implementing this feature.
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Good Grammar Matters in Your Content</h2>
          <p>
            Grammar is more than just following the rules of language; it's about effective communication. Whether you're writing academic papers, business emails, blog posts, or social media content, proper grammar enhances your credibility and ensures your message is clearly understood.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Professional Credibility</h3>
              <p>Grammatical errors can damage your professional image and undermine your authority on a subject. Clean, error-free writing signals competence and attention to detail.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Communication Clarity</h3>
              <p>Poor grammar can lead to misunderstandings or ambiguity. Proper grammar ensures your message is conveyed exactly as intended, without distractions or confusion.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">SEO Performance</h3>
              <p>Search engines favor high-quality content. Well-written, grammatically correct content typically ranks higher and performs better in search results than error-filled content.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">User Experience</h3>
              <p>Content riddled with errors creates a poor reading experience that can drive visitors away from your website. Polished writing encourages longer engagement with your content.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Common Grammar Mistakes Our Tool Catches</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Subject-Verb Agreement Errors</h3>
          <p>
            Subject-verb agreement means that the subject and verb in a sentence must match in number. Singular subjects need singular verbs, while plural subjects require plural verbs. Our grammar checker identifies these inconsistencies, which are especially common with compound subjects or when words come between the subject and verb.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-red-500 line-through mb-1">The group of students were discussing the assignment.</p>
            <p className="text-green-500">The group of students was discussing the assignment.</p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Pronoun Errors</h3>
          <p>
            Pronouns must agree with their antecedents (the nouns they replace) in number, gender, and person. Pronoun errors create confusion about who or what is being referred to in your content. Our tool catches mismatched pronouns and unclear antecedents.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-red-500 line-through mb-1">Each employee should submit their report by Friday.</p>
            <p className="text-green-500">All employees should submit their reports by Friday.</p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Punctuation and Capitalization Mistakes</h3>
          <p>
            Proper punctuation guides readers through your text, indicating pauses, stops, and connections between ideas. Our grammar checker identifies missing commas, incorrect apostrophes, misplaced periods, and other punctuation issues that can change the meaning of your sentences.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-red-500 line-through mb-1">Lets eat grandma.</p>
            <p className="text-green-500">Let's eat, Grandma.</p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Commonly Confused Words</h3>
          <p>
            English has many words that sound alike (homophones) or look similar but have different meanings. Our tool checks for commonly confused word pairs like "their/there/they're," "your/you're," "its/it's," and many others that spell checkers often miss.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="text-red-500 line-through mb-1">Your going to love the new website design.</p>
            <p className="text-green-500">You're going to love the new website design.</p>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Beyond Grammar: How Our Tool Improves Your Writing</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Style and Readability Suggestions</h3>
          <p>
            Beyond correcting grammar errors, our tool provides suggestions to enhance the readability and flow of your writing. It identifies wordy sentences, passive voice constructions, and repetitive words, helping you create content that's more engaging and easier to read.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Vocabulary Enhancement</h3>
          <p>
            Repetitive word choice can make your writing monotonous. Our advanced suggestions include synonyms for overused words, helping you diversify your vocabulary and create more vibrant, engaging content that holds your audience's attention.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Tone and Formality Guidance</h3>
          <p>
            Different writing contexts require different tones. Our tool can provide feedback on whether your language is appropriate for the intended audience, helping you strike the right balance between formal and conversational writing depending on your purpose.
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Improve Your Writing Today</h2>
            <p className="mb-4">
              Whether you're a student, professional writer, business person, or anyone who communicates in writing, our grammar checker tool can help you produce clearer, more effective content. Eliminate embarrassing errors and enhance your writing quality with instant feedback and suggestions.
            </p>
            <p>
              Better writing leads to better results—improved grades, more professional business communications, higher-converting marketing copy, and content that truly resonates with your audience.
            </p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Is this grammar checker free to use?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Yes, our basic grammar checking tool is completely free to use. You can check your texts for common grammar, spelling, and punctuation errors without any subscription or payment required. For advanced features and more comprehensive analysis, we may offer premium options in the future.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How accurate is the grammar checker?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Our grammar checker utilizes advanced natural language processing algorithms to provide highly accurate suggestions for improvement. While it catches the vast majority of common errors, no automated tool is perfect.
                </p>
                <p>
                  For critical documents, we recommend using our tool for initial screening and then having a human editor review the content for nuanced issues that might require contextual understanding.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Is my content secure when I use this tool?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  We take data privacy seriously. Your text is processed securely within your browser and is not permanently stored on our servers. Once you close the tool or clear your session, your content is removed from our systems. We do not sell or share your content with third parties.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Can this tool check specialized technical or medical content?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Our grammar checker works well with general writing across most topics. However, highly specialized technical, medical, or scientific content with field-specific terminology might see some false positives or missed corrections due to the specialized nature of the vocabulary. We're continually improving our systems to better handle specialized content.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What languages does the grammar checker support?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Currently, our grammar checker primarily supports English text, including both American and British English variants. We're working on expanding our language support to include other major languages in future updates.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* Additional Resources Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Additional Writing Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Purdue Online Writing Lab</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Comprehensive writing resources and instructional materials.</p>
                  <a 
                    href="https://owl.purdue.edu/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Grammarly Blog</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Helpful articles on grammar, writing style, and effective communication.</p>
                  <a 
                    href="https://www.grammarly.com/blog/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Read articles</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Improve All Aspects of Your Content</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Perfect grammar is just one aspect of great content. Try our other tools to enhance your writing, SEO, and digital marketing efforts.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Search className="h-4 w-4 mr-2" />
              Explore All SEO Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default GrammarChecker;
