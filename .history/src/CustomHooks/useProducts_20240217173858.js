import axios from "axios";

function getFeaturedProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

export function useProducts(){

    use('featuredProducts', getFeaturedProducts
    ,{select:(data)=>data?.data.data} //to can use data instead of data.data.data
    );

}