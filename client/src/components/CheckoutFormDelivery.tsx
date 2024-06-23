import React, { useEffect, useState } from "react";
import TextInput from "./UI/TextInput";


const CheckoutFormDelivery: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("Delivery");

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '80px' }}>
                <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Delivery method</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <label>
                        <input
                            type="radio"
                            value="Delivery"
                            checked={selectedOption === 'Delivery'}
                            onChange={() => setSelectedOption("Delivery")}
                            style={{ marginRight: '10px' }}
                        />
                        Delivery
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Pickup"
                            checked={selectedOption === 'Pickup'}
                            onChange={() => setSelectedOption("Pickup")}
                            style={{ marginRight: '10px' }}
                        />
                        Pickup
                    </label>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Shipping address</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <TextInput mode="titleLeft" placeholder="Delivery city" label="City" />
                    <TextInput mode="titleLeft" placeholder="Delivery street" label="Street" />
                </div>
            </div>
        </div>
    );
};

export default CheckoutFormDelivery;