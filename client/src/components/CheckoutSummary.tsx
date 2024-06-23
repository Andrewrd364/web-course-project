import React from "react";
import breakfastIcon from '../assets/deliveryIcon1.svg';
import lunchIcon from '../assets/deliveryIcon2.svg';
import dinnerIcon from '../assets/deliveryIcon3.svg';
import DeliveryCard from "./UI/DeliveryCard";
import RectangularButton from "./UI/RectangularButton";
import './CheckoutSummary.css';

const CheckoutSummary: React.FC = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    const checkHighlighted = (start: number, end: number) => {
        return currentHour >= start && currentHour < end;
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '160px' }}>
            <div className="containerSummary">
                <div className="summary">
                    <div className="summary-title">Summary</div>
                    <div className="summary-details">
                        <div className="details-column">
                            <div>Total amount</div>
                            <div>Salle -10%</div>
                            <div>Shipping</div>
                        </div>
                        <div className="details-column">
                            <div className="total-amount">52,55$</div>
                            <div className="total-amount">Free</div>
                            <div className="total-amount">-5,26$</div>
                        </div>
                    </div>
                </div>
                <div className="total-summary">
                    <div>Total</div>
                    <div className="total-amount">47,29$</div>
                </div>
                <RectangularButton text="Pay now" theme="red" onClick={() => console.log()} style={{ fontFamily: 'Mukta-Bold', fontSize: '24px', width: '198px', height: '75px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: "column", width: '75%' }}>
                <DeliveryCard
                    theme="light"
                    title="Breakfasts"
                    discount={10}
                    timeRange="9:00 AM to 10:00 AM"
                    isHighlighted={checkHighlighted(9, 10)}
                    icon={breakfastIcon}
                />
                <DeliveryCard
                    theme="light"
                    title="Lunches"
                    discount={10}
                    timeRange="3:00 PM to 4:00 PM"
                    isHighlighted={checkHighlighted(15, 16)}
                    icon={lunchIcon}
                />
                <DeliveryCard
                    theme="light"
                    title="Dinners"
                    discount={10}
                    timeRange="10:00 PM to 11:00 PM"
                    isHighlighted={checkHighlighted(22, 24)}
                    icon={dinnerIcon}
                />
            </div>
        </div>

    );
};

export default CheckoutSummary;