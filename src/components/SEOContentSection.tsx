
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BarChart3, LineChart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOContentSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-light-bg">
      <div className="container max-w-7xl mx-auto px-4">
        <Tabs defaultValue="why-use" className="w-full mb-12">
          <div className="flex flex-col items-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="why-use">{t('why_use_our_tools')}</TabsTrigger>
              <TabsTrigger value="benefits">{t('benefits_title')}</TabsTrigger>
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
        </Tabs>
        
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
