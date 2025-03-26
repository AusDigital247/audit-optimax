
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
    if (value >= 80) return "from-green-100 to-green-50";
    if (value >= 60) return "from-amber-100 to-amber-50";
    return "from-red-100 to-red-50";
  };

  // Animate the score counting up
  useEffect(() => {
    const duration = 1000; // 1 second animation
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
      <div className="absolute inset-0 bg-gradient-to-br opacity-10"
        style={{
          backgroundImage: `linear-gradient(to bottom right, 
            var(--tw-gradient-stops))`,
        }}
      />
      
      <h3 className="text-xl font-semibold mb-3 text-center">Overall SEO Score</h3>
      
      <div className="flex justify-center items-center">
        <div className="relative flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="rgba(0,0,0,0.1)"
              strokeWidth="10"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke={score >= 80 ? "#4ade80" : score >= 60 ? "#fbbf24" : "#f87171"}
              strokeWidth="10"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="progress-ring-circle"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor(animatedScore)}`}>
              {animatedScore}
            </span>
            <span className="text-sm text-muted-foreground">out of 100</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
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
