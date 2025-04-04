
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';

// Import pages
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogIdeasGeneratorToolPage from './pages/tools/BlogIdeasGenerator';
import RankCheckerPage from './pages/tools/RankChecker';
import ParagraphRewriter from './pages/tools/ParagraphRewriter';
import SentenceRewriter from './pages/tools/SentenceRewriter';
import KeywordGenerator from './pages/tools/KeywordGenerator';
import ParaphrasingTool from './pages/ParaphrasingTool';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

// Import SEO pages
import SeoToronto from './pages/SeoToronto';
import SeoOttawa from './pages/SeoOttawa';
import SeoKitchener from './pages/SeoKitchener';
import SeoLondon from './pages/SeoLondon';
import SeoVancouver from './pages/SeoVancouver';
import SeoBuffalo from './pages/SeoBuffalo';
import LocalSEO from './pages/LocalSEO';
import SEOService from './pages/SEOService';

// Import SEO tools pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tools/blog-ideas-generator" element={<BlogIdeasGeneratorToolPage />} />
            <Route path="/tools/rank-checker" element={<RankCheckerPage />} />
            <Route path="/tools/paragraph-rewriter" element={<ParagraphRewriter />} />
            <Route path="/tools/sentence-rewriter" element={<SentenceRewriter />} />
            <Route path="/tools/keyword-generator" element={<KeywordGenerator />} />
            <Route path="/tools/paraphrasing-tool" element={<ParaphrasingTool />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/seo-toronto" element={<SeoToronto />} />
            <Route path="/seo-ottawa" element={<SeoOttawa />} />
            <Route path="/seo-kitchener" element={<SeoKitchener />} />
            <Route path="/seo-london" element={<SeoLondon />} />
            <Route path="/seo-vancouver" element={<SeoVancouver />} />
            <Route path="/seo-buffalo" element={<SeoBuffalo />} />
            <Route path="/local-seo" element={<LocalSEO />} />
            <Route path="/seo-services" element={<SEOService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
