
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BlogContentGeneratorForm, { BlogGeneratorFormValues } from '@/components/BlogContentGeneratorForm';
import BlogContentResults, { BlogContentResult } from '@/components/BlogContentResults';
import { generateBlogContent } from '@/utils/blogContentGenerator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlogContentGenerator = () => {
  const [result, setResult] = useState<BlogContentResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState<BlogGeneratorFormValues | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (values: BlogGeneratorFormValues) => {
    setIsLoading(true);
    setFormValues(values);
    setErrorMessage(null);

    try {
      const response = await generateBlogContent(values);

      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setErrorMessage(response.message || 'Failed to generate content. Please try again.');
      }
    } catch (error) {
      console.error('Error generating blog content:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerateContent = () => {
    if (formValues) {
      handleSubmit(formValues);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4 md:px-6">
      <Helmet>
        <title>Blog Content Generator | AI-Powered Content Creation Tool</title>
        <meta
          name="description"
          content="Create high-quality, SEO-optimized blog content in seconds with our AI content generator. Perfect for bloggers, marketers, and content creators looking to save time."
        />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Blog Content Generator
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Create high-quality, SEO-optimized blog content in seconds. Perfect for marketers, bloggers, and content creators.
        </p>
      </div>

      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="generator">Content Generator</TabsTrigger>
          <TabsTrigger value="guide">How To Use</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="generator">
          {errorMessage && (
            <Alert variant="destructive" className="mb-6">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          <BlogContentGeneratorForm 
            onSubmit={handleSubmit} 
            isLoading={isLoading} 
          />
          
          {(isLoading || result) && (
            <BlogContentResults 
              result={result} 
              isLoading={isLoading} 
              formValues={formValues!}
              onRegenerateContent={handleRegenerateContent}
            />
          )}
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>How to Use the Blog Content Generator</CardTitle>
              <CardDescription>
                Follow these simple steps to create high-quality blog content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">1</div>
                  <h3 className="text-lg font-medium mb-2">Enter Your Topic</h3>
                  <p className="text-muted-foreground">Start with a clear, specific topic for your blog post (e.g., "How to Improve Local SEO for Small Businesses")</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">2</div>
                  <h3 className="text-lg font-medium mb-2">Customize Settings</h3>
                  <p className="text-muted-foreground">Select content type, tone, target word count, and add any specific requirements</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">3</div>
                  <h3 className="text-lg font-medium mb-2">Generate & Refine</h3>
                  <p className="text-muted-foreground">Review the generated content, edit as needed, and download or copy for your use</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Tips for Better Content Generation</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Be Specific with Your Topic</h4>
                    <p className="text-muted-foreground">The more specific your topic, the more focused and valuable the generated content will be</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Include Target Keywords</h4>
                    <p className="text-muted-foreground">Add relevant keywords to ensure your content is optimized for search engines</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Choose the Right Tone</h4>
                    <p className="text-muted-foreground">Match the tone to your audience and brand voice for more effective content</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Add Specific Requirements</h4>
                    <p className="text-muted-foreground">Use the "Additional Notes" field to specify any points you want included in the content</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq">
          <ScrollArea className="h-[600px]">
            <div className="space-y-6 pr-4">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">Is the content generated unique?</h3>
                  <p>Yes, our content generator creates unique content for each request. However, as with any AI-generated content, we recommend reviewing and editing the output to add your unique perspective, ensure factual accuracy, and adjust to your specific brand voice. This review process also helps avoid potential duplicate content issues across the web.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How should I use the generated content?</h3>
                  <p>The generated content should be used as a starting point or first draft. For best results:
                  <br/><br/>
                  1. Review the content for accuracy and relevance
                  <br/>
                  2. Add your unique insights, examples, and perspective
                  <br/>
                  3. Customize the tone and language to match your brand voice
                  <br/>
                  4. Enhance with relevant images, quotes, or data points
                  <br/>
                  5. Format the content for readability on your platform
                  <br/><br/>
                  This approach ensures the content adds value for your readers while maintaining your brand's authenticity.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">Will search engines penalize AI-generated content?</h3>
                  <p>Google and other search engines have stated they don't penalize AI content specifically, but they do evaluate content based on quality, relevance, and value to users. Content that is poorly edited, lacks originality, or doesn't provide value may perform poorly regardless of how it was created.
                  <br/><br/>
                  To ensure your AI-generated content performs well:
                  <br/><br/>
                  - Edit thoroughly to add unique insights
                  <br/>
                  - Ensure factual accuracy and up-to-date information
                  <br/>
                  - Add original research, examples, or case studies
                  <br/>
                  - Make it genuinely helpful to your target audience
                  <br/><br/>
                  Well-edited AI content that provides value can rank well in search results.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">What content types work best with the generator?</h3>
                  <p>Our content generator performs well with various content types, but works particularly well for:
                  <br/><br/>
                  - How-to guides and tutorials
                  <br/>
                  - Listicles and roundups
                  <br/>
                  - Explanatory articles
                  <br/>
                  - Basic industry overviews
                  <br/>
                  - Product comparisons
                  <br/><br/>
                  Content that requires highly specialized knowledge, original research, personal anecdotes, or brand-specific voice may need more extensive editing. The tool works best when you provide clear, specific topics and additional guidance in the form field.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How long does it take to generate content?</h3>
                  <p>The content generation process typically takes between 15-60 seconds, depending on:
                  <br/><br/>
                  - The requested word count
                  <br/>
                  - The complexity of the topic
                  <br/>
                  - Current system load
                  <br/><br/>
                  Longer, more comprehensive content will naturally take more time to generate. If your request takes longer than expected, the system might be experiencing higher than normal usage or processing a particularly complex request.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How do I make the content more SEO-friendly?</h3>
                  <p>To optimize the generated content for search engines:
                  <br/><br/>
                  1. Include your target keywords in the "Keywords" field when generating content
                  <br/>
                  2. Use the generated meta description for your blog post
                  <br/>
                  3. Structure the content with proper H2, H3 headings
                  <br/>
                  4. Add internal links to relevant content on your site
                  <br/>
                  5. Include external links to authoritative sources
                  <br/>
                  6. Add alt text to any images you include
                  <br/>
                  7. Optimize the URL structure using keywords
                  <br/><br/>
                  Remember that high-quality, valuable content that addresses user needs is the foundation of good SEO. Technical optimizations work best when the content itself is excellent.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">Can I generate content in languages other than English?</h3>
                  <p>Currently, our content generator works best with English. While it may produce content in other languages, the quality, accuracy, and fluency may vary significantly. We're working on improving multi-language support in future updates.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">What's the difference between different content tones?</h3>
                  <p>Different tones convey different feelings and are appropriate for different audiences:
                  <br/><br/>
                  - <strong>Informative</strong>: Factual, educational, focuses on providing clear information
                  <br/>
                  - <strong>Conversational</strong>: Casual, friendly, uses "you" and "I", like talking to a friend
                  <br/>
                  - <strong>Professional</strong>: Formal, authoritative, business-appropriate language
                  <br/>
                  - <strong>Persuasive</strong>: Convincing, focuses on benefits and calls-to-action
                  <br/>
                  - <strong>Humorous</strong>: Light-hearted, entertaining, uses jokes or wordplay
                  <br/><br/>
                  Choose a tone that matches your brand voice and resonates with your target audience.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">Is there a limit to how many articles I can generate?</h3>
                  <p>The number of articles you can generate depends on your subscription plan and usage limits. Free users may have daily or monthly generation limits, while paid subscribers typically have higher or unlimited generation capabilities. Check your account details for specific information about your usage limits.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How do I cite sources when using AI-generated content?</h3>
                  <p>When using AI-generated content that includes facts, statistics, or specific claims:
                  <br/><br/>
                  1. Verify the information using trusted sources
                  <br/>
                  2. Add proper citations for verified information
                  <br/>
                  3. Link to original research when applicable
                  <br/>
                  4. Consider mentioning that the content was created with AI assistance
                  <br/><br/>
                  Even when using AI tools, maintaining editorial standards and ensuring factual accuracy remains your responsibility. Adding proper citations enhances your content's credibility and provides value to readers.</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="mt-16 space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Use Our Blog Content Generator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Save Time and Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create high-quality blog posts in minutes rather than hours. Our content generator helps you overcome writer's block and produce content consistently without exhausting your team.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>SEO-Optimized Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Generate content that's structured for search engines with proper headings, keyword placement, and meta descriptions. Rank higher and attract more organic traffic.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Maintain Consistent Publishing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Keep your content calendar full with less effort. Regular publishing builds audience engagement and improves your site's search visibility over time.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Scale Your Content Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create more content across multiple topics without increasing your budget. Expand your content reach and cover more ground in your industry.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Overcome Writer's Block</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get unstuck with AI-generated content that provides a solid starting point. Use the generated outline and content as a framework to build upon.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Professional Quality Output</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our generator creates well-structured, grammatically correct content that follows best practices for web writing. The output is ready to use with minimal editing.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-3xl font-bold mb-6">Content Creation Best Practices</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Know Your Audience</h3>
              <p>Understanding who your content is for makes it more effective:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Create audience personas with specific demographics, interests, and pain points</li>
                <li>Research the questions and concerns your audience has about your topic</li>
                <li>Adjust your content's tone, complexity, and examples to match your audience</li>
                <li>Use language and terminology that resonates with your specific readers</li>
              </ul>
              <p className="mt-3">The more you know about your audience, the more relevant and valuable your content will be.</p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Focus on Readability</h3>
              <p>Well-structured content keeps readers engaged:</p>
              <ol className="list-decimal pl-6 mt-3 space-y-2">
                <li>Use short paragraphs (2-4 sentences)</li>
                <li>Include subheadings to break up text and guide readers</li>
                <li>Add bullet points and numbered lists for scannable content</li>
                <li>Incorporate relevant images, charts, or infographics</li>
                <li>Use transitional phrases to improve flow</li>
                <li>Vary sentence length for better rhythm</li>
              </ol>
              <p className="mt-3">These formatting techniques make your content more digestible and increase the chances readers will stay on your page longer.</p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Add Your Unique Value</h3>
              <p>Differentiate your content by adding elements that AI can't provide:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Include personal experiences or anecdotes</li>
                <li>Add original research, surveys, or data you've collected</li>
                <li>Share industry insights from your unique perspective</li>
                <li>Include quotes from interviews you've conducted</li>
                <li>Present case studies from your own clients or projects</li>
              </ul>
              <p className="mt-3">These unique elements make your content stand out from competitors and provide additional value to your readers.</p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Create a Strong Call-to-Action</h3>
              <p>Guide your readers on what to do next:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Clearly state what action you want readers to take</li>
                <li>Make sure the CTA relates to the content they just read</li>
                <li>Use action-oriented language that creates urgency</li>
                <li>Explain the benefit of taking the suggested action</li>
                <li>Place your primary CTA prominently at the end of your content</li>
                <li>Consider adding secondary CTAs throughout longer articles</li>
              </ul>
              <p className="mt-3">A compelling CTA turns passive readers into active participants in your marketing funnel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContentGenerator;
