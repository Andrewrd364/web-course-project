import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

const MenuPage: React.FC = () => {
    return (
        <>
            <Header currentButton={"menu"} />
            {/* <Home /> */}
            <Menu />

            <Footer/>
        </>
    );
};

export default MenuPage;
