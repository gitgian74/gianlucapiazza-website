import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LangLink as Link } from '../../components/shared/LangLink';
import { langPath } from '../../lib/locale';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquareText, SearchCheck } from 'lucide-react';
import { Section } from '../../components/shared/Section';
import { Seo } from '../../components/shared/Seo';
import { PageHeader } from '../../components/shared/PageHeader';
import { useLanguage } from '../../hooks/use-language';
import { trackSiteEvent } from '../../components/shared/tracking';
import { ANALYTICS_EVENTS } from '../../components/shared/analyticsEvents';

const SITE_URL = 'https://gianlucapiazza.com';

const HERO_CITIES = ['miami', 'new-york', 'los-angeles', 'san-francisco', 'washington-dc'];

function heroImageFor(slug) {
  let sum = 0;
  for (const char of slug) sum += char.charCodeAt(0);
  return `/images/heroes/${HERO_CITIES[sum % HERO_CITIES.length]}.jpg`;
}

const relatedPages = [
  {
    path: '/usa-market-entry-italian-companies',
    it: 'USA Market Entry per aziende italiane',
    en: 'USA Market Entry for Italian Companies',
  },
  {
    path: '/temporary-export-manager-usa',
    it: 'Temporary Export Manager USA',
    en: 'Temporary Export Manager USA',
  },
  {
    path: '/ricerca-distributori-usa',
    it: 'Ricerca distributori USA',
    en: 'US Distributor Search',
  },
  {
    path: '/business-development-usa',
    it: 'Business Development USA',
    en: 'Business Development USA',
  },
  {
    path: '/us-retail-partnerships',
    it: 'US Retail Partnerships',
    en: 'US Retail Partnerships',
  },
  {
    path: '/buyer-readiness-usa',
    it: 'Buyer Readiness USA',
    en: 'Buyer Readiness USA',
  },
  {
    path: '/vendere-prodotti-italiani-usa',
    it: 'Vendere prodotti italiani negli USA',
    en: 'Selling Italian Products in the USA',
  },
  {
    path: '/food-beverage-usa',
    it: 'Food, Beverage & Wine USA',
    en: 'Food, Beverage & Wine USA',
  },
  {
    path: '/moda-design-usa',
    it: 'Moda e Design USA',
    en: 'Fashion and Design USA',
  },
  {
    path: '/agente-vs-distributore-usa',
    it: 'Agente vs distributore USA',
    en: 'Agent vs Distributor USA',
  },
];

function buildPageJsonLd(page, content) {
  const pageUrl = `${SITE_URL}${page.path}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: content.hero,
        description: content.description,
        serviceType: content.hero,
        provider: {
          '@type': 'ProfessionalService',
          '@id': `${SITE_URL}/#organization`,
          name: 'GP & Partners',
          url: SITE_URL,
          founder: {
            '@type': 'Person',
            '@id': `${SITE_URL}/about#person`,
            name: 'Gianluca Piazza',
          },
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'United States',
          },
          {
            '@type': 'Country',
            name: 'Italy',
          },
          {
            '@type': 'Place',
            name: 'Europe',
          },
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Italian and European companies entering or growing in the US market',
        },
        keywords: page.keywords,
        url: pageUrl,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: content.faqs.map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: `${SITE_URL}/services`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: content.hero,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

function MotionItem({ children, delay = 0, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SeoLandingPage({ page }) {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const content = page[language] || page.it;
  const pageJsonLd = buildPageJsonLd(page, content);
  const openContact = (placement) => {
    const eventPayload = {
      cta_id: 'seo_landing_market_readiness_call',
      destination: '/contact',
      source_page: page.path,
      placement,
      offer: 'market_readiness_call',
    };

    trackSiteEvent(ANALYTICS_EVENTS.LANDING_CTA_CLICK, eventPayload);
    trackSiteEvent(ANALYTICS_EVENTS.BOOK_CALL, eventPayload);
    // LangLink copre solo i link dichiarativi: navigate() lo aggira e
        // riportava chi era in inglese sulla pagina contatti italiana.
        navigate(langPath('/contact', language));
  };

  const trackChecklistDownload = (placement) => {
    trackSiteEvent(ANALYTICS_EVENTS.DOWNLOAD_CHECKLIST, {
      asset_id: 'buyer_distributor_readiness_checklist',
      asset_path: page.downloadPath,
      source_page: page.path,
      placement,
    });
  };

  return (
    <>
      <Seo
        title={content.title}
        description={content.description}
        keywords={page.keywords}
        jsonLd={pageJsonLd}
      />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader
          title={content.hero}
          subtitle={content.subtitle}
          backgroundImage={heroImageFor(page.path)}
        >
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => openContact('seo_landing_hero')}
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <span>{content.cta.label}</span>
              <ArrowRight size={18} />
            </button>
            {page.downloadPath && content.secondaryCta && (
              <a
                href={page.downloadPath}
                download
                onClick={() => trackChecklistDownload('seo_landing_hero')}
                className="inline-flex items-center gap-2 liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-950 transition-colors"
              >
                <span>{content.secondaryCta}</span>
                <ArrowRight size={18} />
              </a>
            )}
            <span className="text-sm text-muted-foreground">
              {SITE_URL.replace('https://', '')}{page.path}
            </span>
          </div>
        </PageHeader>

        <Section className="max-w-4xl mt-16">
          <MotionItem>
            <div className="flex items-start gap-4 liquid-glass rounded-xl border border-white/20 p-6">
              <SearchCheck className="mt-1 text-primary shrink-0" size={26} />
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                {content.answer}
              </p>
            </div>
          </MotionItem>
        </Section>

        <Section className="max-w-6xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-3">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.processTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {language === 'it'
                  ? 'Ogni pagina risponde a una domanda commerciale precisa e porta il traffico qualificato verso una conversazione concreta.'
                  : 'Each page answers a precise commercial question and moves qualified traffic toward a concrete conversation.'}
              </p>
            </div>
            <div className="space-y-4">
              {content.process.map((item, index) => (
                <MotionItem key={item} delay={index * 0.04}>
                  <div className="flex gap-4 liquid-glass rounded-xl border border-white/20 p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </MotionItem>
              ))}
            </div>
          </div>
        </Section>

        <section className="mt-16 bg-card/30 py-16">
          <div className="container mx-auto max-w-6xl px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{content.proofTitle}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {content.proof.map((item, index) => (
                <MotionItem key={item} delay={index * 0.04}>
                  <div className="flex gap-3 liquid-glass rounded-xl border border-white/20 p-5">
                    <CheckCircle2 className="mt-1 text-primary shrink-0" size={20} />
                    <p className="text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                </MotionItem>
              ))}
            </div>
          </div>
        </section>

        <Section className="max-w-5xl">
          <div className="border-y border-border/70 py-8 mb-12">
            <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-5">
              {language === 'it' ? 'Percorsi collegati' : 'Related paths'}
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedPages
                .filter((relatedPage) => relatedPage.path !== page.path)
                .map((relatedPage) => (
                  <Link
                    key={relatedPage.path}
                    to={relatedPage.path}
                    onClick={() => trackSiteEvent(ANALYTICS_EVENTS.SEO_PATH_CLICK, {
                      destination: relatedPage.path,
                      source_page: page.path,
                      placement: 'seo_landing_related_paths',
                    })}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/30 px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {relatedPage[language] || relatedPage.it}
                    <ArrowRight size={15} />
                  </Link>
                ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <MessageSquareText className="text-primary" size={26} />
            <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
          </div>
          <div className="space-y-4">
            {content.faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group liquid-glass rounded-xl border border-white/20 p-5 open:bg-card/50 transition-colors"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground">
                  <span className="inline-flex w-full items-center justify-between gap-4">
                    {question}
                    <ArrowRight className="shrink-0 transition-transform group-open:rotate-90" size={18} />
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </Section>

        <Section className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{content.cta.label}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{content.cta.note}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openContact('seo_landing_bottom')}
              className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <span>{content.cta.label}</span>
              <ArrowRight size={18} />
            </button>
            {page.downloadPath && content.secondaryCta && (
              <a
                href={page.downloadPath}
                download
                onClick={() => trackChecklistDownload('seo_landing_bottom')}
                className="inline-flex items-center gap-2 rounded-lg border border-border/70 px-8 py-3 font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <span>{content.secondaryCta}</span>
                <ArrowRight size={18} />
              </a>
            )}
          </div>
        </Section>
      </div>
    </>
  );
}
