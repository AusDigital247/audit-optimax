import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, ExternalLink as ExternalLinkIcon, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { checkGrammar } from '@/utils/hashtagGenerator';
import { Loader2 } from 'lucide-react';

interface GrammarCheckerResponse {
  correctedText: string;
  explanations: string[];
}

const GrammarChecker: React.FC = () => {
  const [text, setText] = useState('');
  const [correctedText, setCorrectedText] = useState('');
  const [explanations, setExplanations] = useState<string[]>([]);
  const [includeExplanations, setIncludeExplanations] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSwitchChange = (checked: boolean) => {
    setIncludeExplanations(checked);
  };

  const check = async () => {
    if (!text.trim()) {
      toast.error("Please enter text to check");
      return;
    }

    setLoading(true);
    try {
      const grammarCheckResult: GrammarCheckerResponse = await checkGrammar({
        text: text,
        includeExplanations: includeExplanations
      });
      
      setCorrectedText(grammarCheckResult.correctedText);
      setExplanations(grammarCheckResult.explanations);
      toast.success("Grammar check complete!");
    } catch (error) {
      console.error('Error checking grammar:', error);
      toast.error("Failed to check grammar. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Grammar Checker Tool | Check & Fix Grammar Errors Online"
        description="Improve your writing with our free grammar checker tool. Instantly check for grammar, spelling, and punctuation errors in your text with detailed explanations."
        keywords="grammar checker, free grammar checker, spelling checker, punctuation checker, proofreading tool"
        canonicalPath="/grammar-checker-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Grammar Checker Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Instantly check your text for grammar, spelling, and punctuation errors to improve your writing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Detailed Explanations</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Grammar Checker</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Enter your text below to check for grammar, spelling, and punctuation errors.</p>
          
          <div className="mb-4">
            <Label htmlFor="text" className="block text-gray-700 dark:text-gray-300 mb-2">Text to Check</Label>
            <Textarea
              id="text"
              name="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Enter your text here..."
              className="w-full h-48 p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Switch id="explanations" checked={includeExplanations} onCheckedChange={handleSwitchChange} />
              <Label htmlFor="explanations" className="text-gray-700 dark:text-gray-300">Include Explanations</Label>
            </div>
          </div>
          
          <Button 
            onClick={check} 
            disabled={loading}
            className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Checking Grammar...
              </>
            ) : (
              <>Check Grammar</>
            )}
          </Button>
        </div>
        
        {correctedText && (
          <Card className="w-full max-w-4xl mx-auto p-6 mb-12">
            <Tabs defaultValue="correctedText" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="correctedText">Corrected Text</TabsTrigger>
                <TabsTrigger value="explanations" disabled={explanations.length === 0}>Explanations</TabsTrigger>
              </TabsList>
              <TabsContent value="correctedText" className="mt-6">
                <div className="bg-gray-50 dark:bg-navy-dark p-4 rounded-lg mb-4">
                  <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                    {correctedText}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="explanations" className="mt-6">
                {explanations.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {explanations.map((explanation, index) => (
                      <li key={index} className="text-gray-700 dark:text-gray-300 mb-2">{explanation}</li>
                    ))}
                  </ul>
                ) : (
                  <Alert variant="destructive">
                    <Info className="h-4 w-4 mr-2" />
                    <AlertTitle>No Explanations Available</AlertTitle>
                    <AlertDescription>Explanations are not available for this text.</AlertDescription>
                  </Alert>
                )}
              </TabsContent>
            </Tabs>
          </Card>
        )}
        
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This Grammar Checker Tool is currently in development. Soon you'll be able to check and correct grammar, spelling, and punctuation errors in your text with detailed explanations.
          </AlertDescription>
        </Alert>
        
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Related Writing Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Paragraph Rewriter</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Rewrite paragraphs to improve clarity, eliminate redundancy, and enhance readability.</p>
                  <Link
                    to="/paragraph-rewriter-tool"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Try this tool</span>
                    <ExternalLinkIcon className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Sentence Rewriter</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Rephrase individual sentences to improve flow, clarity, and impact in your writing.</p>
                  <Link
                    to="/sentence-rewriter-tool"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Try this tool</span>
                    <ExternalLinkIcon className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Explore More Tools</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Enhance your writing and content creation with our suite of free SEO and text tools.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Info className="h-4 w-4 mr-2" />
              Discover All Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default GrammarChecker;
