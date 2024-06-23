import React from "react";
import Header from "../Header";
import Cart from "../Cart";
import Footer from "../Footer";
import Checkout from "../Checkout";

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
