
// Point values for different SEO elements
export const seoPointValues = {
  // Title tag related points
  titleTag: 5,
  titleLength: 2,
  titleKeyword: 4,
  titleKeywordPosition: 2,
  
  // Meta description related points
  metaDescription: 3,
  metaDescriptionLength: 2,
  metaDescriptionKeyword: 3,
  
  // Headings related points
  h1Tag: 3,
  singleH1: 2,
  h1Keyword: 4,
  headingStructure: 2,
  h2Tags: 2,
  h2Keyword: 3,
  h3Tags: 1,
  h3Keyword: 2,
  
  // Content related points
  contentLength: 4,
  keywordDensityGood: 4,
  keywordDensityOk: 2,
  keywordInFirstParagraph: 3,
  
  // URL related points
  urlKeyword: 3,
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

// Calculate SEO score based on weighted points
export const calculateSEOScore = (checks: Array<{status: string, points?: number}>) => {
  const totalPossiblePoints = checks
    .filter(check => check.status !== 'info')
    .reduce((total, check) => total + (check.points || 1), 0);
  
  const earnedPoints = checks.reduce((total, check) => {
    if (check.status === 'pass') return total + (check.points || 1);
    if (check.status === 'warning') return total + ((check.points || 1) * 0.5);
    return total;
  }, 0);
  
  return {
    score: totalPossiblePoints > 0 ? Math.round((earnedPoints / totalPossiblePoints) * 100) : 0,
    earnedPoints,
    totalPossiblePoints
  };
};
