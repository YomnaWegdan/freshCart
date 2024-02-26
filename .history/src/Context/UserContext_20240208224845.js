import { createContext, useState } from "react";

export let userContext = createContext();

export default function UserContextProvider(props){
    const [userToken , setUserToken]=useState(null)

    return <userContext.Provider value={{ }}>
    {props.children} 
    </userContext.Provider>

}