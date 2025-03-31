
// Meta description manager for different pages
type PageType = 'home' | 'seo-toronto' | 'seo-ottawa' | 'seo-kitchener' | 'seo-london' | 'seo-vancouver' | 'seo-buffalo' | 'blog' | 'blog-post';

interface MetaDescriptionData {
  en: string;
  fr: string;
}

// Custom meta descriptions for each page
const metaDescriptions: Record<PageType, MetaDescriptionData> = {
  'home': {
    en: 'Free SEO audit tool to analyze your website and get actionable recommendations to improve your search rankings.',
    fr: 'Outil d\'audit SEO gratuit pour analyser votre site Web et obtenir des recommandations pratiques pour améliorer votre classement dans les moteurs de recherche.'
  },
  'seo-toronto': {
    en: 'Expert SEO services in Toronto to boost your local business visibility. Get a free SEO audit and customized strategy for Toronto market.',
    fr: 'Services SEO professionnels à Toronto pour augmenter la visibilité de votre entreprise locale. Obtenez un audit SEO gratuit et une stratégie personnalisée pour le marché de Toronto.'
  },
  'seo-ottawa': {
    en: 'Ottawa SEO services designed to help local businesses improve online visibility. Get tailored SEO strategies for the Ottawa market.',
    fr: 'Services SEO à Ottawa conçus pour aider les entreprises locales à améliorer leur visibilité en ligne. Obtenez des stratégies SEO adaptées au marché d\'Ottawa.'
  },
  'seo-kitchener': {
    en: 'Specialized SEO services for Kitchener-Waterloo businesses. Get local SEO strategies that drive traffic and conversions in the KW region.',
    fr: 'Services SEO spécialisés pour les entreprises de Kitchener-Waterloo. Obtenez des stratégies SEO locales qui génèrent du trafic et des conversions dans la région KW.'
  },
  'seo-london': {
    en: 'London Ontario SEO services for local businesses. Our strategies help you gain visibility in London\'s competitive digital marketplace.',
    fr: 'Services SEO pour London Ontario adaptés aux entreprises locales. Nos stratégies vous aident à gagner en visibilité sur le marché numérique concurrentiel de London.'
  },
  'seo-vancouver': {
    en: 'Vancouver SEO services to help your business stand out in the competitive local market. Get specialized strategies for the Vancouver area.',
    fr: 'Services SEO Vancouver pour aider votre entreprise à se démarquer sur le marché local compétitif. Obtenez des stratégies spécialisées pour la région de Vancouver.'
  },
  'seo-buffalo': {
    en: 'Buffalo NY SEO services tailored for local businesses. Get customized search optimization strategies for the Buffalo market.',
    fr: 'Services SEO pour Buffalo NY adaptés aux entreprises locales. Obtenez des stratégies d\'optimisation de recherche personnalisées pour le marché de Buffalo.'
  },
  'blog': {
    en: 'SEO insights, tips, and best practices to help improve your website ranking and digital marketing strategy.',
    fr: 'Conseils SEO, astuces et meilleures pratiques pour améliorer le classement de votre site Web et votre stratégie de marketing digital.'
  },
  'blog-post': {
    en: 'In-depth SEO guide with actionable tips and strategies to improve your website\'s performance in search engines.',
    fr: 'Guide SEO approfondi avec des conseils et des stratégies applicables pour améliorer les performances de votre site Web dans les moteurs de recherche.'
  }
};

/**
 * Get meta description for a specific page
 * @param pageType The type of page
 * @param language The language code ('en' or 'fr')
 * @returns The meta description for the specified page and language
 */
export const getMetaDescription = (pageType: PageType, language: 'en' | 'fr' = 'en'): string => {
  return metaDescriptions[pageType][language];
};

export default metaDescriptions;
