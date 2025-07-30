'use client';
import React, { useState } from 'react';
import styles from './login.module.scss';

const Login = () => {
    const handleChange = (e: any) => {
        const { name, value } = e.target;
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault();
    }
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                         <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            // value={formData.email}
                            onChange={handleChange}
                            className={styles.formControl}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            // value={formData.password}
                            onChange={handleChange}
                            className={styles.formControl}
                        />
                    </div>
                   
                    <button type="submit" className={styles.buttonHead}>
                        Login
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Login;