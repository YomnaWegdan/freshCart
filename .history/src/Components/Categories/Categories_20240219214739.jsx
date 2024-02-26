import React from 'react'
import { useQuery } from 'react-query';

export default function Categories() {
  let{data} =  useQuery('categories' , getCa);
  console.log(data?.data.data);
  return (
    <div>
      
    </div>
  )
}

