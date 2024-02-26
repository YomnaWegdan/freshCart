import axios from "axios";
import { useFormik } from "formik";
import React, { Fragment, useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function ForgetPassword() {

    const [apiError, serApiError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataApi, setData] = useState([]);

    let navigate = useNavigate()
  
    let validationSchema = Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("Email is not Valid"),
      });
    
      let formik = useFormik({
        initialValues: {
          email: "",
          
        },
        validationSchema,
        onSubmit: loginSubmit,
      });
    
    
      async function loginSubmit(values) {
        console.log(values)
        setLoading(true);
        let { data } = await axios
          .post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values)
          .catch((error) => {
            console.log(error)
            serApiError(error.response.data.message);
            setLoading(false);
          });
          setData(data)
        if (data.statusMsg === "success") {
          setLoading(false);

    
        //   localStorage.setItem("userToken", data.token);
        //   setUserToken(data.token);
        //   navigate('/');
        console.log('success')
    
        }
      }

      let validationSchemaCode = Yup.object({
        resetCode: Yup.string()
          .required("Code is required")
          .matches(/),

    
      let formikCode = useFormik({
        initialValues: {
            resetCode: "",
          
        },
        validationSchemaCode,
        onSubmit: ResetCode,
      });
      async function ResetCode(values){

        if (dataApi.statusMsg === "success") {

        let { data } = await axios
        .post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode
        `, values)
        .catch((error) => {
          console.log(error)
          serApiError(error.response.data.message);
          setLoading(false);
        });
    }

      }



  return (
    <div>
        <h2 className="h5">Please Enter your verification code</h2>
        <form onSubmit={formik.handleSubmit}>
        {apiError && (
          <div className="alert alert-danger p-2">{apiError}</div>
        )}

        dataApi.statusMsg === "success" ? (
            <input
            className="form-control my-4"
            name="code"
            placeholder="Enter Code"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="alert alert-danger p-2">
              {formik.errors.email}
            </div>
          )}
          ) :
        <input
          className="form-control my-4"
          name="email"
          type="email"
          placeholder="Enter Email"

          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="alert alert-danger p-2">
            {formik.errors.email}
          </div>
        )}
       

{loading ? (
  <button type="button" className="btn bg-main text-white ">
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
) : 
  (
    <button type="submit" className="btn bg-main text-white">
      Verify
    </button>
  )
}
      </form>
      
    </div>
  )
}
