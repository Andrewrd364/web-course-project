import React from "react";
import curve from "../assets/curve2.svg";
import './OurDishes.css';
import OurDishesCard from './UI/OurDishesCard';
import image from '../assets/sample.png';
import RectangularButton from './UI/RectangularButton';
import { useNavigate } from "react-router-dom";
import { MENU_ROUTE } from '../routing/routesConsts';

const OurDishes: React.FC = () => {
    const navigate = useNavigate();

    const goToMenuPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(MENU_ROUTE);
    };
    return (
        <div className="container-ourdishes" >
            <img
                src={curve}
                alt=""
                className="curve-background"
            />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ textTransform: 'uppercase', fontFamily: 'Righteous-Regular', fontSize: '80px', textAlign: 'center', marginBottom: '100px' }}>our dishes</div>
                <OurDishesCard mode={0} image={image} title="Roast lamb with cashew" description="Juicy lamb with cashews, with red and green bell peppers." translate="양고기캐슈볶음" cost={11.35} weight={200} />
                <OurDishesCard mode={1} image={image} title="Fried broccoli with shrimp" description="Roasted broccoli. Served with juicy shrimp." translate="새우설란화볶음" cost={8.15} weight={230} />
                <OurDishesCard mode={0} image={image} title="Bibimbab with sea eel" description="Boiled rice with eel, zucchini, mushrooms, ferns, porphyry, garlic, green onions." translate="장어비빔밥" cost={10.25} weight={300} />
                <RectangularButton theme="red" text="More" onClick={goToMenuPage} style={{ width: '198px', height: '76px', fontSize: '24px', marginTop: '-80px', alignSelf: 'flex-end' }} />
                {/* <button className="button-more">More</button> */}
            </div>
        </div>
    );
};

export default OurDishes;