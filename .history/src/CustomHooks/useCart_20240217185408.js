import axios from "axios";

let token = localStorage.getItem('userToken');
function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId},
    {
        headers:{ token}
           
    }).then(response => response).catch(error=> error)
  }

function  useGetCart()