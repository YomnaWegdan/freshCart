import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute(props) {

  let token = localStorage.getItem('userToken')
  try{
  const decoded = jwtDecode(token);  //decode for token => get decode that can know the role
  console.log(decoded)
  }catch(err){
    console.log(err)
    localStorage.clear()
    return <Navigate to={'/login'}></Navigate>
  }
  
  if(token){
    return props.children
  }
  else{
    return  <Navigate to={'/login'}></Navigate>
  }
}
