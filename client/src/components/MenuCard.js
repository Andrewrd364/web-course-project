import React, { useEffect, useState } from 'react'

import './MenuCard.css'
export default function MenuCard({name,image,price}) {
  const [countDose,setCountDose] = useState(1);

  return (
    <div style={{width:'259px', height:'425px', position: 'relative', display: 'flex', justifyContent:'center'}}>
        <img src={image} style={{position:'absolute', top: '8px', zIndex: '1'}}/>
        <div style={{width:'259px', height:'330px', backgroundColor:'#F5F5F5', borderRadius:'18px', position:'absolute',bottom:'0px'}}>
            <div style={{marginTop:'110px',paddingInline:'32px'}}>
                <p>{name}</p>
                <div className="containerCard">
                    <div>200g</div>
                    <div className='counter'>
                        <button style={{margin:'0 0 0 0'}} onClick={()=>{
                            if(countDose-1>0)
                            setCountDose(countDose-1)
                        }}>-</button>
                        <div style={{display:'flex'}}>{countDose}</div>
                        <button style={{margin:'0 0 0 0'}} onClick={()=>setCountDose(countDose+1)}>+</button>
                    </div>
                </div>
                <p className='price'>{price}</p>   
                <button style={{margin:'0 0 0 0', cursor: 'pointer', backgroundColor:'#15161A', color:'#fff', border:'0px'}}>Buy now</button>
            </div>
        </div>
    </div>
  )
}
