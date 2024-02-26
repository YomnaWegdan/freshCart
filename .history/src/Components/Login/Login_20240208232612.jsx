import axios from "axios";
import { useFormik } from "formik";
import React, { Fragment, createContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { userContext } from "../../Context/UserContext";

export default function Login() {
  const [apiError, serApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let {setUserContext} = createContext(userContext)

  let validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Email is not Valid"),
    password: Yup.string()
      .required("Password is required")
      .matches(/[A-Z][\w @]{5,9}/, "invalid password ex(Ali@123)"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      
    },
    validationSchema,
    onSubmit: loginValidation,
  });


  async function loginValidation(values) {
    console.log(values)
    setLoading(true);
    let { data } = await axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((error) => {
        serApiError(error.response.data.message);
        setLoading(false);
      });
    if (data.message === "success") {
      setLoading(false);

      localStorage.setItem("userToken", data.token);
      setUserContext(data.token);

      navigate("/");
    }
  }

  return (
    <Fragment>
      <section className="register py-5  ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center  align-content-center">
            <div className=" col-md-12">
              <h3>Register Now:</h3>
              <form onSubmit={formik.handleSubmit}>
                {apiError ? (
                  <div className="alert alert-danger p-2">{apiError}</div>
                ) : (
                  ""
                )}

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className="alert alert-danger p-2">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-4"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className="alert alert-danger p-2">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}

                <div className="d-flex justify-content-between">
                  {loading ? (
                    <button type=" button" className="btn bg-main text-white ">
                      <ThreeDots
                        visible={true}
                        height="25"
                        width="25"
                        color="white"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />{" "}
                    </button>
                  ) : (
                    <button
                      disabled={!(formik.dirty && formik.isValid)}
                      className="btn bg-main text-white "
                      type="button"
                    >
                      Login
                    </button>
                  )}
                  <NavLink to={"/register"}>Register Now</NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
