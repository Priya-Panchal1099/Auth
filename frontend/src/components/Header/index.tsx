'use client';
import React from 'react';
import styles from './header.module.scss';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import useUserStore from '@/stores/user-store';

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, logout } = useAuth();
  const { role } = useUserStore();

  const isActive = (path: string) => pathname === path;

  return (
    <header className={styles.header}>
      <nav aria-label="Global" className={styles.navContainer}>
        <div className={styles.logo} onClick={() => router.push('/')}>
          🛍️ ShopVault
        </div>

        <div className={styles.navLinks}>
          {!isAuthenticated ? (
            <>
              <button
                className={isActive('/page/login') ? styles.buttonHeadActive : styles.buttonHead}
                onClick={() => router.push('/page/login')}
              >
                Login
              </button>
              <button
                className={isActive('/page/register') ? styles.buttonHeadActive : styles.buttonHead}
                onClick={() => router.push('/page/register')}
              >
                Register
              </button>
            </>
          ) : (
            <button className={styles.buttonHeadActive} onClick={logout}>
              Logout
            </button>
          )}

          <button
            className={isActive('/page/about') ? styles.buttonHeadActive : styles.buttonHead}
            onClick={() => router.push('/page/about')}
          >
            About
          </button>
          <button
            className={isActive('/page/contactus') ? styles.buttonHeadActive : styles.buttonHead}
            onClick={() => router.push('/page/contactus')}
          >
            Contact Us
          </button>

          {role === 'ADMIN' && isAuthenticated && (
            <button
              className={isActive('/page/product') ? styles.buttonHeadActive : styles.buttonHead}
              onClick={() => router.push('/page/product')}
            >
              Product
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;