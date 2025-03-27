
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'Privacy Policy - AUS Digital' : 'Politique de Confidentialité - AUS Digital';
  }, [language]);
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-12 md:py-16 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80">
              Last Updated: June 1, 2023
            </p>
          </div>
        </div>
      </section>
      
      {/* Privacy Content */}
      <section className="py-12 md:py-16 w-full bg-light-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-navy mb-4">1. Introduction</h2>
              <p className="text-navy/80 mb-6">
                At AUS Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you about how we handle your personal information when you visit our website or use our services, and tells you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">2. Information We Collect</h2>
              <p className="text-navy/80 mb-2">We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> Includes billing address, delivery address, email address, and telephone numbers.</li>
                <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
                <li><strong>Usage Data:</strong> Includes information about how you use our website and services.</li>
                <li><strong>Marketing Data:</strong> Includes your preferences in receiving marketing from us and our third parties.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">3. How We Collect Your Personal Data</h2>
              <p className="text-navy/80 mb-2">We use different methods to collect data from and about you including through:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li><strong>Direct Interactions:</strong> You may give us your identity and contact data by filling in forms on our website, or by corresponding with us by mail, phone, email, or otherwise.</li>
                <li><strong>Automated Technologies:</strong> As you interact with our website, we may automatically collect technical data about your browsing actions and patterns. We collect this data by using cookies and other similar technologies.</li>
                <li><strong>Third Parties:</strong> We may receive personal data about you from various third parties, such as analytics providers and advertising networks.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">4. How We Use Your Personal Data</h2>
              <p className="text-navy/80 mb-2">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li>To provide and improve our services.</li>
                <li>To respond to your inquiries and fulfill your requests.</li>
                <li>To send administrative information, such as changes to our terms, conditions, and policies.</li>
                <li>To personalize your experience on our website.</li>
                <li>To deliver relevant website content and advertisements to you.</li>
                <li>To measure or understand the effectiveness of the advertising we serve to you.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">5. Data Security</h2>
              <p className="text-navy/80 mb-6">
                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">6. Data Retention</h2>
              <p className="text-navy/80 mb-6">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">7. Cookies</h2>
              <p className="text-navy/80 mb-6">
                Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">8. Your Legal Rights</h2>
              <p className="text-navy/80 mb-2">Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">9. Third-Party Links</h2>
              <p className="text-navy/80 mb-6">
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">10. Changes to the Privacy Policy</h2>
              <p className="text-navy/80 mb-6">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">11. Contact Us</h2>
              <p className="text-navy/80 mb-6">
                If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@ausdigital.com or call us at (+1) 416-555-0123.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
