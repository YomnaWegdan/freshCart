import React, { Fragment } from "react";
import {
  getWishList,
  removeFromWishList,
  useGetWishList,
  usePostWishList,
} from "../../CustomHooks/useWishList";
import Loading from "../Loading";
import { addToCart, usePostCart } from "../../CustomHooks/useCart";

export default function WishList() {
  let { isLoading, isError, error, data } = useGetWishList("getWishList",getWishList);
  console.log("sss", data?.data.data);

  let { mutate } = usePostWishList( removeFromWishList);

  let {  mutate:addToCartMutate } = usePostCart(addToCart)

  if (isLoading) return <Loading></Loading>;
  if (isError) return <h3>{error.message}</h3>;
  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.data.data.map((product) => (
            <div className="row  my-5 g-5 align-items-center border-1 border-bottom" key={product.id}>
              <div className=" col col-lg-6  ">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-25"
                />
              </div>
              <div className=" col col-lg-6 d-flex  align-items-center">
              <div>
                <span className="text-main font-sm">
                  {product.category.name}
                </span>

                <h3 className="h5">
                  {product.title.split(" ").splice(0, 2).join(" ")}
                </h3>
                <div className="d-flex flex-column justify-content-between align-items-center py-3 font-sm">
                  <span>{product.price} EGP</span>
                  <button onClick={()=> mutate(product.id)} className="btn btn-outline-success ">Remove</button>

                </div>
                </div>
                <button onClick={() => addToCartMutate(product.id)} className="btn bg-main text-main-light w-100">Add to cart</button>

              </div>
            </div>
          ))}
        </>
      )}
    </Fragment>
  );
}