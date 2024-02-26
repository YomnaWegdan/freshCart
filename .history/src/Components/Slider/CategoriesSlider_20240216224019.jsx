import axios from 'axios'
import React, { Fragment } from 'react'
import { useQueries } from 'react-query'

export default function CategoriesSlider() {
     function getCategories(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    useQueries
  return (
    <Fragment>
    
      <h2>Shop Popular Categories</h2>
      </Fragment>
  )
}
