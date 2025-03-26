import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, AlertTriangle, Info, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export interface SEOCheckItem {
  name: string;
  status: 'pass' | 'fail' | 'warning' | 'info';
  message: string;
  points?: number; // Points value for this check
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
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Calculate total points possible and earned points using actual points property
  const totalPoints = items
    .filter(item => item.status !== 'info')
    .reduce((acc, item) => acc + (item.points || 1), 0);
  
  const earnedPoints = items.reduce((acc, item) => {
    if (item.status === 'pass') return acc + (item.points || 1);
    if (item.status === 'warning') return acc + (item.points ? item.points * 0.5 : 0.5);
    return acc;
  }, 0);
  
  // Calculate percentage score
  const score = totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0;
  
  // Count items by status
  const passedCount = items.filter(item => item.status === 'pass').length;
  const warningCount = items.filter(item => item.status === 'warning').length;
  const failedCount = items.filter(item => item.status === 'fail').length;
  const infoCount = items.filter(item => item.status === 'info').length;
  
  // Determine status icon and color
  const getStatusIcon = (status: SEOCheckItem['status']) => {
    switch (status) {
      case 'pass':
        return <Check className="h-4 w-4 text-seo-good" />;
      case 'fail':
        return <X className="h-4 w-4 text-seo-bad" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-seo-warning" />;
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
  
  const getBadgeColor = (status: SEOCheckItem['status']) => {
    switch (status) {
      case 'pass':
        return 'bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-800/20 dark:text-green-300 dark:hover:bg-green-800/30';
      case 'fail':
        return 'bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-800/20 dark:text-red-300 dark:hover:bg-red-800/30';
      case 'warning':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-100 dark:bg-amber-800/20 dark:text-amber-300 dark:hover:bg-amber-800/30';
      default:
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-800/20 dark:text-blue-300 dark:hover:bg-blue-800/30';
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
      <div 
        className="p-4 border-b border-border flex items-center justify-between cursor-pointer hover:bg-muted/20 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-2">
          <h3 className="font-medium text-lg">{title}</h3>
          
          <div className="flex items-center gap-1 ml-2">
            {passedCount > 0 && (
              <Badge variant="outline" className={getBadgeColor('pass')}>
                <Check className="mr-1 h-3 w-3" />
                {passedCount}
              </Badge>
            )}
            
            {warningCount > 0 && (
              <Badge variant="outline" className={getBadgeColor('warning')}>
                <AlertTriangle className="mr-1 h-3 w-3" />
                {warningCount}
              </Badge>
            )}
            
            {failedCount > 0 && (
              <Badge variant="outline" className={getBadgeColor('fail')}>
                <X className="mr-1 h-3 w-3" />
                {failedCount}
              </Badge>
            )}
            
            {infoCount > 0 && (
              <Badge variant="outline" className={getBadgeColor('info')}>
                <Info className="mr-1 h-3 w-3" />
                {infoCount}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center">
          <div className={cn(
            "px-2 py-1 rounded-full text-xs font-medium mr-2",
            score >= 80 ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" :
            score >= 60 ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300" :
            "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
          )}>
            {score}%
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </div>
      </div>
      
      {isExpanded && (
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
                    "text-xs mt-1 px-2 py-1.5 rounded-md border",
                    getStatusColor(item.status),
                    getTextColor(item.status)
                  )}>
                    {item.message}
                  </p>
                  {item.points && item.status === 'pass' && (
                    <p className="text-xs mt-1 text-green-600 dark:text-green-400">
                      +{item.points} points
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SEOCategoryCard;
