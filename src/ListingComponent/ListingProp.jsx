import React from 'react'
import './Listing.css'
import { BsGeoAlt } from "react-icons/bs";

const ListingProp = ({image, vlogo, title, location, logo, desc }) => {

  return (
      <div className="listing_box">
            <div className="list-img">
                <img src={image} alt="image" />
            </div>
                <div className="listing_subheading">
                    <img src={vlogo} alt="video-logo" className='vlogo'/>
                    <h4>{title} </h4>
                    <p className="location"> <BsGeoAlt /> {location}</p>
                    <div className="list-details">
                        <p><img src={logo} alt="" height='17' />{desc}</p>
                        <a href="#">Details</a>
                    </div>
                </div>
       </div> 
    )
}

export default ListingProp