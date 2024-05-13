import React from 'react'
import Navbar from '../components/Navbar'
import Book from '../components/Book'
import Play from '../components/Play'
import Why from '../components/Why'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Book/>
      <Play/>
      <Why/>
      <Footer/>
    </div>
  )
}

export default Home
