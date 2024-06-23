import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Delivery from "../Delivery";


const DeliveryPage: React.FC = () => {
    return (
        <div style={{backgroundColor:'#15161A', position:'absolute', zIndex:-1, backgroundSize:'cover'}}>
            <Header currentButton={"delivery"} />
            <Delivery/>
            <Footer />
        </div>
    );
};

export default DeliveryPage;