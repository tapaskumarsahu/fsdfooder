import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import BookTable from '../../components/BookTable/BookTable';
import MenuBarExp from '../../components/navbars/MenuBarExp';

export default function BookPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp />
      <BookTable />
      <Footer/>
    </>
  )
}
