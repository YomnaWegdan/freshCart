import { createContext } from "react";

export const CartContext = createContext();

function CartContextProvider(props){
    

    return <CartContext.Provider value={{}}>
                {props.children}
            </CartContext.Provider>
}