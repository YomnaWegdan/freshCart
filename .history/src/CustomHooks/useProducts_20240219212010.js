import axios from "axios";
import { useQuery } from "react-query";

//get products
export function getFeaturedProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
}

//get product details
export function getProductDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }

//get brands
export function getBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
}
//get product details
export function getBrandDetails(id){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    
  }
export function useProducts(key , func){

    return useQuery(key, func,{select:(data)=>data?.data.data} //to can use data instead of data.data.data
    );

}