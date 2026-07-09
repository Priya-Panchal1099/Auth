'use client';
import React, { useState } from 'react';
import styles from './register.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface FormData {
  username: string;
  password: string;
  email: string;
  roles: string[];
}

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    roles: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'roles') {
      setFormData(prev => ({ ...prev, roles: value ? [value] : [] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8085/users/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      alert('Registration successful!');
      clearForm();
      router.push('/page/login');
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const clearForm = () => setFormData({ username: '', password: '', email: '', roles: [] });

  return (
    <div className={styles.container}>
      {/* Form Column */}
      <div className={styles.formContainer}>
        <h1 className={styles.formTitle}>Create Account</h1>
        <p className={styles.formSubtitle}>Join ShopVault and start shopping smarter</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="e.g. priya_panchal"
              required
            />
          </div>
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
              placeholder="Create a strong password"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="roles">Role</label>
            <select
              id="roles"
              name="roles"
              value={formData.roles[0] || ''}
              onChange={handleChange}
              className={styles.formControl}
              required
            >
              <option value="">Select a role</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>
          <button type="submit" className={styles.buttonHead}>
            Create Account →
          </button>
        </form>
      </div>

      {/* Image Column */}
      <div className={styles.imageContainer}>
        <Image
          src="/assets/Register.jpg"
          width={480}
          height={500}
          alt="Join ShopVault — start your shopping journey"
          className={styles.image}
        />
        <p className={styles.imageMeta}>
          🛒 Join over 5,000 happy shoppers on ShopVault.<br />
          Secure. Fast. Reliable.
        </p>
      </div>
    </div>
  );
}
