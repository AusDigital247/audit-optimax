
import { analyzePageSEO } from './analyzePageSEO';
import { SEOCategory, SEOItem } from '@/components/SEOResults';

// Define and export the analysis result interface
export interface AnalysisResult {
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
  relevanceTier?: string;
  metaData?: {
    title?: string;
    description?: string;
    canonical?: string;
    ogTags?: Record<string, string>;
  };
}

// Main function to analyze a URL for SEO issues
export const analyzeSEO = async (url: string, keyword?: string): Promise<AnalysisResult> => {
  try {
    console.log(`Analyzing SEO for ${url}${keyword ? ` with keyword "${keyword}"` : ''}`);
    
    // Normalize URL but preserve the exact path - critical for analyzing specific pages
    let normalizedUrl = url.trim();
    if (!normalizedUrl.startsWith('http')) {
      normalizedUrl = `https://${normalizedUrl}`;
    }
    
    // Remove www. if present to ensure canonical consistency
    normalizedUrl = normalizedUrl.replace(/^(https?:\/\/)www\./i, '$1');
    
    console.log(`Using normalized URL with preserved path: ${normalizedUrl}`);
    
    // Force a unique cache-busting parameter to prevent cached responses
    const urlWithCacheBuster = `${normalizedUrl}${normalizedUrl.includes('?') ? '&' : '?'}_seoAnalyzerCache=${Date.now()}`;
    console.log(`Using cache-busting URL: ${urlWithCacheBuster}`);
    
    // Use our analyzer with the preserved URL path and cache buster
    const result = await analyzePageSEO(urlWithCacheBuster, keyword);
    
    // Ensure the items have the required 'points' property for SEOItem
    const categories: SEOCategory[] = result.categories.map(category => ({
      title: category.title,
      items: category.items.map(item => ({
        ...item,
        points: item.points ?? 0 // Ensure points property exists, default to 0 if not present
      })) as SEOItem[]
    }));
    
    // Create the result, ensuring we include metadata if available
    return {
      score: result.score,
      categories,
      contentFetched: result.contentFetched,
      relevanceTier: result.relevanceTier,
      // We need to check if the result has metaData before trying to use it
      ...(result.metaData ? { metaData: result.metaData } : {})
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
