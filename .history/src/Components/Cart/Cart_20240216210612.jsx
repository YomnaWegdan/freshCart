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
    .col<!--  Modal trigger button  -->
    <button
      type="button"
      class="btn btn-primary btn-lg"
      data-bs-toggle="modal"
      data-bs-target="#modalId"
    >
      Launch
    </button>
    
    <!-- Modal Body-->
    <div
      class="modal fade"
      id="modalId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalTitleId">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">Add rows here</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
    
    </div>
    
    </>}
      </div>
    </Fragment>
  )
}

