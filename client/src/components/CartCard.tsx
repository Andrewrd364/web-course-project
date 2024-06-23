import React from 'react';
import './Header.css';
import { IDish } from '../models/IDish';
import image from '../assets/sample.png';
import Counter from './UI/Counter';
import './CartCard.css';
import { cartStorage } from '../services/CartService';
import { useAppDispatch } from '../hooks/redux';
import CartSlice from '../store/reducers/CartSlice';
interface CartCardProps {
    dishId: string;
    quantity: number;
    name: string;
    price: number;
    imageUrl: string;
    weight: number;
}
const CartCard: React.FC<CartCardProps> = ({ dishId, quantity, name, price, imageUrl, weight }) => {


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: '100px' }}>
            <input type='checkbox' />
            <img src={imageUrl} alt='' style={{ width: '190px', marginRight: '40px', marginLeft: '50px' }} />
            <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginRight: '75px', width: '191px' }}>{name}</div>
            <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginRight: '30px' }}>{weight} g</div>
            <Counter initialValue={quantity} onChangeCounter={() => console.log()} />
            <div style={{ fontFamily: 'Mukta-Bold', fontSize: '36px', color: 'red', marginLeft: '80px', marginRight: '70px' }}>{price} $</div>
            <button className="delete-button" aria-label="Delete" />
        </div>
    )
}

export default CartCard;
