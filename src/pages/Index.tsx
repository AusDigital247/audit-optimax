
import React, { useState } from 'react';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import SEOContainer from '@/components/SEOContainer';
import SEOResults from '@/components/SEOResults';

const Index = () => {
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
      setError('An error occurred while analyzing the website. Please try again.');
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing the website. Please try again.",
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

  return (
    <div className="min-h-screen w-full">
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
                <p className="text-lg font-medium">Analyzing {currentUrl}...</p>
                <p className="text-muted-foreground">This may take a few moments</p>
              </div>
            )}

            {error && !isAnalyzing && (
              <div className="w-full max-w-3xl mx-auto glass p-6 rounded-xl shadow-lg text-center">
                <p className="text-red-500 mb-3">{error}</p>
                <button 
                  onClick={handleReset} 
                  className="px-4 py-2 bg-navy-light text-white rounded-lg hover:bg-navy transition-colors"
                >
                  Try Again
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
