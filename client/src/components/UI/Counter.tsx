import React, { CSSProperties, useState } from "react";
import "./Counter.css";

interface CounterProps {
    initialValue: number;
    onChangeCounter(value: number): void;
    maxValue?: number;
    minValue?: number;
    style?: CSSProperties;
}

const Counter: React.FC<CounterProps> = ({
    initialValue,
    maxValue = 100,
    minValue = 0,
    onChangeCounter,
    style,
}) => {
    const [countDose, setCountDose] = useState(initialValue);

    const decreaseCounter = () => {
        if (countDose > minValue) {
            setCountDose((prevCountDose) => prevCountDose - 1);
            onChangeCounter(countDose - 1);
        }
    };

    const increaseCounter = () => {
        if (countDose < maxValue) {
            setCountDose((prevCountDose) => prevCountDose + 1);
            onChangeCounter(countDose + 1);
        }
    };

    return (
        <div
            style={style}
            className="counter"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                className="counter-button"
                disabled={countDose <= minValue}
                onClick={decreaseCounter}
            >
                -
            </button>
            <div className="count-display">{countDose}</div>
            <button
                className="counter-button"
                disabled={countDose >= maxValue}
                onClick={increaseCounter}
            >
                +
            </button>
        </div>
    );
};

export default Counter;
