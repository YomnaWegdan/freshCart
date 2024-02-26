import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" href="">Navbar</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink class="nav-link active" aria-current="page" to={'/'}>Home</NavLink>
          </li>
       
          </ul>
        
      
       
      </div>
    </div>
  </nav>
    </Fragment>
  )
}

