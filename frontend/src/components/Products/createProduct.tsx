// pages/products/create.js
"use client"
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

  const [productData, setProductData] = useState<ProductData>({
    name: '',
    description: '',
    price: 0
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      console.log(token, "-------token-----");

      const response = await axios.post('http://localhost:8085/products/create', productData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      alert('Product created successfully!');
      console.log("Response:", response.data);
      clearForm();
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error creating product. Please try again.");
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const clearForm = () => {
    setProductData({
      name: '',
      description: '',
      price: 0
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Create Product</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" value={productData.name} onChange={handleChange} className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea name="description" value={productData.description} onChange={handleChange} className={styles.formControl} />
          </div>
          <div className={styles.formGroup}>
            <label>Price</label>
            <input type="number" name="price" value={productData.price} onChange={handleChange} className={styles.formControl} />
          </div>
          <button type="submit" className={styles.buttonHead}>Create</button>
        </form>
      </div>
    </div>
  );
}
