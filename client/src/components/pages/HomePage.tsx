import React from "react";
import Header from "../Header";
import Home from "../Home";
import Menu from "../Menu";
import Footer from "../Footer";

const HomePage: React.FC = () => {
    return (
        <>
            <Header currentButton={"home"} />
            <Home />
            <Menu />
            <Footer />
        </>
    );
};

export default HomePage;
