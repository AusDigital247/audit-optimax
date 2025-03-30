
import { generateBlogIdeasWithOllama } from './ollamaApi';

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
    
    // Use OLLAMA API to generate blog ideas
    const ideas = await generateBlogIdeasWithOllama(topic, count);
    
    return ideas;
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    throw error;
  }
};
