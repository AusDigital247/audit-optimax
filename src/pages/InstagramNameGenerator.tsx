
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, RefreshCcw, Instagram, User } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';

const InstagramNameGenerator = () => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [nameStyle, setNameStyle] = useState('brandable');
  const [nameLength, setNameLength] = useState('medium');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateUsernames = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic, niche, or brand to generate usernames.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setUsernames([]);

    try {
      const prompt = `
        Generate 10 unique, SEO-optimized Instagram usernames for a ${topic} account.
        ${keywords ? `Incorporate these keywords if possible: ${keywords}` : ''}
        
        Style preference: ${nameStyle}
        Length preference: ${nameLength} (short = 5-8 characters, medium = 9-15 characters, long = 15-20 characters)
        ${includeNumbers ? 'Include numbers in some usernames.' : 'Avoid using numbers if possible.'}
        
        The usernames should:
        - Be memorable and easy to spell
        - Relate to the topic/niche
        - Be SEO-friendly to improve discoverability
        - Follow Instagram's username requirements (letters, numbers, periods, and underscores only)
        - Not use periods or underscores at the beginning or end
        - Not have consecutive periods or underscores
        
        Format the response as a simple numbered list of usernames without additional commentary.
      `;

      const systemPrompt = "You are an expert in brand naming and social media optimization. Generate creative, relevant, and effective Instagram usernames that align with the user's requirements and help them stand out on the platform.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the usernames from the response
      const usernameList = response
        .split(/\n\d+[\.\)]\s+|\n\-\s+/)
        .map(username => username.trim())
        .filter(username => username.length > 0 && !username.includes(' '))
        .map(username => username.replace(/^[@\s]+|[^a-zA-Z0-9._].*$/g, ''));
      
      if (usernameList.length > 0) {
        setUsernames(usernameList);
      } else {
        // If parsing fails, try an alternative parsing method
        const alternativeParsing = response
          .match(/[a-zA-Z0-9._]{3,30}/g)
          ?.filter(username => !username.includes(' ') && username.length >= 3) || [];
        
        setUsernames(alternativeParsing);
      }
    } catch (error) {
      console.error('Error generating usernames:', error);
      toast({
        title: "Error",
        description: "Failed to generate usernames. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (username: string) => {
    navigator.clipboard.writeText(username);
    toast({
      title: "Copied!",
      description: `Username "${username}" copied to clipboard.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Instagram Username Generator | Find the Perfect Handle</title>
        <meta name="description" content="Generate creative and SEO-optimized Instagram usernames for better discoverability. Find the perfect username for your brand or personal account." />
        <meta name="keywords" content="Instagram username, Instagram handle, username generator, social media marketing, Instagram branding" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">Instagram Username Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Find the perfect Instagram username that represents your brand and helps people discover your profile.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="topic" className="block mb-2">Topic/Niche/Brand *</Label>
              <Input 
                id="topic" 
                placeholder="e.g., fitness coaching, travel photography, vegan bakery"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="keywords" className="block mb-2">Keywords (Optional)</Label>
              <Textarea 
                id="keywords" 
                placeholder="Add keywords you'd like to include (e.g., healthy, organic, adventure)"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nameStyle" className="block mb-2">Username Style</Label>
                <select 
                  id="nameStyle"
                  value={nameStyle}
                  onChange={(e) => setNameStyle(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="brandable">Brandable & Professional</option>
                  <option value="creative">Creative & Catchy</option>
                  <option value="descriptive">Descriptive & Clear</option>
                  <option value="personal">Personal & Approachable</option>
                </select>
              </div>

              <div>
                <Label htmlFor="nameLength" className="block mb-2">Username Length</Label>
                <select 
                  id="nameLength"
                  value={nameLength}
                  onChange={(e) => setNameLength(e.target.value)}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
                >
                  <option value="short">Short (5-8 characters)</option>
                  <option value="medium">Medium (9-15 characters)</option>
                  <option value="long">Long (15-20 characters)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input 
                type="checkbox" 
                id="includeNumbers" 
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-2 rounded"
              />
              <Label htmlFor="includeNumbers">Include numbers in some usernames</Label>
            </div>

            <Button 
              onClick={generateUsernames} 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <Instagram className="mr-2 h-5 w-5" />}
              Generate Usernames
            </Button>
          </div>
        </Card>

        {(loading || usernames.length > 0) && (
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-navy dark:text-white flex items-center">
              <User className="mr-2 h-5 w-5 text-pink-500" /> Instagram Username Ideas
            </h2>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="medium" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {usernames.map((username, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-between items-center">
                    <div>
                      <span className="font-mono text-lg">@{username}</span>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => copyToClipboard(username)}
                      className="text-pink-500 hover:text-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950"
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
          <h2 className="text-2xl font-bold text-navy dark:text-white">Tips for Choosing the Perfect Instagram Username</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-pink-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Keep It Simple & Memorable</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose a username that's easy to spell, pronounce, and remember. Avoid complex combinations of underscores, periods, or numbers that people might forget or mistype.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Align with Your Brand</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your username should reflect your brand identity and the content you post. This makes it easier for your target audience to find and recognize you.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Consider Searchability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Include keywords related to your niche to improve discoverability. People often search for accounts by typing relevant terms into Instagram's search bar.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-green-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Stay Consistent Across Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ideally, use the same username across all social media platforms to build a consistent brand presence and make it easier for followers to find you elsewhere.
              </p>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Instagram Username Rules & Limitations</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Character limit:</strong> Maximum 30 characters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Allowed characters:</strong> Letters, numbers, periods (.), and underscores (_)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Restricted usage:</strong> No spaces, symbols, or special characters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Pattern restrictions:</strong> Can't use consecutive periods, can't start or end with a period
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Availability:</strong> Must be unique and not already taken by another user
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-navy dark:text-white">Before You Commit</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Before finalizing your Instagram username, check:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Availability on Instagram and other social platforms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  That it doesn't accidentally spell something inappropriate
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Domain availability if you're building a brand
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 dark:text-yellow-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  How it looks visually when written out
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramNameGenerator;
