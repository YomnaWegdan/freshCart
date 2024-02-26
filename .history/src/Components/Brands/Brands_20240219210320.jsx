import React from 'react'

export default function Brands() {
  let {isLoading , isError, error , data , isFetched} = useProducts('products' , getFeaturedProducts);

  return (
    <div>
      
    </div>
  )
}

