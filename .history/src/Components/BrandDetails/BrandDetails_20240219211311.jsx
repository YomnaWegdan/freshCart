import React from 'react'
import { useParams } from 'react-router-dom'

export default function BrandDetails() {
    let{id} = useParams();
    let {isLoading , isError, error , data , isFetched} = useProducts('brands' , getBrands);


  return (
    <div>
      
    </div>
  )
}
