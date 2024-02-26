import axios from 'axios'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'

export default function CategoriesSlider() {
     function getCategories(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }
    let useQuery()
  return (
    <Fragment>
    
      <h2>Shop Popular Categories</h2>
      </Fragment>
  )
}
