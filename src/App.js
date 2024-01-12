import './App.css'
import Header from './Components/Header'
import Skills from './Components/Sections/Skills'
import Contact from './Components/Sections/Contact'
import Projects from './Components/Sections/Projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Skills />
        <Contact />
        <Projects />
      </main>
    </>
  )
}

export default App
