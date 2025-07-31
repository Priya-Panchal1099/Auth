'use client';
import React, { useState } from 'react';
import styles from './login.module.scss';
import axios from 'axios';

 interface FormData {
        email: string;
        password: string;
    }
const Login = () => {

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    
     const clearForm = () => {
        setFormData({
            email: '',
            password: '',
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/auth/login', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Response:", response.data);
            alert('Login successful!');
            clearForm();
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                         <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.formControl}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.formControl}
                        />
                    </div>
                   
                    <button type="submit" className={styles.buttonHead}>
                        Login
                    </button>
                </form>
            </div>
        </div>

    )
}

export default Login;