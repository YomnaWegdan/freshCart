import React, { Fragment, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ThreeCircles } from 'react-loader-spinner';
export default function ProductDetails() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  //to get id
  let {id} = useParams() // return variable that i send in path id => (6428ead5dc1175abc65ca0ad) from http://localhost:3000/productDetails/6428ead5dc1175abc65ca0ad
  console.log(id)

  useEffect(() => {
    getProductDetails(id);
  }, []);

  async function getProductDetails(id){
    const apiKey =`https://ecommerce.routemisr.com/api/v1/products/${id}`;
    const {data} = await axios.get(apiKey);
    setDetails(data.data);
    setLoading(false);
  }

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
        <div className="row justify-content-center align-items-center my-5  ">
          <div className='col-md-4'>
          <img src={details.imageCover} alt={details.title} className="w-100"/>
          </div> 
          <div className='col-md-8'>

          <span className="text-main font-sm">{details.category.name}</span>
          <h3 className="h5">{details.title}</h3>
          <div className="d-flex justify-content-between align-items-center py-3 font-sm">
          <span>{details.price} EGP</span>
          <span><i className=" fas fa-star rating-color"></i> {details.ratingsAverage}</span>
          </div>
          <button className="btn bg-main text-main-light w-100">Add to cart</button>

          </div>

        </div>)}
        </Fragment>
  )
}

