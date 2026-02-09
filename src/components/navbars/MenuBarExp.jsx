import React, { useState, useEffect } from 'react'
import styles from './MenuBarExp.module.css'
import { NavLink, Link } from 'react-router-dom'
import logoImg from '../../assets/image1.png'

export default function MenuBarExp() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <NavLink to="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>
              <img src={logoImg} alt="Bistro Bliss logo" className={styles.logoImg} />
            </span>
            <span className={styles.logoText}>Bistro Bliss</span>
          </div>
        </NavLink>

        {/* Nav Links */}
        <button
          type="button"
          className={styles.menuToggle}
          aria-label="Toggle navigation"
          aria-controls="primary-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={styles.hamburger} />
        </button>

        <ul id="primary-navigation" className={`${styles.navLinks} ${open ? styles.open : styles.closed}`}>
          <li>
            <NavLink to="/" end className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>About</NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>Pages</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>Contact</NavLink>
          </li>
        </ul>

        {/* CTA Button */}
        <Link to="/book"><button type="button" className={styles.bookBtn}>Book A Table</button></Link>
      </nav>
    </header>
  )
}
