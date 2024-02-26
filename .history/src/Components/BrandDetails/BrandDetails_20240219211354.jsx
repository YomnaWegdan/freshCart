import React from 'react'
import { useParams } from 'react-router-dom'
import { getBrandDetails, useProducts } from '../../CustomHooks/useProducts';

export default function BrandDetails() {
    let{id} = useParams();
    let {isLoading , isError, error , data , isFetched} = useProducts('brandDetails' , getBrandDetails);
    console.log(data)


  return (
    <div>
      
    </div>
  )
}
