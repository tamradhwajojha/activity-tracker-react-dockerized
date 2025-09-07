import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import Card from '../UI/Card';

const PlatformCharts = ({ platform }) => {
    // Difficulty Chart Data (Pie)
    const difficultyData = {
        labels: Object.keys(platform.solved).map(d => d.charAt(0).toUpperCase() + d.slice(1)),
        datasets: [{
            data: Object.values(platform.solved),
            backgroundColor: ['#22c55e', '#f97316', '#ef4444', '#8b5cf6', '#3b82f6'],
            hoverOffset: 10,
        }],
    };
    
    // Rating Trend Chart Data (Line)
    const ratingTrendData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].slice(-platform.ratingHistory.length),
        datasets: [{
            label: 'Rating',
            data: platform.ratingHistory,
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            tension: 0.3,
            fill: true,
        }],
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    // ## NEW: Calculate Max Rating ##
    const maxRating = Math.max(...platform.ratingHistory);

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 w-full">Problem Difficulty</h3>
                <div className="w-full h-64 flex items-center justify-center">
                    <Pie data={difficultyData} options={chartOptions} />
                </div>
            </Card>
            <Card className="flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 w-full">Rating Trend</h3>
                
                {/* ## NEW: Current and Max Rating Display ## */}
                <div className="flex justify-between items-center mb-4 px-4">
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Current Rating</p>
                        <p className="text-2xl font-bold text-indigo-600">{platform.rating}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">Max Rating</p>
                        <p className="text-2xl font-bold text-green-600">{maxRating}</p>
                    </div>
                </div>
                {/* ## END: New Display ## */}

                <div className="w-full h-52"> {/* Adjusted height to accommodate new text */}
                    <Line data={ratingTrendData} options={chartOptions} />
                </div>
            </Card>
        </section>
    );
};

export default PlatformCharts;