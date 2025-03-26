
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-7xl px-4 py-12 mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            SEO Audit Tool
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

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-sm text-muted-foreground pt-8 border-t border-border"
        >
          <p>
            Get actionable SEO insights to improve your website's search performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
