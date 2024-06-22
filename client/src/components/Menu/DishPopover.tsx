import React, { useState } from "react";
import info from "..//../assets/info.svg";
import deleteIcon from "..//../assets/delete.png";
import "./DishPopover.css";
import { IDish } from "../../models/IDish";
import Counter from "../UI/Counter";
import { cartStorage } from "../../services/CartService";
import RectangularButton from "../UI/RectangularButton";
import TextInput from "../UI/TextInput";

interface DishPopoverProps {
    isOpen: boolean;
    dish: IDish;
    categoryName: string;
    closePopup(): void;
}

const DishPopover: React.FC<DishPopoverProps> = ({
    isOpen,
    dish,
    categoryName,
    closePopup,
}) => {
    const [isOpenNutritionalPopover, setIsOpenNutritionalPopover] =
        useState(false);
    const handlePopupClick = (e: React.MouseEvent) => {
        e?.stopPropagation();
    };

    const addToCart = (value: number = 1) => {
        //TODO испрвить добавление в корзину, чтобы не приходилось удалять
        cartStorage.removeFromCart(dish.id);
        cartStorage.addToCart({ dishId: dish.id, quantity: value });
    };

    
    if (!isOpen) return null;
    return (
        <div className="popup-fade">
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
                        <div>{dish.name}</div>
                        <div className="category-dish">{categoryName}</div>
                    </div>
                    <div className="price">{dish.price}$</div>
                    <div className="description">{dish.description}</div>
                    <div className="counter-panel">
                        <div>{dish.weightInGrams}g</div>
                        <Counter initialValue={cartStorage.getCartItem(dish.id)?.quantity ?? 0} onChangeCounter={addToCart} />
                    </div>
                    <RectangularButton
                        text="Buy now"
                        theme="dark"
                        onClick={() => addToCart()}
                    />
                </div>
                {isOpenNutritionalPopover && (
                    <div className="addition">
                        <div style={{ color: "gray" }}>
                            Nutritional value per 100g
                        </div>
                        <div>
                            Energy value: {dish.nutritionalValue.fats}
                            kcal
                        </div>
                        <div>Proteins: {dish.nutritionalValue.protein}g</div>
                        <div>Fats: {dish.nutritionalValue.fats}g</div>
                        <div>
                            Carbohydrates: {dish.nutritionalValue.carbohydrates}
                            g
                        </div>
                    </div>
                )}
                <div
                    className="infoBut"
                    onMouseEnter={() => setIsOpenNutritionalPopover(true)}
                    onMouseLeave={() => setIsOpenNutritionalPopover(false)}
                >
                    <img src={info} style={{ width: "35px" }} alt="" />
                </div>
                <div className="deleteBut" onClick={closePopup}>
                    <img src={deleteIcon} style={{ width: "25px" }} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DishPopover;
