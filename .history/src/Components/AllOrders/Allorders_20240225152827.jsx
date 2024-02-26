import axios from 'axios'
import React from 'react'
import { useGetCart } from '../../CustomHooks/useCart';
import { useQuery } from 'react-query';

export default function Allorders() {
    let {isLoading , isError , data } =  useQuery('getOrders' ,getAllOrders);
    console.log(data)

    //orders 
   function getAllOrders(userId){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}` 
   )
  }
  return (
    <div>

    {data?.data.map((prod)=> 
      <div className='col-md'></div>
      )}
      
    </div>
  )
}
