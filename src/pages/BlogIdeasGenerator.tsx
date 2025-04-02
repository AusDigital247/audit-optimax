
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Copy, Download, RefreshCw, Lightbulb, Sparkles, BarChart3, PenTool, Tags } from 'lucide-react';

import { BlogIdeaGeneratorFormValues, BlogIdeaItem, BlogIdeasResponse, generateBlogIdeas } from '@/utils/blogIdeasGenerator';

const formSchema = z.object({
  topic: z.string().min(3, { message: 'Topic must be at least 3 characters' }),
  targetAudience: z.string().optional(),
  industry: z.string().optional(),
  keywordFocus: z.string().optional(),
  contentFormat: z.string().optional(),
});

const BlogIdeasGenerator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<BlogIdeasResponse | null>(null);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: '',
      targetAudience: '',
      industry: '',
      keywordFocus: '',
      contentFormat: 'blog-post',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      const response = await generateBlogIdeas(values as BlogIdeaGeneratorFormValues);
      setResults(response);
      
      if (!response.success) {
        toast.error(response.message || 'Failed to generate blog ideas');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(label);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const handleDownload = () => {
    if (!results?.data) return;
    
    let content = `# 5 BLOG IDEAS ABOUT "${form.getValues().topic.toUpperCase()}"\n\n`;
    
    results.data.ideas.forEach((idea, index) => {
      content += `## ${index + 1}. ${idea.title}\n\n`;
      content += `${idea.description}\n\n`;
      content += `### Key Points to Cover:\n`;
      idea.keyPoints.forEach(point => content += `- ${point}\n`);
      content += `\n### Target Keywords:\n`;
      idea.targetKeywords.forEach(keyword => content += `- ${keyword}\n`);
      content += `\n### Search Intents: ${idea.searchIntents.join(', ')}\n\n`;
      content += `---\n\n`;
    });
    
    content += `## SEO OPTIMIZATION TIPS\n\n`;
    results.data.seoTips.forEach((tip, index) => {
      content += `${index + 1}. ${tip}\n`;
    });
    
    content += `\n## CONTENT STRATEGY\n\n${results.data.contentStrategy}\n\n`;
    content += `---\nGenerated at ${new Date().toLocaleDateString()}`;
    
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `blog-ideas-${form.getValues().topic.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success('Ideas downloaded as Markdown file');
  };

  const contentFormats = [
    { value: 'blog-post', label: 'Blog Post' },
    { value: 'how-to-guide', label: 'How-To Guide' },
    { value: 'listicle', label: 'Listicle' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'tutorial', label: 'Tutorial' },
    { value: 'thought-leadership', label: 'Thought Leadership' },
    { value: 'industry-news', label: 'Industry News' },
  ];

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4 md:px-6">
      <Helmet>
        <title>Blog Ideas Generator | SEO-Optimized Content Ideation Tool</title>
        <meta
          name="description"
          content="Generate SEO-optimized blog ideas complete with keyword suggestions, content outlines, and search intent guidance. Perfect for content marketers and bloggers."
        />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Blog Ideas Generator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Generate 5 SEO-optimized blog ideas with key points to cover, keyword suggestions, and content strategy guidance.
        </p>
      </div>

      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="generator">Idea Generator</TabsTrigger>
          <TabsTrigger value="tips">SEO Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle>Generate Blog Ideas</CardTitle>
                  <CardDescription>
                    Fill out the form to generate 5 SEO-optimized blog ideas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Topic*</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Content Marketing" {...field} />
                            </FormControl>
                            <FormDescription>
                              The main topic you want to write about
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="targetAudience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Audience</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Small Business Owners" {...field} />
                            </FormControl>
                            <FormDescription>
                              Who will be reading your content
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Industry</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., E-commerce" {...field} />
                            </FormControl>
                            <FormDescription>
                              The industry your content focuses on
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="keywordFocus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Keyword Focus</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., SEO, traffic, rankings" {...field} />
                            </FormControl>
                            <FormDescription>
                              Specific keywords you want to target
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="contentFormat"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content Format</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a format" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {contentFormats.map(format => (
                                  <SelectItem key={format.value} value={format.value}>
                                    {format.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              The type of content you want to create
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating Ideas...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" /> Generate 5 Blog Ideas
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-8">
              {isLoading ? (
                <Card className="w-full h-full flex items-center justify-center">
                  <CardContent className="py-10">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="h-12 w-12 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                      <p className="text-lg font-medium">Generating blog ideas...</p>
                      <p className="text-muted-foreground text-center max-w-md">
                        We're creating 5 SEO-optimized blog ideas with key points to cover, keywords to target, and content strategy guidance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : results?.data ? (
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle>5 Blog Ideas for "{form.getValues().topic}"</CardTitle>
                      <CardDescription>
                        SEO-optimized content ideas with key points and keyword suggestions
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={handleDownload}
                      >
                        <Download className="h-4 w-4 mr-2" /> Download
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => form.handleSubmit(onSubmit)()}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" /> Refresh
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[600px] pr-4">
                      <div className="space-y-8">
                        {results.data.ideas.map((idea, index) => (
                          <Card key={index} className="border-2 border-muted">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mr-3">
                                    {index + 1}
                                  </div>
                                  <CardTitle className="text-xl">{idea.title}</CardTitle>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleCopy(
                                    `# ${idea.title}\n\n${idea.description}\n\n## Key Points to Cover:\n${idea.keyPoints.map(p => `- ${p}`).join('\n')}\n\n## Target Keywords:\n${idea.targetKeywords.map(k => `- ${k}`).join('\n')}`,
                                    `idea-${index}`
                                  )}
                                >
                                  {copySuccess === `idea-${index}` ? (
                                    <span className="text-green-500 text-xs flex items-center">Copied!</span>
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </div>
                              <CardDescription className="text-base mt-1">
                                {idea.description}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="pb-4 pt-0">
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium flex items-center mb-2">
                                    <PenTool className="h-4 w-4 mr-2 text-primary" /> Key Points to Cover
                                  </h4>
                                  <ul className="list-disc pl-5 space-y-1">
                                    {idea.keyPoints.map((point, i) => (
                                      <li key={i} className="text-muted-foreground">{point}</li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="font-medium flex items-center mb-2">
                                    <Tags className="h-4 w-4 mr-2 text-primary" /> Target Keywords
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {idea.targetKeywords.map((keyword, i) => (
                                      <span key={i} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                                        {keyword}
                                      </span>
                                    ))}
                                  </div>
                                  <h4 className="font-medium flex items-center mb-2 mt-4">
                                    <BarChart3 className="h-4 w-4 mr-2 text-primary" /> Search Intents
                                  </h4>
                                  <div className="flex flex-wrap gap-2">
                                    {idea.searchIntents.map((intent, i) => (
                                      <span key={i} className="border border-primary text-primary px-2 py-1 rounded-full text-xs">
                                        {intent}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        
                        <Separator className="my-8" />
                        
                        <div>
                          <h3 className="text-xl font-bold flex items-center mb-4">
                            <Lightbulb className="h-5 w-5 mr-2 text-primary" /> SEO Optimization Tips
                          </h3>
                          <Alert>
                            <AlertTitle>Improve your SEO with these tips</AlertTitle>
                            <AlertDescription>
                              <ul className="list-disc pl-5 mt-2 space-y-2">
                                {results.data.seoTips.map((tip, index) => (
                                  <li key={index}>{tip}</li>
                                ))}
                              </ul>
                            </AlertDescription>
                          </Alert>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold flex items-center mb-4">
                            <BarChart3 className="h-5 w-5 mr-2 text-primary" /> Content Strategy
                          </h3>
                          <Card>
                            <CardContent className="pt-6">
                              <p>{results.data.contentStrategy}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </ScrollArea>
                  </CardContent>
                </Card>
              ) : (
                <Card className="w-full h-full">
                  <CardContent className="flex flex-col items-center justify-center h-full py-16">
                    <div className="rounded-full bg-primary/10 p-6 mb-6">
                      <Lightbulb className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Generate Blog Ideas</h3>
                    <p className="text-muted-foreground text-center max-w-md mb-6">
                      Fill out the form to generate 5 SEO-optimized blog ideas complete with key points to cover, keywords to target, and content strategy guidance.
                    </p>
                    <Button 
                      variant="default" 
                      onClick={() => {
                        // Focus on the topic input
                        const topicInput = document.querySelector('input[name="topic"]');
                        if (topicInput) {
                          (topicInput as HTMLInputElement).focus();
                        }
                      }}
                    >
                      <Sparkles className="mr-2 h-4 w-4" /> Get Started
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tips">
          <Card>
            <CardHeader>
              <CardTitle>SEO Blog Content Best Practices</CardTitle>
              <CardDescription>
                Follow these tips to create blog content that ranks well and drives traffic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Keyword Research Fundamentals</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Focus on long-tail keywords (3+ words) for less competition</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Research keywords with commercial intent for higher conversions</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Include semantic keywords and related terms throughout content</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Use keyword research tools to find search volume and difficulty</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Analyze competitor content for keyword inspiration</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Content Structure for SEO</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Use a clear hierarchy with H1, H2, and H3 tags</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Create comprehensive content (1500+ words for competitive topics)</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Include table of contents for longer articles</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Write scannable content with short paragraphs and bullet points</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Optimize for featured snippets with direct answers to questions</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">On-Page Optimization</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Include primary keyword in title, URL, and first paragraph</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Optimize meta description with a clear call to action</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Add alt text to all images with descriptive keywords</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Use descriptive anchor text for internal links</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Keep URLs short and descriptive</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">User Experience Factors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Optimize for Core Web Vitals (page speed, interactivity)</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Make content mobile-friendly with responsive design</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Reduce bounce rate by hooking readers in the intro</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Add table of contents for easier navigation</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Include multimedia content (images, videos, infographics)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Content Strategy Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Create topic clusters with pillar and supporting content</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Update old content regularly to maintain relevance</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Develop content for different stages of the buyer journey</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Use data and statistics to build content authority</span>
                        </li>
                        <li className="flex">
                          <span className="font-medium mr-2">•</span>
                          <span>Monitor performance and refine strategy based on results</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BlogIdeasGenerator;
