import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './hooks/use-language';
import { Layout } from './components/Layout';
import { GoogleAnalytics } from './components/shared/GoogleAnalytics';
import { Seo } from './components/shared/Seo';
import { CONSENT_EVENT, hasAnalyticsConsent } from './components/shared/analyticsConsent';
import './index.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const MarketResearch = lazy(() => import('./pages/MarketResearch').then(module => ({ default: module.MarketResearch })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const Caribbean = lazy(() => import('./pages/markets/Caribbean').then(module => ({ default: module.Caribbean })));
const Chicago = lazy(() => import('./pages/markets/Chicago').then(module => ({ default: module.Chicago })));
const Boston = lazy(() => import('./pages/markets/Boston').then(module => ({ default: module.Boston })));
const LasVegas = lazy(() => import('./pages/markets/LasVegas').then(module => ({ default: module.LasVegas })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function VercelAnalyticsWithConsent() {
  const [isAllowed, setIsAllowed] = useState(hasAnalyticsConsent);

  useEffect(() => {
    const handleConsentChange = () => {
      setIsAllowed(hasAnalyticsConsent());
    };

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    window.addEventListener('storage', handleConsentChange);

    return () => {
      window.removeEventListener(CONSENT_EVENT, handleConsentChange);
      window.removeEventListener('storage', handleConsentChange);
    };
  }, []);

  if (!isAllowed) {
    return null;
  }

  return <Analytics />;
}

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
              <Route path="/mercati/caraibi" element={<Caribbean />} />
              <Route path="/mercati/chicago" element={<Chicago />} />
              <Route path="/mercati/boston" element={<Boston />} />
              <Route path="/mercati/las-vegas" element={<LasVegas />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
        <VercelAnalyticsWithConsent />
        <GoogleAnalytics />
      </Router>
    </LanguageProvider>
  );
}

export default App;
