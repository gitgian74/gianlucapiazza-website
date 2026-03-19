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
      <section className="page-hero-apple" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80) center/cover',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.about.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ marginBottom: '16px' }}>
            {t.about.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.about.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="content-section-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <h2 className="section-title-apple" style={{ marginBottom: '12px' }}>
            {t.about.experience.title}
          </h2>
        </motion.div>

        <div className="timeline-apple">
          {t.about.experience.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div style={{ marginBottom: '8px', color: '#a1a1a6', fontSize: '14px', fontWeight: '600' }}>
                {item.year}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px', color: '#1d1d1f' }}>
                {item.role}
              </h3>
              <div style={{ fontSize: '14px', color: '#6f6f72', marginBottom: '8px' }}>
                {item.company}
              </div>
              <p className="text-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="content-section-alt-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '60px', textAlign: 'center' }}
        >
          <h2 className="section-title-apple">{t.about.skills.title}</h2>
        </motion.div>

        <div className="card-grid-4col">
          {t.about.skills.items.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="info-card-white"
              style={{ textAlign: 'center' }}
            >
              <p style={{ fontSize: '15px', fontWeight: '600', color: '#1d1d1f' }}>
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="content-section-apple">
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
                className="info-card-apple"
                style={{ display: 'flex', gap: '12px' }}
              >
                <CheckCircle2 size={20} className="feature-icon" style={{ marginTop: '2px' }} />
                <p style={{ fontSize: '14px', color: '#1d1d1f', lineHeight: '1.6' }}>
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
