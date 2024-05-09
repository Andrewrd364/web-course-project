import React from 'react'
import bgAbout from '../assets/bgAbout.png';
import './About.css';

export default function About() {
  return (
    <div className='containerAbout'>
        {/* <img src={bgAbout} alt=''/> */}
        <div className='glass-effect'>
            <p>About us</p>
            <div className="text">
            Welcome to SIG-YOG restaurant!
            </div>
            <div className="text">
            Over 140 dishes will introduce you to traditional Korean culture. We don't adjust our dishes to European tastes. Everything is delicious and just like in Korea.
            </div>
            <div className="text">
            "SIG-YOG" is not just a place to have a good time, it's also a fast food delivery! Place an order with us and enjoy the appropriate services at home and in the office.
            </div>
        </div>
    </div>
  )
}
