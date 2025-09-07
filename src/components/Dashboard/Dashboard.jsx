import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import SummaryStats from './SummaryStats';
import PlatformCard from './PlatformCard';
import Card from '../UI/Card';
import { Pie, Bar } from 'react-chartjs-2';

const Dashboard = () => {
    const { user } = useAuth();

    const problemDistributionData = {
        labels: Object.values(user.platforms).map(p => p.name),
        datasets: [{
            data: Object.values(user.platforms).map(p => p.totalSolved),
            backgroundColor: ['#6366f1', '#f97316', '#8b5cf6', '#ef4444'],
            hoverOffset: 10,
        }]
    };

    const difficultyData = {
        labels: ['Easy', 'Medium', 'Hard'],
        datasets: [{
            label: 'Problems Solved',
            data: [user.totalSolvedDifficulty.easy, user.totalSolvedDifficulty.medium, user.totalSolvedDifficulty.hard],
            backgroundColor: ['#22c55e', '#f97316', '#ef4444'],
            borderRadius: 5,
        }]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'top', },
            title: { display: true, text: 'Overall Difficulty Breakdown' }
        },
    };

    return (
        <div className="max-w-7xl mx-auto">
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-8">
                <h2 className="text-3xl font-bold mb-2">Welcome, {user.username}!</h2>
                <p className="text-lg">Track your coding progress across all platforms.</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <SummaryStats user={user} />
                <Card className="flex flex-col items-center justify-center">
                    <div className="w-full h-64">
                       <Pie data={problemDistributionData} options={{...chartOptions, plugins: {legend: {position: 'top'}, title: {display:true, text: 'Problem Distribution'}}}}/>
                    </div>
                </Card>
                <Card className="flex items-center justify-center">
                    <div className="w-full h-64">
                       <Bar data={difficultyData} options={chartOptions} />
                    </div>
                </Card>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Platform Activity</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* ## MODIFIED LINE: Added .filter() here ## */}
                    {Object.entries(user.platforms).map(([key, data]) => (
    <PlatformCard key={key} platformKey={key} platformData={data} />
))}
                </div>
            </section>
        </div>
    );
};

export default Dashboard;