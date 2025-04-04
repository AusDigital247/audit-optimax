
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

const YouTubeNameGenerator = () => {
  const [niche, setNiche] = useState('');
  const [keywords, setKeywords] = useState('');
  const [nameStyle, setNameStyle] = useState('brandable');
  const [channelNames, setChannelNames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateNames = async () => {
    if (!niche.trim()) {
      toast({
        title: "Niche Required",
        description: "Please enter your channel niche or topic to generate relevant names.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setChannelNames([]);

    try {
      const prompt = `
        Generate 10 unique, catchy, and SEO-optimized YouTube channel names for a channel about ${niche}.
        ${keywords ? `Try to incorporate these keywords or themes if relevant: ${keywords}` : ''}
        
        Style preference: ${nameStyle}
        
        The channel names should:
        - Be memorable and easy to spell/pronounce
        - Be unique but not too complex
        - Relate to the niche/topic
        - Have good branding potential
        - Be available as a YouTube handle
        - Not include overused terms like "TV" unless it really fits
        
        Format the response as a simple numbered list of channel names without additional commentary.
      `;

      const systemPrompt = "You are an expert in digital branding and YouTube channel optimization. Create compelling, memorable channel names that will help creators stand out while appealing to their target audience and improving discoverability.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the channel names from the response
      const namesList = response
        .split(/\n\d+[\.\)]\s+|\n\-\s+/)
        .map(name => name.trim())
        .filter(name => name.length > 0);
      
      if (namesList.length > 0) {
        setChannelNames(namesList);
      } else {
        // If parsing fails, just split by lines as a fallback
        const fallbackNames = response
          .split('\n')
          .map(line => line.replace(/^\d+[\.\)]\s+/, '').trim())
          .filter(name => name.length > 0);
        
        setChannelNames(fallbackNames);
      }
    } catch (error) {
      console.error('Error generating channel names:', error);
      toast({
        title: "Error",
        description: "Failed to generate channel names. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    toast({
      title: "Copied!",
      description: `Channel name "${name}" copied to clipboard.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>YouTube Channel Name Generator | Create Unique Channel Names</title>
        <meta name="description" content="Generate creative and SEO-optimized YouTube channel names instantly. Find the perfect name for your content and grow your audience." />
        <meta name="keywords" content="YouTube channel name, YouTube branding, channel name generator, YouTube creator tools" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">YouTube Channel Name Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Find the perfect YouTube channel name that reflects your content, appeals to your audience, and helps you stand out.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="niche" className="block mb-2">Channel Niche/Topic *</Label>
              <Input 
                id="niche" 
                placeholder="e.g., gaming tutorials, vegan cooking, personal finance"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="keywords" className="block mb-2">Keywords (Optional)</Label>
              <Textarea 
                id="keywords" 
                placeholder="Enter keywords you'd like to include in your channel name"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="nameStyle" className="block mb-2">Name Style</Label>
              <select 
                id="nameStyle"
                value={nameStyle}
                onChange={(e) => setNameStyle(e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="brandable">Brandable & Professional</option>
                <option value="creative">Creative & Unique</option>
                <option value="descriptive">Descriptive & Clear</option>
                <option value="personal">Personal Brand-Focused</option>
                <option value="educational">Educational & Authoritative</option>
                <option value="entertainment">Entertainment & Fun</option>
              </select>
            </div>

            <Button 
              onClick={generateNames} 
              className="w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <Youtube className="mr-2 h-5 w-5" />}
              Generate Channel Names
            </Button>
          </div>
        </Card>

        {(loading || channelNames.length > 0) && (
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-navy dark:text-white flex items-center">
              <Youtube className="mr-2 h-5 w-5 text-red-500" /> YouTube Channel Name Ideas
            </h2>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="medium" />
              </div>
            ) : (
              <div className="space-y-4">
                {channelNames.map((name, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                    <div>
                      <span className="text-lg font-medium">{name}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(name)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-navy dark:text-white">How to Choose the Perfect YouTube Channel Name</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Reflect Your Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your channel name should give viewers an idea of what to expect. While creative names can work, clarity often performs better for discoverability.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Consider Longevity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose a name that can grow with you. Overly specific names (like "iPhone13Reviews") can quickly become outdated as your content evolves.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Check Availability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Before committing to a name, check if it's available on YouTube, social media platforms, and as a domain name for cross-platform consistency.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-red-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Test Pronunciation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Say the name out loud several times. If it's difficult to pronounce or easily misheard, viewers might struggle to find you when searching by name.
              </p>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">YouTube Channel Name Formulas That Work</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">Your Name + Niche</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "Mike's Tech Reviews", "Sarah Cooks"</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">Descriptive + Creative Term</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "Budget Wanderer", "Fitness Accelerated"</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">The X Y</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "The Coding Journey", "The Beauty Archive"</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">Action + Niche</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "Baking Simplified", "Travel Unfolded"</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">Unique Made-Up Word</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "Technomancer", "Cookify"</p>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="font-medium text-red-700 dark:text-red-300">Alliteration</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Examples: "Digital Dynamo", "Cooking Chronicles"</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">YouTube Names to Avoid</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Trendy but temporary terms</strong> - They'll quickly become dated
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Hard-to-spell words</strong> - Viewers might not find you in searches
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Generic terms followed by numbers</strong> (e.g., "GamingChannel12345")
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Copyrighted or trademarked terms</strong> - Can lead to legal issues
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Overused YouTube terms</strong> like "Tube," "Channel," or "TV" unless they truly fit
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeNameGenerator;
