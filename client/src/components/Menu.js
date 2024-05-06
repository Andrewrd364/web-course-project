import React, { useState, useEffect } from 'react';
import './Menu.css';
import '../assets/back.png'
import MenuCard from './MenuCard';
import sampleImg from '../assets/sample.png';
import back from '../assets/back.png';
import forward from '../assets/forward.png';
import curve from '../assets/curve.svg';

const items = [
  {
    index: 0,
    name: "Dish 1",
    price: 10.99,
    image: sampleImg,
    calories:580,
    proteins:25,
    fats:20,
    carbohydrates:10,
    category: 'Meat dishes',
    weight: "200",
    description: "Description for dish 1Description for dish 1Description for dish 1Description for dish 1Description for dish 1Description for dish 1Description for dish 1Description for dish 1"
  },
  {
    index: 1,
    name: "Dish 2",
    price: 15.99,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "250",
    description: "Description for dish 2"
  },
  {
    index: 2,
    name: "Dish 3",
    price: 12.49,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "180",
    description: "Description for dish 3"
  },
  {
    index: 3,
    name: "Dish 4",
    price: 8.99,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "220",
    description: "Description for dish 4"
  },
  {
    index: 4,
    name: "Dish 5",
    price: 11.79,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "190",
    description: "Description for dish 5"
  },
  {
    index: 5,
    name: "Dish 6",
    price: 9.29,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "210",
    description: "Description for dish 6"
  },
  {
    index: 6,
    name: "Dish 7",
    price: 10.99,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "200",
    description: "Description for dish 1"
  },
  {
    index: 7,
    name: "Dish 8",
    price: 15.99,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "250",
    description: "Description for dish 2"
  },
  {
    index: 8,
    name: "Dish 9",
    price: 12.49,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "180",
    description: "Description for dish 3"
  },
  {
    index: 9,
    name: "Dish 10",
    price: 8.99,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "220",
    description: "Description for dish 4"
  },
  {
    index: 10,
    name: "Dish 11",
    price: 11.79,
    category: 'Meat dishes',
    image: sampleImg,
    weight: "190",
    description: "Description for dish 5"
  },
  {
    index: 11,
    name: "Dish 12",
    price: 9.29,
    category: 'Meat dishes',
    calories:580,
    proteins:25,
    fats:20,
    carbohydrates:10,
    image: sampleImg,
    weight: "210",
    description: "Description for dish 6"
  }
];
export default function Menu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 8;
  const [dishes, setDishes] = useState([]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const totalPages = Math.ceil(dishes.length / cardsPerPage);

  const currentCards = dishes.slice(currentIndex * cardsPerPage, (currentIndex + 1) * cardsPerPage);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < totalPages; i++) {
      dots.push(
        <div key={i} className={currentIndex === i ? 'dot-active' : 'dot'} onClick={() => setCurrentIndex(i)}/>
      );
    }
    return dots;
  };

  useEffect(() => {
    setDishes(items);
    // const fetchDishes = async () => {
    //   try {
    //     const response = await fetch('http://localhost:5000/api/dishes'); 
    //     const data = await response.json();
    //     setDishes(data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // fetchDishes();
  }, []);
 
  return (
    <div className='containerMenu'>
      <img src={curve} alt="" style={{position:'absolute', width:'100%'}}/>
      <h1 className='headline'>menu</h1>
      <div className="carousel">
        <button className="prev" onClick={prevSlide} disabled={currentIndex === 0}>
          <img src={back} alt="Back" />
        </button>
        <div className="slides"> 
          {currentCards.map((item, index) => (
              <div key={index} className="slide">
                 <MenuCard
                 item={item}
              />
              </div>
          ))}
        </div>
        <button className="next" onClick={nextSlide} disabled={currentIndex === totalPages - 1}>
          <img src={forward} alt="Next" />
        </button>
      </div>
      <div className="dots">{renderDots()}</div>
    </div>
    

  );
}
