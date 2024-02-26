import React, { useEffect } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import axios from 'axios'

export default function Products() {
  useEffect(()=>{
    getProducts()
  },[])
  async function getProducts (){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`).catch((err))
  }
  return (
    <div>
      <FeaturedProducts/>
    </div>
  )
}
