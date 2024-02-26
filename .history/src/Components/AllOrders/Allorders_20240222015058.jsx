import React from 'react'

export default function Allorders() {
    //orders 
  export function getAllOrders(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders` 
   )
  }
  return (
    <div>
      
    </div>
  )
}
