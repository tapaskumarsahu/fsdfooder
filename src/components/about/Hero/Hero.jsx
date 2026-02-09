import React from 'react'
import styles from './Hero.module.css'
import heroImage from '../../../assets/about/hero/image23.png'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
      <div className={styles.overlay}>
        <button className={styles.playBtn}>▶</button><br />
        <h1>Feel the authentic & <br />original taste from us</h1>
      </div>
    </section>
  )
}
