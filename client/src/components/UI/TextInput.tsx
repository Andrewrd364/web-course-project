import React, { useState, useRef, useEffect, CSSProperties } from "react";

interface TextInputProps {
    label: string;
    placeholder: string;
    mode: "titleTop" | "titleLeft";
    onChangeValue(value: string): void;
    useErrorStyle?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    placeholder,
    mode,
    useErrorStyle,
    onChangeValue,
}) => {
    const [borderColor, setBorderColor] = useState<string>(
        useErrorStyle ? "red" : "#e0e0e0"
    );
    const [inputWidth, setInputWidth] = useState<string>("auto");
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (spanRef.current) {
            setInputWidth(`${spanRef.current.offsetWidth + 20}px`);
        }
    }, [placeholder]);

    useEffect(() => {
        if (borderColor) {
            setBorderColor(useErrorStyle ? "red" : "#e0e0e0");
        }
    });

    const handleFocus = () => setBorderColor("black");
    const handleBlur = () => setBorderColor(useErrorStyle ? "red" : "#e0e0e0");

    return (
        <>
            {mode === "titleTop" ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <label>{label}</label>
                    <div
                        style={{
                            userSelect: "none",
                            background: "white",
                            flexDirection: "column",
                            alignItems: "center",
                            border: `2px solid ${borderColor}`,
                            borderRadius: "10px",
                            paddingInline: "10px",
                            paddingTop: "12px",
                            paddingBottom: "12px",
                            margin: "8px 0",
                            display: "inline-block",
                            width: inputWidth,
                        }}
                    >
                        <span
                            ref={spanRef}
                            style={{
                                visibility: "hidden",
                                whiteSpace: "nowrap",
                                position: "absolute",
                                fontSize: "inherit",
                                fontFamily: "inherit",
                                fontWeight: "inherit",
                                letterSpacing: "inherit",
                            }}
                        >
                            {placeholder}
                        </span>
                        <input
                            type="text"
                            placeholder={placeholder}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => onChangeValue(e.target.value)}
                            style={{
                                border: "none",
                                outline: "none",
                                textAlign: "center",
                                flex: 1,
                                width: "100%",
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        userSelect: "none",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        border: `2px solid ${borderColor}`,
                        borderRadius: "10px",
                        padding: "10px",
                        marginBottom: "32px",
                    }}
                >
                    <label style={{ marginInline: "8px" }}>{label}</label>
                    <div
                        style={{
                            width: "1px",
                            height: "28px",
                            backgroundColor: "#e0e0e0",
                            marginInline: "10px",
                        }}
                    />
                    <input
                        type="text"
                        placeholder={placeholder}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={(e) => onChangeValue(e.target.value)}
                        style={{ border: "none", outline: "none" }}
                    />
                </div>
            )}
        </>
    );
};

export default TextInput;
