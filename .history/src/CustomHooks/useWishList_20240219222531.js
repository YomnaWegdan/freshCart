import axios from "axios";
import { useMutation } from "react-query";

let token = localStorage.getItem('userToken');

export function addToWishList(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , productId ,{
    headers:{
        token
    }}
    )
}


function usePostWishList(){
    return useMutation()
}