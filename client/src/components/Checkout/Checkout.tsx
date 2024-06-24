import React, { useRef } from "react";
import CheckoutFormContacts from "../Checkout/CheckoutFormContacts";
import CheckoutFormDelivery from "../Checkout/CheckoutFormDelivery";
import CheckoutSummary from "../Checkout/CheckoutSummary";
import curve from '../../assets/curve5.svg';

type Form1Handle = {
    validateForm1: () => boolean;
    getForm1Data: () => {
        name: string;
        surname: string;
        phone: string;
        email: string;
    };
};

type Form2Handle = {
    validateForm2: () => boolean;
    getForm2Data: () => {
        city: string;
        street: string;
    };
};

const Checkout: React.FC = () => {
    const formContacts = useRef<Form1Handle>(null);
    const formDelivery = useRef<Form2Handle>(null);

    const handleCheckout = () => {
        const isForm1Valid = formContacts.current ? formContacts.current.validateForm1() : false;
        const isForm2Valid = formDelivery.current ? formDelivery.current.validateForm2() : false;
        return isForm1Valid && isForm2Valid;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "150px", flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
            <img src={curve} alt="" style={{ position: 'absolute', zIndex: -1, right: '0' }} />
            <div style={{ textTransform: 'uppercase', fontSize: '80px', fontFamily: 'Righteous-Regular', marginBottom: '60px' }}>Checkout</div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '96px' }}>
                <CheckoutFormContacts ref={formContacts} />
                <CheckoutFormDelivery ref={formDelivery} />
                <CheckoutSummary handleCheckout={handleCheckout} />
            </div>
        </div>
    );
};

export default Checkout;
