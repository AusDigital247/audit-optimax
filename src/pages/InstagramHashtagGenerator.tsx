
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Copy, RefreshCcw, Instagram, Hash } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';

const InstagramHashtagGenerator = () => {
  const [topic, setTopic] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [hashtagCount, setHashtagCount] = useState('20');
  const [hashtagType, setHashtagType] = useState('mix');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateHashtags = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic or niche to generate hashtags.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setHashtags([]);

    try {
      const prompt = `
        Generate ${hashtagCount} Instagram hashtags for a post about "${topic}"
        ${extraInfo ? `Additional context: ${extraInfo}` : ''}
        
        Hashtag type preference: ${hashtagType}
        
        For a mix, include:
        - Popular hashtags with millions of posts (for immediate visibility)
        - Medium-sized hashtags with 100K-1M posts (for longer visibility)
        - Niche hashtags with fewer posts (for targeted audiences)
        
        Format the response as a list of hashtags, each starting with #, separated by spaces.
        Don't include numbers, just the hashtags themselves.
      `;

      const systemPrompt = "You are an Instagram marketing expert who specializes in hashtag strategy. Provide relevant, effective hashtags that will maximize reach and engagement for the user's content.";
      
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
        <title>Instagram Hashtag Generator | Create Perfect Hashtags for More Engagement</title>
        <meta name="description" content="Generate the perfect Instagram hashtags to boost your reach and engagement. Get popular, medium-sized, and niche hashtags for your posts." />
        <meta name="keywords" content="Instagram hashtags, hashtag generator, Instagram marketing, social media reach, engagement" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">Instagram Hashtag Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Boost your Instagram reach and engagement with perfectly tailored hashtags for your posts.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="topic" className="block mb-2">Post Topic/Niche *</Label>
              <Input 
                id="topic" 
                placeholder="e.g., vegan cooking, fitness motivation, travel photography"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="extraInfo" className="block mb-2">Additional Context (Optional)</Label>
              <Textarea 
                id="extraInfo" 
                placeholder="Add more details about your content, target audience, or specific focus"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="hashtagCount" className="block mb-2">Number of Hashtags</Label>
                <select 
                  id="hashtagCount"
                  value={hashtagCount}
                  onChange={(e) => setHashtagCount(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="10">10 Hashtags</option>
                  <option value="15">15 Hashtags</option>
                  <option value="20">20 Hashtags</option>
                  <option value="30">30 Hashtags</option>
                </select>
              </div>

              <div>
                <Label htmlFor="hashtagType" className="block mb-2">Hashtag Type</Label>
                <select 
                  id="hashtagType"
                  value={hashtagType}
                  onChange={(e) => setHashtagType(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="mix">Mixed (Popular, Medium, Niche)</option>
                  <option value="popular">Popular (High Competition)</option>
                  <option value="medium">Medium (Moderate Competition)</option>
                  <option value="niche">Niche (Low Competition)</option>
                </select>
              </div>
            </div>

            <Button 
              onClick={generateHashtags} 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <Instagram className="mr-2 h-5 w-5" />}
              Generate Hashtags
            </Button>
          </div>
        </Card>

        {(loading || hashtags.length > 0) && (
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-navy dark:text-white flex items-center">
                <Hash className="mr-2 h-5 w-5 text-pink-500" /> Your Instagram Hashtags
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
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-100 to-pink-100 text-pink-800 dark:from-purple-900/30 dark:to-pink-900/30 dark:text-pink-200 border border-pink-200 dark:border-pink-800/30"
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
          <h2 className="text-2xl font-bold text-navy dark:text-white">Instagram Hashtag Strategy Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-pink-600 dark:text-pink-400">The 30-Hashtag Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Instagram allows up to 30 hashtags per post. For maximum reach, use a mix of:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>5-10 popular hashtags</strong> (1M+ posts) for immediate visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>10-15 medium hashtags</strong> (100K-1M posts) for sustained visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>5-10 niche hashtags</strong> (&lt;100K posts) for targeted audience
                  </span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">Hashtag Placement</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Where you place your hashtags matters:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>In your caption:</strong> More professional, cleaner look
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>In the first comment:</strong> Hides hashtags from initial view
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>After 5 line breaks in caption:</strong> Hides hashtags while keeping them in caption
                  </span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-blue-600 dark:text-blue-400">Do's and Don'ts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-green-600 dark:text-green-400 mb-2">Do:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Research competitors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Use location-based tags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Create a branded hashtag</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600 dark:text-gray-300">Rotate hashtag sets</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-red-600 dark:text-red-400 mb-2">Don't:</p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-600 dark:text-gray-300">Use banned hashtags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-600 dark:text-gray-300">Use irrelevant hashtags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-600 dark:text-gray-300">Use spammy hashtags</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-gray-600 dark:text-gray-300">Use the same set always</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-yellow-600 dark:text-yellow-400">Tracking Success</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Measure which hashtags perform best:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Use Instagram Insights to see which posts reach more non-followers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Track which hashtag sets drive more engagement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Check if you're appearing in hashtag searches with a secondary account
                  </span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Banned and Restricted Hashtags</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Instagram regularly restricts or bans certain hashtags that violate their community guidelines. Using these can limit your post visibility or even lead to account restrictions.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Always research hashtags before using them, especially if they seem unusually popular for niche content or have unexpectedly low post counts for common terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramHashtagGenerator;
