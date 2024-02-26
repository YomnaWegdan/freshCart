import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";
import { getFeaturedProducts, useProducts } from "../../CustomHooks/useProducts";
import { addToCart, usePostCart } from "../../CustomHooks/useCart";
import { addToWishList, usePostWishList } from "../../CustomHooks/useWishList";

export default function FeaturedProducts() {


  let [heart , setHeart] = useState(false)

  let {isLoading , isError, error , data } = useProducts('products' , getFeaturedProducts);
  console.log(data);


  //cart
  let { data:addData , mutate } = usePostCart(addToCart)
  //mutate => fire the function , send id 
  console.log(addData?.data?.message)


  //wishList
  let{data:wishListData , mutate:wishListMutate}= usePostWishList(addToWishList);
  console.log('w',wishListData)

  if(isLoading) return <Loading></Loading>
  if(isError) return <h3>{error.message}</h3>



  return (
    <Fragment>
    {isLoading ? (
             <Loading/>
            ) : (
              <div className="row justify-content-center align-items-center my-5 g-5 ">
              {data.map((product)=>
                <div className=" col col-lg-2 col-md-3 position-relative" key={product.id}>
                <div className="product p-3">
                <span className="wishList-btn " onClick={()=>{} wishListMutate(product.id)}><i style={heart?{color:'red'}:{color:'unset'}} onClick={()=>setHeart(!heart)} className="fas fa-heart cursor-pointer "></i></span> 
                <NavLink to={`/productDetails/${product.id}`}>

                <img src={product.imageCover} alt={product.title} className="w-100"/>
                <span className="text-main font-sm">{product.category.name}</span>
                <h3 className="h5">{product.title.split(' ').splice(0,2).join(' ')}</h3>
                <div className="d-flex justify-content-between align-items-center py-3 font-sm">
                <span>{product.price} EGP</span>
                <span><i className=" fas fa-star rating-color"></i> {product.ratingsAverage}</span>
                </div>
                </NavLink>

                <button onClick={()=>mutate(product.id)} className="btn bg-main text-main-light w-100">Add to cart</button>
                </div>
      
                </div>
      
              )}
              </div>
            )}
    </Fragment>
  );
}

//                <button className="wishList-btn btn btn-success" onClick={()=>wishListMutate(product.id)}><i style={heart?{color:'text-main'}:{color:'unset'}} onClick={()=>setHeart(!heart)} className="fas fa-heart cursor-pointer "></i></button> 


// import axios from "axios";
// import React, { Fragment, useContext } from "react";
// import { useQuery } from "react-query";
// import { NavLink } from "react-router-dom";
// import Loading from "../Loading";
// import { CartContext } from "../../Context/CartContext";
// import toast from "react-hot-toast";

// export default function FeaturedProducts() {

//   function getFeaturedProducts(){
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//   }

//   let {isLoading , isError, error , data , isFetched} = useQuery('featuredProducts', getFeaturedProducts
//   ,{select:(data)=>data?.data.data} //to can use data instead of data.data.data
//   );
//   console.log(data);


//   //cart
//   let {addToCart} = useContext(CartContext);
//   async function postToCart(id){
//     let {data}= await addToCart(id)
//     console.log(data);
//     // console.log(data?.data.data)
//     if(data.status == 'success'){
//       toast.success(data.message)
//     }
//   }

//   if(isLoading) return <Loading></Loading>
//   if(isError) return <h3>{error.message}</h3>



//   return (
//     <Fragment>
//     {isLoading ? (
//              <Loading/>
//             ) : (
//               <div className="row justify-content-center align-items-center my-5 g-5 ">
//               {data.map((product)=>
//                 <div className=" col col-lg-2 col-md-3" key={product.id}>
//                 <div className="product p-3">
//                 <NavLink to={`/productDetails/${product.id}`}>

//                 <img src={product.imageCover} alt={product.title} className="w-100"/>
//                 <span className="text-main font-sm">{product.category.name}</span>
//                 <h3 className="h5">{product.title.split(' ').splice(0,2).join(' ')}</h3>
//                 <div className="d-flex justify-content-between align-items-center py-3 font-sm">
//                 <span>{product.price} EGP</span>
//                 <span><i className=" fas fa-star rating-color"></i> {product.ratingsAverage}</span>
//                 </div>
//                 </NavLink>

//                 <button onClick={()=>postToCart(product.id)} className="btn bg-main text-main-light w-100">Add to cart</button>
//                 </div>
      
//                 </div>
      
//               )}
//               </div>
//             )}
//     </Fragment>
//   );
// }


/* **************************** */


// import React, { Fragment, useContext } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import Loading from "../Loading";
// import { CartContext } from "../../Context/CartContext";
// import toast from "react-hot-toast";

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getProducts();
//   }, []);
//   async function getProducts() {
    
//     let { data } = await axios.get(
//       `https://ecommerce.routemisr.com/api/v1/products`
//     );
//     console.log(data.data)
//     setProducts(data.data);
//     setLoading(false);
//   }

//   // cart
//   let {addToCart} = useContext(CartContext);
//   async function postToCart(id){
//     let {data}= await addToCart(id)
//     console.log(data);
//     if(data.status == 'success'){
//       toast.success(data.message)
//     }
//   }
//   return (
//     <Fragment>
//       {loading ? (
//         <Loading/>
//        ) : (
//         <div className="row justify-content-center align-items-center my-5 g-5 ">
//         {products.map((product)=>
//           <div className=" col col-lg-2 col-md-3" key={product.id}>
//           <NavLink to={`/productDetails/${product.id}`}>
//           <div className="product p-3">
//           <img src={product.imageCover} alt={product.title} className="w-100"/>
//           <span className="text-main font-sm">{product.category.name}</span>
//           <h3 className="h5">{product.title.split(' ').splice(0,2).join(' ')}</h3>
//           <div className="d-flex justify-content-between align-items-center py-3 font-sm">
//           <span>{product.price} EGP</span>
//           <span><i className=" fas fa-star rating-color"></i> {product.ratingsAverage}</span>
//           </div>
//            <button onClick={()=>postToCart(product.id)} className="btn bg-main text-main-light w-100">Add to cart</button>
//           </div>

//           </NavLink>
//           </div>

//         )}
//         </div>
//       )}
//     </Fragment>
//   );
// }
