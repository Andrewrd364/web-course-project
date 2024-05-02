import React, { useEffect, useState } from 'react';
import './Menu.css';
import MenuCard from './MenuCard';
import sampleImg from '../assets/sample.png';
export default function Menu() {
  // const [dishes, setDishes] = useState([]);

  // useEffect(() => {
  //   const fetchDishes = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/api/dishes'); 
  //       const data = await response.json();
  //       setDishes(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchDishes();
  // }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <h1 className='headline'>menu</h1>
      <MenuCard name='Roast lamb with cashew' price={'10,55'} image={sampleImg}/>

      {/* <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <MenuCard name={dish.name}/>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
