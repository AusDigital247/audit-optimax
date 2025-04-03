import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loader from "@/components/Loader";
import { toast } from "sonner";
import { generateOllamaResponse } from "@/utils/ollamaApi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InstagramBioGenerator: React.FC = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [generatedBios, setGeneratedBios] = useState<string[]>([]);
  
  // Form fields
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [occupation, setOccupation] = useState('');
  const [style, setStyle] = useState('professional');
  const [achievements, setAchievements] = useState('');
  const [emojis, setEmojis] = useState('moderate');

  const handleGenerate = async () => {
    if (!interests || interests.trim().length < 3) {
      toast.error('Please enter your interests');
      return;
    }

    setLoading(true);
    setGeneratedBios([]);

    try {
      const prompt = `Generate 5 unique Instagram bio options for someone with the following details:
      ${name ? `Name: ${name}` : ''}
      ${occupation ? `Occupation/Role: ${occupation}` : ''}
      Interests: ${interests}
      ${achievements ? `Achievements: ${achievements}` : ''}
      Style: ${style}
      Emoji usage: ${emojis}
      
      Each bio should be:
      1. Under 150 characters (Instagram's limit)
      2. Engaging and authentic
      3. Reflect the person's interests and personality
      4. In the "${style}" style
      5. Include ${emojis === 'minimal' ? 'few' : emojis === 'moderate' ? 'some' : 'many'} relevant emojis
      
      Format your response as 5 separate bio options only, each on a new line. Do not number them or add any explanations.`;

      const systemPrompt = "You are a social media expert who specializes in creating engaging, authentic Instagram bios that perfectly capture a person's essence in limited space. You understand how to balance personality, professionalism, and creativity to help people stand out.";
      
      const response = await generateOllamaResponse(prompt, systemPrompt);
      
      // Parse the response into separate bios
      const bios = response
        .split('\n')
        .map(bio => bio.trim())
        .filter(bio => bio.length > 0 && bio.length <= 150)
        .slice(0, 5);
      
      if (bios.length === 0) {
        // If parsing failed, create a default bio
        setGeneratedBios([`${interests} enthusiast ${occupation ? `| ${occupation}` : ''} ${style === 'professional' ? '| Connect with me' : '✨'}`]);
        toast.warning('Had some trouble generating multiple bios, showing a simple option');
      } else {
        setGeneratedBios(bios);
        toast.success('Instagram bios generated successfully');
      }
    } catch (error) {
      console.error('Error generating Instagram bios:', error);
      toast.error('Failed to generate Instagram bios. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <Helmet>
        <title>Instagram Bio Generator | Create Engaging Profile Bios</title>
        <meta name="description" content="Create the perfect Instagram bio with our free AI generator. Get personalized, engaging bios that reflect your personality and help you stand out." />
      </Helmet>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-display font-bold text-navy dark:text-white mb-4">Instagram Bio Generator</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Elevate your Instagram presence with our cutting-edge AI Bio Generator. Craft personalized, engaging bios that capture your personality and boost your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Create Your Bio</h2>
          
          <div className="space-y-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Name (Optional)</Label>
              <Input 
                placeholder="Your name or username" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Occupation/Role (Optional)</Label>
              <Input 
                placeholder="E.g., Photographer, Fitness Coach, Student" 
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Interests/Passions (Required)</Label>
              <Textarea 
                placeholder="E.g., travel, fitness, photography, cooking, fashion" 
                value={interests}
                onChange={(e) => setInterests(e.target.value)}
              />
            </div>
            
            <div>
              <Label className="block text-sm font-medium mb-1">Achievements (Optional)</Label>
              <Input 
                placeholder="E.g., Award winner, Published author, 10k marathon" 
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium mb-1">Bio Style</Label>
                <Select value={style} onValueChange={setStyle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="humorous">Humorous</SelectItem>
                    <SelectItem value="minimalist">Minimalist</SelectItem>
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-1">Emoji Usage</Label>
                <Select value={emojis} onValueChange={setEmojis}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select emoji usage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="minimal">Minimal</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="heavy">Heavy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              onClick={handleGenerate} 
              className="w-full bg-teal hover:bg-teal-light text-white"
              disabled={loading}
            >
              {loading ? <Loader size="sm" /> : 'Generate Instagram Bios'}
            </Button>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-navy dark:text-white">Your Instagram Bios</h2>
          
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <Loader size="lg" />
            </div>
          ) : generatedBios.length > 0 ? (
            <div className="space-y-4">
              {generatedBios.map((bio, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50 dark:bg-navy-light relative group">
                  <p className="pr-10">{bio}</p>
                  <span className="text-xs text-gray-500 absolute bottom-1 right-2">
                    {bio.length}/150
                  </span>
                  <Button 
                    onClick={() => {
                      navigator.clipboard.writeText(bio);
                      toast.success('Bio copied to clipboard');
                    }}
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Copy
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[300px] flex justify-center items-center text-gray-500 dark:text-gray-400 text-center">
              <p>Your generated Instagram bios will appear here</p>
            </div>
          )}
        </Card>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h2>Create the Perfect Instagram Bio to Showcase Your Personality</h2>
        <p>Your Instagram bio is prime real estate—it's often the first impression visitors have of your profile and personality. In just 150 characters, you need to capture who you are, what you do, and why people should follow you. Our Instagram Bio Generator helps you create a compelling, authentic bio that makes you stand out in a crowded social media landscape.</p>
        
        <h2>Why Your Instagram Bio Matters</h2>
        <p>A well-crafted Instagram bio serves multiple important purposes:</p>
        
        <ul>
          <li><strong>First Impressions:</strong> Visitors typically decide whether to follow you within seconds of viewing your profile, and your bio plays a crucial role in this decision.</li>
          <li><strong>Personal Branding:</strong> Your bio helps establish and reinforce your personal or professional brand identity.</li>
          <li><strong>Searchability:</strong> Including relevant keywords in your bio can help people with similar interests find your profile.</li>
          <li><strong>Call-to-Action:</strong> An effective bio can direct followers to take specific actions, like visiting your website or using a branded hashtag.</li>
          <li><strong>Personality Showcase:</strong> In a visual platform, your bio is one of the few places where you can directly express your personality through text.</li>
        </ul>
        
        <h2>Elements of an Engaging Instagram Bio</h2>
        <p>The most effective Instagram bios typically include a mix of these elements:</p>
        
        <h3>Clear Identity</h3>
        <p>Introduce who you are and what you do concisely. This could be your profession, passion, or a unique descriptor that sets you apart.</p>
        
        <h3>Value Proposition</h3>
        <p>Indicate what value followers will get from your account. Will they find inspiration, education, entertainment, or something else?</p>
        
        <h3>Personality</h3>
        <p>Let your unique voice shine through. Whether you're professional, humorous, inspirational, or quirky, authenticity is key to connecting with your audience.</p>
        
        <h3>Relevant Emojis</h3>
        <p>Strategic use of emojis can add visual appeal, break up text, and convey personality without using precious character space.</p>
        
        <h3>Call-to-Action</h3>
        <p>Guide visitors on what to do next, whether it's checking out your latest work, visiting your website, or using your branded hashtag.</p>
        
        <h2>How Our Instagram Bio Generator Works</h2>
        <p>Our AI-powered tool creates personalized Instagram bio options based on your unique details:</p>
        
        <ol>
          <li><strong>Input Your Information:</strong> Tell us about yourself, including your name, occupation, interests, and achievements.</li>
          <li><strong>Choose Your Style:</strong> Select the tone that best represents your brand—professional, creative, humorous, minimalist, or inspirational.</li>
          <li><strong>Set Emoji Preferences:</strong> Decide how many emojis you want incorporated into your bio.</li>
          <li><strong>Generate Options:</strong> Our AI will create multiple bio options tailored to your specifications.</li>
          <li><strong>Select and Customize:</strong> Choose the bio you like best, and feel free to tweak it to make it perfectly yours.</li>
        </ol>
        
        <h2>Bio Styles to Match Your Personality</h2>
        <p>Our generator offers various bio styles to match different personal and professional brands:</p>
        
        <ul>
          <li><strong>Professional:</strong> Polished, achievement-focused bios ideal for entrepreneurs, business accounts, and industry professionals.</li>
          <li><strong>Creative:</strong> Artistic, expressive bios that showcase your unique perspective and creative pursuits.</li>
          <li><strong>Humorous:</strong> Fun, witty bios that highlight your personality and entertain potential followers.</li>
          <li><strong>Minimalist:</strong> Clean, concise bios that communicate the essentials with elegant simplicity.</li>
          <li><strong>Inspirational:</strong> Motivational, uplifting bios that share your philosophy and inspire your audience.</li>
        </ul>
        
        <h2>Tips for Maximizing Your Instagram Bio</h2>
        <p>Once you've generated your perfect bio, consider these additional tips:</p>
        
        <ul>
          <li><strong>Update Regularly:</strong> Refresh your bio periodically to reflect current projects, evolving interests, or seasonal themes.</li>
          <li><strong>A/B Test:</strong> Try different bios to see which generates more engagement and followers.</li>
          <li><strong>Use Line Breaks:</strong> Structure your bio with line breaks (which you can create in a notes app and paste in) for better readability.</li>
          <li><strong>Leverage the Link Section:</strong> Remember that your link is separate from your 150-character bio, so use it strategically.</li>
          <li><strong>Consider Hashtags:</strong> If relevant to your brand, include a branded hashtag that encourages user-generated content.</li>
        </ul>
        
        <p>Whether you're launching a new Instagram account, rebranding your existing profile, or simply refreshing your online presence, our Instagram Bio Generator provides the perfect starting point for creating a bio that authentically represents you and attracts your ideal audience. Generate your personalized options today and make your profile stand out in the Instagram community.</p>
      </div>
    </div>
  );
};

export default InstagramBioGenerator;
