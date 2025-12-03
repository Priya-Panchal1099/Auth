// pages/products/index.js
import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from '../../styles/card.module.scss';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8085/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.productContainer}>
      {products.map((product) => (
        <>
        
        <div className={styles.card} key={product.id} >
          <h3 className={styles.productTitle}>{product.name ? String(product.name) : 'Unnamed Product'}</h3>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productPrice}>Price: ${product.price}</p>
        </div>
        
        </>
      ))}
    </div>
  );
  
}

// const styles = {
//   container: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '24px',
//     padding: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   card: {
//     border: '1px solid #e0e0e0',
//     borderRadius: '12px',
//     padding: '16px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
//     transition: 'transform 0.2s, box-shadow 0.2s',
//     background: '#fff',
//     ':hover': {
//       transform: 'translateY(-4px)',
//       boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//     },
//   },
//   title: {
//     margin: '0 0 8px 0',
//     fontSize: '18px',
//   },
//   description: {
//     margin: '0 0 12px 0',
//     color: '#555',
//     fontSize: '14px',
//   },
//   price: {
//     margin: '0',
//     fontWeight: '600',
//     color: '#222',
//     fontSize: '16px',
//   },
// };