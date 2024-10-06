import React, { useState } from 'react';
import data from '../Data';
import Card from './Card';
import styles from './Cards.module.css';

const Cards = () => {
    return (
        <div className={styles.cards_container}>
        {data.map((info, index) => (
            <Card key={info.call} {...info}
            headerColor={index === 0 ? '#0b8fc4' : index === 1 ? '#33CC33' : index === 2 ? '#CC3333' : '#6666CC'}
            mainColor={index === 0 ? '#27b8f1' : index === 1 ? '#62ec62' : index === 2 ? '#ee5656' : '#8a8ae8'}
            isTaller={index === 2 ? true : false}
            />
        ))}
        </div>
    );
};

export default Cards;