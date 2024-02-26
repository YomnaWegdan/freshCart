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
    }, onSubmit:registerSubmit
  })
  function registerSubmit(){

  }
  return (
    <Fragment>
      <section className="contact py-5 vh-100 ">
        <div className="container h-100">
          <div className="row g-5 h-100 align-items-center justify-content-center align-content-center">
            <div className="col-md-12 pt-5">
              <h2 className="pt-5">CONTACT COMPONENT</h2>
              <div className="d-flex justify-content-center align-items-center my-3">
                <div className="line text-bg-dark"></div>
                <FaStar className=" mx-2 " />
                <div className="line text-bg-dark"></div>
              </div>
            </div>

            <div className=" col-md-12">
              <form onClick={(e)=> e.preventDefault()}>
              <div className={` ${focusedName ? 'focused' : ''} position-relative`}>
              <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 "
                  placeholder="userName"
                  name="name"
                  onChange={()=> setFocusedName(true)}
                />
                <label className=" d-none position-absolute start-0 ">userName</label>
                </div>

                <div className={` ${focusedAge ? 'focused' : ''} position-relative`}>
                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 my-5"
                  placeholder="userAge"
                  name="age"
                  type="number"
                  onChange={()=> setFocusedAge(true)}
                />
                <label className=" d-none position-absolute start-0 " >userAge</label>

                </div>
                <div className={` ${focusedEmail ? 'focused' : ''} position-relative`}>
                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3 mb-5"
                  placeholder="userEmail"
                  name="email"
                  type="email"                   
                  onChange={()=> setFocusedEmail(true)}
                />
                <label className=" d-none position-absolute start-0 " >userEmail</label>

                </div>
                <div className={` ${focusedPassword ? 'focused' : ''} position-relative`}>
                <input
                  className=" form-control border-top-0 border-start-0 border-end-0  border-bottom-3"
                  placeholder="userPassword"
                  name="password"
                  type=" password"
                  onChange={()=> setFocusedPassword(true)}
                />
                <label className=" d-none position-absolute start-0 " >userPassword</label>
                </div>
                <button className="">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
