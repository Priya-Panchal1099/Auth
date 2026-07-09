// ── Order API helpers ──────────────────────────────────────────────
const BASE = 'http://localhost:8085';

function authHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export interface OrderRequest {
  userId: number;
  productId: number;
  quantity: number;
}

export interface Order {
  id: number;
  product: { id: number; name: string; price: number; description: string };
  user: { id: number; username: string; email: string };
  quantity: number;
  totalPrice: number;
  status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  orderedAt: string;
}

export interface StockInfo {
  id: number;
  product: { id: number; name: string };
  quantity: number;
}

/** Place a product order — decrements stock automatically on the backend */
export async function placeOrder(req: OrderRequest): Promise<Order> {
  const res = await fetch(`${BASE}/orders/place`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(req),
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || 'Failed to place order');
  }
  return res.json();
}

/** Get all orders for a specific user */
export async function getUserOrders(userId: number): Promise<Order[]> {
  const res = await fetch(`${BASE}/orders/user/${userId}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}

/** Admin: get all orders */
export async function getAllOrders(): Promise<Order[]> {
  const res = await fetch(`${BASE}/orders/all`, { headers: authHeaders() });
  if (!res.ok) throw new Error('Failed to fetch all orders');
  return res.json();
}

/** Cancel an order (restores stock) */
export async function cancelOrder(orderId: number): Promise<Order> {
  const res = await fetch(`${BASE}/orders/${orderId}/cancel`, {
    method: 'PUT',
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error('Failed to cancel order');
  return res.json();
}

/** Get stock for all products */
export async function getAllStock(): Promise<StockInfo[]> {
  const res = await fetch(`${BASE}/orders/stock/all`, { headers: authHeaders() });
  if (!res.ok) throw new Error('Failed to fetch stock');
  return res.json();
}

/** Admin: set stock quantity for a product */
export async function setStock(productId: number, quantity: number): Promise<StockInfo> {
  const res = await fetch(`${BASE}/orders/stock/set`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify({ productId, quantity }),
  });
  if (!res.ok) throw new Error('Failed to set stock');
  return res.json();
}
