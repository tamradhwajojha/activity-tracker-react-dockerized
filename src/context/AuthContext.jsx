import React, { createContext, useState } from 'react';
import { mockUserData } from '../data/mockData';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        if (email === 'test@example.com' && password === 'password123') {
            setUser(mockUserData);
            return { success: true };
        }
        return { success: false, message: 'Invalid email or password.' };
    };

    const logout = () => {
        setUser(null);
    };

    const signup = (username, email, password) => {
        console.log('Signing up:', username, email);
        return { success: true, message: `Account created for ${username}! Please login.` };
    };

    // ## NEW: Function to update user details ##
    const updateUser = (newDetails) => {
        setUser(prevUser => ({
            ...prevUser, // Keep existing user data
            ...newDetails // Overwrite with new details
        }));
    };

    // Add the new function to the value object
    const value = { user, login, logout, signup, updateUser };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};