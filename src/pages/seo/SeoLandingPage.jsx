import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquareText, SearchCheck } from 'lucide-react';
import { PageHeader } from '../../components/shared/PageHeader';
import { Section } from '../../components/shared/Section';
import { Button } from '../../components/shared/Button';
import { Seo } from '../../components/shared/Seo';
import { useLanguage } from '../../hooks/use-language';

const SITE_URL = 'https://gianlucapiazza.com';

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
    path: '/vendere-prodotti-italiani-usa',
    it: 'Vendere prodotti italiani negli USA',
    en: 'Selling Italian Products in the USA',
  },
];

function buildFaqJsonLd(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
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
  const faqJsonLd = buildFaqJsonLd(content.faqs);
  const openContact = () => navigate('/contact');

  return (
    <>
      <Seo
        title={content.title}
        description={content.description}
        keywords={page.keywords}
        jsonLd={faqJsonLd}
      />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader title={content.hero} subtitle={content.subtitle}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button type="button" size="lg" onClick={openContact}>
              <span>{content.cta.label}</span>
              <ArrowRight size={18} />
            </Button>
            <span className="text-sm text-muted-foreground">
              {SITE_URL.replace('https://', '')}{page.path}
            </span>
          </div>
        </PageHeader>

        <Section className="max-w-4xl mt-16">
          <MotionItem>
            <div className="flex items-start gap-4 rounded-lg border border-border bg-card/40 p-6">
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
                  <div className="flex gap-4 rounded-lg border border-border bg-card/30 p-5">
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
                  <div className="flex gap-3 rounded-lg border border-border bg-background/50 p-5">
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
                className="group rounded-lg border border-border bg-card/30 p-5 open:bg-card/50 transition-colors"
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
          <Button type="button" size="lg" onClick={openContact}>
            <span>{content.cta.label}</span>
            <ArrowRight size={18} />
          </Button>
        </Section>
      </div>
    </>
  );
}
