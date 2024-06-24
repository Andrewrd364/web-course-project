import React, { useEffect, useState } from "react";
import "../Header.css";
import CartCard from "../Cart/CartCard";
import RectangularButton from "../UI/RectangularButton";
import { ICartItem } from "../../models/ICartItem";
import { cartStorage } from "../../services/CartService";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IDish } from "../../models/IDish";
import { CartSlice } from "../../store/reducers/CartSlice";
import { fetchDishes } from "../../store/reducers/DishesSlice";
import { useNavigate } from "react-router-dom";
import { CHECKOUT_ROUTE } from "../../routing/routesConsts";

const Cart: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const dishes = useAppSelector((state) => state.dishesReducer.dishes);
    const numberOfCarts = useAppSelector(
        (state) => state.cartReducer.quantityDishesInCart
    );


    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [selectedDishes, setSelectedDishes] = useState<
        (IDish & { quantity: number })[]
    >([]); // Добавляем поле quantity к IDish

    useEffect(() => {
        const cart = cartStorage.getCart();
        const cartItems: ICartItem[] = Object.keys(cart)
            .map((dishId) => ({
                dishId,
                quantity: cart[dishId],
            }))
            .filter((item) => item.quantity > 0);

        setCartItems(cartItems);
    }, [numberOfCarts]);

    useEffect(() => {
        if (dishes == null) {
            dispatch(fetchDishes());
        }
    }, []);

    const deleteCartItem = (dishId: string) => {
        cartStorage.removeFromCart(dishId);
        dispatch(CartSlice.actions.setQuantity(cartStorage.getTotalQuantity()));
        setSelectedDishes(selectedDishes.filter((dish) => dish.id != dishId));
    };

    // Функция для объединения данных из dishes и cartItems
    useEffect(() => {
        if (dishes) {
            const filteredDishes = dishes.filter((dish) => {
                return cartItems.some((item) => item.dishId === dish.id);
            });
            const updatedDishes = filteredDishes.map((dish) => {
                const foundCartItem = cartItems.find(
                    (item) => item.dishId === dish.id
                );
                return {
                    ...dish,
                    quantity: foundCartItem ? foundCartItem.quantity : 0,
                };
            });
            setSelectedDishes(updatedDishes);
        }
    }, [dishes, cartItems, numberOfCarts]);

    // Вычисление общей суммы
    useEffect(() => {
        const total = selectedDishes.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
        setTotalAmount(total);
    });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "150px",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "400px",
            }}
        >
            <div
                style={{
                    textTransform: "uppercase",
                    fontSize: "80px",
                    fontFamily: "Righteous-Regular",
                    marginBottom: "56px",
                }}
            >
                shopping cart
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                {selectedDishes.map((item) => (
                    <CartCard
                        deleteCartItem={() => deleteCartItem(item.id)}
                        key={item.id}
                        dish={item}
                        quantity={item.quantity}
                    />
                ))}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "50%",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "77px",
                    }}
                >
                    <div
                        style={{ fontSize: "36px", fontFamily: "Mukta-Medium" }}
                    >
                        Total amount:
                    </div>
                    <div
                        style={{ fontSize: "36px", fontFamily: "Mukta-Medium" }}
                    >
                        {totalAmount.toFixed(2)} $
                    </div>
                </div>
                <RectangularButton
                    text="Checkout"
                    theme="red"
                    onClick={() => navigate(CHECKOUT_ROUTE)}
                    style={{
                        width: "198px",
                        height: "75px",
                        fontSize: "24px",
                        fontFamily: "Mukta-Bold",
                    }}
                />
            </div>
        </div>
    );
};


export default Cart;
