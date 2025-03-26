
import React from 'react';
import SEOContentSection from './SEOContentSection';
import SEOForm from './SEOForm';

interface SEOContainerProps {
  onSubmit: (url: string, keyword?: string) => void;
  isLoading: boolean;
}

const SEOContainer: React.FC<SEOContainerProps> = ({ onSubmit, isLoading }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy to-navy-light">
      <div className="container-custom py-8 md:py-12">
        <SEOContentSection />
        
        <div className="py-8 md:py-16">
          <SEOForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default SEOContainer;
