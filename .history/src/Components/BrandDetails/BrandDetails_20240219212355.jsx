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
    <Fragment >
    <div className="row justify-content-center align-items-center  vh-100 ">
    <div className='col-md-4'>
    
          <img src={data.image} alt={data.title} key={data.id} className="w-100"/>
    </div> 
    <div className='col-md-8'>

    <h3 className="h5">{data.name}</h3>
    <p className='py-3'>{data.description}</p>
    <span className="text-main font-sm">{data.category.name}</span>
    <div className="d-flex justify-content-between align-items-center py-3 font-sm">
    <span>{data.price} EGP</span>
    <span><i className=" fas fa-star rating-color"></i> {data.ratingsAverage}</span>
    </div>

    </div>
  </div>
    </Fragment>
  )
}
