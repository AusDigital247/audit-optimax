
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Target, Award } from 'lucide-react';
import { relevanceTiers } from '@/utils/seoPointsSystem';

interface SEOScoreCardProps {
  score: number;
  relevanceTier?: string;
  className?: string;
}

const SEOScoreCard = ({ score, relevanceTier, className }: SEOScoreCardProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // Determine color based on score - adjusted for new scoring tiers
  const getScoreColor = (value: number) => {
    if (value >= 70) return "text-seo-good";
    if (value >= 35) return "text-seo-warning";
    return "text-seo-bad";
  };

  const getScoreBackground = (value: number) => {
    if (value >= 70) return "from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10";
    if (value >= 35) return "from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10";
    return "from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/10";
  };
  
  // Get relevance tier color
  const getRelevanceColor = (tier: string) => {
    switch(tier) {
      case relevanceTiers.HIGHLY_RELEVANT:
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30";
      case relevanceTiers.SOMEWHAT_RELEVANT:
        return "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30";
      case relevanceTiers.NOT_RELEVANT:
        return "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30";
      default:
        return "text-muted-foreground";
    }
  };

  // Animate the score counting up
  useEffect(() => {
    const duration = 1500; // 1.5 second animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    const increment = score / totalFrames;

    let currentFrame = 0;
    const counter = setInterval(() => {
      if (currentFrame >= totalFrames) {
        setAnimatedScore(score);
        clearInterval(counter);
      } else {
        setAnimatedScore(Math.min(Math.ceil(increment * currentFrame), score));
        currentFrame++;
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [score]);

  const circleCircumference = 2 * Math.PI * 45; // 45 is the radius
  const strokeDashoffset = circleCircumference - (circleCircumference * animatedScore) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn(
        "glass-strong p-6 rounded-xl shadow-md relative overflow-hidden card-float", 
        className
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-20", 
        getScoreBackground(score)
      )} />
      
      <div className="absolute top-4 right-4">
        <Award className="h-6 w-6 text-teal opacity-50" />
      </div>
      
      <h3 className="text-xl font-semibold mb-4 text-center relative z-10">Overall SEO Score</h3>
      
      <div className="flex justify-center items-center relative z-10">
        <div className="relative flex items-center justify-center">
          <svg width="160" height="160" viewBox="0 0 160 160">
            {/* Background circle */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="rgba(30,43,74,0.5)"
              strokeWidth="12"
              className="dark:stroke-gray-700"
            />
            {/* Progress circle with gradient */}
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={score >= 70 ? "#5D9EF0" : score >= 35 ? "#f59e0b" : "#ef4444"} />
                <stop offset="100%" stopColor={score >= 70 ? "#7DBEFC" : score >= 35 ? "#fbbf24" : "#f87171"} />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="progress-ring-circle"
              transform="rotate(-90 80 80)"
            >
              <animate
                attributeName="stroke-dashoffset"
                from={circleCircumference}
                to={strokeDashoffset}
                dur="1.5s"
                fill="freeze"
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
              />
            </circle>
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className={cn("text-5xl font-bold", getScoreColor(animatedScore))}>
              {animatedScore}
            </span>
            <span className="text-sm text-muted-foreground mt-1">out of 100</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center relative z-10">
        <p className={cn("text-sm font-medium", 
          score >= 70 ? "text-green-400" : 
          score >= 35 ? "text-amber-400" : 
          "text-red-400"
        )}>
          {score >= 70 
            ? "Excellent! Your site is well-optimized."
            : score >= 35 
              ? "Needs improvement to compete effectively."
              : "Critical issues need immediate attention."}
        </p>
        
        {relevanceTier && (
          <div className="mt-4">
            <span className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
              getRelevanceColor(relevanceTier)
            )}>
              <Target className="h-4 w-4" />
              {relevanceTier}
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SEOScoreCard;
