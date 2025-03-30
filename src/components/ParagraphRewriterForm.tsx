
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Loader from '@/components/Loader';
import { rewriteParagraph } from '@/utils/paragraphRewriter';
import ParagraphRewriterResults from './ParagraphRewriterResults';
import { useToast } from "@/components/ui/use-toast";
import { FileText, Wand2, Sparkles, RefreshCw } from 'lucide-react';

const ParagraphRewriterForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [originalText, setOriginalText] = useState('');
  const [tone, setTone] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [rewrittenText, setRewrittenText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!originalText || originalText.trim().length < 20) {
      toast({
        title: "Input too short",
        description: "Please enter a paragraph with at least 20 characters.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      const result = await rewriteParagraph(originalText, tone);
      setRewrittenText(result);
    } catch (error) {
      console.error("Error rewriting paragraph:", error);
      toast({
        title: "Error",
        description: "There was an error rewriting your paragraph. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setOriginalText('');
    setRewrittenText('');
    setTone('professional');
  };

  return (
    <div className="p-6 glass-morphism rounded-xl">
      {!rewrittenText ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="originalText" className="flex items-center gap-2 text-navy dark:text-white font-display">
              <FileText className="h-4 w-4 text-teal" />
              Enter your paragraph
            </Label>
            <Textarea 
              id="originalText"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Paste your paragraph here (minimum 20 characters)..."
              className="min-h-[200px] glass-input"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tone" className="flex items-center gap-2 text-navy dark:text-white font-display">
              <Wand2 className="h-4 w-4 text-teal" />
              Select tone
            </Label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger id="tone" className="w-full glass-select">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent className="glass-content">
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="creative">Creative</SelectItem>
                <SelectItem value="persuasive">Persuasive</SelectItem>
                <SelectItem value="simple">Simple & Clear</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-4">
            <Button 
              type="submit" 
              className="w-full glass-button-primary text-white flex items-center justify-center gap-2" 
              disabled={loading}
            >
              {loading ? <Loader size="sm" /> : <><Sparkles className="h-4 w-4" /> Rewrite Paragraph</>}
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleReset} 
              className="w-1/3 glass-button-outline flex items-center justify-center gap-2" 
              disabled={loading}
            >
              <RefreshCw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </form>
      ) : (
        <ParagraphRewriterResults 
          originalText={originalText}
          rewrittenText={rewrittenText}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default ParagraphRewriterForm;
