
import React from 'react';
import { Link } from 'react-router-dom';

interface ContentBlock {
  title: string;
  content: string;
}

interface CaseStudy {
  title: string;
  description: string;
}

interface ExpertTip {
  title: string;
  description: string;
}

interface HumanSEOContentProps {
  mainContentBlocks: ContentBlock[];
  caseStudies: CaseStudy[];
  expertTips: ExpertTip[];
  toolName: string;
  relatedTools?: Array<{
    name: string;
    path: string;
    description?: string;
  }>;
  conclusionContent?: string;
}

const HumanSEOContent: React.FC<HumanSEOContentProps> = ({
  mainContentBlocks,
  caseStudies,
  expertTips,
  toolName,
  relatedTools = [],
  conclusionContent
}) => {
  return (
    <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
      {mainContentBlocks.map((block, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">
            {block.title}
          </h2>
          <div className="text-navy-light dark:text-white/90 mb-8 whitespace-pre-wrap">
            <p>{block.content}</p>
          </div>
        </div>
      ))}
      
      <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">
        Real-World Success Stories with {toolName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {caseStudies.map((study, index) => (
          <div 
            key={index} 
            className="bg-white/50 dark:bg-navy/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-navy dark:text-white">{study.title}</h3>
            <p className="text-navy-light dark:text-white/80 text-sm">{study.description}</p>
          </div>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">
        Expert Tips from Industry Professionals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {expertTips.map((tip, index) => (
          <div 
            key={index} 
            className="bg-white/50 dark:bg-navy/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3 text-navy dark:text-white">{tip.title}</h3>
            <p className="text-navy-light dark:text-white/80 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
      
      {conclusionContent && (
        <>
          <h2 className="text-2xl font-bold mb-6 text-navy dark:text-white">
            Making the Most of {toolName}
          </h2>
          <div className="text-navy-light dark:text-white/90 mb-12">
            <p>{conclusionContent}</p>
          </div>
        </>
      )}
      
      {relatedTools && relatedTools.length > 0 && (
        <div className="bg-white/30 dark:bg-navy/30 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
          <h3 className="text-xl font-semibold mb-4 text-navy dark:text-white">Enhance Your Strategy with Related Tools</h3>
          <p className="text-navy-light dark:text-white/80 mb-4">
            Based on my experience helping clients optimize their digital presence, these complementary tools work particularly well with {toolName}:
          </p>
          <div className="flex flex-col space-y-3">
            {relatedTools.map((tool, index) => (
              <Link 
                key={index}
                to={tool.path}
                className="text-teal hover:text-teal-dark dark:text-teal-light dark:hover:text-white transition-colors flex items-start"
              >
                <span className="inline-block w-2 h-2 bg-teal dark:bg-teal-light rounded-full mt-2 mr-2"></span>
                <div>
                  <span className="font-medium">{tool.name}</span>
                  {tool.description && (
                    <span className="text-sm text-navy-light dark:text-white/70 block">
                      {tool.description}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-navy-light dark:text-white/80 italic">
            "In my consulting practice, I've found that integrating these tools creates a more comprehensive approach to digital optimization."
          </p>
        </div>
      )}
    </div>
  );
};

export default HumanSEOContent;
