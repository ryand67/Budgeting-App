import React from 'react';
import styles from './BudgetItem.module.css';
import API from '../../util/API';

export default function BudgetItem({ amount, desc, income, id, setTransactions, setTotal }) {

    const handleDelete = () => {
        API.deleteTransaction(id)
            .then(() => API.getSetAllTransactions(setTransactions, setTotal))
    }

    return (
        <div className={`${styles.wrapper} ${income ? styles.green : styles.red}`}>
            <i className={`fas fa-minus-circle ${styles.icon}`} onClick={handleDelete}/>
            <p className={styles.text}>${amount}</p>
            <p className={styles.text}>{desc}</p>
        </div>
    )
}
