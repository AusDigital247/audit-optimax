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
import { generateYoutubeDescription } from '@/utils/hashtagGenerator';
import { toast } from "sonner";

const YoutubeDescriptionGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    keywords: '',
    channelInfo: '',
    type: 'video'
  });
  
  const [description, setDescription] = useState<string>('');
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

  const generateDescription = async () => {
    if (!formData.title) {
      toast.error("Please enter a title for your YouTube content");
      return;
    }

    if (!formData.content) {
      toast.error("Please enter a content summary");
      return;
    }

    setLoading(true);
    try {
      const generatedDescription = await generateYoutubeDescription({
        title: formData.title,
        content: formData.content,
        keywords: formData.keywords,
        channelInfo: formData.channelInfo,
        type: formData.type as 'video' | 'channel'
      });
      
      setDescription(generatedDescription);
      toast.success(`Generated YouTube ${formData.type} description`);
    } catch (error) {
      console.error('Error generating description:', error);
      toast.error("Failed to generate description. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(description);
    toast.success("Description copied to clipboard");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="YouTube Description Generator | Create SEO-Optimized Video Descriptions"
        description="Generate engaging, SEO-optimized YouTube descriptions with our free AI tool. Increase views, improve search rankings, and drive more engagement with professionally crafted video descriptions."
        keywords="youtube description generator, video description, youtube seo, youtube description template, channel description, video optimization"
        canonicalPath="/youtube-channel-description-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            YouTube Description Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Create compelling, SEO-optimized descriptions for your YouTube videos and channel. Improve discoverability, engagement, and conversions with professional descriptions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>SEO-Optimized</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Conversion-Focused</span>
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">YouTube Description Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Generate optimized descriptions for your YouTube content.</p>
          
          <div className="mb-4">
            <Label htmlFor="type" className="block text-gray-700 dark:text-gray-300 mb-2">Description Type</Label>
            <Select 
              value={formData.type} 
              onValueChange={(value) => handleSelectChange('type', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select description type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="video">Video Description</SelectItem>
                <SelectItem value="channel">Channel Description</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="title" className="block text-gray-700 dark:text-gray-300 mb-2">Video/Channel Title *</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your video or channel title"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="keywords" className="block text-gray-700 dark:text-gray-300 mb-2">Main Topics/Keywords</Label>
            <Input
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              placeholder="E.g., SEO tips, beginner's guide, product review..."
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <Label htmlFor="content" className="block text-gray-700 dark:text-gray-300 mb-2">Content Summary *</Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="Briefly describe what your video or channel is about..."
              className="w-full h-32 p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
            />
          </div>
          
          {formData.type === 'channel' && (
            <div className="mb-4">
              <Label htmlFor="channelInfo" className="block text-gray-700 dark:text-gray-300 mb-2">Channel Information (Optional)</Label>
              <Textarea
                id="channelInfo"
                name="channelInfo"
                value={formData.channelInfo}
                onChange={handleInputChange}
                placeholder="Upload schedule, channel owner info, credentials, etc."
                className="w-full h-24 p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              />
            </div>
          )}
          
          <Button 
            onClick={generateDescription} 
            disabled={loading}
            className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Description...
              </>
            ) : (
              <>Generate YouTube Description</>
            )}
          </Button>
        </div>
        
        {description && (
          <Card className="w-full max-w-4xl mx-auto p-6 mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your YouTube Description</h2>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" /> Copy All
              </Button>
            </div>
            
            <div className="bg-gray-50 dark:bg-navy-dark p-4 rounded-lg mb-4">
              <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300">
              <p className="mb-2 font-medium">Tips for using this description:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Review and personalize before posting</li>
                <li>Add any specific links or tags needed</li>
                <li>Consider adding emojis for visual appeal</li>
                <li>Ensure all information is accurate</li>
              </ul>
            </div>
          </Card>
        )}
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Why YouTube Descriptions Matter for Channel Success</h2>
          <p>
            YouTube descriptions are far more than just informational text—they're powerful tools that directly impact your video's performance, search visibility, and conversion potential. A well-crafted description serves multiple crucial functions in your YouTube strategy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Search Engine Optimization</h3>
              <p>YouTube descriptions provide critical SEO context that helps the platform understand and properly rank your content in both YouTube and Google search results.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Viewer Information</h3>
              <p>Descriptions help viewers understand what your video offers before watching, improving audience targeting and reducing bounce rates.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Conversion Opportunities</h3>
              <p>Strategic descriptions include calls-to-action, links, and resources that drive viewers toward desired actions like subscribing, visiting websites, or making purchases.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Additional Context</h3>
              <p>Descriptions can include information that doesn't fit in the video itself, such as detailed timestamps, source citations, product links, and expanded explanations.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Anatomy of an Effective YouTube Video Description</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">The Critical First 150 Characters</h3>
          <p>
            The first 150 characters of your description are the most important, as they appear in search results and underneath your video before viewers click "Show more." This section should include your primary keywords and a compelling hook that encourages viewers to watch.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Learn the 5 most effective SEO techniques for 2023 that actually boost rankings. In this step-by-step tutorial, I reveal strategies used by top-ranking websites..."
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Detailed Content Summary</h3>
          <p>
            After the initial hook, provide a more comprehensive overview of what viewers will learn or experience in your video. This section should naturally incorporate relevant keywords and phrases that potential viewers might search for.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Timestamps for Navigation</h3>
          <p>
            Especially for longer videos, including timestamps with brief descriptions of each section significantly improves user experience. Timestamps appear as clickable links and help viewers navigate directly to the parts most relevant to them.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Example timestamp format:</p>
            <p>
              0:00 Introduction<br />
              2:14 Understanding On-Page SEO<br />
              8:37 Keyword Research Techniques<br />
              15:42 Building Quality Backlinks<br />
              23:18 Technical SEO Essentials<br />
              31:05 Measuring SEO Success
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Resource Links and References</h3>
          <p>
            Include links to resources mentioned in your video, related content, or supplementary materials. For tools, products, or services you recommend, consider using affiliate links (with proper disclosure) to monetize your content.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Call-to-Action (CTA)</h3>
          <p>
            End your description with a clear call-to-action that guides viewers toward the next step you want them to take. This might be subscribing to your channel, visiting your website, signing up for a newsletter, or checking out related videos.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Channel Description Optimization Strategies</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Clear Value Proposition</h3>
          <p>
            Your channel description should immediately communicate what value you provide to subscribers. What type of content do you create? What problems do you solve? What can viewers expect to learn or experience by subscribing to your channel?
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Consistent Upload Schedule</h3>
          <p>
            If you maintain a regular content schedule, mention it in your channel description (e.g., "New videos every Tuesday and Friday"). This sets expectations and encourages subscriptions from viewers who want to follow your content consistently.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Credentials and Social Proof</h3>
          <p>
            Build credibility by briefly mentioning relevant qualifications, experience, achievements, or recognition in your field. This could include subscriber milestones, industry awards, professional certifications, or media features.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Cross-Platform Connectivity</h3>
          <p>
            Include links to your other social media profiles, website, or online store to create a connected online presence. This helps viewers engage with your brand across multiple platforms and increases opportunities for conversions.
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Optimize Your YouTube Presence</h2>
            <p className="mb-4">
              Well-crafted YouTube descriptions are essential for maximizing your content's visibility, engagement, and conversion potential. Our AI-powered description generator creates professionally optimized descriptions that work with YouTube's algorithm to help your videos and channel reach more viewers.
            </p>
            <p>
              Stop struggling with generic descriptions that underperform. Generate targeted, keyword-rich descriptions that enhance your YouTube SEO and drive meaningful audience actions.
            </p>
          </div>
        </div>
        
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Enhance Your YouTube Strategy</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            Great descriptions are just one component of a successful YouTube strategy. Explore our other YouTube tools to create a compelling, effective channel presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/youtube-name-generator-tool">
              <Search className="h-4 w-4 mr-2" />
              Try Our YouTube Name Generator
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default YoutubeDescriptionGenerator;
