
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/Loader";
import { rewriteParagraph } from '@/utils/paragraphRewriter';
import ParagraphRewriterResults from './ParagraphRewriterResults';
import { useToast } from "@/components/ui/use-toast";

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
    <div className="p-6">
      {!rewrittenText ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="originalText">Enter your paragraph</Label>
            <Textarea 
              id="originalText"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Paste your paragraph here (minimum 20 characters)..."
              className="min-h-[200px]"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tone">Select tone</Label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger id="tone" className="w-full">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
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
            <Button type="submit" className="w-full bg-teal hover:bg-teal-dark text-white" disabled={loading}>
              {loading ? <Loader size="sm" /> : "Rewrite Paragraph"}
            </Button>
            <Button type="button" variant="outline" onClick={handleReset} className="w-1/3" disabled={loading}>
              Reset
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
