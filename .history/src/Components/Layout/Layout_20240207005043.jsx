import React, { Fragment } from 'react'
import style from './'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>   
    </Fragment>
  )
}
