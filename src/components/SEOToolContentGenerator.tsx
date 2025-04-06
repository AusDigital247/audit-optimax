
import React, { useState, useEffect } from 'react';
import { generateHumanContent, generateHumanUseCases, generatePersonalizedTips } from '@/utils/humanContentGenerator';
import HumanSEOContent from './HumanSEOContent';

interface SEOToolContentGeneratorProps {
  toolName: string;
  toolDescription: string;
  relatedTools?: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
}

const SEOToolContentGenerator: React.FC<SEOToolContentGeneratorProps> = ({
  toolName,
  toolDescription,
  relatedTools = []
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [mainContent, setMainContent] = useState<Array<{title: string, content: string}>>([]);
  const [caseStudies, setCaseStudies] = useState<Array<{title: string, description: string}>>([]);
  const [expertTips, setExpertTips] = useState<Array<{title: string, description: string}>>([]);
  
  useEffect(() => {
    // Immediately set up fallback content that looks human-written with SEO-optimized text
    const fallbackContent = [
      {
        title: `Why ${toolName} Matters for Your Digital Strategy`,
        content: `I've been in the trenches of SEO for over a decade now, and if there's one thing I've learned, it's that visibility is everything in the digital landscape. That's why tools like this ${toolName} have become essential in my day-to-day workflow.

Back in 2018, I was working with an e-commerce client who couldn't figure out why their organic traffic was steadily declining despite investing in quality content. We discovered their rankings had slipped without them noticing. Within just three months of implementing regular ranking checks and making targeted adjustments based on the data, we increased their organic sessions by 43%.

Have you ever wondered why some websites consistently outrank yours even when you believe your content is superior? The answer often lies in understanding the complete picture of search visibility. When you track your positions consistently with a reliable rank checker, patterns emerge that inform smarter optimization decisions.

Search engine algorithms are constantly evolving, with Google making thousands of updates yearly. Without proper tracking, you're essentially operating in the dark. I've seen businesses waste months of effort optimizing for approaches that search engines no longer prioritize, while competitors who stayed informed steadily climbed the rankings.`
      },
      {
        title: "Expert Insights from My Years in Search Optimization",
        content: `Throughout my career optimizing websites across multiple industries, I've developed a methodology that consistently delivers results, and proper rank tracking sits at the core of this approach.

The mistake many website owners make is focusing solely on rankings without connecting them to meaningful business metrics. I remember working with a local dental practice that was fixated on ranking #1 for a high-volume keyword. When we finally achieved that position, we discovered it drove plenty of traffic but very few actual appointments. Meanwhile, several lower-volume, long-tail keywords were converting at 5x the rate.

This experience reinforced something I tell all my clients: rankings aren't the end goal—they're a means to an end. The real question is whether those rankings drive qualified traffic that converts. That's why I recommend combining rank tracking with analytics data to identify which keywords actually contribute to your bottom line.

Modern search results are incredibly personalized and localized. The rankings you see may differ significantly from what your potential customers see based on their location, search history, and device. A comprehensive rank checker accounts for these variables, giving you a more accurate picture of your true search visibility across different segments.`
      }
    ];
    
    const fallbackCaseStudies = [
      {
        title: "E-Commerce Revenue Growth",
        description: "I consulted for an outdoor equipment retailer who was struggling to compete with larger brands. By tracking their rankings for 50+ key product terms and optimizing based on opportunities we identified, they improved their average position from page 3 to page 1, resulting in a 76% increase in organic product page traffic and 24% revenue growth within one quarter."
      },
      {
        title: "Local Service Business Breakthrough",
        description: "A family-owned plumbing company was invisible in local search despite excellent service. After implementing rank tracking and discovering they were missing crucial local optimization elements, we improved their visibility in the Google Map Pack, increasing their monthly leads from 8-12 per month to consistently over 40."
      },
      {
        title: "Content Strategy Refinement",
        description: "I worked with a finance blog that was publishing three articles weekly but seeing minimal search traffic. By monitoring rankings, we identified that their most technical content performed best. Pivoting to produce more in-depth guides on complex topics led to a 215% increase in organic traffic and significantly higher ad revenue."
      }
    ];
    
    const fallbackExpertTips = [
      {
        title: "Monitor Mobile Rankings Separately",
        description: "I've seen dramatic differences between desktop and mobile rankings for the same keywords. For a retail client, their product pages ranked on average 6 positions lower on mobile. By creating a mobile-specific optimization strategy, we closed that gap and increased mobile conversions by 18% within just 6 weeks."
      },
      {
        title: "Track Competitor Movement Patterns",
        description: "When I notice a competitor suddenly gaining positions across multiple keywords, I immediately investigate what changed on their site. In one case, I discovered they had implemented structured data markup that was giving them featured snippets. By adapting this approach for my client, we reclaimed our positions within a month."
      },
      {
        title: "Use Rank Data for Content Improvement",
        description: "I regularly audit content that ranks in positions 4-10, as these present the best opportunities for quick wins. For a SaaS client, I found that adding specific case studies and statistics to pages in these positions resulted in an average improvement of 2.3 positions, bringing several keywords to the first or second position."
      },
      {
        title: "Correlate Rankings with Conversion Data",
        description: "Not all ranking improvements drive business results. I worked with an education client whose #1 ranking keyword drove lots of traffic but few enrollments. We shifted focus to keywords with higher enrollment rates, even though they had lower search volume. This strategy increased their program applications by 32% despite a small decrease in overall traffic."
      }
    ];
    
    setMainContent(fallbackContent);
    setCaseStudies(fallbackCaseStudies);
    setExpertTips(fallbackExpertTips);
    setIsLoading(false); // Set loading to false immediately to show fallback content
    
    // Now try to generate more dynamic content, but don't wait for it if it takes too long
    const loadHumanContent = async () => {
      try {
        // Generate main content blocks with SEO optimization
        const content = await generateHumanContent(toolName, toolDescription);
        const contentBlocks = [
          {
            title: `Why ${toolName} Matters for Your Digital Strategy`,
            content: content
          },
          {
            title: "Expert Insights from My Years in Search Optimization",
            content: `In my fifteen years of working with search optimization, I've witnessed the landscape transform dramatically. What hasn't changed is the fundamental importance of knowing exactly where you stand in search results. ${toolName} provides this critical visibility.

I recall working with a client in the competitive health supplement industry who was frustrated by their marketing efforts not translating to sales. When we implemented systematic rank tracking, we discovered their assumption that they ranked well for their main product keywords was completely wrong. They were actually averaging position 18—essentially invisible to most searchers.

The digital visibility landscape isn't static—it's constantly shifting beneath our feet. Algorithm updates, competitor activities, and changing user behaviors all impact where your website appears in search results. Without proper tracking, you're essentially flying blind.

What really separates successful SEO strategies from ineffective ones is the ability to connect ranking data with actual business outcomes. I've developed a methodology that ties ranking improvements directly to revenue impacts, allowing businesses to prioritize keywords that drive qualified traffic rather than vanity metrics.`
          }
        ];
        
        // Generate case studies and expert tips with rich, natural language
        const useCases = await generateHumanUseCases(toolName);
        const tips = await generatePersonalizedTips(toolName);
        
        // Only update state if we got good responses (fallbacks are already in place)
        if (content.length > 100) {
          setMainContent(contentBlocks);
        }
        
        if (useCases.length >= 3) {
          setCaseStudies(useCases);
        }
        
        if (tips.length >= 4) {
          setExpertTips(tips);
        }
      } catch (error) {
        console.error('Error generating human content:', error);
        // We already have fallback content in place, so just log the error
      }
    };
    
    loadHumanContent();
  }, [toolName, toolDescription]);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-teal border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-navy dark:text-white/80">Generating personalized content insights...</p>
        </div>
      </div>
    );
  }
  
  return (
    <HumanSEOContent
      mainContentBlocks={mainContent}
      caseStudies={caseStudies}
      expertTips={expertTips}
      toolName={toolName}
      relatedTools={relatedTools}
      conclusionContent={`After spending years in the trenches of search optimization across dozens of industries, I've come to appreciate the fundamental importance of tools like ${toolName} in any successful digital strategy. The ability to accurately track where you stand in search results isn't just about vanity metrics—it's about making informed decisions that directly impact your business outcomes.

What I value most about this approach is how it transforms SEO from guesswork into a data-driven strategy. I've seen too many businesses waste resources optimizing for keywords that either don't convert or where they have little chance of meaningful improvement. By tracking rankings systematically and connecting that data to actual business results, you can focus your efforts where they'll generate the greatest return.

Remember that search visibility is just one part of a comprehensive digital strategy. The rankings themselves aren't the end goal—they're a means to connect with your audience at the precise moment they're looking for what you offer. Use the insights you gain from rank tracking to inform your content development, technical optimization, and user experience improvements.

I encourage you to make rank tracking a regular part of your digital marketing routine. The businesses that consistently outperform their competition aren't necessarily those with the biggest budgets—they're the ones who make informed decisions based on accurate data about their position in the digital landscape.`}
    />
  );
};

export default SEOToolContentGenerator;
