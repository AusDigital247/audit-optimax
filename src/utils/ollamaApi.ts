
import axios from 'axios';

// Anyscale API configuration
const ANYSCALE_API_URL = 'https://api.endpoints.anyscale.com/v1/chat/completions';
const MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

// Hardcoded API key - Note: This approach is not recommended for production applications
// as it exposes your API key in the client-side code
const ANYSCALE_API_KEY = 'aph0_CkcwRQIhAI777tQ6BeGm85RmDSjQ_k_TmKHcQO7nelI5nY3zEv83AiAlEHv7MhxnArzlLgG1uUAqunnmJLrOGg1NRDgROaXsmBJjEiC6sb38cpYDGI399Rv9l8KTFeHTsj383DnZdzVPku4ncBgBIh51c3JfY2w3eDQ3Ymw2Y3RmZHA3enc3NjI3bXV1eG46DAi954GfEhDo5dGdAUIMCJGpob8GEOjl0Z0B8gEA';

// Mock response generator for fallback when API is unavailable
const generateMockResponse = (prompt: string, type: string = 'content'): string => {
  console.log('Generating mock response for:', prompt);
  
  if (type === 'blog-ideas') {
    return `Here are some blog ideas about the topic:
1. The Essential Guide to Getting Started
2. 10 Best Practices for Beginners
3. How to Advance Your Skills in This Area
4. Common Mistakes to Avoid When Starting Out
5. Future Trends You Should Know About`;
  }
  
  if (type === 'rewrite-sentence') {
    return `Here is your sentence rewritten in the requested tone: ${prompt}`;
  }
  
  if (type === 'rewrite-paragraph') {
    return `Here is your paragraph rewritten in the requested tone: ${prompt}`;
  }
  
  // Default content response
  return `# Sample Generated Content About "${prompt}"

## Introduction
This is auto-generated sample content to demonstrate what the real content would look like.

## Main Points
- Key point 1 about the topic
- Key point 2 with more details
- Key point 3 with examples

## Conclusion
This is just a sample. The actual API would generate much more detailed and relevant content.

Meta Description: This is a sample meta description about the topic.

Tags: sample, content, mockup, demonstration, example`;
};

export const generateOllamaResponse = async (prompt: string, systemPrompt?: string): Promise<string> => {
  try {
    console.log('Processing AI content request with prompt:', prompt);
    
    // Use the hardcoded API key directly
    if (!ANYSCALE_API_KEY) {
      console.warn('No Anyscale API key available.');
      return generateMockResponse(prompt);
    }
    
    try {
      const response = await axios.post(
        ANYSCALE_API_URL, 
        {
          model: MODEL,
          messages: [
            {
              role: "system",
              content: systemPrompt || "You are a helpful assistant that generates high-quality blog content and writing assistance."
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.7,
          max_tokens: 2000,
        }, 
        {
          headers: {
            'Authorization': `Bearer ${ANYSCALE_API_KEY}`,
            'Content-Type': 'application/json'
          },
          timeout: 30000, // 30 second timeout
        }
      );
      
      console.log('Received response from Anyscale API');
      return response.data.choices[0].message.content;
    } catch (axiosError: any) {
      console.error('Axios error details:', {
        message: axiosError.message,
        code: axiosError.code,
        response: axiosError.response?.data || 'No response data',
        status: axiosError.response?.status || 'No status code'
      });
      
      // Check if we have a response with error details
      if (axiosError.response?.data?.error) {
        console.warn('API error received, using mock response instead');
        return generateMockResponse(prompt);
      }
      
      // Network or timeout error - use mock response instead of error message
      console.warn('Network error detected, using mock response');
      return generateMockResponse(prompt);
    }
  } catch (error) {
    console.error('Error generating Anyscale response:', error);
    
    // Generate mock content as a fallback
    return generateMockResponse(prompt);
  }
};

/**
 * Rewrites a paragraph using Anyscale API
 * @param text Original paragraph text
 * @param tone Desired tone for rewrite
 * @returns Rewritten paragraph
 */
export const rewriteParagraphWithOllama = async (text: string, tone: string): Promise<string> => {
  const prompt = `Rewrite the following paragraph in a ${tone} tone, maintaining its meaning but using different wording:\n\n"${text}"\n\nRewritten paragraph:`;
  const systemPrompt = "You are an expert content rewriter. Your task is to rewrite text while maintaining the original meaning but improving the quality, readability, and matching the requested tone.";
  
  try {
    return await generateOllamaResponse(prompt, systemPrompt);
  } catch (error) {
    console.error('Error in paragraph rewriting:', error);
    return generateMockResponse(text, 'rewrite-paragraph');
  }
};

/**
 * Rewrites a sentence using Anyscale API
 * @param text Original sentence text
 * @param tone Desired tone for rewrite
 * @returns Rewritten sentence
 */
export const rewriteSentenceWithOllama = async (text: string, tone: string): Promise<string> => {
  const prompt = `Rewrite the following sentence in a ${tone} tone, maintaining its meaning but using different wording:\n\n"${text}"\n\nRewritten sentence:`;
  const systemPrompt = "You are an expert sentence rewriter. Your task is to rewrite sentences while maintaining the original meaning but improving the quality, readability, and matching the requested tone.";
  
  try {
    return await generateOllamaResponse(prompt, systemPrompt);
  } catch (error) {
    console.error('Error in sentence rewriting:', error);
    return generateMockResponse(text, 'rewrite-sentence');
  }
};

/**
 * Generates blog ideas using Anyscale API
 * @param topic Blog topic
 * @param count Number of ideas to generate
 * @returns List of blog ideas
 */
export const generateBlogIdeasWithOllama = async (topic: string, count: number): Promise<string[]> => {
  const prompt = `Generate ${count} unique and engaging blog post ideas about "${topic}". For each idea, provide a compelling title.`;
  const systemPrompt = "You are a creative content strategist specializing in generating engaging blog post ideas that drive traffic and engagement.";
  
  try {
    const response = await generateOllamaResponse(prompt, systemPrompt);
    
    // Parse the response into a list of blog ideas
    const ideas = response
      .split(/\d+\./)
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    return ideas.length ? ideas : generateMockBlogIdeas(topic, count);
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    return generateMockBlogIdeas(topic, count);
  }
};

// Helper function to generate mock blog ideas
const generateMockBlogIdeas = (topic: string, count: number): string[] => {
  const baseIdeas = [
    `The Ultimate Guide to ${topic}`,
    `10 Tips for Mastering ${topic}`,
    `How to Get Started with ${topic}`,
    `Common Mistakes to Avoid in ${topic}`,
    `The Future of ${topic}: Trends and Predictions`,
    `${topic} 101: A Beginner's Guide`,
    `Advanced Strategies for ${topic}`,
    `The History and Evolution of ${topic}`,
    `${topic} vs. Traditional Methods: Which is Better?`,
    `How to Save Time and Money with ${topic}`
  ];
  
  // Return the requested number of ideas
  return baseIdeas.slice(0, count);
};
