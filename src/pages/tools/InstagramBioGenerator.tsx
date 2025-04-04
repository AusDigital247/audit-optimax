import React, { useState } from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search, Copy, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { generateInstagramBio } from '@/utils/hashtagGenerator';

const InstagramBioGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    niche: '',
    interests: '',
    achievements: '',
    style: 'creative'
  });
  
  const [bio, setBio] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateBio = async () => {
    if (!formData.name) {
      toast.error("Please enter your name or brand name");
      return;
    }

    if (!formData.niche) {
      toast.error("Please enter your niche or industry");
      return;
    }

    setLoading(true);
    try {
      const generatedBio = await generateInstagramBio({
        name: formData.name,
        niche: formData.niche,
        interests: formData.interests,
        achievements: formData.achievements,
        style: formData.style as 'professional' | 'creative' | 'minimalist'
      });
      
      setBio(generatedBio);
      toast.success("Instagram bio generated successfully!");
    } catch (error) {
      console.error('Error generating bio:', error);
      toast.error("Failed to generate bio. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bio);
    toast.success("Bio copied to clipboard");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Instagram Bio Generator | Create Engaging Instagram Bios"
        description="Create a perfect Instagram bio that captures attention and grows your following. Our free Instagram bio generator creates custom, engaging bios for personal and business accounts."
        keywords="instagram bio generator, instagram bio ideas, instagram profile bio, social media profile, instagram bio creator"
        canonicalPath="/instagram-bio-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Instagram Bio Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Create a perfect Instagram bio that captures attention, showcases your personality, and helps grow your following.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Customizable</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Multiple Styles</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Instagram Bio Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Fill out the details below to generate your custom Instagram bio.</p>
          
          <div className="mb-4">
            <Label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Your Name or Brand Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Smith / Wanderlust Photography"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="niche" className="block text-gray-700 dark:text-gray-300 mb-2">Your Niche or Industry *</Label>
            <Input
              id="niche"
              name="niche"
              value={formData.niche}
              onChange={handleInputChange}
              placeholder="Travel photography / Fitness coaching / Digital marketing"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="interests" className="block text-gray-700 dark:text-gray-300 mb-2">Your Interests (Optional)</Label>
            <Input
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              placeholder="Coffee, hiking, sustainable living, etc."
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="achievements" className="block text-gray-700 dark:text-gray-300 mb-2">Achievements or Credentials (Optional)</Label>
            <Textarea
              id="achievements"
              name="achievements"
              value={formData.achievements}
              onChange={handleInputChange}
              placeholder="Award-winning photographer / 10+ years experience / Featured in XYZ magazine"
              className="w-full h-24 p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-6">
            <Label htmlFor="style" className="block text-gray-700 dark:text-gray-300 mb-2">Bio Style</Label>
            <Select 
              value={formData.style} 
              onValueChange={(value) => handleSelectChange('style', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select bio style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="creative">Creative & Fun</SelectItem>
                <SelectItem value="minimalist">Minimalist</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            onClick={generateBio} 
            disabled={loading || !formData.name || !formData.niche}
            className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Bio...
              </>
            ) : (
              <>Generate Instagram Bio</>
            )}
          </Button>
        </div>
        
        {bio && (
          <Card className="w-full max-w-4xl mx-auto p-6 mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Instagram Bio</h2>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
            </div>
            
            <div className="bg-gray-50 dark:bg-navy-dark p-4 rounded-lg mb-4">
              <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {bio}
              </p>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center mb-1">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">Tip</span>
                Instagram has a 150 character limit for bios. The generated bio is optimized to fit this limit.
              </p>
              <p className="flex items-center">
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded mr-2">Tip</span>
                Consider adding line breaks or emojis to make your bio more visually appealing.
              </p>
            </div>
          </Card>
        )}
        
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This Instagram Bio Generator is currently in development. Soon you'll be able to create customized, engaging Instagram bios tailored to your personal brand or business.
          </AlertDescription>
        </Alert>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Your Instagram Bio Matters</h2>
          <p>
            Your Instagram bio is prime real estate—it's often the first thing potential followers see when they visit your profile. Think of it as your digital first impression and personal elevator pitch, all wrapped into 150 characters. A well-crafted bio can be the difference between someone hitting that follow button or scrolling past your profile.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">First Impression</h3>
              <p>Your bio creates an immediate impression of who you are or what your brand represents. A compelling bio captures attention and communicates your unique value proposition in seconds.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Discoverability</h3>
              <p>Instagram bios are searchable. Including relevant keywords can help potential followers who are interested in your niche discover your profile through search.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Action Driver</h3>
              <p>An effective bio guides visitors toward desired actions, whether that's visiting your website, signing up for a newsletter, or contacting you for collaborations.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Brand Representation</h3>
              <p>Your bio sets the tone for your entire Instagram presence. The language, emojis, and information you include should align with your overall brand personality and goals.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Elements of a Perfect Instagram Bio</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Clear Value Proposition</h3>
          <p>
            Your bio should quickly communicate what followers will gain by following you. Whether you're sharing travel inspiration, fitness tips, business insights, or entertaining content, make it immediately clear what value you provide.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Sharing actionable SEO tips & digital marketing strategies that actually work | Helping small businesses climb search rankings 📈"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Personality & Brand Voice</h3>
          <p>
            Your bio should reflect your personality or brand voice. The tone, word choice, and even emoji usage should align with the image you want to project—whether that's professional, playful, inspirational, or edgy.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "✨ Turning caffeine into code | Frontend dev with a passion for pixel-perfect designs | Dog lover & weekend hiker 🐕 🏔️"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Call-to-Action</h3>
          <p>
            A strong call-to-action (CTA) guides profile visitors toward your desired next step. This could be visiting your website, checking out your latest project, signing up for a newsletter, or simply engaging with your content.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Sustainable fashion designer creating timeless pieces from recycled materials | New collection drops every season | Shop the latest looks via link below 👇"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Strategic Use of Emojis</h3>
          <p>
            Emojis add visual interest, break up text, and convey personality in a space-efficient way. Using them strategically can help organize information and highlight key points without using additional characters.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "🍳 Food blogger | 📸 Recipe developer | 🏆 Published cookbook author | 📍 NYC | 👇 Get my free meal prep guide"
            </p>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Instagram Bio Ideas for Different Types of Accounts</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Personal Brands & Influencers</h3>
          <p>
            Personal brands should focus on authenticity, unique perspective, and establishing a connection with followers. Your bio should communicate your niche expertise and what makes your content unique.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Minimalist lifestyle enthusiast helping you declutter your space & mind | Featured in @mindfulmag & @simplicityblog | New organizing tips every Monday ✨"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Small Businesses</h3>
          <p>
            Business bios should clearly state what you offer, what sets you apart, and how customers can take action. Include essential information like location, hours, or shipping details if relevant.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Handcrafted ceramic homewares made in Portland | Small-batch production | Eco-friendly packaging | Free shipping on orders $50+ | Shop now ⬇️"
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Creative Professionals</h3>
          <p>
            Artists, photographers, designers, and other creatives should use their bio to communicate their artistic style, medium, and availability for commissions or collaborations.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Watercolor artist capturing the quiet beauty of everyday moments | Original paintings & limited prints | Commissions open quarterly | Next availability: June 2023"
            </p>
          </div>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Create Your Perfect Instagram Bio Today</h2>
            <p className="mb-4">
              Crafting the ideal Instagram bio doesn't have to be a challenge. Our AI Instagram Bio Generator helps you create a bio that perfectly captures your personality, brand, or business in a concise, engaging way that resonates with your target audience.
            </p>
            <p>
              Whether you're just starting your Instagram journey or looking to refresh your existing profile, our tool can help you make that crucial first impression count.
            </p>
          </div>
        </div>
        
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How long can an Instagram bio be?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Instagram limits bios to 150 characters. This includes letters, numbers, punctuation, emojis, and spaces. Our bio generator is designed to create impactful bios that stay within this character limit while conveying your essential information and personality.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How often should I update my Instagram bio?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  There's no strict schedule for updating your Instagram bio, but it's good practice to revisit it regularly—perhaps quarterly or whenever there's a significant change in your brand, offerings, or focus. You might also update your bio for seasonal promotions, to highlight new achievements, or to feature current projects. Keep your bio fresh and relevant to your current content and goals.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Should I use hashtags in my Instagram bio?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Hashtags in your Instagram bio are clickable, which can help connect users to related content. However, they don't make your profile discoverable in hashtag searches. Use hashtags sparingly in your bio—ideally only for branded hashtags, campaigns you're participating in, or very specific niche identifiers. Since space is limited, prioritize information about who you are and what you offer over multiple hashtags.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How do I add line breaks in my Instagram bio?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Adding line breaks to your Instagram bio can improve readability and organization. Here's how to do it:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Write your bio in a notes app first (like Notes on iPhone or a text editor)</li>
                  <li>Add line breaks where you want them in the notes app</li>
                  <li>Copy the text with line breaks</li>
                  <li>Paste it into your Instagram bio field</li>
                </ul>
                <p>
                  Alternatively, you can edit your profile directly in Instagram and press Return or Enter where you want line breaks. Our bio generator automatically creates properly formatted bios with appropriate line breaks.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What information should I prioritize in my limited bio space?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  With only 150 characters, prioritize information in this order:
                </p>
                <ol className="list-decimal pl-5 mb-2 space-y-1">
                  <li>Who you are and what you do (your core identity/offering)</li>
                  <li>Your unique value proposition (what sets you apart)</li>
                  <li>A call-to-action (what you want visitors to do next)</li>
                  <li>Supporting credentials or personality traits (if space allows)</li>
                </ol>
                <p>
                  Remember that additional contact information, location, and website links can be added to the dedicated fields outside the bio text area, so you don't need to include these in your 150-character limit.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Related Social Media Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Instagram Hashtag Generator</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Create optimized hashtag sets to increase your content reach and engagement.</p>
                  <Link
                    to="/instagram-hashtag-generator-tool"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Try this tool</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Instagram Name Generator</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Find the perfect username for your Instagram account that reflects your brand.</p>
                  <Link
                    to="/instagram-name-generator-tool"
                    className="inline-flex items-center text-teal hover:text-teal-600 dark:text-teal-light dark:hover:text-teal-light/80"
                  >
                    <span>Try this tool</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Build Your Social Media Presence</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Your Instagram bio is just one component of a successful social media strategy. Explore our full suite of social media tools to enhance your online presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Search className="h-4 w-4 mr-2" />
              Explore All Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default InstagramBioGenerator;
