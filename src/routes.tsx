
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Index from './pages/Index';
import SeoServices from './pages/SeoServices';
import TikTokUsernameGeneratorPage from './pages/tools/TikTokUsernameGeneratorPage';
import TikTokHashtagGeneratorPage from './pages/tools/TikTokHashtagGeneratorPage';
import YouTubeNameGeneratorPage from './pages/tools/YouTubeNameGeneratorPage';
import YouTubeChannelDescriptionGeneratorPage from './pages/tools/YouTubeChannelDescriptionGeneratorPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

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
]);

export default router;
