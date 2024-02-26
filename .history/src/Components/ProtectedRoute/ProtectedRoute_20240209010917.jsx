import React from 'react'
let n

export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return 
  }

}
