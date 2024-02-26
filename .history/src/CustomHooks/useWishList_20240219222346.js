import axios from "axios";

let token = localStorage.getItem('userToken');

export function addToWishList(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , productId ,
    headers:{
        token
    }
    )
    

}