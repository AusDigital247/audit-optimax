
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, RefreshCcw, Youtube } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';
import DOMPurify from 'dompurify';

const YouTubeChannelDescriptionGenerator = () => {
  const [channelName, setChannelName] = useState('');
  const [niche, setNiche] = useState('');
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('professional');
  const [keywords, setKeywords] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateDescription = async () => {
    if (!niche.trim()) {
      toast({
        title: "Niche Required",
        description: "Please enter your channel niche or topic to generate a relevant description.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setDescription('');

    try {
      const prompt = `
        Generate an SEO-optimized YouTube channel description for ${channelName ? `a channel named "${channelName}"` : 'a channel'} in the ${niche} niche.
        
        Additional details about the channel:
        ${content ? `Content type: ${content}` : ''}
        ${keywords ? `Key topics/keywords: ${keywords}` : ''}
        
        The description should:
        - Be approximately 2-3 paragraphs (around 150-250 words)
        - Have a ${tone} tone
        - Include relevant keywords naturally for SEO
        - Follow YouTube's best practices for channel descriptions
        - Include a brief introduction of the channel and its purpose
        - Mention what viewers can expect (types of videos, posting schedule if applicable)
        - Include a call-to-action (subscribe, enable notifications, etc.)
        
        Return only the description text, ready to copy and paste into YouTube.
      `;

      const systemPrompt = "You are an expert YouTube channel optimizer and copywriter. Create compelling, SEO-optimized channel descriptions that help creators grow their audiences while adhering to YouTube best practices.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      setDescription(response);
    } catch (error) {
      console.error('Error generating YouTube description:', error);
      toast({
        title: "Error",
        description: "Failed to generate description. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(description);
    toast({
      title: "Copied!",
      description: "Channel description copied to clipboard.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>YouTube Channel Description Generator | Create SEO-Optimized Descriptions</title>
        <meta name="description" content="Generate professional, SEO-optimized YouTube channel descriptions that help grow your audience. Our free tool creates compelling descriptions for any niche." />
        <meta name="keywords" content="YouTube description, channel description, YouTube SEO, YouTube optimization, content creator tools" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">YouTube Channel Description Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Create a compelling, SEO-optimized description for your YouTube channel that helps attract subscribers and boost your visibility.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="channelName" className="block mb-2">Channel Name (Optional)</Label>
              <Input 
                id="channelName" 
                placeholder="e.g., Tech Tips with Jane"
                value={channelName}
                onChange={(e) => setChannelName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="niche" className="block mb-2">Channel Niche/Topic *</Label>
              <Input 
                id="niche" 
                placeholder="e.g., gaming, cooking, fitness, technology reviews"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="content" className="block mb-2">Content Type (Optional)</Label>
              <Input 
                id="content" 
                placeholder="e.g., tutorials, vlogs, reviews, entertainment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="keywords" className="block mb-2">Keywords (Optional)</Label>
              <Textarea 
                id="keywords" 
                placeholder="Enter keywords relevant to your channel, separated by commas"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="tone" className="block mb-2">Tone</Label>
              <select 
                id="tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual & Friendly</option>
                <option value="entertaining">Entertaining & Energetic</option>
                <option value="educational">Educational & Informative</option>
                <option value="inspirational">Inspirational & Motivational</option>
              </select>
            </div>

            <Button 
              onClick={generateDescription} 
              className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <Youtube className="mr-2 h-5 w-5" />}
              Generate Channel Description
            </Button>
          </div>
        </Card>

        {(loading || description) && (
          <Card className="p-6 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-navy dark:text-white">Your YouTube Channel Description</h2>
              {description && (
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="medium" />
              </div>
            ) : (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg whitespace-pre-wrap">
                <div 
                  className="prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                />
              </div>
            )}
          </Card>
        )}

        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-navy dark:text-white">Channel Description Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">Optimize for Search</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Include relevant keywords naturally throughout your description. YouTube's algorithm uses your description to understand what your channel is about.
              </p>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Welcome to Tech Tips with Jane, your go-to resource for <span className="text-red-600 dark:text-red-400 font-medium">smartphone reviews</span>, <span className="text-red-600 dark:text-red-400 font-medium">tech tutorials</span>, and <span className="text-red-600 dark:text-red-400 font-medium">gadget comparisons</span>..."
                </p>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">Keep It Concise</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While YouTube allows up to 1,000 characters, aim for 150-250 words. Focus on clarity and impact rather than length.
              </p>
              <div className="flex items-center justify-between">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg">
                  <p className="text-xs text-red-700 dark:text-red-300">Too long: 500+ words</p>
                </div>
                <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg">
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">Acceptable: 250-300 words</p>
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                  <p className="text-xs text-green-700 dark:text-green-300">Ideal: 150-250 words</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">Structure Effectively</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A well-structured description typically includes:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">1.</span>
                  <span>Channel introduction (who you are)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">2.</span>
                  <span>Value proposition (what viewers will gain)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">3.</span>
                  <span>Content overview (types of videos)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">4.</span>
                  <span>Call-to-action (subscribe, notification bell)</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-semibold text-lg mb-3 text-red-600 dark:text-red-400">Include Key Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Consider including these elements to enhance your description:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Upload schedule (e.g., "New videos every Tuesday")</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Social media links for cross-promotion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Business inquiry email (for potential collaborations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Hashtags relevant to your content (limited to 3-5)</span>
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Channel Description Examples</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-2 text-red-600 dark:text-red-400">Cooking Channel Example</h4>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Welcome to Homestyle Cooking with Sarah! 🍳 I share easy-to-follow recipes that transform everyday ingredients into delicious meals. From quick weeknight dinners to impressive weekend feasts, my step-by-step tutorials make cooking approachable for everyone.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    New recipes every Wednesday and Sunday. Expect budget-friendly meal prep ideas, international cuisine explorations, and kitchen hacks to save you time and money. As a home cook with 15 years of experience, I believe good food brings people together.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Subscribe now and hit the notification bell to never miss a new recipe! Have a recipe request? Leave it in the comments below.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2 text-red-600 dark:text-red-400">Gaming Channel Example</h4>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300">
                    Level up with GameMasterPro - your destination for advanced gaming strategies, walkthroughs, and industry news. I cover everything from AAA releases to indie gems, with a focus on RPGs, FPS, and strategy games.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Livestreams every Friday at 8PM EST. Regular content includes game reviews, tips & tricks, Easter egg hunts, and discussions on gaming culture. With 10+ years in competitive gaming, I bring both entertainment and expertise to every video.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-3">
                    Join our gaming community by subscribing and enabling notifications. Connect with me on Discord and Twitter (links below) for game recommendations and to join multiplayer sessions!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeChannelDescriptionGenerator;
