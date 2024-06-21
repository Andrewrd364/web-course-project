import React, { useState } from "react";
import info from "../assets/info.svg";
import deleteIcon from "../assets/delete.png";
import "./MenuCard.css";
import { IDish } from "../models/IDish";
import Counter from "./UI/Counter";
import { cartStorage } from "../services/CartServise";

interface MenuCardProps {
    dish: IDish;
    categoryName: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ dish, categoryName }) => {
    const [edition, setEdition] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const handlePopupClick = (e: React.MouseEvent) => {
        e?.stopPropagation();
    };

    const addToCart = (value: number = 1) => {
        //TODO испрвить добавление в корзину, чтобы не приходилось удалять
        cartStorage.removeFromCart(dish.id)
        cartStorage.addToCart({dishId: dish.id, quantity: value})
    };

    return (
        <div>
            {isPopupOpen && (
                <div className="popup-fade" onClick={closePopup}>
                    <div className="popup-win" onClick={handlePopupClick}>
                        <img src={dish.imageUrl} alt="" />
                        <div className="about-dish">
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <div className="name-dish">{dish.name}</div>
                                <div className="category-dish">
                                    {categoryName}
                                </div>
                            </div>
                            <div className="price">{dish.price}$</div>
                            <div className="description">
                                {dish.description}
                            </div>
                            <div className="counter-panel">
                                <div>{dish.weightInGrams}g</div>
                                <Counter
                                    initialValue={0}
                                    onChangeCounter={addToCart}
                                />
                            </div>
                            <button className="button-buy">Add to cart</button>
                        </div>
                        {edition && (
                            <div className="addition">
                                <div style={{ color: "gray" }}>
                                    Nutritional value per 100g
                                </div>
                                <div>
                                    Energy value: {dish.nutritionalValue.fats}
                                    kcal
                                </div>
                                <div>
                                    Proteins: {dish.nutritionalValue.protein}g
                                </div>
                                <div>Fats: {dish.nutritionalValue.fats}g</div>
                                <div>
                                    Carbohydrates:{" "}
                                    {dish.nutritionalValue.carbohydrates}g
                                </div>
                            </div>
                        )}
                        <div
                            className="infoBut"
                            onMouseEnter={() => setEdition(true)}
                            onMouseLeave={() => setEdition(false)}
                        >
                            <img src={info} style={{ width: "35px" }} alt="" />
                        </div>
                        <div className="deleteBut" onClick={closePopup}>
                            <img
                                src={deleteIcon}
                                style={{ width: "25px" }}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
            <div className="card-hover-effect" onClick={openPopup}>
                <img src={dish.imageUrl} alt="" />
                <div
                    style={{
                        width: "250px",
                        height: "270px",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "18px",
                        position: "absolute",
                        bottom: "0px",
                    }}
                >
                    <div
                        style={{
                            marginTop: "100px",
                            paddingInline: "32px",
                            display: "flex",
                            height: "55%",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <div className="name-dish">{dish.name}</div>
                            <div style={{ color: "gray" }}>
                                {dish.weightInGrams}g
                            </div>
                        </div>
                        <div className="price">{dish.price}$</div>
                        <button className="button-buy" onClick={() => addToCart()}>
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
