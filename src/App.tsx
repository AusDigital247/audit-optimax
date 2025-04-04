
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { HelmetProvider } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import Index from './pages/Index';
import NotFound from './pages/NotFound';
import SeoToronto from './pages/SeoToronto';
import SeoOttawa from './pages/SeoOttawa';
import SeoKitchener from './pages/SeoKitchener';
import SeoBuffalo from './pages/SeoBuffalo';
import SeoLondon from './pages/SeoLondon';
import SeoVancouver from './pages/SeoVancouver';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Services from './pages/Services';
import SeoServices from './pages/SeoServices';
import LocalSeo from './pages/LocalSeo';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RankChecker from './pages/RankChecker';
import KeywordGenerator from './pages/KeywordGenerator';
import BlogContentGenerator from './pages/BlogContentGenerator';
import ParagraphRewriter from './pages/ParagraphRewriter';
import SentenceRewriter from './pages/SentenceRewriter';

// Import blog posts
import SeoStrategy2025 from './pages/BlogPosts/SeoStrategy2025';
import ImageSeo from './pages/BlogPosts/ImageSeo';
import YoutubeSeo from './pages/BlogPosts/YoutubeSeo';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      gcTime: 1000 * 60 * 60, // 1 hour
    },
  },
});

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Check system preference for dark mode and set initial theme
  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }

    // Listen for changes in color scheme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setTheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setTheme('light');
        document.documentElement.classList.remove('dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      return newTheme;
    });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <HelmetProvider>
          <Router>
            <div className={`flex flex-col min-h-screen w-full ${theme === 'light' ? 'bg-light-bg' : 'bg-navy'}`}>
              <Header />
              <main className="flex-grow w-full">
                <div className="fixed z-50 top-20 right-16 flex gap-2">
                  <ThemeToggle currentTheme={theme} toggleTheme={toggleTheme} />
                  <LanguageSwitcher />
                </div>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/seo-toronto" element={<SeoToronto />} />
                  <Route path="/seo-ottawa" element={<SeoOttawa />} />
                  <Route path="/seo-kitchener" element={<SeoKitchener />} />
                  <Route path="/seo-buffalo" element={<SeoBuffalo />} />
                  <Route path="/seo-london" element={<SeoLondon />} />
                  <Route path="/seo-vancouver" element={<SeoVancouver />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/seo" element={<SeoServices />} />
                  <Route path="/services/local-seo" element={<LocalSeo />} />
                  <Route path="/terms" element={<TermsConditions />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  
                  {/* Updated route paths for tools */}
                  <Route path="/google-rank-checker-tool" element={<RankChecker />} />
                  <Route path="/keyword-generator-tool" element={<KeywordGenerator />} />
                  <Route path="/blog-ideas-generator" element={<BlogContentGenerator />} />
                  <Route path="/paragraph-rewriter-tool" element={<ParagraphRewriter />} />
                  <Route path="/sentence-rewriter-tool" element={<SentenceRewriter />} />
                  
                  {/* Blog post routes */}
                  <Route path="/blog/seo-strategy-2025" element={<SeoStrategy2025 />} />
                  <Route path="/blog/image-seo" element={<ImageSeo />} />
                  <Route path="/blog/youtube-seo" element={<YoutubeSeo />} />
                  
                  {/* Legacy routes - keep them for backward compatibility */}
                  <Route path="/rank-checker" element={<RankChecker />} />
                  <Route path="/keyword-generator" element={<KeywordGenerator />} />
                  <Route path="/blog-content-generator" element={<BlogContentGenerator />} />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster />
          </Router>
        </HelmetProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
