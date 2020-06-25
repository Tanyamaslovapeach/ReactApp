import React from 'react';
import s from './TextBlock.module.css';


const TextBlock = () => {
    
    return (
        <div>
            <div className={s.textBlockBg}>
                <div className={s.wrap}>
                    <h2 className={s.textTitle}>Editorial Foreword</h2>
                    <p className={s.descr}>"The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. Available in English, German, and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes offbeat travel news, stories, quizzes and guides for adventurous travellers." </p>
                </div>
            </div>
        </div>
    );
}

export default TextBlock;