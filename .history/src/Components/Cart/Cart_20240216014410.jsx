import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {
  const[cart]
  const {getCartItems}= useContext(CartContext);
  async function cartItems(){
    let {data} = await getCartItems();
    console.log(data)
  }
  return (
    <div>
      
    </div>
  )
}

