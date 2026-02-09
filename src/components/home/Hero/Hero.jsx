import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Best food for <br /> your taste</h1>
        <p>
          Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.
        </p>

        <div className={styles.actions}>
          <Link to="/book"><button className={styles.primaryBtn}>Book A Table</button></Link>
          <Link to="/menu"><button className={styles.secondaryBtn}>Explore Menu</button></Link>
        </div>
      </div>
    </section>
  )
}
