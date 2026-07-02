import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './hooks/use-language';
import { Layout } from './components/Layout';
import { GoogleAnalytics } from './components/shared/GoogleAnalytics';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { MetaPixel } from './components/shared/MetaPixel';
import { Seo } from './components/shared/Seo';
import { CONSENT_EVENT, hasAnalyticsConsent } from './components/shared/analyticsConsent';
import { rememberAttribution, trackSiteEvent } from './components/shared/tracking';
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
const MarketLandingPage = lazy(() => import('./pages/markets/MarketLandingPage').then(module => ({ default: module.MarketLandingPage })));
const UsaMarketEntryItalianCompanies = lazy(() => import('./pages/seo/UsaMarketEntryItalianCompanies').then(module => ({ default: module.UsaMarketEntryItalianCompanies })));
const BusinessDevelopmentUsa = lazy(() => import('./pages/seo/BusinessDevelopmentUsa').then(module => ({ default: module.BusinessDevelopmentUsa })));
const RicercaDistributoriUsa = lazy(() => import('./pages/seo/RicercaDistributoriUsa').then(module => ({ default: module.RicercaDistributoriUsa })));
const UsRetailPartnerships = lazy(() => import('./pages/seo/UsRetailPartnerships').then(module => ({ default: module.UsRetailPartnerships })));
const VendereProdottiItalianiUsa = lazy(() => import('./pages/seo/VendereProdottiItalianiUsa').then(module => ({ default: module.VendereProdottiItalianiUsa })));
const TemporaryExportManagerUsa = lazy(() => import('./pages/seo/TemporaryExportManagerUsa').then(module => ({ default: module.TemporaryExportManagerUsa })));
const BuyerReadinessUsa = lazy(() => import('./pages/seo/BuyerReadinessUsa').then(module => ({ default: module.BuyerReadinessUsa })));
const FoodBeverageUsa = lazy(() => import('./pages/seo/FoodBeverageUsa').then(module => ({ default: module.FoodBeverageUsa })));
const ModaDesignUsa = lazy(() => import('./pages/seo/ModaDesignUsa').then(module => ({ default: module.ModaDesignUsa })));
const AgenteVsDistributoreUsa = lazy(() => import('./pages/seo/AgenteVsDistributoreUsa').then(module => ({ default: module.AgenteVsDistributoreUsa })));

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

function EngagementTracker() {
  const location = useLocation();
  const trackedPath = `${location.pathname}${location.search}`;

  useEffect(() => {
    rememberAttribution();
  }, [trackedPath]);

  useEffect(() => {
    const thresholds = new Set();

    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) {
        return;
      }

      const scrollPercent = Math.round((window.scrollY / scrollableHeight) * 100);

      [50, 90].forEach((threshold) => {
        if (scrollPercent >= threshold && !thresholds.has(threshold)) {
          thresholds.add(threshold);
          trackSiteEvent('scroll_depth', {
            depth_percent: threshold,
            page_path: trackedPath,
          });
        }
      });

      if (scrollPercent >= 75 && !thresholds.has('landing_scroll_75')) {
        thresholds.add('landing_scroll_75');
        trackSiteEvent('landing_scroll_75', {
          depth_percent: 75,
          page_path: trackedPath,
          page_group: trackedPath.includes('usa') || trackedPath.includes('distributori') ? 'market_landing' : 'site',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackedPath]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
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
              <Route path="/mercati/miami" element={<MarketLandingPage city="miami" />} />
              <Route path="/mercati/dallas" element={<MarketLandingPage city="dallas" />} />
              <Route path="/mercati/houston" element={<MarketLandingPage city="houston" />} />
              <Route path="/mercati/san-antonio" element={<MarketLandingPage city="san-antonio" />} />
              <Route path="/mercati/new-york" element={<MarketLandingPage city="new-york" />} />
              <Route path="/mercati/los-angeles" element={<MarketLandingPage city="los-angeles" />} />
              <Route path="/mercati/san-diego" element={<MarketLandingPage city="san-diego" />} />
              <Route path="/mercati/silicon-valley" element={<MarketLandingPage city="silicon-valley" />} />
              <Route path="/usa-market-entry-italian-companies" element={<UsaMarketEntryItalianCompanies />} />
              <Route path="/business-development-usa" element={<BusinessDevelopmentUsa />} />
              <Route path="/ricerca-distributori-usa" element={<RicercaDistributoriUsa />} />
              <Route path="/us-retail-partnerships" element={<UsRetailPartnerships />} />
              <Route path="/vendere-prodotti-italiani-usa" element={<VendereProdottiItalianiUsa />} />
              <Route path="/temporary-export-manager-usa" element={<TemporaryExportManagerUsa />} />
              <Route path="/buyer-readiness-usa" element={<BuyerReadinessUsa />} />
              <Route path="/food-beverage-usa" element={<FoodBeverageUsa />} />
              <Route path="/moda-design-usa" element={<ModaDesignUsa />} />
              <Route path="/agente-vs-distributore-usa" element={<AgenteVsDistributoreUsa />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
        <EngagementTracker />
        <VercelAnalyticsWithConsent />
        <GoogleAnalytics />
        <MetaPixel />
      </Router>
    </LanguageProvider>
  );
}

export default App;
