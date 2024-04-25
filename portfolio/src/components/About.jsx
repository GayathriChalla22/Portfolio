import React from 'react'
import '../App.css'
import img1 from '../assets/img2.jpeg'
import Sparkle from 'react-sparkle'

function About() {

  return (
    <div className='remaining w-100 d-flex flex-column justify-content-center align-items-center' id="about">
      <div className="card main-card text-center">
      <Sparkle color={'#A1045A'} count={150} minSize={8} maxSize={13}/>
        <div className="card-body card-content d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title title color_primary_purple font_xl">About Me</h5>
          <p className="card-text-content font_small ">Proficiency in Python. Have hands-on experience in HTML, CSS, JavaScript. Expertise
                in responsive and adaptive design ensures optimal user experiences across devices.
                Ability to translate UI designs into functional code with accuracy and efficiency.
                </p>
          <a href="#" className="btn resume bg_primary_purple text-white fw-medium">Resume</a>
        </div>
      </div>
      <div className=" picture card d-flex justify-content-center align-items-center">
        <img src={img1} className='card-card-img-top mt-2 rounded-4' alt="" />
        <div className="card-body text-center">
          <h5 className="card-title  d-flex align-items-center justify-content-center font_medium"><span className="font_large color_primary_purple fw-bold">M</span>ounika</h5>
          <p className="card-text">Aspiring developer, learning and coding my way to success!🚀</p>
          
        </div>
      </div>
      
    </div>

    
  )
}

export default About
