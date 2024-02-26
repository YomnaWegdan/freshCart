import { createContext } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  //methods of cart  because more than components will use this methods

  function addToCart(id)

  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
}
