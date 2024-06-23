import logo from '../assets/logo.svg';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { BOOK_TABLE_ROUTE, DEFAULT_ROUTE, DELIVERY_ROUTE, MENU_ROUTE } from '../routing/routesConsts';
import CartButton from './CartButton';
import SkeletonImage from './UI/SkeletonImage';

interface HeaderProps {
  currentButton?: "home" | "menu"| "delivery"
}


const Header: React.FC<HeaderProps> = ({currentButton}) => {

  return (
    <header className="container">
      <SkeletonImage 
                src={logo} 
                alt="Логотип" 
                skeleton={<div style={{background: "black", width: "169px", height: "49px"}} className="skeleton-placeholder"/>}
            />

      <div style={{ display: 'flex', listStyleType: 'none', width: '40%', justifyContent: 'space-between' }}>
        <li><Link className={currentButton == "home" ? "active" : ""}  to={DEFAULT_ROUTE}>Home</Link ></li>
        <li><Link className={currentButton == "menu" ? "active" : ""}  to={MENU_ROUTE}>Menu</Link ></li>
        <li><Link className={currentButton == "delivery" ? "active" : ""} to={DELIVERY_ROUTE}>Delivery</Link ></li>
        {/* <li><a href="/contact" >Contacts</a></li>
        <li><a href="/review" >Review</a></li>
        <li><a href="/about"> us</a></li> */}
      </div>
      <div style={{ display: 'flex' }}>
      <CartButton/>
      <Link  to={BOOK_TABLE_ROUTE}><button style={{fontWeight: 'bold', fontSize:'16px', }}>Booking now</button></Link >
      </div>
    </header>
  )
}

export default Header;
