import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import curve from '../../assets/curve.svg'
import bookTableBG from '../../assets/bookTableBG.png';
import TextInput from "../UI/TextInput";
import RectangularButton from "../UI/RectangularButton";

const BookTablePage: React.FC = () => {
    const [checked, setChecked] = useState(false);
    function handleChange() {
		setChecked(!checked);
	}
    return (
        <>
            <Header />
            <div style={{display:'flex', justifyContent:'center', paddingTop:"150px", flexDirection:'column', alignItems:'center'}}>
            <div style={{fontSize:'80px', textTransform:'uppercase', fontFamily:'Righteous-Regular', marginBottom:"100px"}}>Book a table</div>
                <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                <div style={{width:"70%", display:'flex', justifyContent:'flex-start',flexDirection:'column', alignItems:'flex-start'}}>
                    <TextInput placeholder="Your name" label="Name" mode={0}/>
                    <TextInput placeholder="Your name" label="Phone" mode={0}/>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', gap:'28px', alignItems:'center'}}>
                        <TextInput placeholder="00.00.00" label="Date" mode={1}/>
                        <TextInput placeholder="00:00" label="Time" mode={1}/>
                        <TextInput placeholder="0" label="Guests" mode={1}/>
                    </div>
                    <div style={{display:'flex', flexDirection:"row", alignItems:'flex-start'}}>
                        <input type="checkbox" checked={checked} onChange={handleChange} />
                        <div style={{fontSize:'16px', color:'grey'}}>By clicking the button, you consent to the processing of your data</div>
                    </div>
                </div>              
                <RectangularButton theme="red" onClick={()=>console.log('забронировано')} text="Booking now" style={{width:'198px', height:'75px', fontSize:'24px', fontFamily:'Mukta-Bold'}}/>
                </div>
            </div>
            <Footer />
        </> 
    );
};

export default BookTablePage;

// <div style={{paddingTop:'150px', display:'flex', justifyContent:'flex-start', flexDirection:'column', alignItems:'center'}}>
//                 <div style={{fontSize:'80px', textTransform:'uppercase', fontFamily:'Righteous-Regular'}}>Book a table</div>
//                 <div style={{width:"70%", display:'flex', justifyContent:'flex-start',flexDirection:'column', alignItems:'flex-start'}}>
//                     <TextInput placeholder="Your name" label="Name" mode={0}/>
//                     <TextInput placeholder="Your name" label="Phone" mode={0}/>
//                     <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', gap:'28px'}}>
//                         <TextInput placeholder="00.00.00" label="Date" mode={1}/>
//                         <TextInput placeholder="00:00" label="Time" mode={1}/>
//                         <TextInput placeholder="0" label="Guests" mode={1}/>
//                     </div>
//                     <div style={{display:'flex', flexDirection:"row", alignItems:'flex-start'}}>
//                         <input type="checkbox" checked={checked} onChange={handleChange} />
//                         <div style={{fontSize:'16px', color:'grey'}}>By clicking the button, you consent to<br/> the processing of your data</div>
//                     </div>
//                 </div>              
//                 <RectangularButton theme="red" onClick={()=>console.log('забронировано')} text="Booking now" style={{width:'198px', height:'75px', fontSize:'24px', fontFamily:'Mukta-Bold'}}/>
//             </div>