
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SEOFormProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
  className?: string;
}

const SEOForm = ({ onSubmit, isLoading, className }: SEOFormProps) => {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a valid URL');
      return;
    }

    // Basic URL validation
    try {
      // Add https if not present
      let processedUrl = url;
      if (!/^https?:\/\//i.test(url)) {
        processedUrl = 'https://' + url;
      }
      
      new URL(processedUrl);
      setError('');
      onSubmit(processedUrl, keyword || undefined);
    } catch (err) {
      setError('Please enter a valid URL');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn("w-full max-w-3xl mx-auto glass p-8 rounded-xl shadow-lg", className)}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center">
            <Globe className="w-5 h-5 mr-2 text-teal" />
            <Label htmlFor="url" className="text-base font-medium text-white">
              Website URL
            </Label>
          </div>
          <div className="relative">
            <Input
              id="url"
              type="text"
              placeholder="Enter a website URL (e.g., example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={cn(
                "pl-4 pr-10 py-6 bg-navy border-teal/30 focus:border-teal rounded-lg text-base placeholder:text-muted-foreground",
                error ? "border-red-500 focus-visible:ring-red-500" : "focus-visible:ring-teal"
              )}
            />
          </div>
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm mt-1"
            >
              {error}
            </motion.p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <Search className="w-5 h-5 mr-2 text-teal" />
            <Label htmlFor="keyword" className="text-base font-medium text-white">
              Target Keyword (Optional)
            </Label>
          </div>
          <Input
            id="keyword"
            type="text"
            placeholder="Enter a keyword to check keyword optimization"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="pl-4 pr-10 py-6 bg-navy border-teal/30 focus:border-teal rounded-lg text-base placeholder:text-muted-foreground focus-visible:ring-teal"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button 
            type="submit" 
            className="w-full py-6 text-base font-medium rounded-lg transition-all"
            disabled={isLoading}
            size="lg"
          >
            {isLoading ? 'Analyzing...' : 'Analyze SEO'}
          </Button>
          
          <Button 
            type="button"
            variant="magenta" 
            className="w-full py-6 text-base font-medium rounded-lg transition-all"
            onClick={() => {
              setUrl('https://example.com');
              setKeyword('example');
            }}
            size="lg"
          >
            Try Demo
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default SEOForm;
