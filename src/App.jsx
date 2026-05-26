import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './hooks/use-language';
import { Layout } from './components/Layout';
import { GoogleAnalytics } from './components/shared/GoogleAnalytics';
import { Seo } from './components/shared/Seo';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const MarketResearch = lazy(() => import('./pages/MarketResearch').then(module => ({ default: module.MarketResearch })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Seo />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/market-research" element={<MarketResearch />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </Layout>
        <Analytics
          beforeSend={(event) => {
            if (localStorage.getItem('va-disable')) {
              return null;
            }
            return event;
          }}
        />
        <GoogleAnalytics />
      </Router>
    </LanguageProvider>
  );
}

export default App;
