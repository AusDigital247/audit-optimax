import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search, Copy, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateOllamaResponse } from '@/utils/ollamaApi';
import { toast } from "sonner";

const TiktokHashtagGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: '',
    niche: 'entertainment',
    audience: 'general',
    count: '20'
  });
  
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateHashtags = async () => {
    if (!formData.topic) {
      toast.error("Please enter a topic for your TikTok content");
      return;
    }

    setLoading(true);
    try {
      const prompt = `
        Generate ${formData.count} TikTok hashtags for content about "${formData.topic}" 
        in the ${formData.niche} niche, targeting a ${formData.audience} audience.
        
        Include a mix of:
        - Popular hashtags with high view counts (for immediate visibility)
        - Medium-sized hashtags (for better chance of trending)
        - Niche-specific hashtags (for targeted reach)
        - A few trending hashtags if relevant
        
        Format the response as a simple list of hashtags, each starting with #, without numbering or additional text.
        Do not repeat hashtags and ensure they are all valid for TikTok (no special characters except #).
      `;

      const systemPrompt = "You are a TikTok growth specialist who excels at generating strategic hashtag combinations that maximize reach and engagement for TikTok content. Provide only the hashtags without any additional explanation or commentary.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the response to extract hashtags
      const extractedHashtags = response
        .split(/[\n\r\s,]+/)
        .map(tag => tag.trim())
        .filter(tag => tag.startsWith('#') && tag.length > 1)
        .map(tag => tag.replace(/[^a-zA-Z0-9#]/g, ''));
      
      if (extractedHashtags.length > 0) {
        setHashtags(extractedHashtags);
      } else {
        // Fallback parsing if the AI didn't format correctly
        const fallbackParsing = response
          .match(/#[a-zA-Z0-9]+/g) || [];
          
        setHashtags(fallbackParsing);
      }
      
      toast.success(`Generated ${extractedHashtags.length} hashtags for your TikTok content`);
    } catch (error) {
      console.error('Error generating hashtags:', error);
      toast.error("Failed to generate hashtags. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Hashtags copied to clipboard");
  };

  const copyAllHashtags = () => {
    const allHashtags = hashtags.join(' ');
    navigator.clipboard.writeText(allHashtags);
    toast.success("All hashtags copied to clipboard");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="TikTok Hashtag Generator | Boost Your Video Reach"
        description="Generate trending TikTok hashtags that increase your video's visibility and engagement. Our free AI hashtag generator helps you reach your target audience and grow your TikTok presence."
        keywords="tiktok hashtag generator, tiktok hashtags, viral tiktok hashtags, hashtag research, tiktok growth, tiktok marketing"
        canonicalPath="/tiktok-hashtag-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            TikTok Hashtag Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Find trending, relevant hashtags to boost your TikTok videos' visibility and engagement. Reach new audiences and grow your following with strategic hashtag combinations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Trending Hashtags</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Niche-Specific</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">TikTok Hashtag Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Generate trending hashtags for your TikTok videos to maximize reach and engagement.</p>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="topic" className="block text-gray-700 dark:text-gray-300 mb-2">What's your video about? *</Label>
              <Input
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                placeholder="E.g., dance challenge, cooking tutorial, fitness tips, comedy skit..."
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="niche" className="block text-gray-700 dark:text-gray-300 mb-2">Content Niche</Label>
                <Select 
                  value={formData.niche} 
                  onValueChange={(value) => handleSelectChange('niche', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select content niche" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                    <SelectItem value="food">Food & Cooking</SelectItem>
                    <SelectItem value="fitness">Fitness & Health</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="diy">DIY & Crafts</SelectItem>
                    <SelectItem value="comedy">Comedy</SelectItem>
                    <SelectItem value="business">Business & Finance</SelectItem>
                    <SelectItem value="tech">Tech</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="audience" className="block text-gray-700 dark:text-gray-300 mb-2">Target Audience</Label>
                <Select 
                  value={formData.audience} 
                  onValueChange={(value) => handleSelectChange('audience', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select target audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teens">Teens (13-17)</SelectItem>
                    <SelectItem value="young-adults">Young Adults (18-24)</SelectItem>
                    <SelectItem value="adults">Adults (25-34)</SelectItem>
                    <SelectItem value="mature-adults">Mature Adults (35-44)</SelectItem>
                    <SelectItem value="general">Mixed/All Ages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label htmlFor="count" className="block text-gray-700 dark:text-gray-300 mb-2">Number of Hashtags</Label>
              <Select 
                value={formData.count} 
                onValueChange={(value) => handleSelectChange('count', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Number of hashtags" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 hashtags</SelectItem>
                  <SelectItem value="15">15 hashtags</SelectItem>
                  <SelectItem value="20">20 hashtags</SelectItem>
                  <SelectItem value="30">30 hashtags</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={generateHashtags} 
              disabled={loading}
              className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Hashtags...
                </>
              ) : (
                <>Generate TikTok Hashtags</>
              )}
            </Button>
          </div>
        </div>
        
        {hashtags.length > 0 && (
          <Card className="w-full max-w-4xl mx-auto p-6 mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your TikTok Hashtags</h2>
              <Button variant="outline" size="sm" onClick={copyAllHashtags}>
                <Copy className="mr-2 h-4 w-4" /> Copy All
              </Button>
            </div>
            
            <div className="bg-gray-50 dark:bg-navy-dark p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Total hashtags: {hashtags.length} • Click on individual hashtags to copy
              </p>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((hashtag, index) => (
                  <Badge 
                    key={index} 
                    className="px-3 py-1.5 cursor-pointer hover:bg-teal/10"
                    onClick={() => copyToClipboard(hashtag)}
                  >
                    {hashtag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="mb-2 font-medium">Tips for using these hashtags:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Mix popular and niche hashtags for balanced reach</li>
                <li>Place the most relevant hashtags first</li>
                <li>Refresh your hashtags regularly to stay current</li>
                <li>Avoid using the exact same set for every post</li>
              </ul>
            </div>
          </Card>
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">How TikTok Hashtags Boost Your Content's Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Visibility Enhancement</h3>
              <p>Strategic hashtags significantly increase your chances of appearing on TikTok's "For You" page, exposing your content to users beyond your current followers.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Community Engagement</h3>
              <p>Niche-specific hashtags connect you with communities and conversations relevant to your content, helping you find and engage with your ideal audience.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Content Categorization</h3>
              <p>Hashtags tell TikTok's algorithm what your content is about, helping it show your videos to users interested in similar topics and themes.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Trend Participation</h3>
              <p>Using trending hashtags allows you to participate in viral challenges and movements, potentially giving your content a significant boost in visibility.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">TikTok Hashtag Best Practices</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Find the Right Balance</h3>
          <p>
            While Instagram allows up to 30 hashtags per post, TikTok works best with a more focused approach. Most successful TikTok creators use between 3-5 hashtags per video, with an emphasis on relevance over quantity. This focused approach helps the algorithm better understand and categorize your content.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Mix Trending and Niche Hashtags</h3>
          <p>
            The most effective TikTok hashtag strategy combines broadly trending hashtags with niche-specific ones. This balanced approach helps you tap into larger trending conversations while still reaching your specific target audience.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Include Location-Based Hashtags</h3>
          <p>
            If your content has a local element or you're targeting viewers in specific regions, incorporate location-based hashtags. These can significantly boost your visibility among local audiences and are especially valuable for businesses with physical locations.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Create a Branded Hashtag</h3>
          <p>
            Developing a unique branded hashtag encourages user-generated content and builds community around your TikTok presence. Branded hashtags are particularly effective for challenges, contests, and establishing a recognizable identity on the platform.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Types of Effective TikTok Hashtags</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Trending Challenge Hashtags</h3>
          <p>
            Participating in trending challenges is one of the fastest ways to gain visibility on TikTok. These hashtags often begin with "#" followed by the challenge name (e.g., #DanceChallenge, #FlipTheSwitch, etc.). Trending challenges typically have massive view counts and can give your content significant exposure.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Content Category Hashtags</h3>
          <p>
            These hashtags describe the general category of your content, such as #FitnessTips, #CookingTutorial, or #ComedySkit. They help TikTok's algorithm categorize your content and show it to users who frequently engage with similar videos.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Community Hashtags</h3>
          <p>
            Community hashtags connect you with specific TikTok subcultures and niches. Examples include #BookTok (for book lovers), #CleanTok (for cleaning content), or #FitTok (for fitness enthusiasts). These hashtags help you reach highly engaged, interest-specific audiences.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Descriptive Hashtags</h3>
          <p>
            These hashtags specifically describe what's happening in your video. Examples include #SmallBusiness, #HomeWorkout, or #VeganRecipe. They provide additional context about your content and help it reach viewers interested in those specific topics.
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Maximize Your TikTok Growth</h2>
            <p className="mb-4">
              Effective hashtag usage is a vital part of TikTok success. Our AI-powered TikTok Hashtag Generator creates optimized, research-based hashtag combinations that help your content reach the right audience and maximize engagement.
            </p>
            <p>
              Stop guessing which hashtags will work for your TikTok videos. Generate data-driven hashtag sets that boost your visibility and help you grow your TikTok presence.
            </p>
          </div>
        </div>
        
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Boost Your Social Media Strategy</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Effective hashtags are just one component of a successful social media strategy. Explore our full suite of social media tools to enhance your online presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Search className="h-4 w-4 mr-2" />
              Explore All Social Media Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default TiktokHashtagGenerator;
