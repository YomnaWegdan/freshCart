import axios from 'axios'
import { useFormik } from 'formik'
import React, { Fragment } from 'react'
import * as Yup from 'yup'

export default function Login() {
  let validationSchema = Yup.object({
    email:Yup.string().required('Email is required').email('Email is Valid'),
    password:Yup.string().required('Password is required').matches(/[A-Z][\w @]{5,9}/ , "invalid password ex(Ali@123)")

  })

  let formik = useFormik({
    initialValues:{
    email:'',
    password:''
  },validationSchema,
  onSubmit: loginValidation} )

  async function loginValidation(values){
    let {data} = axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , values)
    

  }


  
  return (
    <Fragment>
    <section className="register py-5  ">
      <div className="container h-100">
        <div className="row g-5 h-100 align-items-center  align-content-center">
          <div className=" col-md-12">
            <h3>Login Now:</h3>
            <form onSubmit={formik.handleSubmit}>
            <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ?<div className="alert alert-danger p-2">{formik.errors.email}</div>  :''}
            <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-4"
                  placeholder="Password"
                  name="password"
                  type=" password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2">{formik.errors.password}</div>:''}

            </form>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}
