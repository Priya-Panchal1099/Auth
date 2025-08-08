// pages/products/create.js
"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './product.module.scss';
import { log } from 'console';

export default function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    console.log(token, "-------token-----");

    const response = await fetch('http://localhost:8085/products/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ name, description, price }),
    });

    if (response.ok) {
      alert("Product Added Sucessfully")
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className={styles.formControl} />
          </div>
          <button type="submit" className={styles.buttonHead}>Create</button>
        </form>
      </div>
    </div>
  );
}
