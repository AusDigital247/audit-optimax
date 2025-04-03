import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import Loader from "@/components/Loader";
import { generateOllamaResponse } from "@/utils/ollamaApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ConclusionGenerator: React.FC = () => {
  const { t } = useLanguage();
  const [mainPoints, setMainPoints] = useState('');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [length, setLength] = useState('medium');
  const [conclusion, setConclusion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!mainPoints || mainPoints.trim().length < 20) {
      toast.error('Please enter at least 20 characters summarizing your main points');
      return;
    }

    if (!topic || topic.trim().length < 3) {
      toast.error('Please enter a topic for your conclusion');
      return;
    }

    setLoading(true);
    setConclusion('');

    try {
      const lengthInWords = {
        short: "100-150 words",
        medium: "150-250 words",
        long: "250-350 words"
      }[length];

      const prompt = `Generate a ${tone} conclusion for an article about "${topic}". 
      The conclusion should be ${lengthInWords} and should summarize these main points:
      ${mainPoints}
      
      The conclusion should summarize the key points, provide closure, and include a relevant call to action or final thought. Make it engaging and memorable.`;

      const systemPrompt = "You are an expert content writer specialized in crafting compelling conclusions for articles, essays, and blog posts. Your conclusions are engaging, summarize key points effectively, and leave readers with a strong final impression.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      setConclusion(response);
      toast.success('Conclusion generated successfully');
    } catch (error) {
      console.error('Error generating conclusion:', error);
      toast.error('Failed to generate conclusion. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Conclusion Generator Tool | Craft Perfect Endings</title>
        <meta name="description" content="Instantly craft compelling conclusions with our free AI conclusion generator. Create powerful endings for your essays, blog posts, and articles effortlessly." />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-navy dark:text-white mb-4">Conclusion Generator Tool</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Instantly craft compelling conclusions with this user-friendly tool. Elevate your writing effortlessly with powerful endings that leave a lasting impression.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Generate Your Conclusion</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Topic</label>
              <Input 
                placeholder="Enter your topic or title" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Main Points</label>
              <Textarea 
                placeholder="List the key points you want to summarize in your conclusion..." 
                className="min-h-[150px]"
                value={mainPoints}
                onChange={(e) => setMainPoints(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tone</label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="academic">Academic</SelectItem>
                    <SelectItem value="persuasive">Persuasive</SelectItem>
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Length</label>
                <Select value={length} onValueChange={setLength}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={handleGenerate} 
              className="w-full bg-teal hover:bg-teal-light text-white"
              disabled={loading}
            >
              {loading ? <Loader size="sm" /> : 'Generate Conclusion'}
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Your Conclusion</h2>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loader size="lg" />
            </div>
          ) : conclusion ? (
            <div className="min-h-[300px] p-4 border rounded-md bg-gray-50 dark:bg-navy-light overflow-auto">
              {conclusion}
            </div>
          ) : (
            <div className="min-h-[300px] flex justify-center items-center text-gray-500 dark:text-gray-400 text-center">
              <p>Your generated conclusion will appear here</p>
            </div>
          )}
          
          {conclusion && (
            <Button 
              onClick={() => {
                navigator.clipboard.writeText(conclusion);
                toast.success('Conclusion copied to clipboard');
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
        <h2>Why a Strong Conclusion Matters</h2>
        <p>A well-crafted conclusion is more than just a summary of your work—it's your final opportunity to make an impression on your reader. The conclusion serves as the last word on your topic, providing closure, synthesizing information, and leaving your audience with something to think about. Whether you're writing an academic paper, a blog post, or marketing content, your conclusion can make the difference between forgettable content and a memorable piece that achieves its purpose.</p>
        
        <h2>Common Challenges in Writing Conclusions</h2>
        <p>Many writers struggle with conclusions for various reasons:</p>
        
        <ul>
          <li><strong>Fatigue:</strong> After spending significant time crafting the main body of your content, mental fatigue can make it difficult to generate fresh insight for your conclusion.</li>
          <li><strong>Repetition:</strong> Finding the balance between summarizing key points without merely repeating what you've already written can be challenging.</li>
          <li><strong>Closure:</strong> Creating a sense of completion while still leaving readers with something to consider requires careful consideration.</li>
          <li><strong>Impact:</strong> Crafting a conclusion that resonates and leaves a lasting impression often demands creativity that may be depleted after completing the main content.</li>
        </ul>
        
        <h2>How Our Conclusion Generator Helps</h2>
        <p>Our AI-powered conclusion generator addresses these challenges by providing:</p>
        
        <ul>
          <li><strong>Fresh Perspective:</strong> By analyzing your main points and topic, our tool can generate conclusions that offer new insights and thoughtful framing.</li>
          <li><strong>Balanced Summary:</strong> The generator creates conclusions that effectively recap your key points without unnecessary repetition.</li>
          <li><strong>Appropriate Tone:</strong> Whether you need a professional, academic, persuasive, or inspirational conclusion, our tool adapts to your specified tone.</li>
          <li><strong>Custom Length:</strong> Generate conclusions of varying lengths depending on your content requirements.</li>
          <li><strong>Strong Closing Statements:</strong> Our AI excels at creating memorable final thoughts and appropriate calls to action that enhance the impact of your writing.</li>
        </ul>
        
        <h2>Types of Conclusions Our Generator Creates</h2>
        <p>Our tool can help you craft various types of conclusions:</p>
        
        <ul>
          <li><strong>Summarizing Conclusions:</strong> Recap the main arguments or points of your content in a fresh way.</li>
          <li><strong>Reflective Conclusions:</strong> Consider the implications of your topic and provide thoughtful insights.</li>
          <li><strong>Action-Oriented Conclusions:</strong> Encourage readers to take specific steps or consider certain perspectives.</li>
          <li><strong>Question-Based Conclusions:</strong> Leave readers with thought-provoking questions that extend the conversation.</li>
          <li><strong>Full-Circle Conclusions:</strong> Connect back to your introduction to create a sense of completion and harmony.</li>
        </ul>
        
        <h2>Best Practices for Using Our Conclusion Generator</h2>
        <p>To get the most out of our tool:</p>
        
        <ol>
          <li><strong>Be Specific with Your Topic:</strong> The more precise you are about your subject, the more relevant your generated conclusion will be.</li>
          <li><strong>Include Key Points:</strong> Provide all the main arguments or ideas you want summarized in your conclusion.</li>
          <li><strong>Choose the Right Tone:</strong> Select a tone that matches the rest of your content for consistency.</li>
          <li><strong>Review and Refine:</strong> Use the generated conclusion as a strong foundation, then personalize it to perfectly match your voice and style.</li>
          <li><strong>Test Different Options:</strong> Try generating multiple conclusions with different tones or lengths to find the perfect fit for your content.</li>
        </ol>
        
        <h2>When to Use a Conclusion Generator</h2>
        <p>Our tool is particularly helpful for:</p>
        
        <ul>
          <li><strong>Academic Papers:</strong> Create scholarly conclusions for essays, research papers, and dissertations.</li>
          <li><strong>Blog Posts:</strong> Wrap up your blog content with engaging, memorable conclusions.</li>
          <li><strong>Business Reports:</strong> End your professional reports with clear, authoritative closing statements.</li>
          <li><strong>Marketing Content:</strong> Finish your marketing materials with persuasive conclusions that drive action.</li>
          <li><strong>Speeches and Presentations:</strong> Develop powerful closing remarks that leave a lasting impression on your audience.</li>
        </ul>
        
        <p>Start using our conclusion generator today to transform your content's closing statements from an afterthought into a powerful, strategic element of your writing. With just a few clicks, you can create conclusions that effectively summarize your work, engage your readers, and leave a lasting impression.</p>
      </div>
    </div>
  );
};

export default ConclusionGenerator;
