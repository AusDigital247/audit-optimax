
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import SEOContainer from '@/components/SEOContainer';
import SEOResults from '@/components/SEOResults';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState<string | undefined>(undefined);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (url: string, keyword?: string) => {
    setIsAnalyzing(true);
    setCurrentUrl(url);
    setCurrentKeyword(keyword);
    setError(null);
    
    try {
      const analysisResults = await analyzeSEO(url, keyword);
      setResults(analysisResults);
    } catch (error) {
      console.error('Error analyzing SEO:', error);
      setError(t('error_message'));
      toast({
        title: t('analyze_button'),
        description: t('error_message'),
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setCurrentUrl('');
    setCurrentKeyword(undefined);
    setError(null);
  };

  // Add a special meta tag for language alternates (for SEO)
  useEffect(() => {
    // Create or update the alternate language link
    let linkEn = document.querySelector('link[hreflang="en"]');
    let linkFr = document.querySelector('link[hreflang="fr"]');
    
    if (!linkEn) {
      linkEn = document.createElement('link');
      linkEn.setAttribute('rel', 'alternate');
      linkEn.setAttribute('hreflang', 'en');
      document.head.appendChild(linkEn);
    }
    
    if (!linkFr) {
      linkFr = document.createElement('link');
      linkFr.setAttribute('rel', 'alternate');
      linkFr.setAttribute('hreflang', 'fr');
      document.head.appendChild(linkFr);
    }
    
    // Set current URL for both languages
    const currentUrl = window.location.href;
    linkEn.setAttribute('href', currentUrl);
    linkFr.setAttribute('href', currentUrl);
    
    return () => {
      if (linkEn && linkEn.parentNode) document.head.removeChild(linkEn);
      if (linkFr && linkFr.parentNode) document.head.removeChild(linkFr);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Helmet>
        <title>SEO Audit Tool | Website SEO Checker | Free SEO Analysis</title>
        <meta name="description" content="Free comprehensive SEO audit tool to analyze websites and get actionable recommendations. Check SEO health score and improve search rankings with our SEO checker." />
        <meta name="keywords" content="SEO audit tool, website SEO checker, SEO analysis, SEO health score, search engine optimization, free SEO tool" />
        <link rel="canonical" href={window.location.href} />
        
        {/* Schema.org markup for the SEO tool */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SEO Audit Tool",
            "applicationCategory": "WebApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "operatingSystem": "Web",
            "description": "Free SEO audit tool to analyze your website and get actionable recommendations to improve your search rankings.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "156"
            }
          })}
        </script>
      </Helmet>

      {!results && !error && (
        <SEOContainer onSubmit={handleSubmit} isLoading={isAnalyzing} />
      )}

      {(isAnalyzing || error || results) && (
        <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
          <div className="container max-w-7xl px-4 py-12 mx-auto">
            {isAnalyzing && (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="animate-pulse-glow mb-6">
                  <div className="h-16 w-16 rounded-full border-4 border-t-teal border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                </div>
                <p className="text-lg font-medium text-white">{t('loading')} {currentUrl}...</p>
                <p className="text-muted-foreground">{t('this_may_take')}</p>
              </div>
            )}

            {error && !isAnalyzing && (
              <div className="w-full max-w-3xl mx-auto glass p-6 rounded-xl shadow-lg text-center">
                <p className="text-red-500 mb-3">{error}</p>
                <button 
                  onClick={handleReset} 
                  className="px-4 py-2 bg-navy-light text-white rounded-lg hover:bg-navy transition-colors"
                >
                  {t('try_again')}
                </button>
              </div>
            )}

            {results && !isAnalyzing && !error && (
              <SEOResults
                url={currentUrl}
                keyword={currentKeyword}
                score={results.score}
                categories={results.categories}
                contentFetched={results.contentFetched}
                onReset={handleReset}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
