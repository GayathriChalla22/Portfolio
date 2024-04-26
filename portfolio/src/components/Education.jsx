import React from 'react'
import '../App.css'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo3.png'
import { BsBook,BsCalendar2Date} from "react-icons/bs";
import { GrScorecard } from "react-icons/gr";

function Education() {
  return (
    <div className='education w-100 d-flex flex-column justify-content-center'  id="education">
      <div className='content d-flex align-items-center justify-content-center position-relative me-5 ms-5'>
      <section className='container-outer'>
        <img src={logo} alt="" />
        <div className='text-white ps-4'>Pragati Engineering College</div>
      </section>
      <section className='content-inner d-flex align-items-start'>
      <div className='container d-flex flex-column justify-content-center gap-2  align-items-center'>
      <BsCalendar2Date className='icon' />
        <div className=''>2019-2023</div>
      </div>
      <div className='container d-flex flex-column text-center justify-content-center gap-2  align-items-center '>
      <BsBook className='icon'/>
        <div className=''>Electronics and Communication Engineering</div>
      </div>
      <div className='container d-flex flex-column justify-content-center text-center gap-2 align-items-center'>
      <GrScorecard className='icon'/>
        <div className=''>8.27 CGPA</div>
      </div>
      <div className="arrow drop-shadow"></div>
      </section>
      </div>
      <div>
      <div className='content d-flex align-items-center justify-content-center position-relative me-5 ms-5'>
      <section className='content-inner d-flex align-items-start'>
      <div className='container d-flex flex-column justify-content-center  gap-2  align-items-center'>
      <BsCalendar2Date className='icon' />
        <div className=''>2017-2019</div>
      </div>
      <div className='container d-flex flex-column text-center justify-content-center gap-2  align-items-center'>
      <BsBook className='icon'/>
        <div className=''>Board Of Intermediate</div>
      </div>
      <div className='container d-flex flex-column justify-content-center text-center gap-2 align-items-center'>
      <GrScorecard className='icon'/>
        <div className=''>9.8 CGPA</div>
      </div>
      <div className="arrow flipped drop-shadow"></div>
      </section>
      <section className='container-outer'>
      <div className='container text-center '>
        <img src={logo2} alt="" />
        <div className='text-white text-center ms-5 '>Aditya Junior College</div>
      </div>
      </section>
      </div>
      </div>
      <div>
      <div className='content d-flex align-items-center  justify-content-center position-relative me-5 ms-5'>
      <section className='container-outer'>
        <img src={logo1} alt="" />
        <div className='text-white ps-4'>Little Soldiers EM School</div>
      </section>
      <section className='content-inner d-flex align-items-start'>
      <div className='container d-flex flex-column justify-content-center gap-2  align-items-center'>
      <BsCalendar2Date className='icon' />
        <div className=''>2017</div>
      </div>
      <div className='container d-flex flex-column text-center justify-content-center gap-2  align-items-center '>
      <BsBook className='icon'/>
        <div className=''>Board Of Seconday School Education </div>
      </div>
      <div className='container d-flex flex-column justify-content-center text-center gap-2 align-items-center'>
      <GrScorecard className='icon'/>
        <div className=''>9.8 CGPA</div>
      </div>
      <div className="arrow drop-shadow"></div>
      </section>
      </div>
      </div>
    </div>
  )
}

export default Education
