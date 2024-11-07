import React from 'react'
import './Investments.css'

const Investmentprop = ({image, title, roi, no, amount, units, avail, soldout }) => {
  return (
    
    <div className="listingbox">
      <div className="list-img">
        <img src={image} alt="image" width="200px"/>
      </div>
      <div className="listing_subheading">
         <div className="list-details">
         <div>
                 <h4>{title}</h4>
                 <p className="location">{roi}</p>
         </div>
         <p>{no}</p>
        </div>
          <div className="list-details">
              <h4>{amount} <span className="unit">per unit</span></h4>
              <p>{units} <span className="sold">{soldout}</span> <br/ >{avail} </p>
          </div>
      </div>
    </div>
  )
}

export default Investmentprop