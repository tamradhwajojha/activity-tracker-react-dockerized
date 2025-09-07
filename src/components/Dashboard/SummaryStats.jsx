import React from 'react';
import Card from '../UI/Card';

const SummaryStats = ({ user }) => {
    return (
        <Card className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Overall Progress</h3>
            <div className="space-y-3">
                <div>
                    <p className="text-gray-600 text-sm">Total Problems Solved:</p>
                    <p className="text-2xl font-bold text-indigo-700">{user.totalProblemsSolved}</p>
                </div>
                <div>
                    <p className="text-gray-600 text-sm">Current Streak:</p>
                    <p className="text-2xl font-bold text-green-600">{user.overallStreak} days</p>
                </div>
            </div>
            <div className="mt-4 text-gray-700 text-sm">
                <p className="font-medium">Quick Stats:</p>
                <ul className="list-disc list-inside">
                    <li>Platforms Tracked: {Object.keys(user.platforms).length}</li>
                    <li>Global Achievements: {user.globalAchievements.length}</li>
                </ul>
            </div>
        </Card>
    );
};

export default SummaryStats;