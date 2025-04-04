
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Copy, Hash } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';

const TikTokHashtagGenerator = () => {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('general');
  const [extraInfo, setExtraInfo] = useState('');
  const [hashtagCount, setHashtagCount] = useState('10');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateHashtags = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic to generate hashtags.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setHashtags([]);

    try {
      const prompt = `
        Generate ${hashtagCount} TikTok hashtags for a ${contentType} video about "${topic}"
        ${extraInfo ? `Additional context: ${extraInfo}` : ''}
        
        Include a mix of:
        - Trending/viral TikTok hashtags that would fit this content
        - Niche-specific hashtags related to the topic
        - Discovery hashtags that help new creators get found
        
        Format the response as a list of hashtags, each starting with #, separated by spaces.
        Don't include numbers, just the hashtags themselves.
      `;

      const systemPrompt = "You are a TikTok marketing expert who keeps up with the latest trends and hashtag strategies. Provide relevant, effective hashtags that will maximize reach and engagement for the user's TikTok content.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the hashtags from the response
      const hashtagList = response
        .match(/#[\w\d]+/g) // Extract hashtags
        || response.split(/\n|,\s*/).filter(tag => tag.trim().startsWith('#')); // Alternative parsing
      
      if (hashtagList && hashtagList.length > 0) {
        setHashtags(hashtagList.map(tag => tag.trim()));
      } else {
        // If parsing fails, add # to each word as a fallback
        const fallbackTags = response
          .split(/\s+/)
          .filter(word => word.length > 2 && !word.includes('#'))
          .map(word => `#${word.replace(/[^a-zA-Z0-9]/g, '')}`);
        
        setHashtags(fallbackTags);
      }
    } catch (error) {
      console.error('Error generating hashtags:', error);
      toast({
        title: "Error",
        description: "Failed to generate hashtags. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hashtags.join(' '));
    toast({
      title: "Copied!",
      description: "Hashtags copied to clipboard.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>TikTok Hashtag Generator | Get Trending TikTok Hashtags</title>
        <meta name="description" content="Generate trending TikTok hashtags to increase your video views and followers. Our AI tool creates perfect hashtag combinations for any TikTok content." />
        <meta name="keywords" content="TikTok hashtags, TikTok marketing, trending hashtags, viral TikTok, TikTok growth" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">TikTok Hashtag Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Boost your TikTok reach with trending hashtags that help your videos get discovered by the right audience.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="topic" className="block mb-2">Video Topic *</Label>
              <Input 
                id="topic" 
                placeholder="e.g., dance challenge, cooking tutorial, product review"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="contentType" className="block mb-2">Content Type</Label>
              <select 
                id="contentType"
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="general">General Content</option>
                <option value="tutorial">Tutorial/How-To</option>
                <option value="comedy">Comedy/Humor</option>
                <option value="dance">Dance/Choreography</option>
                <option value="challenge">Challenge</option>
                <option value="lifestyle">Lifestyle</option>
                <option value="beauty">Beauty/Fashion</option>
                <option value="food">Food/Cooking</option>
                <option value="fitness">Fitness/Wellness</option>
                <option value="education">Educational</option>
                <option value="business">Business/Entrepreneurship</option>
              </select>
            </div>

            <div>
              <Label htmlFor="extraInfo" className="block mb-2">Additional Context (Optional)</Label>
              <Textarea 
                id="extraInfo" 
                placeholder="Add more details about your video content or target audience"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="hashtagCount" className="block mb-2">Number of Hashtags</Label>
              <select 
                id="hashtagCount"
                value={hashtagCount}
                onChange={(e) => setHashtagCount(e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="5">5 Hashtags</option>
                <option value="10">10 Hashtags</option>
                <option value="15">15 Hashtags</option>
                <option value="20">20 Hashtags</option>
              </select>
            </div>

            <Button 
              onClick={generateHashtags} 
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <Hash className="mr-2 h-5 w-5" />}
              Generate TikTok Hashtags
            </Button>
          </div>
        </Card>

        {(loading || hashtags.length > 0) && (
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-navy dark:text-white flex items-center">
                <Hash className="mr-2 h-5 w-5 text-cyan-500" /> Your TikTok Hashtags
              </h2>
              {hashtags.length > 0 && (
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" /> Copy All
                </Button>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="medium" />
              </div>
            ) : (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-6">
                  {hashtags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-cyan-100 to-blue-100 text-blue-800 dark:from-cyan-900/30 dark:to-blue-900/30 dark:text-blue-200 border border-blue-200 dark:border-blue-800/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm break-all">
                    {hashtags.join(' ')}
                  </p>
                </div>
              </div>
            )}
          </Card>
        )}

        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-navy dark:text-white">TikTok Hashtag Strategy Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-cyan-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">The Magic Number</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TikTok allows you to use up to 100 characters in your caption, including hashtags. The optimal strategy is to use 3-5 targeted hashtags for most videos rather than maxing out with irrelevant ones.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Trending vs. Niche</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use a mix of trending hashtags to ride the wave of popularity, and niche hashtags to reach a targeted audience who's more likely to engage with your specific content.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-indigo-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">For New Creators</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Use discovery hashtags like #FYP, #ForYou, and #ForYouPage sparingly. TikTok's algorithm focuses on content quality, not these tags, but they can sometimes help new accounts get discovered.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Location-Based Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                If your content is location-specific, include local hashtags (#NYCTikTok, #LondonFoodie) to reach people in your area and build a local community.
              </p>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Analyzing Hashtag Performance</h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              TikTok Pro accounts can see where their views are coming from. To optimize your hashtag strategy:
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Track performance:</strong> Note which hashtag combinations drive the most views from the "For You" page
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Test different combinations:</strong> Try different hashtag strategies across similar content types
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Check trending tags:</strong> Use the Discover page to see what's currently trending in your niche
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Research competitors:</strong> See what hashtags successful creators in your niche are using
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Current TikTok Trends</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              TikTok trends change rapidly. Some currently popular hashtag categories include:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#TikTokMadeMeBuyIt</Badge>
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#LearnOnTikTok</Badge>
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#TikTokTutorial</Badge>
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#POV</Badge>
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#DayInMyLife</Badge>
              <Badge className="px-3 py-1.5 text-sm bg-white/50 dark:bg-gray-800/50">#SmallBusiness</Badge>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Remember that trends change weekly, so always research current trends before posting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokHashtagGenerator;
