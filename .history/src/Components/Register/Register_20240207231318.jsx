import { useFormik } from 'formik'
import React from 'react'

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name:'',
      email:''
    }
  })
  return (
    <div>
      
    </div>
  )
}
