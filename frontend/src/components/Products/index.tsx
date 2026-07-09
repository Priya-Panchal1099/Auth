'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/card.module.scss';

const PRODUCT_EMOJIS = ['📦', '🛍️', '👗', '👟', '💻', '📱', '🎧', '⌚', '🏋️', '🎮', '📸', '🛒'];

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to load products:', err));
  }, []);

  return (
    <div className={styles.productContainer}>
      {products.map((product: any, idx: number) => (
        <div className={styles.card} key={product.id ?? idx}>
          <span className={styles.productEmoji}>
            {PRODUCT_EMOJIS[idx % PRODUCT_EMOJIS.length]}
          </span>
          <span className={styles.productBadge}>In Stock</span>
          <h3 className={styles.productTitle}>
            {product.name ? String(product.name) : 'Unnamed Product'}
          </h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>₹{Number(product.price).toLocaleString('en-IN')}</p>
        </div>
      ))}
    </div>
  );
}