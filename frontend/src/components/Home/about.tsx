'use client';
import React from 'react';

const AboutPage = () => {
  const team = [
    {
      name: 'Priya Panchal',
      role: 'Founder & Full-Stack Developer',
      avatar: '👩‍💻',
      bio: 'Passionate about building scalable e-commerce solutions with Spring Boot and React.',
    },
    {
      name: 'Priya Panchal',
      role: 'Backend Architect',
      avatar: '👨‍🔧',
      bio: 'Expert in microservices, JWT security, and database optimization for high-traffic apps.',
    },
    {
      name: 'Priya Panchal',
      role: 'UI/UX Designer',
      avatar: '👩‍🎨',
      bio: 'Creates intuitive, accessible interfaces that delight users across all devices and platforms.',
    },
    // {
    //   name: 'Vikram Mehta',
    //   role: 'DevOps Engineer',
    //   avatar: '👨‍💼',
    //   bio: 'Ensures 99.9% uptime with containerized deployments, CI/CD pipelines, and cloud infra.',
    // },
  ];

  const values = [
    { icon: '🎯', title: 'Customer First', desc: 'Every decision starts with how it benefits our customers.' },
    { icon: '🔐', title: 'Security Always', desc: 'Your data and transactions are protected with enterprise-grade security.' },
    { icon: '💡', title: 'Innovation', desc: 'We continuously improve with the latest technologies and best practices.' },
    { icon: '🤝', title: 'Transparency', desc: 'Honest pricing, clear policies, no hidden fees — ever.' },
  ];

  return (
    <main style={{ background: '#0f0f1a', minHeight: '100vh', color: '#f1f5f9' }}>

      {/* ── Hero ── */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        background: 'radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.14) 0%, transparent 70%), #0f0f1a',
        textAlign: 'center',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(99,102,241,0.12)',
          border: '1px solid rgba(99,102,241,0.25)',
          color: '#818cf8',
          fontSize: '0.75rem',
          fontWeight: 700,
          padding: '0.35rem 1rem',
          borderRadius: '100px',
          marginBottom: '1.25rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>Our Story</span>

        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 900,
          fontFamily: "'Outfit', sans-serif",
          lineHeight: 1.15,
          marginBottom: '1.25rem',
          letterSpacing: '-0.5px',
        }}>
          Building the Future of{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>E-Commerce</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#64748b',
          maxWidth: '620px',
          margin: '0 auto',
          lineHeight: 1.75,
        }}>
          ShopVault was founded with a single vision: make premium online shopping accessible,
          secure, and enjoyable for everyone — from first-time buyers to seasoned shoppers.
        </p>
      </section>

      {/* ── Mission ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a15' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2.5rem',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '0.75rem' }}>Our Mission</h2>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>
              To democratize e-commerce by providing a platform where quality products meet
              seamless technology. We believe shopping online should be as trustworthy and
              satisfying as buying in person — with the added convenience of being available 24/7.
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2.5rem',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌟</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '0.75rem' }}>Our Vision</h2>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>
              To become India's most trusted e-commerce platform, known for its security,
              reliability, and exceptional customer experience. We envision a world where
              every shopper feels empowered, informed, and protected with every purchase.
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '20px',
            padding: '2.5rem',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💎</div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif", marginBottom: '0.75rem' }}>Our Promise</h2>
            <p style={{ color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>
              Every product on ShopVault passes a rigorous quality check. We partner only with
              verified sellers, offer transparent pricing, and stand behind every transaction
              with a comprehensive buyer protection program and responsive support team.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0f0f1a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
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
              textTransform: 'uppercase',
            }}>Core Values</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>
              What we stand for
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'all 0.3s ease',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0a0a15' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{
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
              textTransform: 'uppercase',
            }}>The Team</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, fontFamily: "'Outfit', sans-serif" }}>
              People behind ShopVault
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {team.map((member) => (
              <div key={member.name} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))',
                  border: '2px solid rgba(99,102,241,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  margin: '0 auto 1rem',
                }}>{member.avatar}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.3rem' }}>{member.name}</h3>
                <p style={{
                  fontSize: '0.78rem',
                  color: '#818cf8',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>{member.role}</p>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.65 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section style={{ padding: '5rem 1.5rem', background: '#0f0f1a', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{
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
            textTransform: 'uppercase',
          }}>Built With</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, fontFamily: "'Outfit', sans-serif", marginBottom: '2.5rem' }}>
            Our technology stack
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {['☕ Spring Boot', '🔐 JWT Auth', '⚛️ Next.js 15', '📘 TypeScript', '🐘 PostgreSQL', '🎨 SCSS Modules', '🐋 Docker', '☁️ AWS'].map((tech) => (
              <span key={tech} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '0.6rem 1.2rem',
                fontSize: '0.875rem',
                color: '#94a3b8',
                fontWeight: 500,
              }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;