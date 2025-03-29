
import { KeywordResult } from "@/components/KeywordResults";

// Function to generate keywords with or without API
export const generateKeywords = async (
  seedKeyword: string,
  industry?: string,
  keywordType: string = 'all'
): Promise<{
  success: boolean;
  data: KeywordResult[];
  message?: string;
}> => {
  try {
    // Try to use Google's API if available
    // This is where you would implement API calls when you have the API key
    
    // For now, use fallback data
    const fallbackKeywords = getFallbackKeywords(seedKeyword, industry, keywordType);
    
    return {
      success: true,
      data: fallbackKeywords,
    };
  } catch (error) {
    console.error("Error generating keywords:", error);
    
    // Return fallback data on API failure
    const fallbackKeywords = getFallbackKeywords(seedKeyword, industry, keywordType);
    
    return {
      success: true,
      data: fallbackKeywords,
      message: "Using estimated data. For more accurate results, connect a keyword API.",
    };
  }
};

// Function to get fallback keywords when API fails
const getFallbackKeywords = (
  seedKeyword: string,
  industry?: string,
  keywordType: string = 'all'
): KeywordResult[] => {
  const cleanKeyword = seedKeyword.toLowerCase().trim();
  let keywordResults: KeywordResult[] = [];
  
  // Generate some basic fallback keywords
  keywordResults = [...generateBasicKeywords(cleanKeyword, industry)];
  
  // Filter by keyword type if specified
  if (keywordType !== 'all') {
    keywordResults = keywordResults.filter(result => result.type === keywordType);
  }
  
  // If no results after filtering, generate some for that specific type
  if (keywordResults.length === 0) {
    keywordResults = generateSpecificTypeKeywords(cleanKeyword, keywordType);
  }
  
  // Add some randomness to the metrics
  keywordResults = keywordResults.map(keyword => ({
    ...keyword,
    searchVolume: keyword.searchVolume || Math.floor(Math.random() * 10000),
    difficulty: keyword.difficulty || Math.floor(Math.random() * 100),
    cpc: keyword.cpc || Number((Math.random() * 10).toFixed(2)),
  }));
  
  return keywordResults;
};

// Generate basic keywords based on patterns
const generateBasicKeywords = (
  keyword: string,
  industry?: string
): KeywordResult[] => {
  // Some predefined keyword patterns
  const longTailPrefixes = ['best', 'top', 'affordable', 'cheap', 'luxury', 'professional', 'local'];
  const questionPrefixes = ['how to', 'what is', 'why', 'when to', 'where to find', 'who offers'];
  const buyerSuffixes = ['services', 'agency', 'company', 'cost', 'pricing', 'near me', 'reviews'];
  const commercialPrefixes = ['buy', 'hire', 'get', 'purchase', 'find'];
  const informationalSuffixes = ['guide', 'tutorial', 'tips', 'strategies', 'examples', 'ideas'];
  
  let results: KeywordResult[] = [];
  
  // Long-tail keywords
  longTailPrefixes.forEach(prefix => {
    results.push({
      keyword: `${prefix} ${keyword}`,
      type: 'long-tail',
      searchVolume: Math.floor(Math.random() * 5000),
      difficulty: Math.floor(Math.random() * 60),
    });
    
    if (industry) {
      results.push({
        keyword: `${prefix} ${keyword} for ${industry}`,
        type: 'long-tail',
        searchVolume: Math.floor(Math.random() * 2000),
        difficulty: Math.floor(Math.random() * 50),
      });
    }
  });
  
  // Question keywords
  questionPrefixes.forEach(prefix => {
    results.push({
      keyword: `${prefix} ${keyword}`,
      type: 'question',
      searchVolume: Math.floor(Math.random() * 4000),
      difficulty: Math.floor(Math.random() * 40),
    });
    
    if (industry) {
      results.push({
        keyword: `${prefix} ${keyword} in ${industry}`,
        type: 'question',
        searchVolume: Math.floor(Math.random() * 2000),
        difficulty: Math.floor(Math.random() * 30),
      });
    }
  });
  
  // Buyer intent keywords
  buyerSuffixes.forEach(suffix => {
    results.push({
      keyword: `${keyword} ${suffix}`,
      type: 'buyer-intent',
      searchVolume: Math.floor(Math.random() * 8000),
      difficulty: Math.floor(Math.random() * 80),
      cpc: Number((Math.random() * 15).toFixed(2)),
    });
  });
  
  // Commercial keywords
  commercialPrefixes.forEach(prefix => {
    results.push({
      keyword: `${prefix} ${keyword}`,
      type: 'commercial',
      searchVolume: Math.floor(Math.random() * 7000),
      difficulty: Math.floor(Math.random() * 70),
      cpc: Number((Math.random() * 20).toFixed(2)),
    });
  });
  
  // Informational keywords
  informationalSuffixes.forEach(suffix => {
    results.push({
      keyword: `${keyword} ${suffix}`,
      type: 'informational',
      searchVolume: Math.floor(Math.random() * 6000),
      difficulty: Math.floor(Math.random() * 45),
    });
  });
  
  // Specific industry keywords if industry is provided
  if (industry) {
    results.push(
      {
        keyword: `${keyword} for ${industry}`,
        type: 'long-tail',
        searchVolume: Math.floor(Math.random() * 3000),
        difficulty: Math.floor(Math.random() * 55),
      },
      {
        keyword: `${industry} ${keyword} solutions`,
        type: 'commercial',
        searchVolume: Math.floor(Math.random() * 2500),
        difficulty: Math.floor(Math.random() * 65),
        cpc: Number((Math.random() * 12).toFixed(2)),
      },
      {
        keyword: `best ${keyword} for ${industry} businesses`,
        type: 'buyer-intent',
        searchVolume: Math.floor(Math.random() * 1800),
        difficulty: Math.floor(Math.random() * 60),
        cpc: Number((Math.random() * 18).toFixed(2)),
      }
    );
  }
  
  // Create location-based keywords
  ['Toronto', 'Vancouver', 'Calgary', 'Montreal', 'Ottawa'].forEach(location => {
    results.push({
      keyword: `${keyword} ${location}`,
      type: 'long-tail',
      searchVolume: Math.floor(Math.random() * 2000),
      difficulty: Math.floor(Math.random() * 60),
      cpc: Number((Math.random() * 8).toFixed(2)),
    });
  });
  
  // Add some hardcoded SEO-related keywords if the seed keyword is SEO-related
  if (keyword.includes('seo') || keyword.includes('search engine')) {
    results.push(
      {
        keyword: 'google ranking factors',
        type: 'informational',
        searchVolume: 8100,
        difficulty: 68,
        cpc: 5.42,
      },
      {
        keyword: 'how to improve website ranking',
        type: 'question',
        searchVolume: 6200,
        difficulty: 52,
        cpc: 4.18,
      },
      {
        keyword: 'seo audit services',
        type: 'commercial',
        searchVolume: 4800,
        difficulty: 76,
        cpc: 12.35,
      }
    );
  }
  
  return results.slice(0, 50); // Limit the number of results
};

// Generate keywords for a specific type
const generateSpecificTypeKeywords = (
  keyword: string,
  type: string
): KeywordResult[] => {
  const results: KeywordResult[] = [];
  
  switch (type) {
    case 'long-tail':
      ['best', 'top', 'affordable', 'premium', 'professional', 'local', 'custom', 'specialized', 'beginner-friendly', 'advanced'].forEach(prefix => {
        results.push({
          keyword: `${prefix} ${keyword}`,
          type: 'long-tail',
        });
      });
      
      ['services', 'solutions', 'techniques', 'approaches', 'methods', 'tools', 'resources', 'platforms', 'software', 'agencies'].forEach(suffix => {
        results.push({
          keyword: `${keyword} ${suffix}`,
          type: 'long-tail',
        });
      });
      break;
      
    case 'question':
      ['how to', 'what is', 'why', 'when', 'where', 'who', 'how can', 'how does', 'should I', 'can you'].forEach(prefix => {
        results.push({
          keyword: `${prefix} ${keyword}`,
          type: 'question',
        });
      });
      break;
      
    case 'buyer-intent':
      ['buy', 'hire', 'get', 'find', 'compare', 'best', 'top', 'cheap', 'affordable', 'premium'].forEach(prefix => {
        results.push({
          keyword: `${prefix} ${keyword}`,
          type: 'buyer-intent',
        });
      });
      
      ['services', 'company', 'agency', 'consultant', 'professional', 'expert', 'provider', 'specialist', 'near me', 'in Canada'].forEach(suffix => {
        results.push({
          keyword: `${keyword} ${suffix}`,
          type: 'buyer-intent',
        });
      });
      break;
      
    case 'informational':
      ['guide to', 'how to', 'understanding', 'learn', 'basics of', 'introduction to', 'what is', 'types of', 'benefits of', 'importance of'].forEach(prefix => {
        results.push({
          keyword: `${prefix} ${keyword}`,
          type: 'informational',
        });
      });
      
      ['guide', 'tutorial', 'tips', 'strategies', 'examples', 'ideas', 'methods', 'principles', 'fundamentals', 'concepts'].forEach(suffix => {
        results.push({
          keyword: `${keyword} ${suffix}`,
          type: 'informational',
        });
      });
      break;
      
    case 'commercial':
      ['buy', 'purchase', 'get', 'order', 'shop for', 'find', 'subscribe to', 'download', 'register for', 'sign up for'].forEach(prefix => {
        results.push({
          keyword: `${prefix} ${keyword}`,
          type: 'commercial',
        });
      });
      
      ['services', 'products', 'solutions', 'packages', 'plans', 'subscriptions', 'deals', 'offers', 'pricing', 'cost'].forEach(suffix => {
        results.push({
          keyword: `${keyword} ${suffix}`,
          type: 'commercial',
        });
      });
      break;
      
    default:
      results.push({
        keyword: `${keyword} guide`,
        type: 'informational',
      });
  }
  
  return results.slice(0, 25); // Limit the number of results
};
