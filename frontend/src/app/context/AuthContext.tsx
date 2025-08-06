// AuthContext.js
'use client'

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext({
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
});
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const router=useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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
        setIsAuthenticated(false);
        router.push("/");
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
