'use client';
import React from 'react'
import styles from './header.module.scss';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { useAuth } from '@/app/context/AuthContext';
import useUserStore from '@/stores/user-store';

//rafce
const Header = () => {

    const router = useRouter()
    const { isAuthenticated, logout } = useAuth();
    console.log(isAuthenticated, "Authenticated");
    const { role } = useUserStore();

    return (
        <header className={styles.header}>
            <nav aria-label="Global" className={styles.navContainer}>
                <div className={styles.logo}>
                    {/* Enterprise Resource Planning */}
                    E-Commerce
                </div>
                <div className="flex gap-4">
                    {!isAuthenticated ? (
                        <>
                            <button className={styles.buttonHead} onClick={() => router.push('/page/login')}>
                                Login
                            </button>
                            <button className={styles.buttonHead} onClick={() => router.push('/page/register')}>
                                Register
                            </button>
                        </>
                    ) : (
                        <button className={styles.buttonHead} onClick={logout}>
                            Logout
                        </button>
                    )}
                    <button className={styles.buttonHead} onClick={() => router.push('/page/about')}>
                        About
                    </button>
                    <button className={styles.buttonHead} onClick={() => router.push('/page/contactus')}>
                        Contact Us
                    </button>
                    {role == "ADMIN" &&
                        <button className={styles.buttonHead} onClick={() => router.push('/page/product')}>
                            Product
                        </button>
                    }
                </div>
            </nav>
        </header>
    );
}

export default Header;