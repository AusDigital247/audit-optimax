
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BarChart3, LineChart, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOContentSection: React.FC = () => {
  const { t } = useLanguage();
  
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
        
        {/* Hidden SEO Content for Search Engines */}
        <div className="mt-12">
          <section className="text-navy">
            <div className="prose max-w-none">
              <h2>{t('hero_title')}</h2>
              <p>
                Our free SEO audit tool provides a comprehensive analysis of your website's search engine optimization. Get detailed insights into your site's performance, content, technical issues, and recommendations for improvement.
              </p>
              
              <h3>What Our Free SEO Tool Analyzes:</h3>
              <ul>
                <li>On-page SEO factors including meta tags, headings, and content quality</li>
                <li>Technical SEO issues that could be hurting your rankings</li>
                <li>Performance metrics that impact user experience and search visibility</li>
                <li>Mobile-friendliness and responsive design evaluation</li>
                <li>Content relevance and keyword optimization assessment</li>
              </ul>
              
              <h3>Why Choose Our SEO Audit Tool:</h3>
              <p>
                Unlike other basic SEO checkers, our tool provides in-depth analysis with actionable recommendations. We don't just identify problems - we provide clear guidance on how to fix them and improve your search rankings.
              </p>
              
              <h3>Get Started With Your Free SEO Audit Today:</h3>
              <p>
                Simply enter your website URL and optional target keyword above to receive your comprehensive SEO analysis. No sign-up required, no credit card needed - just instant, valuable insights to help improve your website's performance in search engines.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
