import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

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

  export function removeCartItem(productId){   
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` , 
    {
        headers:{
            token
        }
    })
  }

export function  usePostCart(func){
    let queryClient = useQueryClient()
    return useMutation(func , {
        onSuccess:(data)=>{
            toast.success(data?.data?.message);
            queryClient.
        },
        onError:(err)=>{
            toast.error(err?.message)
        }
    })
}

export function  useGetCart(key ,func){
    return useQuery(key, func )
}