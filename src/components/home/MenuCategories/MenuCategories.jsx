import React from 'react'
import styles from './MenuCategories.module.css'
import { Link } from 'react-router-dom'
import { FaCoffee, FaUtensils, FaGlassMartiniAlt, FaBirthdayCake } from 'react-icons/fa'

const categories = [
  { key: 'breakfast', title: 'Breakfast', icon: FaCoffee },
  { key: 'main', title: 'Main Dishes', icon: FaUtensils },
  { key: 'drinks', title: 'Drinks', icon: FaGlassMartiniAlt },
  { key: 'desserts', title: 'Desserts', icon: FaBirthdayCake },
]

export default function MenuCategories() {
  return (
    <section className={styles.menu}>
      <h2 className={styles.title}>Browse Our Menu</h2>

      <div className={styles.grid}>
        {categories.map(({key, title, icon: Icon}) => (
          <div key={key} className={styles.card}>
            <div className={styles.iconWrap}><Icon className={styles.icon} /></div>
            <h3>{title}</h3>
            <p>
              In the new era of technology we look in the future with certainty and pride for our life.
            </p>
            <span><Link className={styles.cta} to='/menu'>Explore Menu</Link></span>
          </div>
        ))}
      </div>
    </section>
  )
}
