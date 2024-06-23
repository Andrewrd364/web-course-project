import React from "react";
import CheckoutFormContacts from "./CheckoutFormContacts";
import CheckoutFormDelivery from "./CheckoutFormDelivery";
import CheckoutFormPayment from "./CheckoutFormPayment";
import CheckoutSummary from "./CheckoutSummary";
import curve from '../assets/curve5.svg';


const Checkout: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "150px", flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
            <img src={curve} alt="" style={{ position: 'absolute', zIndex: -1, right: '0' }} />
            <div style={{ textTransform: 'uppercase', fontSize: '80px', fontFamily: 'Righteous-Regular', marginBottom: '60px' }}>Checkout</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '96px' }}>
                <CheckoutFormContacts />
                <CheckoutFormDelivery />
                <CheckoutFormPayment />
                <CheckoutSummary />
            </div>
        </div>

    );
};

export default Checkout;