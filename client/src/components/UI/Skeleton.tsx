import React, { CSSProperties } from "react";
import "./Skeleton.css"; // Импортируем стили для Skeleton

interface SkeletonProps {
    style?: CSSProperties;
}

const Skeleton: React.FC<SkeletonProps> = ({ style }) => {
    return <div className="skeleton-placeholder" style={style} />;
};

export default Skeleton;
