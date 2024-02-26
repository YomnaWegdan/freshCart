import React, { Fragment, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";
import { userContext } from "../../Context/UserContext";
import { getCartItems, useGetCart } from "../../CustomHooks/useCart";
export default function Navbar() {
  let { userToken, setUserToken } = useContext(userContext);
  let navigate = useNavigate();
  let { data } = useGetCart("getCart", getCartItems);
  console.log(data)
  console.log(data?.data.numOfCartItems)

  function Logout() {
    localStorage.removeItem("userToken");
    setUserToken(null);
    navigate("/login");
  }
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src={logo} alt="logo-img" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {userToken != null ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link " aria-current="page" to={"/"}>
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/cart"}>
                      Cart{" "}
                      <div className="text-main p-2 rounded-circle position-absolute top-0 end-0 ">
                        {data?.data.numOfCartItems}
                      </div>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/products"}>
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/categories"}>
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/brands"}>
                      Brands
                    </NavLink>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <NavLink className="nav-link " to={"https://www.facebook.com/"}>
                  <i className=" fa fa-brands fa-facebook-f"></i>
                </NavLink>
                <NavLink className="nav-link " to={"https://www.twitter.com/"}>
                  <i className=" fa fa-brands fa-twitter"></i>
                </NavLink>
                <NavLink
                  className="nav-link "
                  to={"https://www.instagram.com/"}
                >
                  <i className=" fa fa-brands fa-instagram"></i>
                </NavLink>
                <NavLink className="nav-link " to={"https://www.youtube.com/"}>
                  <i className=" fa fa-brands fa-youtube"></i>
                </NavLink>
              </li>

              {userToken != null ? (
                <>
                  <li className="nav-item">
                    <span
                      onClick={Logout}
                      className="nav-link  cursor-pointer "
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/register"}>
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link " to={"/login"}>
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
