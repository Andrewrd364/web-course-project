import React, { useEffect, useState } from 'react';

export default function Menu() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/dishes'); 
        const data = await response.json();
        setDishes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <div style={{ marginTop: '100px' }}>
      <h1>Menu</h1>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>{dish.name}</li>
        ))}
      </ul>
    </div>
  );
}
