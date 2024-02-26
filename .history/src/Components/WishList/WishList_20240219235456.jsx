import React, { Fragment } from "react";
import {
  getWishList,
  removeFromWishList,
  useGetWishList,
} from "../../CustomHooks/useWishList";
import Loading from "../Loading";

export default function WishList() {
  let { isLoading, isError, error, data } = useGetWishList(
    "getWishList",
    getWishList
  );
  console.log("sss", data?.data.data);

  let { mutate } = useGetWishList("removeWishList", removeFromWishList);

  if (isLoading) return <Loading></Loading>;
  if (isError) return <h3>{error.message}</h3>;
  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data?.data.data.map((product) => (
            <div className="row  my-5 g-5 " key={product.id}>
              <div className=" col col-lg-6  ">
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="w-25"
                />
              </div>
              <div className=" col col-lg-6 align-items-center ">
                <span className="text-main font-sm">
                  {product.category.name}
                </span>

                <h3 className="h5">
                  {product.title.split(" ").splice(0, 2).join(" ")}
                </h3>
                <div className="d-flex justify-content-between align-items-center py-3 font-sm">
                  <span>{product.price} EGP</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </Fragment>
  );
}
