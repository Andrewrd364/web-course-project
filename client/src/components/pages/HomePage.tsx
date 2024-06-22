import React from "react";
import Header from "../Header";
import Home from "../Home";
import Menu from "../Menu";
import Footer from "../Footer";
import OurDishes from "../OurDishes";

const HomePage: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
            <OurDishes />
            <Footer />
        </>
    );
};

export default HomePage;
