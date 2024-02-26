import React from 'react'
import { useQuery } from 'react-query';
import { getCategories } from '../../CustomHooks/useProducts';
import Loading from '../Loading';

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
              {data.map((product)=>
                <div className=" col  col-md-3" key={product._id}>
                <div className="product p-3 border border-success-subtle rounded-2 ">
                <NavLink to={`/brandDetails/${product._id}`}>

                <img src={product.image} alt={product.name} className="w-100"/>
                <span className="text-main font-sm">{product.name}</span>
                
                </NavLink>

                </div>
      
                </div>
      
              )}
              </div>
            )}
       </Fragment>    
  )
}

