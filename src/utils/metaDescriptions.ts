
// Meta description manager for different pages
type PageType = 
  'home' | 
  'seo-toronto' | 
  'seo-ottawa' | 
  'seo-kitchener' | 
  'seo-london' | 
  'seo-vancouver' | 
  'seo-buffalo' | 
  'blog' | 
  'blog-post' |
  'grammar-checker' |
  'paragraph-rewriter' |
  'sentence-rewriter' |
  'paraphrasing-tool' |
  'bulk-anchor-link' |
  'keyword-generator' |
  'blog-ideas' |
  'rank-checker' |
  'tiktok-username' |
  'tiktok-hashtag' |
  'youtube-name' |
  'youtube-description' |
  'instagram-name' |
  'instagram-bio' |
  'instagram-hashtag';

interface MetaContent {
  title: string;
  description: string;
}

// Custom meta descriptions and titles for each page
const metaDescriptions: Record<PageType, MetaContent> = {
  'home': {
    title: 'SEO Audit Tool | Website SEO Checker',
    description: 'Free SEO audit tool to analyze your website and get actionable recommendations to improve your search rankings.'
  },
  'seo-toronto': {
    title: 'Toronto SEO Services | Local Search Optimization',
    description: 'Expert SEO services in Toronto to boost your local business visibility. Get a free SEO audit and customized strategy for Toronto market.'
  },
  'seo-ottawa': {
    title: 'Ottawa SEO Services | Local Search Marketing',
    description: 'Ottawa SEO services designed to help local businesses improve online visibility. Get tailored SEO strategies for the Ottawa market.'
  },
  'seo-kitchener': {
    title: 'Kitchener SEO Services | Local Search Ranking',
    description: 'Specialized SEO services for Kitchener-Waterloo businesses. Get local SEO strategies that drive traffic and conversions in the KW region.'
  },
  'seo-london': {
    title: 'London Ontario SEO Services | Local Search Marketing',
    description: 'London Ontario SEO services for local businesses. Our strategies help you gain visibility in London\'s competitive digital marketplace.'
  },
  'seo-vancouver': {
    title: 'Vancouver SEO Services | Local Search Rankings',
    description: 'Vancouver SEO services to help your business stand out in the competitive local market. Get specialized strategies for the Vancouver area.'
  },
  'seo-buffalo': {
    title: 'Buffalo NY SEO Services | Local Search Marketing',
    description: 'Buffalo NY SEO services tailored for local businesses. Get customized search optimization strategies for the Buffalo market.'
  },
  'blog': {
    title: 'SEO Blog | Search Engine Optimization Insights',
    description: 'SEO insights, tips, and best practices to help improve your website ranking and digital marketing strategy.'
  },
  'blog-post': {
    title: 'SEO Guide | Search Engine Optimization Tips',
    description: 'In-depth SEO guide with actionable tips and strategies to improve your website\'s performance in search engines.'
  },
  'grammar-checker': {
    title: 'Free Grammar Checker | Fix Grammar, Spelling and Punctuation',
    description: 'Professional grammar checker tool to fix spelling, punctuation, and syntax errors in your content. Improve your writing with instant corrections.'
  },
  'paragraph-rewriter': {
    title: 'AI Paragraph Rewriter Tool | Rewrite Content',
    description: 'Transform any paragraph into human-like, engaging content with our free AI paragraph rewriter tool. Improve readability and enhance your writing.'
  },
  'sentence-rewriter': {
    title: 'Sentence Rewriter | Improve Your Writing',
    description: 'Rewrite sentences for better clarity, impact, and engagement with our free sentence rewriting tool. Enhance your content one sentence at a time.'
  },
  'paraphrasing-tool': {
    title: 'Free Paraphrasing Tool | Rephrase Content',
    description: 'Rephrase your content while maintaining original meaning with our advanced paraphrasing tool. Create unique, plagiarism-free content easily.'
  },
  'bulk-anchor-link': {
    title: 'Bulk Anchor Link Generator | HTML Link Builder',
    description: 'Generate multiple HTML anchor links quickly with our free bulk anchor link generator. Streamline your link building process for better SEO.'
  },
  'keyword-generator': {
    title: 'Keyword Generator Tool | Find SEO Keywords',
    description: 'Discover profitable keywords for your SEO strategy with our free keyword generator tool. Get keyword ideas to improve your search rankings.'
  },
  'blog-ideas': {
    title: 'Blog Ideas Generator | Content Inspiration Tool',
    description: 'Generate creative blog post ideas instantly with our free blog ideas tool. Never run out of content inspiration for your website or social media.'
  },
  'rank-checker': {
    title: 'Google Rank Checker | Search Position Tracker',
    description: 'Monitor your website\'s position in Google search results with our free rank checker tool. Track keywords across different regions.'
  },
  'tiktok-username': {
    title: 'TikTok Username Generator | Create Unique Handles',
    description: 'Generate catchy, available TikTok usernames with our free username creator tool. Stand out with a unique handle for your TikTok account.'
  },
  'tiktok-hashtag': {
    title: 'TikTok Hashtag Generator | Trending Tags',
    description: 'Find trending TikTok hashtags to increase your content reach and engagement with our free hashtag generator tool.'
  },
  'youtube-name': {
    title: 'YouTube Channel Name Generator | Creative Names',
    description: 'Create unique, catchy YouTube channel names with our free generator tool. Stand out and attract more subscribers with the perfect channel name.'
  },
  'youtube-description': {
    title: 'YouTube Description Generator | Channel & Video Descriptions',
    description: 'Create optimized YouTube channel and video descriptions with our free generator tool. Improve your SEO and attract more viewers.'
  },
  'instagram-name': {
    title: 'Instagram Name Generator | Create Unique Handles',
    description: 'Generate catchy Instagram usernames and handles with our free Instagram name generator tool. Find available, creative names for your profile.'
  },
  'instagram-bio': {
    title: 'Instagram Bio Generator | Create Engaging Profiles',
    description: 'Create engaging Instagram bios that attract followers with our free bio generator tool. Stand out with a compelling profile description.'
  },
  'instagram-hashtag': {
    title: 'Instagram Hashtag Generator | Popular Tags',
    description: 'Find trending Instagram hashtags to increase your post reach and engagement with our free hashtag generator tool.'
  }
};

/**
 * Get meta content for a specific page
 * @param pageType The type of page
 * @returns The meta title and description for the specified page
 */
export const getMetaContent = (pageType: PageType): MetaContent => {
  return metaDescriptions[pageType] || metaDescriptions.home;
};

export default metaDescriptions;
