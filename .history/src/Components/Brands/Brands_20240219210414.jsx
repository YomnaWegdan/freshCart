import React from 'react'
import { getBrands, useProducts } from '../../CustomHooks/useProducts';
import Loading from '../Loading';

export default function Brands() {
  let {isLoading , isError, error , data , isFetched} = useProducts('brands' , getBrands);
  console.log(data);
  if(isLoading) return <Loading></Loadin>
  if(isError) return <h3>{error.message}</h3>


  return (
    <div>
      
    </div>
  )
}

