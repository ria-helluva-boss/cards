import React from 'react';
import styles from './Card.module.css';

const Card = ({ call, price, currency, month, second, write, headerColor = '', mainColor = '', isTaller = false }) => {
    return (
        <div className={styles.card}  style={{height: isTaller ? '31.25rem' : 'auto',}}>
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