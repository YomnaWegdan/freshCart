import { useFormik } from 'formik'
import React, { Fragment } from 'react'

export default function Register() {
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validate:registerValidation,
      onSubmit:registerSubmit
  })

  function registerSubmit(values){
    console.log(formik);
    console.log(values)
  }

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
    else if(/^[A-Z][\w@]{6,8}$/.test(values.name)){
      errors.

      

    }


    return errors
  }
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
                {formik.errors.name?<div className='alert alert-danger p-2'>{formik.errors.name}</div>:''}

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="Email"
                  name="email"
                  type="email"                   
                />

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
                  placeholder="Password"
                  name="password"
                  type=" password"
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                />
                <input
                className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                placeholder="RePassword"
                name="password"
                type=" password"
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
              />
              
              <input
              className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
              placeholder="Phone"
              name="phone"
              type="tel"
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur}
            />
                <button className="btn bg-main text-white ">Register</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
