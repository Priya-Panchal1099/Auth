'use client';
import React, { useState } from 'react';

const officeLocations = [
  {
    city: 'Ahmedabad',
    icon: '🏢',
    address: '12th Floor, Bandra Kurla Complex, Ahmedabad, Gujarat 382445',
    phone: '+91 8320154167',
    email: 'panchalpriya1099@gmail.com',
    hours: 'Mon–Fri: 9 AM – 6 PM IST',
  },
  {
    city: 'Surat',
    icon: '🏙️',
    address: '8th Floor, Prestige Tech Park, Outer Ring Road, Surat 560103',
    phone: '+91 9876543210',
    email: 'surat@shopvault.com',
    hours: 'Mon–Sat: 9 AM – 7 PM IST',
  },
  {
    city: 'Arvalli',
    icon: '🌆',
    address: 'Tower B, Cyber City, DLF Phase II, Arvalli, Gujarat 383205',
    phone: '+91 9876543210',
    email: 'arvalli@shopvault.com',
    hours: 'Mon–Fri: 9 AM – 6 PM IST',
  },
];

const faqs = [
  {
    q: 'How do I track my order?',
    a: 'Once your order is shipped, you will receive an email with a tracking link. You can also check your order status in the Admin Dashboard.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy on all products. Items must be in original condition with packaging.',
  },
  {
    q: 'How can I become a seller?',
    a: 'Register with an ADMIN role and contact our seller support team. We will verify and onboard you within 2 business days.',
  },
  {
    q: 'Is my payment information secure?',
    a: 'Absolutely. All transactions are encrypted with 256-bit SSL and we never store your payment details on our servers.',
  },
];

const ContactUS = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  // Shared style helpers
  const card = (extra?: React.CSSProperties): React.CSSProperties => ({
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '20px',
    padding: '2rem',
    ...extra,
  });

  const badge: React.CSSProperties = {
    display: 'inline-block',
    background: 'rgba(99,102,241,0.12)',
    border: '1px solid rgba(99,102,241,0.25)',
    color: '#818cf8',
    fontSize: '0.75rem',
    fontWeight: 700,
    padding: '0.35rem 1rem',
    borderRadius: '100px',
    marginBottom: '1rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase' as const,
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
    fontWeight: 800,
    fontFamily: "'Outfit', sans-serif",
    color: '#f1f5f9',
    marginBottom: '0.75rem',
    lineHeight: 1.2,
  };

  const input: React.CSSProperties = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '10px',
    color: '#f1f5f9',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    boxSizing: 'border-box',
  };

  const label: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.45rem',
    fontSize: '0.85rem',
    fontWeight: 500,
    color: '#94a3b8',
  };

  return (
    <main style={{ background: '#0f0f1a', minHeight: '100vh', color: '#f1f5f9' }}>

      {/* ── Hero ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: 'radial-gradient(ellipse at 50% 70%, rgba(99,102,241,0.12) 0%, transparent 60%), #0f0f1a',
        textAlign: 'center',
      }}>
        <span style={badge}>Get in Touch</span>
        <h1 style={{ ...sectionTitle, fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
          We&apos;d love to{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>hear from you</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#64748b', maxWidth: '560px', margin: '0 auto', lineHeight: 1.75 }}>
          Whether you have a question, feedback, or just want to say hello —
          our team is ready to help you within 24 hours.
        </p>
      </section>

      {/* ── Quick Contact Info ── */}
      <section style={{ padding: '3rem 1.5rem 0', background: '#0a0a15' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {[
            { icon: '📞', label: 'Call Us', value: '+91 8320154167', sub: 'Mon–Sat, 9 AM – 7 PM' },
            { icon: '✉️', label: 'Email Us', value: 'panchalpriya1099@gmail.com', sub: 'Reply within 24 hours' },
            { icon: '💬', label: 'Live Chat', value: 'Available on Dashboard', sub: 'Instant support' },
            { icon: '📍', label: 'HQ Address', value: 'Ahmedabad, Gujarat', sub: 'India – 382445' },
          ].map((item) => (
            <div key={item.label} style={{ ...card(), textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
              <p style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.3rem' }}>{item.label}</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f1f5f9', marginBottom: '0.25rem' }}>{item.value}</p>
              <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact Form + Map ── */}
      <section style={{ padding: '4rem 1.5rem', background: '#0a0a15' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

          {/* Form */}
          <div style={card()}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '0.5rem' }}>Send a Message</h2>
            <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: '2rem' }}>Fill in the form below and we&apos;ll get back to you shortly.</p>

            {submitted && (
              <div style={{
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '10px',
                padding: '1rem',
                color: '#34d399',
                marginBottom: '1.5rem',
                fontSize: '0.9rem',
                textAlign: 'center',
              }}>
                ✅ Message sent successfully! We&apos;ll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={label} htmlFor="name">Full Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Priya Panchal" style={input} />
                </div>
                <div>
                  <label style={label} htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="priya@example.com" style={input} />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={label} htmlFor="subject">Subject</label>
                <select id="subject" name="subject" required value={form.subject} onChange={handleChange} style={input}>
                  <option value="">Select a subject</option>
                  <option value="order">Order Issue</option>
                  <option value="account">Account Help</option>
                  <option value="payment">Payment Query</option>
                  <option value="seller">Become a Seller</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  style={{ ...input, resize: 'vertical', minHeight: '130px' }}
                />
              </div>

              <button type="submit" style={{
                width: '100%',
                padding: '0.9rem',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
              }}>
                🚀 Send Message
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Response Time */}
            <div style={{ ...card(), display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>⏱️</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Fast Response Time</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  Our average first-response time is under 2 hours on business days. Critical issues are escalated immediately.
                </p>
              </div>
            </div>

            {/* Support Channels */}
            <div style={card()}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>📲 Support Channels</h3>
              {[
                { channel: 'Email Support', detail: 'panchalpriya1099@gmail.com', badge: '24/7' },
                { channel: 'Phone Support', detail: '+91 8320154167', badge: 'Business Hours' },
                { channel: 'WhatsApp', detail: '+91 8320154167', badge: 'Quick Replies' },
                { channel: 'Help Portal', detail: 'help.shopvault.com', badge: 'Self-Service' },
              ].map((s) => (
                <div key={s.channel} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.15rem' }}>{s.channel}</p>
                    <p style={{ fontSize: '0.78rem', color: '#64748b' }}>{s.detail}</p>
                  </div>
                  <span style={{
                    background: 'rgba(99,102,241,0.12)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: '#818cf8',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '100px',
                  }}>{s.badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Locations ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0f0f1a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={badge}>Our Offices</span>
            <h2 style={sectionTitle}>Find us across India</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {officeLocations.map((office) => (
              <div key={office.city} style={card({ transition: 'all 0.3s ease' })}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '2rem' }}>{office.icon}</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{office.city}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: '#6366f1', fontSize: '0.9rem', flexShrink: 0 }}>📍</span>
                    <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{office.address}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#6366f1', fontSize: '0.9rem' }}>📞</span>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{office.phone}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#6366f1', fontSize: '0.9rem' }}>✉️</span>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{office.email}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#6366f1', fontSize: '0.9rem' }}>🕐</span>
                    <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a15' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={badge}>FAQ</span>
            <h2 style={sectionTitle}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${openFaq === i ? 'rgba(99,102,241,0.35)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: '#f1f5f9',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {faq.q}
                  <span style={{ color: '#6366f1', fontSize: '1.2rem', flexShrink: 0, marginLeft: '1rem' }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    lineHeight: 1.75,
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '1rem',
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUS;