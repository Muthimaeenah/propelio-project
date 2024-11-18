import React from 'react'
import "./OurServive.css"
import { Link } from 'react-router-dom';
import investicon from '../assets/invest icon 3.png'
import property from '../assets/Property 3.png'
import mockup from '../assets/Mockup 2.png'
import { BsArrowRight } from "react-icons/bs";

const OurServive = () => {
    return (
        <div>
            <section className="section_5" id="section_5">
                <div className="section5_heading">
                    <h2>Our Services</h2>
                    <p>Propelio offers varieties of services tailored just for you.</p>
                </div>
                <div className="section_5_box">
                    <div className="section5_box1">
                        <div className="eclipse1"></div>
                        <div className="section_5A">
                            <div class="pro-coperation">
                                <h2 class="section5-title"> Property Cooperative</h2>
                                <img src={investicon} alt="section5-logo"/>
                            </div>
                            <p>Property cooperative is an investment option on Propelio. It helps you to co-invest with other property owners in the real estate business,
                                at the least possible rate, and earn an ROI at the end of the investment period.
                            </p>
                            <button className="now5"><Link to="/investments">Explore now <BsArrowRight className=''/></Link></button>
                        </div>
                    </div>

                    <div className="section5_box2">
                        <div className="eclipse2"></div>
                        <div className="section_5AB">
                            <img src={property} alt="section5-logo"/>
                            <h2> Property Listings</h2>
                            <p><Link to="/comingsoon">Read more...</Link></p>
                        </div>
                    </div>

                    <div class="section5_box3">
                        <div class="eclipse3"></div>
                        <div class="section_5AB">
                            <img src={mockup} alt="section5-logo" />
                            <h2>Property Mockup</h2>
                            <p><Link to="/comingsoon">Read more...</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurServive