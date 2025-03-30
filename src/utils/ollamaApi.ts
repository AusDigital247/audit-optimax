
import axios from 'axios';

// Anyscale API configuration
const ANYSCALE_API_URL = 'https://api.endpoints.anyscale.com/v1/chat/completions';
const MODEL = 'mistralai/Mixtral-8x7B-Instruct-v0.1';

interface AnyscaleResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }[];
}

/**
 * Get the Anyscale API key from localStorage or environment variables
 * @returns The API key or null if not found
 */
const getApiKey = (): string | null => {
  // Check localStorage first (user-provided key)
  const storedKey = localStorage.getItem('anyscaleApiKey');
  if (storedKey) {
    return storedKey;
  }
  
  // Check environment variables as fallback (useful for development)
  if (process.env.ANYSCALE_API_KEY) {
    return process.env.ANYSCALE_API_KEY;
  }
  
  return null;
};

/**
 * Function to generate AI response using Anyscale API
 * @param prompt The prompt to send to the model
 * @returns The generated text response
 */
export const generateOllamaResponse = async (prompt: string): Promise<string> => {
  try {
    console.log('Sending request to Anyscale API with prompt:', prompt);
    
    // Get the API key
    const apiKey = getApiKey();
    
    if (!apiKey) {
      console.warn('No Anyscale API key found. Please add your API key in the settings.');
      return `To generate content, please provide your Anyscale API key. Go to Settings and enter your API key in the provided field.`;
    }
    
    const response = await axios.post<AnyscaleResponse>(ANYSCALE_API_URL, {
      model: MODEL,
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates high-quality blog content and writing assistance."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Received response from Anyscale API');
    
    if (response.data.choices && response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('No content in response');
    }
  } catch (error) {
    console.error('Error generating Anyscale response:', error);
    
    // Check if the error is due to an invalid API key
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      return "Invalid API key. Please check your Anyscale API key and try again.";
    }
    
    // Provide a graceful fallback for errors
    return "I'm sorry, I couldn't generate a response at this time. Please try again later or check your API key.";
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
  return generateOllamaResponse(prompt);
};

/**
 * Rewrites a sentence using Anyscale API
 * @param text Original sentence text
 * @param tone Desired tone for rewrite
 * @returns Rewritten sentence
 */
export const rewriteSentenceWithOllama = async (text: string, tone: string): Promise<string> => {
  const prompt = `Rewrite the following sentence in a ${tone} tone, maintaining its meaning but using different wording:\n\n"${text}"\n\nRewritten sentence:`;
  return generateOllamaResponse(prompt);
};

/**
 * Generates blog ideas using Anyscale API
 * @param topic Blog topic
 * @param count Number of ideas to generate
 * @returns List of blog ideas
 */
export const generateBlogIdeasWithOllama = async (topic: string, count: number): Promise<string[]> => {
  const prompt = `Generate ${count} unique and engaging blog post ideas about "${topic}". For each idea, provide a compelling title. Format your response as a numbered list (1., 2., etc).`;
  const response = await generateOllamaResponse(prompt);
  
  // Parse the response into a list of blog ideas
  const ideas = response
    .split(/\d+\./)
    .map(item => item.trim())
    .filter(item => item.length > 0);
  
  return ideas.length ? ideas : [`${count} Blog Ideas About ${topic}`];
};
