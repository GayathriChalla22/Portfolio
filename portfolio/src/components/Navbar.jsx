import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

function Navbar() {
  return (
        <>
        <ul className="nav nav-pills d-flex justify-content-end align-items-center gap-4 pe-5 fixed-top">
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-white" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-white" href="#">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-white" href="#">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-white">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-decoration-none text-white">Contact</a>
        </li>
      </ul>
        </>
  )
}

export default Navbar
