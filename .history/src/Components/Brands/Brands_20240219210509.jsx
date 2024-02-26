import React, { Fragment } from 'react'
import { getBrands, useProducts } from '../../CustomHooks/useProducts';
import Loading from '../Loading';

export default function Brands() {
  let {isLoading , isError, error , data , isFetched} = useProducts('brands' , getBrands);
  console.log(data);
  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>


  return (
    <Fragment>
    {isLoading ? (
             <Loading/>
            ) : (
              <div className="row justify-content-center align-items-center my-5 g-5 ">
              {data.map((product)=>
                <div className=" col col-lg-2 col-md-3" key={product.id}>
                <div className="product p-3">
                <NavLink to={`/productDetails/${product.id}`}>

                <img src={product.imageCover} alt={product.title} className="w-100"/>
                <span className="text-main font-sm">{product.category.name}</span>
                <h3 className="h5">{product.title.split(' ').splice(0,2).join(' ')}</h3>
                <div className="d-flex justify-content-between align-items-center py-3 font-sm">
                <span>{product.price} EGP</span>
                <span><i className=" fas fa-star rating-color"></i> {product.ratingsAverage}</span>
                </div>
                </NavLink>

                <button onClick={()=>mutate(product.id)} className="btn bg-main text-main-light w-100">Add to cart</button>
                </div>
      
                </div>
      
              )}
              </div>
            )}
       </Fragment>    
    </div>
  )
}

