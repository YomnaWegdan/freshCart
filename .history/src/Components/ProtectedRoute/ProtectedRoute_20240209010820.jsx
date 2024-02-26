import React from 'react'

export default function ProtectedRoute(p) {
  if(localStorage.getItem('userToken')){
    return 
  }
  return (
    <div>
      
    </div>
  )
}
