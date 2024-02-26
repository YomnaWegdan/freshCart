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
      <section className="contact py-5 vh-100 ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center justify-content-center align-content-center">
            

            <div className=" col-md-12">
              <h3>Register </h3>
              <form onClick={(e)=> e.preventDefault()}>
              <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="userName"
                  name="name"
                />
                <label className=" d-none position-absolute start-0 ">userName</label>

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
                  placeholder="userAge"
                  name="age"
                  type="number"
                />
                <label className=" d-none position-absolute start-0 " >userAge</label>

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 mb-5"
                  placeholder="userEmail"
                  name="email"
                  type="email"                   
                />
                <label className=" d-none position-absolute start-0 " >userEmail</label>

                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                  placeholder="userPassword"
                  name="password"
                  type=" password"
                />
                <label className=" d-none position-absolute start-0 " >userPassword</label>
                <button className="">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
