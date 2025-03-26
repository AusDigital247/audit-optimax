
import { analyzePageSEO } from './analyzePageSEO';
import { SEOCategory } from '@/components/SEOResults';

// Main function to analyze a URL for SEO issues
export const analyzeSEO = async (url: string, keyword?: string): Promise<{
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
}> => {
  try {
    console.log(`Analyzing SEO for ${url}${keyword ? ` with keyword "${keyword}"` : ''}`);
    
    // Normalize URL if missing protocol
    const normalizedUrl = url.startsWith('http') ? url : `https://${url}`;
    
    // Use our new comprehensive analyzer
    const result = await analyzePageSEO(normalizedUrl, keyword);
    
    return {
      score: result.score,
      categories: result.categories,
      contentFetched: result.contentFetched
    };
  } catch (error) {
    console.error('Error during SEO analysis:', error);
    
    // Return a basic error response
    return {
      score: 0,
      categories: [{
        title: 'Analysis Error',
        items: [{
          name: 'Failed to complete analysis',
          status: 'fail',
          message: `Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`,
          points: 0
        }]
      }],
      contentFetched: false
    };
  }
};
