import React from 'react'
import { useProducts } from '../../CustomHooks/useProducts';

export default function Brands() {
  let {isLoading , isError, error , data , isFetched} = useProducts('products' , getFeaturedProducts);

  return (
    <div>
      
    </div>
  )
}

