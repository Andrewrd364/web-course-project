import React, { useState } from "react";
import TextInput from "./UI/TextInput";
import RectangularButton from "./UI/RectangularButton";
import combineDateTime, {
    isPhoneNumberValid,
    parseAndValidateDate,
    isTimeValid,
    isInteger,
} from "../utils/inputValidation";
import { IBookingTable } from "../models/IBookingTable";
import BookingTableService from "../services/BookingTableService";

interface FormErrors {
    name: boolean;
    phone: boolean;
    date: boolean;
    time: boolean;
    guests: boolean;
}

const initialFormErrors: FormErrors = {
    name: false,
    phone: false,
    date: false,
    time: false,
    guests: false,
};

const BookTableForm: React.FC = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [checked, setChecked] = useState(false);
    const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

    const handleChange = () => {
        setChecked(!checked);
    };

    const handleBooking = () => {
        const errors: FormErrors = {
            name: name === "",
            phone: !isPhoneNumberValid(phone),
            date: !parseAndValidateDate(date),
            time: !isTimeValid(time),
            guests: !isInteger(guests) || parseInt(guests, 10) <= 0,
        };

        setFormErrors(errors);

        // Проверка наличия ошибок
        if (Object.values(errors).some((error) => error)) {
            return;
        }

        // Если все проверки пройдены, можно выполнять бронирование
        const dateTime = combineDateTime(date, time);
        const numberOfGuests = isInteger(guests);
        if (dateTime && numberOfGuests) {
            const bookingTable: IBookingTable = {
                startTime: dateTime,
                numberOfGuests: numberOfGuests,
                customer: {
                    name: name,
                    phoneNumber: phone,
                },
            };
            BookingTableService.postBookingTable(bookingTable);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                width: "100%",
                marginLeft: "60%",
            }}
        >
            <div
                style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                <TextInput
                    placeholder="Your name"
                    label="Name"
                    mode="titleLeft"
                    onChangeValue={(value: string) => setName(value)}
                    useErrorStyle={formErrors.name}
                />
                <TextInput
                    placeholder="Your phone number"
                    label="Phone"
                    mode="titleLeft"
                    onChangeValue={(value: string) => setPhone(value)}
                    useErrorStyle={formErrors.phone}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        gap: "15px",
                        alignItems: "center",
                        marginBottom: "32px",
                    }}
                >
                    <TextInput
                        placeholder="00.00.00"
                        label="Date"
                        mode="titleTop"
                        onChangeValue={(value: string) => setDate(value)}
                        useErrorStyle={formErrors.date}
                    />
                    <TextInput
                        placeholder="00:00"
                        label="Time"
                        mode="titleTop"
                        onChangeValue={(value: string) => setTime(value)}
                        useErrorStyle={formErrors.time}
                    />
                    <TextInput
                        placeholder="0"
                        label="Guests"
                        mode="titleTop"
                        onChangeValue={(value: string) => setGuests(value)}
                        useErrorStyle={formErrors.guests}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "16px",
                    }}
                >
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                    />
                    <div style={{ fontSize: "16px", color: "grey" }}>
                        By clicking the button, you consent to
                        <br />
                        the processing of your data
                    </div>
                </div>
            </div>
            <RectangularButton
                theme="red"
                onClick={handleBooking}
                text="Booking now"
                style={{
                    width: "198px",
                    height: "75px",
                    fontSize: "24px",
                    fontFamily: "Mukta-Bold",
                    marginTop: "64px",
                }}
            />
        </div>
    );
};

export default BookTableForm;
