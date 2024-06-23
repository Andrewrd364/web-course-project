import React, { useState } from "react";
import curve4 from "../assets/curve4.svg";
import bookTableBG from "../assets/bookTableBG.png";
import TextInput from "./UI/TextInput";
import RectangularButton from "./UI/RectangularButton";
import BookTableForm from "./BookTableForm";

const BookTable: React.FC = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: "150px",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "400px",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        right: 0,
                        zIndex: -1,
                        top: "270px",
                    }}
                    src={bookTableBG}
                    alt=""
                />
                <img
                    style={{
                        position: "absolute",
                        right: 0,
                        zIndex: -100,
                        top: "-550px",
                        width: "100%",
                    }}
                    src={curve4}
                    alt=""
                />
                <div
                    style={{
                        fontSize: "80px",
                        textTransform: "uppercase",
                        fontFamily: "Righteous-Regular",
                        marginBottom: "100px",
                    }}
                >
                    Book a table
                </div>
                <BookTableForm />
            </div>
        </>
    );
};

export default BookTable;
