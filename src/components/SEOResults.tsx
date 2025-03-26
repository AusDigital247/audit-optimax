
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOScoreCard from './SEOScoreCard';
import SEOCategoryCard, { SEOCheckItem } from './SEOCategoryCard';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, FileText, PieChart, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEOSummaryChart from './SEOSummaryChart';
import SEOCategoryChart from './SEOCategoryChart';
import { toast } from "@/hooks/use-toast";
import html2pdf from 'html2pdf.js';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface SEOCategory {
  title: string;
  items: SEOCheckItem[];
}

interface SEOResultsProps {
  url: string;
  keyword?: string;
  score: number;
  categories: SEOCategory[];
  contentFetched?: boolean;
  onReset: () => void;
  className?: string;
}

const SEOResults = ({ 
  url, 
  keyword, 
  score, 
  categories, 
  contentFetched = false,
  onReset,
  className 
}: SEOResultsProps) => {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
  // Generate a date string for the report
  const reportDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // Calculate statistics for each category
  const categoryStats = categories.map(category => {
    const total = category.items.length;
    const passed = category.items.filter(item => item.status === 'pass').length;
    const warnings = category.items.filter(item => item.status === 'warning').length;
    const failed = category.items.filter(item => item.status === 'fail').length;
    const score = Math.round((passed / total) * 100);
    
    return {
      title: category.title,
      total,
      passed,
      warnings,
      failed,
      score
    };
  });
  
  // Function to generate and download a PDF report
  const downloadPdfReport = async () => {
    setIsGeneratingPdf(true);
    
    try {
      // Clone the report container to modify for PDF
      const reportElement = document.getElementById('seo-report-container');
      if (!reportElement) {
        throw new Error('Report element not found');
      }
      
      const reportClone = reportElement.cloneNode(true) as HTMLElement;
      
      // Add a title page
      const titlePage = document.createElement('div');
      titlePage.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; page-break-after: always;">
          <h1 style="font-size: 28px; margin-bottom: 20px;">SEO Audit Report</h1>
          <p style="font-size: 18px; margin-bottom: 10px;">${url}</p>
          ${keyword ? `<p style="font-size: 16px; margin-bottom: 30px;">Target Keyword: ${keyword}</p>` : ''}
          <p style="font-size: 14px;">Generated on ${reportDate}</p>
          <div style="margin: 40px 0;">
            <div style="width: 120px; height: 120px; border-radius: 50%; background-color: ${
              score >= 80 ? '#22c55e' : score >= 60 ? '#f59e0b' : '#ef4444'
            }; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <span style="color: white; font-size: 36px; font-weight: bold;">${score}</span>
            </div>
          </div>
          <p style="font-size: 16px; max-width: 600px; margin: 0 auto;">
            This report provides a comprehensive analysis of your website's SEO performance
            with actionable recommendations for improvement.
          </p>
        </div>
      `;
      
      // Create a temporary div to hold everything
      const container = document.createElement('div');
      container.appendChild(titlePage);
      container.appendChild(reportClone);
      
      // Generate PDF
      const pdfOptions = {
        margin: [10, 10, 10, 10],
        filename: `seo-report-${url.replace(/https?:\/\//i, '').replace(/[/:.]/g, '-')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      
      await html2pdf().from(container).set(pdfOptions).save();
      
      toast({
        title: "Report Generated",
        description: "Your SEO report has been downloaded successfully.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error Generating Report",
        description: "There was a problem creating your PDF report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPdf(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-5xl mx-auto", className)}
      id="seo-report-container"
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
      
      {!contentFetched && (
        <Alert className="mb-6 border-teal/30 bg-navy-light">
          <AlertCircle className="h-4 w-4 text-amber-400" />
          <AlertTitle className="text-amber-400">Limited Analysis</AlertTitle>
          <AlertDescription className="text-sm">
            We were unable to access your page content directly due to security restrictions. Our analysis is based on URL structure only.
            For a more accurate analysis, we recommend using Google Search Console, Screaming Frog, or other SEO tools that can directly access your page content.
          </AlertDescription>
        </Alert>
      )}
      
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
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Overall SEO Performance</h3>
              <SEOSummaryChart score={score} />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Category Performance</h3>
              <SEOCategoryChart categories={categoryStats} />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 mt-8">
          <h3 className="text-xl font-semibold">Detailed Report</h3>
          {categories.map((category, index) => (
            <SEOCategoryCard
              key={category.title}
              title={category.title}
              items={category.items}
              delay={index + 2}
            />
          ))}
        </div>
      </motion.div>
      
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
          onClick={downloadPdfReport}
          className="flex items-center gap-2"
          disabled={isGeneratingPdf}
        >
          <Download className="h-4 w-4" />
          {isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Report'}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default SEOResults;
