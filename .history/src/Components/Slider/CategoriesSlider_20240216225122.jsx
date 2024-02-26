import axios from 'axios'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'
import Slider from 'react-slick';

export default function CategoriesSlider() {
     function getCategories(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    let{data} =  useQuery('categories' , getCategories);
    console.log(data?.data.data);
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 7,
        slidesToScroll: 1
      };
  return (
    <Fragment>
    
      <h2>Shop Popular Categories</h2>

      <div className="row  align-items-center mb-2 mt-4 pt-5 gx-0 ">
    <Slider {...settings}>
        {data?.data.data.map((category )=> 
            <div className='col-md-2'>
            <div className='img'>
                <img src={category.image} alt={category.name} key={category.id} className="w-100" height={260}/>  
                <pc>{category.name}</pc>
            </div>  
          </div> 
        )}
    </Slider>
    </div>
      </Fragment>
  )
}
