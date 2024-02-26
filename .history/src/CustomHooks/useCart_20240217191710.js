import axios from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { date } from "yup";

let token = localStorage.getItem('userToken');
export function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId},
    {
        headers:{ token}
           
    })
  }

export function  usePostCart(func){
    return useMutation(func , {
        onSuccess:()=>{
            toast.success(date)
        }
    })

}