import React, {useState, useEffect} from 'react'
import "./Picture.css"
import carouiselimg1 from '../assets/section2 img 1.png';
import carouselimg2 from '../assets/section2 img2.png';
import carouselimg3 from '../assets/section2img3.png';


const Picture = () => {

   let images = [carouiselimg1, carouselimg2, carouselimg3];

    let [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next image
    let nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Use setTimeout to automatically change the image every 3 seconds
    useEffect(() => {
      let interval = setTimeout(nextImage, 3000);

      // Clean up the timeout when the component unmounts or re-renders
      return () => clearTimeout(interval);
    }, [currentIndex]);

    
    return (
        <section className="section_2">
           <div className="carousel">
               <img src={images[currentIndex]} alt={`carousel-${currentIndex}`} className="carousel-image" />
            </div>
        </section>
    )
}

export default Picture