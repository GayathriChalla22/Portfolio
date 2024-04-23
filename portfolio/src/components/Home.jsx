import React from 'react'
import '../App.css'
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className='home w-100 d-flex flex-column justify-content-center align-items-center'>
      {/* <h1>Hi, there</h1> */}
      <h1 className='font_large'>I am Mounika Sangana</h1>
      <ReactTyped className='font_large color_primary_purple' strings={["Frontend Developer","Django Developer","Python Developer","Full Stack Developer"]} 
      typeSpeed={60}
      backSpeed={50}
      loop />
    </div>
  )
}

export default Home
