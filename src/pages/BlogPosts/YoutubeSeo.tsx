
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  Share2, 
  Youtube, 
  Search, 
  BarChart3, 
  Clock,
  Tag,
  Star,
  CheckCircle2
} from 'lucide-react';

const YoutubeSeo = () => {
  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>YouTube SEO: The Complete Guide for 2025 | Video Optimization Tips</title>
        <meta name="description" content="Master YouTube SEO with our comprehensive guide. Learn proven techniques to rank videos higher, increase watch time, and get more views in 2025." />
        <meta name="keywords" content="YouTube SEO, video SEO, YouTube ranking, video optimization, YouTube algorithm, video keywords, YouTube description optimization" />
        
        <meta property="og:title" content="YouTube SEO: The Complete Guide for 2025 | Video Optimization Tips" />
        <meta property="og:description" content="Master YouTube SEO with our comprehensive guide. Learn proven techniques to rank videos higher, increase watch time, and get more views in 2025." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="/images/youtube-seo-guide.jpg" />
        <meta property="article:published_time" content="2024-05-15T10:00:00+00:00" />
        <meta property="article:author" content="SEO Audit Tool Team" />
        
        <meta name="twitter:title" content="YouTube SEO: The Complete Guide for 2025 | Video Optimization Tips" />
        <meta name="twitter:description" content="Master YouTube SEO with our comprehensive guide. Learn proven techniques to rank videos higher, increase watch time, and get more views in 2025." />
        <meta name="twitter:image" content="/images/youtube-seo-guide.jpg" />
        
        <link rel="canonical" href={window.location.href} />
        
        {/* Article Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "YouTube SEO: The Complete Guide for 2025",
            "description": "Master YouTube SEO with our comprehensive guide. Learn proven techniques to rank videos higher, increase watch time, and get more views in 2025.",
            "image": "/images/youtube-seo-guide.jpg",
            "author": {
              "@type": "Organization",
              "name": "SEO Audit Tool Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SEO Audit Tool",
              "logo": {
                "@type": "ImageObject",
                "url": "/logo.png"
              }
            },
            "datePublished": "2024-05-15T10:00:00+00:00",
            "dateModified": "2024-05-15T10:00:00+00:00",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": window.location.href
            }
          })}
        </script>
      </Helmet>

      {/* Blog Header */}
      <div className="bg-gradient-to-b from-navy to-navy-light py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-teal hover:text-teal-light mb-6">
            <ChevronLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
          
          <div className="flex items-center mb-4">
            <span className="bg-teal/20 text-teal text-sm py-1 px-3 rounded-full flex items-center">
              <Youtube className="w-4 h-4 mr-2" /> YouTube SEO
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            YouTube SEO: The Complete Guide for 2025
          </h1>
          
          <div className="flex items-center text-white/70 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            <span className="mr-4">May 15, 2024</span>
            <span className="mr-4">•</span>
            <span>12 min read</span>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
            alt="YouTube SEO Guide" 
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      
      {/* Blog Content */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-navy mb-6">Why YouTube SEO Matters in 2025</h2>
            <p className="text-navy/80 mb-6">
              With over 2.5 billion monthly active users, YouTube is not just a video platform—it's the second largest search engine in the world. As video content continues to dominate the digital landscape, mastering YouTube SEO has become essential for content creators, marketers, and businesses looking to expand their reach.
            </p>
            <p className="text-navy/80 mb-10">
              In this comprehensive guide, we'll explore the latest YouTube SEO strategies for 2025, including algorithm updates, optimization techniques, and proven methods to increase your video visibility, engagement, and channel growth.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl mb-10">
              <h3 className="text-xl font-bold text-navy mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li><a href="#youtube-algorithm" className="text-teal hover:underline">Understanding the YouTube Algorithm in 2025</a></li>
                <li><a href="#keyword-research" className="text-teal hover:underline">YouTube Keyword Research Techniques</a></li>
                <li><a href="#title-optimization" className="text-teal hover:underline">Title and Description Optimization</a></li>
                <li><a href="#thumbnail-optimization" className="text-teal hover:underline">Creating Clickable Thumbnails</a></li>
                <li><a href="#video-engagement" className="text-teal hover:underline">Maximizing Video Engagement Signals</a></li>
                <li><a href="#channel-optimization" className="text-teal hover:underline">Channel Optimization Strategies</a></li>
                <li><a href="#analytics" className="text-teal hover:underline">Using YouTube Analytics for SEO</a></li>
                <li><a href="#tools" className="text-teal hover:underline">Essential YouTube SEO Tools</a></li>
                <li><a href="#advanced-strategies" className="text-teal hover:underline">Advanced YouTube SEO Strategies</a></li>
              </ul>
            </div>
            
            <h2 id="youtube-algorithm" className="text-3xl font-bold text-navy mb-6">Understanding the YouTube Algorithm in 2025</h2>
            <p className="text-navy/80 mb-6">
              The YouTube algorithm has evolved significantly in recent years, with an increased focus on viewer satisfaction metrics. In 2025, these are the key factors that influence video rankings:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Watch Time and Retention</h4>
                <p className="text-navy/80 text-sm">
                  Videos that keep viewers watching longer are prioritized. Absolute watch time (total minutes) and relative retention (percentage of video watched) both matter.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Engagement Metrics</h4>
                <p className="text-navy/80 text-sm">
                  Likes, comments, shares, and subscriptions after watching signal to YouTube that your content resonates with viewers.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Click-Through Rate (CTR)</h4>
                <p className="text-navy/80 text-sm">
                  Higher CTR indicates to YouTube that your thumbnail and title effectively match what users are searching for.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Session Time</h4>
                <p className="text-navy/80 text-sm">
                  Videos that lead viewers to watch more YouTube content (not just your videos) may receive preferential treatment.
                </p>
              </div>
            </div>
            
            <blockquote className="border-l-4 border-teal p-4 bg-teal/5 mb-10">
              <p className="italic text-navy/80">
                "The YouTube algorithm doesn't promote videos; it promotes viewer satisfaction. Create content that satisfies search intent and keeps viewers engaged, and the algorithm will reward you."
              </p>
            </blockquote>
            
            <h2 id="keyword-research" className="text-3xl font-bold text-navy mb-6">YouTube Keyword Research Techniques</h2>
            <p className="text-navy/80 mb-6">
              Effective keyword research is the foundation of YouTube SEO. Here's how to identify the right keywords for your videos in 2025:
            </p>
            
            <h3 className="text-2xl font-bold text-navy mb-4">YouTube Search Suggestions</h3>
            <p className="text-navy/80 mb-6">
              Start typing potential topics in YouTube's search bar and note the auto-suggestions. These represent common searches and can reveal long-tail keyword opportunities with less competition.
            </p>
            
            <div className="mb-10">
              <img 
                src="https://images.unsplash.com/photo-1571721795195-a868d462495a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="YouTube Keyword Research" 
                className="w-full h-auto rounded-xl shadow-sm mb-3"
              />
              <p className="text-sm text-navy/60 italic text-center">
                YouTube search suggestions reveal popular search terms related to your topic
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Competitor Analysis</h3>
            <p className="text-navy/80 mb-6">
              Study successful videos in your niche. Use tools like <a href="/" className="text-teal hover:underline">our SEO Audit Tool</a> to analyze their:
            </p>
            
            <ul className="list-disc pl-6 mb-10 space-y-2 text-navy/80">
              <li>Title keywords</li>
              <li>Description tags and phrases</li>
              <li>Video tags (visible through browser extensions)</li>
              <li>Spoken keywords (via transcripts)</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Keyword Difficulty and Search Volume</h3>
            <p className="text-navy/80 mb-10">
              Use specialized YouTube keyword research tools to identify terms with:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <Tag className="h-8 w-8 text-teal mx-auto mb-2" />
                <h4 className="font-bold text-navy mb-1">Moderate Search Volume</h4>
                <p className="text-sm text-navy/70">Aim for keywords with enough searches to be worthwhile</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <BarChart3 className="h-8 w-8 text-teal mx-auto mb-2" />
                <h4 className="font-bold text-navy mb-1">Lower Competition</h4>
                <p className="text-sm text-navy/70">Find terms where you can realistically rank</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <Star className="h-8 w-8 text-teal mx-auto mb-2" />
                <h4 className="font-bold text-navy mb-1">High Relevance</h4>
                <p className="text-sm text-navy/70">Keywords must match your content and audience intent</p>
              </div>
            </div>
            
            <h2 id="title-optimization" className="text-3xl font-bold text-navy mb-6">Title and Description Optimization</h2>
            <p className="text-navy/80 mb-6">
              Your video title and description provide critical context to both viewers and the YouTube algorithm. Here's how to optimize them effectively:
            </p>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Title Best Practices</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-navy/80">
              <li>Place your main keyword within the first 60 characters</li>
              <li>Keep titles under 70 characters to avoid truncation</li>
              <li>Use numbers and brackets to increase CTR (e.g., "7 Tips [2025 Update]")</li>
              <li>Create curiosity or offer clear value</li>
              <li>Avoid clickbait that doesn't deliver on promises</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Description Optimization</h3>
            <p className="text-navy/80 mb-6">
              YouTube descriptions allow up to 5,000 characters. Use this space strategically:
            </p>
            
            <div className="bg-navy/5 p-6 rounded-xl mb-10">
              <h4 className="font-bold text-navy mb-3">First 150 Characters</h4>
              <p className="text-navy/80 mb-4">
                This is the visible snippet before "Show more." Include your primary keyword and a compelling reason to watch.
              </p>
              
              <h4 className="font-bold text-navy mb-3">Remaining Description</h4>
              <ul className="list-disc pl-6 space-y-2 text-navy/80">
                <li>Include primary and secondary keywords naturally</li>
                <li>Add timestamps for longer videos (improves user experience)</li>
                <li>Link to relevant videos or playlists on your channel</li>
                <li>Include calls-to-action for engagement</li>
                <li>Add social media links and other resources</li>
              </ul>
            </div>
            
            <h2 id="thumbnail-optimization" className="text-3xl font-bold text-navy mb-6">Creating Clickable Thumbnails</h2>
            <p className="text-navy/80 mb-6">
              Thumbnails are perhaps the most important factor influencing click-through rates. In 2025, these strategies will help your thumbnails stand out:
            </p>
            
            <div className="mb-10">
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="YouTube Thumbnail Optimization" 
                className="w-full h-auto rounded-xl shadow-sm mb-3"
              />
              <p className="text-sm text-navy/60 italic text-center">
                Effective thumbnails combine clear visuals with emotional triggers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">Technical Specifications</h3>
                <ul className="list-disc pl-6 space-y-2 text-navy/80">
                  <li>Resolution: 1280 x 720 pixels (16:9 ratio)</li>
                  <li>File format: JPG, GIF, or PNG</li>
                  <li>Size: Under 2MB</li>
                  <li>Text: Minimal and large enough to read on mobile</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-navy mb-4">Design Best Practices</h3>
                <ul className="list-disc pl-6 space-y-2 text-navy/80">
                  <li>Use high contrast colors that pop</li>
                  <li>Include faces with clear emotions when relevant</li>
                  <li>Maintain consistent branding across thumbnails</li>
                  <li>A/B test different styles to see what works</li>
                </ul>
              </div>
            </div>
            
            <h2 id="video-engagement" className="text-3xl font-bold text-navy mb-6">Maximizing Video Engagement Signals</h2>
            <p className="text-navy/80 mb-6">
              Engagement signals tell YouTube that viewers find your content valuable. Here's how to increase these crucial metrics:
            </p>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Pattern Interrupts</h3>
            <p className="text-navy/80 mb-6">
              Keep viewers watching longer by using pattern interrupts:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2 text-navy/80">
              <li>Scene changes every 30-60 seconds</li>
              <li>B-roll footage to illustrate points</li>
              <li>Subtle background music changes</li>
              <li>Visual elements like text overlays and graphics</li>
              <li>Changing presentation formats (talking head to demonstration)</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Call-to-Actions (CTAs)</h3>
            <p className="text-navy/80 mb-6">
              Strategically place CTAs throughout your video:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <h4 className="font-bold text-navy mb-1">Opening (First 15 Seconds)</h4>
                <p className="text-sm text-navy/70">Ask viewers to subscribe if they're new to the channel</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <h4 className="font-bold text-navy mb-1">Middle (Value Delivery)</h4>
                <p className="text-sm text-navy/70">Request comments on specific questions related to content</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg text-center">
                <h4 className="font-bold text-navy mb-1">End (Last 20 Seconds)</h4>
                <p className="text-sm text-navy/70">Suggest related videos and ask for likes/shares</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Community Engagement</h3>
            <p className="text-navy/80 mb-8">
              The first 24-48 hours after publishing are critical. Boost early engagement by:
            </p>
            
            <div className="bg-navy/5 p-6 rounded-xl mb-10">
              <ul className="list-disc pl-6 space-y-2 text-navy/80">
                <li>Responding quickly to all early comments</li>
                <li>Pinning thoughtful comments to encourage discussion</li>
                <li>Asking follow-up questions to commenters</li>
                <li>Using community posts to announce new videos</li>
                <li>Sharing videos across your social media platforms</li>
              </ul>
            </div>
            
            <h2 id="channel-optimization" className="text-3xl font-bold text-navy mb-6">Channel Optimization Strategies</h2>
            <p className="text-navy/80 mb-6">
              Your channel as a whole plays a significant role in YouTube SEO. Optimize these elements:
            </p>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Channel Keywords</h3>
            <p className="text-navy/80 mb-6">
              Define your channel's focus with targeted keywords in:
            </p>
            
            <ul className="list-disc pl-6 mb-8 space-y-2 text-navy/80">
              <li>Channel name (if possible)</li>
              <li>Channel description</li>
              <li>Channel keywords field (in advanced settings)</li>
              <li>Channel trailer script</li>
              <li>Featured sections organization</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Playlists Strategy</h3>
            <p className="text-navy/80 mb-6">
              Well-organized playlists can significantly increase session time:
            </p>
            
            <div className="bg-navy/5 p-6 rounded-xl mb-10">
              <ul className="list-disc pl-6 space-y-2 text-navy/80">
                <li>Create topical playlists around keyword clusters</li>
                <li>Optimize playlist titles and descriptions with keywords</li>
                <li>Order videos logically to encourage continuous viewing</li>
                <li>Feature your best-performing playlists on your channel page</li>
                <li>Link between videos in the same playlist within end screens</li>
              </ul>
            </div>
            
            <h2 id="analytics" className="text-3xl font-bold text-navy mb-6">Using YouTube Analytics for SEO</h2>
            <p className="text-navy/80 mb-6">
              YouTube Studio analytics provide valuable insights for optimizing your SEO strategy:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Audience Retention Reports</h4>
                <p className="text-navy/80 text-sm">
                  Identify where viewers drop off and optimize those sections in future videos. Look for patterns across multiple videos.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Traffic Sources</h4>
                <p className="text-navy/80 text-sm">
                  Understand which search terms are driving viewers to your content, and double down on those topics.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Impressions and CTR</h4>
                <p className="text-navy/80 text-sm">
                  Low impressions indicate SEO issues; low CTR with high impressions suggests thumbnail/title problems.
                </p>
              </div>
              
              <div className="bg-navy/5 p-6 rounded-xl">
                <h4 className="font-bold text-navy mb-3">Audience Demographics</h4>
                <p className="text-navy/80 text-sm">
                  Tailor your content and SEO strategy to your actual audience, not just who you think they are.
                </p>
              </div>
            </div>
            
            <h2 id="tools" className="text-3xl font-bold text-navy mb-6">Essential YouTube SEO Tools</h2>
            <p className="text-navy/80 mb-6">
              These tools can significantly enhance your YouTube SEO efforts in 2025:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-navy mb-2">TubeBuddy</h4>
                <p className="text-sm text-navy/70 mb-2">
                  Browser extension with keyword research, competitor analysis, and A/B testing features.
                </p>
                <p className="text-teal text-sm">Paid with free tier</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-navy mb-2">vidIQ</h4>
                <p className="text-sm text-navy/70 mb-2">
                  Provides score analysis, keyword tracking, and performance monitoring tools.
                </p>
                <p className="text-teal text-sm">Paid with free tier</p>
              </div>
              
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-navy mb-2">SEO Audit Tool</h4>
                <p className="text-sm text-navy/70 mb-2">
                  Our <Link to="/" className="text-teal hover:underline">free SEO analyzer</Link> helps identify optimization opportunities across your content.
                </p>
                <p className="text-teal text-sm">Free</p>
              </div>
            </div>
            
            <h2 id="advanced-strategies" className="text-3xl font-bold text-navy mb-6">Advanced YouTube SEO Strategies for 2025</h2>
            <p className="text-navy/80 mb-6">
              Stay ahead of the competition with these cutting-edge techniques:
            </p>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Closed Captions and Transcripts</h3>
            <p className="text-navy/80 mb-8">
              YouTube can now better understand video content through speech recognition, but manually uploaded closed captions still provide SEO advantages:
            </p>
            
            <ul className="list-disc pl-6 mb-10 space-y-2 text-navy/80">
              <li>Improved accessibility expands your potential audience</li>
              <li>More accurate keyword recognition, especially for technical terms</li>
              <li>Higher retention rates for viewers in sound-sensitive environments</li>
              <li>Opportunity for multilingual captions to reach international audiences</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Search Engine Alignment</h3>
            <p className="text-navy/80 mb-6">
              Maximize visibility by ensuring your YouTube content can rank in Google search results:
            </p>
            
            <div className="bg-navy/5 p-6 rounded-xl mb-10">
              <ul className="list-disc pl-6 space-y-2 text-navy/80">
                <li>Target keywords that trigger video results in Google (how-to, reviews, tutorials)</li>
                <li>Create complementary blog content that embeds your YouTube videos</li>
                <li>Use schema markup on embedded videos in your website</li>
                <li>Create video timestamps that appear in Google search</li>
                <li>Optimize for featured snippets with clear, concise answers</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold text-navy mb-4">Cross-Platform Strategy</h3>
            <p className="text-navy/80 mb-6">
              Leverage other platforms to boost your YouTube SEO:
            </p>
            
            <ul className="list-disc pl-6 mb-10 space-y-2 text-navy/80">
              <li>Repurpose content for TikTok, Instagram Reels, and Facebook with YouTube links</li>
              <li>Share videos in relevant online communities (Reddit, Facebook Groups, Discord)</li>
              <li>Create Pinterest pins linking to your YouTube content</li>
              <li>Build backlinks to your YouTube videos from authoritative websites</li>
            </ul>
            
            <div className="bg-teal/10 p-6 rounded-xl mb-10">
              <h3 className="text-2xl font-bold text-navy mb-4">Final Key Takeaways</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <p className="text-navy/80">
                    Focus on satisfying viewer intent and providing exceptional value to align with YouTube's algorithm
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <p className="text-navy/80">
                    Conduct thorough keyword research focused on search volume, competition, and relevance
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <p className="text-navy/80">
                    Optimize titles, descriptions, and thumbnails for both algorithms and human viewers
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal mr-2 mt-1 flex-shrink-0" />
                  <p className="text-navy/80">
                    Use analytics to continuously refine your strategy based on real performance data
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-navy mb-6">Ready to Improve Your Video SEO?</h3>
              <p className="text-navy/80 mb-6">
                Put these strategies into practice and monitor your results. Remember that YouTube SEO is an ongoing process that requires consistent optimization and adaptation.
              </p>
              <p className="text-navy/80 mb-8">
                For more comprehensive SEO guidance, try our <Link to="/" className="text-teal hover:underline">free SEO analyzer tool</Link> to identify opportunities across all your digital content.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/blog/seo-strategy-2025">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    Read: SEO Strategies for 2025
                  </Button>
                </Link>
                
                <Link to="/blog/image-seo">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal/10">
                    Read: Image SEO Techniques
                  </Button>
                </Link>
                
                <Link to="/">
                  <Button className="bg-teal hover:bg-teal-dark text-white">
                    <Search className="w-4 h-4 mr-2" /> Try Our SEO Audit Tool
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Social Share Buttons */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h4 className="font-bold text-navy mb-4">Share this article:</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="border-gray-200 text-navy/70 hover:bg-navy/5">
                  <Share2 className="w-4 h-4 mr-2" /> Twitter
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200 text-navy/70 hover:bg-navy/5">
                  <Share2 className="w-4 h-4 mr-2" /> Facebook
                </Button>
                <Button variant="outline" size="sm" className="border-gray-200 text-navy/70 hover:bg-navy/5">
                  <Share2 className="w-4 h-4 mr-2" /> LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/blog/seo-strategy-2025" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    Advanced SEO Strategies for 2025
                  </h3>
                  <p className="text-navy/70 mb-4">
                    Discover cutting-edge SEO strategies that will dominate in 2025, including AI integration and user experience signals.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-teal font-medium group-hover:text-teal-light transition-colors">Read more →</span>
                </div>
              </div>
            </Link>
            
            <Link to="/blog/image-seo" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    Advanced Image SEO Techniques
                  </h3>
                  <p className="text-navy/70 mb-4">
                    Learn how to optimize images for better search visibility with these advanced techniques and best practices.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-teal font-medium group-hover:text-teal-light transition-colors">Read more →</span>
                </div>
              </div>
            </Link>
            
            <Link to="/services/seo" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                    Professional SEO Services
                  </h3>
                  <p className="text-navy/70 mb-4">
                    Drive organic traffic and improve search engine rankings with our comprehensive SEO solutions.
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-teal font-medium group-hover:text-teal-light transition-colors">Read more →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeSeo;
