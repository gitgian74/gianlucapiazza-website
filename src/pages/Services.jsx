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
      <section style={{ background: '#1d1d1f', padding: '120px 24px 80px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.services.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            {t.services.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.services.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="section-inner-apple">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {t.services.list.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="service-card-apple"
                style={{
                  padding: '36px 28px',
                  background: '#f5f5f7',
                  borderRadius: '18px',
                  border: '1px solid #e5e5e7',
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#555555', lineHeight: '1.6', marginBottom: '24px' }}>
                  {service.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.features.map((feature, fidx) => (
                    <div key={fidx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} style={{ color: '#34c759', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '13px', color: '#555555' }}>
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
      <section style={{ padding: '80px 24px', background: '#f5f5f7' }}>
        <div className="section-inner-apple">
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
            <p className="section-text-apple" style={{ color: '#555555', maxWidth: '600px', margin: '0 auto' }}>
              {t.services.industries.subtitle}
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px',
            }}
          >
            {t.services.industries.sectors.map((sector, idx) => {
              const IconComponent = iconMap[sector.icon] || Sparkles;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    padding: '32px 24px',
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid #e5e5e7',
                    textAlign: 'center',
                  }}
                >
                  <IconComponent size={32} style={{ color: '#34c759', margin: '0 auto 16px' }} />
                  <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                    {sector.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#555555', lineHeight: '1.6' }}>
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
