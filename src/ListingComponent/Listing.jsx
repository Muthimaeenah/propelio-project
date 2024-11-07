import React from 'react'
import './Listing.css'
import { BsSearch } from "react-icons/bs";
import Footer from '../FooterComponent/Footer';
import ListingProp from './ListingProp';
import listingimg1 from '../assets/image 1.png'
import listingimg2 from '../assets/Group 14.png'
import listingimg3 from '../assets/Group 13.png'
import listingimg4 from '../assets/image 162.png'
import listingimg5 from '../assets/image 178.png'
import listingvlogo from '../assets/frame 31.png'
import listingvectorlogo from '../assets/Vector.png'
import listingvuesaxlogo from '../assets/Vuesax.png'

const Listing = () => {
  return (
    <div>
      <section className="intro">
        <h2>Properties for sale</h2>
        <div className="intro-box">
          <input type="search" name="listing" id="listing"
           placeholder="Search by location here..." />
          <BsSearch className='searchbtn' />
        </div>  
      </section>
      <section className="listing">
        <h2>Available Properties</h2>
        <div className='listing-project'>

          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={listingvuesaxlogo} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={listingimg2} title ="Tiwa Garden Phase 2 Estate"
           location =" Lekki Epe, Lagos State" logo={listingvectorlogo} desc ="500 Sq meter" />  

          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="Citadel Views 2.0 Abraham Adesanya"
           location =" Lekki, Lagos" logo={listingvuesaxlogo} desc ="1 Bedroom Apartment" />  

          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={listingvuesaxlogo} desc ="2 Bedroom Terrace Duplex+ BQ" />  
          
          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={listingvuesaxlogo} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={listingvuesaxlogo} desc ="2 Bedroom Terrace Duplex+ BQ" />  

          <ListingProp image ={listingimg3} vlogo ={listingvlogo} title ="Beracah Gardens Ibadan"
           location =" Ido-Eruwa, Ibadan , Oyo state" logo={listingvectorlogo} desc ="500 Sq meter" />  

          <ListingProp image ={listingimg4} title ="3 Bedroom Terrace Duplex + BQ"
             location =" Ilaje, Ajah, Lagos state" />  

          <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="Victoria Crest homes"
           location =" Abraham Adesanya, Ogombo Road Ng." logo={listingvuesaxlogo} desc ="Two Bedroom Apartment" />  

          <ListingProp image ={listingimg5} vlogo ={listingvlogo} title ="Zylus Court Phase 2"
           location =" Bogije, Ibeju Lekki, Lagos state." logo={listingvectorlogo} desc ="500 Sq meter" />  
           
           <ListingProp image ={listingimg4} vlogo ={listingvlogo} title ="4 Bedroom Terrace Duplex @ Waterview "
           location =" Orchid Road, Lekki, Lagos" logo={listingvectorlogo} desc ="500 Sq meter" />  
         
         <ListingProp image ={listingimg1} vlogo ={listingvlogo} title ="The Ambiance 3 Smart Homes"
           location =" Abraham Adesanya, Ajiwe, Lagos." logo={listingvuesaxlogo} desc ="2 Bedroom Terrace Duplex+ BQ" />  
      
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Listing