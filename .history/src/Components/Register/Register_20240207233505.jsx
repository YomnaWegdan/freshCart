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
    }, onSubmit:registerSubmit
  })
  function registerSubmit(){

  }
  return (
    <Fragment>
      <section className="contact py-5  ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center  align-content-center">
            

            <div className=" col-md-12">
              <h3>Register Now:</h3>
              <form >
              <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="userName" id='name'
                  name="name"
                />

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 mb-5"
                  placeholder="Email"
                  name="email"
                  type="email"                   
                />

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                  placeholder="Password"
                  name="password"
                  type=" password"
                />
                <input
                className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                placeholder="RePassword"
                name="password"
                type=" password"
              />
              
              <input
              className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
              placeholder="userAge"
              name="age"
              type="number"
            />
                <button className="">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
