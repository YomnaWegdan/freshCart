import React from 'react'
let navigate = use

export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return 
  }

}
