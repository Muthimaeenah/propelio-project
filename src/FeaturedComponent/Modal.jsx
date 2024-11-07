import React from 'react'
import { BsX, BsGeoAlt  } from "react-icons/bs";

const Modal = ({id, onClose}) => {
  return (
    <div id={id || 'Modal'} className='modal'>
        <div>
            <img src="" alt="" />
        </div>
        <div className='content'>
            <span onClick={onClose}><BsX /></span>
            <div className='heading'>
             <h2> 1 Bedroom Apartment</h2>
             <p><BsGeoAlt /> Citadel Vieww 2.0 Abraham Adesanya</p>
             <p>N45,000,000/ N53,000,00</p>
            </div>
            <p className='best'>
                THE BEST DEAL IN THE REAL ESTATE INDUSTRY TODAY!
                MAKE 50% INITIAL DEPOSIT & SPREAD BALANCE TILL JULY 2025.
            </p>
            <div className='with-solar'>
                <h5>Price Breakdown</h5>
                <p>With Solar System: N53 million</p>
                <ul>
                   <li>- Initial Deposit: N26.5 million pay and move in</li>
                   <li>- Monthly Balance Spread: #2,208,333.33</li>
                   <li>-After 12 months, the apartment is yours</li>
                </ul>
               
            </div>
            <div className='without-solar'>
                <h5>Price Breakdown</h5>
                <p>Without Solar System: N45 million</p>
                <ul>
                   <li>- Initial Deposit: N22.5 million pay and move in</li>
                   <li>- Monthly Balance Spread: #1,875,000</li>
                   <li>-After 12 months, the apartment is yours</li>
                </ul>
                <p>Ps. The units are not furnished en-suite</p>
            </div>
            <button>Buy</button>
        </div>
    </div>
  )
}

export default Modal