import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import profilePhoto from '../Assets/profile-photo.jpg'; // Adjust filename if needed

const AboutPage = () => {
    // --- Your Details ---
    const userDetails = {
        name: "Tamradhwaj Ojha",
        photoUrl: profilePhoto,
        bio: "I’m a 4th-year B.Tech student majoring in Computer Science and Engineering with a specialization in Artificial Intelligence. I'm deeply passionate about full-stack development and enjoy turning innovative ideas into impactful web applications. My interests lie in solving real-world problems using technology, and I’m particularly drawn to the MERN stack for its flexibility and scalability. I also actively engage in competitive programming and love sharpening my problem-solving skills through challenges on platforms like LeetCode.",
        skills: [
            "C++", "Java", "JavaScript", "React.js", "Node.js", "Express.js",
            "MongoDB", "MySQL", "Git & GitHub", "HTML5 & CSS3", "RESTful APIs",
            "Data Structures & Algorithms", "Problem Solving"
        ],
        links: {
            linkedin: "https://www.linkedin.com/in/tamradhwaj-ojha",
            github: "https://github.com/tamradhwajojha",
            leetcode: "https://leetcode.com/Tamradhwaj"
        },
        projectMotivation: "I built this project to help fellow programmers track their coding activities, set goals, and stay consistently motivated throughout their learning journey."
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: Profile Card */}
                <div className="md:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                        <img
                            src={userDetails.photoUrl}
                            alt={userDetails.name}
                            className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-md"
                        />
                        <h1 className="text-3xl font-bold text-gray-900">{userDetails.name}</h1>
                        <p className="text-indigo-600 font-medium mt-1">B.Tech Student | Full-Stack Developer</p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-5 mt-6">
                            <a href={userDetails.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors text-3xl">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href={userDetails.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors text-3xl">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href={userDetails.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-indigo-600 transition-colors text-3xl">
                                <FontAwesomeIcon icon={faCode} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="md:col-span-2 space-y-8">
                    {/* Bio Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-500 pb-2 mb-4">About Me</h2>
                        <p className="text-gray-700 leading-relaxed">{userDetails.bio}</p>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-500 pb-2 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-3">
                            {userDetails.skills.map(skill => (
                                <span key={skill} className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-2 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                     {/* Project Motivation Section */}
                     <div className="bg-white p-6 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-500 pb-2 mb-4">Project Motivation</h2>
                        <p className="text-gray-700 leading-relaxed italic">"{userDetails.projectMotivation}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;