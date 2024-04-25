import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { motion } from 'framer-motion';
import Sparkle from 'react-sparkle'

function Navbar() {
  const [currentSection, setCurrentSection] = useState(""); 
  
  
  
  // Effect to update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const educationSection = document.getElementById("education");
      const skillsSection = document.getElementById("skills");
      const projectsSection = document.getElementById("projects");
      const contactSection = document.getElementById("contact");
      const navbar=document.getElementById("nav");

      const scrollPosition = window.scrollY;
      if(scrollPosition > 700){
        navbar.style.boxShadow="2px 2px 5px 2px var(--primary-purple)"
      }else{
        navbar.style.boxShadow=""
      }
      const offsetAdjustment = 10; 

      if (
        scrollPosition >= aboutSection.offsetTop - offsetAdjustment &&
        scrollPosition < educationSection.offsetTop - offsetAdjustment
      ) {
        setCurrentSection("about");
      } else if (
        scrollPosition >= educationSection.offsetTop - offsetAdjustment &&
        scrollPosition < skillsSection.offsetTop - offsetAdjustment
      ) {
        setCurrentSection("education");
      } else if (
        scrollPosition >= skillsSection.offsetTop - offsetAdjustment &&
        scrollPosition < projectsSection.offsetTop - offsetAdjustment
      ) {
        setCurrentSection("skills");
      } else if (
        scrollPosition >= projectsSection.offsetTop - offsetAdjustment &&
        scrollPosition < contactSection.offsetTop - offsetAdjustment
      ) {
        setCurrentSection("projects");
      } else if (scrollPosition >= contactSection.offsetTop - offsetAdjustment) {
        setCurrentSection("contact");
      }else if(scrollPosition < aboutSection.offsetTop ){
        setCurrentSection("home")
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);
  

  // Define tap variants for animations
  const tapVariants = {
    tap: {
      scale: 0.9,
      rotate: 45,
      borderBottomRightRadius:"50%",
      borderBottom:"4px solid #A1045A",
      transition: {duration:0.02},
    }
  };

  return (
    <>
      <ul className="nav nav-pills d-flex justify-content-end align-items-center gap-4 pe-5 position-fixed top-0 overflow-hidden end-0 w-100 " id="nav">
        <motion.li className="nav-item"  variants={tapVariants} whileTap="tap">
        <a className={`nav-link text-decoration-none text-white ${currentSection === "about" ? "active" : ""}`} href="#about">About</a>
        </motion.li>
        <motion.li className="nav-item"  whileTap={tapVariants.tap}>
        <a className={`nav-link text-decoration-none text-white ${currentSection === "education" ? "active" : ""}`} href="#education">Education</a>
        </motion.li>
        <motion.li className="nav-item"  whileTap={tapVariants.tap}>
        <a className={`nav-link text-decoration-none text-white ${currentSection === "skills" ? "active" : ""}`} href="#skills" >Skills</a>
        </motion.li>
        <motion.li className="nav-item"  whileTap={tapVariants.tap}>
        <a className={`nav-link text-decoration-none text-white ${currentSection === "projects" ? "active" : ""}`} href="#projects" >Projects</a>
        </motion.li>
        <motion.li className="nav-item"  whileTap={tapVariants.tap}>
        <a className={`nav-link text-decoration-none text-white ${currentSection === "contact" ? "active" : ""}`} href="#contact" >Contact</a>
        </motion.li>
      </ul>
    </>
  );
}

export default Navbar;
