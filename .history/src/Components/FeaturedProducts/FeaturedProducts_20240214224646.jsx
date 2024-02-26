import axios from "axios";
import React, { Fragment } from "react";
import { useQuery } from "react-query";


export default function FeaturedProducts() {
  function getFeaturedProducts(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }
  let {isLoading , isError , data , is} = useQuery('featuredProducts', getFeaturedProducts);
  console.log(query)

  return (
    <Fragment>
     
    </Fragment>
  );
}





// import React, { Fragment } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { ThreeCircles } from "react-loader-spinner";
// import { NavLink } from "react-router-dom";

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
//   return (
//     <Fragment>
//       {loading ? (
//         <div className="row justify-content-center align-items-center vh-100">
//         <ThreeCircles
//           visible={true}
//           height="100"
//           width="100"
//           radius="9"
//           ariaLabel="three-dots-loading"
//           wrapperStyle={{}}
//           wrapperClass="text-main justify-content-center"
//         />
//         </div>
//       ) : (
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
//           <button className="btn bg-main text-main-light w-100">Add to cart</button>
//           </div>

//           </NavLink>
//           </div>

//         )}
//         </div>
//       )}
//     </Fragment>
//   );
// }
