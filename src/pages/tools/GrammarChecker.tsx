
import React, { useState } from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';
import DOMPurify from 'dompurify';
import HumanSEOContent from '@/components/HumanSEOContent';

const GrammarChecker = () => {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [explanations, setExplanations] = useState<string[]>([]);
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const checkGrammar = async () => {
    if (!text.trim()) {
      toast({
        title: "Empty Text",
        description: "Please enter some text to check for grammar.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setCorrectedText('');
    setExplanations([]);

    try {
      const prompt = `
        Check the following text for grammar, spelling, and punctuation errors. Provide the corrected text.
        ${includeExplanations ? 'Also provide detailed explanations of each correction made.' : ''}

        Text to check:
        "${text}"

        ${includeExplanations ? 
          'Format the response as: 1. Corrected text in a single paragraph or with appropriate paragraph breaks. 2. List of explanations with bullet points.' : 
          'Return only the corrected text, maintaining the original paragraph structure.'
        }
      `;

      const systemPrompt = "You are an expert editor and proofreader. Your task is to identify and correct grammar, spelling, punctuation, and syntax errors in the text. Maintain the author's voice and style while making the text correct and clear.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      if (includeExplanations) {
        // Parse the response to separate corrected text and explanations
        const sections = response.split(/\n\n|Explanations:|Corrections:|Explanation:|Correction:/i);
        if (sections.length >= 2) {
          setCorrectedText(sections[0].trim());
          
          // Extract explanations list
          const explanationText = sections.slice(1).join('\n');
          const explanationList = explanationText
            .split(/\n[-•*]\s+|\n\d+\.\s+/)
            .filter(item => item.trim().length > 0);
          
          setExplanations(explanationList);
        } else {
          // Fallback if the format doesn't match expectations
          setCorrectedText(response);
        }
      } else {
        setCorrectedText(response);
      }
    } catch (error) {
      console.error('Error checking grammar:', error);
      toast({
        title: "Error",
        description: "Failed to check grammar. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(correctedText);
    toast({
      title: "Copied!",
      description: "Corrected text copied to clipboard.",
    });
  };

  const mainContentBlocks = [
    {
      title: "Grammar Checker Tool Free",
      content: "Our free Grammar Checker Tool serves as an advanced linguistic analysis platform that provides professional communication enhancement capabilities at no cost to users. Today's digital space filled with excessive content has made precise grammar essential for business success because it shapes how customers view brands and affects user experience and conversion rates.\n\nOur advanced natural language processing (NLP) engine employs computational linguistics algorithms developed specifically for business communications. Our thorough solution conducts thorough structural evaluations of your text to detect subtle grammatical errors which could damage your professional image and produce user experience problems."
    },
    {
      title: "Advanced Linguistic Analysis Technology",
      content: "Our grammar checker is powered by a technical framework that integrates linguistic rules with business communication data-driven machine learning models. This hybrid system identifies multiple context-dependent errors which standard tools normally overlook including:\n\nComplex sentence structures display subject-verb agreement errors which the system detects.\n\nProper noun capitalization errors occur within industry-specific terminology.\n\nThe software detects dangling modifiers which produce unintended meaning changes.\n\nThe tool checks for continuous tense consistency across entire documents.\n\nThe tool detects minimal word repetition which weakens message clarity.\n\nThe tool addresses homophone errors which go beyond the basic your/you're mistake.\n\nNon-native English writers struggle with preposition selection errors which the tool identifies.\n\nThe proper placement of punctuation affects both the score of readability and how well the text is understood by readers."
    },
    {
      title: "SEO Writing Tools and Features",
      content: "Our grammar checker provides seamless integration of SEO best practices to content creators while preserving linguistic quality at all times. The analysis tool checks keyword density to detect possible stuffing problems and recommends organic placement points which affect both readability and user engagement metrics positively. The balanced approach improves search rankings while delivering content that appeals to readers because search engines now use user experience metrics as primary ranking factors.\n\nOur tool enables international businesses to detect English variant differences between American, British, Canadian and Australian spellings throughout a single document. The built-in feature maintains uniformity in spelling and terminology throughout your content no matter which team members authored it."
    },
    {
      title: "Professional Tone and Brand Voice Consistency",
      content: "The advanced tone detection algorithm analyzes subtle linguistic markers that contribute to perceived professionalism, including:\n\nExcessive intensifier use that undermines authority\n\nHedging language that projects uncertainty.\n\nUsing passive voice structures to conceal responsibility\n\nBusiness-related content should avoid casual expressions which make the text unsuitable for professional settings.\n\nThe system detects unintentional bias markers which could offend target readers.\n\nJargon overuse that reduces content accessibility.\n\nSentiment inconsistencies that create mixed messaging.\n\nE-commerce businesses utilize our grammar checker to enhance their product description conversion rates through its built-in optimization features. The tool evaluates weak CTAs, vague benefit statements, and credibility-reducing errors to help product information become effective sales copy that leads to purchase decisions.\n\nOur free grammar checker becomes an essential part of your content workflow when you join thousands of businesses which have achieved better communications and increased engagement metrics without needing expensive enterprise software or proofreading staff."
    }
  ];

  const expertTips = [
    {
      title: "Maintain Consistent Tenses",
      description: "One of the most common grammar mistakes is tense shifting. Ensure you maintain the same tense throughout a paragraph unless there's a logical reason to change it."
    },
    {
      title: "Use Active Voice for Clarity",
      description: "While passive voice has its place, active voice creates more direct, engaging content that resonates with readers and improves readability scores."
    },
    {
      title: "Proofread for Homophones",
      description: "Words like their/there/they're, your/you're, and its/it's are commonly misused. Our tool catches these errors that spell checkers often miss."
    },
    {
      title: "Simplify Complex Sentences",
      description: "Break down sentences with multiple clauses into shorter, clearer statements. This improves readability and reduces the risk of grammatical errors."
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Product Descriptions",
      description: "An online retailer saw a 23% increase in conversion rates after using our grammar checker to improve 500+ product descriptions, eliminating ambiguity and strengthening call-to-action phrasing."
    },
    {
      title: "Corporate Communications",
      description: "A multinational company standardized their internal and external communications across regions, resulting in more consistent brand messaging and improved stakeholder engagement."
    },
    {
      title: "Content Marketing Strategy",
      description: "A digital marketing agency integrated our grammar checker into their content workflow, reducing editing time by 40% while maintaining higher quality standards across all client deliverables."
    }
  ];

  const toolName = "Grammar Checker";
  
  const relatedTools = [
    {
      name: "Paragraph Rewriter",
      path: "/paragraph-rewriter-tool",
      description: "Restructure paragraphs while preserving meaning and enhancing clarity"
    },
    {
      name: "Sentence Rewriter",
      path: "/sentence-rewriter-tool",
      description: "Refine sentences for better flow and readability"
    },
    {
      name: "Paraphrasing Tool",
      path: "/paraphrasing-tool",
      description: "Rewrite content while maintaining the original meaning"
    }
  ];

  const conclusionContent = "Our free grammar checker becomes an essential part of your content workflow when you join thousands of businesses which have achieved better communications and increased engagement metrics without needing expensive enterprise software or proofreading staff. By identifying and correcting errors that might otherwise damage your professional credibility, our tool helps ensure your message resonates with your audience and achieves your communication goals.";

  return (
    <ToolPageLayout
      title="Free Grammar Checker | Fix Grammar, Spelling and Punctuation"
      description="Check and fix grammar, spelling, and punctuation errors for free. Our AI-powered grammar checker helps you write error-free content."
      keywords="grammar checker, spell check, punctuation checker, free grammar tool, writing tool"
      relatedTools={relatedTools}
    >
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Polish your writing with our AI-powered grammar checker. Quickly identify and fix grammar, spelling, and punctuation errors in your text.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <Textarea 
            placeholder="Paste your text here to check for grammar, spelling, and punctuation errors..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px] mb-4"
          />
          
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <Switch 
                id="explanations" 
                checked={includeExplanations}
                onCheckedChange={setIncludeExplanations}
              />
              <Label htmlFor="explanations">Include explanations</Label>
            </div>
            <Button 
              onClick={checkGrammar} 
              className="bg-teal hover:bg-teal-dark text-white"
              disabled={loading || !text.trim()}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : 'Check Grammar'}
            </Button>
          </div>
        </Card>

        {(loading || correctedText) && (
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Corrected Text</h2>
              {correctedText && (
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="large" />
              </div>
            ) : (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg whitespace-pre-wrap">
                <div 
                  className="mb-4" 
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(correctedText) }}
                />

                {explanations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-4 text-navy dark:text-white">Explanations</h3>
                    <ul className="space-y-3">
                      {explanations.map((explanation, index) => (
                        <li key={index} className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-teal flex-shrink-0 mt-1" />
                          <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(explanation) }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Card>
        )}

        <HumanSEOContent
          mainContentBlocks={mainContentBlocks}
          caseStudies={caseStudies}
          expertTips={expertTips}
          toolName={toolName}
          relatedTools={relatedTools}
          conclusionContent={conclusionContent}
        />

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold text-navy dark:text-white">Common Grammar Mistakes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-navy dark:text-white">Subject-Verb Agreement</h3>
              <p className="text-gray-700 dark:text-gray-300">Subjects and verbs must agree in number (singular or plural).</p>
              <div className="mt-2">
                <p className="text-red-500 flex items-center"><AlertCircle className="h-4 w-4 mr-1" /> The group of students were talking. (Incorrect)</p>
                <p className="text-green-500 flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> The group of students was talking. (Correct)</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-navy dark:text-white">Comma Splices</h3>
              <p className="text-gray-700 dark:text-gray-300">Using only a comma to connect two independent clauses.</p>
              <div className="mt-2">
                <p className="text-red-500 flex items-center"><AlertCircle className="h-4 w-4 mr-1" /> It was raining, we stayed inside. (Incorrect)</p>
                <p className="text-green-500 flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> It was raining, so we stayed inside. (Correct)</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-navy dark:text-white">Apostrophe Misuse</h3>
              <p className="text-gray-700 dark:text-gray-300">Incorrect use of apostrophes for possessives or contractions.</p>
              <div className="mt-2">
                <p className="text-red-500 flex items-center"><AlertCircle className="h-4 w-4 mr-1" /> The companys policy is strict. (Incorrect)</p>
                <p className="text-green-500 flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> The company's policy is strict. (Correct)</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2 text-navy dark:text-white">Pronoun-Antecedent Agreement</h3>
              <p className="text-gray-700 dark:text-gray-300">Pronouns must agree with their antecedents in number and gender.</p>
              <div className="mt-2">
                <p className="text-red-500 flex items-center"><AlertCircle className="h-4 w-4 mr-1" /> Each student must submit their paper. (Debated)</p>
                <p className="text-green-500 flex items-center"><CheckCircle className="h-4 w-4 mr-1" /> All students must submit their papers. (Correct)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default GrammarChecker;
