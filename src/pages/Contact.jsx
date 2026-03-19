import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple mailto fallback
    const mailtoLink = `mailto:info@gianlucapiazza.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section className="page-hero-apple" style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80) center/cover',
        backgroundAttachment: 'fixed'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow-apple" style={{ color: '#86868b' }}>
            {t.contact.eyebrow}
          </div>
          <h1 className="section-title-apple" style={{ marginBottom: '16px' }}>
            {t.contact.title}
          </h1>
          <p className="section-text-apple" style={{ color: '#a1a1a6', maxWidth: '720px', margin: '0 auto' }}>
            {t.contact.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="content-section-apple">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input-apple"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input-apple"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input-apple"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input-apple"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#1d1d1f' }}>
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea-apple"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary-apple"
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {submitted ? t.contact.form.success : t.contact.form.submit}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Offices */}
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '32px', color: '#1d1d1f' }}>
                {t.contact.info.offices}
              </h3>

              {/* Italy Office Card */}
              <div className="info-card-apple" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} style={{ color: '#34c759', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f' }}>
                      {t.contact.info.italy.city}
                    </p>
                    <p className="text-muted" style={{ marginTop: '4px' }}>
                      {t.contact.info.italy.phone}
                    </p>
                    <p className="text-muted">
                      {t.contact.info.italy.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* USA Office Card */}
              <div className="info-card-apple" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <MapPin size={20} style={{ color: '#34c759', flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#1d1d1f' }}>
                      {t.contact.info.usa.city}
                    </p>
                    <p className="text-muted" style={{ marginTop: '4px' }}>
                      {t.contact.info.usa.phone}
                    </p>
                    <p className="text-muted">
                      {t.contact.info.usa.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="info-card-apple">
                <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
                  {t.contact.info.hours}
                </h4>
                <p className="text-muted" style={{ marginBottom: '4px' }}>
                  {t.contact.info.mondayFriday}
                </p>
                <p className="text-muted" style={{ marginBottom: '12px' }}>
                  {t.contact.info.saturday}
                </p>
                <p style={{ fontSize: '12px', color: '#a1a1a6' }}>
                  {t.contact.info.timezone}
                </p>
              </div>

              {/* Response Time */}
              <div style={{ padding: '16px', background: '#f5f5f7', borderRadius: '12px', marginTop: '24px' }}>
                <p className="text-muted">
                  {t.contact.info.response}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Responsive - Stack on small screens */}
      <style>{`
        @media (max-width: 768px) {
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}
