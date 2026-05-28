import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../../components/shared/PageHeader';
import { Button } from '../../components/shared/Button';
import { Seo } from '../../components/shared/Seo';

const CONTENT = {
  it: {
    seoTitle: 'Consulente Mercato Las Vegas per Aziende Italiane | GP & Partners',
    seoDesc: 'GP & Partners apre il mercato di Las Vegas e Nevada per le PMI italiane. Hospitality, food & beverage, luxury, entertainment — business development specializzato.',
    hero: 'Mercato Las Vegas & Nevada',
    heroSub: 'Il polo globale dell\'hospitality e dell\'entertainment — opportunità uniche per il Made in Italy',
    intro: 'Las Vegas non è solo entertainment: è uno dei mercati più concentrati al mondo per luxury hospitality, food & beverage premium, design e retail. Con 42 milioni di visitatori/anno e oltre 200 hotel di lusso, è una vetrina globale senza eguali per i brand italiani — e un mercato di acquisto reale per distributori e buyer del settore.',
    why: 'Perché Las Vegas & Nevada',
    whyItems: [
      '42 milioni di visitatori internazionali/anno — mercato captive premium',
      'Oltre 200 hotel di lusso: MGM, Wynn, Bellagio, Caesars — acquirenti di prodotti Made in Italy',
      'Nessun income tax in Nevada — vantaggi fiscali per strutture societarie',
      'Hub per fiere di settore: CES, NAB Show, MAGIC, ConExpo — porta di accesso a tutto il mercato USA',
      'Food & beverage: 15.000+ ristoranti, forte domanda di prodotti italiani premium',
      'Mercato in forte crescita: Formula 1, grandi eventi sportivi, espansione resort'
    ],
    markets: 'Opportunità per Settore',
    marketsList: [
      { name: 'Hospitality & Hotel', note: 'Fornitura F&B, amenities, design e arredi per i grandi resort del Strip' },
      { name: 'Food & Beverage', note: 'Import vini, olio, pasta, salumi — forte domanda dai ristoranti di lusso' },
      { name: 'Luxury Retail', note: 'The Strip: Hermès, Prada, Gucci — aperture punti vendita e distributori' },
      { name: 'Fiere & Convention', note: 'CES, NAB, MAGIC — accesso diretto a buyer da tutto il mercato USA' },
      { name: 'Real Estate & Design', note: 'Crescita residenziale intorno a Las Vegas — mercato arredamento premium' },
      { name: 'Entertainment Tech', note: 'Tecnologie per spettacolo, media, realtà virtuale — settore in espansione' },
    ],
    services: 'Cosa offriamo',
    servicesList: [
      'Market entry strategy per Las Vegas e mercato Nevada',
      'Identificazione buyer e distributori nel settore hospitality e F&B',
      'Supporto a fiere internazionali: CES, NAB Show, MAGIC Apparel',
      'Strutturazione accordi di fornitura con hotel e resort del Strip',
      'Accesso a network retail luxury e distributori premium',
      'Supporto legale e fiscale per strutture societarie in Nevada'
    ],
    cta: 'Entra nel mercato di Las Vegas con GP & Partners',
    ctaBtn: 'Prenota una consulenza'
  },
  en: {
    seoTitle: 'Las Vegas Market Consultant for Italian Companies | GP & Partners',
    seoDesc: 'GP & Partners opens the Las Vegas and Nevada market for Italian SMEs. Hospitality, food & beverage, luxury, entertainment — specialized business development.',
    hero: 'Las Vegas & Nevada Market',
    heroSub: 'The global hub for hospitality and entertainment — unique opportunities for Made in Italy',
    intro: 'Las Vegas is not just entertainment: it is one of the most concentrated markets in the world for luxury hospitality, premium food & beverage, design and retail. With 42 million visitors per year and over 200 luxury hotels, it is an unmatched global showcase for Italian brands — and a real purchasing market for distributors and buyers in the sector.',
    why: 'Why Las Vegas & Nevada',
    whyItems: [
      '42 million international visitors/year — captive premium market',
      'Over 200 luxury hotels: MGM, Wynn, Bellagio, Caesars — buyers of Made in Italy products',
      'No income tax in Nevada — tax advantages for corporate structures',
      'Trade show hub: CES, NAB Show, MAGIC, ConExpo — gateway to the entire US market',
      'Food & beverage: 15,000+ restaurants, strong demand for premium Italian products',
      'Fast-growing market: Formula 1, major sporting events, resort expansion'
    ],
    markets: 'Opportunities by Sector',
    marketsList: [
      { name: 'Hospitality & Hotel', note: 'F&B supply, amenities, design and furnishings for major Strip resorts' },
      { name: 'Food & Beverage', note: 'Wine, olive oil, pasta, cold cuts import — strong demand from luxury restaurants' },
      { name: 'Luxury Retail', note: 'The Strip: Hermès, Prada, Gucci — retail openings and distributors' },
      { name: 'Trade Shows & Conventions', note: 'CES, NAB, MAGIC — direct access to buyers from across the US' },
      { name: 'Real Estate & Design', note: 'Residential growth around Las Vegas — premium furnishing market' },
      { name: 'Entertainment Tech', note: 'Technologies for entertainment, media, virtual reality — expanding sector' },
    ],
    services: 'What We Offer',
    servicesList: [
      'Market entry strategy for Las Vegas and Nevada',
      'Identification of buyers and distributors in hospitality and F&B',
      'Support at international trade shows: CES, NAB Show, MAGIC Apparel',
      'Structuring supply agreements with Strip hotels and resorts',
      'Access to luxury retail networks and premium distributors',
      'Legal and tax support for corporate structures in Nevada'
    ],
    cta: 'Enter the Las Vegas market with GP & Partners',
    ctaBtn: 'Book a consultation'
  }
};

export function LasVegas() {
  const { language } = useLanguage();
  const c = CONTENT[language] || CONTENT.it;
  return (
    <>
      <Seo title={c.seoTitle} description={c.seoDesc} keywords="consulente Las Vegas italiani, business Las Vegas azienda italiana, mercato Nevada italiani, hospitality Las Vegas Made in Italy, GP Partners" />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader title={c.hero} subtitle={c.heroSub} backgroundImage="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&q=80&w=1920" />
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl text-muted-foreground leading-relaxed">{c.intro}</motion.p>
        </section>
        <section className="bg-card/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{c.why}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.whyItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-3 items-start">
                  <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-10">{c.markets}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.marketsList.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="border border-border rounded-xl p-5 bg-card/50">
                <div className="flex items-center gap-2 mb-2"><MapPin size={16} className="text-primary" /><span className="font-semibold">{m.name}</span></div>
                <p className="text-sm text-muted-foreground">{m.note}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="bg-card/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{c.services}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.servicesList.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex gap-3 items-start">
                  <ArrowRight className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-muted-foreground">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-6">{c.cta}</h2>
          <Button asChild><Link to="/contact"><span>{c.ctaBtn}</span><ArrowRight size={16} /></Link></Button>
        </section>
      </div>
    </>
  );
}
