import React from 'react';

const Card = ({ children, className = '', onClick }) => {
    const combinedClasses = `card bg-white p-6 rounded-xl shadow-md ${className}`;
    
    return (
        <div className={combinedClasses} onClick={onClick}>
            {children}
        </div>
    );
};

export default Card;