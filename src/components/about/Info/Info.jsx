import React from 'react'
import styles from './Info.module.css'
import infoImg from '../../../assets/about/info/image24.png'

export default function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.left}>
        <h2 className={styles.title}>A little information <br />for our valuable guest</h2>
        <p className={styles.desc}>
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>

        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>3</h3>
            <p>Locations</p>
          </div>
          <div className={styles.card}>
            <h3>1995</h3>
            <p>Founded</p>
          </div>
          <div className={styles.card}>
            <h3>65+</h3>
            <p>Staff Members</p>
          </div>
          <div className={styles.card}>
            <h3>100%</h3>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <img src={infoImg} alt='info' />
      </div>
    </section>
  )
}
