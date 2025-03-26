
import React from 'react';
import { motion } from 'framer-motion';
import SEOScoreCard from './SEOScoreCard';
import SEOCategoryCard, { SEOCheckItem } from './SEOCategoryCard';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SEOCategory {
  title: string;
  items: SEOCheckItem[];
}

interface SEOResultsProps {
  url: string;
  keyword?: string;
  score: number;
  categories: SEOCategory[];
  onReset: () => void;
  className?: string;
}

const SEOResults = ({ 
  url, 
  keyword, 
  score, 
  categories, 
  onReset,
  className 
}: SEOResultsProps) => {
  
  // Generate a date string for the report
  const reportDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Function to generate and download a simple text report
  const downloadReport = () => {
    let reportContent = `SEO Audit Report\n`;
    reportContent += `URL: ${url}\n`;
    if (keyword) reportContent += `Target Keyword: ${keyword}\n`;
    reportContent += `Date: ${reportDate}\n`;
    reportContent += `Overall Score: ${score}/100\n\n`;
    
    categories.forEach(category => {
      reportContent += `${category.title}\n`;
      reportContent += `${'='.repeat(category.title.length)}\n`;
      
      category.items.forEach(item => {
        reportContent += `- ${item.name}: ${item.status.toUpperCase()}\n`;
        reportContent += `  ${item.message}\n`;
      });
      
      reportContent += `\n`;
    });
    
    // Create a blob and download link
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-5xl mx-auto", className)}
    >
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">SEO Audit Results</h2>
          <p className="text-muted-foreground">
            For: <span className="font-medium text-foreground">{url}</span>
            {keyword && (
              <> | Keyword: <span className="font-medium text-foreground">{keyword}</span></>
            )}
          </p>
          <p className="text-sm text-muted-foreground mt-1">Generated on {reportDate}</p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <SEOScoreCard score={score} className="lg:col-span-1" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass p-6 rounded-xl shadow-md lg:col-span-3"
        >
          <h3 className="text-xl font-semibold mb-4">Summary</h3>
          
          <div className="space-y-3 text-sm">
            <p>
              This SEO audit has evaluated various aspects of your website's search engine optimization.
              The overall score of <span className={cn(
                "font-semibold",
                score >= 80 ? "text-seo-good" : 
                score >= 60 ? "text-seo-warning" : 
                "text-seo-bad"
              )}>
                {score}/100
              </span> is calculated based on {categories.reduce((acc, cat) => acc + cat.items.length, 0)} individual checks
              across {categories.length} categories.
            </p>
            
            <p>
              {score >= 80 
                ? "Your website demonstrates strong SEO practices. Continue maintaining these standards while addressing the few improvement opportunities identified."
                : score >= 60 
                  ? "Your website has a solid SEO foundation but several opportunities for improvement exist. Focus on addressing the identified issues to improve search visibility."
                  : "Your website requires significant SEO improvements. Prioritize addressing the critical issues identified to enhance your search visibility and performance."}
            </p>
            
            <p className="font-medium">Key recommendations:</p>
            <ul className="list-disc pl-5 space-y-1">
              {categories.map(category => {
                const failedItems = category.items.filter(item => item.status === 'fail');
                if (failedItems.length > 0) {
                  return failedItems.slice(0, 2).map((item, idx) => (
                    <li key={`${category.title}-${idx}`}>
                      {item.name}
                    </li>
                  ));
                }
                return null;
              }).flat().filter(Boolean).slice(0, 5)}
            </ul>
          </div>
        </motion.div>
      </div>
      
      <div className="space-y-6 mb-8">
        {categories.map((category, index) => (
          <SEOCategoryCard
            key={category.title}
            title={category.title}
            items={category.items}
            delay={index + 2}
          />
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-10"
      >
        <Button 
          onClick={onReset}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Run New Audit
        </Button>
        
        <Button 
          onClick={downloadReport}
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Download Report
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SEOResults;
