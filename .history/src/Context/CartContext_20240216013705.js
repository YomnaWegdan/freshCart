import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  //methods of cart  because more than components will use this methods

  function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId:productId},
    {
        headers:{
            token:localStorage.getItem('userToken')
        }
    }).then(response => response).catch(error=> error)
  }

  function getCartItems(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {
        headers:{
            token:localStorage.getItem('userToken')
        }
    }).then(response => response).catch(error=> error)
  }

  return (
    <CartContext.Provider value={{addToCart }}>{props.children}</CartContext.Provider>
  );
}
