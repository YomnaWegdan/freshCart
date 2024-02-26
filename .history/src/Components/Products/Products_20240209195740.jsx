import React, { useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import axios from 'axios'

export default function Products() {
  const [products , setProducts]=useState([])
  const [loading , setLoading]=useState(true)

  useEffect(()=>{
    getProducts();

  },[])
  async function getProducts (){
    setLoading(false);
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
    setProducts(data.data);
    setLoading(true)
  }
  return (
    <div>
      <FeaturedProducts/>
    </div>
  )
}
