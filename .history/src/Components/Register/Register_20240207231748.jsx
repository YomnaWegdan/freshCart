import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    }
  })
  function register
  return (
    <div>
      
    </div>
  )
}
