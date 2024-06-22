import React, { useState } from "react";
import info from "..//../assets/info.svg";
import deleteIcon from "..//../assets/delete.png";
import "./MenuCard.css";
import { IDish } from "../../models/IDish";
import Counter from "../UI/Counter";
import { cartStorage } from "../../services/CartService";
import RectangularButton from "../UI/RectangularButton";
import DishPopover from "./DishPopover";

interface MenuCardProps {
    theme: "dark" | "light";
    dish: IDish;
    categoryName: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ dish, categoryName, theme }) => {
    const initialQuantity = cartStorage.getCartItem(dish.id)?.quantity;

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [showCounter, setShowCounter] = useState<boolean>(
        initialQuantity > 0
    );
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const setCartItem = (value: number = 1) => {
        //TODO испрвить добавление в корзину, чтобы не приходилось удалять
        cartStorage.removeFromCart(dish.id);
        cartStorage.addToCart({ dishId: dish.id, quantity: value });
        setShowCounter(value > 0);
    };

    return (
        <>
            <DishPopover
                isOpen={isPopupOpen}
                dish={dish}
                categoryName={categoryName}
                closePopup={closePopup}
            />
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
                        {showCounter ? (
                            <Counter
                                initialValue={initialQuantity}
                                onChangeCounter={setCartItem}
                            />
                        ) : (
                            <RectangularButton
                                text="Buy now"
                                theme={theme == "dark" ? "red" : "dark"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCartItem();
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuCard;
