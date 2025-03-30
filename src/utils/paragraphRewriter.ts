
import { rewriteParagraphWithOllama } from './ollamaApi';

/**
 * Rewrites a paragraph with the specified tone
 * @param text The paragraph to rewrite
 * @param tone The tone to use for rewriting
 * @returns The rewritten paragraph
 */
export const rewriteParagraph = async (text: string, tone: string): Promise<string> => {
  try {
    console.log(`Rewriting paragraph with tone: ${tone}`);
    
    // Validate input
    if (!text || text.trim().length < 20) {
      throw new Error('Paragraph too short. Please provide at least 20 characters.');
    }
    
    // Use OLLAMA API to rewrite the paragraph
    const rewrittenText = await rewriteParagraphWithOllama(text, tone);
    
    return rewrittenText;
  } catch (error) {
    console.error('Error rewriting paragraph:', error);
    throw error;
  }
};
