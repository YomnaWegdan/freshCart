import React from 'react'
import { getWishList, removeFromWishList, useGetWishList } from '../../CustomHooks/useWishList'
import Loading from '../Loading'

export default function WishList() {
    let {isLoading , isError, error , data , isFetched} = useGetWishList('getWishList' , getWishList)
    console.log(data)

    let { mutate} = useGetWishList('removeWishList' , removeFromWishList)


    if(isLoading) return <Loading></Loading>
    if(isError) return <h3>{error.message}</h3>
  return (
    <div>
    {data.data.data.products.map((product)=> 
        <div  className="row  g-2 border-1  border-bottom p-3 align-items-center" key={product.product.id}>
        <div className='col-md-1'>
          <div className='img'> <img src={product.product.imageCover} alt={product.product.title} className=' w-100'/> </div>
        </div>
        <div className='col-md-10'>
          <div className='item'>
            <h3 className='h5 fw-bold'>{product.product.title.split(' ').splice(0 , 2).join(' ')}</h3>
            <p className='text-main fw-bold'>Price: {product.price}</p>
            <button onClick={()=>mutate(product.product.id)}  className='btn'><i className=' fas fa-trash-can text-danger '></i>Remove</button>
          </div>
        </div>
        <div className='col-md-1'>
        
        </div>
  
        </div>)}
        </div>
  )
}
