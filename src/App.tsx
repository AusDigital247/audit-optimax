
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

// Lazy load pages for better performance
const Index = lazy(() => import('@/pages/Index'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const SEOService = lazy(() => import('@/pages/SEOService'));
const LocalSEO = lazy(() => import('@/pages/LocalSEO')); 
const Contact = lazy(() => import('@/pages/Contact'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Terms = lazy(() => import('@/pages/Terms'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const CityPage = lazy(() => import('@/pages/CityPage'));
const SeoServices = lazy(() => import('@/pages/SeoServices'));

// Tool pages
const RankChecker = lazy(() => import('@/pages/tools/RankChecker'));
const KeywordGenerator = lazy(() => import('@/pages/tools/KeywordGenerator'));
const BlogIdeasGenerator = lazy(() => import('@/pages/tools/BlogIdeasGenerator'));
const ParagraphRewriter = lazy(() => import('@/pages/tools/ParagraphRewriter'));
const SentenceRewriter = lazy(() => import('@/pages/tools/SentenceRewriter'));
const ParaphrasingTool = lazy(() => import('@/pages/ParaphrasingTool'));

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/seo" element={<SEOService />} />
              <Route path="/services/local-seo" element={<LocalSEO />} />
              <Route path="/services/seo-services" element={<SeoServices />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/seo-:city" element={<CityPage />} />
              
              {/* SEO Tool Routes */}
              <Route path="/google-rank-checker-tool" element={<RankChecker />} />
              <Route path="/keyword-generator-tool" element={<KeywordGenerator />} />
              <Route path="/blog-ideas-generator" element={<BlogIdeasGenerator />} />
              <Route path="/paragraph-rewriter-tool" element={<ParagraphRewriter />} />
              <Route path="/sentence-rewriter-tool" element={<SentenceRewriter />} />
              <Route path="/paraphrasing-tool" element={<ParaphrasingTool />} />
              
              {/* Custom aliases for improved URL structure */}
              <Route path="/rank-checker" element={<RankChecker />} />
              <Route path="/keyword-generator" element={<KeywordGenerator />} />
              <Route path="/blog-ideas" element={<BlogIdeasGenerator />} />
              <Route path="/paragraph-rewriter" element={<ParagraphRewriter />} />
              <Route path="/sentence-rewriter" element={<SentenceRewriter />} />
              <Route path="/paraphraser" element={<ParaphrasingTool />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </Layout>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
