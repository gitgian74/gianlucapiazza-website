import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, Globe, TrendingUp, Users, Building2, Briefcase, Brain, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

// ═══════════════════════════════════════════
// TICKER DATA - Financial symbols
// ═══════════════════════════════════════════
const tickerData = [
  { symbol: 'S&P 500', price: '5,842.31', change: '+1.24%', up: true },
  { symbol: 'NASDAQ', price: '18,439.17', change: '+1.87%', up: true },
  { symbol: 'FTSE MIB', price: '35,621.40', change: '+0.62%', up: true },
  { symbol: 'DAX', price: '18,892.55', change: '-0.31%', up: false },
  { symbol: 'AAPL', price: '198.45', change: '+2.14%', up: true },
  { symbol: 'MSFT', price: '425.22', change: '+0.89%', up: true },
  { symbol: 'GOOGL', price: '175.63', change: '-0.45%', up: false },
  { symbol: 'AMZN', price: '192.18', change: '+1.33%', up: true },
  { symbol: 'TSLA', price: '248.92', change: '+3.21%', up: true },
  { symbol: 'META', price: '523.17', change: '+1.78%', up: true },
  { symbol: 'NVDA', price: '878.36', change: '+4.12%', up: true },
  { symbol: 'JPM', price: '198.54', change: '+0.34%', up: true },
  { symbol: 'EUR/USD', price: '1.0847', change: '-0.12%', up: false },
  { symbol: 'GBP/USD', price: '1.2634', change: '+0.08%', up: true },
  { symbol: 'BTC', price: '67,842', change: '+2.45%', up: true },
  { symbol: 'ETH', price: '3,521', change: '+1.89%', up: true },
  { symbol: 'GOLD', price: '2,342.80', change: '+0.67%', up: true },
  { symbol: 'OIL WTI', price: '78.34', change: '-1.23%', up: false },
  { symbol: 'DOW', price: '39,127.14', change: '+0.42%', up: true },
  { symbol: 'NIKKEI', price: '40,003.60', change: '+1.56%', up: true },
  { symbol: 'VIX', price: '13.25', change: '-4.32%', up: false },
  { symbol: 'FERRARI', price: '425.80', change: '+1.12%', up: true },
  { symbol: 'ENI', price: '14.23', change: '+0.56%', up: true },
  { symbol: 'SILVER', price: '28.94', change: '+1.45%', up: true },
  { symbol: 'USD/JPY', price: '154.32', change: '+0.28%', up: true },
  { symbol: 'RUSSELL', price: '2,087.63', change: '-0.67%', up: false },
];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TickerRow({ config }) {
  const [items] = useState(() => {
    const shuffled = shuffleArray(tickerData);
    return [...shuffled, ...shuffled];
  });

  return (
    <div className="ticker-row" style={config.style}>
      {items.map((item, idx) => (
        <div key={idx} className="ticker-item">
          <span className="ticker-symbol">{item.symbol}</span>
          <span className="ticker-price">{item.price}</span>
          <span className={`ticker-change ${item.up ? 'up' : 'down'}`}>
            {item.change}
          </span>
        </div>
      ))}
    </div>
  );
}

const rowConfigs = [
  { style: { top: '8%', animation: 'tickerScroll1 45s linear infinite', transform: 'translateZ(-100px) rotateX(2deg)', opacity: 0.35 }},
  { style: { top: '22%', animation: 'tickerScroll2 38s linear infinite', transform: 'translateZ(50px) rotateX(-1deg)', opacity: 0.55 }},
  { style: { top: '38%', animation: 'tickerScroll3 32s linear infinite', transform: 'translateZ(150px) rotateX(0.5deg)', opacity: 0.85 }},
  { style: { top: '55%', animation: 'tickerScroll4 40s linear infinite', transform: 'translateZ(80px) rotateX(-0.5deg)', opacity: 0.6 }},
  { style: { top: '70%', animation: 'tickerScroll5 50s linear infinite', transform: 'translateZ(-50px) rotateX(1.5deg)', opacity: 0.4 }},
  { style: { top: '85%', animation: 'tickerScroll6 42s linear infinite', transform: 'translateZ(-150px) rotateX(2.5deg)', opacity: 0.25 }},
];

export function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      const items = document.querySelectorAll('.ticker-item');
      if (items.length === 0) return;
      const randomIdx = Math.floor(Math.random() * items.length);
      const item = items[randomIdx];
      const priceEl = item.querySelector('.ticker-price');
      const changeEl = item.querySelector('.ticker-change');
      if (!priceEl || !changeEl) return;

      const currentPrice = parseFloat(priceEl.textContent.replace(/,/g, ''));
      if (isNaN(currentPrice)) return;

      const variation = (Math.random() - 0.48) * currentPrice * 0.002;
      const newPrice = currentPrice + variation;
      const pctChange = (variation / currentPrice * 100);
      const isUp = pctChange >= 0;

      if (newPrice > 1000) {
        priceEl.textContent = newPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      } else if (newPrice > 10) {
        priceEl.textContent = newPrice.toFixed(2);
      } else {
        priceEl.textContent = newPrice.toFixed(4);
      }

      changeEl.textContent = (isUp ? '+' : '') + pctChange.toFixed(2) + '%';
      changeEl.className = 'ticker-change ' + (isUp ? 'up' : 'down');
      item.style.background = isUp ? 'rgba(52,199,89,0.08)' : 'rgba(255,69,58,0.08)';
      setTimeout(() => { item.style.background = ''; }, 600);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="apple-redesign">
      <section className="hero-3d">
        <div className="ticker-scene">
          <div className="ambient-dot" style={{ width: 300, height: 300, top: '20%', left: '10%' }} />
          <div className="ambient-dot" style={{ width: 200, height: 200, top: '60%', right: '15%', background: 'rgba(94,92,230,0.2)' }} />
          {rowConfigs.map((config, idx) => (
            <TickerRow key={idx} config={config} />
          ))}
        </div>

        <motion.div
          className="hero-content-apple"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-badge-apple">International Business Consultant</span>
          <h1 className="hero-title-apple">
            Navigate<br />
            <span className="gradient-text-apple">Global Markets</span>
          </h1>
          <p className="hero-subtitle-apple">{t.home.tagline}</p>
          <div className="hero-buttons-apple">
            <Link to="/contact" className="btn-primary-apple">
              {t.home.ctaButton} <span className="btn-arrow-apple">→</span>
            </Link>
            <Link to="/services" className="btn-secondary-apple">
              {t.home.discoverServices} <span className="btn-arrow-apple">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="stats-section-apple">
        <motion.div className="stats-grid-apple" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="stat-card-apple">
            <div className="stat-number-apple">{t.home.stats.experienceValue}</div>
            <div className="stat-label-apple">{t.home.stats.experience}</div>
          </div>
          <div className="stat-card-apple">
            <div className="stat-number-apple">{t.home.stats.marketsValue}</div>
            <div className="stat-label-apple">{t.home.stats.markets}</div>
          </div>
          <div className="stat-card-apple">
            <div className="stat-number-apple">Global</div>
            <div className="stat-label-apple">{t.home.stats.partnerships}</div>
          </div>
        </motion.div>
      </section>

      <section className="about-section-apple">
        <motion.div className="section-inner-apple" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="section-eyebrow-apple">Chi Sono</div>
          <h2 className="section-title-apple">Consulente Internazionalizzazione.<br />Business Developer.<br />Entrepreneur.</h2>
          <p className="section-text-apple">{t.home.intro}</p>
          <div className="markets-grid-apple">
            {['Florida', 'TriState', 'Texas', 'Washington State', 'California', 'Las Vegas'].map(market => (
              <span key={market} className="market-tag-apple">🇺🇸 {market}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="services-section-apple">
        <div className="section-inner-apple">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-eyebrow-apple">Servizi</div>
            <h2 className="section-title-apple">Aree di<br />competenza.</h2>
          </motion.div>
        </div>
        <div className="services-grid-apple">
          {[
            { icon: <Globe size={28} />, title: t.services.service1.title, desc: t.services.service1.description, color: '#0071e3' },
            { icon: <TrendingUp size={28} />, title: t.services.service2.title, desc: t.services.service2.description, color: '#5e5ce6' },
            { icon: <Handshake size={28} />, title: 'Partnership Strategiche', desc: 'Costruzione e gestione di network di partner internazionali per creare sinergie e opportunità di business cross-border tra Italia e USA.', color: '#30d158' },
            { icon: <Brain size={28} />, title: 'AI Market Research', desc: 'Analisi di mercato avanzata powered by AI per identificare trend, opportunità e posizionamento competitivo nei mercati internazionali target.', color: '#ff9f0a' },
          ].map((service, idx) => (
            <motion.div key={idx} className="service-card-apple" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
              <div className="service-icon-apple" style={{ color: service.color }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to="/services" className="service-link-apple">Scopri di più <span className="btn-arrow-apple">→</span></Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="cta-section-apple">
        <div className="cta-glow" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-title-apple" style={{ color: 'white', maxWidth: 700, margin: '0 auto 24px' }}>{t.home.ctaTitle}</h2>
          <p className="section-text-apple" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto 40px' }}>{t.home.ctaText}</p>
          <Link to="/contact" className="btn-primary-apple" style={{ fontSize: 17 }}>
            {t.home.ctaButton} <span className="btn-arrow-apple">→</span>
          </Link>
          <div className="cta-contacts">
            <div><span className="cta-contact-label">Email</span><span>mail@gianlucapiazza.com</span></div>
            <div><span className="cta-contact-label">Italia</span><span>+39 337 303431</span></div>
            <div><span className="cta-contact-label">USA</span><span>+1 (305) 548-0002</span></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
