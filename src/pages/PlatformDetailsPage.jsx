import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/UI/Card';
import PlatformCharts from '../components/Platform/PlatformCharts';
import StreakCalendar from '../components/Platform/StreakCalendar';
import AchievementBadge from '../components/Platform/AchievementBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Add all free solid icons to the library
library.add(fas);

const PlatformDetailsPage = () => {
    const { platformKey } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const platform = user.platforms[platformKey];

    if (!platform) {
        return <div className="text-center text-red-500">Platform not found.</div>;
    }

    // Helper to get color for difficulty labels
    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'easy': return 'text-green-600';
            case 'medium': return 'text-orange-600';
            case 'hard': return 'text-red-600';
            case 'div1': return 'text-purple-600';
            case 'div2': return 'text-blue-600';
            default: return 'text-gray-700';
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            <button onClick={() => navigate('/')} className="btn-secondary px-4 py-2 rounded-lg font-semibold shadow-sm hover:shadow-md mb-6">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Back to Dashboard
            </button>

            <Card className="mb-8">
                <div className="flex items-center mb-4">
                    <img src={platform.logo} alt={`${platform.name} Logo`} className="w-12 h-12 mr-4 rounded-full object-contain" />
                    <h2 className="text-3xl font-bold text-gray-800">{platform.name} Activity Details</h2>
                </div>

                {/* ## NEW: Difficulty Breakdown Section ## */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    {Object.entries(platform.solved).map(([difficulty, count]) => (
                        <div key={difficulty} className="bg-gray-100 p-4 rounded-lg shadow-inner">
                            <p className={`text-lg font-bold capitalize ${getDifficultyColor(difficulty)}`}>{difficulty}</p>
                            <p className="text-2xl font-semibold text-gray-800">{count}</p>
                            <p className="text-sm text-gray-500">
                                / {platform.totalProblemsOverall[difficulty] || '?'} Problems
                            </p>
                        </div>
                    ))}
                </div>
                {/* ## END: New Section ## */}

                 <div className="mt-6">
                    <p className="text-gray-600 text-sm mb-2">Achievements:</p>
                    <div className="flex flex-wrap gap-4 items-center">
                        {platform.achievements.map((ach, index) => (
                            <AchievementBadge key={index} achievement={ach} />
                        ))}
                    </div>
                </div>
            </Card>

            <PlatformCharts platform={platform} />
            
            <StreakCalendar platform={platform} />
        </div>
    );
};

export default PlatformDetailsPage;