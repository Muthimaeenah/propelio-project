import React, { useState } from 'react'
import "./Header.css"
import propeliologo from '../assets/logo.png'
import {BsChevronDown, BsList, BsXLg} from "react-icons/bs";
import { Link } from 'react-router-dom';


const Header = () => {
    let [isOpen, setIsOpen] = useState(false);

    let toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <header id="header">
                <nav className="nav_content">
                    <div className="nav_logo">
                        <Link to="/">
                         <img src={propeliologo} alt="propelio" />
                        </Link>
                    </div>
                    
                    <div className="nav_menu" id="nav_menu">
                        <ul className={`nav_list ${isOpen ? 'active' : " "}`}>
                            <li className="dropdown">
                                <Link to= "" className="nav_link  dropbtn ">Listings<BsChevronDown className='listingIcon'/></Link>
                                <div className="dropdown-content">
                                    <Link to= "/Listing">For Sale</Link>
                                    <Link to= "/Rent&Lease">Rent & lease</Link>
                                </div>
                            </li>

                            <li>
                                <Link to= "/investments" className="nav_link ">Investments</Link>
                            </li>

                            <li>
                                <Link to="/about" className="nav_link">About Us</Link>
                            </li>

                            <button className="get">
                                <Link to="">Get Started </Link>
                            </button>
                        </ul>
                    </div>
                    {/* Toggle Button  */}
                    <div className="menuIcon" id="nav_listIcon" onClick={toggleNavbar}>
                        <i className={ isOpen ? <BsList /> : <BsXLg /> }></i>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Header