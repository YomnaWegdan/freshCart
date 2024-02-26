import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ThreeCircles } from 'react-loader-spinner';
import Slider from "react-slick";
import toast from 'react-hot-toast';
import { CartContext } from '../../Context/CartContext';

export default function ProductDetails() {

  //to get id
  let {id} = useParams() // return variable that i send in path id => (6428ead5dc1175abc65ca0ad) from http://localhost:3000/productDetails/6428ead5dc1175abc65ca0ad
  console.log(id)



  async function getProductDetails(id){
    const apiKey =`https://ecommerce.routemisr.com/api/v1/products/${id}`;
    const {data} = await axios.get(apiKey);
    setDetails(data.data);
    setLoading(false);
  }

    //cart
    let {addToCart} = useContext(CartContext);
    async function postToCart(id){
      let {data}= await addToCart(id)
      console.log(data);
      if(data.status == 'success'){
        toast.success(data.message)
      }
    }

  //slider
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Fragment>
      {loading ? (
        <div className="row justify-content-center align-items-center vh-100">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="text-main justify-content-center"
        />
        </div>
      ) : (
        <div className="row justify-content-center align-items-center  vh-100 ">
          <div className='col-md-4'>
          
          <Slider {...settings}>
              {details.images.map((image)=> 
                <img src={image} alt={details.title} key={details.id} className="w-100"/>)}
          </Slider>
          </div> 
          <div className='col-md-8'>

          <h3 className="h5">{details.title}</h3>
          <p className='py-3'>{details.description}</p>
          <span className="text-main font-sm">{details.category.name}</span>
          <div className="d-flex justify-content-between align-items-center py-3 font-sm">
          <span>{details.price} EGP</span>
          <span><i className=" fas fa-star rating-color"></i> {details.ratingsAverage}</span>
          </div>
          <button onClick={()=> postToCart(details.id)} className="btn bg-main text-main-light w-100">Add to cart</button>

          </div>
        </div>)}
        </Fragment>
  )
}

// import React, { Fragment, useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { ThreeCircles } from 'react-loader-spinner';
// import Slider from "react-slick";
// import toast from 'react-hot-toast';
// import { CartContext } from '../../Context/CartContext';

// export default function ProductDetails() {
//   const [details, setDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   //to get id
//   let {id} = useParams() // return variable that i send in path id => (6428ead5dc1175abc65ca0ad) from http://localhost:3000/productDetails/6428ead5dc1175abc65ca0ad
//   console.log(id)

//   useEffect(() => {
//     getProductDetails(id);
//   }, []);

//   async function getProductDetails(id){
//     const apiKey =`https://ecommerce.routemisr.com/api/v1/products/${id}`;
//     const {data} = await axios.get(apiKey);
//     setDetails(data.data);
//     setLoading(false);
//   }

//     //cart
//     let {addToCart} = useContext(CartContext);
//     async function postToCart(id){
//       let {data}= await addToCart(id)
//       console.log(data);
//       if(data.status == 'success'){
//         toast.success(data.message)
//       }
//     }

//   //slider
//   let settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay:true,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

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
//         <div className="row justify-content-center align-items-center  vh-100 ">
//           <div className='col-md-4'>
          
//           <Slider {...settings}>
//               {details.images.map((image)=> 
//                 <img src={image} alt={details.title} key={details.id} className="w-100"/>)}
//           </Slider>
//           </div> 
//           <div className='col-md-8'>

//           <h3 className="h5">{details.title}</h3>
//           <p className='py-3'>{details.description}</p>
//           <span className="text-main font-sm">{details.category.name}</span>
//           <div className="d-flex justify-content-between align-items-center py-3 font-sm">
//           <span>{details.price} EGP</span>
//           <span><i className=" fas fa-star rating-color"></i> {details.ratingsAverage}</span>
//           </div>
//           <button onClick={()=> postToCart(details.id)} className="btn bg-main text-main-light w-100">Add to cart</button>

//           </div>
//         </div>)}
//         </Fragment>
//   )
// }


