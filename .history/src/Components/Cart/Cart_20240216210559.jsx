import React, { Fragment, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import Loading from '../Loading';

export default function Cart() {
  const[cart , setCart] = useState([])
  const [loading ,setLoading]= useState(true)
  const {getCartItems}= useContext(CartContext);

  async function cartItems(){
    let {data} = await getCartItems();
    console.log(data);
    setCart(data);
    setLoading(false)
  }

  useEffect(()=>{
    cartItems()
  } , [])
  return (
    <Fragment>
    <div className='bg-main-light p-2 mt-5'>
    {loading? <Loading/>:
    <>
    <h2>Shop Cart</h2>
    <p className='text-main'>Total cart Items {cart.numOfCartItems}</p>
    <p className='text-main'>Total Cart Price {cart.data.totalCartPrice} EGP </p>
    <div  className="row justify-content-center align-items-center g-2">
    
    </div>
    
    </>}
      </div>
    </Fragment>
  )
}

