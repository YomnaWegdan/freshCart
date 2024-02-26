import axios from 'axios'
import React from 'react'

export default function Allorders() {
    let {isLoading , isError, error , data } =  useGetCart('getCart' ,getCartItems);

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
