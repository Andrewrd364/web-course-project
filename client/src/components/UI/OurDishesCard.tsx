import React from "react";
import '../OurDishes.css'

interface OurDishesCardProps {
    title: string;
    description: string;
    translate: string;
    cost: number;
    weight: number;
    image: string;
    mode: number;
}

const OurDishesCard: React.FC<OurDishesCardProps> = ({ title, translate, description, cost, weight, image, mode }) => {
    return (
        <>

            {mode === 0 ? (

                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '200px', marginLeft: '-150px' }}>
                    <img src={image} alt="" width={580} />
                    <div style={{ marginTop: '150px', marginLeft: '100px' }}>
                        <div className="title">{title}</div>
                        <div className="translate">{translate}</div>
                        <div className="description">{description}</div>
                        <div className="more-info">
                            <div className="cost">{cost} $</div>
                            <div className="weight">{weight} g</div>
                        </div>
                        <button
                            title='Buy'
                            className="buy-now"
                        >
                            Buy now
                        </button>
                    </div>
                </div>

            ) : (

                <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '200px', marginLeft: '150px' }}>
                    <div style={{ marginTop: '150px', marginRight: '100px' }}>
                        <div className="title" >{title}</div>
                        <div className="translate">{translate}</div>
                        <div className="description">{description}</div>
                        <div className="more-info">
                            <div className="cost" >{cost} $</div>
                            <div className="weight" >{weight} g</div>
                        </div>
                        <button className="buy-now" title='Buy'>
                            Buy now
                        </button>
                    </div>
                    <img src={image} alt="" width={580} />

                </div>
            )}

        </>
    )
}

export default OurDishesCard;