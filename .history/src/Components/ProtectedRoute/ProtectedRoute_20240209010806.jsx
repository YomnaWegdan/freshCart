import React from 'react'

export default function ProtectedRoute() {
  if(localStorage.getItem('user'))
  return (
    <div>
      
    </div>
  )
}
