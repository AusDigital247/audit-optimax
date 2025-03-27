
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BarChart3, LineChart, ArrowRight, Cog, FileText, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOContentSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-light-bg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            {language === 'en' ? 'Why Choose Our SEO Analysis Tool' : 'Pourquoi choisir notre outil d\'analyse SEO'}
          </h2>
          <p className="text-navy/70 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Our comprehensive SEO toolkit helps businesses improve their search engine visibility and drive organic traffic.'
              : 'Notre boîte à outils SEO complète aide les entreprises à améliorer leur visibilité dans les moteurs de recherche et à générer du trafic organique.'}
          </p>
        </div>
        
        <Tabs defaultValue="why-use" className="w-full mb-12">
          <div className="flex flex-col items-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="why-use">{t('why_use_our_tools')}</TabsTrigger>
              <TabsTrigger value="benefits">{t('benefits_title')}</TabsTrigger>
              <TabsTrigger value="how-works">
                {language === 'en' ? 'How Our Tool Works' : 'Comment fonctionne notre outil'}
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="why-use" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('comprehensive_analysis')}</h3>
                <p className="text-navy/70">{t('comprehensive_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('actionable_insights')}</h3>
                <p className="text-navy/70">{t('actionable_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <LineChart size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('competitor_benchmarking')}</h3>
                <p className="text-navy/70">{t('competitor_text')}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="benefits" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('improve_visibility')}</h3>
                <p className="text-navy/70">{t('visibility_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('stay_updated')}</h3>
                <p className="text-navy/70">{t('updated_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <ArrowRight size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('track_progress')}</h3>
                <p className="text-navy/70">{t('progress_text')}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="how-works" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <Search size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  {language === 'en' ? 'Technical SEO' : 'SEO Technique'}
                </h3>
                <p className="text-navy/70">
                  {language === 'en' 
                    ? 'We analyze technical aspects like page speed, mobile-friendliness, and crawlability.'
                    : 'Nous analysons les aspects techniques comme la vitesse de page, la convivialité mobile et la capacité d\'exploration.'}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <FileText size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  {language === 'en' ? 'On-Page Elements' : 'Éléments sur page'}
                </h3>
                <p className="text-navy/70">
                  {language === 'en' 
                    ? 'We check meta tags, headings, content quality, and keyword optimization.'
                    : 'Nous vérifions les balises méta, les titres, la qualité du contenu et l\'optimisation des mots-clés.'}
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <Cog size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">
                  {language === 'en' ? 'Content Quality' : 'Qualité du contenu'}
                </h3>
                <p className="text-navy/70">
                  {language === 'en' 
                    ? 'We evaluate content relevance, readability, and engagement factors.'
                    : 'Nous évaluons la pertinence du contenu, la lisibilité et les facteurs d\'engagement.'}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Comprehensive SEO Content */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'en' 
                  ? 'Why You Need a Website SEO Analysis' 
                  : 'Pourquoi vous avez besoin d\'une analyse SEO de site web'}
              </h2>
              <p className="text-navy/70 mb-6">
                {language === 'en'
                  ? 'In today\'s competitive digital landscape, a strong SEO strategy is essential for online visibility. Our free SEO checker helps you identify what\'s working and what needs improvement.'
                  : 'Dans le paysage numérique concurrentiel d\'aujourd\'hui, une stratégie SEO solide est essentielle pour la visibilité en ligne. Notre vérificateur SEO gratuit vous aide à identifier ce qui fonctionne et ce qui doit être amélioré.'}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {language === 'en' 
                      ? 'Comprehensive Assessment' 
                      : 'Évaluation complète'}
                  </h3>
                  <p className="text-navy/70">
                    {language === 'en'
                      ? 'Our free SEO checker evaluates over 100 on-page and technical SEO factors that impact your search engine rankings. From meta tags to content quality, we analyze every aspect of your website\'s SEO health.'
                      : 'Notre vérificateur SEO gratuit évalue plus de 100 facteurs SEO techniques et sur page qui impactent votre classement dans les moteurs de recherche. Des balises méta à la qualité du contenu, nous analysons tous les aspects de la santé SEO de votre site web.'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {language === 'en' 
                      ? 'Keyword Optimization' 
                      : 'Optimisation des mots-clés'}
                  </h3>
                  <p className="text-navy/70">
                    {language === 'en'
                      ? 'Discover how well your content is optimized for your target keywords. Our SEO audit tool checks keyword presence in critical locations and provides recommendations for better content relevance.'
                      : 'Découvrez comment votre contenu est optimisé pour vos mots-clés cibles. Notre outil d\'audit SEO vérifie la présence des mots-clés dans les emplacements critiques et fournit des recommandations pour améliorer la pertinence du contenu.'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {language === 'en' 
                      ? 'Actionable Insights' 
                      : 'Informations exploitables'}
                  </h3>
                  <p className="text-navy/70">
                    {language === 'en'
                      ? 'Get clear, prioritized recommendations to fix SEO issues. Our website SEO analysis tool doesn\'t just identify problems—it provides practical solutions to improve your search visibility.'
                      : 'Obtenez des recommandations claires et hiérarchisées pour résoudre les problèmes de SEO. Notre outil d\'analyse SEO de site web ne se contente pas d\'identifier les problèmes, il fournit des solutions pratiques pour améliorer votre visibilité dans les recherches.'}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                {language === 'en' 
                  ? 'What Our SEO Audit Tool Checks' 
                  : 'Ce que notre outil d\'audit SEO vérifie'}
              </h2>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {language === 'en' 
                      ? 'Technical SEO Factors' 
                      : 'Facteurs SEO techniques'}
                  </h3>
                  <p className="text-navy/70">
                    {language === 'en'
                      ? 'Technical SEO forms the foundation of your website\'s search performance. Our SEO analyzer examines critical technical elements that search engines use to crawl and index your site:'
                      : 'Le SEO technique constitue la base des performances de recherche de votre site web. Notre analyseur SEO examine les éléments techniques critiques que les moteurs de recherche utilisent pour explorer et indexer votre site:'}
                  </p>
                  <ul className="list-disc list-inside text-navy/70 mt-2 ml-4 space-y-1">
                    {language === 'en' ? (
                      <>
                        <li>Page loading speed and Core Web Vitals metrics</li>
                        <li>Mobile-friendliness and responsive design</li>
                        <li>SSL certificate implementation and security</li>
                        <li>XML sitemap and robots.txt configuration</li>
                        <li>URL structure and canonical tags</li>
                        <li>Schema markup implementation</li>
                      </>
                    ) : (
                      <>
                        <li>Vitesse de chargement de la page et métriques Core Web Vitals</li>
                        <li>Convivialité mobile et conception responsive</li>
                        <li>Implémentation du certificat SSL et sécurité</li>
                        <li>Configuration du plan du site XML et du robots.txt</li>
                        <li>Structure d'URL et balises canoniques</li>
                        <li>Implémentation du balisage de schéma</li>
                      </>
                    )}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {language === 'en' 
                      ? 'On-Page SEO Elements' 
                      : 'Éléments SEO sur page'}
                  </h3>
                  <p className="text-navy/70">
                    {language === 'en'
                      ? 'On-page SEO factors directly influence how search engines understand and rank your content. Our free SEO audit thoroughly evaluates:'
                      : 'Les facteurs SEO sur page influencent directement la façon dont les moteurs de recherche comprennent et classent votre contenu. Notre audit SEO gratuit évalue minutieusement:'}
                  </p>
                  <ul className="list-disc list-inside text-navy/70 mt-2 ml-4 space-y-1">
                    {language === 'en' ? (
                      <>
                        <li>Title tags and meta descriptions optimization</li>
                        <li>Heading structure (H1, H2, H3) and content organization</li>
                        <li>Keyword usage and content relevance</li>
                        <li>Image optimization with alt text</li>
                        <li>Internal linking structure and anchor text</li>
                        <li>Content quality, length, and readability</li>
                      </>
                    ) : (
                      <>
                        <li>Optimisation des balises de titre et des méta-descriptions</li>
                        <li>Structure des titres (H1, H2, H3) et organisation du contenu</li>
                        <li>Utilisation des mots-clés et pertinence du contenu</li>
                        <li>Optimisation des images avec texte alternatif</li>
                        <li>Structure de liens internes et texte d'ancrage</li>
                        <li>Qualité, longueur et lisibilité du contenu</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional SEO resources section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">
            {language === 'en' 
              ? 'SEO Resources & Learning' 
              : 'Ressources et apprentissage SEO'}
          </h2>
          <p className="text-navy/70 max-w-3xl mx-auto mb-8">
            {language === 'en'
              ? 'Explore our collection of SEO guides and resources to improve your search engine optimization strategy.'
              : 'Explorez notre collection de guides et de ressources SEO pour améliorer votre stratégie d\'optimisation pour les moteurs de recherche.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-2">
                {language === 'en' 
                  ? 'SEO Beginner\'s Guide' 
                  : 'Guide SEO pour débutants'}
              </h3>
              <p className="text-navy/70">
                {language === 'en'
                  ? 'Learn the fundamentals of search engine optimization and how to implement them on your website.'
                  : 'Apprenez les fondamentaux de l\'optimisation pour les moteurs de recherche et comment les mettre en œuvre sur votre site web.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-2">
                {language === 'en' 
                  ? 'Keyword Research Tips' 
                  : 'Conseils de recherche de mots-clés'}
              </h3>
              <p className="text-navy/70">
                {language === 'en'
                  ? 'Discover effective strategies for finding and targeting the right keywords for your business.'
                  : 'Découvrez des stratégies efficaces pour trouver et cibler les bons mots-clés pour votre entreprise.'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-navy mb-2">
                {language === 'en' 
                  ? 'Technical SEO Checklist' 
                  : 'Liste de contrôle SEO technique'}
              </h3>
              <p className="text-navy/70">
                {language === 'en'
                  ? 'A comprehensive checklist to ensure your website meets all technical SEO requirements.'
                  : 'Une liste de contrôle complète pour s\'assurer que votre site web répond à toutes les exigences techniques de SEO.'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Hidden SEO Content for Search Engines - Properly translated */}
        <div className="mt-12">
          <section className="text-navy">
            <div className="prose max-w-none">
              <h2>{language === 'en' ? 'Free SEO Audit Tool for Your Website' : 'Outil d\'audit SEO gratuit pour votre site Web'}</h2>
              <p>
                {language === 'en' 
                  ? 'Our free SEO audit tool provides a comprehensive analysis of your website\'s search engine optimization. Get detailed insights into your site\'s performance, content, technical issues, and recommendations for improvement.'
                  : 'Notre outil d\'audit SEO gratuit fournit une analyse complète de l\'optimisation pour les moteurs de recherche de votre site Web. Obtenez des informations détaillées sur les performances, le contenu et les problèmes techniques de votre site, ainsi que des recommandations d\'amélioration.'}
              </p>
              
              <h3>{language === 'en' ? 'What Our Free SEO Tool Analyzes:' : 'Ce que notre outil SEO gratuit analyse:'}</h3>
              <ul>
                <li>{language === 'en' 
                  ? 'On-page SEO factors including meta tags, headings, and content quality'
                  : 'Facteurs SEO sur page, y compris les balises méta, les titres et la qualité du contenu'}</li>
                <li>{language === 'en' 
                  ? 'Technical SEO issues that could be hurting your rankings'
                  : 'Problèmes techniques de SEO qui pourraient nuire à votre classement'}</li>
                <li>{language === 'en' 
                  ? 'Performance metrics that impact user experience and search visibility'
                  : 'Métriques de performance qui impactent l\'expérience utilisateur et la visibilité dans les recherches'}</li>
                <li>{language === 'en' 
                  ? 'Mobile-friendliness and responsive design evaluation'
                  : 'Évaluation de la convivialité mobile et de la conception responsive'}</li>
                <li>{language === 'en' 
                  ? 'Content relevance and keyword optimization assessment'
                  : 'Évaluation de la pertinence du contenu et de l\'optimisation des mots-clés'}</li>
              </ul>
              
              <h3>{language === 'en' ? 'Why Choose Our SEO Audit Tool:' : 'Pourquoi choisir notre outil d\'audit SEO:'}</h3>
              <p>
                {language === 'en'
                  ? 'Unlike other basic SEO checkers, our tool provides in-depth analysis with actionable recommendations. We don\'t just identify problems - we provide clear guidance on how to fix them and improve your search rankings.'
                  : 'Contrairement à d\'autres vérificateurs SEO de base, notre outil fournit une analyse approfondie avec des recommandations pratiques. Nous n\'identifions pas seulement les problèmes - nous fournissons des conseils clairs sur la façon de les résoudre et d\'améliorer votre classement dans les recherches.'}
              </p>
              
              <h3>{language === 'en' ? 'Get Started With Your Free SEO Audit Today:' : 'Commencez votre audit SEO gratuit aujourd\'hui:'}</h3>
              <p>
                {language === 'en'
                  ? 'Simply enter your website URL and optional target keyword above to receive your comprehensive SEO analysis. No sign-up required, no credit card needed - just instant, valuable insights to help improve your website\'s performance in search engines.'
                  : 'Entrez simplement l\'URL de votre site Web et le mot-clé cible facultatif ci-dessus pour recevoir votre analyse SEO complète. Aucune inscription requise, aucune carte de crédit nécessaire - juste des informations instantanées et précieuses pour vous aider à améliorer les performances de votre site Web dans les moteurs de recherche.'}
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
