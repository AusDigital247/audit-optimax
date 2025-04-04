
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ArrowRight, CheckCircle2, Search, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const InstagramNameGenerator: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Instagram Name Generator | Find Available Username Ideas"
        description="Create the perfect Instagram username with our free AI name generator. Discover available, catchy username ideas that reflect your personal brand or business identity."
        keywords="instagram name generator, instagram username ideas, instagram handle generator, social media name, username creator, instagram account name"
        canonicalPath="/instagram-name-generator-tool"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Instagram Name Generator Tool
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Find the perfect Instagram username that represents your brand, is memorable, and available. Create a unique online identity with our AI-powered name generator.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Brand-Aligned Names</span>
            </div>
            <div className="flex items-center text-sm bg-teal/10 dark:bg-teal/20 text-teal dark:text-teal-light px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              <span>Multiple Options</span>
            </div>
          </div>
        </div>
        
        <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 mb-8">
          <Info className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800 dark:text-amber-400">About This Tool</AlertTitle>
          <AlertDescription className="text-amber-700 dark:text-amber-300">
            This Instagram Name Generator is currently in development. Soon you'll be able to generate creative, available username ideas for your Instagram account.
          </AlertDescription>
        </Alert>
        
        {/* Tool placeholder - would be replaced with actual component */}
        <div className="w-full max-w-4xl mx-auto bg-white dark:bg-navy-light shadow-md rounded-lg p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Instagram Name Generator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Generate unique Instagram username ideas based on your preferences.</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">What's your account about?</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              placeholder="E.g., photography, fitness coaching, digital art, personal blog..."
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
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Name Style</label>
            <select
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal dark:bg-navy-dark dark:text-white"
              disabled
            >
              <option>Professional</option>
              <option>Creative/Artistic</option>
              <option>Playful/Fun</option>
              <option>Minimalist</option>
              <option>Brand-Focused</option>
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
          <h2 className="text-2xl font-bold mb-6">Crafting the Perfect Instagram Username</h2>
          <p>
            Your Instagram username is more than just a login credential—it's a fundamental part of your online identity and personal brand. A well-chosen username creates instant recognition, communicates your personal or brand values, and makes you discoverable to your target audience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Brand Recognition</h3>
              <p>A memorable, distinctive username helps users recognize and remember your brand across different platforms and touchpoints.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Discoverability</h3>
              <p>Strategic usernames that include relevant keywords can improve your chances of being found through Instagram's search feature.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Professionalism</h3>
              <p>For businesses and creators, a well-chosen username signals professionalism and attention to detail, increasing trust with potential followers.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Cross-Platform Consistency</h3>
              <p>Using a consistent username across social platforms creates a cohesive online presence that strengthens brand recognition.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Essential Qualities of an Effective Instagram Username</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Memorable and Distinctive</h3>
          <p>
            Your username should be easy to remember and distinct enough to stand out in a crowded social media landscape. Avoid easily forgettable names with excessive numbers, underscores, or complex spellings that make it difficult for users to find or tag you.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Examples of memorable usernames:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@wanderlustcamera (for a travel photographer)</li>
              <li>@the.plant.diary (for a plant enthusiast)</li>
              <li>@chefinthewild (for an outdoor cooking account)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Relevant to Your Content</h3>
          <p>
            Your username should give users an immediate hint about what type of content you share. This relevance helps attract the right audience and sets appropriate expectations for anyone who discovers your profile.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Content-relevant username examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>@seattle_food_guide (for a Seattle restaurant reviewer)</li>
              <li>@minimal_interiors (for a minimalist interior design account)</li>
              <li>@fitness_with_alex (for a personal trainer named Alex)</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Easy to Spell and Pronounce</h3>
          <p>
            When people hear about your Instagram account through word of mouth, they should be able to easily spell and search for your username. Avoid complex spellings, ambiguous pronunciations, or easily confused characters that make your account difficult to find.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="italic">
              "Instead of @xaesthetic.vizualsx (hard to spell and remember), consider something clearer like @aesthetic.visuals or @aesthetic.imagery."
            </p>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Future-Proof</h3>
          <p>
            Choose a username that can grow with you and won't become limiting as your content or business evolves. Overly specific usernames can become restrictive if your focus changes over time.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Compare these examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Too specific: @nyc_apartment_diys (limits you to DIY projects in NYC apartments)</li>
              <li>More flexible: @urban_home_creative (allows for growth into different types of content)</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Username Strategies for Different Account Types</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Personal Brands</h3>
          <p>
            If you're building a personal brand, consider incorporating your actual name or a distinctive variation of it. This creates authenticity and makes it easier for people who know you personally to find your account.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Personal brand username approaches:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name-based: @emma.wilson.writes, @cooking.with.james</li>
              <li>Name + niche: @sara_travels, @mike_shoots_weddings</li>
              <li>Personal brand: @the.mindful.teacher, @the.finance.dad</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Businesses</h3>
          <p>
            Business accounts should prioritize brand consistency across platforms. Ideally, your Instagram username should match your business name as closely as possible, making it easy for customers to find and tag you.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Business username strategies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exact brand name: @airbnb, @nike, @glossier</li>
              <li>Brand name + descriptor: @revlon_official, @burberry_beauty</li>
              <li>If your exact business name is unavailable, consider adding words like "official," "real," or your location</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">For Creative Accounts</h3>
          <p>
            Creative accounts like art, photography, or design profiles can benefit from more imaginative usernames that reflect your creative style or artistic vision while still being relevant to your content.
          </p>
          <div className="bg-gray-100 dark:bg-navy-dark p-4 rounded-md my-3">
            <p className="mb-2 font-semibold">Creative account username examples:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Style-based: @minimal.lens, @bold.strokes.art</li>
              <li>Concept-based: @light.chaser, @urban.fragments</li>
              <li>Medium-specific: @ink.and.pixel, @thread.stories</li>
            </ul>
          </div>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect Instagram Username</h2>
            <p className="mb-4">
              Creating a memorable, effective Instagram username is an important first step in building your social media presence. Our AI username generator helps you discover available username options that align with your personal or brand identity.
            </p>
            <p>
              With the right username, you can improve your discoverability, create instant brand recognition, and establish a strong foundation for your Instagram success.
            </p>
          </div>
        </div>
        
        {/* FAQ Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How do I check if an Instagram username is available?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  To check if an Instagram username is available:
                </p>
                <ol className="list-decimal pl-5 mb-2 space-y-1">
                  <li>Open the Instagram app and go to your profile</li>
                  <li>Tap the menu icon, then "Settings"</li>
                  <li>Select "Account" and then "Username"</li>
                  <li>Type in the username you want to check</li>
                  <li>If it's available, you'll see a green checkmark; if not, Instagram will suggest alternatives</li>
                </ol>
                <p>
                  Alternatively, you can try creating a new account and entering your desired username during signup to check availability without changing your current username.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                How often can I change my Instagram username?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p>
                  Instagram allows you to change your username as often as you want. However, we recommend caution with frequent changes, as they can confuse your audience and disrupt your brand recognition. If you do change your username, consider notifying your followers through a post or story to maintain continuity and ensure they can still find you.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What characters are allowed in Instagram usernames?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Instagram usernames have several character restrictions:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Can include letters, numbers, periods (.), and underscores (_)</li>
                  <li>Cannot contain spaces, symbols, or special characters (@, #, !, $, etc.)</li>
                  <li>Cannot contain website URLs (www, http, .com, etc.)</li>
                  <li>Maximum length is 30 characters</li>
                  <li>Cannot contain consecutive periods (..) or start/end with a period</li>
                </ul>
                <p>
                  Our username generator automatically adheres to these restrictions to ensure all suggestions are valid for Instagram.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                What's the difference between username and display name?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  On Instagram, the username and display name serve different purposes:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li><strong>Username</strong>: Appears in your profile URL (instagram.com/username), must be unique across Instagram, and is used to tag you in posts and comments (@username)</li>
                  <li><strong>Display Name</strong>: Appears at the top of your profile, can include spaces and special characters, doesn't need to be unique, and can be up to 30 characters</li>
                </ul>
                <p>
                  For maximum brand consistency, try to keep both names similar or complementary. For example, if your username is @urban_baker, your display name might be "The Urban Baker" or "Urban Baker | Artisan Breads".
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-slate-200 dark:border-slate-700 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-navy dark:text-white">
                Should I include numbers in my Instagram username?
              </AccordionTrigger>
              <AccordionContent className="text-navy/70 dark:text-white/70">
                <p className="mb-2">
                  Generally, it's best to avoid random numbers in your Instagram username unless they have specific meaning or brand relevance. Numbers can make usernames harder to remember and may appear less professional or trustworthy to new visitors.
                </p>
                <p className="mb-2">
                  However, there are some exceptions where numbers can work well:
                </p>
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  <li>Birth year or founding year (e.g., @artist1995, @bakery2020)</li>
                  <li>Numbers with brand significance (e.g., @studio52, @fitness360)</li>
                  <li>Area codes for local businesses (e.g., @photographer212 for NYC)</li>
                </ul>
                <p>
                  If you must use numbers because your preferred username is taken, try incorporating them meaningfully rather than randomly appending them.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        
        {/* Related Tools Section */}
        <section className="py-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Related Social Media Tools</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-navy-light border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <Instagram className="h-6 w-6 text-teal dark:text-teal-light flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">Instagram Bio Generator</h3>
                  <p className="text-navy/70 dark:text-white/70 mb-4">Create the perfect Instagram bio that captures your brand personality.</p>
                  <Link
                    to="/instagram-bio-generator-tool"
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
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-12 my-10 bg-gradient-to-r from-teal/10 to-navy/10 dark:from-teal/20 dark:to-navy-light/20 rounded-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy dark:text-white mb-4">Create Your Complete Instagram Identity</h2>
          <p className="text-navy/70 dark:text-white/70 max-w-2xl mx-auto mb-8">
            A great username is just the beginning. Discover our full suite of Instagram tools to create a cohesive, engaging social media presence.
          </p>
          <Button asChild size="lg" className="bg-teal hover:bg-teal-600 text-white font-medium">
            <Link to="/">
              <Search className="h-4 w-4 mr-2" />
              Explore All Instagram Tools
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default InstagramNameGenerator;
