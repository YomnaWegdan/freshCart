import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

let token = localStorage.getItem('userToken');

export function addToWishList(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , productId ,{
    headers:{
        token
    }}
    )
}

export function getCartItems(){   //display all items of cart
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {
        headers:{
            token
        }
    })
  }

export function removeFromWishList(productId){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`  ,{
        headers:{
            token
        }}
        )
}


export function usePostWishList(){
    let queryClient = useQueryClient()
    return useMutation(func=>func , {onSuccess:(data)=>{
        queryClient.invalidateQueries('getWishList')
    }
    }        
    )
}

export function useGetWishList(key , func){
    return useQuery(key , func)
}