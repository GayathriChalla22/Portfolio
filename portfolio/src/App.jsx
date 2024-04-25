
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projets'
import Skills from './components/Skills'
function App() {

  return (
    <main className="text-white body_background">
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App