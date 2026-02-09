import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Contact Us</h1>
        <p>
          We consider all the drivers of change gives you the components <br />you need to change to create a truly happens.
        </p>
      </div>

      {/* Contact Form */}
      <div className={styles.formCard}>
        <form>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <input type="email" placeholder="Enter email address" />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Subject</label>
            <input type="text" placeholder="Write a subject" />
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Write your message"></textarea>
          </div>

          <button className={styles.submitBtn}>Send</button>
        </form>
      </div>

      {/* Footer Info */}
      <div className={styles.infoSection}>
        <div>
          <h4>Call Us:</h4>
          <p className={styles.highlight}>+1-234-567-8900</p>
        </div>

        <div>
          <h4>Hours:</h4>
          <p>Mon–Fri: 11am – 8pm</p>
          <p>Sat, Sun: 9am – 10pm</p>
        </div>

        <div>
          <h4>Our Location:</h4>
          <p>
            123 Bridge Street <br />
            Nowhere Land, LA 12345 <br />
            United States
          </p>
        </div>
      </div>
    </div>
  )
}
