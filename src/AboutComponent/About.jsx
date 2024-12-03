import React from 'react'
import "./About.css"
import abtimg1 from '../assets/frame1.png'
import abtimg2 from '../assets/frame2.png'
import abtimg3 from '../assets/frame3.png'
import abtlogo1 from '../assets/2.png'
import abtlogo2 from '../assets/3.png'
import abtlogo3 from '../assets/4.png'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../FooterComponent/Footer'

const About = () => {
  return (
    <div>
      <section className="section1">
        <div className="semicircle1"></div>
        <div className="semicircle2"></div>
        <div className="Abt-box">
          <div className="Abt-intro">
            <h2>About Us</h2>
            <p>Propelio is a real estate platform that aims to guide
              individuals in actualizing their home ownership and investment dreams easier and faster. <br />
              This platform aims to mitigate transaction risks and expand access to
              various property ownership for individuals from all walks of life.
            </p>
          </div>
          <div className="Abt-img">
            <div className="frame1">
              <img src={abtimg1} alt="frame1" />
            </div>

            <div className="frame2">
              <img src={abtimg2} alt="frame2" />
            </div>

            <div className="frame3"></div>

            <div className="frame4">
              <img src={abtimg3} alt="frame3" />
            </div>
            <div className="frame5"></div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section2-sub">
          <h2>What we do</h2>
          <p>At Propelio, we empower individuals from all socio-economic backgrounds to achieve their
            homeownership dreams through our inclusive platform that provides the tools and knowledge needed to navigate the real estate market with confidence.
          </p>
        </div>
        <div className="section2-main">
          <div className="box1">
            <div className="img-container">
              <div className="img-container2">
                <img src={abtlogo1} alt="section2-img" />
              </div>
              <div>
                <hr className="img-hr" />
                <div className="hr-circle"></div>
              </div>
            </div>
            <div className="box-writeup">
              <h2> Our Mission</h2>
              <p>Empowering individuals to achieve their home-ownership dreams and build wealth
                through our accessible and innovative real estate solutions.
              </p>
            </div>

          </div>

          <div className="box2">
            <div className="img-container">
              <div className="img-container2">
                <img src={abtlogo2} alt="section2-img" />
              </div>
              <div>
                <hr className="img-hr" />
                <div className="hr-circle"></div>
              </div>
            </div>
            <div className="box-writeup">
              <h2>  Our Vision</h2>
              <p>To revolutionize the Nigerian real estate market
                by making property ownership accessible, inclusive, and empowering for all.
              </p>
            </div>
          </div>

          <div className="box3">
            <div className="img-container">
              <div className="img-container2">
                <img src={abtlogo3} alt="section2-img" />
              </div>
            </div>
            <div className="box-writeup">
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

      <section className="section3">
        <div className="section3-heading">
          <h2>Get in touch with us</h2>
          <p>We value your feedback, help us serve you better.</p>
        </div>
        <div className="form">
          <textarea name="Message" id="Message" className="item" placeholder="Type here"></textarea>
          <button type="submit" className="sendbtn">Send message <BsArrowRight /></button>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default About