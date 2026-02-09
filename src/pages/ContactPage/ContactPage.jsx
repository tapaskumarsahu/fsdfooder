import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import MenuBarExp from '../../components/navbars/MenuBarExp'
import Contact from '../../components/Contact/Contact'

export default function ContactPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp />
      <Contact />
      <Footer/>
    </>
  )
}
