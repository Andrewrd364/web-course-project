import React, { useState } from "react";

interface CounterProps {
    initialValue: number;
    onChangeCounter(value: number): void;
    maxValue?:number;
    minValue?:number;
}

const Counter: React.FC<CounterProps> = ({ initialValue, maxValue = 100,minValue = 1, onChangeCounter }) => {
    const [countDose, setCountDose] = useState(initialValue);

    const decreaseCounter = () => {
        setCountDose((prevCountDose) => prevCountDose - 1);
        onChangeCounter(countDose);
    };

    const increaseCounter = () => {
        setCountDose((prevCountDose) => prevCountDose + 1);
        onChangeCounter(countDose);
    };

    return (
        <div className="counter">
            <button
                style={{
                    margin: "0 0 0 0",
                    width: "34px",
                    height: "34px",
                }}
                disabled={countDose <= minValue}
                onClick={decreaseCounter}
            >
                -
            </button>
            <div style={{ display: "flex" }}>{countDose}</div>
            <button
                style={{
                    margin: "0 0 0 0",
                    width: "34px",
                    height: "34px",
                }}
                disabled={countDose >= maxValue}
                onClick={increaseCounter}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
