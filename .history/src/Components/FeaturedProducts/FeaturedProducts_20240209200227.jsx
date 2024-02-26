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
        <div cl></div>
        <ThreeCircles
          visible={true}
          height="25"
          width="25"
          color="white"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <div></div>
      )}
    </Fragment>
  );
}
