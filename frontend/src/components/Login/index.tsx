'use client';
import React, { use, useEffect, useState } from 'react';
import styles from './login.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import useUserStore from '@/stores/user-store';


interface FormData {
    email: string;
    password: string;
}
const Login = () => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    const setRole = useUserStore((state) => state.setRole);
    let tokenTimeout: any;
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

    const clearToken = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        alert('Session expired. Please log in again.');
        router.push('/page/login');
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
            // Assuming the response contains a token
            const { token, roles } = response.data;
            setToken(token);
            setRole(roles[0]);
            localStorage.setItem('token', token);
            alert('Login successful!');
            clearForm();
            router.push('/page/admin');
            tokenTimeout = setTimeout(clearToken, 3600000); // Clear token after 1 hour
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed. Please try again.');
        }
    }

    useEffect(() => {
        const requestInterceptor = axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            })
        return () => {
            axios.interceptors.request.eject(requestInterceptor);
        };
    }, []);

    // Clear the timeout when the component unmounts
    useEffect(() => {
        return () => {
            if (tokenTimeout) {
                clearTimeout(tokenTimeout);
            }
        };
    }, []);
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