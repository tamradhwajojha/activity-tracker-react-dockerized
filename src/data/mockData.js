import leetcodeLogo from '../Assets/download.png';
import gfgLogo from '../Assets/gfg.png';
import CFLogo from '../Assets/CF.png';
import CCLogo from '../Assets/CC.png';
// Helper to generate random solved days with activity levels for streak calendar
const generateRandomDailyActivity = (daysCount, solvedDaysCount) => {
    const activity = new Map();
    for (let i = 0; i < solvedDaysCount; i++) {
        let day = Math.floor(Math.random() * daysCount);
        // Ensure some days have more activity for varied shades (1 to 7 problems)
        let problems = Math.floor(Math.random() * 7) + 1;
        activity.set(day, problems);
    }
    return activity; // Map<dayIndex, problemsSolved>
}

// Helper to generate mock rating history
const generateRatingHistory = (startRating, numPoints) => {
    const history = [];
    let currentRating = startRating;
    for (let i = 0; i < numPoints; i++) {
        // Simulate some fluctuation
        currentRating += Math.floor(Math.random() * 40) - 20; // +/- 20
        if (currentRating < 0) currentRating = 0; // Prevent negative ratings
        history.push(currentRating);
    }
    return history;
}

export const mockUserData = {
    username: "CodingNinja",
    email: "test@example.com",
    totalProblemsSolved: 1250,
    overallStreak: 365, // This will be calculated from platforms' solvedDays in a real app
    totalSolvedDifficulty: { easy: 650, medium: 700, hard: 240 }, // Aggregated for home page chart
    platforms: {
        leetcode: {
            username: "coding_ninja_lc", // Platform-specific username
            logo: leetcodeLogo,
            name: "LeetCode",
            rating: 1850,
            rank: "Master",
            ratingHistory: generateRatingHistory(1850, 12), // 12 months of history
            solved: { easy: 300, medium: 500, hard: 150 },
            totalProblemsOverall: { easy: 1000, medium: 1500, hard: 500 }, // Total problems available on platform
            totalSolved: 950,
            maxProblems: 2500, // For progress bar calculation
            streak: 120,
            achievements: [
                { name: "500 Medium Problems", icon: "fas fa-medal", color: "#FFD700" }, // Gold
                { name: "Contest Master", icon: "fas fa-crown", color: "#8B5CF6" }, // Purple
                { name: "Top 1% in Weekly", icon: "fas fa-star", color: "#C0C0C0" } // Silver
            ],
            activityMap: generateRandomDailyActivity(365, 120), // 120 active days out of 365
        },
        gfg: {
            username: "coding_ninja_gfg", // Platform-specific username
            logo:gfgLogo,
            name: "GeeksforGeeks",
            rating: "⭐⭐⭐⭐⭐",
            rank: "Legend",
            ratingHistory: generateRatingHistory(1500, 12), // Simulate a numerical rating for chart
            solved: { easy: 200, medium: 100, hard: 50 },
            totalProblemsOverall: { easy: 500, medium: 300, hard: 200 },
            totalSolved: 350,
            maxProblems: 1000,
            streak: 60,
            achievements: [
                { name: "Top Contributor", icon: "fas fa-user-tie", color: "#CD7F32" }, // Bronze
                { name: "Data Structures Expert", icon: "fas fa-sitemap", color: "#C0C0C0" }, // Silver
                { name: "Problem of the Day Streak", icon: "fas fa-calendar-check", color: "#FFD700" } // Gold
            ],
            activityMap: generateRandomDailyActivity(365, 60),
        },
        codeforces: {
            username: "TheCodingNinja", // Platform-specific username
            logo: CFLogo,
            name: "Codeforces",
            rating: 1600,
            rank: "Specialist",
            ratingHistory: generateRatingHistory(1600, 12),
            solved: { div2: 180, div1: 20 },
            totalProblemsOverall: { div2: 600, div1: 200 },
            totalSolved: 200,
            maxProblems: 800,
            streak: 45,
            achievements: [
                { name: "Specialist Rank", icon: "fas fa-award", color: "#3B82F6" }, // Blue
                { name: "Newbie Conqueror", icon: "fas fa-fist-raised", color: "#22C55E" }, // Green
                { name: "Div1 Participant", icon: "fas fa-user-shield", color: "#EF4444" } // Red
            ],
            activityMap: generateRandomDailyActivity(365, 45),
        },
        codechef: {
            username: "coding_ninja_cc", // Platform-specific username
            logo: CCLogo,
            name: "CodeChef",
            rating: "3⭐",
            rank: "Expert",
            ratingHistory: generateRatingHistory(1400, 12),
            solved: { easy: 150, medium: 80, hard: 40 },
            totalProblemsOverall: { easy: 300, medium: 250, hard: 150 },
            totalSolved: 270,
            maxProblems: 700,
            streak: 30,
            achievements: [
                { name: "Long Challenge Winner", icon: "fas fa-trophy", color: "#FFD700" }, // Gold
                { name: "Cook-Off Participant", icon: "fas fa-hat-wizard", color: "#C0C0C0" }, // Silver
                { name: "Star Performer", icon: "fas fa-star-half-alt", color: "#CD7F32" } // Bronze
            ],
            activityMap: generateRandomDailyActivity(365, 30),
        },
    },
    globalAchievements: [
        { name: "First 100 Problems", icon: "fas fa-trophy", description: "Solved 100 problems across all platforms." },
        { name: "Year-Long Streak", icon: "fas fa-fire", description: "Maintained a coding streak for 365 consecutive days." },
        { name: "Algorithm Ace", icon: "fas fa-brain", description: "Mastered advanced algorithms." },
        { name: "Community Contributor", icon: "fas fa-users", description: "Actively participated in coding communities." },
        { name: "Problem Setter", icon: "fas fa-code", description: "Contributed problems to a platform." },
    ]
};