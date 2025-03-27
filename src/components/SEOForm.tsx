
import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOFormProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOForm: React.FC<SEOFormProps> = ({ onSubmit, isLoading }) => {
  const { t } = useLanguage();
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [urlError, setUrlError] = useState('');

  const validateUrl = (value: string) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUrlError('');

    if (!url.trim()) {
      setUrlError(t('url_placeholder'));
      return;
    }

    const isValidUrl = validateUrl(url);
    if (!isValidUrl) {
      setUrlError('Please enter a valid URL (e.g., https://example.com)');
      return;
    }

    onSubmit(url, keyword ? keyword : undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="url" className="text-white mb-1.5 block">URL</Label>
          <Input
            id="url"
            type="text"
            placeholder={t('url_placeholder')}
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (urlError) setUrlError('');
            }}
            className={`${urlError ? 'border-red-500' : ''}`}
          />
          {urlError && <p className="text-red-400 text-sm mt-1">{urlError}</p>}
        </div>
        
        <div>
          <Label htmlFor="keyword" className="text-white mb-1.5 block">{t('keyword_placeholder')}</Label>
          <Input
            id="keyword"
            type="text"
            placeholder={t('keyword_placeholder')}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="bg-teal hover:bg-teal-light text-white font-medium w-full py-6"
        disabled={isLoading}
      >
        {t('analyze_button')}
      </Button>
    </form>
  );
};

export default SEOForm;
