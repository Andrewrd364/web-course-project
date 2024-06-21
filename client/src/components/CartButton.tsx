import React, { useState } from "react";
import basket from "../assets/basket.svg";
import "./CartButton.css";
import { Link } from "react-router-dom";
import { CART_ROUTE } from "../routing/routesConsts";

const CartButton: React.FC = () => {
    const [cartItemCount, setCartItemCount] = useState(12); // Стейт для количества товаров в корзине

    // Функция для увеличения количества товаров в корзине (пример)
    const incrementCartItemCount = () => {
        setCartItemCount(prevCount => prevCount + 1);
    };

    return (
        <Link to={CART_ROUTE} className="cart-button">
            <img src={basket} alt="Корзина" />
            {cartItemCount > 0 && (
                <div className="cart-count">{cartItemCount}</div>
            )}
        </Link>
    );
};

export default CartButton;

