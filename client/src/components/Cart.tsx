import React, { useEffect, useState } from 'react';
import './Header.css';
import CartCard from './CartCard';
import RectangularButton from './UI/RectangularButton';
import { ICartItem } from '../models/ICartItem';
import { cartStorage } from '../services/CartService';
import { useAppSelector } from '../hooks/redux';
import { IDish } from '../models/IDish';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const dishes = useAppSelector((state) => state.dishesReducer.dishes);
  const [selectedDishes, setSelectedDishes] = useState<(IDish & { quantity: number })[]>([]); // Добавляем поле quantity к IDish
  const [takeAll, setTakeAll] = useState<boolean>(false);
  useEffect(() => {
    const cart = cartStorage.getCart();
    const cartItems: ICartItem[] = Object.keys(cart)
      .map(dishId => ({
        dishId,
        quantity: cart[dishId],
      }))
      .filter(item => item.quantity > 0);

    setCartItems(cartItems);
  }, []);

  // Функция для объединения данных из dishes и cartItems
  useEffect(() => {
    if (dishes) {
      const filteredDishes = dishes.filter(dish => {
        return cartItems.some(item => item.dishId === dish.id);
      });
      const updatedDishes = filteredDishes.map(dish => {
        const foundCartItem = cartItems.find(item => item.dishId === dish.id);
        return { ...dish, quantity: foundCartItem ? foundCartItem.quantity : 0 };
      });
      setSelectedDishes(updatedDishes);
    }
  }, [dishes, cartItems]);

  // Вычисление общей суммы
  useEffect(() => {
    const total = selectedDishes.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
    setTotalAmount(total);
  }, [selectedDishes]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "150px", flexDirection: 'column', alignItems: 'center', marginBottom: '400px' }}>
      <div style={{ textTransform: 'uppercase', fontSize: '80px', fontFamily: 'Righteous-Regular', marginBottom: '56px' }}>shopping cart</div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <RectangularButton text='Take all' theme='dark' onClick={() => console.log()} style={{ width: '132px', height: '54px', fontSize: '16px', fontFamily: 'Mukta-Bold', alignSelf: 'flex-end' }} />
        {selectedDishes.map(item => (
          <CartCard
            key={item.id}
            imageUrl={item.imageUrl}
            dishId={item.id}
            quantity={item.quantity}
            weight={item.weightInGrams}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '50%', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '77px' }}>
          <div style={{ fontSize: '36px', fontFamily: 'Mukta-Medium' }}>Total amount:</div>
          <div style={{ fontSize: '36px', fontFamily: 'Mukta-Medium' }}>{totalAmount.toFixed(2)} $</div>
        </div>
        <RectangularButton text='Checkout' theme='red' onClick={() => console.log()} style={{ width: '198px', height: '75px', fontSize: '24px', fontFamily: 'Mukta-Bold' }} />
      </div>
    </div>
  )
}

export default Cart;
