import axios from 'axios'
import React, { Fragment } from 'react'
import Slider from 'react-slick';
import { getCategories, useProducts } from '../../CustomHooks/useProducts';
import { NavLink } from 'react-router-dom';

export default function CategoriesSlider() {
    
    let{data} =  useProducts('categories' , getCategories);
    console.log(data);
    //slider
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 7,
        slidesToScroll: 1,

      };
  return (
    <Fragment>
    
      <h2 className='h3 mt-5'>Shop Popular Categories</h2>
      
      <div className="row  align-items-center mb-2 mt-4 pt-5 gx-0 ">
    <Slider {...settings}>
        {data?.map((category )=> 
            <div className='col-md-2' key={category._id}>
            <div className='img'>
            <NavLink to={`/categoryDetails/${product._id}`}>
            <img src={category.image} alt={category.name} key={category.id} className="w-100 object-fit-cover cursor-pointer" height={240}/>  
                <p className='text-center'>{category.name}</p>
              </NavLink>
            </div>  
          </div> 
        )}
    </Slider>
    </div>
      </Fragment>
  )
}
