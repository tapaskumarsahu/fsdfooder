// import React, { useEffect, useState } from "react";
import styles from "./ContactNav.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function ContactNav() {
  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 20)
  //   onScroll()
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [])

  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FiPhone className={styles.icon} />
            <span className={styles.contactText}>(414) 857 - 0107</span>
          </div>
          <div className={styles.contactItem}>
            <LuMail className={styles.icon} />
            <span className={styles.contactText}>yummy@bistrobliss</span>
          </div>
        </div>
      </div>

      <ul className={styles.social}>
        <li>
          <Link className={styles.socialBtn} to="https://twitter.com" target="_blank" rel="noreferrer" aria-label="twitter"><FaXTwitter /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="https://facebook.com" target="_blank" rel="noreferrer" aria-label="facebook"><FaFacebookF /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="https://instagram.com" target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram /></Link>
        </li>
        <li>
          <Link className={styles.socialBtn} to="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="linkedin"><FaLinkedinIn /></Link>
        </li>
      </ul>
    </div>
  );
}
