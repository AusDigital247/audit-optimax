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

export interface GrammarCheckerParams {
  text: string;
  includeExplanations?: boolean;
}

/**
 * Check and correct grammar, spelling, and punctuation in text
 * @param params Text to check and whether to include explanations
 * @returns Object containing corrected text and explanations if requested
 */
export const checkGrammar = async (params: GrammarCheckerParams): Promise<{ correctedText: string; explanations: string[] }> => {
  try {
    const { text, includeExplanations = true } = params;
    
    if (!text.trim()) {
      throw new Error('Text is required for grammar checking');
    }
    
    const prompt = `
      Check the following text for grammar, spelling, and punctuation errors. Provide the corrected text.
      ${includeExplanations ? 'Also provide detailed explanations of each correction made.' : ''}

      Text to check:
      "${text}"

      ${includeExplanations ? 
        'Format the response as: 1. Corrected text in a single paragraph or with appropriate paragraph breaks. 2. List of explanations with bullet points.' : 
        'Return only the corrected text, maintaining the original paragraph structure.'
      }
    `;

    const systemPrompt = "You are an expert editor and proofreader. Your task is to identify and correct grammar, spelling, punctuation, and syntax errors in the text. Maintain the author's voice and style while making the text correct and clear.";
    
    const response = await generateOllamaResponse(prompt, systemPrompt);
    
    let correctedText = '';
    let explanations: string[] = [];
    
    if (includeExplanations) {
      // Parse the response to separate corrected text and explanations
      const sections = response.split(/\n\n|Explanations:|Corrections:|Explanation:|Correction:/i);
      if (sections.length >= 2) {
        correctedText = sections[0].trim();
        
        // Extract explanations list
        const explanationText = sections.slice(1).join('\n');
        explanations = explanationText
          .split(/\n[-•*]\s+|\n\d+\.\s+/)
          .filter(item => item.trim().length > 0);
      } else {
        // Fallback if the format doesn't match expectations
        correctedText = response;
      }
    } else {
      correctedText = response;
    }
    
    return { correctedText, explanations };
  } catch (error) {
    console.error('Error checking grammar:', error);
    toast.error(error instanceof Error ? error.message : 'Failed to check grammar');
    return { correctedText: '', explanations: [] };
  }
};

export interface InstagramBioParams {
  name: string;
  niche: string;
  interests?: string;
  achievements?: string;
  style: 'professional' | 'creative' | 'minimalist';
}

/**
 * Generate Instagram bio based on user inputs
 * @param params Generator parameters including name, niche, interests and style
 * @returns Generated Instagram bio
 */
export const generateInstagramBio = async (params: InstagramBioParams): Promise<string> => {
  try {
    const { name, niche, interests, achievements, style } = params;
    
    if (!name) {
      throw new Error('Name is required to generate an Instagram bio');
    }
    
    if (!niche) {
      throw new Error('Niche is required to generate an Instagram bio');
    }
    
    const styleSpecific = {
      professional: 'Create a professional and polished bio with industry-specific terminology.',
      creative: 'Create a unique, attention-grabbing bio with personality and creative flair.',
      minimalist: 'Create a concise, clean bio using minimal text for maximum impact.'
    };
    
    const prompt = `
      Generate an Instagram bio for ${name} who is in the ${niche} niche.
      ${interests ? `Their interests include: ${interests}` : ''}
      ${achievements ? `Their achievements include: ${achievements}` : ''}
      
      ${styleSpecific[style]}
      
      The bio should:
      - Be within 150 characters (Instagram limit)
      - Include 2-3 relevant emojis used strategically
      - Convey personality and unique value proposition
      - Be engaging and memorable
      
      Format the response as a ready-to-use bio without any additional commentary.
    `;

    const systemPrompt = `You are an Instagram branding expert who creates compelling, concise bios that capture attention and express personality within the platform's character limits.`;
    
    const response = await generateOllamaResponse(prompt, systemPrompt);
    return response.trim();
  } catch (error) {
    console.error('Error generating Instagram bio:', error);
    toast.error(error instanceof Error ? error.message : 'Failed to generate bio');
    return '';
  }
};

export interface AnchorLinkGeneratorParams {
  urls: string[];
}

/**
 * Generate HTML anchor tags from a list of URLs
 * @param params Object containing array of URLs
 * @returns Array of HTML anchor tags with appropriate anchor text
 */
export const generateAnchorLinks = (params: AnchorLinkGeneratorParams): { html: string; url: string; anchorText: string }[] => {
  const { urls } = params;
  
  if (!urls || urls.length === 0) {
    return [];
  }
  
  return urls.map(url => {
    try {
      // Remove protocol and www if present
      let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '');
      
      // Extract the path without domain
      let path = '';
      if (domain.includes('/')) {
        const parts = domain.split('/');
        domain = parts[0];
        path = parts.slice(1).join('/');
      }
      
      // Generate anchor text from the path or domain
      let anchorText = '';
      
      if (path) {
        // Convert hyphenated path to space-separated words and capitalize
        anchorText = path.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        
        // Remove trailing slashes, file extensions, etc.
        anchorText = anchorText.replace(/\.(html|php|asp|jsp)$/, '');
        anchorText = anchorText.replace(/\/$/, '');
      } else {
        // Use domain name without TLD if no path
        anchorText = domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1);
      }
      
      // Generate HTML with the anchor text
      const html = `<a href="${url}" target="_blank" rel="noopener noreferrer">${anchorText}</a>`;
      
      return { html, url, anchorText };
    } catch (error) {
      console.error(`Error processing URL ${url}:`, error);
      return { 
        html: `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`, 
        url, 
        anchorText: url 
      };
    }
  });
};
