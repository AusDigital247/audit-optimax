
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Lightbulb } from "lucide-react";

const formSchema = z.object({
  topic: z.string().min(5, {
    message: "Topic must be at least 5 characters.",
  }),
  keywords: z.string().optional(),
  contentType: z.string().default("blog-post"),
  tone: z.string().default("informative"),
  wordCount: z.string().default("1000"),
  targetAudience: z.string().optional(),
  additionalNotes: z.string().optional(),
  generateIdeasOnly: z.boolean().default(false),
});

export type BlogGeneratorFormValues = z.infer<typeof formSchema>;

interface BlogContentGeneratorFormProps {
  onSubmit: (values: BlogGeneratorFormValues) => void;
  isLoading: boolean;
}

// Blog idea examples for specific topics
const blogIdeas = {
  seo: [
    {
      title: "SEO Strategies for 2025",
      points: [
        "AI-powered SEO techniques and tools",
        "Voice search optimization strategies",
        "Video content SEO best practices",
        "Mobile-first indexing advanced methods",
        "Local SEO for emerging platforms"
      ]
    },
    {
      title: "YouTube SEO Best Practices",
      points: [
        "Keyword-rich titles and descriptions",
        "Creating custom thumbnails that increase CTR",
        "Using cards and end screens effectively",
        "Optimizing video transcripts for search",
        "Building playlists for improved session time"
      ]
    },
    {
      title: "Image SEO Optimization Guide",
      points: [
        "Using descriptive filenames and alt text",
        "Implementing structured data for images",
        "Image compression and loading speed",
        "Creating image sitemaps",
        "Leveraging visual search optimization"
      ]
    },
    {
      title: "E-commerce SEO Strategies",
      points: [
        "Product page optimization techniques",
        "Category page structure best practices",
        "Schema markup for products and reviews",
        "Managing out-of-stock products",
        "Mobile checkout optimization"
      ]
    },
    {
      title: "Local SEO Tactics for Small Businesses",
      points: [
        "Google Business Profile optimization",
        "Local link building strategies",
        "Citation building and management",
        "Localized content creation",
        "Review management and reputation"
      ]
    }
  ]
};

const BlogContentGeneratorForm: React.FC<BlogContentGeneratorFormProps> = ({
  onSubmit,
  isLoading
}) => {
  const { toast } = useToast();
  const form = useForm<BlogGeneratorFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      keywords: "",
      contentType: "blog-post",
      tone: "informative",
      wordCount: "1000",
      targetAudience: "",
      additionalNotes: "",
      generateIdeasOnly: false,
    },
  });

  const handleFormSubmit = (values: BlogGeneratorFormValues) => {
    if (!values.topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic for your content",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(values);
  };

  const generateIdeasOnly = form.watch("generateIdeasOnly");

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <FileText className="h-6 w-6 text-teal" />
            Blog Content Generator
          </CardTitle>
          <CardDescription>
            Generate complete blog content or just get ideas for your next SEO-focused article
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
              
              <div className="flex items-center space-x-2">
                <FormField
                  control={form.control}
                  name="generateIdeasOnly"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          id="generateIdeasOnly"
                          className="h-4 w-4 rounded border-gray-300 text-teal focus:ring-teal"
                        />
                      </FormControl>
                      <label 
                        htmlFor="generateIdeasOnly" 
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Just need blog ideas (see examples below)
                      </label>
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold">Blog Topic</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="E.g., 'How to Improve SEO for Small Businesses'" 
                        className="h-12 text-base" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Enter a clear, specific topic for your blog post
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {!generateIdeasOnly && (
                <>
                  <FormField
                    control={form.control}
                    name="keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Keywords (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="E.g., 'SEO, small business, local SEO, Google ranking'" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Comma-separated keywords to include in your content
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="contentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select content type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="blog-post">Blog Post</SelectItem>
                              <SelectItem value="article">Article</SelectItem>
                              <SelectItem value="how-to-guide">How-to Guide</SelectItem>
                              <SelectItem value="listicle">Listicle</SelectItem>
                              <SelectItem value="case-study">Case Study</SelectItem>
                              <SelectItem value="product-review">Product Review</SelectItem>
                              <SelectItem value="opinion-piece">Opinion Piece</SelectItem>
                              <SelectItem value="news-update">News Update</SelectItem>
                              <SelectItem value="interview">Interview</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="tone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Tone</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select tone" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="informative">Informative</SelectItem>
                              <SelectItem value="conversational">Conversational</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="friendly">Friendly</SelectItem>
                              <SelectItem value="persuasive">Persuasive</SelectItem>
                              <SelectItem value="authoritative">Authoritative</SelectItem>
                              <SelectItem value="humorous">Humorous</SelectItem>
                              <SelectItem value="formal">Formal</SelectItem>
                              <SelectItem value="inspirational">Inspirational</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="wordCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Word Count</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select word count" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="500">Short (~500 words)</SelectItem>
                              <SelectItem value="1000">Medium (~1000 words)</SelectItem>
                              <SelectItem value="1500">Long (~1500 words)</SelectItem>
                              <SelectItem value="2000">Comprehensive (~2000 words)</SelectItem>
                              <SelectItem value="3000">In-depth (~3000 words)</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="targetAudience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Audience (Optional)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="E.g., 'Small business owners, Marketing managers'" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="additionalNotes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific points to include, examples, or structure preferences"
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">⏳</span> {generateIdeasOnly ? "Generating Ideas..." : "Generating Content..."}
                  </span>
                ) : (
                  <span className="flex items-center">
                    {generateIdeasOnly ? (
                      <>
                        <Lightbulb className="mr-2 h-5 w-5" /> Generate Blog Ideas
                      </>
                    ) : (
                      <>
                        <FileText className="mr-2 h-5 w-5" /> Generate Blog Content
                      </>
                    )}
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {/* Example Blog Ideas Section */}
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            Example SEO Blog Ideas
          </CardTitle>
          <CardDescription>
            Use these ideas as inspiration for your next SEO blog post
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {blogIdeas.seo.map((idea, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-navy-light/50 transition-colors">
              <h3 className="text-lg font-semibold mb-2 text-teal dark:text-teal-light">{idea.title}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {idea.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 dark:text-gray-300">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogContentGeneratorForm;
