import React from 'react'
import '../App.css'
import { ReactTyped } from "react-typed";
import Sparkle from 'react-sparkle'

function Home() {
  return (
    <div className='home w-100 d-flex flex-column justify-content-center align-items-center' id="home" style={{position:"relative"}} >
      <Sparkle color={'#FFF'} count={100} minSize={5} maxSize={10} />
      <h1 className='font_large'>I am Mounika Sangana</h1>
      <ReactTyped className='font_large color_primary_purple fw-bold' strings={["Frontend Developer","Django Developer","Python Developer","Full Stack Developer"]} 
      typeSpeed={60}
      backSpeed={50}
      loop />
    </div>
  )
}

export default Home
