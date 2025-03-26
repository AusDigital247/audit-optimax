
// Point values for different SEO elements
export const seoPointValues = {
  // Title tag related points (critical for relevance)
  titleTag: 7,
  titleLength: 3,
  titleKeyword: 15,          // Critical factor - exact keyword in title
  titleKeywordVariation: 8,  // Variation of keyword in title
  titleKeywordPosition: 3,
  
  // Meta description related points (critical for relevance)
  metaDescription: 5,
  metaDescriptionLength: 3,
  metaDescriptionKeyword: 12, // Critical factor - exact keyword in meta desc
  metaDescriptionVariation: 6, // Variation of keyword in meta desc
  
  // Headings related points (critical for relevance)
  h1Tag: 5,
  singleH1: 2,
  h1Keyword: 15,              // Critical factor - exact keyword in H1
  h1KeywordVariation: 7,      // Variation of keyword in H1
  headingStructure: 2,
  h2Tags: 3,
  h2Keyword: 8,               // Important - keyword in H2
  h2KeywordVariation: 4,      // Variation in H2
  h3Tags: 1,
  h3Keyword: 3,
  
  // Content related points (critical for relevance)
  contentLength: 4,
  keywordDensityHigh: 15,     // 1-3% density - optimal
  keywordDensityMedium: 8,    // 0.5-1% density - acceptable
  keywordDensityLow: 3,       // 0.1-0.5% density - minimal
  keywordDensityNone: 0,      // <0.1% density - not relevant
  keywordInFirstParagraph: 6, 
  
  // URL related points
  urlKeyword: 10,             // Critical factor - exact keyword in URL
  urlKeywordVariation: 5,     // Variation of keyword in URL
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

// Define relevance tiers
export const relevanceTiers = {
  NOT_RELEVANT: 'Not Relevant',
  SOMEWHAT_RELEVANT: 'Somewhat Relevant',
  HIGHLY_RELEVANT: 'Highly Relevant'
};

// Classify relevance based on key SEO factors
export const classifyRelevance = (checks: Array<{name: string, status: string, points?: number, message?: string}>) => {
  // Check if keyword is present in critical elements
  const titleCheck = checks.find(check => check.name === "Keyword in title");
  const titleHasKeyword = titleCheck && titleCheck.status === "pass";
  
  const metaDescCheck = checks.find(check => check.name === "Keyword in meta description");
  const metaHasKeyword = metaDescCheck && metaDescCheck.status === "pass";
  
  const h1Check = checks.find(check => check.name === "H1 tag includes target keyword");
  const h1HasKeyword = h1Check && h1Check.status === "pass";
  
  const densityCheck = checks.find(check => check.name === "Keyword density");
  const hasSufficientDensity = densityCheck && 
    (densityCheck.status === "pass" || 
    (densityCheck.message && densityCheck.message.includes("Good keyword density")));
  const hasMinimalDensity = densityCheck && 
    densityCheck.message && 
    !densityCheck.message.includes("not found") && 
    !densityCheck.message.includes("0.00%");
  
  const urlCheck = checks.find(check => check.name === "URL contains target keyword");
  const urlHasKeyword = urlCheck && urlCheck.status === "pass";

  // Count how many critical elements have the exact keyword
  const criticalElementsWithKeyword = [
    titleHasKeyword,
    metaHasKeyword,
    h1HasKeyword,
    hasSufficientDensity,
    urlHasKeyword
  ].filter(Boolean).length;

  // Determine relevance tier
  if (criticalElementsWithKeyword <= 1 && !hasSufficientDensity) {
    return relevanceTiers.NOT_RELEVANT;
  } else if (criticalElementsWithKeyword >= 4) {
    return relevanceTiers.HIGHLY_RELEVANT;
  } else {
    return relevanceTiers.SOMEWHAT_RELEVANT;
  }
};

// Calculate SEO score based on weighted points and relevance tier
export const calculateSEOScore = (checks: Array<{name: string, status: string, points?: number}>) => {
  const totalPossiblePoints = checks
    .filter(check => check.status !== 'info')
    .reduce((total, check) => total + (check.points || 1), 0);
  
  const earnedPoints = checks.reduce((total, check) => {
    if (check.status === 'pass') return total + (check.points || 1);
    if (check.status === 'warning') return total + ((check.points || 1) * 0.3); // Reduced value for warnings
    return total;
  }, 0);
  
  // Calculate raw score percentage
  const rawPercentage = totalPossiblePoints > 0 ? (earnedPoints / totalPossiblePoints) * 100 : 0;
  
  // Apply relevance-based scoring tiers
  const relevanceTier = classifyRelevance(checks as Array<{name: string, status: string, points?: number, message?: string}>);
  let finalScore = 0;
  
  switch (relevanceTier) {
    case relevanceTiers.NOT_RELEVANT:
      // Score range: 10-30
      finalScore = Math.min(30, Math.max(10, rawPercentage * 0.3));
      break;
      
    case relevanceTiers.SOMEWHAT_RELEVANT:
      // Score range: 35-65
      finalScore = Math.min(65, Math.max(35, rawPercentage * 0.65));
      break;
      
    case relevanceTiers.HIGHLY_RELEVANT:
      // Score range: 70-100
      finalScore = Math.min(100, Math.max(70, rawPercentage * 0.8 + 20));
      break;
  }
  
  return {
    score: Math.round(finalScore),
    earnedPoints,
    totalPossiblePoints,
    relevanceTier
  };
};
