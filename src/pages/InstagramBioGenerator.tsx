
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Copy, RefreshCcw, Instagram, Smile, Heart, Camera, Users } from 'lucide-react';
import { generateOllamaResponse } from '@/utils/ollamaApi';
import DOMPurify from 'dompurify';
import Loader from '@/components/Loader';

const InstagramBioGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    niche: '',
    keywords: '',
    tone: 'professional',
    includeEmojis: true,
  });
  
  const [bios, setBios] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const generateBios = async () => {
    if (!formData.niche) {
      toast({
        title: "Niche Required",
        description: "Please enter your niche or industry to generate relevant bios.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setBios([]);

    try {
      const prompt = `
        Generate 5 unique, engaging, and SEO-optimized Instagram bios for a ${formData.niche} account.
        ${formData.name ? `The account is for ${formData.name}.` : ''}
        ${formData.keywords ? `Include these keywords or themes if possible: ${formData.keywords}` : ''}
        The tone should be ${formData.tone}.
        ${formData.includeEmojis ? 'Include relevant emojis.' : 'Do not include emojis.'}
        
        Each bio should:
        1. Be under 150 characters (Instagram's limit)
        2. Be engaging and attention-grabbing
        3. Include a call-to-action where appropriate
        4. Clearly communicate the value proposition
        5. Be formatted in a way that's easy to copy directly to Instagram
        
        Format the response as a numbered list of 5 bios, each on its own line.
      `;

      const systemPrompt = "You are an expert in social media marketing and branding, specializing in creating engaging Instagram bios that help accounts attract followers and communicate their brand effectively.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the response to extract the individual bios
      const bioList = response
        .split(/\n\d+[\.\)]\s+|\n\-\s+/)
        .map(bio => bio.trim())
        .filter(bio => bio.length > 0 && bio.length <= 200);
      
      if (bioList.length === 0) {
        // If parsing fails, just use the whole response
        setBios([response]);
      } else {
        setBios(bioList);
      }
    } catch (error) {
      console.error('Error generating Instagram bios:', error);
      toast({
        title: "Error",
        description: "Failed to generate Instagram bios. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Bio copied to clipboard.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Instagram Bio Generator | Create Engaging Instagram Bios</title>
        <meta name="description" content="Generate engaging, SEO-optimized Instagram bios that attract followers. Our free AI tool helps you create the perfect Instagram bio for your profile." />
        <meta name="keywords" content="Instagram bio generator, Instagram profile, bio creator, social media marketing, Instagram marketing" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-navy dark:text-white">Instagram Bio Generator</h1>
      <div className="max-w-4xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Create the perfect Instagram bio that captures attention, showcases your brand, and helps you gain more followers.
        </p>

        <Card className="p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name" className="block mb-2">Name/Brand (Optional)</Label>
              <Input 
                id="name" 
                name="name"
                placeholder="Your name or brand"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <Label htmlFor="niche" className="block mb-2">Niche/Industry *</Label>
              <Input 
                id="niche" 
                name="niche"
                placeholder="e.g., Fitness, Fashion, Travel, Food"
                value={formData.niche}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <Label htmlFor="keywords" className="block mb-2">Keywords or Themes (Optional)</Label>
            <Textarea 
              id="keywords" 
              name="keywords"
              placeholder="Enter keywords or themes to include (e.g., vegan, sustainable, digital nomad)"
              value={formData.keywords}
              onChange={handleInputChange}
              className="min-h-[80px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <Label htmlFor="tone" className="block mb-2">Tone</Label>
              <select 
                id="tone"
                name="tone"
                value={formData.tone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual & Friendly</option>
                <option value="humorous">Humorous</option>
                <option value="inspirational">Inspirational</option>
                <option value="educational">Educational</option>
                <option value="bold">Bold & Confident</option>
              </select>
            </div>

            <div className="flex items-center space-x-2 mt-8">
              <input 
                type="checkbox" 
                id="includeEmojis" 
                checked={formData.includeEmojis}
                onChange={(e) => handleSwitchChange('includeEmojis', e.target.checked)}
                className="rounded border-gray-300"
              />
              <Label htmlFor="includeEmojis">Include Emojis</Label>
            </div>
          </div>

          <Button 
            onClick={generateBios} 
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white"
            disabled={loading}
          >
            {loading ? <Loader size="medium" className="mr-2" /> : <Instagram className="mr-2 h-5 w-5" />}
            Generate Instagram Bios
          </Button>
        </Card>

        {(loading || bios.length > 0) && (
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-navy dark:text-white flex items-center">
              <Smile className="mr-2 h-5 w-5 text-pink-500" /> Your Instagram Bios
            </h2>

            {loading ? (
              <div className="flex justify-center p-8">
                <Loader size="large" />
              </div>
            ) : (
              <div className="space-y-6">
                {bios.map((bio, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg relative">
                    <Badge className="absolute top-3 right-3 bg-pink-500">Bio {index + 1}</Badge>
                    <p 
                      className="pr-16 mb-4" 
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(bio) }}
                    />
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => copyToClipboard(bio)}
                        className="text-pink-500 border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950"
                      >
                        <Copy className="mr-2 h-4 w-4" /> Copy
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        )}

        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-navy dark:text-white">Instagram Bio Tips for Better Reach</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-5 border-l-4 border-pink-500">
              <div className="flex items-start">
                <Heart className="h-8 w-8 text-pink-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Include Relevant Keywords</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Instagram bios are searchable, so including relevant keywords can help people find your profile when searching for content in your niche.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-purple-500">
              <div className="flex items-start">
                <Camera className="h-8 w-8 text-purple-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Add a Clear Call-to-Action</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tell people what you want them to do, whether it's "Shop our latest collection" or "Click the link to read more."
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-blue-500">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-blue-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Show Your Personality</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Let your authentic voice shine through. People connect with real personalities, not generic corporate speak.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-5 border-l-4 border-green-500">
              <div className="flex items-start">
                <RefreshCcw className="h-8 w-8 text-green-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Update Regularly</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Keep your bio fresh by updating it with seasonal themes, new offerings, or current promotions.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Instagram Bio Character Limit</h3>
            <p className="mb-4">
              Remember that Instagram limits your bio to <strong>150 characters</strong>. Make every character count!
            </p>
            <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg">
              <span className="font-medium">Example character count:</span>
              <Badge variant="outline" className="px-3 py-1">
                "Travel photographer 📸 | Dog lover 🐕 | Coffee enthusiast ☕ | DM for collabs | Link in bio for prints"
                <span className="ml-2 text-pink-500 font-bold">93/150</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramBioGenerator;
