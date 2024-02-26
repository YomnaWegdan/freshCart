import React, { Fragment, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import Loading from '../Loading';

export default function Cart() {
  const[cartData , setCartData] = useState([])
  const [loading ,setLoading]= useState(true)
  const {getCartItems}= useContext(CartContext);

  async function cartItems(){
    let {data} = await getCartItems();
    console.log(data);
    setCartData(data);
    setLoading(false)

  }

  useEffect(()=>{
    cartItems()
  } , [])
  return (
    <Fragment>
    <div
    {loading? <Loading/>:<></>}
      
    </Fragment>
  )
}

