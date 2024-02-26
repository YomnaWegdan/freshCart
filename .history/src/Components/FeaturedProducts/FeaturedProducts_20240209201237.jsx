import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeCircles } from "react-loader-spinner";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    setLoading(false);
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );
    setProducts(data.data);
    setLoading(true);
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
          wrapperClass="text-main"
        />
        </div>
      ) : (
        <div className="row justify-content-center align-items-center ">
        {products.map((product)=>
          <div className=" col col-lg-2 col-md-3">
          <img src={product.imageCover} alt={product.<ul class="list-unstyled">
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
          }/>

          </div>

        )}
        </div>
      )}
    </Fragment>
  );
}
