import React, { useState } from "react";
import "../OurDishes.css";
import { IDish } from "../../models/IDish";
import SkeletonImage from "./SkeletonImage";
import Skeleton from "./Skeleton";
import { useAppDispatch } from "../../hooks/redux";
import { cartStorage } from "../../services/CartService";
import Counter from "./Counter";
import RectangularButton from "./RectangularButton";
import { CartSlice } from "../../store/reducers/CartSlice";

interface OurDishesCardProps {
    dish: IDish;
    mode: number;
}

const OurDishesCard: React.FC<OurDishesCardProps> = ({ dish, mode }) => {
    const dispatch = useAppDispatch();
    const initialQuantity = cartStorage.getCartItem(dish.id)?.quantity;
    const [showCounter, setShowCounter] = useState<boolean>(
        initialQuantity > 0
    );

    const setCartItem = (value: number = 1) => {
        //TODO исправить добавление в корзину, чтобы не приходилось удалять
        cartStorage.removeFromCart(dish.id);
        cartStorage.addToCart({ dishId: dish.id, quantity: value });
        dispatch(CartSlice.actions.setQuantity(cartStorage.getTotalQuantity()));
        setShowCounter(value > 0);
    };

    return (
        <>
            {mode === 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "200px",
                        marginLeft: "-150px",
                    }}
                >
                    <SkeletonImage
                        src={dish.imageUrl}
                        alt="Фото блюда"
                        imageStyle={{ width: "580px" }}
                        skeleton={
                            <Skeleton
                                style={{
                                    zIndex: "10",
                                    background: "gray",
                                    width: "580px", // Замените на нужную вам ширину
                                    height: "580px", // Замените на нужную вам высоту
                                    borderRadius: "50%", // Делает элемент круглым
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        }
                    />
                    <div style={{ marginTop: "150px", marginLeft: "100px" }}>
                        <div className="title">{dish.name}</div>
                        {/* <div className="translate">{translate}</div> */}
                        <div className="description">{dish.description}</div>
                        <div className="more-info">
                            <div className="cost">{dish.price} $</div>
                            <div className="weight">{dish.weightInGrams} g</div>
                        </div>
                        {showCounter ? (
                            <Counter
                                style={{ justifyContent: "flex-start" }}
                                initialValue={initialQuantity}
                                onChangeCounter={setCartItem}
                            />
                        ) : (
                            <RectangularButton
                                text="Buy now"
                                theme="dark"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCartItem();
                                }}
                            />
                        )}
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "200px",
                        marginLeft: "150px",
                    }}
                >
                    <div style={{ marginTop: "150px", marginRight: "100px" }}>
                        <div className="title">{dish.name}</div>
                        {/* <div className="translate">{translate}</div> */}
                        <div className="description">{dish.description}</div>
                        <div className="more-info">
                            <div className="cost">{dish.price} $</div>
                            <div className="weight">{dish.weightInGrams} g</div>
                        </div>
                        {showCounter ? (
                            <Counter
                                style={{ justifyContent: "flex-start" }}
                                initialValue={initialQuantity}
                                onChangeCounter={setCartItem}
                            />
                        ) : (
                            <RectangularButton
                                text="Buy now"
                                theme="dark"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCartItem();
                                }}
                            />
                        )}
                    </div>
                    <SkeletonImage
                        src={dish.imageUrl}
                        alt="Фото блюда"
                        imageStyle={{ width: "580px" }}
                        skeleton={
                            <Skeleton
                                style={{
                                    zIndex: "10",
                                    background: "gray",
                                    width: "580px", // Замените на нужную вам ширину
                                    height: "580px", // Замените на нужную вам высоту
                                    borderRadius: "50%", // Делает элемент круглым
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        }
                    />
                </div>
            )}
        </>
    );
};

export default OurDishesCard;
