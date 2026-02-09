import React from 'react'
import logo from '../../assets/logo.png'
import styles from './MenuBar.module.css'
import { Link } from 'react-router-dom'
import CustomButton from '../buttons/CustomButton'
export default function MenuBar({ title,userlogo }) {
  return (
    <div className={styles.navbar}>
       <div className={styles.logo}>
         <img src={userlogo||logo} alt="logo" className={styles.logoimg} />
         <h1 className={styles.title}>{title||"Your Company Name"}</h1>
       </div>
       <ul className={styles.items}>
        <li className={styles.item}><Link to={"/"}>Home</Link></li>
        <li className={styles.item}><Link to={"/about"}>About</Link></li>
        <li className={styles.item}><Link to={"/menu"}>Menu</Link></li>
        <li className={styles.item}><Link to={"/blog"}>Blogs</Link></li>
        <li className={styles.item}><Link to={"/contact"}>Contact</Link></li>
       </ul>
       <CustomButton onClick={() => window.location.href = '/book'} btnTxt='Book A Table'/>
    </div>
  )
}
