import React, { CSSProperties, MouseEvent } from "react";
import { Property } from "csstype";
import "./RectangularButton.css";

interface RectangularButtonProps {
    text: string;
    theme: "red" | "dark";
    onClick(e: React.MouseEvent): void;
    style?: CSSProperties;
}

const RectangularButton: React.FC<RectangularButtonProps> = ({
    theme,
    onClick,
    text,
    style
}) => {
    return (
        <button
            className={`rectangular-button ${theme}`}
            onClick={onClick}
            title="Menu"
            style={style}
        >
            {text}
        </button>
    );
};

export default RectangularButton;
