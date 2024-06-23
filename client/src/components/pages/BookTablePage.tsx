import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import curve from '../../assets/curve.svg'
import bookTableBG from '../../assets/bookTableBG.png';
import TextInput from "../UI/TextInput";
import RectangularButton from "../UI/RectangularButton";
import BookTable from "../BookTable";

const BookTablePage: React.FC = () => {
    const [checked, setChecked] = useState(false);
    function handleChange() {
        setChecked(!checked);
    }
    return (
        <>
            <Header />
            <BookTable />
            <Footer />
        </>
    );
};

export default BookTablePage;