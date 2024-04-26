
import './App.css'
import About  from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import EducationModal from './components/EducationModal'

function App() {

  return (
    <main className="text-white body_background">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <EducationModal/>
      <Contact/>
    </main>
  )
}

export default App