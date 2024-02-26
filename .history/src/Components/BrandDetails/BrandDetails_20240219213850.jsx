import React, { Fragment } from 'react'
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
    <Fragment>
    <div className="row justify-content-center align-items-center align-items-center  vh-100 ">
    <div className='col-md-6 h-50 bg-light d-flex align-items-center justify-content-center rounded-3 sh'>
       <img src={data.image} alt={data.title} key={data._id} className="w-50"/>
    </div> 
    <div className='col-md-6 h-50 bg-light d-flex align-items-center justify-content-center rounded-3'>
    <h3 className="h5 text-main ">{data.name}</h3>
    </div>
    </div>
    </Fragment>
  )
}
