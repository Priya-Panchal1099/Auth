'use client';
import React, { useState } from 'react';
import styles from './register.module.scss';

import Image from 'next/image';

export default function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>User Registration</h2>
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
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.formControl}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={styles.formControl}
            >
              <option value="">Select a role</option>
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
          </div>
          <button type="submit" className={styles.buttonHead}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/Register.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className={styles.image}
        />
      </div>
    </div>
  );
}
