import React from 'react'
import "./Investments.css"
import image1 from '../assets/Mask group.png'
import Investmentprop from './Investmentprop'
import Footer from '../FooterComponent/Footer'


const Investments = () => {
  return (
    <div>
      <section className="intro">
          <h2>Property Cooperative <br/> <span class="green">–Explore investments opportunities.</span></h2>
          <p class="subheading">Property cooperative is an investment option on Propelio. It helps you to co-invest with other property owners in the real estate business, at the least possible rate, and earn an ROI at the end of the investment period.</p>
      </section>

      <section className="listing" >
          <div className="listingproject" >

            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000' units='1,500 units' avail ='available'/>
            
            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000'  soldout ='SOLD OUT'/>
            
            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000'  soldout ='SOLD OUT'/>

            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000' units='1,500 units' avail ='available'/>

            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000' units='1,500 units' avail ='available'/>
          
            <Investmentprop image ={image1} title ="ALMA PENT HOUSE" 
            roi ="15% returns in 12 months"  no ="156 investors"  amount ='#5,000'  soldout ='SOLD OUT'/>
          </div>
      </section>

      <Footer/> 
    </div>
  )
}

export default Investments