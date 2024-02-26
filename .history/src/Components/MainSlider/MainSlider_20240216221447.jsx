import React from 'react'
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'
import img1 from '../../Assets/images/grocery-banner.png'
import img2 from '../../Assets/images/grocery-banner-2.jpeg'
import Slider from "react-slick";



export default function MainSlider() {
    con
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div className="row justify-content-center align-items-center  vh-100 ">
    <div className='col-md-4'>
    
    <Slider {...settings}>
        {details.images.map((image)=> 
          <img src={image} alt={details.title} key={details.id} className="w-100"/>)}
    </Slider>
    </div> 
    </div>
    </div>
  )
}
