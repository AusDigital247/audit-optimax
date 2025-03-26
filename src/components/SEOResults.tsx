
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOScoreCard from './SEOScoreCard';
import SEOCategoryCard, { SEOCheckItem } from './SEOCategoryCard';
import { Button } from '@/components/ui/button';
import { Download, RefreshCw, FileText, PieChart, AlertCircle, CheckCircle2, Target } from 'lucide-react';
import { cn } from '@/lib/utils';
import SEOSummaryChart from './SEOSummaryChart';
import SEOCategoryChart from './SEOCategoryChart';
import { toast } from "@/hooks/use-toast";
import html2pdf from 'html2pdf.js';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { relevanceTiers } from '@/utils/seoPointsSystem';

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
  relevanceTier?: string;
  onReset: () => void;
  className?: string;
}

const SEOResults = ({ 
  url, 
  keyword, 
  score, 
  categories, 
  contentFetched = false,
  relevanceTier,
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
  
  // Calculate statistics for each category using weighted scoring
  const categoryStats = categories.map(category => {
    const total = category.items.filter(item => item.status !== 'info').length;
    const passed = category.items.filter(item => item.status === 'pass').length;
    const warnings = category.items.filter(item => item.status === 'warning').length;
    const failed = category.items.filter(item => item.status === 'fail').length;
    
    // Calculate weighted score (Pass = 1, Warning = 0.5, Fail = 0)
    const earnedPoints = passed + (warnings * 0.5);
    const categoryScore = total > 0 ? Math.round((earnedPoints / total) * 100) : 0;
    
    return {
      title: category.title,
      total,
      passed,
      warnings,
      failed,
      score: categoryScore
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
              score >= 70 ? '#22c55e' : score >= 35 ? '#f59e0b' : '#ef4444'
            }; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <span style="color: white; font-size: 36px; font-weight: bold;">${score}</span>
            </div>
            ${relevanceTier ? `<p style="margin-top: 10px; font-size: 18px; font-weight: bold; color: ${
              relevanceTier === relevanceTiers.HIGHLY_RELEVANT ? '#22c55e' : 
              relevanceTier === relevanceTiers.SOMEWHAT_RELEVANT ? '#f59e0b' : 
              '#ef4444'
            };">${relevanceTier}</p>` : ''}
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
  
  // Get all critical issues for the recommendation section
  const criticalIssues = categories.flatMap(category => 
    category.items
      .filter(item => item.status === 'fail')
      .map(item => ({ category: category.title, item }))
  );
  
  // Get warning issues for the recommendation section
  const warningIssues = categories.flatMap(category => 
    category.items
      .filter(item => item.status === 'warning')
      .map(item => ({ category: category.title, item }))
  );
  
  // Combine all issues, prioritizing critical ones
  const allIssues = [...criticalIssues, ...warningIssues];
  
  // Get the top 5 issues to display
  const topIssues = allIssues.slice(0, 5);
  
  // Get relevance color based on tier
  const getRelevanceColor = (tier: string) => {
    switch(tier) {
      case relevanceTiers.HIGHLY_RELEVANT:
        return "text-green-600 dark:text-green-400";
      case relevanceTiers.SOMEWHAT_RELEVANT:
        return "text-amber-600 dark:text-amber-400";
      case relevanceTiers.NOT_RELEVANT:
        return "text-red-600 dark:text-red-400";
      default:
        return "text-muted-foreground";
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
          <h2 className="text-2xl md:text-5xl font-semibold mb-2">SEO Audit Results</h2>
          <p className="text-lg text-muted-foreground">
            For: <span className="font-medium text-foreground">{url}</span>
            {keyword && (
              <> | Target Keyword: <span className="font-medium text-foreground">{keyword}</span></>
            )}
          </p>
          <p className="text-sm text-muted-foreground mt-1">Generated on {reportDate}</p>
          
          {relevanceTier && keyword && (
            <div className="mt-3">
              <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium", 
                relevanceTier === relevanceTiers.HIGHLY_RELEVANT ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : 
                relevanceTier === relevanceTiers.SOMEWHAT_RELEVANT ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400" : 
                "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
              )}>
                <Target className="h-3.5 w-3.5" />
                {relevanceTier} for "{keyword}"
              </span>
            </div>
          )}
        </motion.div>
      </div>
      
      {!contentFetched && (
        <Alert className="mb-6 border-amber-400/30 bg-amber-50 dark:bg-amber-900/20">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-600 dark:text-amber-400">Limited Analysis</AlertTitle>
          <AlertDescription className="text-sm text-amber-700 dark:text-amber-300">
            We were unable to access your page content directly. Our analysis is based on URL structure only.
            For a more accurate analysis, try running the audit from a device that has access to the target website,
            or use Google Search Console, Screaming Frog, or other SEO tools.
          </AlertDescription>
        </Alert>
      )}
      
      {contentFetched && (
        <Alert className="mb-6 border-green-400/30 bg-green-50 dark:bg-green-900/20">
          <CheckCircle2 className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-600 dark:text-green-400">Complete Analysis</AlertTitle>
          <AlertDescription className="text-sm text-green-700 dark:text-green-300">
            We successfully accessed your page content. This analysis includes a thorough evaluation of your content, meta tags, images, 
            and technical elements for a comprehensive SEO assessment.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <SEOScoreCard score={score} relevanceTier={relevanceTier} className="lg:col-span-1" />
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass p-6 rounded-xl shadow-md lg:col-span-3"
        >
          <h3 className="text-xl font-semibold mb-4">Score Breakdown</h3>
          
          <div className="space-y-3 text-sm">
            <p>
              This SEO audit has evaluated various aspects of your website's optimization
              {keyword ? (
                <> for the target keyword <span className="font-semibold">{keyword}</span></>
              ) : " "}. 
              The overall score of <span className={cn(
                "font-semibold",
                score >= 70 ? "text-seo-good" : 
                score >= 35 ? "text-seo-warning" : 
                "text-seo-bad"
              )}>
                {score}/100
              </span> is calculated based on {categories.reduce((acc, cat) => acc + cat.items.length, 0)} individual checks
              across {categories.length} categories.
            </p>
            
            {relevanceTier && keyword && (
              <p>
                Your page is classified as <span className={cn("font-semibold", getRelevanceColor(relevanceTier))}>
                  {relevanceTier}
                </span> for the keyword "{keyword}". {
                  relevanceTier === relevanceTiers.HIGHLY_RELEVANT 
                    ? "This indicates strong keyword targeting and content relevance." 
                    : relevanceTier === relevanceTiers.SOMEWHAT_RELEVANT 
                      ? "This indicates partial keyword relevance but room for improvement."
                      : "This indicates poor keyword targeting and low content relevance."
                }
              </p>
            )}
            
            <p>
              {score >= 70 
                ? "Your website demonstrates strong SEO practices. Continue maintaining these standards while addressing the few improvement opportunities identified."
                : score >= 35 
                  ? "Your website has a foundation for SEO but several opportunities for improvement exist. Focus on addressing the identified issues to improve search visibility."
                  : "Your website requires significant SEO improvements. Prioritize addressing the critical issues identified to enhance your search visibility and performance."}
            </p>
            
            {topIssues.length > 0 && (
              <>
                <p className="font-medium mt-2">Key recommendations:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {topIssues.map((issue, idx) => (
                    <li key={idx} className={issue.item.status === 'fail' ? 'text-seo-bad' : 'text-seo-warning'}>
                      <span className="text-foreground">{issue.item.name}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
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
