import React from 'react'
import { useQuery } from 'react-query';
import { getCategories } from '../../CustomHooks/useProducts';

export default function Categories() {
  let{data} =  useQuery('categories' , getCategories);
  console.log(data?.data.data);
  return (
    <div>
      
    </div>
  )
}

