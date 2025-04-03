
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Copy, User } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import Loader from '@/components/Loader';

const TikTokUsernameGenerator = () => {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [nameStyle, setNameStyle] = useState('trending');
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [usernames, setUsernames] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const generateUsernames = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic, niche, or content type to generate usernames.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setUsernames([]);

    try {
      const prompt = `
        Generate 10 unique, catchy TikTok usernames for a ${topic} account.
        ${keywords ? `Incorporate these keywords if possible: ${keywords}` : ''}
        
        Style preference: ${nameStyle}
        ${includeNumbers ? 'Include numbers in some usernames.' : 'Avoid using numbers if possible.'}
        
        The usernames should:
        - Be memorable and easy to spell
        - Appeal to TikTok's young audience
        - Relate to the topic/niche
        - Follow TikTok's username requirements (2-24 characters, letters, numbers, underscores only)
        - No spaces or special characters except underscores
        
        Format the response as a simple numbered list of usernames without additional commentary.
      `;

      const systemPrompt = "You are an expert in social media branding, specializing in creating catchy, memorable usernames for TikTok that appeal to Gen Z and Millennial audiences while helping content creators stand out.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the usernames from the response
      const usernameList = response
        .split(/\n\d+[\.\)]\s+|\n\-\s+/)
        .map(username => username.trim())
        .filter(username => username.length > 0 && !username.includes(' '))
        .map(username => username.replace(/^[@\s]+|[^a-zA-Z0-9_].*$/g, ''));
      
      if (usernameList.length > 0) {
        setUsernames(usernameList);
      } else {
        // If parsing fails, try an alternative parsing method
        const alternativeParsing = response
          .match(/[a-zA-Z0-9_]{2,24}/g)
          ?.filter(username => !username.includes(' ') && username.length >= 2) || [];
        
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
        <title>TikTok Username Generator | Create Catchy TikTok Handles</title>
        <meta name="description" content="Generate creative and catchy TikTok usernames that help you stand out. Our AI tool creates unique handles perfect for your TikTok content." />
        <meta name="keywords" content="TikTok username, TikTok handle, username generator, TikTok account, social media branding" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">TikTok Username Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Create a unique, catchy TikTok username that helps your account stand out and attract followers.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="space-y-4">
            <div>
              <Label htmlFor="topic" className="block mb-2">Content Type/Niche *</Label>
              <Input 
                id="topic" 
                placeholder="e.g., dance, comedy, cooking, gaming, fashion"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="keywords" className="block mb-2">Keywords (Optional)</Label>
              <Textarea 
                id="keywords" 
                placeholder="Add keywords you'd like to include in your username"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="min-h-[80px]"
              />
            </div>

            <div>
              <Label htmlFor="nameStyle" className="block mb-2">Username Style</Label>
              <select 
                id="nameStyle"
                value={nameStyle}
                onChange={(e) => setNameStyle(e.target.value)}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="trending">Trending & Popular</option>
                <option value="creative">Creative & Unique</option>
                <option value="funny">Funny & Quirky</option>
                <option value="simple">Simple & Memorable</option>
                <option value="branded">Branded & Professional</option>
              </select>
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
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
              disabled={loading}
            >
              {loading ? <Loader size="medium" className="mr-2" /> : <User className="mr-2 h-5 w-5" />}
              Generate TikTok Usernames
            </Button>
          </div>
        </Card>

        {(loading || usernames.length > 0) && (
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-navy dark:text-white flex items-center">
              <User className="mr-2 h-5 w-5 text-cyan-500" /> TikTok Username Ideas
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
                      className="text-cyan-500 hover:text-cyan-700 hover:bg-cyan-50 dark:hover:bg-cyan-950"
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
          <h2 className="text-2xl font-bold text-navy dark:text-white">Tips for a Great TikTok Username</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-cyan-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Keep It Short & Simple</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TikTok's fast-paced environment favors shorter usernames that are easy to remember and type. Aim for 5-15 characters when possible.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-blue-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Make It Trendy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                TikTok users gravitate toward trendy, current usernames. Consider incorporating popular terms or slang that resonates with your target audience.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-indigo-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Reflect Your Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your username should give users a hint about what kind of content you create. This helps attract followers who are interested in your niche.
              </p>
            </Card>
            
            <Card className="p-5 border-l-4 border-purple-500">
              <h3 className="font-semibold text-lg mb-3 text-navy dark:text-white">Be Consistent Across Platforms</h3>
              <p className="text-gray-600 dark:text-gray-300">
                If you're building a cross-platform brand, check if the username is available on other social media platforms to maintain consistent branding.
              </p>
            </Card>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">TikTok Username Rules</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Character limit:</strong> 2-24 characters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Allowed characters:</strong> Letters, numbers, and underscores (_) only
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Restricted:</strong> No spaces, periods, symbols, or special characters
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Uniqueness:</strong> Must not be already taken by another user
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">•</span>
                <span className="text-gray-700 dark:text-gray-300">
                  <strong>Restrictions:</strong> Cannot contain offensive language or copyrighted terms
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Username Impact on TikTok Growth</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your TikTok username plays a significant role in your account's growth. A well-chosen username can:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Make your account more discoverable in searches
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Help people remember your account after seeing your videos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Create a strong first impression of your content style
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-2">✓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Attract users who are interested in your specific content niche
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TikTokUsernameGenerator;
