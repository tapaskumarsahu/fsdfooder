import React from 'react'
import styles from './Services.module.css'

import img1 from '../../../assets/home/services/image3.png'
import img2 from '../../../assets/home/services/image4.png'
import img3 from '../../../assets/home/services/image5.png'
import img4 from '../../../assets/home/services/image6.png'

const services = [
  { title: 'Caterings', img: img1 },
  { title: 'Birthdays', img: img2 },
  { title: 'Weddings', img: img3 },
  { title: 'Events', img: img4 }
]

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 className={styles.title}>We also offer unique<br />services for your events</h2>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.title} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={s.img} alt={s.title} />
            </div>
            <h3>{s.title}</h3>
            <p>
              In the new era of technology we look in the future
              with certainty for life.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
