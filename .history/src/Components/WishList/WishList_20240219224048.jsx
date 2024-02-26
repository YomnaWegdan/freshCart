import React from 'react'
import { getWishList, useGetWishList } from '../../CustomHooks/useWishList'

export default function WishList() {
    let {isLoading , isError, error , data , isFetched} = useGetWishList('getWishList' , getWishList)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
