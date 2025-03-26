
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOForm from '@/components/SEOForm';
import SEOResults from '@/components/SEOResults';
import Loader from '@/components/Loader';
import { analyzeSEO, AnalysisResult } from '@/utils/seoAnalyzer';
import { toast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';

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
    <div className="min-h-screen w-full bg-gradient-theme">
      <div className="relative">
        <div className="container max-w-7xl px-4 py-12 mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 pt-8"
          >
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 text-white">
              <span className="text-teal">SEO</span> Audit Tool
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Analyze your website's SEO performance and discover actionable improvements to boost your search rankings.
            </p>
          </motion.div>

          {/* Main content */}
          <div className="mb-16">
            {!results && !isAnalyzing && (
              <SEOForm onSubmit={handleSubmit} isLoading={isAnalyzing} />
            )}

            {isAnalyzing && (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader size="large" className="mb-6" />
                <p className="text-lg font-medium">Analyzing {currentUrl}...</p>
                <p className="text-muted-foreground">This may take a few moments</p>
              </div>
            )}

            {error && !isAnalyzing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-full max-w-3xl mx-auto glass p-6 rounded-xl shadow-lg text-center"
              >
                <p className="text-red-500 mb-3">{error}</p>
                <Button onClick={handleReset} variant="outline">
                  Try Again
                </Button>
              </motion.div>
            )}

            {results && !isAnalyzing && !error && (
              <SEOResults
                url={currentUrl}
                keyword={currentKeyword}
                score={results.score}
                categories={results.categories}
                onReset={handleReset}
              />
            )}
          </div>

          {/* Features section */}
          {!results && !isAnalyzing && (
            <div className="mt-24 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Complete Analysis</h3>
                  <p className="text-muted-foreground">Get comprehensive SEO insights with detailed scores across multiple categories.</p>
                </div>
                
                <div className="glass p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Visual Reports</h3>
                  <p className="text-muted-foreground">View your results in easy-to-understand charts and visual analytics.</p>
                </div>
                
                <div className="glass p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-navy-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-teal">Actionable Insights</h3>
                  <p className="text-muted-foreground">Get specific recommendations to improve your website's SEO performance.</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center text-sm text-muted-foreground pt-8 border-t border-border/30"
          >
            <p>
              Get actionable SEO insights to improve your website's search performance.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Index;
