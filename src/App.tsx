import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import GrammarChecker from './pages/tools/GrammarChecker';
import ConclusionGenerator from './pages/tools/ConclusionGenerator';
import InstagramBioGenerator from './pages/tools/InstagramBioGenerator';
import InstagramHashtagGenerator from './pages/tools/InstagramHashtagGenerator';
import InstagramNameGenerator from './pages/tools/InstagramNameGenerator';
import TiktokHashtagGenerator from './pages/tools/TiktokHashtagGenerator';
import TiktokUsernameGenerator from './pages/tools/TiktokUsernameGenerator';
import YoutubeDescriptionGenerator from './pages/tools/YoutubeDescriptionGenerator';
import YoutubeNameGenerator from './pages/tools/YoutubeNameGenerator';
import BulkAnchorLinkGenerator from './pages/tools/BulkAnchorLinkGenerator';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
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

// Redirect component to handle www to non-www and other canonical redirects
const CanonicalRedirect: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const host = window.location.host;
      const isWww = host.startsWith('www.');
      
      // Redirect www to non-www
      if (isWww) {
        const targetUrl = window.location.href.replace('www.', '');
        window.location.replace(targetUrl);
      }
      
      // Redirect /tools/ paths to their canonical versions
      if (location.pathname.startsWith('/tools/')) {
        const newPath = location.pathname.replace('/tools/', '/') + '-tool';
        navigate(newPath, { replace: true });
      }
    }
  }, [location, navigate]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <CanonicalRedirect />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* SEO Tool Pages - Original URL structure only */}
            <Route path="/blog-ideas-generator-tool" element={<BlogIdeasGeneratorToolPage />} />
            <Route path="/google-rank-checker-tool" element={<RankCheckerPage />} />
            <Route path="/paragraph-rewriter-tool" element={<ParagraphRewriter />} />
            <Route path="/sentence-rewriter-tool" element={<SentenceRewriter />} />
            <Route path="/keyword-generator-tool" element={<KeywordGenerator />} />
            <Route path="/paraphrasing-tool" element={<ParaphrasingTool />} />
            <Route path="/grammar-checker-tool" element={<GrammarChecker />} />
            <Route path="/conclusion-generator-tool" element={<ConclusionGenerator />} />
            <Route path="/instagram-bio-generator-tool" element={<InstagramBioGenerator />} />
            <Route path="/instagram-hashtag-generator-tool" element={<InstagramHashtagGenerator />} />
            <Route path="/instagram-name-generator-tool" element={<InstagramNameGenerator />} />
            <Route path="/tiktok-hashtag-generator-tool" element={<TiktokHashtagGenerator />} />
            <Route path="/tiktok-username-generator-tool" element={<TiktokUsernameGenerator />} />
            <Route path="/youtube-channel-description-generator-tool" element={<YoutubeDescriptionGenerator />} />
            <Route path="/youtube-name-generator-tool" element={<YoutubeNameGenerator />} />
            <Route path="/bulk-anchor-link-generator-tool" element={<BulkAnchorLinkGenerator />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
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
