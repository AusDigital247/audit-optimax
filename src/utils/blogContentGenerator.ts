
import { generateBlogIdeasWithOllama, generateOllamaResponse } from './ollamaApi';

/**
 * Generates blog ideas based on the provided parameters
 * @param topic The topic to generate ideas for
 * @param count The number of ideas to generate
 * @returns An array of generated blog ideas
 */
export const generateBlogIdeas = async (topic: string, count: number = 5): Promise<string[]> => {
  try {
    console.log(`Generating ${count} blog ideas for topic: ${topic}`);
    
    // Validate input
    if (!topic || topic.trim().length < 3) {
      throw new Error('Topic too short. Please provide at least 3 characters.');
    }
    
    // Use Anyscale API to generate blog ideas
    const ideas = await generateBlogIdeasWithOllama(topic, count);
    
    return ideas;
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    throw error;
  }
};

/**
 * Interface representing the form values for blog content generation
 */
export interface BlogGeneratorFormValues {
  topic: string;
  contentType: string;
  tone: string;
  wordCount: string; // String to match form values
  keywords?: string;
  additionalNotes?: string;
  targetAudience?: string;
  generateIdeasOnly?: boolean;
}

/**
 * Interface representing the response from blog content generation
 */
export interface BlogContentResponse {
  success: boolean;
  message?: string;
  data?: {
    title: string;
    content: string;
    outline: string[];
    metaDescription: string;
    suggestedTags: string[];
  };
}

/**
 * Generates complete blog content based on the provided parameters
 * @param values The blog generator form values
 * @returns A response containing the generated blog content
 */
export const generateBlogContent = async (values: BlogGeneratorFormValues): Promise<BlogContentResponse> => {
  try {
    console.log('Generating blog content with values:', values);
    
    // Validate input
    if (!values.topic || values.topic.trim().length < 3) {
      return {
        success: false,
        message: 'Topic too short. Please provide at least 3 characters.'
      };
    }
    
    // Create a prompt that includes all the user's requirements
    const prompt = `Create a ${values.contentType} about "${values.topic}" in a ${values.tone} tone. 
    Target word count: ${values.wordCount}. 
    Keywords to include: ${values.keywords || 'none specified'}.
    Target audience: ${values.targetAudience || 'general audience'}.
    Additional requirements: ${values.additionalNotes || 'none'}.
    
    Format your response with the following structure:
    1. A catchy and SEO-friendly title
    2. A meta description (150-160 characters) for SEO
    3. An outline with clear headings (H2, H3)
    4. Well-structured content following the outline
    5. 5-7 relevant tags for categorization
    
    Make sure the content is engaging, factually correct, and optimized for both readers and search engines.`;
    
    // Use Anyscale API to generate blog content
    const response = await generateOllamaResponse(prompt);
    
    // Extract components from the response
    const title = extractTitle(response);
    const metaDescription = extractMetaDescription(response);
    const outline = extractOutline(response);
    const suggestedTags = extractTags(response);
    
    // Return the formatted response
    return {
      success: true,
      data: {
        title,
        content: response,
        outline,
        metaDescription,
        suggestedTags
      }
    };
  } catch (error) {
    console.error('Error generating blog content:', error);
    return {
      success: false,
      message: 'Failed to generate content. Please try again.'
    };
  }
};

// Helper function to extract title from the generated content
const extractTitle = (content: string): string => {
  // Look for heading patterns
  const titleMatch = content.match(/^#\s+(.+)$|^(.+)\n={3,}|^(.+)\n-{3,}/m);
  if (titleMatch) {
    return (titleMatch[1] || titleMatch[2] || titleMatch[3]).trim();
  }
  
  // Fallback: use the first line if it doesn't start with #
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith('#')) {
      return trimmedLine;
    }
  }
  
  return 'Generated Article';
};

// Helper functions for parsing the generated content
const extractMetaDescription = (content: string): string => {
  const metaMatch = content.match(/meta\s*description[:\s]+(.*?)(\n\n|\n#)/i);
  if (metaMatch) return metaMatch[1].trim();
  
  // Match patterns like "Meta description: ..." or just "Description: ..."
  const descMatch = content.match(/(?:meta\s*)?description[:\s]+(.*?)(?:\n\n|\n#|$)/i);
  if (descMatch) return descMatch[1].trim();
  
  // Fallback: use the first paragraph if no meta description is found
  const paragraphs = content.split('\n\n');
  for (const paragraph of paragraphs) {
    if (paragraph && !paragraph.startsWith('#') && paragraph.length > 50) {
      return paragraph.slice(0, 160).trim();
    }
  }
  return '';
};

const extractOutline = (content: string): string[] => {
  const lines = content.split('\n');
  const headings = lines
    .filter(line => line.match(/^#{2,4}\s/))
    .map(line => line.replace(/^#{2,4}\s/, '').trim());
  
  return headings.length > 0 ? headings : ['Introduction', 'Main Content', 'Conclusion'];
};

const extractTags = (content: string): string[] => {
  // Try to find tags or keywords section
  const tagsMatch = content.match(/(?:tags|keywords)[:\s]+(.*?)(?:\n\n|\n#|$)/i);
  if (tagsMatch) {
    return tagsMatch[1]
      .split(/[,;]/)
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }
  
  // Fallback: extract potential keywords from the content
  const words = content
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 4);
  
  const wordFrequency: Record<string, number> = {};
  words.forEach(word => {
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  });
  
  return Object.entries(wordFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);
};
