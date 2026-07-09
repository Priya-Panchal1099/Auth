// AuthContext.js
'use client'

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
import useUserStore from '@/stores/user-store';

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const setRole = useUserStore((state) => state.setRole);
    const setUserId = useUserStore((state) => state.setUserId);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        // Clear Zustand store so Header switches back to Login/Register
        setRole('');
        setUserId(0);
        setIsAuthenticated(false);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
