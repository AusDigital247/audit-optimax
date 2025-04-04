
import React from 'react';
import SEOHead from '@/components/SEOHead';

const SEOService: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Professional SEO Services | Boost Your Search Rankings"
        description="Our comprehensive SEO services help businesses improve organic search visibility, increase targeted traffic, and achieve higher conversion rates."
        keywords="SEO services, search engine optimization, SEO experts, SEO agency, SEO consulting"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Our SEO Services</h1>
        <p className="text-lg text-center mb-10">
          Comprehensive SEO strategies tailored to your business goals
        </p>
        
        {/* Content for the SEO Services page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Technical SEO</h2>
            <p>Optimize your website's technical aspects to improve crawlability and indexing.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">On-Page SEO</h2>
            <p>Optimize your content and HTML source code for better search engine rankings.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Off-Page SEO</h2>
            <p>Build high-quality backlinks and improve your website's authority.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOService;
