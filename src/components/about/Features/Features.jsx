import React from 'react'
import styles from './Features.module.css'

export default function Features() {
  const items = [
    { 
      title: 'Multi Cuisine', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="24" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="14" y1="4" x2="14" y2="28" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="18" y1="4" x2="18" y2="28" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="4" y1="12" x2="28" y2="12" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="4" y1="20" x2="28" y2="20" stroke="#AD343E" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      title: 'Easy To Order', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="5" width="22" height="22" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="5" y1="11" x2="27" y2="11" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="21" y1="5" x2="21" y2="27" stroke="#AD343E" strokeWidth="1.5"/>
          <circle cx="11" cy="18" r="1.5" fill="#AD343E"/>
          <circle cx="11" cy="23" r="1.5" fill="#AD343E"/>
        </svg>
      )
    },
    { 
      title: 'Fast Delivery', 
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="13" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="16" y1="8" x2="16" y2="16" stroke="#AD343E" strokeWidth="1.5"/>
          <line x1="16" y1="16" x2="21" y2="21" stroke="#AD343E" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];
  
  return (
    <section className={styles.features}>
      {items.map((item) => (
        <div key={item.title} className={styles.box}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>{item.icon}</span>
          </div>
          <div className={styles.content}>
            <h4>{item.title}</h4>
            <p>In the new era of technology we look in the future with certainty life.</p>
          </div>
        </div>
      ))}
    </section>
  )
}
