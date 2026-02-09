import React from 'react'
import styles from './Delivery.module.css'
import img1 from '../../../assets/home/delivery/image7.png'
import img2 from '../../../assets/home/delivery/image8.png'
import img3 from '../../../assets/home/delivery/image9.png'
import { MdAccessTime } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Delivery() {
  return (
    <section className={styles.delivery}>
      <div className={styles.images}>
        <div style={{ backgroundImage: `url(${img1})` }}></div>
        <div style={{ backgroundImage: `url(${img2})` }}></div>
        <div style={{ backgroundImage: `url(${img3})` }}></div>
      </div>

      <div className={styles.content}>
        <h2>Fastest Food Delivery in City</h2>
        <p>
          Our visual designer lets you quickly and drag a down your way to
          customapps for both keep desktop.
        </p><br />
        <ul>
          <li>
            <span className={styles.icon} aria-hidden="true">
              <span className={styles.glyph}><MdAccessTime /></span>
            </span>
            <span>Delivery within 30 minutes</span>
          </li>

          <li>
            <span className={styles.icon} aria-hidden="true">
              <span className={styles.glyph}><BiSolidOffer /></span>
            </span>
            <span>Best Offer & Prices</span>
          </li>

          <li>
            <span className={styles.icon} aria-hidden="true">
              <span className={styles.glyph}><MdOutlineShoppingCart /></span>
            </span>
            <span>Online Services Available</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
  