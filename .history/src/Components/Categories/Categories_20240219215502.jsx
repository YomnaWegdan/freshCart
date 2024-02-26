import React, { Fragment } from 'react'
import { useQuery } from 'react-query';
import { getCategories } from '../../CustomHooks/useProducts';
import Loading from '../Loading';
import { NavLink } from 'react-router-dom';

export default function Categories() {
  let {isLoading , isError, error , data , isFetched} =  useQuery('categories' , getCategories);
  console.log(data?.data.data);
  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>

  return (
    <Fragment>
    {isLoading ? (
             <Loading/>
            ) : (
              <div className="row justify-content-center align-items-center my-5 g-5 ">
              {data}
            
              </div>
            )}
       </Fragment>    
  )
}

