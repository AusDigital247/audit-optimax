
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Copy, DownloadIcon, RefreshCcw } from 'lucide-react';
import Loader from '@/components/Loader';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import DOMPurify from 'dompurify';

const ConclusionGenerator = () => {
  const [topic, setTopic] = useState('');
  const [keyPoints, setKeyPoints] = useState('');
  const [style, setStyle] = useState('professional');
  const [conclusionLength, setConclusionLength] = useState('medium');
  const [conclusion, setConclusion] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateConclusion = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic is required",
        description: "Please enter the main topic or title of your content.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const prompt = `
      Generate a ${conclusionLength} length conclusion for content about "${topic}" with a ${style} tone.
      ${keyPoints ? `Key points to summarize: ${keyPoints}` : ''}
      
      The conclusion should:
      - Summarize the main points
      - Provide closure
      - Leave the reader with something to think about
      - Maintain a ${style} tone throughout
      
      Format the conclusion with proper paragraphs and markdown styling if needed.
      `;

      const systemPrompt = "You're an expert conclusion writer. Create engaging, well-structured conclusions that effectively summarize content and provide closure while maintaining the requested tone and length. Return just the conclusion text without additional commentary.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      setConclusion(response);
    } catch (error) {
      console.error('Error generating conclusion:', error);
      toast({
        title: "Error",
        description: "Failed to generate conclusion. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(conclusion);
    toast({
      title: "Copied!",
      description: "Conclusion copied to clipboard.",
    });
  };

  const downloadAsText = () => {
    const element = document.createElement('a');
    const file = new Blob([conclusion], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `conclusion_${topic.substring(0, 20).replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Free Conclusion Generator | Create Powerful Endings for Your Content</title>
        <meta name="description" content="Generate compelling conclusions for your essays, articles, and blog posts instantly. Our free AI tool creates powerful endings that leave a lasting impression." />
        <meta name="keywords" content="conclusion generator, essay conclusion, article conclusion, free conclusion writer, AI conclusion tool" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">Conclusion Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Instantly craft compelling conclusions for your essays, articles, blog posts, and more with our AI-powered conclusion generator.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-6">
            <div>
              <Label htmlFor="topic" className="block mb-2">Content Topic or Title *</Label>
              <Textarea 
                id="topic" 
                placeholder="Enter the main topic or title of your content"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="keyPoints" className="block mb-2">Key Points (Optional)</Label>
              <Textarea 
                id="keyPoints" 
                placeholder="Enter key points you want to include in the conclusion, separated by new lines"
                value={keyPoints}
                onChange={(e) => setKeyPoints(e.target.value)}
                className="min-h-[120px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="style" className="block mb-2">Writing Style</Label>
                <select 
                  id="style"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="professional">Professional</option>
                  <option value="conversational">Conversational</option>
                  <option value="academic">Academic</option>
                  <option value="persuasive">Persuasive</option>
                  <option value="inspiring">Inspiring</option>
                  <option value="reflective">Reflective</option>
                </select>
              </div>

              <div>
                <Label htmlFor="length" className="block mb-2">Conclusion Length</Label>
                <select 
                  id="length"
                  value={conclusionLength}
                  onChange={(e) => setConclusionLength(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="short">Short (1-2 sentences)</option>
                  <option value="medium">Medium (1 paragraph)</option>
                  <option value="long">Long (2-3 paragraphs)</option>
                </select>
              </div>
            </div>

            <Button 
              onClick={generateConclusion} 
              className="w-full bg-teal hover:bg-teal-dark text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
              Generate Conclusion
            </Button>
          </div>
        </Card>

        {(loading || conclusion) && (
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Your Conclusion</h2>
              {conclusion && (
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={copyToClipboard}>
                    <Copy className="mr-2 h-4 w-4" /> Copy
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadAsText}>
                    <DownloadIcon className="mr-2 h-4 w-4" /> Download
                  </Button>
                </div>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="large" />
              </div>
            ) : (
              <div 
                className="prose dark:prose-invert max-w-none p-4 bg-gray-50 dark:bg-gray-800 rounded-lg whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(conclusion) }}
              />
            )}
          </Card>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">How to Write Effective Conclusions</h2>
          
          <Tabs defaultValue="purpose">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="purpose">Purpose</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="tips">Pro Tips</TabsTrigger>
            </TabsList>
            <TabsContent value="purpose" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">The Purpose of a Conclusion</h3>
              <p className="mb-4">A good conclusion serves several important purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Summarizes key points without simply repeating them</li>
                <li>Provides closure to your writing</li>
                <li>Leaves readers with a final impression or thought</li>
                <li>Connects back to your main thesis or central idea</li>
                <li>Creates a sense of completeness</li>
              </ul>
              <p>Think of your conclusion as the final chord in a musical piece—it should feel satisfying and complete.</p>
            </TabsContent>
            <TabsContent value="structure" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Structure of an Effective Conclusion</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="font-medium">Restate your main point</p>
                  <p className="text-gray-600 dark:text-gray-300">Begin by restating your thesis or main argument in fresh words.</p>
                </li>
                <li>
                  <p className="font-medium">Summarize key supporting points</p>
                  <p className="text-gray-600 dark:text-gray-300">Briefly remind readers of the main evidence or arguments you presented.</p>
                </li>
                <li>
                  <p className="font-medium">Provide a broader context</p>
                  <p className="text-gray-600 dark:text-gray-300">Show how your topic connects to larger issues or the "big picture."</p>
                </li>
                <li>
                  <p className="font-medium">End with impact</p>
                  <p className="text-gray-600 dark:text-gray-300">Finish with a thought-provoking statement, call to action, or relevant quote.</p>
                </li>
              </ol>
            </TabsContent>
            <TabsContent value="tips" className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Professional Tips for Conclusions</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <div>
                    <p className="font-medium">Avoid introducing completely new ideas</p>
                    <p className="text-gray-600 dark:text-gray-300">Your conclusion should wrap up existing points, not open new lines of inquiry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <div>
                    <p className="font-medium">Keep it concise</p>
                    <p className="text-gray-600 dark:text-gray-300">A conclusion should generally be about 10% of your total word count.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <div>
                    <p className="font-medium">Avoid apologetic language</p>
                    <p className="text-gray-600 dark:text-gray-300">Don't use phrases like "In conclusion" or "To sum up" which can sound formulaic.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <div>
                    <p className="font-medium">Match your tone to your content</p>
                    <p className="text-gray-600 dark:text-gray-300">Academic papers require formal conclusions, while blog posts can be more conversational.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <div>
                    <p className="font-medium">Revise and polish</p>
                    <p className="text-gray-600 dark:text-gray-300">Since it's the last thing readers see, make sure your conclusion is particularly well-written.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ConclusionGenerator;
