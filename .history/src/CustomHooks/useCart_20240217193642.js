import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";

let token = localStorage.getItem('userToken');
export function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId},
    {
        headers:{ token}
           
    })
  }

  export function getCartItems(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {
        headers:{
            token
        }
    })
  }

  function removeCartItem(productId){   
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , 
    {
        headers:{
            token:localStorage.getItem('userToken')
        }
    })
  }

export function  usePostCart(func){
    return useMutation(func , {
        onSuccess:(data)=>{
            toast.success(data?.data?.message)
        },
        onError:(err)=>{
            toast.error(err?.message)
        }
    })
}

export function  useGetCart(key ,func){
    return useQuery(key, func )
}