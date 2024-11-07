import React from 'react'
import "./Comingsoon.css"
import Footer from '../FooterComponent/Footer'

const ComingSoon = () => {
  return (
    <div>
        <section class="section1">
      <div class="semicircle1"></div>
      <div class="semicircle2"></div>
      <div class="section1-writeup">
        <div class="section1-intro">
            <h2>Coming Soon...</h2>
            <p>Sorry, this feature is still in the works. We are trying our possible best <br/>
               to make it available as soon as possible. Kindly join our waitlist to be the first to know when it goes live.
            </p>
        </div>

        <div className="herosubheading">
            <input type="search" name="listing" id="listing"
             placeholder="Enter your email here... "/>
            <button type="button" className="waitlist">Join our waitlist</button>
        </div>
     </div>
        </section>
        <Footer/>
    </div>
   
  )
}

export default ComingSoon