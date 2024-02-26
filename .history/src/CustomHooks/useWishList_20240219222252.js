import axios from "axios";

export function addToWishList(){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , productId)
    

}