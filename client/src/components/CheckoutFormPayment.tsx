import React, { useEffect, useState } from "react";
import TextInput from "./UI/TextInput";


const CheckoutFormPayment: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>("Bank card");

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '80px' }}>
                <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Payment method</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <label>
                        <input
                            type="radio"
                            value="Bank card"
                            checked={selectedOption === 'Bank card'}
                            onChange={() => setSelectedOption("Bank card")}
                            style={{ marginRight: '10px' }}
                        />
                        Bank card
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Cash"
                            checked={selectedOption === 'Cash'}
                            onChange={() => setSelectedOption("Cash")}
                            style={{ marginRight: '10px' }}
                        />
                        Cash
                    </label>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Card details</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <TextInput mode="titleLeft" placeholder="0000 0000 0000 0000" label="Number" onChangeValue={() => console.log()} />
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
                        <TextInput mode="titleTop" placeholder="00/0000" label="Expiration" onChangeValue={() => console.log()} />
                        <TextInput mode="titleTop" placeholder="000" label="CVV" onChangeValue={() => console.log()} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutFormPayment;