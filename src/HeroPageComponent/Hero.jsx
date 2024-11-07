import React from 'react'
import "./Hero.css"
import { BsSearch } from "react-icons/bs";

const Hero = () => {
    return (
        <div>
            <section className="section_1" id="section_1">
                <div className="hero_section">
                    <div className="hero">
                        <h1 className="hero_section_title">Fulfilling your <span class="orange">ownership</span> and
                            <span className="orange"> investment</span> dreams.
                        </h1>
                        <p className="empower">Empowering individuals to achieve their homeownership dreams and
                            build wealth through accessible and innovative real estate solutions.
                        </p>
                        <div className="hero_subheading">
                            <BsSearch className='searchIcon'/>
                            <input type="search" name="listing" id="listing"
                                placeholder="Enter your email here... " />
                            <button type="button" className="search">Join our waitlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero