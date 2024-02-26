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
    <div>
      
    </div>
  )
}

