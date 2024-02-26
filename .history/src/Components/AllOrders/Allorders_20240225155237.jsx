import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

export default function Allorders() {
    let {isLoading , isError , data } =  useQuery('getOrders' ,getAllOrders);
    console.log(data)

    //orders 
    function getAllOrders() {
      if (!data || !data.user || !data.user._id) return; // Check if data is available
      return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${data.user._id}`);
    }
  return (
    <div>

    <div className='row'> 
    {data && data.map((prod) => (
      <div className='col-md-6' key={prod._id}>
        {/* Render each order item here */}
      </div>
    ))}
      
    </div></div>
  )
}
