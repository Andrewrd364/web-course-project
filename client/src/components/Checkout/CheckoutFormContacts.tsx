import React, { useState } from "react";
import TextInput from "../UI/TextInput";
import { isPhoneNumberValid, isValidEmail } from "../../utils/inputValidation";

interface FormErrors {
    name: boolean;
    surname: boolean;
    phone: boolean;
    email: boolean;
}

const initialFormErrors: FormErrors = {
    name: false,
    surname: false,
    phone: false,
    email: false,
};

const CheckoutFormContacts: React.FC = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

    const handleBooking = () => {
        const errors: FormErrors = {
            name: name === "",
            surname: surname === "",
            phone: !isPhoneNumberValid(phone),
            email: !isValidEmail(email),
        };

        setFormErrors(errors);

        // Проверка наличия ошибок
        if (Object.values(errors).some((error) => error)) {
            return;
        }

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'Mukta-Regular', fontSize: '24px', marginBottom: '56px' }}>Contacts</div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
                <TextInput mode="titleLeft" placeholder="Your name" label="Name"
                    onChangeValue={(value: string) => setName(value)}
                    useErrorStyle={formErrors.name} />
                <TextInput mode="titleLeft" placeholder="Your surname" label="Surname"
                    onChangeValue={(value: string) => setSurname(value)}
                    useErrorStyle={formErrors.surname} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '32px' }}>
                <TextInput mode="titleLeft" placeholder="Your name" label="Phone"
                    onChangeValue={(value: string) => setPhone(value)}
                    useErrorStyle={formErrors.phone} />
                <TextInput mode="titleLeft" placeholder="Your email" label="Email"
                    onChangeValue={(value: string) => setEmail(value)}
                    useErrorStyle={formErrors.email} />
            </div>
        </div>

    );
};

export default CheckoutFormContacts;