import React from 'react'
let nav

export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return 
  }

}
