'use client';
import React from 'react';
import styles from './home.module.scss';
import { useRouter } from 'next/navigation';

const features = [
  {
    icon: '🔒',
    title: 'Secure Authentication',
    desc: 'Industry-grade JWT-based authentication keeps your account and data safe at all times.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    desc: 'Optimized Next.js frontend with Spring Boot backend delivers sub-100ms response times.',
  },
  {
    icon: '📦',
    title: 'Rich Catalog',
    desc: 'Browse thousands of curated products with detailed descriptions and competitive pricing.',
  },
  {
    icon: '🎯',
    title: 'Role-Based Access',
    desc: 'Smart role management ensures admins and users get the right tools for their needs.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    desc: 'Beautiful on every device — desktop, tablet, or mobile — without compromise.',
  },
  {
    icon: '🚀',
    title: 'Scalable Backend',
    desc: 'Powered by Spring Boot and PostgreSQL, ready to scale with your growing business.',
  },
];

const stats = [
  { value: '10K+', label: 'Products Listed' },
  { value: '5K+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support' },
];

const Homepage = () => {
  const router = useRouter();

  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBlob1} />
        <div className={styles.heroBlob2} />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Now with AI-powered recommendations
          </div>

          <h1 className={styles.heroTitle}>
            Shop Smarter,{' '}
            <span className={styles.gradientWord}>Live Better</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Discover thousands of premium products with secure checkout, real-time inventory,
            and a seamless experience built for the modern shopper.
          </p>

          <div className={styles.heroCta}>
            <button className={styles.btnPrimary} onClick={() => router.push('/page/register')}>
              🛒 Get Started Free
            </button>
            <button className={styles.btnOutline} onClick={() => router.push('/page/about')}>
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div className={styles.statItem} key={s.label}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Why ShopVault</span>
          <h2 className={styles.sectionTitle}>Everything you need to shop confidently</h2>
          <p className={styles.sectionSubtitle}>
            Built with modern technology, designed with you in mind — every feature serves a purpose.
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f) => (
            <div className={styles.featureCard} key={f.title}>
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;