import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import axios from 'axios'

export default function Products() {
  async function getProducts (){
    let {data} = axios.get(``)
  }
  return (
    <div>
      <FeaturedProducts/>
    </div>
  )
}
