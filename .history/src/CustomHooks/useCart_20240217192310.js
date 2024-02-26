import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

let token = localStorage.getItem('userToken');
export function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId},
    {
        headers:{ token}
           
    })
  }

  function getCartItems(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {
        headers:{
            token
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

