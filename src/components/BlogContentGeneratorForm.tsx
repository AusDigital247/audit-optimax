
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
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

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
});

export type BlogGeneratorFormValues = z.infer<typeof formSchema>;

interface BlogContentGeneratorFormProps {
  onSubmit: (values: BlogGeneratorFormValues) => void;
  isLoading: boolean;
}

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

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
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
            
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <span className="animate-spin mr-2">⏳</span> Generating Content...
                </span>
              ) : (
                <span className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" /> Generate Blog Content
                </span>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BlogContentGeneratorForm;
