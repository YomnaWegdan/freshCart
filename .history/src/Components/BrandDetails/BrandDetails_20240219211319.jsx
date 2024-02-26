import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../CustomHooks/useProducts';

export default function BrandDetails() {
    let{id} = useParams();
    let {isLoading , isError, error , data , isFetched} = useProducts('brands' , getBrand);


  return (
    <div>
      
    </div>
  )
}
