
// Point values for different SEO elements
export const seoPointValues = {
  // Title tag related points (increased importance)
  titleTag: 7,
  titleLength: 3,
  titleKeyword: 8,          // Increased from 4 to 8
  titleKeywordPosition: 3,
  
  // Meta description related points (increased importance)
  metaDescription: 5,
  metaDescriptionLength: 3,
  metaDescriptionKeyword: 6, // Increased from 3 to 6
  
  // Headings related points (increased importance for keyword presence)
  h1Tag: 5,
  singleH1: 2,
  h1Keyword: 7,              // Increased from 4 to 7
  headingStructure: 2,
  h2Tags: 3,
  h2Keyword: 5,              // Increased from 3 to 5
  h3Tags: 1,
  h3Keyword: 2,
  
  // Content related points (increased importance for keyword density)
  contentLength: 4,
  keywordDensityGood: 8,     // Increased from 4 to 8
  keywordDensityOk: 3,
  keywordInFirstParagraph: 5, // Increased from 3 to 5
  
  // URL related points
  urlKeyword: 5,             // Increased from 3 to 5
  urlLength: 1,
  urlReadable: 2,
  
  // Image related points
  imageAltTags: 2,
  imageAltKeyword: 3,
  imageDimensions: 1,
  imageLazyLoading: 2,
  imageOptimizedFormat: 2,
  
  // Technical SEO points
  https: 3,
  canonicalTag: 2,
  schemaMarkup: 4,
  robots: 2,
  xml: 2,
  
  // Mobile friendliness
  viewport: 3,
  responsiveDesign: 3,
  
  // Social media
  openGraphTags: 2,
  twitterCards: 2,
  
  // Performance indicators
  fastLoading: 3,
  minifiedResources: 2,
  resourceHints: 2,
  
  // Link structure
  internalLinks: 2,
  outboundLinks: 1,
  brokenLinks: 3
};

// Calculate SEO score based on weighted points with improved calculation
export const calculateSEOScore = (checks: Array<{status: string, points?: number}>) => {
  const totalPossiblePoints = checks
    .filter(check => check.status !== 'info')
    .reduce((total, check) => total + (check.points || 1), 0);
  
  const earnedPoints = checks.reduce((total, check) => {
    if (check.status === 'pass') return total + (check.points || 1);
    if (check.status === 'warning') return total + ((check.points || 1) * 0.3); // Reduced from 0.5 to 0.3
    return total;
  }, 0);
  
  // Apply a more aggressive curve to the final score calculation
  // This will make high scores harder to achieve and more reflective of actual SEO quality
  const rawScore = totalPossiblePoints > 0 ? (earnedPoints / totalPossiblePoints) * 100 : 0;
  
  // Apply a curve that makes it harder to get high scores
  // Sites with missing keywords in critical elements will see much lower scores
  const curvedScore = Math.round(rawScore * 0.9); // Apply a 10% overall reduction
  
  return {
    score: curvedScore,
    earnedPoints,
    totalPossiblePoints
  };
};
