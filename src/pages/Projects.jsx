import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Projects() {
  const { t } = useLanguage();

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section className="page-hero-apple" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80) center/cover',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.projects.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ marginBottom: '16px' }}>
            {t.projects.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.projects.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="content-section-apple">
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="card-grid-2col">
            {t.projects.cases.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="info-card-apple"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Industry Tags */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  {caseStudy.industries.map((industry, iidx) => (
                    <span
                      key={iidx}
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#34c759',
                        background: '#e8f5e9',
                        padding: '4px 12px',
                        borderRadius: '12px',
                      }}
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                  {caseStudy.title}
                </h3>

                {/* Subtitle */}
                <p style={{ fontSize: '13px', color: '#86868b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={14} />
                  {caseStudy.subtitle}
                </p>

                {/* Challenge */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#3d3d40', marginBottom: '6px' }}>
                    Challenge
                  </p>
                  <p style={{ fontSize: '13px', color: '#3d3d40', lineHeight: '1.5' }}>
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#3d3d40', marginBottom: '6px' }}>
                    Solution
                  </p>
                  <p style={{ fontSize: '13px', color: '#3d3d40', lineHeight: '1.5' }}>
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Result */}
                <div style={{ marginBottom: '16px', paddingTop: '16px', borderTop: '1px solid #d5d5d7' }}>
                  <p style={{ fontSize: '12px', fontWeight: '600', color: '#34c759', marginBottom: '6px' }}>
                    Result
                  </p>
                  <p style={{ fontSize: '13px', color: '#1d1d1f', lineHeight: '1.5', fontWeight: '500' }}>
                    {caseStudy.result}
                  </p>
                </div>

                {/* Metrics */}
                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #d5d5d7' }}>
                  <p className="text-muted" style={{ lineHeight: '1.6' }}>
                    {caseStudy.metrics}
                  </p>
                </div>
              </motion.div>
            ))}
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
            {t.projects.cta.title}
          </h2>
          <p style={{ color: '#a1a1a6', textAlign: 'center', marginBottom: '40px', fontSize: '17px' }}>
            {t.projects.cta.description}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn-primary-apple">
              {t.projects.cta.button}
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
