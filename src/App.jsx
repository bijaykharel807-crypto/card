import React from 'react'
import Navbar from './comp/Navbar'
import Hero from './comp/Hero'


import Footer from './comp/Footer'
import ProductCard from './comp/ProductCard'
import TrendingSection from './comp/TradingSection'
import Item from './comp/Item'
import Animation from './comp/Animation.Jsx'


const App = () => {
  return (
    <>
      <Navbar/>
        <Hero/>
        <Item/>
        <ProductCard/>
        <Animation/>
        <TrendingSection/>
        
        <Footer/>
    </>
  )
}

export default App
