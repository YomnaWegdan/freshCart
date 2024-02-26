import React from 'react'
import { useNavigate } from 'react-router-dom'
let navigate = useNavigate()

export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return 
  }

}
