
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export interface SEOItem {
  name: string;
  status: 'pass' | 'fail' | 'warning' | 'info';
  message: string;
  points: number;
  link?: string;
}

export interface SEOCategory {
  title: string;
  items: SEOItem[];
}

interface SEOResultsProps {
  url: string;
  keyword?: string;
  score: number;
  categories: SEOCategory[];
  contentFetched: boolean;
  onReset: () => void;
}

const SEOResults: React.FC<SEOResultsProps> = ({ url, keyword, score, categories, contentFetched, onReset }) => {
  const getStatusIcon = (status: SEOItem['status']) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'fail':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <HelpCircle className="h-5 w-5 text-blue-500" />;
    }
  };

  const getScoreColorClass = (score: number): string => {
    if (score >= 80) {
      return 'text-green-500';
    } else if (score >= 60) {
      return 'text-yellow-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">SEO Analysis Results</h2>
          <p className="text-white/80">
            Analysis for <a href={url} target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">{url}</a>
            {keyword && <>, Keyword: <span className="font-semibold">{keyword}</span></>}
          </p>
        </div>
        <button
          onClick={onReset}
          className="px-4 py-2 bg-navy-light text-white rounded-lg hover:bg-navy transition-colors"
        >
          Analyze Another Website
        </button>
      </div>

      <div className="bg-white/90 dark:bg-navy/70 p-6 rounded-xl shadow-lg border border-gray-300 dark:border-white/20">
        <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Overall Score</h3>
        <div className="flex items-center">
          <div className={`text-4xl font-bold mr-3 ${getScoreColorClass(score)}`}>{score.toFixed(1)}</div>
          <p className="text-navy-dark dark:text-white/90">Out of 100</p>
        </div>
      </div>

      {categories.map((category, index) => (
        <div key={index} className="bg-white/90 dark:bg-navy/70 rounded-xl shadow-lg border border-gray-300 dark:border-white/20 p-6">
          <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">{category.title}</h3>
          <ul className="space-y-3">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-3">
                {getStatusIcon(item.status)}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-navy-dark dark:text-white/90">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.points.toFixed(1)} points</span>
                  </div>
                  <p className="text-sm text-navy-light dark:text-gray-400">{item.message}</p>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-teal hover:underline text-sm">
                      Learn more <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {!contentFetched && (
        <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Content Not Fetched!</strong>
          <span className="block sm:inline">The content of the page could not be fetched. This might be due to network issues or the site blocking our crawler. Some analysis might be incomplete.</span>
        </div>
      )}
    </div>
  );
};

export default SEOResults;
