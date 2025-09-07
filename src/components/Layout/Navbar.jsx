import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, logout } = useAuth();

    const linkStyle = "text-gray-700 hover:text-indigo-600 font-medium px-3 py-2 rounded-md transition-colors";
    const activeLinkStyle = "text-indigo-600 border-b-2 border-indigo-600";

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center rounded-b-xl">
            <div className="flex items-center">
                <FontAwesomeIcon icon={faChartLine} className="text-indigo-600 text-2xl mr-2" />
                <h1 className="text-2xl font-bold text-gray-800">Activity Tracker</h1>
            </div>
            <div className="flex items-center space-x-4">
                <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>About</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Contact Us</NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Settings</NavLink>
                
                <span className="text-lg font-medium text-gray-700">{user.username}</span>
                
                <button onClick={logout} className="btn-secondary px-4 py-2 rounded-lg font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;