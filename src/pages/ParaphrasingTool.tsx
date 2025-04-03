import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Loader from "@/components/Loader";
import { toast } from "sonner";
import { generateOllamaResponse } from "@/utils/ollamaApi";

const ParaphrasingTool: React.FC = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState('neutral');

  const handleParaphrase = async () => {
    if (!text || text.trim().length < 15) {
      toast.error('Please enter at least 15 characters to paraphrase');
      return;
    }

    setLoading(true);
    setParaphrasedText('');

    try {
      const prompt = `Please paraphrase the following text in a ${tone} tone.

Original text:
"${text}"

Paraphrased text:`;

      const systemPrompt = "You are a professional writing assistant. You excel at rephrasing text while maintaining its original meaning and intent. You can adjust the tone of the text as requested.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      setParaphrasedText(response.trim());
      toast.success('Text paraphrased successfully');
    } catch (error) {
      console.error('Error paraphrasing text:', error);
      toast.error('Failed to paraphrase text. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Free Paraphrasing Tool | Rephrase Your Content</title>
        <meta name="description" content="Use our free AI paraphrasing tool to rephrase your content quickly and easily. Improve your writing and avoid plagiarism with our advanced paraphraser." />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-navy dark:text-white mb-4">Free Paraphrasing Tool</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Rephrase your content with our free AI paraphrasing tool. Improve your writing and avoid plagiarism with our advanced paraphraser.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Input Text</h2>
          <Textarea 
            placeholder="Paste or type your text here to paraphrase..." 
            className="min-h-[250px] mb-4 text-base"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-navy dark:text-white">Tone</h3>
            <RadioGroup defaultValue="neutral" className="flex flex-col space-y-1" onValueChange={setTone}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="neutral" id="neutral" />
                <Label htmlFor="neutral">Neutral</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="formal" id="formal" />
                <Label htmlFor="formal">Formal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="informal" id="informal" />
                <Label htmlFor="informal">Informal</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="persuasive" id="persuasive" />
                <Label htmlFor="persuasive">Persuasive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="humorous" id="humorous" />
                <Label htmlFor="humorous">Humorous</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button 
            onClick={handleParaphrase} 
            className="w-full bg-teal hover:bg-teal-light text-white"
            disabled={loading}
          >
            {loading ? <Loader size="sm" /> : 'Paraphrase'}
          </Button>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Paraphrased Text</h2>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[250px]">
              <Loader size="lg" />
            </div>
          ) : paraphrasedText ? (
            <div className="min-h-[250px] p-4 border rounded-md bg-gray-50 dark:bg-navy-light overflow-auto text-base">
              {paraphrasedText}
            </div>
          ) : (
            <div className="min-h-[250px] flex justify-center items-center text-gray-500 dark:text-gray-400 text-center">
              <p>Your paraphrased text will appear here after processing</p>
            </div>
          )}
        </Card>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Why Use Our Free Paraphrasing Tool?</h2>
        <p>In the world of content creation, originality is key. Whether you're a student, blogger, or marketing professional, you need to produce unique content that captures your audience's attention. Our AI-powered paraphrasing tool helps you rewrite sentences, paragraphs, or entire articles while maintaining the original meaning. This is perfect for avoiding plagiarism, enhancing readability, or adjusting the tone of your writing.</p>
        
        <h2>Key Features of Our Paraphrasing Tool</h2>
        <ul>
          <li><strong>AI-Powered Paraphrasing:</strong> Our tool uses advanced AI algorithms to understand the context of your text and provide accurate paraphrases.</li>
          <li><strong>Multiple Tones:</strong> Adjust the tone of your paraphrased text to suit your needs, whether you're aiming for formal, informal, or persuasive writing.</li>
          <li><strong>Plagiarism Prevention:</strong> Ensure your content is original by using our tool to rewrite existing text and avoid unintentional plagiarism.</li>
          <li><strong>Enhanced Readability:</strong> Improve the clarity and flow of your writing by using our tool to rephrase complex sentences and paragraphs.</li>
          <li><strong>Time-Saving:</strong> Quickly rewrite large amounts of text without spending hours manually rephrasing each sentence.</li>
        </ul>
        
        <h2>How Our Paraphrasing Tool Improves Your Writing</h2>
        <p>Good writing is about more than just avoiding errors—it's about expressing your ideas in a clear, engaging, and original way. Our paraphrasing tool serves as a digital writing assistant that helps you:</p>
        
        <ul>
          <li><strong>Avoid Plagiarism:</strong> Ensure your content is unique and original by rewriting existing text with our AI-powered tool.</li>
          <li><strong>Enhance Clarity:</strong> Simplify complex sentences and paragraphs to improve the readability of your writing.</li>
          <li><strong>Adjust Tone:</strong> Tailor the tone of your writing to suit your audience and purpose, whether you're writing a formal report or a casual blog post.</li>
          <li><strong>Save Time:</strong> Quickly rewrite large amounts of text without spending hours manually rephrasing each sentence.</li>
        </ul>
        
        <h2>Ideal for All Types of Writing</h2>
        <p>Our paraphrasing tool is versatile enough to help with various types of content:</p>
        
        <ul>
          <li><strong>Academic Papers:</strong> Rewrite research papers, essays, and dissertations to avoid plagiarism and improve clarity.</li>
          <li><strong>Business Communications:</strong> Polish emails, reports, proposals, and presentations for maximum impact.</li>
          <li><strong>Content Marketing:</strong> Create engaging blog posts, articles, and social media content that resonates with your audience.</li>
          <li><strong>Creative Writing:</strong> Perfect your stories, poems, and scripts without disrupting your creative flow.</li>
          <li><strong>Personal Communications:</strong> Make sure your important personal emails and messages convey exactly what you intend.</li>
        </ul>
        
        <h2>How to Get the Most from Our Paraphrasing Tool</h2>
        <p>To maximize the benefits of our tool, consider these best practices:</p>
        
        <ol>
          <li>Write your first draft without worrying about paraphrasing—focus on getting your ideas down.</li>
          <li>Use our paraphrasing tool for a comprehensive review once your draft is complete.</li>
          <li>Review each suggestion carefully—AI tools are powerful but should complement your judgment, not replace it.</li>
          <li>For lengthy documents, check section by section to ensure thorough analysis.</li>
          <li>Use the tone options to adjust the style of your writing based on your target audience.</li>
        </ol>
        
        <h2>Privacy and Security</h2>
        <p>We understand that your writing may contain sensitive information. Our paraphrasing tool prioritizes your privacy:</p>
        
        <ul>
          <li>Text submitted for paraphrasing is processed securely and not stored permanently.</li>
          <li>We do not use your content for training our AI models without explicit permission.</li>
          <li>Our service operates with industry-standard encryption to protect data in transit.</li>
        </ul>
        
        <p>Start using our free paraphrasing tool today and transform your writing from good to exceptional. Whether you're a student, professional, or content creator, our tool provides the support you need to communicate with confidence and clarity.</p>
      </div>
    </div>
  );
};

export default ParaphrasingTool;
