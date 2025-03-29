
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Copy, 
  Download, 
  Bookmark,
  Check,
  RefreshCw,
  Edit
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { BlogGeneratorFormValues } from "./BlogContentGeneratorForm";

export interface BlogContentResult {
  title: string;
  content: string;
  outline: string[];
  metaDescription: string;
  suggestedTags: string[];
}

interface BlogContentResultsProps {
  result: BlogContentResult | null;
  isLoading: boolean;
  formValues: BlogGeneratorFormValues;
  onRegenerateContent: () => void;
}

const BlogContentResults: React.FC<BlogContentResultsProps> = ({
  result,
  isLoading,
  formValues,
  onRegenerateContent
}) => {
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  
  if (isLoading) {
    return (
      <Card className="w-full mt-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Generating Blog Content</CardTitle>
          <CardDescription>Please wait while we create high-quality content for "{formValues.topic}"</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center py-10">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin mb-6"></div>
            <div className="space-y-2">
              <div className="h-4 w-64 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-48 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-56 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!result) {
    return null;
  }

  const handleCopyContent = (content: string, label: string) => {
    navigator.clipboard.writeText(content);
    setCopySuccess(label);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const handleDownloadContent = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `# ${result.title}\n\n`,
      `Meta Description: ${result.metaDescription}\n\n`,
      `## Outline\n${result.outline.map(item => `- ${item}`).join('\n')}\n\n`,
      result.content,
      `\n\nTags: ${result.suggestedTags.join(', ')}`
    ], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `${result.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card className="w-full mt-8">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <CardTitle className="text-2xl">{result.title}</CardTitle>
            <CardDescription className="mt-2">
              {result.metaDescription}
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => handleCopyContent(result.content, 'content')}
            >
              {copySuccess === 'content' ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-500" /> Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" /> Copy All
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleDownloadContent}
            >
              <Download className="h-4 w-4 mr-2" /> Download
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerateContent}
            >
              <RefreshCw className="h-4 w-4 mr-2" /> Regenerate
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {result.suggestedTags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="formatted">
          <TabsList className="mb-4">
            <TabsTrigger value="formatted">Formatted Content</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
            <TabsTrigger value="raw">Raw Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="formatted">
            <ScrollArea className="h-[600px] rounded-md border p-4">
              <div 
                className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-primary prose-p:text-foreground prose-a:text-primary"
                dangerouslySetInnerHTML={{ 
                  __html: result.content
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/\n/g, '<br />')
                    .replace(/^(.+?)$/gm, '<p>$1</p>')
                    .replace(/<p>#{1,6} (.+?)<\/p>/g, match => {
                      const level = (match.match(/#{1,6}/) || [''])[0].length;
                      const text = match.replace(/<p>#{1,6} (.+?)<\/p>/, '$1');
                      return `<h${level}>${text}</h${level}>`;
                    })
                    .replace(/<p>\* (.+?)<\/p>/g, '<li>$1</li>')
                    .replace(/<li>(.+?)<\/li>/g, '<ul><li>$1</li></ul>')
                    .replace(/<\/ul><ul>/g, '')
                    .replace(/<p>(\d+)\. (.+?)<\/p>/g, '<li>$2</li>')
                    .replace(/<li>(.+?)<\/li>/g, '<ol><li>$1</li></ol>')
                    .replace(/<\/ol><ol>/g, '')
                    .replace(/<p>(.+?): (.+?)<\/p>/g, '<dl><dt>$1</dt><dd>$2</dd></dl>')
                    .replace(/<\/dl><dl>/g, '')
                    .replace(/<p><strong>(.+?)<\/strong><\/p>/g, '<h3>$1</h3>')
                    .replace(/<p><em>(.+?)<\/em><\/p>/g, '<blockquote>$1</blockquote>')
                }}
              />
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="outline">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Outline</CardTitle>
                <CardDescription>
                  The structure of your generated content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.outline.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs mr-2">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="raw">
            <div className="relative">
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute right-4 top-4 z-10"
                onClick={() => handleCopyContent(result.content, 'raw')}
              >
                {copySuccess === 'raw' ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-green-500" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" /> Copy
                  </>
                )}
              </Button>
              <ScrollArea className="h-[600px] rounded-md border p-4 bg-muted/50">
                <pre className="text-sm whitespace-pre-wrap font-mono">
                  {result.content}
                </pre>
              </ScrollArea>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4 gap-4">
        <div className="w-full flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Generate SEO-optimized content in seconds
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Bookmark className="h-4 w-4 mr-2" /> Save
            </Button>
          </div>
        </div>
        <Alert className="w-full">
          <AlertTitle>Generated Content Notice</AlertTitle>
          <AlertDescription>
            This content is AI-generated and may require review before publishing. Always check for factual accuracy and make any necessary edits.
          </AlertDescription>
        </Alert>
      </CardFooter>
    </Card>
  );
};

export default BlogContentResults;
