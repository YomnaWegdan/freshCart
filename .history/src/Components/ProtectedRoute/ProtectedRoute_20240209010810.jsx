import React from 'react'

export default function ProtectedRoute() {
  if(localStorage.getItem('userToken'))
  return (
    <div>
      
    </div>
  )
}
