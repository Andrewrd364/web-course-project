import React, { useEffect } from "react";
import curve from "../assets/curve2.svg";
import "./OurDishes.css";
import OurDishesCard from "./UI/OurDishesCard";
import { IDish } from "../models/IDish";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchDishes } from "../store/reducers/DishesSlice";
import RectangularButton from "./UI/RectangularButton";
import { MENU_ROUTE } from "../routing/routesConsts";
import { useNavigate } from "react-router-dom";

const OurDishes: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const dishes: IDish[] | null = useAppSelector((state) => state.dishesReducer.dishes);

    const goToMenuPage = () => {
        navigate(MENU_ROUTE);
    };

    useEffect(() => {
        if (dishes == null) {
            dispatch(fetchDishes());
        }
    }, []);

    return (
        <div className="container-ourdishes">
            <img src={curve} alt="" className="curve-background" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        textTransform: "uppercase",
                        fontFamily: "Righteous-Regular",
                        fontSize: "80px",
                        textAlign: "center",
                        marginBottom: "100px",
                    }}
                >
                    our dishes
                </div>
                {dishes?.slice(0, 3).map((dish, index) => (
                    <OurDishesCard
                        key={dish.id}
                        dish={dish}
                        mode={index % 2 === 0 ? 0 : 1}
                    />
                ))}
                <RectangularButton
                    style={{
                        marginBottom: "24px",
                        width: "200px",
                        height: "78px",
                        marginTop: "-80px",
                        fontSize: "24px",
                        cursor: "pointer",
                        alignSelf: "flex-end"
                    }}
                    text="More"
                    theme="red"
                    onClick={goToMenuPage}
                />
            </div>
        </div>
    );
};

export default OurDishes;
