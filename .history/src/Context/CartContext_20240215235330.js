import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props) {
  //methods of cart  because more than components will use this 

  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
}
