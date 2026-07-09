// pages/products/create
"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../../styles/createproduct.module.scss';
import axios from 'axios';

interface ProductData {
  name: string;
  description: string;
  price: number;
}

export default function CreateProduct() {
  const router = useRouter();
  const [productData, setProductData] = useState<ProductData>({ name: '', description: '', price: 0 });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8085/products/create', productData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Product created successfully!');
      clearForm();
    } catch (error) {
      console.error('Error creating product:', error);
      alert('Error creating product. Please try again.');
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const clearForm = () => setProductData({ name: '', description: '', price: 0 });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>📦 Create Product</h2>
        <p className={styles.formSubtitle}>Add a new product to the ShopVault catalog</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="e.g. Wireless Headphones"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="Describe the product features, specs, and benefits..."
              rows={4}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              value={productData.price}
              onChange={handleChange}
              className={styles.formControl}
              placeholder="0"
              min={0}
              required
            />
          </div>
          <button type="submit" className={styles.buttonHead}>
            🚀 Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
