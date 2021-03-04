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
    API.getSetAllTransactions(setTransactions, setTotalBudget);
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
    const entry = new Transaction(desc, parseInt(amount), income);
    API.insertTransaction(entry).then(() => {
      API.getSetAllTransactions(setTransactions, setTotalBudget);
    })
    amountInput.value = 0;
    descInput.value = '';
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeting App</title>
        <link rel="icon" href="https://www.pinclipart.com/picdir/big/18-185386_finance-clipart-accounting-journal-valuation-icon-png-download.png" />
      </Head>

      <h1 className={styles.title}>Budgeting App</h1>
      <h1 className={styles.title}>${totalBudget}</h1>

      <form className={styles.inputForm} onSubmit={(e) => handleFormSubmit(e)}>
        <input id='amountInput' required type="number" placeholder="Amount" name="amount" className={styles.amountInput} onChange={(e) => handleAmountChange(e)} />
        <input id='descInput' required type="text" placeholder="Description" name="description" className={styles.descInput} onChange={(e) => handleDescChange(e)} />
        <button type="submit" className={styles.addButton}>Add</button>
      </form>

      <div className={styles.incomeExpenseColumns}>
        <div className={styles.incomeColumn}>
          <h1 className={`${styles.columnTitle} ${styles.green}`}>Income</h1>
          {transactions.filter(item => item.income).map((item, i) => {
            return <BudgetItemCard key={i} id={item._id} amount={item.amount} desc={item.description} income={true} />
          })}
        </div>

        <div className={styles.expenseColumn}>
          <h1 className={`${styles.columnTitle} ${styles.red}`}>Expenses</h1>
          {transactions.filter(item => !item.income).map((item, i) => {
            return <BudgetItemCard key={i} id={item._id} amount={item.amount} desc={item.description} income={false} />
          })}
        </div>
      </div>
    </div>
  )
}