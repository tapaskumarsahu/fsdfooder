import React from 'react'
import styles from './App.module.css'
import { SiFoodpanda } from "react-icons/si";
import { SiDeliveroo } from "react-icons/si";
import { SiInstacart } from "react-icons/si";
import { SiDoordash } from "react-icons/si";

export default function App() {
  return (
      <div className={styles.appsSection}>
        <div>
          <h2>You can order <br />through apps</h2>
          <p>Lorem ipsum dolor sit amet consectetur <br />adipiscing elit enim bibendum sed et aliquet <br />aliquet risus tempor semper.</p>
        </div>

        <div className={styles.apps}>
          <div className={styles.appRow1}>
            <div className={styles.appCard}><span className={styles.uber}>Uber</span><span className={styles.eats}>Eats</span></div>
            <div className={`${styles.appCard} ${styles.brandRed}`}>GRUBHUB</div>
            <div className={styles.appCard}>Postmates</div>
          </div>

          <div className={styles.appRow2}>
            <div className={`${styles.appCard} ${styles.brandRed1}`}><SiDoordash />&nbsp;DOORDASH</div>
            <div className={`${styles.appCard} ${styles.brandD70}`}><SiFoodpanda />&nbsp;foodpanda</div>
            <div className={`${styles.appCard} ${styles.brand00cc}`}><SiDeliveroo />&nbsp;deliveroo</div>
          </div>

          <div className={styles.appRow3}>
            <div className={`${styles.appCard} ${styles.brand05c}`}><SiInstacart />&nbsp;instacart</div>
            <div className={`${styles.appCard} ${styles.brandRed}`}>JUST EAT</div>
            <div className={styles.appCard}><span className={styles.didi}>DiDi</span><span className={styles.food}>Food</span></div>
          </div>
        </div>
      </div>
  )
}
