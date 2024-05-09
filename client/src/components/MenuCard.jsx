import React, { useState } from 'react'
import info from '../assets/info.svg';
import deleteIcon from '../assets/delete.png';
import './MenuCard.css'
export default function MenuCard({item}) {
  const [countDose,setCountDose] = useState(1);
  const [edition, setEdition] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup=()=>{
        setIsPopupOpen(true);
    };
    const closePopup = () =>{
        setIsPopupOpen(false);
        setCountDose(1);
    };
    const handlePopupClick = (e) => {
        e.stopPropagation();
      };
    

  return (
    <div>
       {isPopupOpen && 
        <div className="popup-fade" onClick={closePopup}>
            <div className='popup-win' onClick={handlePopupClick}>
                <img src={item.image} alt=""/>
                <div className='about-dish'>
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <div className='name-dish'>{item.name}</div>
                    <div className='category-dish'>{item.category}</div>    
                    </div>                
                    <div className='price'>{item.price}$</div>   
                    <div className='description'>{item.description}</div>
                    <div className='counter-panel'>
                        <div>{item.weight}g</div>
                        <div className='counter'>
                            <button style={{margin:'0 0 0 0', width:'34px',height:'34px'}} disabled={countDose <= 1} onClick={()=>setCountDose(countDose-1)}>-</button>
                            <div style={{display:'flex'}}>{countDose}</div>
                            <button style={{margin:'0 0 0 0',width:'34px', height:'34px'}} disabled={countDose >= 10} onClick={()=>setCountDose(countDose+1)}>+</button>
                        </div>
                    </div>
                    <button className='button-buy'>Add to cart</button>
                </div>
                {edition && 
                <div className='addition'>
                    <div style={{color:'gray'}}>Nutritional value per 100g</div>
                    <div>Calories: {item.calories}kcal</div>
                    <div>Proteins: {item.calories}g</div>
                    <div>Fats: {item.calories}g</div>
                    <div>Carbohydrates: {item.calories}g</div>
                </div>
                }
                <div className='infoBut' onMouseEnter={()=>setEdition(true)} onMouseLeave={()=>setEdition(false)}>
                    <img src={info} style={{width:'35px'}} alt=""/>
                </div>
                <div className='deleteBut' onClick={closePopup}>
                    <img src={deleteIcon} style={{width:'25px'}} alt=""/>
                </div>
            </div>
        </div>}
    <div className="card-hover-effect" onClick={openPopup}>
        <img src={item.image} alt=""/>
        <div style={{width:'250px', height:'270px', backgroundColor:'#F5F5F5', borderRadius:'18px', position:'absolute',bottom:'0px'}}>
            <div style={{marginTop:'100px',paddingInline:'32px', display:'flex', height:'55%', flexDirection:'column', alignItems:'center', justifyContent:'space-between'}}>
                <div>
                <div className='name-dish'>{item.name}</div>                
                <div style={{color:'gray'}}>{item.weight}g</div>
                </div>
                <div className='price'>{item.price}$</div>   
                <button className='button-buy'>Buy now</button>
            </div>
        </div>
    </div>
    </div>
  )
}
