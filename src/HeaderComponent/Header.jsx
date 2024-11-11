import React, { useState } from 'react'
import "./Header.css"
import propeliologo from '../assets/logo.png'
import {BsChevronDown, BsList} from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    let [isOpen, setIsOpen] = useState(false);

    let toggleMenu = () => {
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
                     {/* Toggle Button  */}
                    <div className="navbar-toggle" onClick={toggleMenu}>
                     <BsList /> 
                    </div>
                    <div className={`nav_menu ${isOpen ? 'active' : " "}`}>
                        <ul className='nav_list'>
                        <li className="dropdown">
                            <Link to="" className="nav_link  dropbtn ">Listings<BsChevronDown className='listingIcon' /></Link>
                            <div className="dropdown-content">
                                <Link to="/Listing">For Sale</Link>
                                <Link to="/Rent&Lease">Rent & lease</Link>
                            </div>
                        </li>

                        <li>
                            <NavLink to="/investments" className={({ isActive }) => isActive ? "active" : "notActive"}>
                              Investments
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "notActive"}> 
                               About Us
                            </NavLink>
                        </li>
                        </ul>

                      <div>
                            <Link to={"/welcomeToPropelio"} className="get">
                          <p>Get Started </p>
                            </Link>
                      </div>
                    </div>
                  

                </nav>
            </header>
        </div>
    )
}

export default Header