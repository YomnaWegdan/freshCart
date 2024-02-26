import axios from "axios";
import { useMutation } from "react-query";

let token = localStorage.getItem('userToken');
export function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId},
    {
        headers:{ token}
           
    }).then(response => response).catch(error=> error)
  }

export function  useGetCart(func){
    useMutation(func)

}