import React, { useState } from "react";

interface DeliveryCardProps {
    title: string;
    discount: number;
    timeRange: string;
    isHighlighted: boolean;
    icon: string;
    theme: 'dark' | 'light';
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ title, discount, timeRange, isHighlighted, icon, theme }) => {


    return (
        <div className={`menu-item ${isHighlighted ? 'highlighted' : ''} ${theme === 'dark' ? 'dark' : 'light'}`} style={{userSelect: "none"}}>
            <div>
                <h2>{title}</h2>
                <p>Salle <span className="highlight">{discount}%</span> for the order from {timeRange}</p>
            </div>
            {icon && <img style={{ marginBottom: '40px' }} src={icon} alt={`${title} icon`} />}
        </div>
    );
};

export default DeliveryCard;
