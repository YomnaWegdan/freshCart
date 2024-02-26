import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import axios from 'axios'

export default function Products() {
  const [products , setProducts]=useState([])
  useEffect(()=>{
    getProducts();
    
  },[])
  async function getProducts (){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <FeaturedProducts/>
    </div>
  )
}
