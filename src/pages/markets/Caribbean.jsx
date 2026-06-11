import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { Globe, TrendingUp, Handshake, ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/shared/Seo';
import { PageHeader } from '../../components/shared/PageHeader';

const CONTENT = {
  it: {
    seoTitle: 'Consulente Business Development Caraibi per Aziende Italiane | GP & Partners',
    seoDesc: 'GP & Partners apre il mercato caraibico per le PMI italiane. Business development, partnership commerciali e market entry nei Caraibi — dalla strategia all\'esecuzione.',
    hero: 'Mercato Caraibico',
    heroSub: 'Il tuo partner strategico per il business development nei Caraibi',
    intro: 'I Caraibi rappresentano una delle opportunità meno sfruttate per le aziende italiane: un mercato in forte crescita, affamato di prodotti e servizi di qualità europea, con una forte presenza di turismo internazionale e una crescente classe media locale.',
    why: 'Perché i Caraibi',
    whyItems: [
      'Mercato con forte domanda di prodotti Made in Italy (food, design, moda, hospitality)',
      'Turismo internazionale da 35M+ visitatori/anno — canale privilegiato per i brand italiani',
      'Bassa penetrazione competitiva rispetto a USA e Europa — first-mover advantage reale',
      'Hub logistici strategici: Puerto Rico (USA territory), Trinidad, Panama',
      'Crescente middle class locale con aspirazioni premium',
      'Fiscalità favorevole in molte giurisdizioni (BVI, Cayman, Barbados)'
    ],
    markets: 'Mercati Chiave',
    marketsList: [
      { name: 'Puerto Rico', note: 'Territorio USA — accesso diretto al mercato americano senza barriere doganali' },
      { name: 'Repubblica Dominicana', note: 'Mercato in forte crescita, hub turistico e commerciale regionale' },
      { name: 'Trinidad & Tobago', note: 'Gateway per il mercato anglofono caraibico, economia diversificata' },
      { name: 'Bahamas & Bermuda', note: 'Mercato premium, luxury hospitality, clientela ad alto reddito' },
      { name: 'Barbados', note: 'Hub finanziario regionale, sede di holding internazionali' },
      { name: 'Martinica & Guadalupa', note: 'Territorio francese — accesso diretto al mercato UE' },
    ],
    services: 'Cosa offriamo',
    servicesList: [
      'Analisi opportunità e market entry strategy per il mercato caraibico',
      'Identificazione e qualifica distributori, partner e buyer locali',
      'Strutturazione accordi commerciali e partnership internazionali',
      'Supporto nella registrazione societaria nelle giurisdizioni caraibiche',
      'Accompagnamento in fiere e missioni commerciali regionali',
      'Business development continuativo con presidio locale'
    ],
    cta: 'Esplora il mercato caraibico con GP & Partners',
    ctaBtn: 'Prenota una consulenza'
  },
  en: {
    seoTitle: 'Caribbean Business Development Consultant for Italian Companies | GP & Partners',
    seoDesc: 'GP & Partners opens the Caribbean market for Italian SMEs. Business development, commercial partnerships and market entry across the Caribbean — from strategy to execution.',
    hero: 'Caribbean Market',
    heroSub: 'Your strategic partner for business development in the Caribbean',
    intro: 'The Caribbean represents one of the most underutilized opportunities for Italian companies: a fast-growing market hungry for European-quality products and services, with strong international tourism and a rising local middle class.',
    why: 'Why the Caribbean',
    whyItems: [
      'Strong demand for Made in Italy products (food, design, fashion, hospitality)',
      'International tourism with 35M+ visitors/year — premium channel for Italian brands',
      'Low competitive penetration vs USA and Europe — real first-mover advantage',
      'Strategic logistics hubs: Puerto Rico (US territory), Trinidad, Panama',
      'Growing local middle class with premium aspirations',
      'Favorable tax regimes in many jurisdictions (BVI, Cayman, Barbados)'
    ],
    markets: 'Key Markets',
    marketsList: [
      { name: 'Puerto Rico', note: 'US Territory — direct access to the American market, no customs barriers' },
      { name: 'Dominican Republic', note: 'Fast-growing market, regional tourism and commercial hub' },
      { name: 'Trinidad & Tobago', note: 'Gateway to the anglophone Caribbean, diversified economy' },
      { name: 'Bahamas & Bermuda', note: 'Premium market, luxury hospitality, high-income clientele' },
      { name: 'Barbados', note: 'Regional financial hub, home to international holding companies' },
      { name: 'Martinique & Guadeloupe', note: 'French territory — direct EU market access' },
    ],
    services: 'What We Offer',
    servicesList: [
      'Opportunity analysis and market entry strategy for the Caribbean',
      'Identification and qualification of local distributors, partners and buyers',
      'Structuring commercial agreements and international partnerships',
      'Support for company registration in Caribbean jurisdictions',
      'Accompaniment to regional trade fairs and commercial missions',
      'Continuous business development with local presence'
    ],
    cta: 'Explore the Caribbean market with GP & Partners',
    ctaBtn: 'Book a consultation'
  }
};

export function Caribbean() {
  const { language } = useLanguage();
  const c = CONTENT[language] || CONTENT.it;

  return (
    <>
      <Seo
        title={c.seoTitle}
        description={c.seoDesc}
        keywords="consulente caraibi italiani, business development caraibi, mercato caraibico aziende italiane, market entry caraibi, GP Partners"
      />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader
          title={c.hero}
          subtitle={c.heroSub}
          backgroundImage="https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&q=80&w=1920"
        />

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            {c.intro}
          </motion.p>
        </section>

        {/* Why Caribbean */}
        <section className="bg-card/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{c.why}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Markets */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">{c.markets}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.marketsList.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="liquid-glass border border-white/20 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-primary" />
                  <span className="font-semibold">{m.name}</span>
                </div>
                <p className="text-sm text-muted-foreground">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-card/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{c.services}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.servicesList.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-3 items-start"
                >
                  <ArrowRight className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-muted-foreground">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-6">{c.cta}</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <span>{c.ctaBtn}</span><ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </>
  );
}
