import React from 'react';
import styles from './Card.module.css';
import { useState } from 'react';

const Card = ({ call, price, currency, month, second, write, headerColor = '', mainColor = '', isTaller = false }) => {
    
    const [isSelected, setIsSelected] = useState(false);

    const handleIsSelected = () => {
        setIsSelected(!isSelected)
    }
    
    return (
        <div className={`${styles.card} ${isSelected ? styles.card_selected : ''}`}
        style={{ height: isTaller ? '24rem' : '22rem' }}
        onClick={handleIsSelected}>

            <div className={styles.card_header} style={{ backgroundColor: headerColor }}>
                {call}
            </div>
            <div className={styles.card_main} style={{ backgroundColor: mainColor }}>
                <div className={styles.card_main_text_container}>
                    <p className={styles.card_main_text_container_small_text}>{price}</p>
                    <p className={styles.card_main_text_container_large_text}>{currency}</p>
                    <p className={styles.card_main_text_container_small_text}>{month}</p>
                </div>
            </div>
            <div className={styles.card_footer_light}>
                {second}
            </div>
            <div className={styles.card_footer_dark}>
                {write}
            </div>
        </div>
    );
};

export default Card;