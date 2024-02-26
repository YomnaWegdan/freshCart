import React, { Fragment, useState } from 'react'
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

  async function getProductDetails(id){
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
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
          .col<div class="d-flex">
            <div class="flex-shrink-0">
              <img src="#" alt="" width="300" />
            </div>
            <div class="flex-grow-1 ms-3">
              <h5 class="mt-0">Media heading</h5>
              <p>
                This is some content from a media component. You can replace
                this with any content and adjust it as needed.
              </p>
            </div>
          </div>
          
        </div>)}
        </Fragment>
  )
}

