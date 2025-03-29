
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import KeywordGeneratorForm from '@/components/KeywordGeneratorForm';
import KeywordResults, { KeywordResult } from '@/components/KeywordResults';
import { generateKeywords } from '@/utils/keywordGenerator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const KeywordGenerator = () => {
  const [results, setResults] = useState<KeywordResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [seedKeyword, setSeedKeyword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (values: {
    seedKeyword: string;
    industry?: string;
    keywordType: string;
  }) => {
    setIsLoading(true);
    setSeedKeyword(values.seedKeyword);
    setErrorMessage(null);

    try {
      const response = await generateKeywords(
        values.seedKeyword,
        values.industry,
        values.keywordType
      );

      if (response.success) {
        setResults(response.data);
      } else {
        setErrorMessage(response.message || 'Failed to generate keywords. Please try again.');
      }
    } catch (error) {
      console.error('Error generating keywords:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto py-10 px-4 md:px-6">
      <Helmet>
        <title>Keyword Generator Tool | SEO Research & Content Planning</title>
        <meta
          name="description"
          content="Generate hundreds of keyword ideas for SEO and content planning. Find long-tail keywords, questions, commercial terms, and more with our free keyword research tool."
        />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Keyword Generator Tool
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover hundreds of keyword ideas to boost your SEO strategy and content planning. Generate long-tail keywords, questions, and more.
        </p>
      </div>

      <Tabs defaultValue="generator" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="generator">Keyword Tool</TabsTrigger>
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

          <KeywordGeneratorForm onSubmit={handleSubmit} isLoading={isLoading} />
          <KeywordResults results={results} isLoading={isLoading} seedKeyword={seedKeyword} />
        </TabsContent>

        <TabsContent value="guide">
          <Card>
            <CardHeader>
              <CardTitle>How to Use the Keyword Generator Tool</CardTitle>
              <CardDescription>
                Follow these simple steps to get the most out of our keyword research tool
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">1</div>
                  <h3 className="text-lg font-medium mb-2">Enter a Seed Keyword</h3>
                  <p className="text-muted-foreground">Start with a primary keyword related to your topic or industry (e.g., "SEO" or "digital marketing")</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">2</div>
                  <h3 className="text-lg font-medium mb-2">Specify Your Industry</h3>
                  <p className="text-muted-foreground">Optional: Select your specific industry to get more targeted keyword suggestions</p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4">3</div>
                  <h3 className="text-lg font-medium mb-2">Choose Keyword Type</h3>
                  <p className="text-muted-foreground">Filter by keyword type to find long-tail, question-based, or commercial keywords</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Pro Tips for Using the Keyword Generator</h3>
                
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Start Broad, Then Narrow Down</h4>
                    <p className="text-muted-foreground">Begin with a general keyword to get a wide range of ideas, then refine your search using more specific terms</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Look for Low-Competition Keywords</h4>
                    <p className="text-muted-foreground">Focus on keywords with lower difficulty scores but reasonable search volume for quicker SEO wins</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Group Related Keywords</h4>
                    <p className="text-muted-foreground">Organize related keywords into topic clusters for more effective content planning</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-1">Analyze Competitor Keywords</h4>
                    <p className="text-muted-foreground">Enter your competitors' main keywords to discover opportunities they might be targeting</p>
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
                  <h3 className="text-xl font-semibold mb-2">What is a keyword generator?</h3>
                  <p>A keyword generator is a tool that helps you discover relevant search terms that your target audience is using to find products, services, or information online. It expands a seed keyword into hundreds of related keywords, phrases, and questions that you can use to optimize your website content, blog posts, and digital marketing campaigns.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How accurate is the search volume data?</h3>
                  <p>The search volume data provided is an estimate based on available data sources. For more precise data, we recommend cross-referencing with Google Keyword Planner or other professional SEO tools. Our tool provides a good starting point for identifying keyword opportunities, but exact search volumes may vary.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">What are long-tail keywords?</h3>
                  <p>Long-tail keywords are longer, more specific keyword phrases that visitors are more likely to use when they're closer to making a purchase or when they're using voice search. These keywords are less competitive but often convert better because they target users with specific intent. Examples include "affordable digital marketing services for small businesses" instead of just "digital marketing."</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How do I choose the best keywords for my website?</h3>
                  <p>When selecting keywords, consider these factors:
                  <br/><br/>
                  1. <strong>Search Volume</strong>: How many people search for this term monthly
                  <br/>
                  2. <strong>Keyword Difficulty</strong>: How hard it will be to rank for this term
                  <br/>
                  3. <strong>Relevance</strong>: How closely it matches your content and business
                  <br/>
                  4. <strong>Intent</strong>: Whether the searcher is looking to buy, learn, or find a specific site
                  <br/>
                  5. <strong>Competition</strong>: What other websites are targeting this keyword
                  <br/><br/>
                  The best strategy often involves targeting a mix of high-volume competitive keywords and lower-volume, lower-difficulty long-tail keywords.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How many keywords should I target on a single page?</h3>
                  <p>It's best to focus on one primary keyword and 2-4 closely related secondary keywords per page. This allows you to create focused, in-depth content that thoroughly addresses the topic. Targeting too many unrelated keywords on a single page can dilute your focus and result in lower rankings for all terms.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">What is keyword difficulty?</h3>
                  <p>Keyword difficulty is a metric that estimates how hard it would be to rank on the first page of search results for a particular keyword. It's typically measured on a scale of 0-100, with higher numbers indicating greater difficulty. Factors that influence keyword difficulty include:
                  <br/><br/>
                  - Domain authority of competing websites
                  <br/>
                  - Content quality of existing top-ranking pages
                  <br/>
                  - Number of backlinks to competing pages
                  <br/>
                  - Search intent match of competing content
                  <br/><br/>
                  Beginners should focus on keywords with lower difficulty scores to achieve quicker results.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How often should I do keyword research?</h3>
                  <p>Keyword research should be an ongoing process. We recommend conducting comprehensive keyword research when:
                  <br/><br/>
                  - Starting a new website or business
                  <br/>
                  - Launching new products or services
                  <br/>
                  - Creating a content calendar (quarterly or monthly)
                  <br/>
                  - Noticing significant traffic changes
                  <br/><br/>
                  Additionally, review and refine your keyword strategy quarterly to stay current with changing search trends, seasonal variations, and evolving user behavior.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">What is the difference between informational and commercial keywords?</h3>
                  <p><strong>Informational keywords</strong> are used by people looking for knowledge or answers. They often include words like "how to," "guide," "what is," or "learn." These keywords are great for blog posts, guides, and educational content.
                  <br/><br/>
                  <strong>Commercial keywords</strong> indicate purchase intent and are used by people looking to buy products or services. They often include words like "buy," "price," "discount," "review," or "best." These keywords are ideal for product pages, service pages, and comparison content.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">Can I export the keyword results?</h3>
                  <p>Yes, you can export all generated keywords to a CSV file by clicking the "Download CSV" button in the results section. This allows you to further analyze the data in spreadsheet software, share it with team members, or import it into other SEO tools.</p>
                </div>
                
                <div className="border rounded-lg p-5">
                  <h3 className="text-xl font-semibold mb-2">How do I use these keywords in my content?</h3>
                  <p>To effectively use keywords in your content:
                  <br/><br/>
                  1. Include your primary keyword in your title, H1 heading, URL, and within the first 100 words
                  <br/>
                  2. Use secondary keywords in subheadings (H2, H3)
                  <br/>
                  3. Incorporate keywords naturally throughout your text
                  <br/>
                  4. Include keywords in image alt text where relevant
                  <br/>
                  5. Use variations and synonyms rather than repeating the exact same keyword
                  <br/><br/>
                  Always prioritize creating high-quality, valuable content for human readers over keyword density. Modern search engines reward content that best satisfies user intent, not content stuffed with keywords.</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>

      <div className="mt-16 space-y-10">
        <div>
          <h2 className="text-3xl font-bold mb-6">Why Use Our Keyword Generator Tool?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Discover Untapped Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Find valuable long-tail keywords with lower competition that your competitors might have missed. These keywords often have higher conversion rates and are easier to rank for.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Understand User Intent</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our tool categorizes keywords by type, helping you understand whether users are searching to learn, buy, or compare. This insight allows you to create perfectly targeted content.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Optimize Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Use our keyword data to plan content that addresses real user needs. Group related keywords to create comprehensive content clusters that establish topical authority.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Improve PPC Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover high-intent, commercial keywords with CPC data to optimize your paid search campaigns. Target keywords with higher conversion potential and reasonable costs.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Track Competitive Keywords</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Identify what keywords your competitors are ranking for and find opportunities to outrank them with better, more targeted content.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Stay Ahead of Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our keyword tool helps you discover emerging search trends in your industry, allowing you to create timely content that captures growing search traffic.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-3xl font-bold mb-6">Expert SEO Tips for Keyword Research</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Focus on Search Intent</h3>
              <p>Modern SEO is all about satisfying user intent. When selecting keywords, consider what the searcher is trying to accomplish:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Informational</strong> - Users want to learn something</li>
                <li><strong>Navigational</strong> - Users are looking for a specific website</li>
                <li><strong>Commercial</strong> - Users are researching products/services before buying</li>
                <li><strong>Transactional</strong> - Users are ready to make a purchase</li>
              </ul>
              <p className="mt-3">Match your content type to the appropriate search intent for the best results.</p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Build Topic Clusters</h3>
              <p>Rather than targeting individual keywords in isolation, organize your content into topic clusters:</p>
              <ol className="list-decimal pl-6 mt-3 space-y-2">
                <li>Create a comprehensive "pillar page" around a main topic</li>
                <li>Develop multiple "cluster content" pieces that link to the pillar page</li>
                <li>Link cluster content together where relevant</li>
                <li>Use different keyword variations across these related pages</li>
              </ol>
              <p className="mt-3">This approach helps establish your site as an authority on the topic and improves your overall topical relevance in search engines.</p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Analyze Competitor Keywords</h3>
              <p>Study what keywords your competitors are ranking for to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Identify gaps in your own keyword strategy</li>
                <li>Find opportunities where competitor content is weak</li>
                <li>Discover high-value keywords in your industry</li>
                <li>Understand what content types are performing well</li>
              </ul>
              <p className="mt-3">Use our keyword tool to research your competitors' main terms, then create better, more comprehensive content to outrank them.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordGenerator;
