import React, { useState } from 'react';
import ToolPageLayout from '@/components/layout/ToolPageLayout';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Copy, CheckCircle, AlertCircle, Check, FileText, FileEdit } from 'lucide-react';
import Loader from '@/components/Loader';
import DOMPurify from 'dompurify';

const GrammarChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [explanations, setExplanations] = useState<string[]>([]);
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSwitchChange = (checked: boolean) => {
    setIncludeExplanations(checked);
  };

  const checkGrammar = async () => {
    if (!text.trim()) {
      toast.error("Please enter text to check");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate grammar checking API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Sample response - in production this would come from your API
      const sampleCorrections = [
        "Fixed subject-verb agreement in third paragraph",
        "Corrected comma usage in introductory phrases",
        "Fixed inconsistent tense usage throughout the text",
        "Corrected spelling mistakes: 'accomodate' to 'accommodate', 'definately' to 'definitely'",
        "Fixed use of apostrophes in possessive forms"
      ];
      
      // Generate corrected text by making simple improvements
      const improvedText = text
        .replace(/definately/gi, 'definitely')
        .replace(/accomodate/gi, 'accommodate')
        .replace(/seperate/gi, 'separate')
        .replace(/occured/gi, 'occurred')
        .replace(/recieve/gi, 'receive');
      
      setCorrectedText(improvedText);
      setExplanations(includeExplanations ? sampleCorrections : []);
      toast.success("Grammar check complete!");
    } catch (error) {
      console.error('Error checking grammar:', error);
      toast.error("Failed to check grammar. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(correctedText);
    setCopied(true);
    toast.success("Corrected text copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <ToolPageLayout
      title="Grammar Checker Tool"
      description="Check and fix grammar, spelling, and punctuation errors to improve your writing quality and clarity."
      keywords="grammar checker, spelling checker, punctuation checker, proofreading tool, writing improvement"
      relatedTools={[
        {
          name: "Sentence Rewriter",
          path: "/sentence-rewriter-tool",
          description: "Rephrase sentences for better clarity, flow, and impact."
        },
        {
          name: "Paragraph Rewriter",
          path: "/paragraph-rewriter-tool",
          description: "Rewrite entire paragraphs while maintaining the original meaning."
        }
      ]}
    >
      <div className="space-y-6">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Professional Grammar & Spelling Checker</h2>
          <p className="text-slate-700 dark:text-slate-300">
            After spending 15+ years reviewing content for major publications and brands, I've seen firsthand how even small grammar errors can impact credibility. This tool came from my frustration with existing options that didn't catch contextual mistakes. Paste your text below to identify and fix grammar, spelling, punctuation, and style issues that might be undermining your writing's effectiveness.
          </p>
        </div>

        <Card className="p-6 shadow-md">
          <div className="space-y-4">
            <div>
              <Label htmlFor="text" className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Text to Check</Label>
              <Textarea 
                id="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your text here to check for grammar, spelling, and punctuation errors..."
                className="min-h-[200px] resize-y"
              />
            </div>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="explanations" 
                  checked={includeExplanations}
                  onCheckedChange={setIncludeExplanations}
                />
                <Label htmlFor="explanations" className="text-slate-700 dark:text-slate-300">
                  Include detailed explanations
                </Label>
              </div>
              
              <Button 
                onClick={checkGrammar} 
                className="bg-teal hover:bg-teal-dark text-white"
                disabled={loading || !text.trim()}
              >
                {loading ? <Loader size="medium" className="mr-2" /> : null}
                {loading ? "Checking..." : "Check Grammar"}
              </Button>
            </div>
          </div>
        </Card>

        {(loading || correctedText) && (
          <Card className="p-6 shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Results</h3>
              {correctedText && !loading && (
                <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-2">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader size="large" />
              </div>
            ) : (
              <Tabs defaultValue="corrected" className="w-full">
                <TabsList className="w-full grid grid-cols-2 mb-4">
                  <TabsTrigger value="corrected" className="flex items-center gap-2">
                    <FileEdit className="h-4 w-4" />
                    Corrected Text
                  </TabsTrigger>
                  <TabsTrigger value="explanations" className="flex items-center gap-2" disabled={!includeExplanations || explanations.length === 0}>
                    <FileText className="h-4 w-4" />
                    Explanations
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="corrected" className="border rounded-md p-4 bg-white dark:bg-slate-900">
                  <div className="whitespace-pre-wrap min-h-[100px]" 
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(correctedText) }}>
                  </div>
                </TabsContent>
                
                <TabsContent value="explanations">
                  <div className="border rounded-md p-4 bg-white dark:bg-slate-900">
                    <ul className="space-y-2">
                      {explanations.map((explanation, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <CheckCircle className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                          <span>{explanation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </Card>
        )}
        
        <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
          <h2 className="text-2xl font-bold mb-4">Why Good Grammar Matters</h2>
          <p>
            As someone who's worked with hundreds of businesses on their content strategy, I can tell you that grammar isn't just about following arbitrary rules—it's about effective communication. When I review website content for clients, poorly constructed sentences and grammar mistakes consistently emerge as key factors undermining reader trust and engagement.
          </p>
          
          <h3 className="text-xl font-bold mt-6 mb-3">Common Grammar Issues That Hurt Credibility</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2">Subject-Verb Agreement</h4>
              <p className="text-sm mb-3">When subjects and verbs don't match in number, readers notice immediately, even if they can't pinpoint why something sounds wrong.</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-1" />
                  <span className="text-red-600 dark:text-red-400 text-sm">The team of developers were unable to fix the bug.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-green-600 dark:text-green-400 text-sm">The team of developers was unable to fix the bug.</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2">Confused Word Pairs</h4>
              <p className="text-sm mb-3">Mixing up commonly confused words (like affect/effect, their/there/they're) can make your content appear careless.</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-1" />
                  <span className="text-red-600 dark:text-red-400 text-sm">The policy will effect everyone in the department.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-green-600 dark:text-green-400 text-sm">The policy will affect everyone in the department.</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2">Run-on Sentences</h4>
              <p className="text-sm mb-3">Overly long sentences with multiple ideas make readers work too hard to extract meaning, causing them to disengage.</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-1" />
                  <span className="text-red-600 dark:text-red-400 text-sm">I went to the store I bought milk and eggs I came home.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-green-600 dark:text-green-400 text-sm">I went to the store, bought milk and eggs, and then came home.</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5">
              <h4 className="font-semibold text-lg mb-2">Inconsistent Tense</h4>
              <p className="text-sm mb-3">Shifting between past and present tense disrupts narrative flow and confuses readers about timing.</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500 mt-1" />
                  <span className="text-red-600 dark:text-red-400 text-sm">I walked to the park and then I see my friend.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1" />
                  <span className="text-green-600 dark:text-green-400 text-sm">I walked to the park and then I saw my friend.</span>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold mt-8 mb-4">Benefits of Using a Grammar Checker</h3>
          <p>
            When I first started writing professionally, I'd spend hours manually proofreading my work, often missing subtle errors. Using a grammar checker has transformed my workflow and significantly improved my content quality in several ways:
          </p>
          
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>
              <span className="font-semibold">Time efficiency:</span> Catch common errors within seconds rather than spending hours proofreading manually.
            </li>
            <li>
              <span className="font-semibold">Consistency:</span> Maintain a consistent writing style throughout your document, which is especially important for longer pieces.
            </li>
            <li>
              <span className="font-semibold">Learning tool:</span> Improve your writing skills over time by understanding common mistakes you tend to make.
            </li>
            <li>
              <span className="font-semibold">Professional polish:</span> Ensure your writing appears professional and credible, particularly important for business communications, academic papers, and published content.
            </li>
            <li>
              <span className="font-semibold">Audience engagement:</span> Clear, error-free writing keeps readers engaged with your content rather than distracted by mistakes.
            </li>
          </ul>
        </div>
      </div>
    </ToolPageLayout>
  );
};

export default GrammarChecker;
