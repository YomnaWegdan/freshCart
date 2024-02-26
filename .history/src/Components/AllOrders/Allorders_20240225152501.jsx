import axios from 'axios'
import React from 'react'
import { useGetCart } from '../../CustomHooks/useCart';

export default function Allorders() {
    let {isLoading , isError , data } =  useGetCart('getOrders' ,getAllOrders);
    console.log(data)

    //orders 
   function getAllOrders(productId){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/6407cf6f515bdcf347c09f17` 
    
   )
  }
  return (
    <div>
      
    </div>
  )
}
