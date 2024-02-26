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
        onSubmit: emailSubmit,
      });
    
    
      async function emailSubmit(values) {
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
          .matches(/[\d]{6}/)
})

    
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
          console.log('err', error)
        //   serApiError(error.response.data.message);
          setLoading(false);
        });

        console.log(data)
        if (data.status === "Success") {
            setLoading(false);
            console.log('ss', 'success')
          }
    }
      }

      let formikResetPass = useFormik({
        initialValues: {
            currentPassword:"",
            password:"",
            rePassword:""
          
        },
        validationSchemaCode,
        onSubmit: ResetCode,
      });

      let validationSchemaResetPass = Yup.object({
       
        password: Yup.string()
          .required("password is required")
          .matches(/^[A-Z][\w @]{5,9}$/, "invalid password ex(Ali@123)"),
        rePassword: Yup.string()
          .required("rePassword is required")
          .oneOf([Yup.ref("password")], "rePassword not match with password"),
        phone: Yup.string()
          .required("phone is required")
          .matches(/^01[0125][\d]{8}$/, "invalid phone"),
      });


      async function ResetCode(values){

        if (dataApi.statusMsg === "success") {

        let { data } = await axios
        .post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode
        `, values)
        .catch((error) => {
          console.log('err', error)
        //   serApiError(error.response.data.message);
          setLoading(false);
        });

        console.log(data)
        if (data.status === "Success") {
            setLoading(false);
            console.log('ss', 'success')
          }
    }
      }




  return (
    <div>
        <h2 className="h5">Please Enter your verification code</h2>
        {dataApi.statusMsg === "success" ? (

        <form onSubmit={formikCode.handleSubmit}>
        {apiError && (
          <div className="alert alert-danger p-2">{apiError}</div>
        )}

            <input
            className="form-control my-4"
            name="resetCode"
            placeholder="Enter Code"
            value={formikCode.values.resetCode}
            onChange={formikCode.handleChange}
            onBlur={formikCode.handleBlur}
          />
          {formikCode.errors.resetCode && formikCode.touched.resetCode && (
            <div className="alert alert-danger p-2">
              {formikCode.errors.resetCode}
            </div>
          )}
          <button type="submit" className="btn bg-main text-white">
          Verify
        </button>
        </form>
          )  :
          <form onSubmit={formik.handleSubmit}>
          {apiError && (
            <div className="alert alert-danger p-2">{apiError}</div>
          )}
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
}
      
    </div>
  )
}
