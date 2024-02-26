import React, { Fragment } from 'react'
import { useQuery } from 'react-query';
import { getCategories, useProducts } from '../../CustomHooks/useProducts';
import Loading from '../Loading';
import { NavLink } from 'react-router-dom';

export default function Categories() {
  let {isLoading , isError, error , data , isFetched} =  useProducts('categories' , getCategories);
  console.log(data);
  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>

  return (
    <Fragment>
    {isLoading ? (
             <Loading/>
            ) : (
              <div className="row justify-content-center align-items-center my-5 g-5 ">
              {data?..map((product)=>
                <div className=" col  col-md-3" key={product._id}>
                <div className="product p-3 border border-success-subtle rounded-2 ">
                <NavLink to={`/categoryDetails/${product._id}`}>
                <img src={product.image} alt={product.name} className="w-100 object-fit-cover" height={300}/>
                <span className="text-main font-sm text-center">{product.name}</span>
                </NavLink>
                </div>
                </div>    
              )}
              </div>
            )}
       </Fragment>    
  )
}

