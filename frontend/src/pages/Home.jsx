import React from 'react'
import Navbar from '../components/Navbar'
import Book from '../components/Book'
import Play from '../components/Play'
import Partner from '../components/Partner'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Book/>
      <Play/>
      <Partner/>
    </div>
  )
}

export default Home
