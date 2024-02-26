import axios from "axios";

function getFeaturedProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

export function useProducts(){


}