import React from 'react'
import HeroSection from '../_components/hero'
import ServicesPreview from '../_components/services'
import CustomerServiceSection from '../_components/customerServicesSection'

const Home = () => {
  return (
    <>   
        <HeroSection/>
        <ServicesPreview/>
        <CustomerServiceSection/>
    </>
  )
}

export default Home