import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { Fragment } from 'react'

export default function Register() {

  let validationSchema = Yup.object({
    name:Yup.string().required('name is required').min(3, 'min length is 3').max(10 , 'Max length is 10'),
    email:Yup.string().required('email is required').email('invalid '),
    password:Yup.string().required('password is required').matches(/^[A-Z][\w @]{5,9} $/, 'invalid password ex(Ali@123)'),
    rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password'),'rePassword not match with password']),
    phone:Yup.string().required('phone is required').matches(/^01[0125][\d]{9}$/, 'invalid phone'),

  })

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validationSchema,
      onSubmit:registerSubmit
  })

  function registerSubmit(values){
    console.log(formik);
    console.log(values)
  }
/*
without Yup  => validate:registerValidation replace by validationSchema
  function registerValidation(values){
    let errors={};
    if(!values.name){
      errors.name = 'name is required'
    }
    else if(values.name.length<3){
      errors.name = 'min length is 3'
    }
    else if(values.name.length>10){
      errors.name = 'Max length is 10'
    }

    if(!values.password){
      errors.password = 'password is required'
    }
    else if(!(/^[A-Z][\w@]{6,8}$/.test(values.password))){
      errors.password='invalid password ex(Ali@123)'
    }


    return errors
  }
  */
  return (
    <Fragment>
      <section className="contact py-5  ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center  align-content-center">
            

            <div className=" col-md-12">
              <h3>Register Now:</h3>
              <form onSubmit={formik.handleSubmit}>
              <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
                  placeholder="userName" id='name'
                  name="name"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name?<div className='alert alert-danger p-2'>{formik.errors.name}</div>:''}

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="Email"
                  name="email"
                  type="email"                   
                />
                {formik.errors.email && formik.touched.email?<div className='alert alert-danger p-2'>{formik.errors.email}</div>:''}


                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
                  placeholder="Password"
                  name="password"
                  type=" password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password?<div className='alert alert-danger p-2'>{formik.errors.password}</div>:''}

                <input
                className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                placeholder="RePassword"
                name="password"
                type=" password"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
              />
              {formik.errors.rePassword && formik.touched.rePassword?<div className='alert alert-danger p-2'>{formik.errors.rePassword}</div>:''}

              
              <input
              className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
              placeholder="Phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
            />
            {formik.errors.phone && formik.touched.phone?<div className='alert alert-danger p-2'>{formik.errors.phone}</div>:''}

                <button className="btn bg-main text-white ">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
