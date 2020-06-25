import React from 'react';
import s from './HeaderBlock.module.css';

import mainLogo from '../HeaderBlock/img/uber-logo.png';



const HeaderBlock = ({title, descr}) => {
    const items = ['Country guides', 'City guides', 'Features', 'Food and Drink', 'Flights', 'Shop'];
    const firstItem = <li><img src={mainLogo}/></li>;

    return (
        <div>
            <div className={s.container}>
                <div className={s.nav}>
                    <ul>
                        { firstItem }
                        { items.map( (item, index) => <li key = {index}><a>{item}</a></li> )}
                    </ul>
                </div>
                <div className={s.cover}>
                    <div className={s.wrap}>
                        {title ? <h1 className={s.header}>{title}</h1> : null}
                        <p className={s.descr}>{descr}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBlock;