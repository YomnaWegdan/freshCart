import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {
  const {getCartItems}= useContext(CartContext);
  
  return (
    <div>
      
    </div>
  )
}

