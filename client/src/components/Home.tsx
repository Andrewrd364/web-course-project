import React from 'react'
import bg1 from '../assets/backGround1.svg';
import './Home.css'
import RectangularButton from './UI/RectangularButton';
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE } from '../routing/routesConsts';

export default function Home() {
  const navigate = useNavigate();

  const goToMenuPage = () => {
    navigate(MENU_ROUTE);
};

  return (
    <div style={{
      backgroundImage: `url(${bg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '120vh',
      position: 'relative',
    }}>
      <div className='glassEffect'>
        <div className='textHome'>
          <div style={{ textAlign: 'center' }}>
            <p style={{ lineHeight: '1', margin: 0, fontSize: '168px', color: 'white', fontFamily: 'Righteous-Regular' }}>
              KOREAN
            </p>
            <p style={{ fontSize: '50px', lineHeight: '1', margin: 0, color: 'white', fontFamily: 'Righteous-Regular' }}>
              TRADITIONAL RESTAURANT
            </p>
          </div>
          <RectangularButton style={{marginTop: '50px', width: '198px', height: '76px', backgroundColor: 'red', fontSize: '24px'}}  theme={'red'} onClick={goToMenuPage} text="Menu"/>
        </div>
      </div>
    </div>
  )
}
