import { createContext, useState } from "react";

export let userContext = createContext();

export default function UserContextProvider(props){
    const [userToken , setUserToken]=useState(null)

    return <userContext.Provider value={{ userToken , se}}>
    {props.children} 
    </userContext.Provider>

}