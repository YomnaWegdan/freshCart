import { useFormik, validateYupSchema } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function Login() {
  let formik = useFormik({
    email:'',
    password:''
  },validateYupSchema )

  return (
    <div>
      
    </div>
  )
}