
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, RefreshCw, Download, FileText, FileEdit } from 'lucide-react';
import { toast } from "sonner";
import DOMPurify from 'dompurify';

interface SentenceRewriterResultsProps {
  originalText: string;
  rewrittenText: string;
  onReset: () => void;
}

const SentenceRewriterResults: React.FC<SentenceRewriterResultsProps> = ({
  originalText,
  rewrittenText,
  onReset
}) => {
  const [copied, setCopied] = useState(false);
  const [sanitizedOriginal, setSanitizedOriginal] = useState('');
  const [sanitizedRewritten, setSanitizedRewritten] = useState('');

  // Sanitize inputs on component mount and when inputs change
  useEffect(() => {
    setSanitizedOriginal(DOMPurify.sanitize(originalText));
    setSanitizedRewritten(DOMPurify.sanitize(rewrittenText));
  }, [originalText, rewrittenText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(sanitizedRewritten);
    setCopied(true);
    toast.success("Rewritten text copied to clipboard");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([sanitizedRewritten], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "rewritten-sentence.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Rewritten text downloaded as TXT file");
  };

  return (
    <div className="space-y-6 glass-morphism p-6 rounded-xl">
      <Tabs defaultValue="rewritten" className="w-full">
        <TabsList className="grid w-full grid-cols-2 glass-tabs mb-4">
          <TabsTrigger value="rewritten" className="flex items-center gap-2">
            <FileEdit className="h-4 w-4" /> Rewritten Text
          </TabsTrigger>
          <TabsTrigger value="original" className="flex items-center gap-2">
            <FileText className="h-4 w-4" /> Original Text
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="rewritten" className="min-h-[120px]">
          <div className="border rounded-md p-4 bg-white/60 dark:bg-navy-light/50 min-h-[120px] whitespace-pre-wrap glass-content">
            {sanitizedRewritten}
          </div>
        </TabsContent>
        
        <TabsContent value="original" className="min-h-[120px]">
          <div className="border rounded-md p-4 bg-gray-50/80 dark:bg-navy/70 min-h-[120px] whitespace-pre-wrap glass-content-alt">
            {sanitizedOriginal}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={handleCopy} 
          className="w-full bg-teal hover:bg-teal-dark text-white glass-button-primary flex items-center justify-center gap-2"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy Rewritten Text"}
        </Button>
        
        <Button
          onClick={handleDownload}
          variant="secondary"
          className="w-full glass-button-secondary flex items-center justify-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Text
        </Button>
        
        <Button 
          variant="outline" 
          onClick={onReset} 
          className="w-full sm:w-1/3 glass-button-outline flex items-center justify-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default SentenceRewriterResults;
