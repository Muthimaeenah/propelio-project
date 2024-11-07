import React from 'react'
import "./Achieve.css"
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import achieveimage from '../assets/section 3img.png';

const Achieve = () => {
    return (
        
        <section class="section_3" id="section_3">
            <div class="section_3A">
                <h2> Achieve your property dreams with <span class="green">Propelio.</span></h2>
                <p>Propelio empowers individuals from diverse socioeconomic backgrounds, including first-time buyers, young professionals,
                    and families, to achieve their property ownership dreams with confidence and ease.
                </p>
                <button><Link to="/Listing">Explore more<BsArrowRight className='exploreIcon'/></Link></button>
            </div>
            <div class="section_3B">
                <hr />
                <img src={achieveimage} alt="section_3_img" />
            </div>
        </section>
    )
}

export default Achieve