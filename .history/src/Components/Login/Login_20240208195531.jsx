import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Login() {
  let formik = useFormik({
    initialValues:{
    email:'',
    password:''
  },validationSchema,
  onSubmit: loginValidation} )

  function loginValidation(){

  }
  let va

  
  return (
    <div>
      
    </div>
  )
}
