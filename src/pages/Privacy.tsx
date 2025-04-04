
import React from 'react';
import SEOHead from '@/components/SEOHead';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Privacy Policy | SEO Audit Tool"
        description="Privacy policy for the SEO Audit Tool website and services. Learn how we collect, use, and protect your data."
        canonicalPath="/privacy"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>Last updated: April 1, 2024</p>
          
          <h2>1. Introduction</h2>
          <p>This Privacy Policy explains how SEO Audit Tool collects, uses, and protects your personal information when you use our website and services.</p>
          
          <h2>2. Information We Collect</h2>
          <p>We may collect personal information such as your name, email address, and website URL when you use our services or contact us.</p>
          
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to provide and improve our services, communicate with you, and comply with legal obligations.</p>
          
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to enhance your experience on our website and analyze how our website is used.</p>
          
          <h2>5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
          
          <h2>6. Third-Party Services</h2>
          <p>We may use third-party services to help us operate our website and provide our services. These services may collect information sent by your browser as part of their standard operations.</p>
          
          <h2>7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You can contact us to exercise these rights.</p>
          
          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          
          <h2>9. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at seoaudittoolofficial@gmail.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
