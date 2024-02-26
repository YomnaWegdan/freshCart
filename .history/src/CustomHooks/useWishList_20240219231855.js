import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "react-query";

let token = localStorage.getItem('userToken');



export function addToWishList(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , 
    {productId},
    {
        headers:{ token}
           
    })
  }

export function getWishList(){   
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist` , 
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
        toast.success(data?.data?.message);

        queryClient.invalidateQueries('getWishList')
    }
    }        
    )
}

export function useGetWishList(key , func){
    return useQuery(key , func)
}