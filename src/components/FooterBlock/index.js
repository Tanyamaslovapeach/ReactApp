import React from 'react';
import s from './FooterBlock.module.css';


const FooterBlock = () => {

    const countryItems = ['Africa', 'Asia', 'Caribbean', 'Europe', 'Middle East', 'North America', 'Oceania', 'South America'];

    const serviceItems = ['Airport guides', 'Beach Guides', 'City Guides', 'Country Guides', 'Cruise Guides', 'Passport & Visa', 'Public Holidays', 'Ski Resorts'];

    const contributionItems = ['Der Reiseführer', 'Guía Mundial de Viajes', 'Columbus Travel Pro', 'Advertiser', 'Contributors T & C','Conditions for use', 'Conditions for Sales of Goods', 'Privacy Policy', 'Cookie Policy'];
    
    return (
        <div>
            <div className={s.container}>
                <div className={s.footerText}>
                    <div>
                        <h3>About The World Travel Guide</h3>
                        <p>The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back more than 30 years, with the online portal reaching its 20-year anniversary in 2019. Available in English, German and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                    </div>

                    <ul>
                        { countryItems.map( (item, index) => <li key = {index}><a>{item}</a></li> )}
                    </ul>

                    <ul>
                        { serviceItems.map( (item, index) => <li key = {index}><a>{item}</a></li> )}
                    </ul>

                    <ul>
                        { contributionItems.map( (item, index) => <li key = {index}><a>{item}</a></li> )}
                    </ul>

                </div>
                <span>World Travel Guide - Official Destination Guides and Travel Stories</span>
            </div>
        </div>
    );
}

export default FooterBlock;