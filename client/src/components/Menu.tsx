import React, { useState, useEffect, ChangeEvent } from "react";
import "./Menu.css";
import "../assets/back.png";
import MenuCard from "./Menu/MenuCard";
import back from "../assets/back.png";
import forward from "../assets/forward.png";
import curve from "../assets/curve.svg";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchCategories, fetchDishes } from "../store/reducers/DishesSlice";

const Menu: React.FC = () => {
    const dispatch = useAppDispatch();
    const cardsPerPage = 8;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const dishes = useAppSelector((state) => state.dishesReducer.dishes);
    const categories = useAppSelector(
        (state) => state.dishesReducer.categories
    );

    useEffect(() => {
        if (dishes == null) {
            dispatch(fetchDishes());
        }
        if (categories == null) {
            dispatch(fetchCategories());
        }
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    // const totalPages = Math.ceil((dishes ? dishes.length : 0) / cardsPerPage);
    // const currentCards = dishes?.slice(
    //     currentIndex * cardsPerPage,
    //     (currentIndex + 1) * cardsPerPage
    // );
    const filteredDishes = dishes?.filter((dish) =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const totalPages = Math.ceil((filteredDishes ? filteredDishes.length : 0) / cardsPerPage);

    const currentCards = filteredDishes?.slice(
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
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentIndex(0); // сбросить на первую страницу при новом поиске
    };
    return (
        <div className="containerMenu">
            <img
                src={curve}
                alt=""
                style={{ position: "absolute", width: "100%", zIndex: -1 }}
            />
            <h1 className="headline">menu</h1>
            <div
                style={{
                    userSelect: "none",
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    border: `2px solid gray`,
                    borderRadius: "10px",
                    padding: "10px",
                    marginBottom: "32px",
                }}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ border: "none", outline: "none" }}
                />
            </div>
            {/* <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            /> */}
            <div className="carousel">
                <button
                    className="prev"
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                >
                    <img src={back} alt="Back" />
                </button>
                <div className="slides">
                    {currentCards?.map((item, index) => (
                        <div key={item.id} className="slide">
                            <MenuCard
                                theme="light"
                                dish={item}
                                categoryName={
                                    categories?.filter(
                                        (ctg) => ctg.id == item.categoryId
                                    )[0].name ?? ""
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
