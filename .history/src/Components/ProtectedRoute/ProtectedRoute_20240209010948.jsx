import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  let navigate = useNavigate()

  if(localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return  <N
  }

}
