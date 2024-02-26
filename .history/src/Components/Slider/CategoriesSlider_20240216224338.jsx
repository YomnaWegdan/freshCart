import axios from 'axios'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'

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
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Fragment>
    
      <h2>Shop Popular Categories</h2>
      </Fragment>
  )
}
