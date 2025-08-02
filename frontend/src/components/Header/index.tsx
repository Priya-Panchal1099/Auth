'use client';
import React from 'react'
import styles from './header.module.scss';
import { useRouter } from 'next/navigation'
import Image from 'next/image';

//rafce
const Header = () => {

    const router = useRouter()
    return (
        <header className={styles.header}>
            <nav aria-label="Global" className={styles.navContainer}>
                <div className={styles.logo}>
                   Enterprise Resource Planning
                </div>
                <div className="flex gap-4">
                    <button className={styles.buttonHead} onClick={() => router.push('/page/login')}>
                        Login
                    </button>
                    <button className={styles.buttonHead} onClick={() => router.push('/page/register')}>
                        Register
                    </button>
                    <button className={styles.buttonHead} onClick={() => router.push('/page/about')}>
                        About
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;