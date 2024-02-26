import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

export default function Allorders() {
    let {isLoading , isError , data } =  useQuery('getOrders' ,getAllOrders);
    console.log(data)

    //orders 
   function getAllOrders(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${data?.data.DATA._id}`)
  }
  return (
    <div>

    <div className='row'> 
    {data?.data.map((prod)=> 
      <div className='col-md-6' key={prod._id}>
      
      </div>
      )}
      
    </div></div>
  )
}
