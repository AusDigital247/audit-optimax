import React from 'react';
import SEOHead from '@/components/SEOHead';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Terms of Service | SEO Audit Tool"
        description="Terms of service for the SEO Audit Tool website and services. Read our terms and conditions before using our tools."
        keywords="terms of service, terms and conditions, SEO tool terms, user agreement, legal terms"
      />
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <div className="prose max-w-none">
          <p>Last updated: April 1, 2024</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using SEO Audit Tool, you agree to be bound by these Terms of Service.</p>
          
          <h2>2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms of Service.</p>
          
          <h2>3. User Accounts</h2>
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.</p>
          
          <h2>4. Intellectual Property</h2>
          <p>All content and materials available on SEO Audit Tool are the property of SEO Audit Tool or its licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>SEO Audit Tool shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, our services.</p>
          
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new Terms of Service on this page.</p>
          
          <h2>7. Termination</h2>
          <p>We may terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users of our services, us, or third parties, or for any other reason.</p>
          
          <h2>8. Governing Law</h2>
          <p>These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which SEO Audit Tool is established.</p>
          
          <h2>9. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at seoaudittoolofficial@gmail.com.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
