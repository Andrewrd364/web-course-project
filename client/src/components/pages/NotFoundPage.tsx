import React from "react";
import Header from "../Header";
import Home from "../Home";
import Menu from "../Menu";
import Footer from "../Footer";
import errorImg from '../../assets/errorImg.svg'
import RectangularButton from "../UI/RectangularButton";
import { useNavigate } from "react-router-dom";
import curve from '../../assets/curve3.svg';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div style={{ display: 'flex', paddingTop: '100px', alignItems: 'center', flexDirection: 'column' }}>
                <img src={errorImg} alt='error' />
                <div style={{ fontFamily: 'Mukta-Medium', fontSize: '36px', color: 'black', marginTop: '-40px' }}>Woops... Sorry, the page not found</div>
                <img src={curve} alt="" style={{ position: 'absolute', zIndex: '-1', right: 0, bottom: -100 }} />
                <RectangularButton theme="red" text="Go back" onClick={() => navigate(-1)} style={{ fontFamily: 'Mukta-Bold', fontSize: '24px', width: '198px', height: '75px', marginTop: '87px', marginBottom: '174px' }} />
            </div>
            <Footer />
        </>
    );
};

export default NotFoundPage;
