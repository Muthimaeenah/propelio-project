import React from 'react'
import './Investments.css'

const Investmentprop = ({image, title, roi, no, amount, units, avail, soldout }) => {
  return (
    
    <div className="investmentbox">
      <div className="investment-img">
        <img src={image} alt="image"/>
      </div>
      <div className="investment_subheading">
         <div className="investment-details">
         <div>
            <h4>{title}</h4>
            <p className="investment_location">{roi}</p>
         </div>
         <p>{no}</p>
        </div>
          <div className="investment-details">
              <h4>{amount} <span className="unit">per unit</span></h4>
              <p>{units} <span className="sold">{soldout}</span> <br/ >{avail} </p>
          </div>
      </div>
    </div>
  )
}

export default Investmentprop