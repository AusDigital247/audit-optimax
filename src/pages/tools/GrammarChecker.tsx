
import React, { useState } from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, CheckCircle } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';
import DOMPurify from 'dompurify';

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
      </div>
    </ToolPageLayout>
  );
};

export default GrammarChecker;
