import React, { useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function ProductDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  //to get id
  let {id} = useParams() // return variable that i send in path id => (6428ead5dc1175abc65ca0ad) from http://localhost:3000/productDetails/6428ead5dc1175abc65ca0ad
  console.log(id)

  async function getProductDetails(id){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    se

    setLoading(false)
  }
  return (
    <div>
      
    </div>
  )
}

