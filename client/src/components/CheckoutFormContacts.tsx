import React from "react";
import TextInput from "./UI/TextInput";


const CheckoutFormContacts: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Contacts</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
                <TextInput mode="titleLeft" placeholder="Your name" label="Name" onChangeValue={() => console.log()} />
                <TextInput mode="titleLeft" placeholder="Your surname" label="Surname" onChangeValue={() => console.log()} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
                <TextInput mode="titleLeft" placeholder="Your name" label="Phone" onChangeValue={() => console.log()} />
                <TextInput mode="titleLeft" placeholder="Your email" label="Email" onChangeValue={() => console.log()} />
            </div>
        </div>

    );
};

export default CheckoutFormContacts;