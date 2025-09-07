import React from 'react';
import Card from '../UI/Card';

const StreakCalendar = ({ platform }) => {
    const renderCells = () => {
        const cells = [];
        const today = new Date();
        const oneYearAgo = new Date(today);
        oneYearAgo.setDate(today.getDate() - 364);

        for (let i = 0; i < 365; i++) {
            const date = new Date(oneYearAgo);
            date.setDate(oneYearAgo.getDate() + i);

            const problemsSolved = platform.activityMap.get(i) || 0;
            let levelClass = '';
            if (problemsSolved > 0 && problemsSolved <= 2) levelClass = 'solved-level-1';
            else if (problemsSolved > 2 && problemsSolved <= 4) levelClass = 'solved-level-2';
            else if (problemsSolved > 4 && problemsSolved <= 6) levelClass = 'solved-level-3';
            else if (problemsSolved > 6) levelClass = 'solved-level-4';

            cells.push(
                <div key={i} className={`streak-cell relative ${levelClass}`} style={{ gridRow: date.getDay() + 1 }}>
                    <span className="tooltip">
                        {problemsSolved > 0 ? `${problemsSolved} solved` : 'No activity'} on {date.toLocaleDateString()}
                    </span>
                </div>
            );
        }
        return cells;
    };

    return (
        <Card>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Coding Streak: {platform.streak} days</h3>
            <p className="text-gray-600 text-sm mb-4">Last 365 Days Activity</p>
            <div className="relative overflow-x-auto pb-6">
                <div className="streak-calendar-grid">
                    {renderCells()}
                </div>
            </div>
            <div className="flex justify-end mt-4 text-xs text-gray-600 items-center">
                Less
                <div className="w-3 h-3 mx-1 rounded-sm bg-gray-200"></div>
                <div className="w-3 h-3 mx-1 rounded-sm solved-level-1"></div>
                <div className="w-3 h-3 mx-1 rounded-sm solved-level-2"></div>
                <div className="w-3 h-3 mx-1 rounded-sm solved-level-3"></div>
                <div className="w-3 h-3 mx-1 rounded-sm solved-level-4"></div>
                More
            </div>
        </Card>
    );
};

export default StreakCalendar;