import React from "react";
import "../OurDishes.css";
import { IDish } from "../../models/IDish";
import SkeletonImage from "./SkeletonImage";
import Skeleton from "./Skeleton";

interface OurDishesCardProps {
    dish: IDish;
    mode: number;
}

const OurDishesCard: React.FC<OurDishesCardProps> = ({ dish, mode }) => {
    return (
        <>
            {mode === 0 ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "200px",
                        marginLeft: "-150px",
                    }}
                >
                    <SkeletonImage
                        src={dish.imageUrl}
                        alt="Фото блюда"
                        imageStyle={{ width: "580px" }}
                        skeleton={
                            <Skeleton
                                style={{
                                    zIndex: "10",
                                    background: "gray",
                                    width: "580px", // Замените на нужную вам ширину
                                    height: "580px", // Замените на нужную вам высоту
                                    borderRadius: "50%", // Делает элемент круглым
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        }
                    />
                    <div style={{ marginTop: "150px", marginLeft: "100px" }}>
                        <div className="title">{dish.name}</div>
                        {/* <div className="translate">{translate}</div> */}
                        <div className="description">{dish.description}</div>
                        <div className="more-info">
                            <div className="cost">{dish.price} $</div>
                            <div className="weight">{dish.weightInGrams} g</div>
                        </div>
                        <button title="Buy" className="buy-now">
                            Buy now
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        marginBottom: "200px",
                        marginLeft: "150px",
                    }}
                >
                    <div style={{ marginTop: "150px", marginRight: "100px" }}>
                        <div className="title">{dish.name}</div>
                        {/* <div className="translate">{translate}</div> */}
                        <div className="description">{dish.description}</div>
                        <div className="more-info">
                            <div className="cost">{dish.price} $</div>
                            <div className="weight">{dish.weightInGrams} g</div>
                        </div>
                        <button className="buy-now" title="Buy">
                            Buy now
                        </button>
                    </div>
                    <SkeletonImage
                        src={dish.imageUrl}
                        alt="Фото блюда"
                        imageStyle={{ width: "580px" }}
                        skeleton={
                            <Skeleton
                                style={{
                                    zIndex: "10",
                                    background: "gray",
                                    width: "580px", // Замените на нужную вам ширину
                                    height: "580px", // Замените на нужную вам высоту
                                    borderRadius: "50%", // Делает элемент круглым
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            />
                        }
                    />
                </div>
            )}
        </>
    );
};

export default OurDishesCard;
