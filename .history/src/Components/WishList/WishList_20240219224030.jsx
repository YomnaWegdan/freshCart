import React from 'react'
import { useGetWishList } from '../../CustomHooks/useWishList'

export default function WishList() {
    let {isLoading , isError, error , data , isFetched} = useGetWishList('getW')
  return (
    <div>
      
    </div>
  )
}
