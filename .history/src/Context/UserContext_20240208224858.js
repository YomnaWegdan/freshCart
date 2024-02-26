import { createContext, useState } from "react";

export let userContext = createContext();

export default function UserContextProvider(props){
    const [userToken , setUserToken]=useState(null)

    return <userContext.Provider value={{ u}}>
    {props.children} 
    </userContext.Provider>

}