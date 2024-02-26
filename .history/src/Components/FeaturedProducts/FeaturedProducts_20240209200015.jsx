import React, { Fragment } from 'react'
import , { useEffect, useState } from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import axios from 'axios'

export default function FeaturedProducts() {
  const [products , setProducts]=useState([])
  const [loading , setLoading]=useState(true)
  return (
    <Fragment>
    {loading ? (
      <ThreeDots
      visible={true}
      height="25"
      width="25"
      color="white"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      />                 
    ) : (<div></div>)}
    </Fragment>
  )
}

