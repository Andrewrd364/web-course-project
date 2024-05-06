import logo from '../assets/logo.svg';
import React from 'react';
import basket from '../assets/basket.svg';
import './Header.css';
import Mukta from '../assets/fonts/Mukta-Bold.ttf'

export default function Header() {

  return (
    <header className="container">
      <img src={logo} alt="Логотип" />
      <div style={{ display: 'flex', listStyleType: 'none', width: '40%', justifyContent: 'space-between' }}>
        <li><a href="/" >Home</a></li>
        <li><a href="/menu" >Menu</a></li>
        <li><a href="/delivery" >Delivery</a></li>
        <li><a href="/contact" >Contacts</a></li>
        <li><a href="/review" >Review</a></li>
        <li><a href="/about">About us</a></li>
      </div>
      <div style={{ display: 'flex' }}>
        <img src={basket} alt="Корзина" />
        <button style={{fontFamily:Mukta,fontWeight: 'bold', fontSize:'16px', }}>Booking now</button>
      </div>
    </header>
  )
}
