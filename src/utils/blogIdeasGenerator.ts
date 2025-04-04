
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface BlogIdeaGeneratorFormValues {
  topic: string;
  targetAudience?: string;
  industry?: string;
  keywordFocus?: string;
  contentFormat?: string;
}

export interface BlogIdeaItem {
  title: string;
  description: string;
  keyPoints: string[];
  targetKeywords: string[];
  searchIntents: string[];
}

export interface BlogIdeasResponse {
  success: boolean;
  message?: string;
  data?: {
    ideas: BlogIdeaItem[];
    seoTips: string[];
    contentStrategy: string;
  };
}

// Generate mock response as a fallback
const generateMockResponse = (topic: string): BlogIdeasResponse => {
  console.log('Generating mock blog ideas for:', topic);
  
  return {
    success: true,
    data: {
      ideas: [
        {
          title: `10 Essential ${topic} Strategies for Beginners`,
          description: `A comprehensive guide to help beginners understand and implement effective ${topic} strategies.`,
          keyPoints: [
            `Understanding the basics of ${topic}`,
            `Common mistakes to avoid`,
            `Step-by-step implementation guide`,
            `Tools and resources for beginners`
          ],
          targetKeywords: [`${topic} for beginners`, `${topic} strategies`, `${topic} guide`],
          searchIntents: ['informational', 'educational']
        },
        {
          title: `How to Improve Your ${topic} Results in 30 Days`,
          description: `Actionable tips and techniques to see measurable results in your ${topic} efforts within a month.`,
          keyPoints: [
            `Quick wins for immediate improvements`,
            `Setting measurable goals`,
            `Weekly action plan`,
            `Tracking and measuring results`
          ],
          targetKeywords: [`improve ${topic}`, `${topic} results`, `${topic} in 30 days`],
          searchIntents: ['how-to', 'problem-solving']
        },
        {
          title: `The Ultimate ${topic} Checklist for 2025`,
          description: `A comprehensive checklist to ensure you're covering all aspects of ${topic} in your strategy.`,
          keyPoints: [
            `Current best practices`,
            `New trends for 2025`,
            `Step-by-step implementation`,
            `Performance metrics to track`
          ],
          targetKeywords: [`${topic} checklist`, `${topic} best practices`, `${topic} 2025`],
          searchIntents: ['informational', 'current']
        },
        {
          title: `5 Common ${topic} Myths Debunked`,
          description: `Addressing and correcting common misconceptions about ${topic} to help readers make better decisions.`,
          keyPoints: [
            `Origins of common myths`,
            `Data-backed truth`,
            `Real-world examples`,
            `Better alternatives to common practices`
          ],
          targetKeywords: [`${topic} myths`, `${topic} facts`, `${topic} misconceptions`],
          searchIntents: ['informational', 'myth-busting']
        },
        {
          title: `Case Study: How We Improved ${topic} by 200%`,
          description: `A detailed case study showing how a specific approach led to significant improvements in ${topic} performance.`,
          keyPoints: [
            `Initial situation and challenges`,
            `Strategy development process`,
            `Implementation details`,
            `Results and lessons learned`
          ],
          targetKeywords: [`${topic} case study`, `${topic} improvement`, `${topic} success story`],
          searchIntents: ['case study', 'proof']
        }
      ],
      seoTips: [
        `Focus on long-tail keywords related to "${topic}" for less competition`,
        `Include both informational and commercial intent keywords`,
        `Target featured snippet opportunities with well-structured content`,
        `Build internal links between your ${topic} content pieces`,
        `Create comprehensive content that answers all user questions about ${topic}`
      ],
      contentStrategy: `For "${topic}" content, consider creating a pillar page that covers the topic broadly, then link to more specific articles that target long-tail keywords. Focus on answering common questions and solving specific problems for your audience. Update your content regularly to maintain relevance and search rankings.`
    }
  };
};

// Helper function to transform API response into a structured format
const transformApiResponse = (content: string): BlogIdeasResponse => {
  try {
    // First, try to parse if the response is already in JSON format
    try {
      const parsedJson = JSON.parse(content);
      if (parsedJson.ideas && Array.isArray(parsedJson.ideas)) {
        return {
          success: true,
          data: parsedJson
        };
      }
    } catch (e) {
      // Not valid JSON, continue with text parsing
    }
    
    // Parse the text response into structured format
    const ideasMatch = content.match(/###\s*Ideas\s*###([\s\S]*?)(?=###|$)/i);
    const seoTipsMatch = content.match(/###\s*SEO Tips\s*###([\s\S]*?)(?=###|$)/i);
    const strategyMatch = content.match(/###\s*Content Strategy\s*###([\s\S]*?)(?=###|$)/i);
    
    const ideas: BlogIdeaItem[] = [];
    
    if (ideasMatch && ideasMatch[1]) {
      const ideasText = ideasMatch[1].trim();
      const ideaBlocks = ideasText.split(/\d+\.\s/).filter(block => block.trim().length > 0);
      
      for (let i = 0; i < Math.min(ideaBlocks.length, 5); i++) {
        const block = ideaBlocks[i].trim();
        
        const titleMatch = block.match(/^(.+?)(?:\n|$)/);
        const descriptionMatch = block.match(/Description:\s*(.+?)(?:\n|$)/i);
        
        const keyPointsMatch = block.match(/Key Points:([\s\S]*?)(?=Target Keywords:|Search Intents:|$)/i);
        const keywordsMatch = block.match(/Target Keywords:([\s\S]*?)(?=Key Points:|Search Intents:|$)/i);
        const intentsMatch = block.match(/Search Intents:([\s\S]*?)(?=Key Points:|Target Keywords:|$)/i);
        
        const title = titleMatch ? titleMatch[1].trim() : `Idea ${i+1}`;
        const description = descriptionMatch ? descriptionMatch[1].trim() : "";
        
        const keyPoints = keyPointsMatch 
          ? keyPointsMatch[1].split(/[-•*]/).map(p => p.trim()).filter(p => p.length > 0)
          : [];
          
        const targetKeywords = keywordsMatch
          ? keywordsMatch[1].split(/[,;]/).map(k => k.trim()).filter(k => k.length > 0)
          : [];
          
        const searchIntents = intentsMatch
          ? intentsMatch[1].split(/[,;]/).map(i => i.trim()).filter(i => i.length > 0)
          : [];
        
        ideas.push({
          title,
          description,
          keyPoints,
          targetKeywords,
          searchIntents
        });
      }
    }
    
    // Limit to exactly 5 ideas
    const finalIdeas = ideas.slice(0, 5);
    
    // If we couldn't parse the ideas properly, return a mock response
    if (finalIdeas.length === 0) {
      return generateMockResponse("the topic");
    }
    
    const seoTips = seoTipsMatch 
      ? seoTipsMatch[1].split(/\d+\.|\n[-•*]/).map(tip => tip.trim()).filter(tip => tip.length > 0)
      : [];
      
    const contentStrategy = strategyMatch ? strategyMatch[1].trim() : "";
    
    return {
      success: true,
      data: {
        ideas: finalIdeas,
        seoTips,
        contentStrategy
      }
    };
  } catch (error) {
    console.error('Error parsing API response:', error);
    return generateMockResponse("the topic");
  }
};

// Main function to generate blog ideas
export const generateBlogIdeas = async (values: BlogIdeaGeneratorFormValues): Promise<BlogIdeasResponse> => {
  try {
    console.log('Generating blog ideas with values:', values);
    
    // Validate input
    if (!values.topic || values.topic.trim().length < 3) {
      return {
        success: false,
        message: 'Topic too short. Please provide at least 3 characters.'
      };
    }
    
    // Create a detailed prompt that guides the AI to produce exactly what we need
    const systemPrompt = `You are an expert SEO content strategist specialized in generating blog ideas. 
    For each blog idea, provide a compelling title, brief description, 3-5 key points to cover, 
    2-4 target keywords, and relevant search intents. Format your response with clear section headings.
    Always provide EXACTLY 5 blog ideas, no more, no less. After the ideas, include a section with 
    5 SEO optimization tips and a brief content strategy recommendation.`;
    
    const prompt = `Generate 5 blog ideas about "${values.topic}"
    ${values.targetAudience ? `for ${values.targetAudience}` : ''}
    ${values.industry ? `in the ${values.industry} industry` : ''}
    ${values.keywordFocus ? `with a focus on keywords related to ${values.keywordFocus}` : ''}
    ${values.contentFormat ? `in the format of ${values.contentFormat}` : ''}.
    
    Format your response with these sections:
    
    ### Ideas ###
    For each idea (exactly 5), include:
    1. Title
    Description: Brief explanation of the article
    Key Points: 3-5 bullet points of what to cover
    Target Keywords: 2-4 keywords to target
    Search Intents: The search intent(s) this content addresses
    
    ### SEO Tips ###
    List 5 SEO optimization tips specific to this topic
    
    ### Content Strategy ###
    A brief paragraph on how to approach this topic for maximum SEO impact`;
    
    // Call the edge function to generate ideas
    console.log('Calling anyscale-chat edge function with topic:', values.topic);
    
    const { data, error } = await supabase.functions.invoke('anyscale-chat', {
      body: { 
        prompt, 
        systemPrompt, 
        type: 'blog-ideas' 
      }
    });

    if (error) {
      console.error('Edge function error:', error);
      toast.error('Error generating blog ideas. Using sample ideas instead.');
      return generateMockResponse(values.topic);
    }
    
    console.log('Blog ideas generated successfully, response length:', data?.content?.length);
    
    // Transform the response into our structured format
    return transformApiResponse(data.content);
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    toast.error('Failed to generate blog ideas. Using sample ideas instead.');
    return generateMockResponse(values.topic);
  }
};
