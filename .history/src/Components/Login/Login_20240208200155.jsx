import { useFormik } from 'formik'
import React from 'react'
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

  function loginValidation(){

  }


  
  return (
    <Fragment>
    <section className="register py-5  ">
      <div className="container h-100">
        <div className="row g-5 h-100 align-items-center  align-content-center">
          <div className=" col-md-12">
            <h3>Register Now:</h3>
            <form onSubmit={formik.handleSubmit}>
            </form>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
  )
}
