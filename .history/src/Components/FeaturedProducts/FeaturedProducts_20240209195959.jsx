import React, { Fragment } from 'react'

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

