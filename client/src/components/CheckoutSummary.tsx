import React, { useEffect, useState } from "react";
import breakfastIcon from '../assets/deliveryIcon1.svg';
import lunchIcon from '../assets/deliveryIcon2.svg';
import dinnerIcon from '../assets/deliveryIcon3.svg';
import DeliveryCard from "./UI/DeliveryCard";
import RectangularButton from "./UI/RectangularButton";
import './CheckoutSummary.css';
import { useAppSelector } from "../hooks/redux";
import { ICartItem } from "../models/ICartItem";
import { IDish } from "../models/IDish";
import { cartStorage } from "../services/CartService";


const CheckoutSummary: React.FC = () => {
    const dishes = useAppSelector((state) => state.dishesReducer.dishes);
    const numberOfCarts = useAppSelector(
        (state) => state.cartReducer.quantityDishesInCart
    );

    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [salle, setSalle] = useState<number>(0);
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

        setAmount(total);
    });


    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHour(new Date().getHours());
        }, 60000); // Обновляем время каждую минуту

        return () => clearInterval(interval);
    }, []);

    const checkHighlighted = (start: number, end: number) => {
        return currentHour >= start && currentHour < end;
    };

    useEffect(() => {
        if (checkHighlighted(9, 12) || checkHighlighted(15, 16) || checkHighlighted(22, 23)) {
            setSalle(amount * 0.1);
        }
    }, [currentHour]);
    useEffect(() => {
        setTotalAmount(amount - salle);
    }, [salle, amount])
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '160px' }}>
            <div className="containerSummary">
                <div className="summary">
                    <div className="summary-title">Summary</div>
                    <div className="summary-details">
                        <div className="details-column">
                            <div>Total amount</div>
                            <div>Salle -10%</div>
                            <div>Shipping</div>
                        </div>
                        <div className="details-column">
                            <div className="total-amount">{amount}$</div>
                            <div className="total-amount">{salle}$</div>
                            <div className="total-amount">Free</div>
                        </div>
                    </div>
                </div>
                <div className="total-summary">
                    <div>Total</div>
                    <div >{totalAmount}$</div>
                </div>
                <RectangularButton text="Pay now" theme="red" onClick={() => console.log()} style={{ fontFamily: 'Mukta-Bold', fontSize: '24px', width: '198px', height: '75px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: "column", width: '75%' }}>
                <DeliveryCard
                    theme="light"
                    title="Breakfasts"
                    discount={10}
                    timeRange="9:00 AM to 12:00 PM"
                    isHighlighted={checkHighlighted(9, 12)}
                    icon={breakfastIcon}
                />
                <DeliveryCard
                    theme="light"
                    title="Lunches"
                    discount={10}
                    timeRange="3:00 PM to 4:00 PM"
                    isHighlighted={checkHighlighted(15, 16)}
                    icon={lunchIcon}
                />
                <DeliveryCard
                    theme="light"
                    title="Dinners"
                    discount={10}
                    timeRange="10:00 PM to 11:00 PM"
                    isHighlighted={checkHighlighted(22, 23)}
                    icon={dinnerIcon}
                />
            </div>
        </div>

    );
};

export default CheckoutSummary;