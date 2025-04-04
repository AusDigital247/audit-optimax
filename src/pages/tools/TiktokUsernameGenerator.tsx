
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const TiktokUsernameGenerator: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="TikTok Username Generator | Create Catchy TikTok Handles"
        description="Generate unique, memorable TikTok usernames with our free AI username generator. Find available handles that reflect your content style and help you build a recognizable TikTok brand."
        keywords="tiktok username generator, tiktok name ideas, tiktok handle generator, tiktok account name, social media username, username creator"
        canonicalPath="/tiktok-username-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            TikTok Username Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Create the perfect TikTok username that stands out, reflects your content style, and helps build your brand identity. Find available, catchy handles in seconds.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Content-Aligned Names</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Brand-Building</span>
            </div>
          </div>
        </div>
        
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This TikTok Username Generator is currently in development. Soon you'll be able to generate creative, available username ideas for your TikTok account.
          </AlertDescription>
        </Alert>
        
        {/* Tool placeholder - would be replaced with actual component */}
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">TikTok Username Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Generate unique TikTok username ideas based on your content and style.</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">What's your TikTok content about?</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="E.g., comedy skits, dance videos, cooking tutorials, beauty tips..."
              disabled
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Include keywords (optional)</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="E.g., your name, brand, or keywords you'd like included"
              disabled
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Username Style</label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              disabled
            >
              <option>Fun & Playful</option>
              <option>Creative/Artistic</option>
              <option>Professional/Branded</option>
              <option>Trendy</option>
              <option>Minimalist</option>
            </select>
          </div>
          
          <Button disabled className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md">
            Generate Username Ideas
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Coming soon! We're working on implementing this feature.
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Your TikTok Username Matters</h2>
          <p>
            On TikTok, your username is more than just a login credential—it's the foundation of your identity on the platform. A well-chosen username can significantly impact your growth, engagement, and brand recognition as you build your TikTok presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Discoverability</h3>
              <p>TikTok's search function makes your username a key discovery point. A relevant, keyword-rich username can help new followers find you when searching for content in your niche.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
              <p>A memorable, distinctive username helps viewers remember and recognize your content across the platform, increasing the likelihood of follows and engagement.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Content Expectations</h3>
              <p>Your username creates immediate expectations about your content style and niche. A well-aligned username helps attract your target audience and sets appropriate content expectations.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Consistency</h3>
              <p>A consistent username across social platforms strengthens your overall brand identity and makes it easier for followers to find you on multiple channels.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Characteristics of Successful TikTok Usernames</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Memorable and Distinctive</h3>
          <p>
            The most effective TikTok usernames are easily remembered, which is crucial given the fast-paced nature of the platform. Avoid complicated spellings, excessive numbers, or non-intuitive character combinations that make your username difficult to recall.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Content-Relevant</h3>
          <p>
            Your username should give viewers an immediate hint about what kind of content you create. This relevance helps attract followers who are likely to enjoy your videos and increases the chances of your account appearing in niche-specific searches.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Easy to Pronounce and Spell</h3>
          <p>
            TikTok is a highly verbal platform with many users mentioning other creators in videos or telling friends about accounts they enjoy. Choose a username that's easy to say and spell to maximize word-of-mouth growth opportunities.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">On-Trend But Timeless</h3>
          <p>
            While it's tempting to incorporate current TikTok trends into your username, overly trendy names may feel outdated quickly. Aim for a username that feels contemporary but won't become irrelevant when trends change.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">TikTok Username Ideas by Content Type</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Comedy and Entertainment Content</h3>
          <p>
            Comedy creators benefit from playful, catchy usernames that hint at their humorous content. Consider wordplay, puns, or unexpected combinations that capture your comedic style.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@TheQuipster</li>
              <li>@LaughTrackLarry</li>
              <li>@ComicallyYours</li>
              <li>@JokesOnDemand</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Educational Content</h3>
          <p>
            Educational content creators should aim for usernames that convey expertise while remaining approachable. Consider incorporating keywords related to your specific educational niche.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@ScienceSimplified</li>
              <li>@HistoryInBrief</li>
              <li>@LanguageLearner</li>
              <li>@MathMadeEasy</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Lifestyle and Vlog Content</h3>
          <p>
            Lifestyle content creators often benefit from personal but broadly appealing usernames that can encompass various aspects of daily life and experiences.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@EverydayAdventures</li>
              <li>@UrbanExplorer</li>
              <li>@LifeUnfiltered</li>
              <li>@DailyVibesOnly</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Specialized Skill Content</h3>
          <p>
            If your content focuses on a specific skill or craft (cooking, art, DIY, etc.), your username should clearly indicate your specialty while highlighting your unique approach.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@BrushStrokes (art)</li>
              <li>@StitchCraft (sewing)</li>
              <li>@TheFlavourLab (cooking)</li>
              <li>@MelodyMaker (music)</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Create Your Perfect TikTok Identity</h2>
            <p className="mb-4">
              Finding the right TikTok username is a crucial step in establishing your presence on the platform. Our AI username generator helps you discover creative, available options that align with your content and appeal to your target audience.
            </p>
            <p>
              With the perfect username, you'll improve your discoverability, strengthen your brand identity, and create a solid foundation for TikTok growth and engagement.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Build Your TikTok Strategy</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            A great username is just the beginning. Explore our full suite of TikTok tools to create an effective, engaging social media presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/tiktok-hashtag-generator-tool">
              <Search className="h-4 w-4 mr-2" />
              Try Our TikTok Hashtag Generator
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default TiktokUsernameGenerator;
