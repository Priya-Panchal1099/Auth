'use client';
import React, { useState } from 'react';
import styles from './register.module.scss';

import Image from 'next/image';
import axios from 'axios';

export default function UserForm() {
    interface FormData {
        username: string;
        password: string;
        email: string;
        roles: string[];
    }

    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        email: '',
        roles: [],
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'roles') {
            // Handle roles as an array
            setFormData(prevState => ({
                ...prevState,
                roles: value ? [value] : [], // Store the selected role in an array
            }));
        } else {
            // Handle other fields normally
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    debugger;
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8085/users/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Response:", response.data);
            alert('Registration successful!');
            clearForm(); // Clear the form after successful submission
        } catch (error) {
            console.error('Error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    // Example of clearing the form
    const clearForm = () => {
        setFormData({
            username: '',
            password: '',
            email: '',
            roles: [],
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
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
                        <label htmlFor="roles">Role</label>
                        <select
                            id="roles"
                            name="roles"
                            value={formData.roles[0] || ''}
                            onChange={handleChange}
                            className={styles.formControl}
                        >
                            <option value="">Select a role</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="USER">USER</option>
                        </select>
                    </div>
                    <button type="submit" className={styles.buttonHead}>
                        Submit
                    </button>
                </form>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src="/assets/Register.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className={styles.image}
                />
            </div>
        </div>
    );
}
