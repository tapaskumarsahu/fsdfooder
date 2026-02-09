import React from 'react'
import styles from './Visit.module.css'
import { Link } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.image}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Come and visit us</h3>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon}><IoCallOutline /></span>
              <span>(414) 857 - 0107</span>
            </li>
            <li>
              <span className={styles.icon}><MdMailOutline /></span>
              <span>happytummy@restaurant.com</span>
            </li>
            <li>
              <span className={styles.icon}><HiOutlineLocationMarker /></span>
              <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.text}><br /><br />
        <h2>We provide healthy food for your family.</h2>
        <p>
          Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
        </p><br />
        <p>
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
      </div>
    </section>
  )
}
