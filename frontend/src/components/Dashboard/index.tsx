'use client';
import axios from 'axios';
import styles from './dashboard.module.scss';
import { useEffect, useState } from 'react';
import useUserStore from '@/stores/user-store';
import Products from '../Products';

const UserData = () => {
  const [users, setUsers] = useState([]);
  const { role } = useUserStore();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8085/users/getUser/USER', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUsers();
  }, []);

  const getRoleBadge = (roles: string[]) => {
    const r = roles.join('');
    return (
      <span className={`${styles.badge} ${r === 'ADMIN' ? styles.admin : styles.user}`}>
        {r}
      </span>
    );
  };

  const getStatusBadge = (active: boolean) => (
    <span className={`${styles.badge} ${active ? styles.active : styles.expired}`}>
      {active ? 'Active' : 'Inactive'}
    </span>
  );

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>
            {role === 'USER' ? '👤 User Dashboard' : '⚙️ Admin Dashboard'}
          </h1>
          <p className={styles.subtitle}>
            {role === 'ADMIN'
              ? 'Manage registered users and monitor platform access.'
              : 'Browse and purchase products available in the catalog.'}
          </p>
        </div>

        {/* Admin: Users Table */}
        {role === 'ADMIN' && (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td style={{ color: '#f1f5f9', fontWeight: 600 }}>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{getRoleBadge(user.roles)}</td>
                    <td>{getStatusBadge(user.enabled && user.accountNonLocked)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* User: Products */}
        {role === 'USER' && <Products />}
      </div>
    </div>
  );
};

export default UserData;