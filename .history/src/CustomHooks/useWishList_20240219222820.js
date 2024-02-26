import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

let token = localStorage.getItem('userToken');

export function addToWishList(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , productId ,{
    headers:{
        token
    }}
    )
}


function usePostWishList(){
    let queryClient = useQueryClient()
    return useMutation(func=>func , {onSuccess:(data)=>{
        queryClient.invalidateQueries('getWishList')
    }
    }        
    )
}