
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Index from './pages/Index';
import SeoServices from './pages/SeoServices';
import TikTokUsernameGeneratorPage from './pages/tools/TikTokUsernameGeneratorPage';
import TikTokHashtagGeneratorPage from './pages/tools/TikTokHashtagGeneratorPage';
import YouTubeNameGeneratorPage from './pages/tools/YouTubeNameGeneratorPage';
import YouTubeChannelDescriptionGeneratorPage from './pages/tools/YouTubeChannelDescriptionGeneratorPage';
import InstagramNameGenerator from './pages/InstagramNameGenerator';
import GrammarChecker from './pages/tools/GrammarChecker';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import InstagramBioGenerator from './pages/InstagramBioGenerator';
import InstagramHashtagGenerator from './pages/InstagramHashtagGenerator';
import ParaphrasingTool from './pages/ParaphrasingTool';
import BulkAnchorLinkGenerator from './pages/tools/BulkAnchorLinkGenerator';
import BlogIdeasGenerator from './pages/BlogIdeasGenerator';
import SentenceRewriter from './pages/SentenceRewriter';
import ParagraphRewriter from './pages/ParagraphRewriter';
import RankChecker from './pages/RankChecker';
import KeywordGenerator from './pages/KeywordGenerator';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/services",
    element: <SeoServices />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/tiktok-username-generator",
    element: <TikTokUsernameGeneratorPage />,
  },
  {
    path: "/tiktok-hashtag-generator",
    element: <TikTokHashtagGeneratorPage />,
  },
  {
    path: "/youtube-name-generator",
    element: <YouTubeNameGeneratorPage />,
  },
  {
    path: "/youtube-channel-description-generator",
    element: <YouTubeChannelDescriptionGeneratorPage />,
  },
  {
    path: "/instagram-name-generator-tool",
    element: <InstagramNameGenerator />,
  },
  {
    path: "/grammar-checker-tool",
    element: <GrammarChecker />,
  },
  {
    path: "/instagram-bio-generator-tool",
    element: <InstagramBioGenerator />,
  },
  {
    path: "/instagram-hashtag-generator-tool",
    element: <InstagramHashtagGenerator />,
  },
  {
    path: "/paraphrasing-tool",
    element: <ParaphrasingTool />,
  },
  {
    path: "/bulk-anchor-link-generator-tool",
    element: <BulkAnchorLinkGenerator />,
  },
  {
    path: "/blog-ideas-generator",
    element: <BlogIdeasGenerator />,
  },
  {
    path: "/sentence-rewriter-tool",
    element: <SentenceRewriter />,
  },
  {
    path: "/paragraph-rewriter-tool",
    element: <ParagraphRewriter />,
  },
  {
    path: "/google-rank-checker-tool",
    element: <RankChecker />,
  },
  {
    path: "/keyword-generator-tool",
    element: <KeywordGenerator />,
  },
]);

export default router;
