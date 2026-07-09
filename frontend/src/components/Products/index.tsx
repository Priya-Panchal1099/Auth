'use client';
import { useEffect, useState } from 'react';
import styles from '../../styles/card.module.scss';
import { placeOrder, getAllStock, type StockInfo } from '@/lib/orderApi';
import useUserStore from '@/stores/user-store';

const PRODUCT_EMOJIS = ['📦', '🛍️', '👗', '👟', '💻', '📱', '🎧', '⌚', '🏋️', '🎮', '📸', '🛒'];

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface OrderingState {
  [productId: number]: 'idle' | 'loading' | 'success' | 'error';
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [stock, setStock] = useState<{ [productId: number]: number }>({});
  const [ordering, setOrdering] = useState<OrderingState>({});
  const { userId } = useUserStore();  // read userId from store

  useEffect(() => {
    fetch('http://localhost:8085/products')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error('Failed to load products:', err));

    getAllStock()
      .then((stockList: StockInfo[]) => {
        const map: { [id: number]: number } = {};
        stockList.forEach((s) => { map[s.product.id] = s.quantity; });
        setStock(map);
      })
      .catch(() => {}); // stock info optional
  }, []);

  const handleOrder = async (product: Product) => {
    if (!userId) {
      alert('Please log in to place an order.');
      return;
    }

    setOrdering((prev) => ({ ...prev, [product.id]: 'loading' }));
    try {
      await placeOrder({ userId: Number(userId), productId: product.id, quantity: 1 });
      // Decrement local stock display
      setStock((prev) => ({ ...prev, [product.id]: Math.max(0, (prev[product.id] ?? 1) - 1) }));
      setOrdering((prev) => ({ ...prev, [product.id]: 'success' }));
      setTimeout(() => setOrdering((prev) => ({ ...prev, [product.id]: 'idle' })), 2500);
    } catch (err: any) {
      alert(err.message || 'Order failed. Please try again.');
      setOrdering((prev) => ({ ...prev, [product.id]: 'error' }));
      setTimeout(() => setOrdering((prev) => ({ ...prev, [product.id]: 'idle' })), 2000);
    }
  };

  const getStockLabel = (productId: number) => {
    const qty = stock[productId];
    if (qty === undefined) return null;
    if (qty === 0) return { label: 'Out of Stock', color: '#f87171', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' };
    if (qty <= 5) return { label: `Only ${qty} left!`, color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.25)' };
    return { label: `${qty} in stock`, color: '#34d399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' };
  };

  return (
    <div className={styles.productContainer}>
      {products.map((product, idx) => {
        const state = ordering[product.id] ?? 'idle';
        const stockInfo = getStockLabel(product.id);
        const outOfStock = stock[product.id] === 0;

        return (
          <div className={styles.card} key={product.id}>
            <span className={styles.productEmoji}>
              {PRODUCT_EMOJIS[idx % PRODUCT_EMOJIS.length]}
            </span>

            {stockInfo && (
              <span className={styles.productBadge} style={{
                color: stockInfo.color,
                background: stockInfo.bg,
                border: `1px solid ${stockInfo.border}`,
              }}>
                {stockInfo.label}
              </span>
            )}

            <h3 className={styles.productTitle}>
              {product.name || 'Unnamed Product'}
            </h3>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>
              ₹{Number(product.price).toLocaleString('en-IN')}
            </p>

            {/* Order Button */}
            <button
              className={styles.orderBtn}
              onClick={() => handleOrder(product)}
              disabled={state === 'loading' || outOfStock}
            >
              {state === 'loading' && '⏳ Ordering...'}
              {state === 'success' && '✅ Ordered!'}
              {state === 'error'   && '❌ Retry'}
              {state === 'idle'    && (outOfStock ? '🚫 Out of Stock' : '🛒 Order Now')}
            </button>
          </div>
        );
      })}
    </div>
  );
}