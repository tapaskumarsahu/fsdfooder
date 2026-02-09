import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import ig1 from '../../assets/footer/image52.png'
import ig2 from '../../assets/footer/image53.png'
import ig3 from '../../assets/footer/image54.png'
import ig4 from '../../assets/footer/image55.png'
import headerLogo from '../../assets/image1.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <div className={styles.titleLink}>
              <img src={headerLogo} alt="Bistro Bliss logo" className={styles.brandLogo} />
              <h3 className={styles.title}>Bistro Bliss</h3>
            </div>
          </div>
          <p className={styles.desc}>
            In the new era of technology we look a in the future with certainty and pride to for our company and.
          </p>

          <div className={styles.socials}>
            <Link className={styles.socialBtn} to="https://twitter.com" target="_blank" rel="noreferrer" aria-label="twitter"><FaXTwitter /></Link>
            <Link className={styles.socialBtn} to="https://facebook.com" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebookF /></Link>
            <Link className={styles.socialBtn} to="https://instagram.com" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></Link>
            <Link className={styles.socialBtn} to="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedinIn /></Link>
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.navColumns}>
            <div className={styles.col}>
              <h4>Pages</h4>
              <ul>
                <li className={styles.items}><Link to="/">Home</Link></li>
                <li className={styles.items}><Link to="/about">About</Link></li>
                <li className={styles.items}><Link to="/menu">Menu</Link></li>
                <li className={styles.items}><Link to="/pricing">Pricing</Link></li>
                <li className={styles.items}><Link to="/blog">Blog</Link></li>
                <li className={styles.items}><Link to="/contact">Contact</Link></li>
                <li className={styles.items}><Link to="/delivery">Delivery</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4>Utility Pages</h4>
              <ul>
                <li className={styles.items}><Link to="/#">Start Here</Link></li>
                <li className={styles.items}><Link to="/#">Style Guide</Link></li>
                <li className={styles.items}><Link to="/#">Password Protected</Link></li>
                <li className={styles.items}><Link to="/#">404 Not Found</Link></li>
                <li className={styles.items}><Link to="/#">Licenses</Link></li>
                <li className={styles.items}><Link to="/#">Changelog</Link></li>
                <li className={styles.items}><Link to="/#">View More</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <h4 className={styles.instagramHeading}>Follow Us On Instagram</h4><br />
          <div className={styles.instagramGrid}>
            <img src={ig1} alt="food1" />
            <img src={ig2} alt="fries" />
            <img src={ig3} alt="food3" />
            <img src={ig4} alt="pancakes" />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <p>Copyright © 2026 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  )
}
