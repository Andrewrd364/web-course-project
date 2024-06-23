import React, { useState } from "react";
import basket from "../assets/basket.svg";
import "./CartButton.css";
import { Link } from "react-router-dom";
import { CART_ROUTE } from "../routing/routesConsts";
import { useAppSelector } from "../hooks/redux";

const CartButton: React.FC = () => {
    const quantityDishesInCart = useAppSelector(
        (state) => state.cartReducer.quantityDishesInCart
    );

    return (
        <Link to={CART_ROUTE} className="cart-button">
            <img src={basket} alt="Корзина" />
            {quantityDishesInCart > 0 && (
                <div className="cart-count">{quantityDishesInCart}</div>
            )}
        </Link>
    );
};

export default CartButton;

