import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {
  const[cartItems , setCartItems] = useState([])
  co
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
