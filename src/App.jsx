import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import AuthModal from './components/Auth/AuthModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SettingsPage from './pages/SettingsPage';
import PlatformDetailsPage from './pages/PlatformDetailsPage';

function App() {
    const { user } = useAuth();

    if (!user) {
        return <AuthModal />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-f0f2f5">
            <Navbar />
            <main className="flex-1 p-6 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                    <Route path="/platform/:platformKey" element={<PlatformDetailsPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;