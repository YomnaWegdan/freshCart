import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Login() {
  let validationSchema = Yup.object({
    email:Yup.string().required('Email is required').email('Email is Valid'),
    password:

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
    <div>
      
    </div>
  )
}
