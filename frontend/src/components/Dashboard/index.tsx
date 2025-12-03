
'use client'
import axios from 'axios';
import styles from './dashboard.module.scss';
import { useEffect, useState } from 'react';
import useUserStore from '@/stores/user-store';
import Header from '../Header';
import Products from '../Products';

const UserData = () => {

  const [users, setUsers] = useState([]);
  const { role } = useUserStore();
  console.log("User Store Data:", role);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        // const response = await axios.get('http://localhost:8085/admin/getUser', { //all users
        const response = await axios.get('http://localhost:8085/users/getUser/USER', { // Fetch users with the role 'USER'
          headers: {
            'Authorization': `Bearer ${token}` // Include the Bearer token in the headers
          }
        });
        setUsers(response.data);
        console.log("User Data:", response.data);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <Header/>
      <h1 className={styles.title}>{role == 'USER' ? <p>User Dashboard</p> : <p>Admin Dashboard</p>}</h1>
      {role == 'ADMIN' &&
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
            {users.map((user: any) => (
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
      }

      {role == 'USER' &&
        <><Products /></>
      }
    </div>
  )
}

export default UserData