import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import BestSell from '../components/BestSell'
import Expirence from '../components/Expirence'
import Materials from '../components/Materials'
import Footer from '../components/common/Footer'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <BestSell/>
        <Expirence/>
        <Materials/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home