import axios from 'axios'
import React from 'react'
import { useGetCart } from '../../CustomHooks/useCart';

export default function Allorders() {
    let {isLoading , isError , data } =  useGetCart('getOrders' ,getAllOrders);
    console.log(data)

    //orders 
   function getAllOrders(userId){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${}` 
    
   )
  }
  return (
    <div>
      
    </div>
  )
}
