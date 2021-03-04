import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import BudgetItemCard from './components/BudgetItem';
import axios from 'axios';
import Transaction from '../util/models/Transaction';
import API from '../util/API';

export default function Home() {

  const [totalBudget, setTotalBudget] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    API.getSetAllTransactions(setTransactions);
  }, [])

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  }

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const income = amount > 0;
    const entry = new Transaction(desc, amount, income);
    console.log(entry);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Budgeting App</h1>
      <h1 className={styles.title}>${totalBudget}</h1>

      <form className={styles.inputForm} onSubmit={(e) => handleFormSubmit(e)}>
        <input required type="number" placeholder="Amount" name="amount" className={styles.amountInput} onChange={(e) => handleAmountChange(e)} />
        <input required type="text" placeholder="Description" name="description" className={styles.descInput} onChange={(e) => handleDescChange(e)} />
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