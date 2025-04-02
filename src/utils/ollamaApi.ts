
import axios from 'axios';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

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
    console.log('Processing AI content request with prompt length:', prompt.length);
    
    try {
      // Important debugging to identify if the function is being called
      console.log('Calling anyscale-chat edge function with:', { 
        promptLength: prompt.length,
        systemPromptProvided: !!systemPrompt,
        type: 'content' 
      });
      
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('anyscale-chat', {
        body: { 
          prompt, 
          systemPrompt, 
          type: 'content' 
        }
      });

      if (error) {
        console.error('Edge function error:', error);
        toast.error('Error generating content. Using fallback content instead.');
        
        // Check for API key configuration issues
        if (error.message?.includes('API key not configured')) {
          return `Error: DeepSeek API key not configured. Please add the API key in the Supabase Edge Function secrets.`;
        }
        
        // Check for authentication errors
        if (error.message?.includes('authentication') || error.message?.includes('API key')) {
          return `Error: Authentication failed with DeepSeek API. Please check your API key.`;
        }
        
        // Fall back to mock response for other errors
        console.warn('Error calling edge function, using mock response');
        return generateMockResponse(prompt);
      }
      
      console.log('Received successful response from Edge Function:', {
        contentLength: data?.content?.length,
        modelUsed: data?.metadata?.model
      });
      
      return data.content;
    } catch (error: any) {
      console.error('Edge function invocation error:', error);
      toast.error('Failed to connect to AI service. Using fallback content instead.');
      
      // Network or timeout error
      console.warn('Network or timeout error detected, using mock response');
      return generateMockResponse(prompt);
    }
  } catch (error) {
    console.error('Error generating DeepSeek response:', error);
    toast.error('Unexpected error occurred. Using fallback content instead.');
    
    // Generate mock content as a fallback
    return generateMockResponse(prompt);
  }
};

/**
 * Rewrites a paragraph using DeepSeek API
 * @param text Original paragraph text
 * @param tone Desired tone for rewrite
 * @returns Rewritten paragraph
 */
export const rewriteParagraphWithOllama = async (text: string, tone: string): Promise<string> => {
  const prompt = `Rewrite the following paragraph in a ${tone} tone, maintaining its meaning but using different wording:\n\n"${text}"\n\nRewritten paragraph:`;
  const systemPrompt = "You are an expert content rewriter. Your task is to rewrite text while maintaining the original meaning but improving the quality, readability, and matching the requested tone.";
  
  try {
    console.log('Calling rewrite-paragraph function with text length:', text.length);
    
    // Call the Edge Function for paragraph rewriting
    const { data, error } = await supabase.functions.invoke('anyscale-chat', {
      body: { prompt, systemPrompt, type: 'rewrite-paragraph' }
    });

    if (error) {
      console.error('Error in paragraph rewriting:', error);
      toast.error('Error rewriting paragraph. Using fallback response instead.');
      return generateMockResponse(text, 'rewrite-paragraph');
    }
    
    console.log('Paragraph rewritten successfully, response length:', data?.content?.length);
    return data.content;
  } catch (error) {
    console.error('Error in paragraph rewriting:', error);
    toast.error('Failed to rewrite paragraph. Using fallback response instead.');
    return generateMockResponse(text, 'rewrite-paragraph');
  }
};

/**
 * Rewrites a sentence using DeepSeek API
 * @param text Original sentence text
 * @param tone Desired tone for rewrite
 * @returns Rewritten sentence
 */
export const rewriteSentenceWithOllama = async (text: string, tone: string): Promise<string> => {
  const prompt = `Rewrite the following sentence in a ${tone} tone, maintaining its meaning but using different wording:\n\n"${text}"\n\nRewritten sentence:`;
  const systemPrompt = "You are an expert sentence rewriter. Your task is to rewrite sentences while maintaining the original meaning but improving the quality, readability, and matching the requested tone.";
  
  try {
    console.log('Calling rewrite-sentence function with text length:', text.length);
    
    // Call the Edge Function for sentence rewriting
    const { data, error } = await supabase.functions.invoke('anyscale-chat', {
      body: { prompt, systemPrompt, type: 'rewrite-sentence' }
    });

    if (error) {
      console.error('Error in sentence rewriting:', error);
      toast.error('Error rewriting sentence. Using fallback response instead.');
      return generateMockResponse(text, 'rewrite-sentence');
    }
    
    console.log('Sentence rewritten successfully, response length:', data?.content?.length);
    return data.content;
  } catch (error) {
    console.error('Error in sentence rewriting:', error);
    toast.error('Failed to rewrite sentence. Using fallback response instead.');
    return generateMockResponse(text, 'rewrite-sentence');
  }
};

/**
 * Generates blog ideas using DeepSeek API
 * @param topic Blog topic
 * @param count Number of ideas to generate
 * @returns List of blog ideas
 */
export const generateBlogIdeasWithOllama = async (topic: string, count: number): Promise<string[]> => {
  const prompt = `Generate ${count} unique and engaging blog post ideas about "${topic}". For each idea, provide a compelling title.`;
  const systemPrompt = "You are a creative content strategist specializing in generating engaging blog post ideas that drive traffic and engagement.";
  
  try {
    console.log('Calling blog-ideas function with topic:', topic);
    
    // Call the Edge Function for blog idea generation
    const { data, error } = await supabase.functions.invoke('anyscale-chat', {
      body: { prompt, systemPrompt, type: 'blog-ideas' }
    });

    if (error) {
      console.error('Error generating blog ideas:', error);
      toast.error('Error generating blog ideas. Using sample ideas instead.');
      return generateMockBlogIdeas(topic, count);
    }
    
    console.log('Blog ideas generated successfully, response:', data?.content?.substring(0, 100) + '...');
    
    // Parse the response into a list of blog ideas
    const ideas = data.content
      .split(/\d+\./)
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    return ideas.length ? ideas : generateMockBlogIdeas(topic, count);
  } catch (error) {
    console.error('Error generating blog ideas:', error);
    toast.error('Failed to generate blog ideas. Using sample ideas instead.');
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
