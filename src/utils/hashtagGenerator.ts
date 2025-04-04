
import { generateOllamaResponse } from './ollamaApi';
import { toast } from 'sonner';

export interface HashtagGeneratorParams {
  topic: string;
  niche?: string;
  audience?: string;
  count?: number;
  platform: 'tiktok' | 'instagram' | 'youtube';
}

/**
 * Generate hashtags for social media platforms
 * @param params Generator parameters including topic, niche, audience and platform
 * @returns Array of hashtags
 */
export const generateHashtags = async (params: HashtagGeneratorParams): Promise<string[]> => {
  try {
    const { topic, niche, audience, count = 20, platform } = params;
    
    if (!topic) {
      throw new Error('Topic is required to generate hashtags');
    }
    
    const platformSpecific = {
      tiktok: 'TikTok videos often trend with viral hashtags and challenges. Include some trending hashtags if relevant.',
      instagram: 'Instagram allows up to 30 hashtags per post. Include some hashtags with moderate competition for best visibility.',
      youtube: 'YouTube hashtags appear above video titles. Include some search-friendly hashtags that match common queries.'
    };
    
    const prompt = `
      Generate ${count} ${platform} hashtags for content about "${topic}" 
      ${niche ? `in the ${niche} niche` : ''}
      ${audience ? `targeting a ${audience} audience` : ''}.
      
      ${platformSpecific[platform]}
      
      Include a mix of:
      - Popular hashtags with high engagement (for immediate visibility)
      - Medium-sized hashtags (for better chance of trending)
      - Niche-specific hashtags (for targeted reach)
      - A few trending hashtags if relevant
      
      Format the response as a simple list of hashtags, each starting with #, without numbering or additional text.
      Do not repeat hashtags and ensure they are all valid (no special characters except #).
    `;

    const systemPrompt = `You are a ${platform} growth specialist who excels at generating strategic hashtag combinations that maximize reach and engagement. Provide only the hashtags without any additional explanation or commentary.`;
    
    const response = await generateOllamaResponse(prompt, systemPrompt);
    
    // Parse the response to extract hashtags
    const extractedHashtags = response
      .split(/[\n\r\s,]+/)
      .map(tag => tag.trim())
      .filter(tag => tag.startsWith('#') && tag.length > 1)
      .map(tag => tag.replace(/[^a-zA-Z0-9#]/g, ''));
    
    if (extractedHashtags.length > 0) {
      return extractedHashtags;
    } else {
      // Fallback parsing if the AI didn't format correctly
      const fallbackParsing = response
        .match(/#[a-zA-Z0-9]+/g) || [];
        
      return fallbackParsing;
    }
  } catch (error) {
    console.error('Error generating hashtags:', error);
    toast.error(error instanceof Error ? error.message : 'Failed to generate hashtags');
    return [];
  }
};

export interface YoutubeDescriptionParams {
  title: string;
  content: string;
  keywords?: string;
  channelInfo?: string;
  type: 'video' | 'channel';
}

/**
 * Generate YouTube descriptions for videos or channels
 * @param params Generator parameters including title, content, and type
 * @returns Generated description text
 */
export const generateYoutubeDescription = async (params: YoutubeDescriptionParams): Promise<string> => {
  try {
    const { title, content, keywords, channelInfo, type } = params;
    
    if (!title) {
      throw new Error('Title is required to generate a description');
    }
    
    if (!content) {
      throw new Error('Content summary is required to generate a description');
    }
    
    const typeSpecific = {
      video: 'Create a detailed YouTube video description with timestamps if applicable. Include relevant keywords naturally.',
      channel: 'Create a compelling YouTube channel description that showcases the value proposition and encourages subscriptions.'
    };
    
    const prompt = `
      Generate an SEO-optimized YouTube ${type} description for "${title}".
      
      Content summary: ${content}
      ${keywords ? `Important keywords to include: ${keywords}` : ''}
      ${channelInfo ? `Channel information: ${channelInfo}` : ''}
      
      ${typeSpecific[type]}
      
      The description should:
      - Be approximately 2-3 paragraphs
      - Naturally incorporate relevant keywords for better search visibility
      - Include a clear call-to-action (subscribe, like, comment, etc.)
      ${type === 'video' ? '- Include timestamps if the content has distinct sections' : ''}
      ${type === 'video' ? '- Include relevant links or resources mentioned in the video' : ''}
      ${type === 'channel' ? '- Mention what viewers can expect from the channel (content type, posting schedule)' : ''}
      ${type === 'channel' ? '- Briefly introduce the channel owner/team' : ''}
      
      Format the response as a ready-to-use description, without any additional commentary.
    `;

    const systemPrompt = `You are a YouTube SEO specialist who creates engaging, keyword-rich descriptions that help videos and channels rank better in search results while encouraging viewer engagement.`;
    
    const response = await generateOllamaResponse(prompt, systemPrompt);
    return response;
  } catch (error) {
    console.error('Error generating YouTube description:', error);
    toast.error(error instanceof Error ? error.message : 'Failed to generate description');
    return '';
  }
};
