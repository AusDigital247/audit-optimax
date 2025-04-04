
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const YoutubeNameGenerator: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="YouTube Name Generator | Create Unique Channel Names"
        description="Generate creative, memorable YouTube channel names with our free AI tool. Find available, niche-specific channel names that help you build a recognizable brand."
        keywords="youtube name generator, youtube channel name, youtube username, channel name ideas, youtube branding, content creator name"
        canonicalPath="/youtube-name-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            YouTube Name Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Create the perfect YouTube channel name that reflects your content, appeals to your target audience, and helps build a recognizable brand identity.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Niche-Relevant Names</span>
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
            This YouTube Name Generator is currently in development. Soon you'll be able to generate creative, brand-appropriate channel name ideas tailored to your content niche.
          </AlertDescription>
        </Alert>
        
        {/* Tool placeholder - would be replaced with actual component */}
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">YouTube Name Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Generate unique YouTube channel name ideas based on your content niche.</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">What's your channel about?</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="E.g., gaming, cooking tutorials, tech reviews, travel vlogs..."
              disabled
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Include words (optional)</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="E.g., your name, brand, or keywords you'd like included"
              disabled
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Channel Name Style</label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              disabled
            >
              <option>Professional/Authoritative</option>
              <option>Creative/Artistic</option>
              <option>Fun/Entertaining</option>
              <option>Educational/Informative</option>
              <option>Personal Brand</option>
            </select>
          </div>
          
          <Button disabled className="bg-teal hover:bg-teal-600 text-white w-full py-2 rounded-md">
            Generate Channel Names
          </Button>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Coming soon! We're working on implementing this feature.
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">The Impact of Your YouTube Channel Name</h2>
          <p>
            Your YouTube channel name is the cornerstone of your content brand. It's often the first element viewers encounter and significantly influences their decision to engage with your content. A strategically chosen channel name can accelerate growth, improve memorability, and establish a strong foundation for your YouTube presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Search Discoverability</h3>
              <p>The right channel name improves your chances of being found through YouTube search. Names that include relevant keywords related to your content niche can boost your visibility.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
              <p>A memorable, distinctive name helps viewers recognize and remember your channel, increasing the likelihood of return visits and subscriptions.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Content Expectations</h3>
              <p>Your name sets immediate expectations about your content style and subject matter, helping attract viewers who are genuinely interested in what you offer.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Growth Potential</h3>
              <p>A well-chosen name provides flexibility for channel evolution and expansion, allowing you to diversify content without rebranding as your channel grows.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Characteristics of Successful YouTube Channel Names</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Memorable and Distinctive</h3>
          <p>
            The YouTube landscape is crowded with millions of channels. A name that stands out and sticks in viewers' minds gives you a significant advantage. Avoid generic names that blend in with similar channels in your niche.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Compare these examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generic: "Gaming Videos"</li>
              <li>Distinctive: "Pixel Pioneers" or "Quest Crusaders"</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Easy to Spell and Pronounce</h3>
          <p>
            Your channel name will be shared verbally through word of mouth and in videos. Names with complex spellings, ambiguous pronunciations, or easily confused words create barriers to discovery. Choose a name that viewers can easily search for after hearing it.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Niche-Relevant</h3>
          <p>
            Including relevant keywords or thematic elements in your channel name helps viewers immediately understand what content you offer. This relevance improves both discoverability and click-through rates from search results.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Niche-relevant name examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cooking channel: "Culinary Canvas" or "Flavor Lab"</li>
              <li>Tech reviews: "Tech Decoded" or "Gadget Guru"</li>
              <li>Fitness content: "Form Focus" or "Strength Simplified"</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Future-Proof</h3>
          <p>
            As your channel grows, your content may evolve or expand into related areas. Choose a name with enough flexibility to accommodate potential future directions without requiring a complete rebrand. Overly specific names can become limiting as your channel develops.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">YouTube Channel Name Strategies by Content Type</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Educational Content</h3>
          <p>
            Educational channels benefit from names that convey expertise and clarity while remaining approachable. Consider incorporating terms that suggest knowledge transfer, simplification, or guidance.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Educational channel name examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"Concept Clarity" (simplifying complex topics)</li>
              <li>"Knowledge Nexus" (comprehensive educational content)</li>
              <li>"Explained Academy" (focus on clear explanations)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Entertainment and Lifestyle Content</h3>
          <p>
            Entertainment-focused channels should aim for names that convey personality, energy, and the unique perspective or style that defines your content. These names often have more creative freedom but should still hint at your content type.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Entertainment channel name examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"Wanderlust Chronicles" (travel content)</li>
              <li>"Urban Playground" (city lifestyle content)</li>
              <li>"Laughter Logic" (comedy content with a perspective)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Tutorial and How-To Content</h3>
          <p>
            Channels focused on teaching specific skills or providing how-to guidance benefit from names that clearly communicate the practical value viewers will receive. These names often include action words or results-oriented language.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Tutorial channel name examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"DIY Mastery" (general DIY tutorials)</li>
              <li>"Code Crafters" (programming tutorials)</li>
              <li>"Photo Fix" (photography improvement tutorials)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Personal Brand Channels</h3>
          <p>
            If your channel is centered around your personal brand or expertise, incorporating your name can be effective. Consider combining your name with elements that hint at your content focus or unique value proposition.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Personal brand channel examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>"Alex Explores" (travel content with Alex as the host)</li>
              <li>"Cooking with Claire" (Claire's cooking channel)</li>
              <li>"Mike's Tech Insights" (Mike's perspective on technology)</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Launch Your YouTube Channel with Confidence</h2>
            <p className="mb-4">
              Finding the perfect YouTube channel name is a crucial first step toward building a successful content brand. Our AI name generator helps you discover creative, available options that align with your content niche and appeal to your target audience.
            </p>
            <p>
              With the right channel name, you'll improve your discoverability, strengthen your brand identity, and create a solid foundation for YouTube growth and engagement.
            </p>
          </div>
        </div>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Build Your YouTube Presence</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            A great channel name is just the beginning. Explore our full suite of YouTube tools to create a compelling, effective channel presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/youtube-channel-description-generator-tool">
              <Search className="h-4 w-4 mr-2" />
              Try Our YouTube Description Generator
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default YoutubeNameGenerator;
