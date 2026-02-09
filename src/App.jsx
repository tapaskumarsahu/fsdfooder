import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Menu from './pages/MenuPage/MenuPage';
import Book from './pages/BookPage/BookPage';
import Blog from './pages/BlogsPage/BlogPage';
import BlogDetails from './pages/BlogsPage/BlogDetailsPage';
import About from './pages/AboutPage/AboutPage';
import Contact from './pages/ContactPage/ContactPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/book' element={<Book/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}
