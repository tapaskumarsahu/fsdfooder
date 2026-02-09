import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import Blog from '../../components/Blog/Blog'
import MenuBarExp from '../../components/navbars/MenuBarExp'

export default function BlogPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp />
      <Blog/>
      <Footer/>
    </>
  )
}
