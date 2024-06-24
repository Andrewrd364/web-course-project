import React from 'react';
import './Delivery.css';
import DeliveryCard from './DeliveryCard';
import imgDelivery from '../assets/deliveryImg.png';
import breakfastIcon from '../assets/deliveryIcon1.svg';
import lunchIcon from '../assets/deliveryIcon2.svg';
import dinnerIcon from '../assets/deliveryIcon3.svg';
import point from '../assets/Point.svg';

const Delivery: React.FC = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const checkHighlighted = (start: number, end: number) => {
        return currentHour >= start && currentHour < end;
    };
    return (
        <div className="delivery-container">
            <h1 className="title">DELIVERY</h1>
            <div className="content">
                <div className="left">
                    <DeliveryCard
                        theme="dark"
                        title="Breakfasts"
                        discount={10}
                        timeRange="9:00 AM to 12:00 PM"
                        isHighlighted={checkHighlighted(9, 12)}
                        icon={breakfastIcon}
                    />
                    <DeliveryCard
                        theme="dark"
                        title="Lunches"
                        discount={10}
                        timeRange="3:00 PM to 4:00 PM"
                        isHighlighted={checkHighlighted(15, 16)}
                        icon={lunchIcon}
                    />
                    <DeliveryCard
                        theme="dark"
                        title="Dinners"
                        discount={10}
                        timeRange="10:00 PM to 11:00 PM"
                        isHighlighted={checkHighlighted(22, 23)}
                        icon={dinnerIcon}
                    />
                </div>
                <div className="center">
                    <img src={imgDelivery} />
                </div>
                <div className="right">
                    <div className="item">
                        <img src={point} />
                        <div>
                            <h2>Place your order</h2>
                            <p>Not less than $20 for the amount of</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={point} />
                        <div>
                            <h2>Expect a call</h2>
                            <p>An operator will contact you after ordering</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={point} />
                        <div>
                            <h2>Order on the way</h2>
                            <p>We will deliver your order within one hour</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;
