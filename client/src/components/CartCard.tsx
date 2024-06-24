import React, { useState } from "react";
import "./Header.css";
import { IDish } from "../models/IDish";
import Counter from "./UI/Counter";
import "./CartCard.css";
import { cartStorage } from "../services/CartService";
import { CartSlice } from "../store/reducers/CartSlice";
import { useAppDispatch } from "../hooks/redux";

interface CartCardProps {
    dish: IDish;
    quantity: number;
    deleteCartItem(): void
}
const CartCard: React.FC<CartCardProps> = ({ dish, quantity, deleteCartItem }) => {
    const dispatch = useAppDispatch();


    const setCartItem = (value: number = 1) => {
        //TODO исправить добавление в корзину, чтобы не приходилось удалять
        cartStorage.removeFromCart(dish.id);
        cartStorage.addToCart({ dishId: dish.id, quantity: value });
        dispatch(CartSlice.actions.setQuantity(cartStorage.getTotalQuantity()));
        if (value == 0) {
            deleteCartItem();
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginBottom: "100px",
            }}
        >
            <img
                src={dish.imageUrl}
                alt=""
                style={{
                    width: "190px",
                    marginRight: "40px",
                    marginLeft: "50px",
                }}
            />
            <div
                style={{
                    fontFamily: "Mukta-Regular",
                    fontSize: "24px",
                    marginRight: "75px",
                    width: "191px",
                }}
            >
                {dish.name}
            </div>
            <div
                style={{
                    fontFamily: "Mukta-Regular",
                    fontSize: "24px",
                    marginRight: "30px",
                }}
            >
                {dish.weightInGrams} g
            </div>
            <Counter initialValue={quantity} onChangeCounter={setCartItem} />
            <div
                style={{
                    fontFamily: "Mukta-Bold",
                    fontSize: "36px",
                    color: "red",
                    marginLeft: "80px",
                    marginRight: "70px",
                }}
            >
                {dish.price} $
            </div>
            <button className="delete-button" aria-label="Delete" onClick={deleteCartItem} />
        </div>
    );
};

export default CartCard;
