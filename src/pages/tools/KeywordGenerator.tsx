
import React from 'react';
import SEOHead from '@/components/SEOHead';
import KeywordGeneratorForm from '@/components/KeywordGeneratorForm';
import { useState } from 'react';

const KeywordGenerator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleSubmit = (values: any) => {
    setIsLoading(true);
    // Mock API call - in a real app, you would call your API here
    setTimeout(() => {
      setResults({
        keywords: [
          { keyword: values.seedKeyword + " guide", volume: "1.2k", difficulty: "Medium" },
          { keyword: "best " + values.seedKeyword, volume: "890", difficulty: "High" },
          { keyword: values.seedKeyword + " tutorial", volume: "750", difficulty: "Low" },
          { keyword: "how to " + values.seedKeyword, volume: "2.3k", difficulty: "Medium" },
          { keyword: values.seedKeyword + " tips", volume: "670", difficulty: "Low" },
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Keyword Generator Tool | Find SEO Keywords for Your Content"
        description="Generate relevant SEO keywords for your content with our free keyword generator tool. Discover new keyword ideas to improve your search visibility."
        keywords="keyword generator, SEO keywords, keyword research, keyword ideas, keyword finder"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Keyword Generator Tool</h1>
        <KeywordGeneratorForm onSubmit={handleSubmit} isLoading={isLoading} />
        
        {results && (
          <div className="mt-8 border rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Generated Keywords</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Keyword</th>
                    <th className="px-4 py-2 text-left">Search Volume</th>
                    <th className="px-4 py-2 text-left">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {results.keywords.map((item: any, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2 border-t">{item.keyword}</td>
                      <td className="px-4 py-2 border-t">{item.volume}</td>
                      <td className="px-4 py-2 border-t">{item.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KeywordGenerator;
