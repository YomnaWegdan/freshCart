import axios from "axios";
import { useFormik } from "formik";
import React, { Fragment, useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function ForgetPassword() {

    const [apiError, serApiError] = useState(null);
    const [loading, setLoading] = useState(false);
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
            serApiError(error.response.data.message);
            setLoading(false);
          });
        if (data.message === "success") {
          setLoading(false);
    
          localStorage.setItem("userToken", data.token);
          setUserToken(data.token);
          navigate('/');
          console.log('success')
    
        }
      }



  return (
    <div>
      <h2>Please Enter your verification code</h2>
      <input className=' form-control' />
    </div>
  )
}