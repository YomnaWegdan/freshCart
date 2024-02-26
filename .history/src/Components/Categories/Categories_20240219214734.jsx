import React from 'react'

export default function Categories() {
  let{data} =  useQ('categories' , getCategories);
  console.log(data?.data.data);
  return (
    <div>
      
    </div>
  )
}

