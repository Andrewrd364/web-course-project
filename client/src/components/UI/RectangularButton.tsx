import React, { CSSProperties } from "react";
import "./RectangularButton.css";

interface RectangularButtonProps {
    text: string;
    theme: "red" | "dark";
    onClick(e: React.MouseEvent): void;
    style?: CSSProperties;
    disabled?: boolean
}

const RectangularButton: React.FC<RectangularButtonProps> = ({
    theme,
    onClick,
    text,
    style,
    disabled
}) => {
    return (
        <button
            disabled={disabled}
            className={`rectangular-button ${theme}`}
            onClick={onClick}
            // title="Menu"
            style={style}
        >
            {text}
        </button>
    );
};

export default RectangularButton;
