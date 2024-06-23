import React, { useState } from "react";
import TextInput from "./UI/TextInput";
import RectangularButton from "./UI/RectangularButton";

const BookTableForm: React.FC = () => {
    const [checked, setChecked] = useState(false);
    function handleChange() {
        setChecked(!checked);
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', width: '100%', marginLeft: '60%' }}>
            <div style={{ width: "70%", display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start' }}>
                <TextInput placeholder="Your name" label="Name" mode="titleLeft" />
                <TextInput placeholder="Your name" label="Phone" mode="titleLeft" />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '28px', alignItems: 'center', marginBottom: '32px' }}>
                    <TextInput placeholder="00.00.00" label="Date" mode="titleTop" />
                    <TextInput placeholder="00:00" label="Time" mode="titleTop" />
                    <TextInput placeholder="0" label="Guests" mode="titleTop" />
                </div>
                <div style={{ display: 'flex', flexDirection: "row", alignItems: 'center', gap: '16px' }}>
                    <input type="checkbox" checked={checked} onChange={handleChange} />
                    <div style={{ fontSize: '16px', color: 'grey' }}>By clicking the button, you consent to<br />the processing of your data</div>
                </div>
            </div>
            <RectangularButton theme="red" onClick={() => console.log('забронировано')} text="Booking now" style={{ width: '198px', height: '75px', fontSize: '24px', fontFamily: 'Mukta-Bold', marginTop: '64px' }} />
        </div>
    );
};

export default BookTableForm;
