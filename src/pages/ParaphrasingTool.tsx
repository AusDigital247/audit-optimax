import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, RefreshCcw } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';
import DOMPurify from 'dompurify';

const ParaphrasingTool = () => {
  const [inputText, setInputText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [style, setStyle] = useState('standard');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const paraphraseText = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Empty Text",
        description: "Please enter some text to paraphrase.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setParaphrasedText('');

    try {
      const prompt = `
        Paraphrase the following text in a ${style} style. Maintain the original meaning but use different wording, sentence structure, and phrasing:

        "${inputText}"

        Return only the paraphrased text, maintaining appropriate paragraph breaks.
      `;

      const systemPrompt = "You are an expert paraphraser. Your task is to rephrase text while maintaining its meaning but using different words and sentence structures. Adapt to the requested style while ensuring the quality and readability of the output.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      setParaphrasedText(response);
    } catch (error) {
      console.error('Error paraphrasing text:', error);
      toast({
        title: "Error",
        description: "Failed to paraphrase text. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paraphrasedText);
    toast({
      title: "Copied!",
      description: "Paraphrased text copied to clipboard.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <SEOHead
        title="Free Paraphrasing Tool | Reword and Rephrase Text"
        description="Our AI-powered paraphrasing tool helps you reword and rephrase any text while maintaining the original meaning. Perfect for essays, articles, and avoiding plagiarism."
        keywords="paraphrasing tool, text rewriter, rephrase, reword, content rephraser, plagiarism"
        canonicalPath="/paraphrasing-tool"
      />

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">Paraphrasing Tool</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Reword and rephrase your content while maintaining the original meaning. Perfect for essays, articles, emails, and more.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg h-full flex flex-col">
            <div className="mb-4 flex justify-between items-center">
              <Label htmlFor="inputText" className="text-lg font-medium">Original Text</Label>
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="standard">Standard</option>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="simple">Simplified</option>
                <option value="creative">Creative</option>
                <option value="academic">Academic</option>
                <option value="professional">Professional</option>
              </select>
            </div>
            <Textarea 
              id="inputText" 
              placeholder="Enter the text you want to paraphrase..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-grow min-h-[300px] mb-4"
            />
            <Button 
              onClick={paraphraseText} 
              className="w-full bg-teal hover:bg-teal-dark text-white"
              disabled={loading || !inputText.trim()}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
              Paraphrase
            </Button>
          </Card>

          <Card className="p-6 shadow-lg h-full flex flex-col">
            <div className="mb-4 flex justify-between items-center">
              <Label className="text-lg font-medium">Paraphrased Text</Label>
              {paraphrasedText && (
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              )}
            </div>
            {loading ? (
              <div className="flex-grow flex justify-center items-center">
                <Loader size="large" />
              </div>
            ) : (
              <div 
                className="flex-grow bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-auto whitespace-pre-wrap min-h-[300px]"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(paraphrasedText) }}
              />
            )}
          </Card>
        </div>

        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-navy dark:text-white">When to Use a Paraphrasing Tool</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Academic Writing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Paraphrase secondary sources to include in research papers while avoiding plagiarism. Always cite your sources even when paraphrasing.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Content Creation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rewrite existing content to create fresh variations for different platforms or to update outdated information while maintaining key concepts.
              </p>
            </Card>
            
            <Card className="p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Improving Clarity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Rephrase complex explanations or technical language to make them more accessible to different audiences.
              </p>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-navy dark:text-white">Tips for Effective Paraphrasing</h2>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-teal font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-navy dark:text-white">Read and understand:</strong> Fully comprehend the original text before attempting to paraphrase it.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-navy dark:text-white">Use synonyms:</strong> Replace words with appropriate synonyms while ensuring they fit the context.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-navy dark:text-white">Change sentence structure:</strong> Alter the arrangement of ideas and sentence patterns.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-navy dark:text-white">Change voice:</strong> Convert active voice to passive or vice versa when appropriate.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal font-bold mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong className="text-navy dark:text-white">Review and edit:</strong> Check that your paraphrased text maintains the original meaning but uses different language.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Important Note on Academic Integrity</h3>
            <p className="text-gray-700 dark:text-gray-300">
              When using paraphrased content in academic work, always cite the original source. Paraphrasing without proper attribution is still considered plagiarism. This tool is designed to help you reword content, not to circumvent academic integrity standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaphrasingTool;
