import React from 'react'

export default function ProtectedRoute() {
  if(localStorage.getItem('userToke'))
  return (
    <div>
      
    </div>
  )
}
