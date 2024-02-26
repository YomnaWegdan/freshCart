import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props){
    //methods of cart

    return <CartContext.Provider value={{}}>
                {props.children}
            </CartContext.Provider>
}