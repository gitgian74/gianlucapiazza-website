import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './hooks/use-language';
import { Layout } from './components/Layout';
import { GoogleAnalytics } from './components/shared/GoogleAnalytics';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { MetaPixel } from './components/shared/MetaPixel';
import { Seo } from './components/shared/Seo';
import { ErrorBoundary } from './components/shared/ErrorBoundary';
import { CONSENT_EVENT, hasAnalyticsConsent } from './components/shared/analyticsConsent';
import { rememberAttribution, trackSiteEvent } from './components/shared/tracking';
import { ANALYTICS_EVENTS } from './components/shared/analyticsEvents';
import { MARKETS_BASE, marketPath, marketRoutes } from './pages/markets/marketRoutes';
import { seoPages } from './pages/seo/seoPageData';
import { langPath, splitLangPath } from './lib/locale';
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

const SEO_LANDING_PATHS = new Set(Object.values(seoPages).map((page) => page.path));

// Il confronto va fatto sul percorso senza prefisso di lingua, altrimenti
// ogni landing sotto /en verrebbe classificata come 'site'.
const getPageGroup = (pathname) => {
  const { path } = splitLangPath(pathname);
  return path.startsWith(`${MARKETS_BASE}/`) || SEO_LANDING_PATHS.has(path)
    ? 'market_landing'
    : 'site';
};

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
  const pageGroup = getPageGroup(location.pathname);

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
          trackSiteEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
            depth_percent: threshold,
            page_path: trackedPath,
          });
        }
      });

      if (scrollPercent >= 75 && !thresholds.has(ANALYTICS_EVENTS.LANDING_SCROLL_75)) {
        thresholds.add(ANALYTICS_EVENTS.LANDING_SCROLL_75);
        trackSiteEvent(ANALYTICS_EVENTS.LANDING_SCROLL_75, {
          depth_percent: 75,
          page_path: trackedPath,
          page_group: pageGroup,
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [trackedPath, pageGroup]);

  return null;
}

// Elenco unico delle pagine. Serve a emettere ogni route due volte, una per
// lingua, senza duplicare a mano quaranta righe di JSX.
const PAGES = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
  { path: '/market-research', element: <MarketResearch /> },
  { path: '/privacy', element: <Privacy /> },
  ...marketRoutes.map(({ slug }) => ({
    path: marketPath(slug),
    element: <MarketLandingPage city={slug} />,
  })),
  { path: '/usa-market-entry-italian-companies', element: <UsaMarketEntryItalianCompanies /> },
  { path: '/business-development-usa', element: <BusinessDevelopmentUsa /> },
  { path: '/ricerca-distributori-usa', element: <RicercaDistributoriUsa /> },
  { path: '/us-retail-partnerships', element: <UsRetailPartnerships /> },
  { path: '/vendere-prodotti-italiani-usa', element: <VendereProdottiItalianiUsa /> },
  { path: '/temporary-export-manager-usa', element: <TemporaryExportManagerUsa /> },
  { path: '/buyer-readiness-usa', element: <BuyerReadinessUsa /> },
  { path: '/food-beverage-usa', element: <FoodBeverageUsa /> },
  { path: '/moda-design-usa', element: <ModaDesignUsa /> },
  { path: '/agente-vs-distributore-usa', element: <AgenteVsDistributoreUsa /> },
];

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Seo />
        <Layout>
          <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Ogni pagina esiste due volte: alla radice in italiano e sotto
                  /en in inglese. Prima erano URL sole italiane e i contenuti
                  inglesi non avevano indirizzo, quindi nessun motore poteva
                  vederli. */}
              {PAGES.flatMap(({ path, element }) => [
                <Route key={path} path={path} element={element} />,
                <Route key={`en${path}`} path={langPath(path, 'en')} element={element} />,
              ])}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          </ErrorBoundary>
        </Layout>
        <EngagementTracker />
        <VercelAnalyticsWithConsent />
        <GoogleAnalytics />
        <MetaPixel />
      </LanguageProvider>
    </Router>
  );
}

export default App;
