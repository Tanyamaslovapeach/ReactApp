import React from 'react';

const ImageCard = ({imageItem, title, text, card}) => {

    return (
        <>
        <div className={card}>
            <img src= {imageItem}></img>
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
}

export default ImageCard;