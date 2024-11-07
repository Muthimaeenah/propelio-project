import React, { useState } from 'react';
import "./ProductSlider.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

// import other things
import { BsGeoAlt } from "react-icons/bs";
import slidervicon from '../assets/Frame 31.png';
import sliderimg1 from '../assets/section4a.png';
import sliderimg2 from '../assets/section4b.png';
import sliderimg3 from '../assets/section4c.png';
import vector from '../assets/Vector.png'
import { BsArrowRight } from "react-icons/bs";
import Modal from './Modal';


//  product data
let products = [
  { id: 1, title: "Beracah Gardens Ibadan", location: "Ido-Eruwa, Ibadan , Oyo state", image: sliderimg1, km:"500 Sq meter"},
  { id: 2, title: "3 Bedroom Terrace Duplex + BQ ", location: "Ilaje, Ajah, Lagos state", image: sliderimg2, km:"500 Sq meter" },
  { id: 3, title: "TWO BEDROOM APARTMENT", location: "Abraham Adesanya, Ogombo Road Ng.", image: sliderimg3,  km:"500 Sq meter" },
  {id: 4, title: "Beracah Gardens Ibadan", location: "Ido-Eruwa, Ibadan , Oyo state", image: sliderimg1, km:"500 Sq meter"},
  { id: 2, title: "3 Bedroom Terrace Duplex + BQ ", location: "Ilaje, Ajah, Lagos state", image: sliderimg2, km:"500 Sq meter" },
  { id: 6, title: "TWO BEDROOM APARTMENT", location: "Abraham Adesanya, Ogombo Road Ng.", image: sliderimg3,  km:"500 Sq meter" },
];


const ProductSlider = () => {

  let {showModal, setShowModal} = useState(false);

  function handleToggle(){
    setShowModal(!showModal);
  }

  function onClose(){
    setShowModal(false)
  }
  return (
    <section className='section_4'>
      <div className="section4_heading">
        <h2>Featured Properties</h2>
        <p>Browse from our vast array of properties, and select your most preferred choice.</p>
      </div>

      <Swiper
        className='productBox'
        slidesPerView={3}        // Show 3 slides per view
        spaceBetween={20}        // Space between slides
        loop={true}              // Enable looping
        // autoplay={{ delay: 3000 }}  // Autoplay with delay
        // modules={[Autoplay]}  // Import Swiper modules
       breakpoints={{
          420: {slidesPerView: 1, spaceBetween: 5}, //Mobile
          640: { slidesPerView: 2, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 3, spaceBetween: 15 }, // Tablet
          1024: { slidesPerView: 3.5, spaceBetween: 30 } // Desktop
        }}
      >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="Project">
            <div className="imgbox">
             <img src={product.image} alt={product.title} />
            </div>
            <div  className="project_subheading">
             <div><img src={slidervicon} alt="logo" className="video-logo"/></div>
             <h4 className="product-name">{product.title}</h4>
             <p className="location"> <BsGeoAlt />{product.location}</p>
             <div className="details">
                <img src={vector} alt="vector" class="vector" />
                <p>{product.km}</p>
                <Link onClick={handleToggle}>Details</Link>
                {showModal && <Modal onClose ={onClose}  body = {<div>customised content</div>} />}
                
              </div>
            </div>
            
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      <div className='seebtn'>
        <button className="see"><Link to="/Listing">See all properties<BsArrowRight className='seeIcon'/></Link></button>
      </div>
    </section>
   
  );
};

export default ProductSlider;
