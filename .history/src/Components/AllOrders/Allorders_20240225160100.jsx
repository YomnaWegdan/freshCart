import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export default function Allorders() {
  const { isLoading, isError, data } = useQuery('getOrders', getAllOrders);

  // Fetch all orders for a specific user
  function getAllOrders() {
    if (!data || !data.user || !data.user._id) return Promise.resolve([]); // Return an empty array if data is not available
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${data.user._id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching orders:", error);
        return []; // Return an empty array in case of an error
      });
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <div className='row'>
          {data && data.map((prod) => (
            <div className='col-md-6' key={prod._id}>
              {/* Render each order item here */}
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
          ))}
        </div>
      )}
    </div>
  );
}
