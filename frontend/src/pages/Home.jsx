import React from 'react'
import Navbar from '../components/Navbar'
import Book from '../components/Book'
import Play from '../components/Play'
import Partner from '../components/Partner'
import Why from '../components/Why'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Book/>
      <Play/>
      <Why/>
      {/* <Partner/> */}
      <Footer/>
    </div>
  )
}

export default Home
