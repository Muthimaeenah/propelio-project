import React from 'react'
import "./About.css"
import abtimg1 from '../assets/frame1.png'
import abtimg2 from '../assets/frame2.png'
import abtimg3 from '../assets/frame3.png'
import abtlogo1 from '../assets/2.png'
import abtlogo2 from '../assets/3.png'
import abtlogo3 from '../assets/4.png'
import Footer from '../FooterComponent/Footer'
const About = () => {
  return (
    <div>
      <section class="section1">
        <div class="semicircle1"></div>
        <div class="semicircle2"></div>
        <div class="Abt-box">
          <div class="Abt-intro">
            <h2>About Us</h2>
            <p>Propelio is a real estate platform that aims to guide
              individuals in actualizing their home ownership and investment dreams easier and faster. <br />
              This platform aims to mitigate transaction risks and expand access to
              various property ownership for individuals from all walks of life.
            </p>
          </div>
          <div class="Abt-img">
            <div class="frame1">
              <img src={abtimg1} alt="frame1" />
            </div>

            <div class="frame2">
              <img src={abtimg2} alt="frame2" />
            </div>

            <div class="frame3"></div>

            <div class="frame4">
              <img src={abtimg3} alt="frame3" />
            </div>
            <div class="frame5"></div>
          </div>
        </div>
      </section>

      <section class="section2">
        <div class="section2-sub">
          <h2>What we do</h2>
          <p>At Propelio, we empower individuals from all socio-economic backgrounds to achieve their
            homeownership dreams through our inclusive platform that provides the tools and <br />knowledge needed to navigate the real estate market with confidence.
          </p>
        </div>
        <div class="section2-main">
          <div class="box1">
            <div class="img-container">
              <div class="img-container2">
                <img src={abtlogo1} alt="section2-img" />
              </div>
              <div>
                <hr class="img-hr" />
                <div class="hr-circle"></div>
              </div>
            </div>
            <div class="box-writeup">
              <h2> Our Mission</h2>
              <p>Empowering individuals to achieve their home-ownership dreams and build wealth
                through our accessible and innovative real estate solutions.
              </p>
            </div>

          </div>

          <div class="box2">
            <div class="img-container">
              <div class="img-container2">
                <img src={abtlogo2} alt="section2-img" />
              </div>
              <div>
                <hr class="img-hr" />
                <div class="hr-circle"></div>
              </div>
            </div>
            <div class="box-writeup">
              <h2>  Our Vision</h2>
              <p>To revolutionize the Nigerian real estate market
                by making property ownership accessible, inclusive, and empowering for all.
              </p>
            </div>
          </div>

          <div class="box3">
            <div class="img-container">
              <div class="img-container2">
                <img src={abtlogo3} alt="section2-img" />
              </div>
            </div>
            <div class="box-writeup">
              <h2>Our Values</h2>
              <ul>
                <li>Market Inclusivity</li>
                <li>Secured Transactions</li>
                <li>Market Literacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section3">
        <div class="section3-heading">
          <h2>Get in touch with us</h2>
          <p>We value your feedback, help us serve you better.</p>
        </div>
        <div class="form">
          <textarea name="Message" id="Message" class="item" placeholder="Type here"></textarea>
          <button type="submit" class="sendbtn">Send message <i class="bi bi-arrow-right"></i></button>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default About