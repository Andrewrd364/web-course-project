import React from 'react'
import bg1 from '../assets/backGround1.svg';

import Righteous from '../assets/fonts/Righteous-Regular.ttf'
export default function Home() {
  return (
    <div style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '120vh',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '60%',
          height: '70%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '0  0 200px 0',
        }}>
            <div style={{marginTop:'190px', display: 'inline-block', textAlign: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{lineHeight: '1',margin:0,fontSize:'168px', color:'white',fontFamily:'Righteous'}}>
                        KOREAN
                    </p>
                    <p style={{fontSize:'50px', lineHeight: '1', margin:0, color:'white',fontFamily:'Righteous' }}>
                        TRADITIONAL RESTAURANT
                    </p>
                </div>
                <button title='Menu' style={{ float: 'left', marginTop:'50px', width:'198px', height:'76px', backgroundColor:'red', fontSize:'24px', color:'white', border:'none' }}>Menu</button>
            </div>
        </div>
      </div>
  )
}
