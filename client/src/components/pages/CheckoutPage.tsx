import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Checkout from "../Checkout/Checkout";

const CheckoutPage: React.FC = () => {
    return (
        <>
            <Header />
            <Checkout />
            <Footer />
        </>
    );
};

export default CheckoutPage;
