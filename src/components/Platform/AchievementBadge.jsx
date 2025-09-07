import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AchievementBadge = ({ achievement }) => {
    return (
        <div className="achievement-badge relative" style={{ backgroundColor: achievement.color || '#fbd38d' }}>
            <FontAwesomeIcon icon={['fas', achievement.icon.split(' ')[1]]} className="icon" />
            <span className="name">{achievement.name}</span>
            <span className="tooltip">{achievement.description || achievement.name}</span>
        </div>
    );
};

export default AchievementBadge;