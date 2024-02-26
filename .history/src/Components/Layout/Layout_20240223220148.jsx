import React, { Fragment } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <Fragment>
      <Navbar/>
      <div className="container ">     
        <Outlet/>
      </div>           
      <Footer/>   
    </Fragment>
  )
}
