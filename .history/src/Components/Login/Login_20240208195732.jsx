import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Login() {
  let validationSchema = Yup.object({
    email:Yup.string().required().email('Email is ')

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
