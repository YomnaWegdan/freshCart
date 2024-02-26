import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryDetails, useProducts } from '../../CustomHooks/useProducts';

export default function CategoryDetails() {
    let {id} = useParams()
    let {isLoading , isError, error , data , isFetched} =  useProducts('categories' ,()=> getCategoryDetails(id));

  return (
    <Fragment>
    <div className="row justify-content-center align-items-center align-items-center  vh-100 ">
    <div className='col-md-6 h-75 bg-light d-flex align-items-center justify-content-center rounded-3 shadow shadow'>
       <img src={data.image} alt={data.title} key={data._id} className="w-50"/>
    </div> 
    <div className='details-card col-md-6 h-50 bg-light d-flex align-items-center justify-content-center rounded-3 shadow '>
    <h3 className="h5 text-main ">{data.name}</h3>
    </div>
    </div>
    </Fragment>
  )
}
