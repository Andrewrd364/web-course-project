import React, { useState, useEffect } from "react";
import "./Menu.css";
import "../assets/back.png";
import MenuCard from "./Menu/MenuCard";
import back from "../assets/back.png";
import forward from "../assets/forward.png";
import curve from "../assets/curve.svg";
import { ICategory } from "../models/ICategory";
import { IDish } from "../models/IDish";
import DishService from "../services/DishService";
import CategoryService from "../services/CategoryService";

const Menu: React.FC = () => {
    const cardsPerPage = 8;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const totalPages = Math.ceil(dishes.length / cardsPerPage);

    const currentCards = dishes.slice(
        currentIndex * cardsPerPage,
        (currentIndex + 1) * cardsPerPage
    );

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < totalPages; i++) {
            dots.push(
                <div
                    key={i}
                    className={currentIndex === i ? "dot-active" : "dot"}
                    onClick={() => setCurrentIndex(i)}
                />
            );
        }
        return dots;
    };

    useEffect(() => {
        DishService.getAll().then((response) => {
            const dishes: IDish[] = response.data;
            
            if (dishes) setDishes(dishes);
        });
        CategoryService.getAll().then((response) => {
            const categories: ICategory[] = response.data;
            if (categories) setCategories(categories);
        });
    }, []);

    return (
        <div className="containerMenu">
            <img
                src={curve}
                alt=""
                style={{ position: "absolute", width: "100%", zIndex:-1 }}
            />
            <h1 className="headline">menu</h1>
            <div className="carousel">
                <button
                    className="prev"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    <img src={back} alt="Back" />
                </button>
                <div className="slides">
                    {currentCards.map((item, index) => (
                        <div key={index} className="slide">
                            <MenuCard
                                theme="light"
                                dish={item}
                                categoryName={
                                    categories.filter(
                                        (ctg) => ctg.id == item.categoryId
                                    )[0].name
                                }
                            />
                        </div>
                    ))}
                </div>
                <button
                    className="next"
                    onClick={nextSlide}
                    disabled={currentIndex === totalPages - 1}
                >
                    <img src={forward} alt="Next" />
                </button>
            </div>
            <div className="dots">{renderDots()}</div>
        </div>
    );
};

export default Menu;
