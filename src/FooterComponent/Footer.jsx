import React from 'react'
import "./Footer.css"
import propeliologo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { BsInstagram,  BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
    
const Footer = () => {
    return (
        <div>
            <footer>
                <div class="footer1">
                    <img src={propeliologo} alt="logo" class="footer-img" />
                    <ul class="footer-content">
                        <li><Link to='/Listing'>Our products</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/'>Support</Link></li>
                    </ul>
                </div>
                <hr class="footer-hr" />
                <div class="footer2">
                    <p>&copy; 2024 Propelio_ng. All rights reserved</p>
                    <div class="footer-icon">
                        <Link to='https://www.instagram.com/propelio_ng?igsh=bHl2cWhtcHBrczJ2'><BsInstagram className='footer-icon'/></Link>
                        <Link to='https://www.facebook.com/profile.php?id=61564181971030&mibextid=LQQJ4d'><BsFacebook className='footer-icon' /></Link>
                        <Link to='https://x.com/Propelio_NG'><BsTwitter className='footer-icon' /></Link>
                        <Link to=''><BsLinkedin className='footer-icon' /></Link>
                        
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer