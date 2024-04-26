import React from 'react'
import '../App.css'
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import javascript from '../assets/skills/javascript.png'
import react from '../assets/skills/react.png'
import bootstrap from '../assets/skills/bootstrap.png'
import tailwind from '../assets/skills/tailwind.png'
import rest from '../assets/skills/rest.png'
import django from '../assets/skills/django.png'
import c from '../assets/skills/c.png'
import python from '../assets/skills/python.png'
import DS from '../assets/skills/DS.png'
import git from '../assets/skills/git.png'
import github from '../assets/skills/github.png'
import vsc from '../assets/skills/vsc.png'
import postman from '../assets/skills/postman.png'

function Projects() {
  return (
    <div className='w-100 d-flex flex-column justify-content-center align-items-center'  id="projects">
      <section className='frontend'>
        <h3>Frontend Technologies</h3>
        <section className='inner'>
        <div className="circle">
          <img src={html} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={css} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={javascript} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={react} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={bootstrap} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={tailwind} alt="" />
          <h4></h4>
        </div>
        </section>
      </section>
      <section className='technologies'>
        <section className='backend'>
          <h3>Backend Technologies</h3>
          <section className="inner">
        <div className="circle">
          <img src={django} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={rest} alt="" />
          <h4></h4>
        </div>
        </section>
        </section>
        <section className='languages'>
          <h3>Programming Languages</h3>
          <section className="inner">
        <div className="circle">
          <img src={python} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={DS} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={c} alt="" />
          <h4></h4>
        </div>
        </section>
        </section>
      </section>
      <section className='tools'>
        <h3>Tools</h3>
        <section className="inner">
      <div className="circle">
          <img src={git} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={github} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={vsc} alt="" />
          <h4></h4>
        </div>
        <div className="circle">
          <img src={postman} alt="" />
          <h4></h4>
        </div>
        </section>
      </section>
    </div>
  )
}

export default Projects
