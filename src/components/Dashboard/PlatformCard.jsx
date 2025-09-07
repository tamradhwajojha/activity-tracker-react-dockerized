import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../UI/Card';

const PlatformCard = ({ platformKey, platformData }) => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    // ## NEW: Check if the platform is active (has a username) ##
    const isActive = platformData.username && platformData.username.trim() !== '';

    useEffect(() => {
        // Only animate the progress bar if the platform is active
        if (isActive) {
            const percentage = platformData.maxProblems > 0 ? (platformData.totalSolved / platformData.maxProblems) * 100 : 0;
            const timer = setTimeout(() => setProgress(percentage), 100);
            return () => clearTimeout(timer);
        }
    }, [platformData, isActive]);

    // Navigate to platform details only if it's active
    const handleCardClick = () => {
        if (isActive) {
            navigate(`/platform/${platformKey}`);
        } else {
            // If inactive, navigate to settings to prompt user to add details
            navigate('/settings');
        }
    };

    return (
        <Card className="cursor-pointer flex flex-col justify-between" onClick={handleCardClick}>
            <div>
                <div className="flex items-center mb-2">
                    <img src={platformData.logo} alt={`${platformData.name} Logo`} className="w-8 h-8 mr-3 rounded-full object-contain" />
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800">{platformData.name}</h4>
                        {/* ## NEW: Conditionally show username or "add username" link ## */}
                        {isActive ? (
                             <p className="text-sm text-indigo-600 font-medium">{platformData.username}</p>
                        ) : (
                            <Link to="/settings" className="text-sm text-blue-600 hover:underline font-medium">
                                Add Username
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* ## NEW: Conditionally show stats or placeholder text ## */}
            {isActive ? (
                <div className="space-y-2">
                    <div className="solved-count-box">
                        {platformData.totalSolved}/{platformData.maxProblems} solved
                    </div>
                    <p className="text-gray-600 text-sm">Rating: <span className="font-bold text-blue-600">{platformData.rating}</span></p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full progress-bar-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-gray-600 text-sm">Streak: <span className="font-semibold">{platformData.streak} days</span></p>
                </div>
            ) : (
                <div className="space-y-2 text-sm text-gray-400 mt-4">
                    <p>Solved: 0</p>
                    <p>Rating: N/A</p>
                    <p>Streak: 0 days</p>
                    <p className="mt-2 text-xs">Click to add your details on the Settings page.</p>
                </div>
            )}
        </Card>
    );
};

export default PlatformCard;