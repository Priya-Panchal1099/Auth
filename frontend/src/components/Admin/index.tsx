
'use client'
import axios from 'axios';
import styles from './admin.module.scss';
import { useEffect, useState } from 'react';

const UserData = () => {

  const [users, setUsers] = useState([]);

   useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Retrieve the token from localStorage or wherever it's stored
        const token = localStorage.getItem('token'); // Make sure to store the token after login

        const response = await axios.get('http://localhost:8085/admin/getUser', {
          headers: {
            'Authorization': `Bearer ${token}` // Include the Bearer token in the headers
          }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
      <div className={styles.container}>
      <h1 className={styles.title}>User Data</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Access</th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
      <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.roles.join(', ')}</td>
              <td>
                {user.accountNonExpired ? 'Active' : 'Expired'},{' '}
                {user.accountNonLocked ? 'Unlocked' : 'Locked'},{' '}
                {user.credentialsNonExpired ? 'Valid' : 'Invalid'},{' '}
                {user.enabled ? 'Enabled' : 'Disabled'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserData