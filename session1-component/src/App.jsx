import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='flex'>
        <Navbar />
        <Content />
      </div>
      <Footer />
    </>
  )
}

export default App
