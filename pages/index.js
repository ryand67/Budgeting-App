import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budgeting App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Budgeting App</h1>
      <form className={styles.inputForm}>
        <input type="number" placeholder="Amount" name="amount" className={styles.amountInput} id=""/>
        <input type="text" placeholder="Description" name="description" className={styles.descInput} id=""/>
        <button type="submit" className={styles.addButton}>Add</button>
      </form>
    </div>
  )
}
