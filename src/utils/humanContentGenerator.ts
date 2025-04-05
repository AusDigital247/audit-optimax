
import { generateOllamaResponse } from './ollamaApi';
import { toast } from 'sonner';

/**
 * Enhances content with more human-like qualities
 * @param toolName The name of the SEO tool
 * @param purpose Brief description of the tool's purpose
 * @returns A human-like content block
 */
export const generateHumanContent = async (toolName: string, purpose: string): Promise<string> => {
  try {
    const prompt = `Write a natural, conversational introduction for an SEO tool called "${toolName}". 
    The tool's purpose is: ${purpose}.
    
    Make the content sound like it was written by an experienced SEO professional with personal insights. 
    Include:
    - A hook that engages readers immediately
    - 1-2 personal anecdotes or examples from real-world SEO work
    - Varied sentence structures (mix of short and longer sentences)
    - Some informal, conversational phrases a real person would use
    - A question or two directed at the reader
    - References to common frustrations SEO professionals face
    
    The tone should be professional but warm and conversational. Approximately 250-300 words.
    
    DO NOT structure the response with headings or bullet points - write it as a natural flowing text.`;
    
    const systemPrompt = "You are an experienced SEO professional who has worked in the industry for 15+ years. Write in a conversational, authentic tone that demonstrates your expertise without being overly technical. Your writing should sound natural and human, not AI-generated.";
    
    console.log(`Generating human-like content for: ${toolName}`);
    
    const content = await generateOllamaResponse(prompt, systemPrompt);
    return content;
  } catch (error) {
    console.error('Error generating human content:', error);
    toast.error('Could not generate human content. Using default content instead.');
    
    // Fallback content if API fails
    return `
      Working with ${toolName} has been a game-changer for me over my 15 years in SEO. I remember when I first started optimizing websites back in 2008, we had to manually track everything - what a headache that was!

      Have you ever spent hours trying to figure out why your perfectly optimized page just isn't ranking? I certainly have. That's exactly why this tool exists - to save you from those frustrating late nights.

      In my experience working with clients across different industries, I've found that the most successful SEO strategies start with proper analysis. Sometimes it's the little things you overlook that make the biggest difference. Just last month, I was helping a client who couldn't understand why their traffic had dropped. Turns out, a simple technical issue that this tool would have caught immediately was the culprit.

      The SEO landscape is constantly changing - what worked yesterday might not work today. That's the challenging part of our job, isn't it? But having reliable tools makes adapting to those changes so much easier.

      Give this tool a try and see how it transforms your approach. I'd love to hear how it works out for you!
    `;
  }
};

/**
 * Generates human-like use cases for SEO tools
 * @param toolName The name of the SEO tool
 * @returns Array of use cases with titles and descriptions
 */
export const generateHumanUseCases = async (toolName: string): Promise<Array<{title: string, description: string}>> => {
  try {
    const prompt = `Generate 3 practical use cases for an SEO tool called "${toolName}". 
    For each use case, provide:
    - A concise, practical title (5-8 words)
    - A description that includes a mini-story or example of someone using the tool in this way (60-80 words each)
    
    Each use case should feel authentic, like it came from real-world experience. Include specific details, small challenges faced, and realistic outcomes.`;
    
    const systemPrompt = "You are an experienced SEO professional sharing real case studies from your consulting work. Your examples should be specific, believable, and include authentic details that make them sound like genuine use cases, not generic descriptions.";
    
    console.log(`Generating human-like use cases for: ${toolName}`);
    
    const content = await generateOllamaResponse(prompt, systemPrompt);
    
    // Parse the response and extract use cases
    // This is a simplified parsing - we need a more robust parsing if the AI response format varies
    const useCases = content
      .split(/Use Case \d+:/gi)
      .filter(text => text.trim().length > 0)
      .map(useCaseText => {
        const titleMatch = useCaseText.match(/^(.+?)(?:\n|$)/);
        const title = titleMatch ? titleMatch[1].trim() : "Practical Application";
        
        // Everything after the title is the description
        const description = useCaseText.replace(title, '').trim();
        
        return { title, description };
      });
    
    return useCases.length >= 3 ? useCases.slice(0, 3) : fallbackUseCases(toolName);
  } catch (error) {
    console.error('Error generating human use cases:', error);
    toast.error('Could not generate use cases. Using default use cases instead.');
    
    return fallbackUseCases(toolName);
  }
};

// Fallback use cases if API fails
const fallbackUseCases = (toolName: string): Array<{title: string, description: string}> => {
  return [
    {
      title: "Troubleshooting Traffic Drops",
      description: "When Sarah's e-commerce site suddenly lost 40% of its organic traffic, she was in panic mode. I walked her through using this tool to analyze her site, and we discovered a recent website update had broken several canonical tags. Within days of fixing these issues, her traffic began recovering. This scenario happens more often than you'd think."
    },
    {
      title: "Beating Tough Local Competitors",
      description: "Mark's law firm couldn't crack the top 10 results in his city despite great content. We used this tool to compare his site against competitors and found his site speed was significantly slower and mobile experience lacking. After implementing the specific recommendations, his site climbed to position 3 for his main keywords within two months."
    },
    {
      title: "Refreshing Outdated Content Strategy",
      description: "I worked with a travel blog that was losing ground in rankings. Using this tool, we identified 12 high-potential posts that needed updating. Rather than creating new content, we focused on enhancing these existing assets with current information and better keyword targeting. Traffic to these pages increased by 67% in just six weeks."
    }
  ];
};

/**
 * Generates personalized tips for using SEO tools effectively
 * @param toolName The name of the SEO tool
 * @returns Array of tips with titles and descriptions
 */
export const generatePersonalizedTips = async (toolName: string): Promise<Array<{title: string, description: string}>> => {
  try {
    const prompt = `Create 4 insider tips for getting the most out of the "${toolName}" tool. 
    For each tip:
    - Write a concise, action-oriented title (5-7 words)
    - Write a helpful explanation (50-60 words) that includes:
      * Personal language ("I recommend..." or "I've found that...")
      * A specific example of how you've applied this tip
      * The actual benefit you experienced
    
    Make these tips sound like they come from years of practical experience, not theoretical knowledge.`;
    
    const systemPrompt = "You are an SEO consultant who has been using this tool with clients for years. Share your authentic, experience-based tips that show your personal workflow and discoveries - the kind of advice you'd give to a colleague over coffee.";
    
    console.log(`Generating personalized tips for: ${toolName}`);
    
    const content = await generateOllamaResponse(prompt, systemPrompt);
    
    // Parse the response and extract tips
    const tips = content
      .split(/Tip \d+:/gi)
      .filter(text => text.trim().length > 0)
      .map(tipText => {
        const titleMatch = tipText.match(/^(.+?)(?:\n|$)/);
        const title = titleMatch ? titleMatch[1].trim() : "Pro Insight";
        
        // Everything after the title is the description
        const description = tipText.replace(title, '').trim();
        
        return { title, description };
      });
    
    return tips.length >= 4 ? tips.slice(0, 4) : fallbackTips(toolName);
  } catch (error) {
    console.error('Error generating personalized tips:', error);
    toast.error('Could not generate tips. Using default tips instead.');
    
    return fallbackTips(toolName);
  }
};

// Fallback tips if API fails
const fallbackTips = (toolName: string): Array<{title: string, description: string}> => {
  return [
    {
      title: "Run Competitor Analysis First",
      description: "I always start with analyzing my top 3 competitors before looking at my own site. This approach has saved me countless hours because I've learned that identifying their strengths first gives me a clear benchmark. Last month, this method helped me spot a featured snippet opportunity my client hadn't considered."
    },
    {
      title: "Focus On Mobile Results",
      description: "After years of SEO work, I've found that prioritizing mobile optimization yields the fastest results. When working with a retail client, I noticed their mobile scores were 30% lower than desktop. After fixing these issues specifically, their rankings improved within two weeks, while the desktop-focused changes took months."
    },
    {
      title: "Export Data For Deeper Insights",
      description: "I recommend always exporting your results to spreadsheets for trend analysis. In my experience with a SaaS client, we exported monthly data for a year and discovered seasonal patterns in their keyword performance that weren't obvious in the tool's dashboard. This insight completely changed their content calendar."
    },
    {
      title: "Test One Variable At A Time",
      description: "When implementing changes, I've learned to modify just one element per page. For instance, I once worked on a site where we methodically tested meta descriptions before touching the content. This controlled approach helped us determine that meta descriptions were driving a 15% CTR improvement by themselves."
    }
  ];
};

/**
 * Enriches meta descriptions with human-like language
 * @param toolName The name of the SEO tool
 * @param originalDescription Current meta description
 * @returns Enhanced meta description
 */
export const createHumanMetaDescription = async (
  toolName: string, 
  originalDescription: string
): Promise<string> => {
  try {
    const prompt = `Rewrite this meta description for an SEO tool called "${toolName}" to make it sound more human and compelling:
    
    Original: "${originalDescription}"
    
    Guidelines:
    - Keep it under 155 characters
    - Add a human element ("our team" or "we've designed")
    - Include a specific benefit
    - Use natural language patterns
    - Add a small personal touch or insight
    - Avoid generic marketing language`;
    
    const systemPrompt = "You are an experienced SEO copywriter who specializes in writing meta descriptions that sound authentic while still optimizing for clicks. Your descriptions should balance human warmth with clarity and persuasion.";
    
    console.log(`Enhancing meta description for: ${toolName}`);
    
    const enhancedDescription = await generateOllamaResponse(prompt, systemPrompt);
    
    // Ensure the description isn't too long
    if (enhancedDescription.length > 155) {
      return enhancedDescription.substring(0, 152) + "...";
    }
    
    return enhancedDescription;
  } catch (error) {
    console.error('Error enhancing meta description:', error);
    toast.error('Could not enhance meta description. Using original description instead.');
    
    // Return original if there's an error
    return originalDescription;
  }
};
