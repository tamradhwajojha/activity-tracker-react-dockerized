import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const AuthModal = () => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [message, setMessage] = useState({ text: '', isError: false });
    const { login, signup } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.loginEmail.value;
        const password = e.target.loginPassword.value;
        const result = login(email, password);
        if (!result.success) {
            setMessage({ text: result.message, isError: true });
        }
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const username = e.target.signupUsername.value;
        const email = e.target.signupEmail.value;
        const password = e.target.signupPassword.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setMessage({ text: 'Passwords do not match.', isError: true });
            return;
        }

        const result = signup(username, email, password);
        setMessage({ text: result.message, isError: !result.success });
        if(result.success) {
            setIsLoginView(true); // Switch to login view after successful signup
        }
    };

    const activeTabClasses = "border-indigo-500 text-indigo-600";
    const inactiveTabClasses = "border-transparent text-gray-600";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay">
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 scale-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h2>
                <div className="flex mb-6 border-b border-gray-200">
                    <button onClick={() => setIsLoginView(true)} className={`flex-1 py-3 text-center text-lg font-semibold hover:border-indigo-500 focus:outline-none transition-colors duration-200 ${isLoginView ? activeTabClasses : inactiveTabClasses}`}>
                        Login
                    </button>
                    <button onClick={() => setIsLoginView(false)} className={`flex-1 py-3 text-center text-lg font-semibold hover:border-indigo-500 focus:outline-none transition-colors duration-200 ${!isLoginView ? activeTabClasses : inactiveTabClasses}`}>
                        Sign Up
                    </button>
                </div>

                {isLoginView ? (
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="loginEmail" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" placeholder="your@example.com" defaultValue="test@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="loginPassword" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200" placeholder="********" defaultValue="password123" required />
                        </div>
                        <button type="submit" className="btn-primary w-full py-3 text-white font-bold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Login</button>
                    </form>
                ) : (
                    <form onSubmit={handleSignup} className="space-y-4">
                        <div>
                            <label htmlFor="signupUsername" className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                            <input type="text" id="signupUsername" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="Choose a username" required />
                        </div>
                        <div>
                            <label htmlFor="signupEmail" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="signupEmail" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="your@example.com" required />
                        </div>
                        <div>
                            <label htmlFor="signupPassword" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                            <input type="password" id="signupPassword" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="********" required />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="w-full px-4 py-2 border border-gray-300 rounded-lg" placeholder="********" required />
                        </div>
                        <button type="submit" className="btn-primary w-full py-3 text-white font-bold rounded-lg shadow-md hover:shadow-lg">Sign Up</button>
                    </form>
                )}

                {message.text && (
                    <p className={`text-center text-sm mt-4 ${message.isError ? 'text-red-500' : 'text-green-500'}`}>
                        {message.text}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthModal;