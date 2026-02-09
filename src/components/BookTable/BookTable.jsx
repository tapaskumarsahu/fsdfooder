import React from 'react'
import styles from './BookTable.module.css'
import mapImg from '../../assets/book/image33.png'

export default function BookTable() {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1 className={styles.title}>Book A Table</h1>
        <p className={styles.subtitle}>
          We consider all the drivers of change gives you the components <br />you need to change to create a truly happens.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Date</label>
                <input type="date" defaultValue="2021-04-01"/>
              </div>
              <div className={styles.field}>
                <label>Time</label>
                <input type="time" defaultValue="18:30" />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles.field}>
                <label>Phone</label>
                <input type="tel" placeholder="x-xxx-xxx-xxxx" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Total Person</label>
              <select>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
              </select>
            </div>

            <button className={styles.button}>Book A Table</button>
          </form>
        </div>
      </div>

      <img src={mapImg} alt="map" className={styles.mapImage} />
    </div>
  )
}
