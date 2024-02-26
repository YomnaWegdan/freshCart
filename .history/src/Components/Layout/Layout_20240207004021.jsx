import React from 'react'
import style from './TempleteName.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import { Outlet } from 'react-router-dom'
export default function TempleteName() {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}
