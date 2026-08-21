
import './App.css'
import About from './components/About'
import Articles from './components/Articles'
import BackToTop from './components/BackToTop'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'


function App() {

  return (
    <div>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Service />
          <Education />
          <Articles />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
    </div>
  )
}

export default App
