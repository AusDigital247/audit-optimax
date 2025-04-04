
import React from 'react';
import { useParams } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const CityPage: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  
  // Format city name for display (convert "toronto" to "Toronto")
  const formatCityName = (cityName: string): string => {
    return cityName.charAt(0).toUpperCase() + cityName.slice(1);
  };
  
  const displayCity = city ? formatCityName(city) : '';
  
  return (
    <div className="min-h-screen">
      <SEOHead
        title={`SEO Services in ${displayCity} | Local SEO Experts`}
        description={`Professional SEO services in ${displayCity}. Boost your local business visibility with our specialized SEO strategies tailored for ${displayCity} businesses.`}
        canonicalPath={`/seo-${city?.toLowerCase()}`}
        keywords={`${displayCity} SEO, SEO services ${displayCity}, local SEO ${displayCity}, ${displayCity} search engine optimization, SEO agency ${displayCity}`}
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">{displayCity} SEO Services</h1>
        <p className="text-lg text-center mb-10">
          Specialized SEO strategies for businesses in {displayCity}
        </p>
        
        {/* Content for the City SEO page */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Local SEO for {displayCity} Businesses</h2>
            <p className="mb-4">
              We help businesses in {displayCity} improve their visibility in local search results with our specialized local SEO strategies.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google Business Profile optimization</li>
              <li>Local citation building</li>
              <li>Local link building</li>
              <li>Local content marketing</li>
              <li>{displayCity}-focused keyword optimization</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Why Choose Us for {displayCity} SEO</h2>
            <p className="mb-4">
              Our team has deep experience working with businesses in {displayCity} and understands the local market dynamics.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>In-depth knowledge of {displayCity} market</li>
              <li>Proven results for local businesses</li>
              <li>Customized strategies for your business</li>
              <li>Transparent reporting and communication</li>
              <li>Affordable packages for businesses of all sizes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityPage;
