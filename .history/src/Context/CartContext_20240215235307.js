import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props){
    //methods of cart  because 

    return <CartContext.Provider value={{}}>
                {props.children}
            </CartContext.Provider>
}