import React from 'react'
import { getBrands, useProducts } from '../../CustomHooks/useProducts';

export default function Brands() {
  let {isLoading , isError, error , data , isFetched} = useProducts('products' , getBrands);

  return (
    <div>
      
    </div>
  )
}

