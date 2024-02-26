import axios from "axios";
import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  //methods of cart  because more than components will use this methods

  function addToCart(productId){
    return axios.post()

  }

  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
}
