import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/shared/Seo';
import { PageHeader } from '../../components/shared/PageHeader';

const CONTENT = {
  it: {
    seoTitle: 'Consulente Mercato Chicago per Aziende Italiane | GP & Partners',
    seoDesc: 'GP & Partners apre il mercato di Chicago per le PMI italiane. Business development, partnership e market entry nel Midwest USA — consulenza specializzata.',
    hero: 'Mercato Chicago & Midwest',
    heroSub: 'La porta d\'ingresso al cuore economico degli Stati Uniti',
    intro: 'Chicago è il terzo polo economico degli USA e il gateway naturale per il Midwest americano — una regione con 67 milioni di consumatori, forte manifattura, agroalimentare e servizi finanziari. Un mercato sottovalutato dai competitor italiani e ricco di opportunità per chi entra con la giusta strategia.',
    why: 'Perché Chicago & Midwest',
    whyItems: [
      'Terza area metropolitana USA per PIL — oltre $770 miliardi',
      'Hub logistico centrale: 6 delle 7 principali ferrovie USA passano da Chicago',
      'Camera di Commercio Italo-Americana (IACC) attiva — network consolidato',
      'Forte comunità italiana: oltre 500.000 italo-americani nell\'area metropolitana',
      'Settori chiave: food & beverage, manifattura, tech, finanza, healthcare',
      'Competitività più bassa rispetto a NY e LA — first-mover advantage reale'
    ],
    markets: 'Aree di Intervento',
    marketsList: [
      { name: 'Chicago Downtown & Loop', note: 'Sede delle principali corporation, studi legali e finanziari' },
      { name: 'Chicago Suburbs', note: 'Area manifatturiera e distributiva — Naperville, Schaumburg, Aurora' },
      { name: 'Milwaukee (WI)', note: 'Hub manifatturiero, 90 min da Chicago, forte presenza tedesca e italiana' },
      { name: 'Indianapolis (IN)', note: 'Automotive, logistica, pharma — mercato in crescita' },
      { name: 'Detroit (MI)', note: 'Automotive & manufacturing — ritorno degli investimenti post-2008' },
      { name: 'Minneapolis (MN)', note: 'Tech, retail (Target, Best Buy HQ), agri-business' },
    ],
    services: 'Cosa offriamo',
    servicesList: [
      'Market entry strategy per il mercato di Chicago e Midwest',
      'Identificazione distributori, buyer e partner locali qualificati',
      'Accesso al network IACC-Chicago e associazioni di categoria',
      'Strutturazione accordi commerciali e partnership',
      'Supporto fiere di settore: McCormick Place (uno dei più grandi hub fieristici USA)',
      'Business development continuativo con presidio nella regione'
    ],
    cta: 'Entra nel mercato di Chicago con GP & Partners',
    ctaBtn: 'Prenota una consulenza'
  },
  en: {
    seoTitle: 'Chicago Market Consultant for Italian Companies | GP & Partners',
    seoDesc: 'GP & Partners opens the Chicago and Midwest market for Italian SMEs. Business development, partnerships and market entry — specialized consulting.',
    hero: 'Chicago & Midwest Market',
    heroSub: 'The gateway to the economic heart of the United States',
    intro: 'Chicago is the third largest economic hub in the USA and the natural gateway to the American Midwest — a region with 67 million consumers, strong manufacturing, agri-food and financial services. An undervalued market for Italian competitors, rich in opportunities for those entering with the right strategy.',
    why: 'Why Chicago & Midwest',
    whyItems: [
      'Third largest US metro area by GDP — over $770 billion',
      'Central logistics hub: 6 of the 7 major US railways pass through Chicago',
      'Active Italian-American Chamber of Commerce (IACC) — established network',
      'Strong Italian community: over 500,000 Italian-Americans in the metro area',
      'Key sectors: food & beverage, manufacturing, tech, finance, healthcare',
      'Lower competition than NY and LA — real first-mover advantage'
    ],
    markets: 'Areas of Operation',
    marketsList: [
      { name: 'Chicago Downtown & Loop', note: 'Headquarters of major corporations, law and finance firms' },
      { name: 'Chicago Suburbs', note: 'Manufacturing and distribution — Naperville, Schaumburg, Aurora' },
      { name: 'Milwaukee (WI)', note: 'Manufacturing hub, 90 min from Chicago, strong German and Italian presence' },
      { name: 'Indianapolis (IN)', note: 'Automotive, logistics, pharma — growing market' },
      { name: 'Detroit (MI)', note: 'Automotive & manufacturing — investment revival post-2008' },
      { name: 'Minneapolis (MN)', note: 'Tech, retail (Target, Best Buy HQ), agri-business' },
    ],
    services: 'What We Offer',
    servicesList: [
      'Market entry strategy for Chicago and the Midwest',
      'Identification of qualified local distributors, buyers and partners',
      'Access to IACC-Chicago network and trade associations',
      'Structuring commercial agreements and partnerships',
      'Trade show support: McCormick Place (one of the largest US trade venues)',
      'Continuous business development with regional presence'
    ],
    cta: 'Enter the Chicago market with GP & Partners',
    ctaBtn: 'Book a consultation'
  }
};

export function Chicago() {
  const { language } = useLanguage();
  const c = CONTENT[language] || CONTENT.it;
  return (
    <>
      <Seo title={c.seoTitle} description={c.seoDesc} keywords="consulente Chicago azienda italiana, mercato Chicago italiani, business development Chicago, Midwest USA italiani, GP Partners" />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader
          title={c.hero}
          subtitle={c.heroSub}
          backgroundImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920"
        />
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="liquid-glass border border-white/20 rounded-xl p-5">
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
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"><span>{c.ctaBtn}</span><ArrowRight size={16} /></Link>
        </section>
      </div>
    </>
  );
}
