
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
        title="AI Keyword Generator Tool | Find High-Value SEO Keywords"
        description="Discover profitable SEO keywords for your content with our free AI keyword generator tool. Generate hundreds of relevant keyword ideas to improve your search visibility and traffic."
        keywords="keyword generator, SEO keywords, keyword research, keyword ideas, keyword finder, SEO tool, content keywords"
        canonicalPath="/tools/keyword-generator"
      />
      <div className="container mx-auto py-10 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy dark:text-white">AI Keyword Generator Tool</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover high-performing keywords for your content strategy. Our AI-powered tool generates relevant keyword ideas to boost your search visibility and attract targeted traffic.
          </p>
        </div>
        
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
        
        <div className="prose prose-lg dark:prose-invert max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Keyword Research Is Essential for SEO Success</h2>
          <p>
            Effective keyword research forms the foundation of any successful SEO strategy. By identifying the search terms your target audience uses, you can create content that answers their questions, solves their problems, and appears in relevant search results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Drive Targeted Traffic</h3>
              <p>Target keywords that attract visitors who are actively searching for what you offer, increasing the likelihood of conversions and engagement.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Understand User Intent</h3>
              <p>Discover what your audience is actually searching for, allowing you to create content that addresses their specific needs and questions.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Identify Opportunities</h3>
              <p>Uncover low-competition, high-value keyword opportunities that your competitors might have overlooked, giving you a competitive edge.</p>
            </div>
            
            <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Optimize Content Strategy</h3>
              <p>Use keyword insights to plan and create content that aligns with what your audience is searching for, improving relevance and engagement.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">How to Use Keywords Effectively in Your Content</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Strategic Keyword Placement</h3>
          <p>
            While keyword stuffing is detrimental to SEO, strategic placement of keywords in key areas of your content helps search engines understand your topic. Include your target keywords in these important locations:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Page title and H1 heading</li>
            <li>URL structure (when possible)</li>
            <li>First 100 words of your content</li>
            <li>Subheadings (H2, H3) where relevant</li>
            <li>Image alt text for relevant images</li>
            <li>Meta description (doesn't directly impact rankings but affects click-through rates)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Focus on Semantic Relevance</h3>
          <p>
            Modern SEO goes beyond exact keyword matching. Search engines now understand related terms and concepts (semantic SEO). Include LSI (Latent Semantic Indexing) keywords—related terms and synonyms that provide context and help search engines better understand your content's relevance to user queries.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Create Topic Clusters</h3>
          <p>
            Organize your content into topic clusters, with a comprehensive "pillar" page targeting a primary keyword and multiple related articles targeting long-tail variations. This structure helps establish topical authority and creates a strong internal linking structure that improves SEO.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Match Search Intent</h3>
          <p>
            Understanding the intent behind keywords is crucial. Different keywords serve different purposes—informational (looking for answers), navigational (looking for a specific site), commercial (researching products), or transactional (ready to buy). Ensure your content matches the search intent to satisfy user needs and rank effectively.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-6">Types of Keywords for Comprehensive SEO Strategy</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Short-Tail Keywords</h3>
          <p>
            These are typically 1-2 word phrases with high search volume but also high competition. While difficult to rank for, they're important for broader visibility and brand awareness. Examples include "digital marketing," "running shoes," or "web design."
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Long-Tail Keywords</h3>
          <p>
            Longer, more specific phrases (usually 3+ words) with lower search volume but higher conversion potential and less competition. These highly targeted keywords often indicate users further along the buying journey. Examples include "best running shoes for flat feet" or "affordable web design for small businesses."
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Question Keywords</h3>
          <p>
            Search queries framed as questions (who, what, where, when, why, how) are excellent for capturing featured snippets and targeting voice search. They typically indicate informational intent and can bring highly engaged traffic. Examples include "how to optimize a website for SEO" or "what is the best time to post on Instagram."
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Local Keywords</h3>
          <p>
            Geo-specific terms that include location names are essential for businesses serving specific geographic areas. These help capture local search traffic and appear in map results. Examples include "web designer in Toronto" or "New York coffee shops."
          </p>
          
          <div className="bg-gray-100 dark:bg-navy-light p-6 rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-4">Start Discovering Valuable Keywords Today</h2>
            <p className="mb-4">
              Whether you're launching a new website, planning your content calendar, or looking to improve your existing SEO strategy, our free keyword generator tool provides the insights you need to make data-driven decisions.
            </p>
            <p>
              Simply enter a seed keyword related to your business or content topic, and our AI-powered tool will generate a comprehensive list of keyword ideas to fuel your SEO and content marketing efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordGenerator;
