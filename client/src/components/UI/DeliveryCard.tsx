import React, { useState } from "react";

interface DeliveryCardProps {
    title: string;
    discount: number;
    timeRange: string;
    isHighlighted: boolean;
    icon: string;
}

const DeliveryCard: React.FC<DeliveryCardProps> = ({ title, discount, timeRange, isHighlighted, icon }) => {


    return (
        <div className={`menu-item ${isHighlighted ? 'highlighted' : ''}`}>
            <div>
                <h2>{title}</h2>
                <p>Salle <span className="highlight">{discount}%</span> for the order from {timeRange}</p>
            </div>
            {icon && <img style={{ marginBottom: '40px' }} src={icon} alt={`${title} icon`} />}
        </div>
    );
};

export default DeliveryCard;