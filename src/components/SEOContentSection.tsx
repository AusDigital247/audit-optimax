
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BarChart3, LineChart, ArrowRight, Cog, FileText, Search, Globe, Zap, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SEOContentSection: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-light-bg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
            {t('why_choose_title')}
          </h2>
          <p className="text-navy/70 max-w-3xl mx-auto">
            {t('why_choose_subtitle')}
          </p>
        </div>
        
        <Tabs defaultValue="why-use" className="w-full mb-12">
          <div className="flex flex-col items-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/80 shadow-sm">
              <TabsTrigger value="why-use" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('why_use_our_tools')}</TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('benefits_title')}</TabsTrigger>
              <TabsTrigger value="how-works" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('how_it_works')}</TabsTrigger>
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
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('technical_seo')}</h3>
                <p className="text-navy/70">{t('technical_seo_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <FileText size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('on_page_elements')}</h3>
                <p className="text-navy/70">{t('on_page_text')}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <Cog size={24} className="text-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{t('content_quality')}</h3>
                <p className="text-navy/70">{t('content_quality_text')}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* SEO Best Practices Section */}
        <div className="mt-16 bg-navy/5 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">{t('seo_best_practices')}</h2>
          
          <Tabs defaultValue="user-experience" className="w-full">
            <div className="flex flex-col items-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3 bg-white/80 shadow-sm">
                <TabsTrigger value="user-experience" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('user_experience')}</TabsTrigger>
                <TabsTrigger value="content-strategy" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('content_strategy')}</TabsTrigger>
                <TabsTrigger value="technical-factors" className="data-[state=active]:bg-teal data-[state=active]:text-white">{t('technical_factors')}</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="user-experience">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy">{t('user_experience_optimization')}</h3>
                <p className="text-navy/70 mb-4">{t('user_experience_text')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('core_web_vitals')}</h4>
                    <p className="text-navy/70 text-sm">{t('core_web_vitals_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('mobile_first')}</h4>
                    <p className="text-navy/70 text-sm">{t('mobile_first_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('site_navigation')}</h4>
                    <p className="text-navy/70 text-sm">{t('site_navigation_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('page_speed')}</h4>
                    <p className="text-navy/70 text-sm">{t('page_speed_text')}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="content-strategy">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy">{t('content_strategy_optimization')}</h3>
                <p className="text-navy/70 mb-4">{t('content_strategy_text')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('keyword_research')}</h4>
                    <p className="text-navy/70 text-sm">{t('keyword_research_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('content_quality_strategy')}</h4>
                    <p className="text-navy/70 text-sm">{t('content_quality_strategy_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('content_freshness')}</h4>
                    <p className="text-navy/70 text-sm">{t('content_freshness_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('search_intent')}</h4>
                    <p className="text-navy/70 text-sm">{t('search_intent_text')}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="technical-factors">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-navy">{t('technical_optimization')}</h3>
                <p className="text-navy/70 mb-4">{t('technical_optimization_text')}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('site_structure')}</h4>
                    <p className="text-navy/70 text-sm">{t('site_structure_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('schema_markup')}</h4>
                    <p className="text-navy/70 text-sm">{t('schema_markup_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('https_security')}</h4>
                    <p className="text-navy/70 text-sm">{t('https_security_text')}</p>
                  </div>
                  
                  <div className="border border-gray-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-navy mb-2">{t('xml_sitemap')}</h4>
                    <p className="text-navy/70 text-sm">{t('xml_sitemap_text')}</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Comprehensive SEO Content */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                {t('why_need_analysis')}
              </h2>
              <p className="text-navy/70 mb-6">
                {t('why_need_analysis_text')}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {t('comprehensive_assessment')}
                  </h3>
                  <p className="text-navy/70">
                    {t('comprehensive_assessment_text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {t('keyword_optimization')}
                  </h3>
                  <p className="text-navy/70">
                    {t('keyword_optimization_text')}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {t('actionable_insights_long')}
                  </h3>
                  <p className="text-navy/70">
                    {t('actionable_insights_text_long')}
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">
                {t('what_our_tool_checks')}
              </h2>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {t('technical_seo_factors')}
                  </h3>
                  <p className="text-navy/70">
                    {t('technical_seo_factors_text')}
                  </p>
                  <ul className="list-disc list-inside text-navy/70 mt-2 ml-4 space-y-1">
                    {t('technical_seo_factors_list').split('|').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {t('on_page_seo_elements')}
                  </h3>
                  <p className="text-navy/70">
                    {t('on_page_seo_elements_text')}
                  </p>
                  <ul className="list-disc list-inside text-navy/70 mt-2 ml-4 space-y-1">
                    {t('on_page_seo_elements_list').split('|').map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Free SEO Audit Tool Section - This was previously broken */}
        <div className="mt-16 glass-strong p-8 rounded-xl text-white">
          <h2 className="text-2xl font-bold mb-4 text-teal">{t('free_seo_audit_tool')}</h2>
          <p className="mb-6">{t('free_seo_audit_tool_text')}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-light">{t('what_analyzes')}</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                {t('what_analyzes_list').split('|').map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-light">{t('why_choose_our_tool')}</h3>
              <p>{t('why_choose_our_tool_text')}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2 text-teal-light">{t('get_started')}</h3>
              <p>{t('get_started_text')}</p>
            </div>
          </div>
        </div>
        
        {/* Additional SEO resources section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">
            {t('seo_resources')}
          </h2>
          <p className="text-navy/70 max-w-3xl mx-auto mb-8">
            {t('seo_resources_text')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{t('seo_guide')}</h3>
              <p className="text-navy/70">{t('seo_guide_text')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{t('keyword_tips')}</h3>
              <p className="text-navy/70">{t('keyword_tips_text')}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Zap size={24} className="text-teal" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">{t('technical_checklist')}</h3>
              <p className="text-navy/70">{t('technical_checklist_text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
