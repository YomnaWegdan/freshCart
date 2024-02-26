import React, { useState } from 'react'
import slide1 from '../../Assets/images/slider-image-3.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-1.jpeg'
import img1 from '../../Assets/images/grocery-banner.png'
import img2 from '../../Assets/images/grocery-banner-2.jpeg'
import Slider from "react-slick";



export default function MainSlider() {
    const [slide , setSlide] = useState([slide1 , slide2 , slide3])
    const [img , setImg] = useState([img1 , img2])

    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
    <div className="row  align-items-center mb-2 mt-4 pt-5 gx-0 ">
    <div className='col-md-9'>
    <Slider {...settings}>
        {slide.map((image , index)=> 
          <img src={image} alt='slide-img' key={index} className="w-100" height={400}/>)}
    </Slider>
    </div> 
    <div className='col-md-3'>
    {img.map((img , index)=> 
        <img src={img} alt='slide-img' key={index} className="w-100 " height={200}/>)}
    </div>

    </div>
    </div>
  )
}
