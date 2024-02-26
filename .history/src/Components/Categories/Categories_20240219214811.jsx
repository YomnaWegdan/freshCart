import React from 'react'
import { useQuery } from 'react-query';
import { getCategories } from '../../CustomHooks/useProducts';

export default function Categories() {
  let{data} =  useQuery('categories' , getCategories);
  console.log(data?.data.data);
  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>

  return (
    <div>
      
    </div>
  )
}

