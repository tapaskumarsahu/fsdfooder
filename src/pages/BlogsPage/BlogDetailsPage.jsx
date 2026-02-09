import React from 'react'
import ContactNav from '../../components/navbars/ContactNav'
import Footer from '../../components/footer/Footer'
import ArticleSection from '../../components/article/ArticleSection'
import ReadMore from '../../components/article/ReadMore'
import MenuBarExp from '../../components/navbars/MenuBarExp'
import blogImage1 from '../../assets/blogs/details/image46.png'

export default function BlogDetailsPage() {
  return (
    <>
      <ContactNav/>
      <MenuBarExp/>
      <div>
      <ArticleSection
        title="The secret tips & tricks to prepare a perfect burger & pizza for our customers"
        image={blogImage1}
      />
      <ReadMore />
    </div>
      <Footer/>
    </>
  )
}
