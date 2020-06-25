import React from 'react';
import s from './ImageBlock.module.css';
import ImageCard from '../ImgCard';

import imageGirl from '../ImageBlock/img/imageBlockGirl.jpg';
import imageNature from '../ImageBlock/img/imageBlockNature.jpg';
import imageFestival from '../ImageBlock/img/imageBlockFestival.jpg';

const ImageBlock = () => {
    
    return (
        <div>
            <div className={s.container}>
                <h2>Travel Features</h2>
                <button>SEE MORE</button>
                <div className={s.imageContainer}>
                        <ImageCard 
                            card = {s.card}
                            imageItem = {imageGirl}
                            title = "How to avoid expensive travel mistakes"
                            text = "Great tips that can help you avoid eight common and expensive travel mistakes"
                            />
                        <ImageCard 
                            card = {s.card}
                            imageItem = {imageNature}
                            title = "Top 5 places to experience supernatural forces"
                            text = "Atlantis and the Kingdom of Asgard may be lost forever, but here are five places that you can still experience legends and supernatural forces"
                            />
                        <ImageCard 
                            card = {s.card}
                            imageItem = {imageFestival}
                            title = "Three wonderfully bizarre Mexican festivals"
                            text = "It is not all skulls and tequila shots when it comes to festivals in Mexico, not when you have donkeys, radishes and candles compete to add fun"
                            />
                </div>
            </div>
        </div>
    );
}

export default ImageBlock;
