import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/use-language';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Seo } from '../../components/shared/Seo';
import { PageHeader } from '../../components/shared/PageHeader';
import { marketLandingData } from './marketLandingData';

const FAQ_TITLE = { it: 'Domande frequenti', en: 'Frequently Asked Questions' };

export function MarketLandingPage({ city }) {
  const { language } = useLanguage();
  const data = marketLandingData[city];
  const c = data[language] || data.it;
  return (
    <>
      <Seo title={c.seoTitle} description={c.seoDesc} keywords={data.keywords} />
      <div className="min-h-screen bg-background pb-20">
        <PageHeader
          title={c.hero}
          subtitle={c.heroSub}
          backgroundImage={data.image}
        />
        <section className="max-w-4xl mx-auto px-6 py-16">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-xl text-muted-foreground leading-relaxed">{c.intro}</motion.p>
        </section>
        <section className="bg-card/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">{c.why}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.whyItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-3 items-start">
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
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="liquid-glass border border-white/20 rounded-xl p-5">
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
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-3 items-start">
                  <ArrowRight className="text-primary mt-1 shrink-0" size={18} />
                  <span className="text-muted-foreground">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {c.faqs?.length > 0 && (
          <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-10">{FAQ_TITLE[language] || FAQ_TITLE.it}</h2>
            <div className="space-y-5">
              {c.faqs.map(([question, answer], i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="liquid-glass border border-white/20 rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{answer}</p>
                </motion.article>
              ))}
            </div>
          </section>
        )}
        <section className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-6">{c.cta}</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"><span>{c.ctaBtn}</span><ArrowRight size={16} /></Link>
        </section>
      </div>
    </>
  );
}
