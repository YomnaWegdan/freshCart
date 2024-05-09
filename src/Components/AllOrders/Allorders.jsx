import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';

export default function Allorders() {
  const { isLoading, isError, data , error } = useQuery('getOrders', getAllOrders);
  
console.log(data)
  let token = localStorage.getItem('userToken')
  const {id} = jwtDecode(token); 
  function getAllOrders() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error("Error fetching orders:", error);
      });
  }

  
  if(isLoading) return <Loading/>
  if(isError) return <h3>{error.message}</h3>

  return (
    <div>
      <h2>Your Orders</h2>
      {data.map((order)=>{
        return <div key={order.id} className=' row'>
          <div className='order shadow rounded p-4 my-5'>
            <div className=' d-flex align-items-center'>
              <h3 className=' fw-bold'>#{order.id}</h3>
              <h5 className=' fw-bold mx-4'>Processing</h5>
            </div>
            <p>You have ordered {order.cartItems.length} items.</p>
            <div className=' row'>
              {order.cartItems.map((item)=>{
                return <>
                <div className=' col-md-2 gy-3'>

                <img key={item._id} src={item.product.imageCover} style={{width:150}} alt='' />    
                        </div></>

              })}
            </div>
            <hr/>
            <p className='text-main fw-bold'>Total amount: {order.totalOrderPrice}</p>
          </div>
        </div>
      })}
    </div>
  );
}
