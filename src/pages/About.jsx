import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { CheckCircle2, Target, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const { t } = useLanguage();

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
            {t.about.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            {t.about.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.about.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="section-inner-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-apple" style={{ marginBottom: '60px', textAlign: 'center' }}>
              {t.about.experience.title}
            </h2>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {t.about.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  paddingBottom: '48px',
                  paddingLeft: '40px',
                  borderLeft: '2px solid #d5d5d7',
                  position: 'relative',
                  marginLeft: '12px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-8px',
                    top: '0px',
                    width: '12px',
                    height: '12px',
                    background: '#1d1d1f',
                    borderRadius: '50%',
                  }}
                />
                <div style={{ marginBottom: '8px', color: '#a1a1a6', fontSize: '14px', fontWeight: '600' }}>
                  {item.year}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px', color: '#1d1d1f' }}>
                  {item.role}
                </h3>
                <div style={{ fontSize: '14px', color: '#6f6f72', marginBottom: '8px' }}>
                  {item.company}
                </div>
                <p style={{ fontSize: '14px', color: '#555555', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section style={{ padding: '80px 24px', background: '#f5f5f7' }}>
        <div className="section-inner-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px', textAlign: 'center' }}
          >
            <h2 className="section-title-apple">{t.about.skills.title}</h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {t.about.skills.items.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="service-card-apple"
                style={{
                  padding: '28px 24px',
                  background: 'white',
                  borderRadius: '18px',
                  border: '1px solid #e5e5e7',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>
                  {skill}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div className="section-inner-apple">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-apple" style={{ marginBottom: '40px', textAlign: 'center' }}>
              {t.about.philosophy.title}
            </h2>
            <p className="section-text-apple" style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
              {t.about.philosophy.description}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {t.about.philosophy.values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  style={{
                    padding: '24px',
                    background: '#f5f5f7',
                    borderRadius: '14px',
                    display: 'flex',
                    gap: '12px',
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: '#34c759', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: '1.6' }}>
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            {t.about.cta.title}
          </h2>
          <p style={{ color: '#a1a1a6', textAlign: 'center', marginBottom: '40px', fontSize: '17px' }}>
            {t.about.cta.description}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary-apple">
              {t.about.cta.button}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
