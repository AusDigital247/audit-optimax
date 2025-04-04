
import { rewriteSentenceWithOllama } from './ollamaApi';

/**
 * Rewrites a sentence with the specified tone
 * @param text The sentence to rewrite
 * @param tone The tone to use for rewriting
 * @returns The rewritten sentence
 */
export const rewriteSentence = async (text: string, tone: string): Promise<string> => {
  try {
    console.log(`Rewriting sentence with tone: ${tone}`);
    
    // Validate input
    if (!text || text.trim().length < 10) {
      throw new Error('Sentence too short. Please provide at least 10 characters.');
    }
    
    // Use OLLAMA API to rewrite the sentence
    const rewrittenText = await rewriteSentenceWithOllama(text, tone);
    
    return rewrittenText;
  } catch (error) {
    console.error('Error rewriting sentence:', error);
    throw error;
  }
};
