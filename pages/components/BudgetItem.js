import React from 'react';
import { skipPartiallyEmittedExpressions } from 'typescript';
import styles from './BudgetItem.module.css';

export default function BudgetItem({ amount, desc, income }) {
    return (
        <div className={`${styles.wrapper} ${income ? styles.green : styles.red}`}>
            <p className={styles.text}>${amount}</p>
            <p className={styles.text}>{desc}</p>
        </div>
    )
}
