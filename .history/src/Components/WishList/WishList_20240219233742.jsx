import React from 'react'
import { getWishList, removeFromWishList, useGetWishList } from '../../CustomHooks/useWishList'
import Loading from '../Loading'

export default function WishList() {
    let {isLoading , isError, error , data } = useGetWishList('getWishList' , getWishList)
    console.log('sss', data.data.data)

    let { mutate} = useGetWishList('removeWishList' , removeFromWishList)


    if(isLoading) return <Loading></Loading>
    if(isError) return <h3>{error.message}</h3>
  return (
    <div>
   
        </div>
  )
}
