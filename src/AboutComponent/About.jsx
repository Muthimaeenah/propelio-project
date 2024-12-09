import React, { useState } from 'react';
import "./About.css";
import abtimg1 from "../assets/frame1.png";
import abtimg2 from "../assets/frame2.png";
import abtimg3 from "../assets/frame3.png";
import abtlogo1 from "../assets/2.png";
import abtlogo2 from "../assets/3.png";
import abtlogo3 from "../assets/4.png";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../FooterComponent/Footer";
import { submitContactForm } from '../api'; // Adjust the import path as necessary

const About = () => {
  const [formData, setFormData] = useState({
    id: '', // You can generate or manage this ID as needed
    full_name: '',
    email: '',
    message: '',
    submitted_date_and_time: new Date().toISOString(),
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData);
      console.log('Form submitted successfully:', response);
      setSuccessMessage('Your message has been submitted successfully!'); // Set success message
      // Optionally reset the form
      setFormData({
        id: '',
        full_name: '',
        email: '',
        message: '',
        submitted_date_and_time: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('There was an error submitting your message. Please try again.'); // Set error message
    }
  };

  return (
    <div>
      <section className="section1">
        <div className="semicircle1"></div>
        <div className="semicircle2"></div>
        <div className="Abt-box">
          <div className="Abt-intro">
            <h2>About Us</h2>
            <p>
              Propelio is a real estate platform that aims to guide individuals
              in actualizing their home ownership and investment dreams easier
              and faster. <br />
              This platform aims to mitigate transaction risks and expand access
              to various property ownership for individuals from all walks of
              life.
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
          <p>
            At Propelio, we empower individuals from all socio-economic
            backgrounds to achieve their homeownership dreams through our
            inclusive platform that provides the tools and <br />
            knowledge needed to navigate the real estate market with confidence.
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
              <p>
                Empowering individuals to achieve their home-ownership dreams
                and build wealth through our accessible and innovative real
                estate solutions.
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
              <h2> Our Vision</h2>
              <p>
                To revolutionize the Nigerian real estate market by making
                property ownership accessible, inclusive, and empowering for
                all.
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
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <input
              type="text"
              name="full_name" // Changed from "name" to "full_name" to match the API
              className="name"
              placeholder="John Doe"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="email"
              placeholder="johndoe@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message" // Changed from "Message" to "message" to match the API
            id="Message"
            className="item"
            placeholder="Type here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="sendbtn">
            Send message <BsArrowRight />
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
      </section>
      <Footer />
    </div>
  );
};

export default About;
