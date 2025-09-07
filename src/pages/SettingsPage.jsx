import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/UI/Card';

const SettingsPage = () => {
    const { user, updateUser } = useAuth();
    
    // ## NEW: Updated state to hold platform usernames ##
    const [formData, setFormData] = useState({
        username: user.username,
        email: user.email,
        platforms: {
            leetcode: user.platforms.leetcode.username,
            gfg: user.platforms.gfg.username,
            codeforces: user.platforms.codeforces.username,
            codechef: user.platforms.codechef.username,
        }
    });
    
    const [message, setMessage] = useState('');

    // Handles changes for top-level fields like username and email
    const handleMainChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };
    
    // ## NEW: Handler for nested platform username fields ##
    const handlePlatformChange = (e) => {
        const { id, value } = e.target; // id will be "leetcode", "gfg", etc.
        setFormData(prev => ({
            ...prev,
            platforms: {
                ...prev.platforms,
                [id]: value
            }
        }));
    };

    // ## NEW: Updated submit logic to safely merge data ##
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Construct the full object to update, preserving all other platform data
        const updatedUserData = {
            ...user, // Start with the current user data
            username: formData.username,
            email: formData.email,
            platforms: {
                ...user.platforms, // Keep existing platform data like logos, ratings etc.
                leetcode: { ...user.platforms.leetcode, username: formData.platforms.leetcode },
                gfg: { ...user.platforms.gfg, username: formData.platforms.gfg },
                codeforces: { ...user.platforms.codeforces, username: formData.platforms.codeforces },
                codechef: { ...user.platforms.codechef, username: formData.platforms.codechef },
            }
        };

        updateUser(updatedUserData);
        setMessage('Profile updated successfully!');
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <Card className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Settings</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section for Main Profile */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Main Profile</h3>
                    <div className="space-y-4 mt-4">
                        <div>
                            <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Display Name</label>
                            <input type="text" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.username} onChange={handleMainChange} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.email} onChange={handleMainChange} required />
                        </div>
                    </div>
                </div>

                {/* ## NEW: Section for Platform Usernames ## */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 border-b pb-2">Platform Usernames</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mt-4">
                        {Object.keys(formData.platforms).map(platformKey => (
                             <div key={platformKey}>
                                <label htmlFor={platformKey} className="block text-gray-700 text-sm font-medium mb-2 capitalize">{platformKey} Username</label>
                                <input type="text" id={platformKey} className="w-full px-4 py-2 border border-gray-300 rounded-lg" value={formData.platforms[platformKey]} onChange={handlePlatformChange} />
                            </div>
                        ))}
                    </div>
                </div>

                <button type="submit" className="btn-primary px-6 py-2 text-white font-bold rounded-lg shadow-md hover:shadow-lg">Save All Changes</button>
                {message && <p className="text-green-500 mt-2">{message}</p>}
            </form>
        </Card>
    );
};

export default SettingsPage;