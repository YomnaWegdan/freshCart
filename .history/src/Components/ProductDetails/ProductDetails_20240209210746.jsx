import React from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
export default function ProductDetails() {
  //to get id
  let {id} = useParams() // return variable that i send in path id => (6428ead5dc1175abc65ca0ad) from http://localhost:3000/productDetails/6428ead5dc1175abc65ca0ad
  
  return (
    <div>
      
    </div>
  )
}

