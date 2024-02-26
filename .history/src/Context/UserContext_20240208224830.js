import { createContext } from "react";

export let userContext = createContext();

export default function UserContextProvider(props){
    const [userToken , setUser]

    return <userContext.Provider value={{ }}>
    {props.children} 
    </userContext.Provider>

}