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
    {cart.data.products.map((product)=> 
      <div  className="row  g-2 border-1  border-bottom p-3" key={product.product.id}>
      <div className='col-md-1'>
        <div className='img'> <img src={product.product.imageCover} alt={product.product.title} className=' w-100'/> </div>
      </div>
      <div className='col-md-1'>
      </div>

      </div>)}
    
    
    </>}
      </div>
    </Fragment>
  )
}

