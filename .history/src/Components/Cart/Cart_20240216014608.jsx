import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'

export default function Cart() {
  const[cartData , setCartData] = useState([])
  const [loading ,setLoading]= useState(false)
  const {getCartItems}= useContext(CartContext);

  async function cartItems(){
    let {data} = await getCartItems();
    console.log(data);
    s

  }
  return (
    <div>
      
    </div>
  )
}

