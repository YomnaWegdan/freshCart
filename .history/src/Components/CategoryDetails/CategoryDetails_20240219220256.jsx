import React from 'react'
import { useParams } from 'react-router-dom'
import { getCategoryDetails, useProducts } from '../../CustomHooks/useProducts';

export default function CategoryDetails() {
    let {id} = useParams()
    let {isLoading , isError, error , data , isFetched} =  useProducts('categories' , getCategoryDetails);

  return (
    <div>
      
    </div>
  )
}
