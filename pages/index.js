import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import BudgetItemCard from './components/BudgetItem';

export default function Home() {

  const [totalBudget, setTotalBudget] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Budgeting App</h1>
      <h1 className={styles.title}>${totalBudget}</h1>
      <form className={styles.inputForm}>
        <input type="number" placeholder="Amount" name="amount" className={styles.amountInput} id=""/>
        <input type="text" placeholder="Description" name="description" className={styles.descInput} id=""/>
        <button type="submit" className={styles.addButton}>Add</button>
      </form>

      <div className={styles.incomeExpenseColumns}>
        <div className={styles.incomeColumn}>
          <h1 className={`${styles.columnTitle} ${styles.green}`}>Income</h1>
          <BudgetItemCard amount={10} desc={'asdfa'} income={true}/>
        </div>

        <div className={styles.expenseColumn}>
          <h1 className={`${styles.columnTitle} ${styles.red}`}>Expenses</h1>
          <BudgetItemCard amount={10} desc={'asdfa'} income={false}/>
        </div>
      </div>
    </div>
  )
}
