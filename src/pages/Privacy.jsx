import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/use-language';
import { Shield, Lock, Eye, Trash2, Download, XCircle } from 'lucide-react';

export function Privacy() {
  const { t } = useLanguage();

  const sections = [
    {
      icon: Shield,
      title: '1. Data Controller & Contact Information',
      content: `Data Controller: Lab101 Srl
Address: Via delle Primule 62, Monteviale (VI), Italy
P.IVA: 04309880243
Contact: mail@gianlucapiazza.com
Data Protection Officer (DPO): privacy@gianlucapiazza.com

We are committed to protecting your personal data and respecting your privacy in accordance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other applicable privacy laws.`
    },
    {
      icon: Eye,
      title: '2. Data We Collect',
      content: `We collect the following types of personal data:

• Navigation Data: IP address, device type, browser information, pages visited, time spent on site (via Google Analytics 4)
• Contact Form Data: Name, email address, company name, subject, message
• Cookies & Tracking: Session cookies, preference cookies, analytics cookies (Google Analytics 4)
• Communication Data: Email address if you contact us directly

We only collect data that is necessary for the purposes outlined in this policy. We do not engage in deceptive data collection practices.`
    },
    {
      icon: Lock,
      title: '3. Legal Basis for Processing (GDPR)',
      content: `Your personal data is processed on the following legal bases:

• Contractual Necessity: Processing data to fulfill your contact requests or service agreements
• Legitimate Interests: Analyzing website usage to improve our services and user experience
• Legal Obligation: Complying with Italian tax and employment law
• Consent: For optional analytics and marketing cookies (only with your explicit consent)

For EU residents, you have the right to withdraw consent at any time by updating your cookie preferences.`
    },
    {
      icon: Download,
      title: '4. Your Rights (GDPR & CCPA)',
      content: `EU & GDPR Rights:
• Right to Access: You can request a copy of your personal data at any time
• Right to Rectification: You can correct inaccurate or incomplete data
• Right to Erasure: You can request deletion of your data ("right to be forgotten")
• Right to Data Portability: You can receive your data in a portable, machine-readable format
• Right to Restrict Processing: You can limit how we use your data
• Right to Object: You can object to certain processing activities
• Right to Lodge a Complaint: You can contact your national Data Protection Authority

California CCPA Rights:
• Right to Know: Request categories and specific pieces of personal information we collect
• Right to Delete: Request deletion of personal information we have collected
• Right to Opt-Out: Opt out of the "sale" or "sharing" of your personal information
• Right to Non-Discrimination: You cannot be discriminated against for exercising CCPA rights
• Right to Correct: Request correction of inaccurate personal information
• Right to Limit Use: Limit our use of sensitive personal information

To exercise any of these rights, contact: privacy@gianlucapiazza.com`
    },
    {
      icon: Trash2,
      title: '5. Data Retention',
      content: `We retain personal data for the following periods:

• Contact Form Data: 3 years (for service follow-up and legal compliance)
• Google Analytics Data: 14 months (automatically deleted by Google)
• Cookies: Session cookies are deleted when you close your browser; persistent cookies expire after 2 years
• Email Communications: Retained for customer service purposes for up to 3 years

After these periods, data is securely deleted unless legal requirements mandate longer retention. You can request deletion at any time by contacting privacy@gianlucapiazza.com.`
    },
    {
      icon: Lock,
      title: '6. Google Analytics 4',
      content: `This website uses Google Analytics 4 to understand how visitors interact with our site. Analytics data helps us improve user experience and website performance.

Google Analytics Data:
• IP Anonymization: We anonymize IP addresses to protect user privacy
• Data Sharing: Anonymized data is shared with Google for analytics purposes
• Opt-Out: You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on
• Privacy Policy: Google's privacy practices are governed by https://policies.google.com/privacy

Data collected includes: pages visited, time spent on site, device type, browser information, and general location (country/city level only).`
    },
    {
      icon: XCircle,
      title: '7. Cookie Policy',
      content: `We use three types of cookies:

Essential/Technical Cookies (Necessary):
• Session cookies for website functionality
• Authentication and security cookies
• Preference cookies to remember your language and settings
Status: Always active, no consent required

Analytics Cookies:
• Google Analytics 4 tracking
• User behavior analysis and performance metrics
Status: Requires explicit consent

Marketing/Advertising Cookies:
• Third-party tracking (if applicable)
• Remarketing and audience analytics
Status: Requires explicit consent

You can manage cookie preferences in our Cookie Banner at the bottom of your screen. Most browsers allow you to reject cookies, but this may limit site functionality. Detailed cookie information is available upon request.`
    },
    {
      icon: Shield,
      title: '8. Data Security',
      content: `We implement industry-standard security measures to protect your personal data:

• SSL/TLS Encryption: All data transmission is encrypted
• Secure Infrastructure: Hosted on secure, GDPR-compliant servers
• Access Control: Data access is restricted to authorized personnel only
• Regular Security Audits: We conduct periodic security assessments
• No Sensitive Data Storage: We do not store credit card, banking, or highly sensitive information

While we strive to protect your data, no security system is completely foolproof. We encourage you to use strong passwords and notify us immediately if you suspect unauthorized access.`
    },
    {
      icon: Eye,
      title: '9. Third-Party Services',
      content: `We use the following third-party services:

Google Analytics 4:
• Purpose: Website analytics and user behavior tracking
• Data Shared: Anonymized usage data
• Privacy Policy: https://policies.google.com/privacy
• Compliance: GDPR-compliant with Data Processing Agreement

Contact Forms:
• Purpose: Receive and respond to inquiries
• Processing: Emails are handled securely
• Contact Processor: Gianluca Piazza Consulting

Email Services:
• Purpose: Direct communication with users
• Security: Encrypted email transmission
• Data Controller: Lab101 Srl

We only use third-party services that meet strict privacy and security standards.`
    },
    {
      icon: Download,
      title: '10. Data Transfers & International Processing',
      content: `If you are located in the EU, your data may be processed in the United States (via Google Analytics and other cloud services). We ensure such transfers are protected by:

• Standard Contractual Clauses (SCCs)
• Adequacy Decisions (where available)
• Explicit consent for transfers

For more information about international data transfers, contact: privacy@gianlucapiazza.com`
    },
    {
      icon: Shield,
      title: '11. Children\'s Privacy',
      content: `This website is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal data from children. If we discover that a child has provided personal data, we will delete it immediately.

If you believe a child has provided data, please contact: privacy@gianlucapiazza.com`
    },
    {
      icon: Lock,
      title: '12. CCPA "Do Not Sell" Notice',
      content: `Under the California Consumer Privacy Act (CCPA), we want to inform you:

We do NOT "sell" or "share" personal information as defined by the CCPA. We do not engage in data brokering or third-party marketing activities. Your data is used exclusively for:

• Providing requested services
• Improving website functionality
• Analytics and site optimization (with anonymization)

California residents have the right to opt out of any sale of personal information. Since we do not sell data, there is no opt-out mechanism required; however, you can manage your preferences at any time by contacting: privacy@gianlucapiazza.com.`
    },
    {
      icon: Eye,
      title: '13. Contact Us & Data Requests',
      content: `To exercise your privacy rights, request a copy of your data, or ask questions about this Privacy Policy, contact us:

Email: privacy@gianlucapiazza.com
Mail: Via delle Primule 62, Monteviale (VI) 36010, Italy
Phone: +39 337 303431

We will respond to all requests within 30 days (GDPR) or 45 days (CCPA) of receipt. No fee will be charged for reasonable requests unless they are excessive or repetitive.

For complaints regarding our data practices:
• EU: Contact your national Data Protection Authority (e.g., Garante della Privacy in Italy)
• US/CCPA: File a complaint with the California Attorney General`
    },
    {
      icon: Download,
      title: '14. Policy Updates & Changes',
      content: `We may update this Privacy Policy from time to time to reflect changes in:

• Legal requirements and regulations
• Our data processing practices
• New features or services

We will notify you of material changes by:
• Email notification (if you have provided your email)
• Prominent notice on our website
• Updated "Last Modified" date at the top of this policy

Your continued use of the website after changes indicates your acceptance of the updated policy. We encourage you to review this policy periodically.`
    }
  ];

  return (
    <div className="apple-redesign">
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), linear-gradient(135deg, #1d1d1f 0%, #3a3a3f 100%)',
        padding: '120px 24px 80px', 
        textAlign: 'center' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title-apple" style={{ color: 'white', marginBottom: '16px' }}>
            Privacy & Cookie Policy
          </h1>
          <p style={{ color: '#a1a1a6', fontSize: '15px' }}>
            Last Updated: March 19, 2026
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 24px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              marginBottom: '60px',
              padding: '24px',
              background: '#f5f5f7',
              borderRadius: '14px',
              borderLeft: '4px solid #34c759',
            }}
          >
            <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#1d1d1f' }}>
              Quick Summary
            </h2>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555555' }}>
              We respect your privacy and are fully compliant with GDPR (EU), CCPA (California), and international privacy standards. We collect minimal data, use industry-standard security, and never sell your information. You have full control over your data and can request access, correction, or deletion at any time.
            </p>
          </motion.div>

          {sections.map((section, idx) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                style={{ marginBottom: '48px' }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'flex-start' }}>
                  <IconComponent size={24} style={{ color: '#34c759', marginTop: '2px', flexShrink: 0 }} />
                  <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1d1d1f', margin: 0 }}>
                    {section.title}
                  </h2>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.8', color: '#555555', whiteSpace: 'pre-wrap', marginLeft: '36px' }}>
                  {section.content}
                </p>
              </motion.div>
            );
          })}

          {/* Important Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: '80px',
              padding: '24px',
              background: '#fff3cd',
              borderRadius: '14px',
              borderLeft: '4px solid #f39c12',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#856404' }}>
              Legal Disclaimer
            </h3>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: '#856404' }}>
              This Privacy Policy is provided for informational purposes and serves as our commitment to data protection. For complete legal terms, official compliance documentation, or specific inquiries about our data practices, please contact us directly at privacy@gianlucapiazza.com or mail@gianlucapiazza.com. We are committed to protecting your privacy and complying with all applicable privacy regulations including GDPR, CCPA, and other international standards. If you have concerns or wish to file a complaint, you have the right to contact the relevant regulatory authority in your jurisdiction.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
