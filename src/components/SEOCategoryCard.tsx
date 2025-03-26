
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SEOCheckItem {
  name: string;
  status: 'pass' | 'fail' | 'warning' | 'info';
  message: string;
}

interface SEOCategoryCardProps {
  title: string;
  items: SEOCheckItem[];
  className?: string;
  delay?: number;
}

const SEOCategoryCard = ({ 
  title, 
  items, 
  className, 
  delay = 0 
}: SEOCategoryCardProps) => {
  
  // Calculate a simple score based on passed checks
  const passedCount = items.filter(item => item.status === 'pass').length;
  const score = items.length > 0 ? Math.round((passedCount / items.length) * 100) : 0;
  
  // Determine status icon and color
  const getStatusIcon = (status: SEOCheckItem['status']) => {
    switch (status) {
      case 'pass':
        return <Check className="h-4 w-4 text-seo-good" />;
      case 'fail':
        return <X className="h-4 w-4 text-seo-bad" />;
      case 'warning':
        return <Info className="h-4 w-4 text-seo-warning" />;
      default:
        return <Info className="h-4 w-4 text-seo-blue" />;
    }
  };
  
  const getStatusColor = (status: SEOCheckItem['status']) => {
    switch (status) {
      case 'pass':
        return 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800/50';
      case 'fail':
        return 'bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800/50';
      case 'warning':
        return 'bg-amber-50 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800/50';
      default:
        return 'bg-blue-50 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800/50';
    }
  };

  const getTextColor = (status: SEOCheckItem['status']) => {
    switch (status) {
      case 'pass':
        return 'text-green-800 dark:text-green-300';
      case 'fail':
        return 'text-red-800 dark:text-red-300';
      case 'warning':
        return 'text-amber-800 dark:text-amber-300';
      default:
        return 'text-blue-800 dark:text-blue-300';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className={cn(
        "glass rounded-xl shadow-md overflow-hidden",
        className
      )}
    >
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex items-center">
          <div className={cn(
            "px-2 py-1 rounded-full text-xs font-medium",
            score >= 80 ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
            score >= 60 ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" :
            "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
          )}>
            {score}%
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay * 0.1 + index * 0.05 }}
            className="p-4 hover:bg-muted/20 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                {getStatusIcon(item.status)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className={cn(
                  "text-xs mt-1 px-2 py-1 rounded-md border",
                  getStatusColor(item.status),
                  getTextColor(item.status)
                )}>
                  {item.message}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SEOCategoryCard;
