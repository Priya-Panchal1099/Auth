'use client';
import React, { useEffect, useState } from 'react';
import styles from './login.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useUserStore from '@/stores/user-store';
import { useAuth } from '@/app/context/AuthContext';

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const setRole = useUserStore((state) => state.setRole);
  const setUserId = useUserStore((state) => state.setUserId);
  let tokenTimeout: any;

  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clearForm = () => setFormData({ email: '', password: '' });

  const clearToken = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    alert('Session expired. Please log in again.');
    router.push('/page/login');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8085/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
    
      const { token, roles, userId } = response.data;
      setToken(token);
      setRole(roles[0]);
      if (userId !== undefined) setUserId(Number(userId));
      localStorage.setItem('token', token);
      login();
      alert('Login successful!');
      clearForm();
      router.push('/page/admin');
      tokenTimeout = setTimeout(clearToken, 3600000);
        console.log("Response",response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please try again.');
    }
  };

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      error => Promise.reject(error)
    );
    return () => axios.interceptors.request.eject(requestInterceptor);
  }, []);

  useEffect(() => {
    return () => { if (tokenTimeout) clearTimeout(tokenTimeout); };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formHeader}>
          <span className={styles.formEmoji}>🔐</span>
          <h1 className={styles.formTitle}>
            Welcome <span>back</span>
          </h1>
          <p className={styles.formSubtitle}>Sign in to continue to ShopVault</p>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="you@example.com"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={styles.formControl}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className={styles.buttonHead}>
              Sign In →
            </button>
          </form>

          <div className={styles.formFooter}>
            Don&apos;t have an account?{' '}
            <a onClick={() => router.push('/page/register')}>Register now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;