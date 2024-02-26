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
    <div className='col-md-6' key={prod._id}>
  <h3>Order ID: {prod._id}</h3>
  <p>Shipping Address: {prod.shippingAddress.details}, {prod.shippingAddress.city}, Phone: {prod.shippingAddress.phone}</p>
  <p>Total Price: ${prod.totalOrderPrice}</p>
  <ul>
    {prod.cartItems.map(item => (
      <li key={item._id}>
        {item.product.title} - Quantity: {item.count} - Price: ${item.price}
      </li>
    ))}
  </ul>
</div>
      
    </div></div>
  )
}
