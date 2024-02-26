import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../../CustomHooks/useProducts';

export default function CategoryDetails() {
    let {id} = useParams()
    let {isLoading , isError, error , data , isFetched} =  useProducts('categories' , getCategories);

  return (
    <div>
      
    </div>
  )
}
