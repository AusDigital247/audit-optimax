
// Meta description manager for different pages
type PageType = 'home' | 'seo-toronto' | 'seo-ottawa' | 'seo-kitchener' | 'seo-london' | 'seo-vancouver' | 'seo-buffalo' | 'blog' | 'blog-post';

// Custom meta descriptions for each page
const metaDescriptions: Record<PageType, string> = {
  'home': 
    'Free SEO audit tool to analyze your website and get actionable recommendations to improve your search rankings.',
  'seo-toronto': 
    'Expert SEO services in Toronto to boost your local business visibility. Get a free SEO audit and customized strategy for Toronto market.',
  'seo-ottawa': 
    'Ottawa SEO services designed to help local businesses improve online visibility. Get tailored SEO strategies for the Ottawa market.',
  'seo-kitchener': 
    'Specialized SEO services for Kitchener-Waterloo businesses. Get local SEO strategies that drive traffic and conversions in the KW region.',
  'seo-london': 
    'London Ontario SEO services for local businesses. Our strategies help you gain visibility in London\'s competitive digital marketplace.',
  'seo-vancouver': 
    'Vancouver SEO services to help your business stand out in the competitive local market. Get specialized strategies for the Vancouver area.',
  'seo-buffalo': 
    'Buffalo NY SEO services tailored for local businesses. Get customized search optimization strategies for the Buffalo market.',
  'blog': 
    'SEO insights, tips, and best practices to help improve your website ranking and digital marketing strategy.',
  'blog-post': 
    'In-depth SEO guide with actionable tips and strategies to improve your website\'s performance in search engines.'
};

/**
 * Get meta description for a specific page
 * @param pageType The type of page
 * @returns The meta description for the specified page
 */
export const getMetaDescription = (pageType: PageType): string => {
  return metaDescriptions[pageType] || metaDescriptions.home;
};

export default metaDescriptions;
