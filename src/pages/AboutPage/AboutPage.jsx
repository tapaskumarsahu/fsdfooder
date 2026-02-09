import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/about/Hero/Hero'
import Visit from '../../components/about/Visit/Visit'
import Features from '../../components/about/Features/Features'
import Info from '../../components/about/Info/Info'
import Testimonials from '../../components/about/Testimonials/Testimonials'
import MenuBarExp from '../../components/navbars/MenuBarExp'

export default function AboutPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp/>
      <Visit />
      <Hero />
      <Features />
      <Info />
      <Testimonials />
      <Footer/>
    </>
  )
}
