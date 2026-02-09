import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/home/Hero/Hero'
import MenuCategories from '../../components/home/MenuCategories/MenuCategories'
import About from '../../components/home/About/About'
import Services from '../../components/home/Services/Services'
import Delivery from '../../components/home/Delivery/Delivery'
import Testimonials from '../../components/home/Testimonials/Testimonials'
import Blog from '../../components/home/Blog/Blog'
import MenuBarExp from '../../components/navbars/MenuBarExp'


export default function HomePage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp/>
      <Hero/>
      <MenuCategories />
      <About />
      <Services />
      <Delivery />
      <Testimonials />
      <Blog />
      <Footer/>
    </>
  )
}
