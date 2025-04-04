
import React from 'react';
import SEOHead from '@/components/SEOHead';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms and Conditions | SEO Audit Tool"
        description="Terms and conditions for using the SEO Audit Tool website and services."
        canonicalPath="/terms"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p>Last updated: April 1, 2024</p>
          
          <h2>1. Introduction</h2>
          <p>Welcome to SEO Audit Tool. These terms and conditions govern your use of our website and services.</p>
          
          <h2>2. Acceptance of Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our website.</p>
          
          <h2>3. Use of Services</h2>
          <p>Our services are provided for personal and commercial use. You may not use our services for any illegal or unauthorized purpose.</p>
          
          <h2>4. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, images, and software, is the property of SEO Audit Tool and is protected by copyright laws.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>We strive to provide accurate and reliable information, but we make no representations about the suitability, reliability, availability, or accuracy of the information on our website.</p>
          
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these terms at any time. Your continued use of our website after such changes constitutes your acceptance of the new terms.</p>
          
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these terms, please contact us at seoaudittoolofficial@gmail.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
