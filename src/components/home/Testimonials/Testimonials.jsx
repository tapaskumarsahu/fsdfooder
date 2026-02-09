import React from 'react'
import styles from './Testimonials.module.css'
import img1 from '../../../assets/home/testimonials/image10.png'
import img2 from '../../../assets/home/testimonials/image11.png'
import img3 from '../../../assets/home/testimonials/image12.png'

const items = [
  {
    title: '“The best restaurant”',
    text:
      'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
    avatar: img1,
    name: 'Sophie Robson',
    location: 'Los Angeles, CA',
  },
  {
    title: '“Simply delicious”',
    text:
      'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
    avatar: img2,
    name: 'Matt Cannon',
    location: 'San Diego, CA',
  },
  {
    title: '“One of a kind restaurant”',
    text:
      'The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
    avatar: img3,
    name: 'Andy Smith',
    location: 'San Francisco, CA',
  },
]

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Customers Say</h2>

      <div className={styles.grid}>
        {items.map((it, idx) => (
          <div className={styles.card} key={idx}>
            <h4>{it.title}</h4>
            <p className={styles.copy}>{it.text}</p>

            <div className={styles.divider} />

            <div className={styles.meta}>
              <img src={it.avatar} alt={it.name} className={styles.avatar} />
              <div className={styles.person}>
                <div className={styles.name}>{it.name}</div>
                <div className={styles.location}>{it.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
