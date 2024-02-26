import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props){
    //meth

    return <CartContext.Provider value={{}}>
                {props.children}
            </CartContext.Provider>
}