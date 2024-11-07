import React from 'react'
import Hero from '../HeroPageComponent/Hero'
import Picture from '../PictureScrollComponent/Picture'
import Achieve from '../AchieveComponent/Achieve'
import ProductSlider from '../FeaturedComponent/ProductSlider'
import OurServive from '../OurSerrviceComponent/OurServive'
import Choose from '../WhyChooseComponent/Choose'
import Footer from '../FooterComponent/Footer'
import Faq from '../FaqComponent/Faq'




const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Picture />
      <Achieve />
      <ProductSlider/>
      <OurServive /> 
      <Choose/>
      <Faq/>
      <Footer /> 
    </div>
  )
}

export default LandingPage