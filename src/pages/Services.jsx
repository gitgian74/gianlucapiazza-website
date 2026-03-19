import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { CheckCircle2, Sparkles, Wine, Zap, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const { t } = useLanguage();

  const iconMap = {
    Sparkles: Sparkles,
    Wine: Wine,
    Zap: Zap,
    Cog: Cog,
  };

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section className="page-hero-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.services.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ marginBottom: '16px' }}>
            {t.services.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.services.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="content-section-apple">
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="card-grid-2col">
            {t.services.list.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="info-card-apple"
              >
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                  {service.title}
                </h3>
                <p className="text-body" style={{ marginBottom: '24px' }}>
                  {service.description}
                </p>
                <div className="feature-list">
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} className="feature-item">
                      <CheckCircle2 size={18} className="feature-icon" />
                      <span className="text-muted">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="content-section-alt-apple">
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px', textAlign: 'center' }}
          >
            <h2 className="section-title-apple" style={{ marginBottom: '12px' }}>
              {t.services.industries.title}
            </h2>
            <p className="text-body" style={{ color: '#6e6e73', maxWidth: '600px', margin: '0 auto' }}>
              {t.services.industries.subtitle}
            </p>
          </motion.div>

          <div className="card-grid-4col">
            {t.services.industries.sectors.map((sector, idx) => {
              const IconComponent = iconMap[sector.icon] || Sparkles;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="info-card-white"
                  style={{ textAlign: 'center' }}
                >
                  <IconComponent size={32} style={{ color: '#34c759', margin: '0 auto 16px', display: 'block' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                    {sector.name}
                  </h3>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    {sector.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-apple">
        <div className="cta-glow" />
        <motion.div
          style={{ position: 'relative', zIndex: 2 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title-apple" style={{ color: 'white', marginBottom: '24px', textAlign: 'center' }}>
            {t.services.cta.title}
          </h2>
          <p style={{ color: '#a1a1a6', textAlign: 'center', marginBottom: '40px', fontSize: '17px' }}>
            {t.services.cta.description}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary-apple">
              {t.services.cta.button}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
