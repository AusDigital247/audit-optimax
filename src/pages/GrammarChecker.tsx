
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader } from "@/components/Loader";
import { generateOllamaResponse } from "@/utils/ollamaApi";

const GrammarChecker: React.FC = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [statistics, setStatistics] = useState<{
    errors: number;
    suggestions: number;
    readabilityScore: number;
  } | null>(null);

  const handleCheck = async () => {
    if (!text || text.trim().length < 15) {
      toast.error('Please enter at least 15 characters to check grammar');
      return;
    }

    setLoading(true);
    setCorrectedText('');
    setStatistics(null);

    try {
      const prompt = `Please check and correct the following text for grammar, spelling, and punctuation errors. Return the corrected text, followed by a brief summary of changes made and a readability score from 1-100.

Original text:
"${text}"

Format your response as follows:
Corrected Text:
[The corrected text]

Changes Summary:
[Brief summary of types of errors fixed]

Statistics:
Errors found: [number]
Suggestions made: [number]
Readability score: [score/100]`;

      const systemPrompt = "You are a professional grammar and writing assistant. You excel at identifying and correcting grammar, spelling, punctuation, and style issues in text. You provide helpful, constructive feedback to improve writing quality.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the response
      const correctedTextMatch = response.match(/Corrected Text:([\s\S]*?)(?=Changes Summary:|$)/i);
      const statisticsMatch = response.match(/Errors found: (\d+)[\s\S]*?Suggestions made: (\d+)[\s\S]*?Readability score: (\d+)/i);
      
      if (correctedTextMatch && correctedTextMatch[1]) {
        setCorrectedText(correctedTextMatch[1].trim());
      } else {
        setCorrectedText(text); // Fallback to original if parsing fails
        toast.warning('Could not parse corrections properly, showing original text');
      }
      
      if (statisticsMatch) {
        setStatistics({
          errors: parseInt(statisticsMatch[1]),
          suggestions: parseInt(statisticsMatch[2]),
          readabilityScore: parseInt(statisticsMatch[3])
        });
      }
      
      toast.success('Grammar check completed');
    } catch (error) {
      console.error('Error checking grammar:', error);
      toast.error('Failed to check grammar. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Free Grammar Checker Tool | Improve Your Writing</title>
        <meta name="description" content="Elevate your writing with our free AI grammar checker. Catch grammar, spelling, and punctuation errors instantly, ensuring your content is polished and error-free." />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-navy dark:text-white mb-4">Free Grammar Checker Tool</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Elevate your writing with our free AI grammar checker. Catch grammar, spelling, and punctuation errors instantly, ensuring your content is polished and error-free.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Input Text</h2>
          <Textarea 
            placeholder="Paste or type your text here to check for grammar errors..." 
            className="min-h-[250px] mb-4 text-base"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button 
            onClick={handleCheck} 
            className="w-full bg-teal hover:bg-teal-light text-white"
            disabled={loading}
          >
            {loading ? <Loader size="sm" /> : 'Check Grammar'}
          </Button>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Corrected Text</h2>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[250px]">
              <Loader size="lg" />
            </div>
          ) : correctedText ? (
            <>
              <div className="min-h-[250px] mb-4 p-4 border rounded-md bg-gray-50 dark:bg-navy-light overflow-auto text-base">
                {correctedText}
              </div>
              
              {statistics && (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-md bg-red-50 dark:bg-red-900/20">
                    <p className="text-xl font-semibold text-red-600 dark:text-red-400">{statistics.errors}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Errors Fixed</p>
                  </div>
                  <div className="p-3 rounded-md bg-blue-50 dark:bg-blue-900/20">
                    <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">{statistics.suggestions}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Suggestions</p>
                  </div>
                  <div className="p-3 rounded-md bg-green-50 dark:bg-green-900/20">
                    <p className="text-xl font-semibold text-green-600 dark:text-green-400">{statistics.readabilityScore}/100</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Readability</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="min-h-[250px] flex justify-center items-center text-gray-500 dark:text-gray-400 text-center">
              <p>Your corrected text will appear here after checking</p>
            </div>
          )}
        </Card>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Why Use Our Free Grammar Checker Tool?</h2>
        <p>In today's fast-paced digital world, clear and error-free communication is essential. Whether you're drafting an important email, working on an academic paper, or creating content for your website, grammatical errors can diminish your credibility and effectiveness. Our AI-powered grammar checker helps ensure your writing is polished and professional.</p>
        
        <h2>Key Features of Our Grammar Checker</h2>
        <ul>
          <li><strong>Comprehensive Error Detection:</strong> Our tool identifies grammar, spelling, punctuation, and stylistic errors that might escape traditional spell-checkers.</li>
          <li><strong>Context-Aware Corrections:</strong> Unlike basic grammar tools, our AI understands context and provides appropriate suggestions based on the meaning of your text.</li>
          <li><strong>Style Improvement Suggestions:</strong> Beyond just fixing errors, we offer suggestions to enhance clarity, conciseness, and overall readability.</li>
          <li><strong>Readability Scoring:</strong> Get instant feedback on how accessible your writing is with our readability score.</li>
          <li><strong>Privacy-Focused:</strong> Your text is processed securely and never stored permanently on our servers.</li>
        </ul>
        
        <h2>How Our Grammar Checker Improves Your Writing</h2>
        <p>Good writing isn't just about avoiding errors—it's about clarity, engagement, and effective communication. Our grammar checker serves as a digital writing assistant that helps you:</p>
        
        <ul>
          <li><strong>Eliminate Embarrassing Mistakes:</strong> Catch those small but significant errors that can undermine your professionalism.</li>
          <li><strong>Enhance Clarity:</strong> Get suggestions for simpler wording and clearer sentence structures.</li>
          <li><strong>Improve Consistency:</strong> Maintain consistent tense, voice, and style throughout your document.</li>
          <li><strong>Learn as You Write:</strong> Understand common mistakes and improve your writing skills over time.</li>
        </ul>
        
        <h2>Ideal for All Types of Writing</h2>
        <p>Our grammar checker is versatile enough to help with various types of content:</p>
        
        <ul>
          <li><strong>Academic Papers:</strong> Ensure your research papers, essays, and dissertations are error-free and professionally written.</li>
          <li><strong>Business Communications:</strong> Polish emails, reports, proposals, and presentations for maximum impact.</li>
          <li><strong>Content Marketing:</strong> Create engaging blog posts, articles, and social media content that resonates with your audience.</li>
          <li><strong>Creative Writing:</strong> Perfect your stories, poems, and scripts without disrupting your creative flow.</li>
          <li><strong>Personal Communications:</strong> Make sure your important personal emails and messages convey exactly what you intend.</li>
        </ul>
        
        <h2>How to Get the Most from Our Grammar Checker</h2>
        <p>To maximize the benefits of our tool, consider these best practices:</p>
        
        <ol>
          <li>Write your first draft without worrying about grammar—focus on getting your ideas down.</li>
          <li>Use our grammar checker for a comprehensive review once your draft is complete.</li>
          <li>Review each suggestion carefully—AI tools are powerful but should complement your judgment, not replace it.</li>
          <li>For lengthy documents, check section by section to ensure thorough analysis.</li>
          <li>Use the readability score as a guide for adjusting complexity based on your target audience.</li>
        </ol>
        
        <h2>Privacy and Security</h2>
        <p>We understand that your writing may contain sensitive information. Our grammar checker prioritizes your privacy:</p>
        
        <ul>
          <li>Text submitted for checking is processed securely and not stored permanently.</li>
          <li>We do not use your content for training our AI models without explicit permission.</li>
          <li>Our service operates with industry-standard encryption to protect data in transit.</li>
        </ul>
        
        <p>Start using our free grammar checker today and transform your writing from good to exceptional. Whether you're a student, professional, or content creator, our tool provides the support you need to communicate with confidence and clarity.</p>
      </div>
    </div>
  );
};

export default GrammarChecker;
