
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsConditions = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = language === 'en' ? 'Terms & Conditions - AUS Digital' : 'Conditions Générales - AUS Digital';
  }, [language]);
  
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-navy to-navy-light py-12 md:py-16 w-full">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Terms & Conditions
            </h1>
            <p className="text-lg text-white/80">
              Last Updated: June 1, 2023
            </p>
          </div>
        </div>
      </section>
      
      {/* Terms Content */}
      <section className="py-12 md:py-16 w-full bg-light-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-navy mb-4">1. Introduction</h2>
              <p className="text-navy/80 mb-6">
                Welcome to AUS Digital. These Terms and Conditions govern your use of our website, products, and services. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">2. Definitions</h2>
              <p className="text-navy/80 mb-2">For the purposes of these Terms and Conditions:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li>"Client" refers to the individual or organization that has engaged our services.</li>
                <li>"Company", "We", "Us", or "Our" refers to AUS Digital.</li>
                <li>"Website" refers to our official website and all its subdomains.</li>
                <li>"Services" refers to all SEO and digital marketing services provided by the Company.</li>
                <li>"Content" refers to all material appearing on our website, including text, images, videos, and interactive features.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">3. Services</h2>
              <p className="text-navy/80 mb-2">
                AUS Digital provides search engine optimization and digital marketing services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
              <p className="text-navy/80 mb-6">
                While we strive for excellence in our services, we cannot guarantee specific rankings or results as search engine algorithms are beyond our control.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">4. Client Responsibilities</h2>
              <p className="text-navy/80 mb-2">Clients agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-navy/80 mb-6">
                <li>Provide accurate and complete information as required for service delivery.</li>
                <li>Review and respond to communications from the Company in a timely manner.</li>
                <li>Comply with all applicable laws and regulations in relation to their business and website.</li>
                <li>Provide necessary access to websites, accounts, and platforms as required to perform the services.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-navy mb-4">5. Payment Terms</h2>
              <p className="text-navy/80 mb-2">
                Payment terms will be outlined in individual service agreements. Generally, clients are required to provide payment according to the agreed schedule.
              </p>
              <p className="text-navy/80 mb-6">
                We reserve the right to suspend services if payments are not received according to the agreed terms.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">6. Intellectual Property</h2>
              <p className="text-navy/80 mb-2">
                All content on our website, including logos, text, graphics, and software, is the property of AUS Digital or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-navy/80 mb-6">
                Clients retain all rights to their own content and materials provided to us for the purpose of delivering our services.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">7. Limitation of Liability</h2>
              <p className="text-navy/80 mb-2">
                To the maximum extent permitted by law, AUS Digital shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
              <p className="text-navy/80 mb-6">
                Our total liability for any claims arising from or related to our services shall not exceed the amounts paid by the client for the specific services that are the subject of the claim.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">8. Confidentiality</h2>
              <p className="text-navy/80 mb-6">
                We commit to maintaining the confidentiality of any proprietary information shared by clients during the course of our services. Similarly, clients agree to maintain the confidentiality of our proprietary methodologies and strategies.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">9. Termination</h2>
              <p className="text-navy/80 mb-6">
                Either party may terminate the service agreement as outlined in individual contracts. Upon termination, clients are responsible for payment of all services provided up to the termination date.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">10. Governing Law</h2>
              <p className="text-navy/80 mb-6">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">11. Changes to Terms</h2>
              <p className="text-navy/80 mb-6">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
              </p>
              
              <h2 className="text-2xl font-bold text-navy mb-4">12. Contact Information</h2>
              <p className="text-navy/80 mb-6">
                If you have any questions about these Terms and Conditions, please contact us through our contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
