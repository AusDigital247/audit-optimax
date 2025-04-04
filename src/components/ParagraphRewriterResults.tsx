
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, RotateCcw } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface ParagraphRewriterResultsProps {
  originalText: string;
  rewrittenText: string;
  onReset: () => void;
}

const ParagraphRewriterResults: React.FC<ParagraphRewriterResultsProps> = ({
  originalText,
  rewrittenText,
  onReset
}) => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(rewrittenText);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Rewritten text copied to clipboard",
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="rewritten" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="rewritten">Rewritten Text</TabsTrigger>
          <TabsTrigger value="original">Original Text</TabsTrigger>
        </TabsList>
        
        <TabsContent value="rewritten" className="min-h-[200px]">
          <div className="border rounded-md p-4 bg-white dark:bg-navy-light/50 min-h-[200px] whitespace-pre-wrap">
            {rewrittenText}
          </div>
        </TabsContent>
        
        <TabsContent value="original" className="min-h-[200px]">
          <div className="border rounded-md p-4 bg-gray-50 dark:bg-navy/70 min-h-[200px] whitespace-pre-wrap">
            {originalText}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex space-x-4">
        <Button 
          onClick={handleCopy} 
          className="w-full bg-teal hover:bg-teal-dark text-white"
        >
          {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copied ? "Copied!" : "Copy Rewritten Text"}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={onReset} 
          className="w-1/3"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default ParagraphRewriterResults;
