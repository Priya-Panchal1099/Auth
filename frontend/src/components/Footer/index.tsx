'use client';
import React from 'react';
import styles from './footer.module.scss';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>

          {/* Brand Column */}
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>🛍️ ShopVault</span>
            <p className={styles.footerTagline}>
              Your premier destination for quality products with secure, seamless shopping experiences powered by cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => router.push('/')}>Home</a></li>
              <li><a onClick={() => router.push('/page/about')}>About Us</a></li>
              <li><a onClick={() => router.push('/page/contactus')}>Contact Us</a></li>
              <li><a onClick={() => router.push('/page/login')}>Sign In</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className={styles.footerCol}>
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:panchalpriya1099@gmail.com">panchalpriya1099@gmail.com</a></li>
              <li><a href="tel:+918800001234">+91 8320154167</a></li>
              <li><a href="#">Ahmedabad, Gujarat</a></li>
              <li><a href="#">India – 382350</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} ShopVault by Priya. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">ig</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
