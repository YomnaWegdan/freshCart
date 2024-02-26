import React from 'react'
import { useParams } from 'react-router-dom'
import { getBrandDetails, useProducts } from '../../CustomHooks/useProducts';
import Loading from '../Loading';

export default function BrandDetails() {
    let{id} = useParams();
    let {isLoading , isError, error , data , isFetched} = useProducts('brandDetails' , ()=>getBrandDetails(id));
    console.log(data)
    if(isLoading) return <Loading></Loading>
    if(isError) return <h3>{error.message}</h3>


  return (
    <Fragment >
      
    </Fragment>
  )
}
