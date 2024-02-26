import React from 'react'

export default function ProtectedRoute(props) {
  if(localStorage.getItem('userToken')){
    return props.c
  }
  return (
    <div>
      
    </div>
  )
}
