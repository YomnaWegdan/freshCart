import React, { Fragment } from 'react'
import style from './TempleteName.module.css'
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

import React from 'react'

export default function Layout() {
  return (
    <div>
      
    </div>
  )
}
