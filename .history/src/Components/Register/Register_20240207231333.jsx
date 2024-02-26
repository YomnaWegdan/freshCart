import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:''
    }
  })
  return (
    <div>
      
    </div>
  )
}
