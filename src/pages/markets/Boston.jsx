import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/shared/Seo';
import { PageHeader } from '../../components/shared/PageHeader';

const CONTENT = {
  it: {
    seoTitle: 'Consulente Mercato Boston per Aziende Italiane | GP & Partners',
    seoDesc: 'GP & Partners apre il mercato di Boston e New England per le PMI italiane. Tech, biotech, università, food — market entry e business development specializzato.',
    hero: 'Mercato Boston & New England',
    heroSub: 'Il polo tech, biotech e universitario degli USA — opportunità per le aziende italiane',
    intro: 'Boston è il cuore del sistema universitario e dell\'innovazione americana, con il più alto numero di università e centri di ricerca al mondo. È anche il gateway per il New England — un mercato da 15 milioni di consumatori con altissimo reddito pro-capite e fortissima propensione ai prodotti premium europei.',
    why: 'Perché Boston & New England',
    whyItems: [
      'Più alta concentrazione universitaria al mondo: MIT, Harvard, Tufts, BU, Northeastern',
      'Hub biotech e life sciences globale — opportunità per tecnologie italiane avanzate',
      'Reddito pro-capite tra i più alti degli USA — mercato premium ideale',
      'Fortissima comunità italiana: Boston North End, la Little Italy più autentica d\'America',
      'Settori chiave: tech, biotech, finanza, food & beverage, luxury, education',
      'Scarsa penetrazione competitor italiani — quasi nessun consulente specializzato'
    ],
    markets: 'Aree Coperte',
    marketsList: [
      { name: 'Boston Metro', note: 'Hub tech, biotech, finanza e università — il core del mercato' },
      { name: 'Cambridge', note: 'MIT, Harvard, startup ecosystem — innovazione e R&D' },
      { name: 'Providence (RI)', note: 'Design, manifattura, turismo — mercato in crescita' },
      { name: 'Hartford (CT)', note: 'Finanza, insurance, manifattura — solido mercato B2B' },
      { name: 'Portland (ME)', note: 'Food, hospitality, turismo — mercato premium in forte espansione' },
      { name: 'New Hampshire', note: 'No income tax, business-friendly — sede di molte holding' },
    ],
    services: 'Cosa offriamo',
    servicesList: [
      'Market entry strategy per Boston e New England',
      'Accesso a network universitari e centri di ricerca per partnership tecnologiche',
      'Identificazione importatori, distributori e buyer nel food & beverage premium',
      'Supporto per accordi di licensing e trasferimento tecnologico',
      'Accesso alla comunità imprenditoriale italiana di Boston (North End network)',
      'Business development nel settore luxury, design e hospitality'
    ],
    cta: 'Entra nel mercato di Boston con GP & Partners',
    ctaBtn: 'Prenota una consulenza'
  },
  en: {
    seoTitle: 'Boston Market Consultant for Italian Companies | GP & Partners',
    seoDesc: 'GP & Partners opens the Boston and New England market for Italian SMEs. Tech, biotech, universities, food — specialized market entry and business development.',
    hero: 'Boston & New England Market',
    heroSub: 'The US hub for tech, biotech and academia — opportunities for Italian companies',
    intro: 'Boston is the heart of American university culture and innovation, with the highest concentration of universities and research centers in the world. It is also the gateway to New England — a market of 15 million consumers with very high per-capita income and strong preference for premium European products.',
    why: 'Why Boston & New England',
    whyItems: [
      'Highest university concentration in the world: MIT, Harvard, Tufts, BU, Northeastern',
      'Global biotech and life sciences hub — opportunities for advanced Italian technologies',
      'One of the highest per-capita incomes in the US — ideal premium market',
      'Strong Italian community: Boston North End, the most authentic Little Italy in America',
      'Key sectors: tech, biotech, finance, food & beverage, luxury, education',
      'Low competitor penetration — almost no specialized Italian consultant present'
    ],
    markets: 'Areas Covered',
    marketsList: [
      { name: 'Boston Metro', note: 'Tech, biotech, finance and university hub — the core market' },
      { name: 'Cambridge', note: 'MIT, Harvard, startup ecosystem — innovation and R&D' },
      { name: 'Providence (RI)', note: 'Design, manufacturing, tourism — growing market' },
      { name: 'Hartford (CT)', note: 'Finance, insurance, manufacturing — solid B2B market' },
      { name: 'Portland (ME)', note: 'Food, hospitality, tourism — premium market in strong expansion' },
      { name: 'New Hampshire', note: 'No income tax, business-friendly — home to many holding companies' },
    ],
    services: 'What We Offer',
    servicesList: [
      'Market entry strategy for Boston and New England',
      'Access to university networks and research centers for technology partnerships',
      'Identification of importers, distributors and buyers in premium food & beverage',
      'Support for licensing agreements and technology transfer',
      'Access to the Italian business community in Boston (North End network)',
      'Business development in luxury, design and hospitality sectors'
    ],
    cta: 'Enter the Boston market with GP & Partners',
    ctaBtn: 'Book a consultation'
  }
};

export function Boston() {
  const { language } = useLanguage();
  const c = CONTENT[language] || CONTENT.it;
  return (
    <>
      <Seo title={c.seoTitle} description={c.seoDesc} keywords="consulente Boston mercato americano italiani, business development Boston, azienda italiana Boston, New England mercato USA, GP Partners" />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader
          title={c.hero}
          subtitle={c.heroSub}
          backgroundImage="https://images.unsplash.com/photo-1501979376754-f8b7a96e611d?auto=format&fit=crop&q=80&w=1920"
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
