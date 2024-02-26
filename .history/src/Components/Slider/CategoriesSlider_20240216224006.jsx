import axios from 'axios'
import React, { Fragment } from 'react'

export default function CategoriesSlider() {
    async function getCategories(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
  return (
    <Fragment>
    
      <h2>Shop Popular Categories</h2>
      </Fragment>
  )
}
