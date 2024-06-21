import logo from '../assets/logo.svg';
import React from 'react';
import basket from '../assets/basket.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { BOOK_TABLE_ROUTE, CART_ROUTE, DEFAULT_ROUTE, MENU_ROUTE } from '../routing/routesConsts';

  const Header: React.FC = () => {

  return (
    <header className="container">
      <img src={logo} alt="Логотип" />
      <div style={{ display: 'flex', listStyleType: 'none', width: '40%', justifyContent: 'space-between' }}>
        <li><Link  to={DEFAULT_ROUTE}>Home</Link ></li>
        <li><Link  to={MENU_ROUTE}>Menu</Link ></li>
        <li><a href="/delivery" >Delivery</a></li>
        {/* <li><a href="/contact" >Contacts</a></li>
        <li><a href="/review" >Review</a></li>
        <li><a href="/about"> us</a></li> */}
      </div>
      <div style={{ display: 'flex' }}>
      <Link  to={CART_ROUTE}><img src={basket} alt="Корзина" /></Link >
        
      <Link  to={BOOK_TABLE_ROUTE}><button style={{fontWeight: 'bold', fontSize:'16px', }}>Booking now</button></Link >
      </div>
    </header>
  )
}

export default Header;
