
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import SeoToronto from './pages/SeoToronto';
import SeoKitchener from './pages/SeoKitchener';
import SeoLondon from './pages/SeoLondon';
import SeoBuffalo from './pages/SeoBuffalo';
import SeoOttawa from './pages/SeoOttawa';
import SeoVancouver from './pages/SeoVancouver';
import SeoServices from './pages/SeoServices';
import Index from './pages/Index';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LocalSeo from './pages/LocalSeo';
import NotFound from './pages/NotFound';
import RankChecker from './pages/RankChecker';
import KeywordGenerator from './pages/KeywordGenerator';
import BlogContentGenerator from './pages/BlogContentGenerator';
import ParagraphRewriter from './pages/ParagraphRewriter';
import SentenceRewriter from './pages/SentenceRewriter';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ImageSeo from './pages/BlogPosts/ImageSeo';
import YoutubeSeo from './pages/BlogPosts/YoutubeSeo';
import SeoStrategy2025 from './pages/BlogPosts/SeoStrategy2025';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';
import { LanguageProvider } from './contexts/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import Settings from './pages/Settings';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <ThemeToggle />
            <LanguageSwitcher />
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/seo-toronto" element={<SeoToronto />} />
                <Route path="/seo-kitchener" element={<SeoKitchener />} />
                <Route path="/seo-london" element={<SeoLondon />} />
                <Route path="/seo-buffalo" element={<SeoBuffalo />} />
                <Route path="/seo-ottawa" element={<SeoOttawa />} />
                <Route path="/seo-vancouver" element={<SeoVancouver />} />
                <Route path="/seo-services" element={<SeoServices />} />
                <Route path="/local-seo" element={<LocalSeo />} />
                <Route path="/settings" element={<Settings />} />
                
                {/* Tool Pages */}
                <Route path="/google-rank-checker-tool" element={<RankChecker />} />
                <Route path="/keyword-generator-tool" element={<KeywordGenerator />} />
                <Route path="/blog-ideas-generator" element={<BlogContentGenerator />} />
                <Route path="/paragraph-rewriter-tool" element={<ParagraphRewriter />} />
                <Route path="/sentence-rewriter-tool" element={<SentenceRewriter />} />
                
                {/* Blog Posts */}
                <Route path="/blog/image-seo-guide" element={<ImageSeo />} />
                <Route path="/blog/youtube-seo-guide" element={<YoutubeSeo />} />
                <Route path="/blog/seo-strategy-2025" element={<SeoStrategy2025 />} />
                
                {/* Legal Pages */}
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
            <Toaster />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
