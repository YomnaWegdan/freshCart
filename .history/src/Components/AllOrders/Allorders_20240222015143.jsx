import axios from 'axios'
import React from 'react'
import { useGetCart } from '../../CustomHooks/useCart';

export default function Allorders() {
    let {isLoading , isError , data } =  useGetCart('getCart' ,g);

    //orders 
   function getAllOrders(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders` 
   )
  }
  return (
    <div>
      
    </div>
  )
}
