
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SEOScoreCardProps {
  score: number;
  className?: string;
}

const SEOScoreCard = ({ score, className }: SEOScoreCardProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  
  // Determine color based on score
  const getScoreColor = (value: number) => {
    if (value >= 80) return "text-seo-good";
    if (value >= 60) return "text-seo-warning";
    return "text-seo-bad";
  };

  const getScoreBackground = (value: number) => {
    if (value >= 80) return "from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/10";
    if (value >= 60) return "from-amber-100 to-amber-50 dark:from-amber-900/20 dark:to-amber-800/10";
    return "from-red-100 to-red-50 dark:from-red-900/20 dark:to-red-800/10";
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
        "glass p-6 rounded-xl shadow-md relative overflow-hidden", 
        className
      )}
    >
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-20", 
        getScoreBackground(score)
      )} />
      
      <h3 className="text-xl font-semibold mb-3 text-center relative z-10">Overall SEO Score</h3>
      
      <div className="flex justify-center items-center relative z-10">
        <div className="relative flex items-center justify-center">
          <svg width="140" height="140" viewBox="0 0 140 140">
            {/* Background circle */}
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="12"
              className="dark:stroke-gray-700"
            />
            {/* Progress circle with gradient */}
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={score >= 80 ? "#22c55e" : score >= 60 ? "#f59e0b" : "#ef4444"} />
                <stop offset="100%" stopColor={score >= 80 ? "#4ade80" : score >= 60 ? "#fbbf24" : "#f87171"} />
              </linearGradient>
            </defs>
            <circle
              cx="70"
              cy="70"
              r="55"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="progress-ring-circle"
              transform="rotate(-90 70 70)"
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
            <span className={cn("text-4xl font-bold", getScoreColor(animatedScore))}>
              {animatedScore}
            </span>
            <span className="text-sm text-muted-foreground mt-1">out of 100</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center relative z-10">
        <p className={cn("text-sm", 
          score >= 80 ? "text-green-800 dark:text-green-400" : 
          score >= 60 ? "text-amber-800 dark:text-amber-400" : 
          "text-red-800 dark:text-red-400"
        )}>
          {score >= 80 
            ? "Excellent! Your site is well-optimized."
            : score >= 60 
              ? "Good, but there's room for improvement."
              : "Needs significant improvement."}
        </p>
      </div>
    </motion.div>
  );
};

export default SEOScoreCard;
