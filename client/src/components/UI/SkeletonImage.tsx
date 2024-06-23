import React, { CSSProperties, useState } from "react";

interface SkeletonImageProps {
    src: string;
    alt: string;
    skeleton: React.ReactNode;
    imageStyle?: CSSProperties;
}

const SkeletonImage: React.FC<SkeletonImageProps> = ({
    src,
    alt,
    skeleton,
    imageStyle
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <>
            {!isLoaded && skeleton}
            <img
                src={src}
                alt={alt}
                style={{ display: isLoaded ? "block" : "none", ...imageStyle }}
                onLoad={handleImageLoad}
            />
        </>
    );
};

export default SkeletonImage;
