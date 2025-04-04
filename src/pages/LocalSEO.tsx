
import React from 'react';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Search, Building, Users, CheckCircle2 } from 'lucide-react';

const LocalSEO: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Local SEO Services | Dominate Local Search Results"
        description="Maximize your local business visibility with our specialized local SEO services. Improve Google Business Profile, local citations, and rank higher in local searches."
        keywords="local SEO, local search optimization, Google My Business, local citations, local business SEO"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Local SEO Services</h1>
        <p className="text-lg text-center mb-10">
          Attract more local customers with targeted local search optimization
        </p>
        
        {/* Content for the Local SEO page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Google Business Profile</h2>
            <p>Optimize your Google Business Profile to improve local visibility and attract nearby customers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Local Citations</h2>
            <p>Build consistent citations across local directories to boost your local search presence.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-3">Local Link Building</h2>
            <p>Develop relationships with local businesses and organizations to build quality local backlinks.</p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Search className="w-4 h-4 mr-2" /> Get a Free Local SEO Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocalSEO;
