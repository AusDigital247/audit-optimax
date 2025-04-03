
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader } from "@/components/Loader";
import { rewriteParagraphWithOllama } from "@/utils/ollamaApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ParaphrasingTool: React.FC = () => {
  const { t } = useLanguage();
  const [originalText, setOriginalText] = useState('');
  const [paraphrasedText, setParaphrasedText] = useState('');
  const [tone, setTone] = useState('standard');
  const [loading, setLoading] = useState(false);

  const handleParaphrase = async () => {
    if (!originalText || originalText.trim().length < 20) {
      toast.error('Please enter at least 20 characters to paraphrase');
      return;
    }

    setLoading(true);
    setParaphrasedText('');

    try {
      // Use the existing rewriteParagraphWithOllama function
      const result = await rewriteParagraphWithOllama(originalText, tone);
      setParaphrasedText(result);
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
        <title>Paraphrasing Tool | Reword Text Instantly</title>
        <meta name="description" content="Quickly rephrase and reword any text for essays, articles, emails, and more with our free AI paraphrasing tool." />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-navy dark:text-white mb-4">Paraphrasing Tool</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Quickly rephrase and reword any text for essays, articles, emails, and more. Our AI-powered tool helps you create unique content while maintaining your original meaning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Original Text</h2>
          
          <div className="space-y-4">
            <Textarea 
              placeholder="Enter the text you want to paraphrase..." 
              className="min-h-[250px] text-base"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
            />
            
            <div>
              <label className="block text-sm font-medium mb-2">Paraphrasing Style</label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="simple">Simple</SelectItem>
                  <SelectItem value="creative">Creative</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleParaphrase} 
              className="w-full bg-teal hover:bg-teal-light text-white"
              disabled={loading}
            >
              {loading ? <Loader size="sm" /> : 'Paraphrase Text'}
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Paraphrased Text</h2>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loader size="lg" />
            </div>
          ) : paraphrasedText ? (
            <div className="min-h-[300px] p-4 border rounded-md bg-gray-50 dark:bg-navy-light overflow-auto text-base">
              {paraphrasedText}
            </div>
          ) : (
            <div className="min-h-[300px] flex justify-center items-center text-gray-500 dark:text-gray-400 text-center">
              <p>Your paraphrased text will appear here</p>
            </div>
          )}
          
          {paraphrasedText && (
            <Button 
              onClick={() => {
                navigator.clipboard.writeText(paraphrasedText);
                toast.success('Paraphrased text copied to clipboard');
              }}
              variant="outline"
              className="w-full mt-4"
            >
              Copy to Clipboard
            </Button>
          )}
        </Card>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Why Use a Paraphrasing Tool?</h2>
        <p>Paraphrasing is an essential skill in writing that involves restating information in your own words while maintaining the original meaning. Our paraphrasing tool provides numerous benefits for students, content creators, professionals, and anyone who works with written text:</p>
        
        <h3>Overcome Writer's Block</h3>
        <p>When you're struggling to find the right words or express concepts in a fresh way, our paraphrasing tool can help break through creative barriers. By offering alternative ways to express the same ideas, it provides inspiration and new perspectives that can jumpstart your writing process.</p>
        
        <h3>Improve Readability and Clarity</h3>
        <p>Sometimes original text can be overly complex, technical, or poorly structured. Our paraphrasing tool can simplify difficult concepts, reorganize sentences for better flow, and enhance overall clarity, making your content more accessible to your target audience.</p>
        
        <h3>Avoid Plagiarism</h3>
        <p>When researching and incorporating others' ideas into your work, proper paraphrasing is crucial to avoid plagiarism. Our tool helps you ethically reformulate text while preserving the original meaning, ensuring your work remains original and properly attributed.</p>
        
        <h3>Enhance Language Learning</h3>
        <p>For language learners, our paraphrasing tool serves as a valuable educational resource. By showing alternative ways to express the same idea, it helps expand vocabulary, understand linguistic patterns, and develop a more natural command of the language.</p>
        
        <h3>Create Unique Content</h3>
        <p>Content creators and marketers need to consistently produce fresh, engaging material. Our paraphrasing tool helps transform existing content into unique variations, making it valuable for content repurposing, creating multiple versions of marketing materials, or adapting content for different platforms.</p>
        
        <h2>Features of Our Advanced Paraphrasing Tool</h2>
        
        <h3>Multiple Paraphrasing Styles</h3>
        <p>Our tool offers various paraphrasing styles to meet different needs:</p>
        <ul>
          <li><strong>Standard:</strong> Balanced rewriting that maintains the original tone while changing the wording.</li>
          <li><strong>Academic:</strong> Formal rephrasing suitable for scholarly papers, using appropriate terminology and structures.</li>
          <li><strong>Simple:</strong> Transforms complex text into easier-to-understand language without losing the core meaning.</li>
          <li><strong>Creative:</strong> Adds flair and originality to the text, ideal for marketing or creative writing.</li>
          <li><strong>Professional:</strong> Business-appropriate rephrasing that maintains a polished, authoritative tone.</li>
          <li><strong>Casual:</strong> Converts formal text into a more conversational, approachable style.</li>
        </ul>
        
        <h3>Context-Aware Processing</h3>
        <p>Unlike basic word-replacement tools, our AI-powered paraphraser understands context and meaning. It considers the relationships between words, idiomatic expressions, and subject matter to produce coherent, meaningful paraphrases rather than awkward substitutions.</p>
        
        <h3>Maintains Original Meaning</h3>
        <p>Our tool is designed to preserve the core message and intent of your original text while changing the wording. This ensures that the paraphrased content accurately represents your ideas.</p>
        
        <h3>Fast and Efficient</h3>
        <p>Save time and effort with instant paraphrasing results. Our tool can process text in seconds, allowing you to quickly iterate and refine your content.</p>
        
        <h2>Best Practices for Using Our Paraphrasing Tool</h2>
        
        <h3>Review and Edit</h3>
        <p>While our paraphrasing tool is highly advanced, it's best to review the output and make any necessary adjustments. This ensures the paraphrased text aligns perfectly with your intent and maintains accuracy.</p>
        
        <h3>Understand Your Purpose</h3>
        <p>Choose the appropriate paraphrasing style based on your specific needs. If you're working on an academic paper, the academic style will provide more formal alternatives, while the creative style is better suited for marketing materials.</p>
        
        <h3>Use for Inspiration</h3>
        <p>Sometimes the best approach is to use our tool for inspiration rather than accepting the output verbatim. The paraphrased text can provide new perspectives and phrasings that you can further refine.</p>
        
        <h3>Fact Check</h3>
        <p>While our tool maintains the general meaning of the original text, always verify that specific facts, figures, and technical details remain accurate in the paraphrased version.</p>
        
        <h2>Applications for Our Paraphrasing Tool</h2>
        
        <h3>Academic Writing</h3>
        <p>Students and researchers can use our tool to help integrate source material into their papers, avoid unintentional plagiarism, and improve the clarity of complex academic concepts.</p>
        
        <h3>Content Creation</h3>
        <p>Bloggers, journalists, and content marketers can leverage our paraphrasing tool to refresh existing content, adapt material for different audiences, or find new ways to express familiar concepts.</p>
        
        <h3>Business Communications</h3>
        <p>Professionals can improve emails, reports, and presentations by paraphrasing draft content to enhance clarity, professionalism, and impact.</p>
        
        <h3>ESL Writing</h3>
        <p>Non-native English speakers can use our tool to see alternative ways to express their thoughts, helping them develop more natural and fluent writing skills.</p>
        
        <p>Start using our free paraphrasing tool today to transform your writing, overcome challenges, and communicate your ideas more effectively. Whether you're a student, professional, or content creator, our tool provides the support you need to produce high-quality, original content.</p>
      </div>
    </div>
  );
};

export default ParaphrasingTool;
