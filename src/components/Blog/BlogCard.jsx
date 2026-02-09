import React from 'react'
import styles from "./Blog.module.css";

export default function BlogCard({ title, date, image, highlight }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />

      <div className={styles.cardContent}>
        <span className={styles.date}>{date}</span>
        <h3 className={highlight ? styles.highlight : ""}>{title}</h3>
      </div>
    </div>
  )
}
