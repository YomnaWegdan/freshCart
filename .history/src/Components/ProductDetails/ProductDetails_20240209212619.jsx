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
    getProductDetails();
  }, []);

  async function getProductDetails(id){
    apiKey =
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    console.log(data)
    setDetails(data);
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
          <div className='details'>
          <img src={details.imageCover} alt={details.title} className="w-100"/>
          </div>
          </div> 
        </div>)}
        </Fragment>
  )
}

