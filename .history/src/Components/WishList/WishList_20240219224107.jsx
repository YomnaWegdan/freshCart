import React from 'react'
import { getWishList, useGetWishList } from '../../CustomHooks/useWishList'

export default function WishList() {
    let {isLoading , isError, error , data , isFetched} = useGetWishList('getWishList' , getWishList)
    console.log(data)

    if(isLoading) return <Loading></Loading>
    if(isError) return <h3>{error.message}</h3>
  return (
    <div>
      
    </div>
  )
}
