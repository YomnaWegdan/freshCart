import React, { Fragment } from 'react'
import Loading from '../Loading';
import { getCartItems, removeCartItem, updateCartItem, useGetCart, usePostCart } from '../../CustomHooks/useCart';
import imgCart 

export default function Cart() {

  let {isLoading , isError, error , data , isFetched} =  useGetCart('getCart' ,getCartItems);
  console.log(data);

  //delete
  let {  data:deleteData , mutate } =  usePostCart(removeCartItem);
  console.log(deleteData);


  let {  data:updateData , mutate:mutateUpdate } =  usePostCart(updateCartItem);
  console.log(updateData);


  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>



  return (
    <Fragment>
    <div className='bg-main-light p-2 mt-5 pt-4'>
    {data?.data.numOfCartItems?
      <>
    <h2 className='h3'>Shop Cart</h2>
    <div className='d-flex justify-content-between w-100 px-4'>
      <p className='text-main'>Total Cart Price {data.data.data.totalCartPrice} EGP </p>
      <p className='text-main'>Total cart Items {data.data.numOfCartItems}</p>
    </div>
    {data.data.data.products.map((product)=> 
      <div  className="row  g-2 border-1  border-bottom p-3 align-items-center" key={product.product.id}>
      <div className='col-md-1'>
        <div className='img'> <img src={product.product.imageCover} alt={product.product.title} className=' w-100'/> </div>
      </div>
      <div className='col-md-10'>
        <div className='item'>
          <h3 className='h5 fw-bold'>{product.product.title.split(' ').splice(0 , 2).join(' ')}</h3>
          <p className='text-main fw-bold'>Price: {product.price}</p>
          <button onClick={()=>mutate(product.product.id)}  className='btn'><i className=' fas fa-trash-can text-danger '></i>Remove</button>
        </div>
      </div>
      <div className='col-md-1'>
      <div className='count'>
        <button onClick={()=> mutateUpdate({productId:product.product.id , count:product.count +1})}  className='btn border-2 border-success-subtle'>+</button>
        <span className='mx-1'>{product.count}</span>
        <button onClick={()=> mutateUpdate({productId:product.product.id , count:product.count -1})}  className='btn  border-2 border-success-subtle'>-</button>

      </div>
      </div>

      </div>)}</>
    : <><img src={}/> </> }
    
      </div>
    </Fragment>
  )
}


/*
// import React, { Fragment, useContext, useEffect, useState } from 'react'
// import { CartContext } from '../../Context/CartContext'
// import Loading from '../Loading';

// export default function Cart() {
//   const[cart , setCart] = useState([])
//   const [loading ,setLoading]= useState(true)
//   const {getCartItems , removeCartItem , updateCartItem}= useContext(CartContext);

//   async function cartItems(){
//     let {data} = await getCartItems();
//     console.log(data);
//     setCart(data);
//     setLoading(false)
//   }

//   async function removeItem(id){
//     setLoading(true)
//     let {data} = await removeCartItem(id);
//     console.log(data);
//     setCart(data); //because when delete return new data again 
//     setLoading(false)
//   }

//   async function updateItem(id , count){
//     if(count <1){
//       let {data} = await removeCartItem(id);
//       setCart(data);

//     }else{
//       let {data} = await updateCartItem(id , count);
//       setCart(data);


//     }
//     setLoading(false)
//   }
//   useEffect(()=>{
//     cartItems()
//   } , [])
//   return (
//     <Fragment>
//     <div className='bg-main-light p-2 mt-5 pt-4'>
//     {loading? <Loading/>:
//     <>
//     <h2 className='h3'>Shop Cart</h2>
//     <div className='d-flex justify-content-between w-100 px-4'>
//       <p className='text-main'>Total Cart Price {cart.data.totalCartPrice} EGP </p>
//       <p className='text-main'>Total cart Items {cart.numOfCartItems}</p>
//     </div>
//     {cart.data.products.map((product)=> 
//       <div  className="row  g-2 border-1  border-bottom p-3 align-items-center" key={product.product.id}>
//       <div className='col-md-1'>
//         <div className='img'> <img src={product.product.imageCover} alt={product.product.title} className=' w-100'/> </div>
//       </div>
//       <div className='col-md-10'>
//         <div className='item'>
//           <h3 className='h5 fw-bold'>{product.product.title.split(' ').splice(0 , 2).join(' ')}</h3>
//           <p className='text-main fw-bold'>Price: {product.price}</p>
//           <button onClick={()=> removeItem(product.product.id)} className='btn'><i className=' fas fa-trash-can text-danger '></i>Remove</button>
//         </div>
//       </div>
//       <div className='col-md-1'>
//       <div className='count'>
//         <button onClick={()=> updateItem(product.product.id , product.count +1)} className='btn border-2 border-success-subtle'>+</button>
//         <span className='mx-1'>{product.count}</span>
//         <button onClick={()=> updateItem(product.product.id , product.count -1)} className='btn  border-2 border-success-subtle'>-</button>

//       </div>
//       </div>

//       </div>)}
    
    
//     </>}
//       </div>
//     </Fragment>
//   )
// }
*/

