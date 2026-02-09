import React from 'react'
import styles from './Blog.module.css'
import { Link } from 'react-router-dom'
import img5 from '../../../assets/home/blog/image17.png'
import img2 from '../../../assets/home/blog/image16.png'
import img3 from '../../../assets/home/blog/image15.png'
import img4 from '../../../assets/home/blog/image14.png'
import img1 from '../../../assets/home/blog/image13.png'

export default function Blog() {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <h2>Our Blog & Articles</h2>
        <Link to="/blog/:"><button>Read All Articles</button></Link>
      </div>

      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.big}`}>
          <img src={img1} alt="featured article" />
          <div className={styles.cardContent}>
            <span>January 3, 2023</span>
            <h3>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur of a adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.
            </p>
          </div>
        </article>
        <div className={styles.rightGrid}>
          <article className={styles.card}>
            <img src={img4} alt="article 1" />
            <div className={styles.cardContent}>
              <span>January 3, 2023</span>
              <h3>How to prepare the perfect french fries in an air fryer</h3>
            </div>
          </article>

          <article className={styles.card}>
            <img src={img3} alt="article 2" />
            <div className={styles.cardContent}>
              <span>January 3, 2023</span>
              <h3>How to prepare delicious chicken tenders</h3>
            </div>
          </article>

          <article className={styles.card}>
            <img src={img2} alt="article 3" />
            <div className={styles.cardContent}>
              <span>January 3, 2023</span>
              <h3>7 delicious cheesecake recipes you can prepare</h3>
            </div>
          </article>

          <article className={styles.card}>
            <img src={img5} alt="article 4" />
            <div className={styles.cardContent}>
              <span>January 3, 2023</span>
              <h3>5 great pizza restaurants you should visit this city</h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
